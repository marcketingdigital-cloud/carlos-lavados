"""Gestionar invitaciones después del lavado. La base privada vive fuera del sitio."""
import argparse
import json
import os
import secrets
import sqlite3
from pathlib import Path
from urllib.parse import urlencode

parser = argparse.ArgumentParser(description=__doc__)
commands = parser.add_subparsers(dest="accion", required=True)
invite = commands.add_parser("invitar", help="Usar después de completar el servicio")
invite.add_argument("turno", help="Identificador interno del lavado realizado")
record = commands.add_parser("registrar", help="Registrar la respuesta recibida del cliente del turno")
record.add_argument("codigo")
record.add_argument("estrellas", type=int, choices=range(1, 6))
record.add_argument("--comentario-autorizado", default="", help="Solo texto cuya publicación anónima autorizó el cliente")
commands.add_parser("exportar", help="Imprime el JSON público para opiniones.json")
args = parser.parse_args()
os.umask(0o077)
directory = Path.home() / ".carlos-opiniones"
directory.mkdir(mode=0o700, exist_ok=True)
with sqlite3.connect(directory / "lavados.sqlite") as db:
    db.execute("""CREATE TABLE IF NOT EXISTS lavados (
        turno TEXT PRIMARY KEY, codigo TEXT UNIQUE NOT NULL,
        estrellas INTEGER CHECK(estrellas BETWEEN 1 AND 5), comentario TEXT
    )""")
    if args.accion == "invitar":
        turno = args.turno.strip()
        if not turno:
            parser.error("Indicá el identificador del lavado realizado.")
        db.execute("INSERT INTO lavados(turno,codigo) VALUES(?,?) ON CONFLICT(turno) DO NOTHING",
                   (turno, secrets.token_urlsafe(18)))
        codigo, estrellas = db.execute("SELECT codigo,estrellas FROM lavados WHERE turno=?", (turno,)).fetchone()
        if estrellas is not None:
            parser.error("El lavado ya tiene valoración.")
        mensaje = (f"Mi opinión sobre el lavado {codigo}\n"
                   "Puntaje (1 a 5): \nComentario opcional: \n"
                   "¿Autorizo publicar mi comentario sin mi nombre? (sí/no): ")
        print("https://wa.me/541141427755?" + urlencode({"text": mensaje}))
    elif args.accion == "registrar":
        updated = db.execute("UPDATE lavados SET estrellas=?, comentario=? WHERE codigo=? AND estrellas IS NULL",
                             (args.estrellas, args.comentario_autorizado.strip(), args.codigo))
        if updated.rowcount != 1:
            parser.error("Código inválido o valoración ya registrada.")
        print("Valoración registrada.")
    else:
        reviews = [{"stars": stars, **({"comment": comment} if comment else {})}
                   for stars, comment in db.execute(
                       "SELECT estrellas,comentario FROM lavados WHERE estrellas IS NOT NULL ORDER BY rowid DESC")]
        print(json.dumps(reviews, ensure_ascii=False, indent=2))
