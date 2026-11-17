# CARLOS — Opción 2 aprobada, landing lista para GitHub Pages

Versión visual: 16/11/2026 · estado: **LISTA PARA PUBLICAR / NO DESPLEGADA AUTOMÁTICAMENTE**.

## Qué incluye
- Logo maestro ORIGINAL y SIN redibujar: `assets/logo-maestro-original.png` (archivo binario idéntico al del kit aprobado).
- Diseño negro/grafito, plata y verde #00A86B inspirado en la segunda propuesta aprobada.
- Fotos conceptuales de automóvil negro y detailing. No se atribuyen a trabajos reales de CARLOS.
- Calendario Cal.com integrado: https://cal.com/carlos-lavados/solicitud-lavado-domicilio
- Enlace de respaldo a Cal.com para navegadores con bloqueo de incrustaciones.
- Enlaces de WhatsApp Business: +54 11 4142-7755 (revisar funcionamiento real).
- Navegación y diseño adaptables a celulares. Menú móvil y CTA flotante que se oculta al usar el calendario.

## Cómo publicar sin perder la web vigente
1. Descomprimí este ZIP.
2. En GitHub, entrá a `marcketingdigital-cloud/carlos-lavados`.
3. Elegí `Add file` → `Upload files`, y cargá el CONTENIDO de esta carpeta (archivos raíz y carpeta `assets`).
4. Asegurate de que se respete la carpeta `assets/` y de sustituir los archivos homónimos. Si GitHub no conserva la estructura al arrastrarlos, subí los archivos `assets` por separado desde esa carpeta.
5. Hacé el commit en una rama de pruebas y revisá el cambio antes de integrarlo a `main`.
6. GitHub Pages publica desde `main` cuando se ejecute el workflow habilitado. Verificá en https://marcketingdigital-cloud.github.io/carlos-lavados/.

## Controles previos a la versión definitiva
- Comprobar apertura del calendario y selección de horarios en Brave/Android y Chrome.
- Confirmar el funcionamiento de WhatsApp y de la aprobación manual en Cal.com (ya probados en la versión anterior).
- Corroborar que las imágenes publicitarias conceptuales no se presenten como fotografías de trabajos reales.
- Evitar declarar resultados garantizados, certificaciones, ofertas o reseñas inexistentes.
- Si se decide mostrar a trabajadores y vehículos rotulados, pegar el archivo original de marca directamente sobre los soportes en la pieza final; no utilizar redibujos generados del logo.

## Branding aprobado
Negro premium como base, grafito / gris metálico como soporte, verde #00A86B para CTA y acentos. Logotipo maestro intacto. La imagen `assets/opcion-2-referencia-vertical.png` se incluye solo como referencia creativa y NO se usa como logotipo ni se publica como evidencia de trabajos reales.

## V4.1 — Premium combinada (rama de revisión)
- Rama: `feature/carlos-v4-1-premium`. No fusionar a `main` hasta validar los flujos reales.
- Conserva los archivos de imagen actuales y el logotipo maestro original; ninguna imagen conceptual se presenta como trabajo real.
- Se refina el hero, los botones, la grilla de servicios, las pantallas móviles, los estados de foco y el contenido de confianza.
- Se incorpora una sección de preguntas frecuentes sobre aprobación manual, cobertura y cambios de turno.
- Cal.com mantiene el mismo enlace y el mismo script de incrustación; la configuración de aprobación manual depende de Cal.com y no se modifica desde esta rama.
- Se omite la promoción anterior del 20% hasta nueva aprobación comercial.

### Pruebas necesarias antes del lanzamiento
1. Revisar portada y logo en Android Chrome/Brave y iPhone Safari.
2. Abrir menú móvil y verificar enlaces, foco y botón fijo.
3. Seleccionar fecha y horario en Cal.com; completar solicitud de prueba y confirmar que queda pendiente de aprobación, sin duplicados.
4. Verificar correo/notificación de aprobación, cambio y cancelación desde el administrador Cal.com.
5. Abrir WhatsApp Business y comprobar que corresponde al número oficial.
6. Confirmar imágenes, rendimiento y ausencia de desplazamiento horizontal.
7. Evaluar en móvil la longitud de la portada y la accesibilidad del calendario.

## V4.2 — Fidelidad móvil al boceto aprobado (rama de pruebas)

**Motivo:** la V4.1 publicada mantuvo una estructura móvil demasiado larga y una foto del hero demasiado oscura, distinta del concepto visual aprobado. Esta revisión corrige la composición, no reconstruye el sitio.

**Cambios:**
- Hoja adicional `mobile-v4-2.css` aislada para permitir revisión o reversión fácil.
- Hero móvil compacto con foto conceptual existente de automóvil, contraste equilibrado y dos CTA grandes.
- Cuatro beneficios en una franja horizontal con iconos descriptivos.
- Tarjetas de los tres servicios en la misma fila para vista móvil, con enlace a reservas.
- Tarjeta visual de bienvenida **sin descuento activo**, ya que la vigencia de campañas debe verificarse antes de publicarse.
- Footer más compacto; CTA flotante se oculta al entrar en reserva o pie de página.
- No se cambió el logotipo binario original, el número de WhatsApp ni el enlace/embed a Cal.com.

**Control de calidad antes de fusionar a main:** probar anchos 320, 360, 390, 414 y 768 px, sin overflow horizontal; observar legibilidad de servicios; foto del hero realmente visible; menú accesible; CTA sin superposición; enlaces a WhatsApp; abrir calendario; probar solicitud manual con la configuración existente de Cal.com. Validar fotos publicitarias y rendimiento. Nota: el concepto aprobado es una maqueta, no evidencia de captura real del sitio.
