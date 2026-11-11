# CARLOS RESERVA V4 — Plan de implementación

**Estado: DISEÑO Y PREPARACIÓN / no publicado.**

## Objetivo
Transformar CARLOS Lavados de Autos a Domicilio en una experiencia que permita solicitar un turno de limpieza automotriz con visibilidad de disponibilidad real y **confirmación manual obligatoria**. Las reservas no deben presentarse como confirmadas hasta la aprobación.

## Identidad visual innegociable
- Mantener **CARLOS** como nombre protagonista.
- Integrar archivo maestro exacto **image-gen-4(9).png**, sin redibujarlo; gran C gris metálica con auto grafito y banda **A DOMICILIO** verde eléctrico.
- Verde eléctrico del logo como acento de llamadas a la acción; #8DFF00 es una **aproximación de prototipo**, no un HEX oficial certificado.
- Negro premium, gris grafito y acero metálico. Tipografía más legible, especialmente en Android.
- Imágenes variadas, autorizadas y correctamente etiquetadas como ilustrativas cuando no sean fotos reales.

## Flujo del cliente (estado final)
1. **Servicio:** lavado exterior / interior / completo / terminaciones, solo si CARLOS confirma que los ofrece.
2. **Vehículo:** auto / SUV / pickup / otro; la duración se configura por caso según parámetros operativos.
3. **Localidad:** Martínez / Acassuso / otras bajo evaluación.
4. **Disponibilidad real:** horario recuperado del proveedor conectado; nunca mostrar franjas fabricadas.
5. **Datos mínimos:** nombre, correo de notificación, teléfono, referencia de zona y requisitos operativos (según el servicio).
6. **Confirmación de solicitud:** estado visible "PENDIENTE DE APROBACIÓN".
7. **Revisión por CARLOS:** traslado, dirección, agua/electricidad, condiciones del lugar, clima, precio y capacidad.
8. **Resultado:** CONFIRMADO / RECHAZADO / REPROGRAMACIÓN PROPUESTA. Informar mediante canales configurados.

## Estados
- Selección en curso: datos aún no enviados.
- Solicitud enviada: registrada por la plataforma, pendiente de aprobación.
- Confirmada: solo después de intervención de CARLOS.
- Rechazada: motivo y alternativa de contacto, si procede.
- Reprogramada/cancelada: reflejada en la agenda.

## Motor recomendado
**Cal.com** como motor de turnos + calendario operativo independiente (Google Calendar si el propietario lo decide).
- Configurar "Requires confirmation" = Always.
- Activar "Unconfirmed bookings still block calendar slots" si está disponible, para impedir que una solicitud pendiente deje el horario libre.
- Revisar email y mensajes de aprobación/rechazo para que el cliente comprenda el estado.
- Configurar la zona horaria America/Argentina/Buenos_Aires.
- Definir duración y buffers por servicio con datos reales, no estimados arbitrariamente.
- Verificar plan y límites actuales antes de fijar automatizaciones o pagos.
- Embed de Cal.com dentro de la sección #turnos, solo tras copiar enlace real del tipo de evento; sin claves privadas en el frontend.

## Modo de prototipo V4 ya creado fuera de GitHub
Existe un ZIP de revisión con el diseño V4 y un flujo de cuatro pasos que abre WhatsApp con una solicitud. **No tiene integración Cal.com ni guarda turnos**. No fusionar ni publicar como agenda real.

## Requisitos de aceptación previa al despliegue
- [ ] Logotipo original visible sin alteraciones, legible y de buena escala.
- [ ] Paleta verde eléctrico validada visualmente frente al maestro.
- [ ] Fotos conceptuales claramente distinguidas de trabajos propios.
- [ ] Menú, textos, contrastes y botones validados en Android y escritorio.
- [ ] Enlace de WhatsApp probado en dispositivo real.
- [ ] Servicio, zonas, insumos, horarios y política por lluvia aprobados.
- [ ] Embed de agenda real cargado de manera segura con su URL exacta.
- [ ] Solicitud creada con confirmación obligatoria.
- [ ] Solicitudes pendientes bloquean cupos según la configuración elegida.
- [ ] Al aprobar, la confirmación y el calendario se actualizan correctamente.
- [ ] Al rechazar/reprogramar, el cliente recibe notificación adecuada.
- [ ] No se filtran direcciones, datos del cliente ni claves en GitHub público.
- [ ] Versión aprobada mediante revisión visual antes de fusionar a main.

## Métricas
Visitas, clics en "Solicitar turno", apertura del calendario, solicitudes registradas, solicitudes aprobadas, cancelaciones y turnos efectivamente completados. Evitar contabilizar clics como reservas.

## Publicación
Rama de trabajo: `develop/carlos-reserva-v4`. Main y la web de GitHub Pages no se cambian hasta aprobación explícita de la versión completa.
