# Configuración Cal.com para CARLOS

**Importante:** una cuenta Cal.com aún no está conectada a este repositorio. Este archivo es una guía; ninguna integración está activa.

## Paso 1. Cuenta
Crear una cuenta de trabajo de CARLOS en https://cal.com/signup. Preferir correo operativo controlado por la empresa. Verificar identidad desde la plataforma.

## Paso 2. Calendario de disponibilidad
Conectar un calendario de trabajo exclusivo de CARLOS, sin añadir datos personales privados a este repositorio.
Zona horaria: `America/Argentina/Buenos_Aires`.

## Paso 3. Primer tipo de evento
Nombre sugerido: `Solicitud de lavado a domicilio — CARLOS`.
Descripción visible: `Elegí un horario disponible. La solicitud queda pendiente de revisión hasta que CARLOS confirme la zona, el traslado y las condiciones del servicio.`
Tipo: presencial en dirección del cliente; confirmar que la ubicación privada no se publique.
Configurar horas y días de trabajo reales, duración real, antelación mínima y márgenes de traslado.

## Paso 4. Confirmación
En las opciones de reserva del tipo de evento:
- `Requires confirmation`: activar y aplicar `Always`.
- `Unconfirmed bookings still block calendar slots`: habilitar si está disponible y es compatible.
- Personalizar mensajes de "Solicitud recibida" y "Confirmada" para evitar ambigüedades.
- Comprobar notificaciones de solicitudes pendientes por correo.

## Paso 5. Preguntas del formulario
Mínimos sugeridos: nombre, correo para confirmación, teléfono, localidad, vehículo, servicio, referencias de acceso y disponibilidad de agua/electricidad (si hace falta).
Solicitar dirección exacta solo cuando sea necesaria; no introducir datos privados en GitHub.

## Paso 6. Embed
Abrir el evento → `Embed` → `Inline` (o `Pop-up via element click` en celular).
Copiar el snippet generado por la cuenta de CARLOS y colocarlo en la landing, en la sección de reservas. No inventar enlaces ni publicar cuentas ficticias.
Colores, fuente y contraste deberán concordar con el logotipo maestro.

## Paso 7. Pruebas obligatorias
1. Crear una reserva de prueba y verificar que quede `Unconfirmed` / pendiente.
2. Comprobar que no se envía "confirmado" antes de aprobar.
3. Revisar que se bloqueen o retengan horarios solicitados, según configuración.
4. Aprobar y verificar notificación al cliente y calendario de trabajo.
5. Rechazar y comprobar aviso.
6. Reprogramar y comprobar actualización.
7. Probar desde un Android en conexión móvil, teclado y tamaño de texto ampliado.

## Paso 8. Integración en GitHub
Solo una vez validado el enlace real, añadir el embed a la rama de trabajo; prueba por revisión, luego merge a main tras aprobación. Nunca publicar claves privadas o tokens en el repositorio público.

## Referencias oficiales
- https://cal.com/features/requires-confirmation
- https://cal.com/embed
