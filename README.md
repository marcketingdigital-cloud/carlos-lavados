# CARLOS — Lavados de Autos a Domicilio

Landing page estática y adaptable para el relanzamiento de CARLOS en Zona Norte (Buenos Aires, Argentina).

## Estado del proyecto
**Código cargado en GitHub. Publicación mediante GitHub Pages pendiente de habilitar y verificar.**

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
- **Marca:** la web NO incluye todavía el logo maestro aprobado, ya que se debe importar el archivo original sin recrearlo. Sustituir el wordmark tipográfico provisorio y el favicon.
- **WhatsApp:** se utiliza `541141427755` para el número comunicado `011 4142-7755`. Comprobar desde un teléfono que abre la cuenta correcta. Si el número de WhatsApp usa `+54 9`, cambiar `WA_NUMBER` en `script.js` y los enlaces de respaldo del HTML.
- **Oferta:** confirmar los servicios reales y las áreas de atención; Martínez y Acassuso son las localidades mostradas.
- **Pruebas:** comprobar formulario, botones, menú móvil y legibilidad en varios dispositivos.
- **Publicidad y medición:** integrar GA4/Google Ads solo cuando estén disponibles las cuentas y preferencias de consentimiento correspondientes.
- **Fotos y reputación:** agregar únicamente trabajos, opiniones y materiales reales y autorizados. No se muestran precios ni reseñas inventadas.

## Actualizaciones
Los cambios se realizan mediante commits en `main`. GitHub Pages volverá a publicar la web automáticamente una vez que esté habilitado.

## Privacidad
Este sitio no tiene backend: no almacena los datos introducidos en el formulario. El navegador abre WhatsApp con un texto preparado y el visitante decide enviarlo. Las consultas se gestionan en WhatsApp, sujeto a sus propias condiciones.
