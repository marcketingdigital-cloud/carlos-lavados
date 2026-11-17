# CARLOS — Lavados de Autos a Domicilio

Landing comercial responsive en GitHub Pages. Repositorio original, sin reconstrucción desde cero.

**Versión:** V4.3 (fusión creativa Combo 03 + Combo 05) · **Estado del código:** propuesta aprobada, incorporada primero en rama de revisión.

## Sitio y gestión
- Web pública: https://marcketingdigital-cloud.github.io/carlos-lavados/
- Repositorio: https://github.com/marcketingdigital-cloud/carlos-lavados
- Reservas: https://cal.com/carlos-lavados/solicitud-lavado-domicilio
- WhatsApp Business: +54 11 4142-7755 · https://wa.me/541141427755

## Identidad corporativa: Manual de Identidad Visual CARLOS 2027
**Esta sección es fuente de verdad y reemplaza las menciones anteriores del verde #00A86B.**

| Uso | Valor |
|---|---|
| Verde Premium / eléctrico | `#24D65A` |
| Gris Metálico | `#BFC4C9` |
| Grafito | `#0B0F10` |
| Blanco | `#FFFFFF` |

Tipografía: Montserrat Extended para la marca/títulos, Montserrat SemiBold complementaria. La web importa Montserrat de Google Fonts como aproximación para textos, sin alterar la tipografía incrustada en el logotipo.

**Logotipo maestro original sin editar:** `assets/logo-maestro-original.png`. Prohibido redibujar, reinterpretar, deformar, recolorear o sustituir. Las fotos de la web son materiales conceptuales de campaña, NO trabajos documentados de CARLOS.

## Cambios V4.3
- `brand-v4-3.css`: última hoja de estilos, aplica la paleta y el concepto móvil aprobado sin eliminar la estructura anterior.
- Portada con automóvil conceptual, tipografía editorial, dos acciones principales y acentos contenidos.
- CTA de reservas con icono de calendario; CTA secundario con icono de WhatsApp.
- Beneficios agrupados en cuatro columnas y servicios con tarjetas completas pulsables (evita tres botones redundantes).
- Banner aprobado: «BIENVENIDA A NUEVOS CLIENTES · En tu primer lavado obtenés un 20% de descuento · POR ÚNICA VEZ».
- Condición visible: beneficio exclusivo para nuevos clientes, sujeto a consulta al pedir el turno. El sistema Cal.com no aplica automáticamente un descuento; la validación comercial corresponde a CARLOS.
- CTA inferior adaptativo: se atenúa cuando el botón principal de la portada o el CTA final están visibles, recupera verde al seguir desplazándose y se oculta en la sección del calendario y el pie de página.
- `script.js`: Cal.com conserva la URL y la integración mensual; solo cambia el acento visual de la incrustación a `#24D65A`. No modifica ni promete que la **aprobación manual** esté configurada; eso se verifica en Cal.com.
- Navegación y footer conservados, con retoques visuales responsive.

## Archivos importantes
- `index.html` — contenido y enlaces.
- `styles.css` — estilos históricos.
- `mobile-v4-2.css` — capa responsive previa.
- `brand-v4-3.css` — capa de marca V4.3, tiene prioridad en cascada.
- `script.js` — menú, CTA adaptativo y cargador oficial Cal.com.
- `assets/` — logotipo original y fotografías conceptuales.

## Control de calidad y lanzamiento
1. Abrir la web en Android Chrome/Brave y Safari iOS; revisar 320, 360, 390, 414, 768 px y escritorio.
2. Confirmar que el logotipo no se recorta, el hero muestra el automóvil, la tipografía no se desborda y las tres tarjetas son accesibles.
3. Verificar «RESERVAR TURNO» (portada/CTA inferior/tarjetas) y botón con icono «CONSULTAR POR WHATSAPP» hacia el número oficial.
4. Desplazarse: al ver CTA hero, el inferior se atenúa; al salir, recupera intensidad; en CARLOS RESERVA y footer se oculta.
5. Validar carga del calendario, elección de fechas, solicitud real de prueba, su estado **pendiente de aprobación** y recepción/confirmación por el administrador de Cal.com. No confundir disponibilidad mostrada con reserva confirmada.
6. Revisar que la promoción se gestione manualmente para nuevos clientes y por una única vez, sin descuento automático o vencimiento ficticio.
7. Revisar contrastes, navegación por teclado, foco visible, rendimiento y uso de imágenes conceptuales.

## Historial
- V4.1: primera composición premium, FAQ y mejoras de foco.
- V4.2: estructura móvil más compacta; cuatro beneficios; tres tarjetas; primer manejo de CTA fijo.
- V4.3: versión visual seleccionada, identidad oficial recuperada, promoción de primer lavado y CTA adaptativo.

**Regla de seguridad:** conservar el enlace de Cal.com y la revisión manual; no sustituir el logo ni atribuir imágenes generadas a trabajos reales.

## V4.4 — Portada persuasiva + UX móvil (rama de pruebas)
**Fuente:** Prompt Ultra Maestro V4.4 validado y decisiones creativas de CARLOS.
- Se mantiene el código del sitio existente; no se reemplazan `assets/logo-maestro-original.png`, Cal.com ni WhatsApp Business.
- Portada con profesional trabajando sobre automóvil negro en contexto residencial. **Sin cliente al fondo tomando café.**
- La imagen `assets/hero-carlos-v44-clean.webp` es una **fotografía conceptual publicitaria**, no prueba de un trabajo real. Texto publicitario y botones son HTML accesible, no forman parte del mapa de bits.
- Las aplicaciones del símbolo sobre gorra, polo, cubeta y pulverizador utilizan exactamente el archivo `assets/logo-maestro-original.png`, superpuesto desde la propia web como `<image>` en SVG y no generado ni reinterpretado por IA.
- Titular `IMPECABLE,` con efecto metálico plateado/blanco y pequeño reflejo inspirado en la propuesta ganadora; solo usa colores de marca.
- WhatsApp: se reemplaza el SVG anterior (que se veía recortado) por pictograma proporcionado, con círculo de contención discreto y bordes plata.
- Botón flotante: se retira totalmente en portada, bloque de reservas, CTA final y footer; aparece en secciones intermedias. Sin «fantasma» semitransparente sobre contenido. Se respeta preferencia de movimiento reducido.
- Se preserva el gancho comercial `20% de descuento en el primer lavado, nuevos clientes, por única vez`, con validación manual; sin inventar vigencias.
- Nuevo CSS de ajustes incrementales: `brand-v4-4.css`, cargado luego del V4.3.

### Control previo a publicar
1. Revisar el SVG sobre la imagen en teléfonos de 320, 360, 390 y 414 px, tablet de 768 px y escritorio. Confirmar recorte y colocación de cada marca en superficies reales.
2. Verificar lectura de «IMPECABLE,» y «SIN SALIR DE CASA» sin recorte de letras ni invasión sobre el profesional.
3. Probar el botón WhatsApp desde celular y verificar que se abra el número empresarial correcto.
4. Desplazarse desde portada hacia servicios: el botón flotante no debe estar visible en hero; debe reaparecer al salir, y desaparecer de nuevo en reservas y footer.
5. Probar Cal.com con solicitud de turno real y verificar que quede **pendiente de aprobación manual** en la cuenta de Carlos. No afirmar que está validado solo por ver el calendario.
6. Verificar rendimiento de `hero-carlos-v44-clean.webp` (aprox. 133 KB), accesibilidad, foco, contraste y ausencia de scroll horizontal.
7. Comparar portada con referencia aprobada y realizar correcciones visuales en rama antes de fusionar.

## V4.4.1 — Afinación móvil de primera pantalla y merchandising (17/11/2026)

**Motivo:** la V4.4 seguía mostrando CTAs demasiado altos, icono de WhatsApp con un círculo innecesario, texto local y aclaración conceptual poco legibles y 4 beneficios cortados por la altura de portada. El logo original estaba sobredimensionado en gorra y superpuesto sobre brazo, en vez de pecho.

**Cambios:** `brand-v4-4-1.css` se carga al final y sustituye solo estilos necesarios; ningún otro CSS histórico se elimina. Se compactan gradualmente los márgenes, altura de encabezado y CTAs con tamaño táctil mínimo de 48 px. El icono oficial de WhatsApp se muestra solo, sin marco circular; texto en altas y bajas de lectura fácil. La cobertura se divide en localidades principales y consulta ampliada, y la advertencia de publicidad conceptual se mantiene legible. Los beneficios se hacen más compactos sin esconder sus descripciones. La fotografía sigue siendo la conceptual aprobada; se mantienen menos aplicaciones del archivo maestro de marca: gorra más pequeña, pecho en vez de brazo y cubeta; se suprime la miniatura ilegible sobre atomizador. El recurso gráfico fuente `assets/logo-maestro-original.png` y su URL permanecen intactos.

**Invariantes:** marca `#24D65A/#BFC4C9/#0B0F10/#FFFFFF`; efecto metálico de «IMPECABLE,»; promociones para primera compra (20%, nuevos clientes, una vez); WhatsApp `541141427755`; `cal.com/carlos-lavados/solicitud-lavado-domicilio` y solicitud pendiente de aprobación manual. El widget no se reconfigura.

**Validar antes de considerar producción cerrada:** captura real de la primera pantalla en 320/360/390/414 px y alturas de viewport distintas; cuatro beneficios completos sin forzar reducción de tipografía; botón de WhatsApp sin círculo y destino correcto; imagen de marca coherente en las zonas de tela; menú accesible, CTA sticky sin solapamientos, Cal.com real con aprobación y reservas sin duplicar. En móviles pequeños puede requerirse desplazamiento: nunca sacrificar accesibilidad por encajar todo en una pantalla.

## V4.4.2 — Portada y beneficios en una única primera pantalla móvil (17/11/2026)

**Objetivo aprobado:** ver logo/menú, título metalizado, fotografía conceptual de lavado a domicilio, descripción, reserva, WhatsApp, cobertura, aviso conceptual y los cuatro beneficios completos. «Nuestros servicios» comienza debajo del primer pliegue de pantalla en móviles de altura suficiente.

**Cambio HTML/CSS:** contenedor `.hero-first-screen` rodea la sección `.hero` y el bloque `.assurance-strip`. `brand-v4-4-2.css` está al final de la cascada para móvil de hasta 600 px; define `min-height: calc(100svh - 65px)` considerando el header, flex vertical y reparto del espacio libre. La portada se centra verticalmente dentro de su región y los beneficios quedan al pie. Compresión selectiva de espacios cuando la altura es inferior a 760/640 px. Se preserva la altura táctil mínima de 48 px de las dos acciones.

**Comportamiento importante:** la altura es *mínima*, no fija. Si el navegador, la accesibilidad, zoom o un equipo muy pequeño necesitan más espacio, se mantiene el scroll natural y no se corta texto ni botones. No garantizar un «todo en pantalla» imposible en cualquier dispositivo. El JS del CTA flotante observa ahora `.hero-first-screen` para no tapar los cuatro beneficios. En los demás tamaños la web mantiene los estilos previos.

**Reglas inalterables:** mantener el logotipo original, verde `#24D65A`, texto metalizado «IMPECABLE,», imagen conceptual identificada, WhatsApp oficial, promoción 20% de primer lavado para nuevos clientes una sola vez, y solicitud de turno Cal.com sujeta a aprobación manual. No se tocaron datos, servicios ni ajustes de Cal.com.

**QA móvil pendiente:** 320×568, 360×640, 390×844, 414×896, vertical/horizontal y apertura de menú; verificar que no aparece «Nuestros servicios» antes del final del primer scroll cuando la altura útil lo permite, que los cuatro beneficios se leen, CTA inferior no se superpone, sin scroll horizontal, y que los enlaces de reservas y WhatsApp funcionan. Revisar captura real en Android con barras del navegador visibles.

## V4.4.3 — Refinamiento fotográfico y merchandising (17/11/2026)

**Alcance aprobado:** pulir —sin rediseñar— la primera pantalla V4.4.2, que ya muestra completos los cuatro beneficios en el celular de referencia.

**Implementación incremental**
- Se incorpora `brand-v4-4-3.css` como última hoja en la cascada, conservando todas las capas y la primera pantalla de V4.4.2.
- Ajuste de luz editorial mediante degradados CSS: fotografía original conceptual de lavado intacta, rostro y carrocería menos oscurecidos, protección del contraste tras los titulares.
- El logotipo maestro de `assets/logo-maestro-original.png` se reutiliza por referencia sin modificar la imagen. Se pulen mínimamente posición, ángulo, escala, opacidad y mezcla de material de sus aplicaciones en gorra, pecho y cubeta. No se generan logotipos alternativos.
- Corrección óptica de la separación entre aclaración conceptual y los cuatro beneficios: el copy puede bajar hasta 16 px en móviles altos; en pantallas bajas queda sin desplazamiento adicional. Mantiene el scroll natural si el contenido no cabe.
- Tipografía de cobertura y leyenda conceptual con contraste sobrio; se mantiene visible la condición de imagen conceptual.
- Se conservan los botones con superficie táctil mínima de 48 px, WhatsApp sin círculo, color de marca, promoción de bienvenida 20% para nuevos clientes por única vez y texto metalizado «IMPECABLE,».

**Fuera de alcance / sin cambios:** página de reservas Cal.com, URL del evento y política externa de aprobación manual; textos del calendario, tipo de servicio, horas y promociones no se modifican. No se alteran claves ni datos personales.

**Validación pendiente:** comparar captura real de Android con V4.4.2 (pre/post); revisar iluminación sobre rostro, superposición de marcas en ropa y estabilidad del primer pliegue a 320/360/390/414 px; probar CTA WhatsApp y evento de Cal.com con solicitud pendiente de aprobación. Esta inspección estática no sustituye QA en dispositivo.
