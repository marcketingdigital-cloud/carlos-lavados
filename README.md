# CARLOS — Lavados de Autos a Domicilio

Landing page estática y adaptable para el relanzamiento de CARLOS en Zona Norte (Buenos Aires, Argentina).

## Estado del proyecto
**Nueva versión preparada con CARLOS RESERVA integrado. GitHub Pages publica la rama `main` cuando el despliegue está habilitado.**

### CARLOS RESERVA — integración funcional
- CTA principal **Solicitar turno** desde cabecera, hero, cierre y barra móvil.
- Agenda pública Cal.com integrada en la sección `#reservar` mediante iframe con enlace externo de respaldo.
- Evento: https://cal.com/carlos-lavados/solicitud-lavado-domicilio
- Confirmación supervisada por Carlos: el horario seleccionado no implica aprobación automática.
- Horarios de atención: lunes a sábado 09:00–18:00, zona America/Argentina/Buenos_Aires; capacidad de un equipo de dos personas.
- Los datos ingresados en el widget son gestionados por Cal.com, **no por GitHub Pages**.
- El iframe requiere conexión a internet y que el navegador permita contenido de Cal.com; botón alternativo para abrirlo fuera de la web.
- La duración de 180 minutos y los 45 de margen posterior se consideran configuración operativa inicial, revisable.

### Funcionalidades
- Diseño responsive (celulares, tablets y escritorio).
- Identidad provisoria de texto, negro premium, acero/gris y verde esmeralda corporativo `#00A86B`.
- Catálogo comercial de servicios y zona de cobertura.
- Formulario que compone una consulta y abre WhatsApp Business. **No envía automáticamente el mensaje**.
- Enlaces directos de WhatsApp por tipo de servicio.
- Menú móvil accesible, FAQ, enlaces internos y CTA visible en celular.
- SEO on-page, Open Graph básico, canonical, robots, sitemap y datos estructurados AutomotiveBusiness.
- Evento `carlos_whatsapp_click` para una futura integración de Google Tag Manager, pero **sin rastreadores activos**.

### Estructura
- `index.html`: estructura y contenido de la landing.
- `styles.css`: estilos responsive y design tokens.
- `script.js`: interacciones, menú y presupuesto por WhatsApp.
- `assets/favicon.svg`: ícono temporal. Reemplazar por el **archivo exacto del logotipo maestro**.
- `robots.txt`, `sitemap.xml`, `.nojekyll`: archivos de publicación e indexación.

## Publicar con GitHub Pages
1. Ir a **Settings → Pages** en este repositorio.
2. En **Build and deployment** seleccionar **Deploy from a branch**.
3. Elegir **main** y **/(root)**, y guardar.
4. Verificar el sitio en: https://marcketingdigital-cloud.github.io/carlos-lavados/

## Lista de revisión obligatoria antes de anunciar
- **Marca:** la web NO incluye todavía el logo maestro aprobado: el repositorio solo contiene `assets/favicon.svg` temporal. Hay que subir el archivo exacto y autorizado, sin redibujarlo. La tipografía de CARLOS permanece como sustituto de accesibilidad hasta entonces.
- **WhatsApp:** se utiliza `541141427755` para el número comunicado `011 4142-7755`. Comprobar desde un teléfono que abre la cuenta correcta. Si el número de WhatsApp usa `+54 9`, cambiar `WA_NUMBER` en `script.js` y los enlaces de respaldo del HTML.
- **Oferta:** confirmar los servicios reales y las áreas de atención; Martínez y Acassuso son las localidades mostradas.
- **Pruebas:** comprobar apertura del iframe en Android/iOS, enlace alternativo, agenda real, mensaje de aprobación, formulario, botones, menú móvil y legibilidad en varios dispositivos. La integración en el sitio todavía necesita prueba específica luego del despliegue.
- **Publicidad y medición:** integrar GA4/Google Ads solo cuando estén disponibles las cuentas y preferencias de consentimiento correspondientes.
- **Fotos y reputación:** agregar únicamente trabajos, opiniones y materiales reales y autorizados. No se muestran precios ni reseñas inventadas.

## Actualizaciones
Los cambios se realizan mediante commits en `main`. GitHub Pages volverá a publicar la web automáticamente una vez que esté habilitado.

## Privacidad
Este sitio no tiene backend propio y no almacena datos del formulario de presupuesto. El navegador abre WhatsApp con un texto preparado y el visitante decide enviarlo. La sección de reservas incrusta una página de Cal.com: los datos de reservas se procesan por Cal.com y sus servicios asociados, bajo sus condiciones y política de privacidad.
