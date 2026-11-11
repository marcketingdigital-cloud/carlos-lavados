# CARLOS RESERVA — Plan operativo para un único equipo de dos personas
**Versión:** V4.1 | **Estado:** DISEÑO APROBADO EN SU MODALIDAD (confirmación supervisada); tiempos y horarios pendientes de calibración.

## 1. Decisión principal
- **Motor de reservas:** Cal.com (cuenta Individual, un solo organizador).
- **Agenda operativa:** Google Calendar exclusivo para CARLOS, conectado a Cal.com.
- **Personas que ejecutan el servicio:** Carlos + un ayudante, trabajando **juntos**.
- **Capacidad operativa:** **un solo servicio simultáneo**. No crear un enlace para cada trabajador, no habilitar round robin, asientos ni reservas colectivas para este caso.
- **Sitio y hosting:** GitHub Pages es la web de presentación y conversión; Cal.com mantiene disponibilidad, solicitudes y estados. El repositorio público no almacena direcciones, teléfonos, ni tokens.
- **Estado por defecto:** PENDIENTE DE CONFIRMACIÓN. Solo CARLOS aprueba o rechaza.

## 2. Configuración inicial sugerida (VALIDAR ANTES DE ACTIVAR)
| Parámetro | Inicio conservador | ¿Por qué? |
|---|---|---|
| Zona horaria | America/Argentina/Buenos_Aires | Horarios del negocio |
| Organizador | CARLOS (1 usuario Cal.com) | Un equipo, una agenda |
| Calendario de destino | CARLOS - Operaciones | Separación de vida privada |
| Máximo de servicios por día | 2 | Margen para ajustes y movilidad |
| Anticipación mínima | 24 horas | Preparación de trabajo y ruta |
| Horizonte de reservas | 14 días | Ajustable según clima/operación |
| Buffer entre trabajos | 45 minutos provisionales | Traslado y preparación |
| Confirmación | Always / Requiere confirmación | Control del servicio |
| Retener cupo pendiente | Unconfirmed bookings still block calendar slots | Evitar solicitudes sobre el mismo hueco |

**Estos números son supuestos de configuración para prueba**: horarios laborales, servicio, vehículo, tiempos, buffers y coberturas deben confirmarse con Carlos. No publicarlos como disponibilidad real hasta configurarlos.

### Duraciones para validación operativa (NO PUBLICAR COMO HECHOS)
- Lavado exterior de auto: ensayo de 90 minutos.
- Limpieza interior: ensayo de 120 minutos.
- Lavado completo: ensayo de 180 minutos.
- Llantas y terminaciones: ensayo de 90 minutos, si se confirma como servicio independiente.
- SUV/pickup o suciedad extraordinaria: duración a revisar antes de habilitar reserva automática de franja.

**Recomendación para salida inicial:** crear **un solo tipo de evento** `Solicitud de lavado a domicilio` con duración conservadora acordada; validar su viabilidad durante los primeros servicios. Luego separar eventos por duraciones verificadas para que el calendario represente el tiempo real.

## 3. Experiencia del cliente
1. Ve la marca exacta de CARLOS, con tipografía legible, negro premium, gris metálico y **verde eléctrico del logo maestro**.
2. Elige tipo de servicio y vehículo.
3. Informa localidad (zona inicial Martínez y Acassuso; fuera de la zona solo bajo consulta).
4. Observa **horarios que trae realmente Cal.com**; no generar franjas desde JavaScript estático.
5. Completa nombre, correo de confirmación, teléfono y datos operativos mínimos.
6. Acepta aviso de privacidad y envía solicitud.
7. Ve: **"Solicitud recibida. El turno NO está confirmado: CARLOS lo revisará y te avisará."**
8. Carlos comprueba domicilio, trayecto, acceso, agua/electricidad según el método, condiciones meteorológicas, costo y capacidad del equipo.
9. Carlos **aprueba / rechaza / ofrece reprogramación**; el cliente recibe la notificación correspondiente.

## 4. Política contra la doble reserva
- La misma cuenta y el mismo calendario para todos los servicios.
- No liberar automáticamente horarios mientras hay una solicitud pendiente, si la opción de retención está disponible.
- El tiempo de buffer y la duración forman parte de la disponibilidad.
- Bloquear en Google Calendar los días no laborables, mantenimiento, compromisos y traslados extraordinarios.
- La aprobación nunca crea un trabajo paralelo a otro.

## 5. Diseño de la interfaz de turnos
- CTA principal: **Solicitar turno** (no "Turno confirmado").
- En el formulario: "Elegí el horario que preferís. Confirmaremos por mensaje después de revisar tu domicilio".
- Paso 1: servicio + vehículo.
- Paso 2: zona + condiciones esenciales.
- Paso 3: calendario real embebido (Cal.com) con disponibilidad.
- Paso 4: revisar y solicitar; estado pendiente.
- WhatsApp es canal secundario para dudas; **un mensaje de WhatsApp no es una reserva guardada**.
- En móvil: botones táctiles de mínimo 44 px, contraste suficiente, indicadores de progreso, mensajes cortos y estados inequívocos.

## 6. Migración futura a sistema propio
Mantener el sitio desacoplado de Cal.com: componente `BookingProvider` abstracto para cambiar el motor sin rehacer la landing.
Definir un contrato lógico de datos para la migración futura (sin publicar información personal):

```text
Booking
  id_proveedor, id_externo, fecha_hora_inicio, fecha_hora_fin,
  zona, tipo_vehiculo, codigo_servicio,
  estado: solicitado|confirmado|rechazado|reprogramado|cancelado,
  duracion, buffer, fecha_solicitud, origen
```

Las fichas reales de clientes, dirección, contacto, consentimiento y notas de trabajo se guardan en una plataforma privada (NO en GitHub). La exportación/migración exacta dependerá de las herramientas y permisos vigentes del proveedor; no se presupone una API gratuita con permisos completos.

**Fases:**
- **F1 (ahora):** Cal.com + Google Calendar + GitHub Pages, confirmación supervisada.
- **F2:** administración operativa por zonas, recordatorios y rebooking; documentar reglas y métricas.
- **F3:** backend propio, base de datos segura, panel CARLOS, rutas y capacidad de múltiples equipos, migrando datos cuando la exportación esté verificada.

## 7. Pruebas de aceptación
- [ ] Una solicitud queda PENDIENTE hasta intervención.
- [ ] Un horario pendiente no se ofrece de nuevo.
- [ ] Dos servicios no se solapan aunque tengan distinto tipo.
- [ ] La cita aprobada aparece en el calendario operativo.
- [ ] El cliente entiende si está pendiente, confirmado o reprogramado.
- [ ] Un turno rechazado no aparece como confirmado.
- [ ] La dirección y el teléfono del cliente no están en el repositorio público.
- [ ] Los buffers se reflejan en las franjas ofrecidas.
- [ ] Se prueba desde un dispositivo Android con el diseño real.
- [ ] Se verifica que el logo maestro no fue redibujado.
- [ ] Nadie presenta imágenes conceptuales como trabajos realizados.

## 8. Pendientes que requieren información real del negocio
Días y horario de actividad; duración comprobada por servicio/vehículo; requisitos de agua/energía; capacidad de transporte y alcance de zona; criterios de lluvia; política de cancelación; email dedicado; y cuenta Cal.com real.

**Restricción de publicación:** mantener `main` sin cambios hasta aprobar la identidad visual V4 y validar reservas de prueba.
