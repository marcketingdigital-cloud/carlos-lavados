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

## V4.4.4 — Carrusel premium y bienvenida conversacional (17/11/2026)

**Decisión comercial:** la segunda pantalla presenta fotos individuales de tres servicios con deslizamiento táctil, tarjeta central seleccionada con relieve verde eléctrico y una promoción del 20% que abre WhatsApp Business con un mensaje preparado. Toda la tarjeta promocional es **un único enlace**, no hay botones anidados.

**Servicios.** Se incorporan 3 imágenes WebP optimizadas, generadas para la campaña, en `assets/servicio-exterior-v444.webp` (aprox. 69 KB), `assets/servicio-interior-v444.webp` (40 KB) y `assets/servicio-completo-v444.webp` (56 KB). No son fotografías de trabajos reales. Se conserva la nota aclaratoria. El PNG maestro no se modifica: aparece como un recurso independiente en cada tarjeta y mantiene sus colores originales. Las imágenes también están guardadas en Google Drive, carpeta `CARLOS - Landing GitHub / V4.4.4 - Servicios carrusel (imágenes conceptuales)`.

**UX.** `brand-v4-4-4.css` está al final de la cascada: carrusel con `scroll-snap` sin dependencias, tres indicadores y flechas, activo con borde `#24D65A`, fotografía central más grande en móviles y tres tarjetas lado a lado en escritorio. `script.js` detecta el card más centrado durante el scroll, permite teclado izquierda/derecha, puntos y flechas. El acceso de las tarjetas a `#reservar` sigue disponible. El CTA fijo inferior se oculta también cuando la oferta del 20% está en pantalla para no competir con su propia llamada a la acción.

**Beneficio.** Ancla promocional `#promocion-bienvenida` lleva a `wa.me/541141427755` con un mensaje sobre el descuento para nuevos clientes. El cliente debe **enviar** el mensaje para que CARLOS pueda recibir su consulta y el número visible por WhatsApp. Abrir la página no captura números de forma silenciosa. La aplicación y elegibilidad del 20% se confirman manualmente; no se integra un descuento automático en Cal.com.

**Animación.** El número 20% hace un salto de 3 px y escala hasta 1.04, con rebote breve y un ciclo de descanso de 6 segundos; solo se anima si la tarjeta está visible, se pausa con la interacción y se desactiva con `prefers-reduced-motion: reduce`.

**Sin cambios:** imagen de portada de V4.4.3, logotipo fuente `assets/logo-maestro-original.png`, paleta `#24D65A/#BFC4C9/#0B0F10/#FFFFFF`, titular metálico «IMPECABLE,», botón WhatsApp superior, promoción una vez por nuevo cliente, enlace de Cal.com y revisión manual externa.

**Pruebas antes de cerrar V4.4.4:** deslizar de Exterior a Interior y Completo en 320/360/390/414 px, verificar bordes verdes/indicadores y enlaces, navegar con teclado, probar WhatsApp móvil con el mensaje precargado, corroborar que el botón fijo no tapa el descuento, activar modo movimiento reducido, revisar contraste, comprobar que los 3 WebP cargan desde GitHub Pages y realizar solicitud de Cal.com pendiente de aprobación con supervisión del administrador.

## V4.4.4.1 — Corrección de superposición en promoción

En la captura móvil de V4.4.4 se comprobó que el botón fijo «RESERVAR TURNO» tapaba el CTA «SOLICITAR MI 20% POR WHATSAPP». La lógica JS calculaba `zones.promo=true` y establecía ARIA/tabIndex de ocultación, pero el CSS solo ocultaba los estados `.is-muted`/`.in-booking`; faltaba la clase visual correspondiente a `promo`. Ahora `script.js` sincroniza la clase `.is-hidden` con `hide`, y `brand-v4-4-4.css` la oculta (opacidad, visibilidad, transform y sin interceptar pulsaciones). Así, cuando aparece el beneficio, no compite con un CTA fijo superpuesto. No se alteran imágenes, carrusel, promoción, rutas WhatsApp ni configuración Cal.com. Validación real en celular pendiente.

## V4.4.5 — Experiencia premium y microanimaciones (17/11/2026)

**Problema observado:** la tercera pantalla empezaba con un aviso largo de imágenes conceptuales (perteneciente al bloque anterior), la foto `fachada.webp` terminaba en un rectángulo rígido y quedaba desalineada con el texto; el CTA inferior verde era demasiado alto y dominante.

**Correcciones, sin reconstrucción:**
- El aviso pasa al interior del carrusel, justo debajo de sus controles: «Fotografías publicitarias conceptuales · No muestran trabajos reales de CARLOS». Esto lo contextualiza sin eliminar la transparencia sobre las imágenes. Se preserva la advertencia ya existente en la primera pantalla y el resto de la política de divulgación.
- La sección `#experiencia` utiliza `.experience-shell` como eje único de imagen y texto; desktop en dos columnas, móvil en una. Mismos márgenes, sin espacio perdido a la izquierda.
- Se conserva `assets/fachada.webp` —no se sustituye por otra fotografía—; su imagen se integra con una máscara radial que difumina todos los bordes, degradado inferior y luz/contraste controlados. La leyenda «EL TIEMPO ES TUYO.» sigue accesible como `figcaption`.
- Se mantiene el título «CUIDAMOS TU AUTO. RESPETAMOS TU TIEMPO.» y la secuencia de tres pasos. Se ajustan tamaño, interlineado y ancho del texto en responsive, sin ocultar contenido.
- Barra móvil `.mobile-cta` aproximadamente 68px, superficie táctil interna de ~50px; el color oficial se mantiene, pero su relleno utiliza alfa .91 y alfa .83 mientras la sección Experiencia está visible, sin atenuar letras ni iconos.
- Animación sutil de aparición de foto/copy (10px, menos de 0.8s), una sola vez por sesión de carga y solo al entrar en viewport; no oculta la página si JavaScript falla. `prefers-reduced-motion` elimina la animación.
- El botón inferior se sigue ocultando sobre el hero, la promoción del 20%, el calendario, el CTA final y el pie. El carrusel de servicios, las fotografías, el efecto metálico del título, WhatsApp y la oferta quedan intactos.
- `brand-v4-4-5.css` se añade como última capa de estilos; se evita modificar hojas previas y la configuración de Cal.com.

**Verificación final requerida:** móvil Android de 320/360/390/414px, pie y encabezado sin solapes, contraste de figcaption, acceso táctil a CTA, reserva Cal.com pendiente de aprobación manual, reducción de movimiento y escritorio/tablet. No confundir QA estático con prueba real del teléfono.

## V4.4.6 — Corrección visual efectiva tras captura Android (17/11/2026)

**Problema real de V4.4.5:** el verde se había vuelto menos intenso pero el CTA seguía ocupando todo el ancho porque `.mobile-cta` permanecía con `left:0/right:0` y un fondo `::before` de franja horizontal. El efecto radial aplicado a `fachada.webp` tampoco conseguía hacer desaparecer realmente los cuatro bordes, por lo que seguía pareciendo un rectángulo, y el párrafo consumía demasiado alto.

**Solución implementada**
- `brand-v4-4-6.css` carga después de V4.4.5 con cambios explícitos. La imagen conserva el asset original y gana una máscara radial de alfa cero real en todo el perímetro, se elimina la superposición rectangular del `::after` y se recorta a proporción móvil 1.90 para liberar altura sin deformación.
- El contenido `#experiencia` se centra dentro de un contenedor de ancho `calc(100% - 32px)`. Se compactan espacios e interlineados sin eliminar el título ni los tres pasos.
- El párrafo ahora resume de manera clara y veraz la solicitud online y aprobación manual.
- El botón flotante ahora es una **píldora real**: `left:auto`, `right:14px`, ancho ajustado al contenido, 49px de alto, sin pseudo-bloque de ancho completo, texto abreviado «RESERVAR» y descripción accesible completa. El verde eléctrico se mantiene (alfa .89; alfa .82 en experiencia) con letras/íconos grafito de alto contraste.
- Se conserva la lógica de ocultación mientras hay CTA principal, promoción del 20%, calendario, CTA final o footer; también se respeta `prefers-reduced-motion`.

**Invariantes:** no cambia el logotipo maestro, imagen conceptual de portada, carrusel, mensaje de WhatsApp, microrebote del 20%, enlace de Cal.com ni el proceso externo de aprobación manual.

**QA:** verificar de forma visual en Android real (ancho/alto de pantalla, barras navegador, scroll, enfoque, contraste y recorte); una inspección de código no sustituye una captura real.

## V4.5 · Pantalla 01 — Portada premium (18/11/2026)

**Dirección aprobada:** extender por etapas el lenguaje de los mockups «CARLOS Premium»: grafito profundo, verde eléctrico controlado, relieve y glow focalizado, integración fotográfica, tipografía editorial y acciones sin ruido visual. **Implementación por pantalla para validar cada paso.** Esta etapa modifica solo la pantalla 1 (header + hero + beneficios), no la segunda.

**Cambio incremental:** se incorpora `brand-v4-5-hero.css` al final de las hojas existentes. Los tonos oficiales siguen siendo `#24D65A` (verde), `#BFC4C9` (metal), `#0B0F10` (grafito) y `#FFFFFF`; apoyos `#11191A` y `#E3E7E9`. Se realzan con sobriedad la línea inferior de cabecera, el menú, el reflejo metálico del titular «IMPECABLE,», el acento «SIN SALIR DE CASA.», la fusión de la fotografía conceptual aprobada al fondo, el CTA principal con relieve y brillo, WhatsApp oscuro con icono original y los cuatro beneficios con border/iluminación coherente.

**Invariantes:** se usa el mismo `assets/logo-maestro-original.png` sin filtros ni regeneraciones; misma fotografía `assets/hero-carlos-v44-clean.webp`; no se altera el HTML visible salvo enlazar CSS; se mantienen los cuatro beneficios dentro de la primera pantalla móvil cuando la altura útil lo permite, acciones táctiles de al menos 48px, texto contextual conceptual y todos los enlaces. La promoción del 20%, carrusel y animación, página 3, Cal.com y aprobación manual no se tocan.

**Accesibilidad y QA:** hover/focus definidos, `prefers-reduced-motion`, contraste grafito sobre verde. Comprobaciones estáticas, confirmar en Android real después de Pages: 320×568, 360×640, 390×844, 414×896; no debe aparecer el servicio anterior al primer scroll salvo que la altura reducida exija desplazamiento natural. Verificar impacto en título/fotografía/beneficios y enlaces de reserva y WhatsApp. La página publicada no se considera visualmente aprobada hasta revisar captura real.

**Próxima etapa cuando se apruebe:** V4.5 Pantalla 02 — servicios y bienvenida 20%, reproduciendo la disposición de carrusel, guía táctil y botón de WhatsApp del mockup visual aprobado.

## V4.5 · Pantalla 02 — Electric Emerald Glow (18/11/2026)

**Referencia aprobada:** mockup de «Nuestros servicios» con tarjeta central dominante, contorno verde eléctrico luminoso, laterales desvanecidos, indicador táctil con mano, promoción 20% en grafito y CTA WhatsApp **cápsula oscura con perímetro verde brillante**, halo y reflejo inferior. Esta etapa corrige deliberadamente la versión anterior cuyo botón era verde plano; la referencia visual aprobada manda.

**Alcance:** solamente `#servicios`, mediante la nueva hoja de estilos aislada `brand-v4-5-servicios.css`; portada V4.5 pantalla 01, experiencia, reservas, footer y enlaces restantes intactos. El CSS se agrega al final de la cascada.

**Carrusel:** continúan los tres archivos conceptuales WebP, el logo maestro exacto (ahora sin placa opaca de fondo, integrado como marca secundaria por CSS), las tarjetas y la navegación por scroll-snap/teclado/flechas/puntos. La tarjeta activa gana luz de dos profundidades, contorno verde `#24D65A` y sombra difusa; las laterales se oscurecen y funden con máscara de gradiente del carrusel. Se añade contador dinámico `01 / 03` hasta `03 / 03`, sincronizado desde `updateService()`, y guía táctil con ícono y líneas verdes. Cada fotografía incluye una descripción breve legible en móvil. La nota «Fotografías publicitarias conceptuales…» sigue visible bajo el carrusel, sin presentarlas como trabajos reales.

**Promoción:** sigue existiendo un único enlace externo `#promocion-bienvenida` al mismo `wa.me/541141427755` con el mismo mensaje precargado y requisitos: nuevos clientes, primer lavado, por única vez y sujetos a verificación. Separamos visualmente el enlace en panel y CTA (sin botones ni enlaces anidados). El panel incluye jerarquía clara, línea verde de acento y badge luminoso «POR ÚNICA VEZ». La etiqueta visible del CTA se acorta a «SOLICITAR MI 20%», con ícono original de WhatsApp, separador verde y flecha.

**Efecto distintivo del CTA:** cápsula de centro oscuro con gradiente volumétrico, borde `#24D65A`, brillo fino arriba, halo exterior y luz inferior. Hover/foco refuerzan el resplandor y active reduce mínimamente la escala. No hay destello continuo ni verde plano. El rebote de 3px/4% del 20% se conserva, y se desactiva con `prefers-reduced-motion:reduce`.

**No alterar:** fuente de logo `assets/logo-maestro-original.png`, foto del hero, reserva Cal.com `carlos-lavados/solicitud-lavado-domicilio`, aprobación manual en Cal.com ni WhatsApp Business oficial. La captura de pantalla del mockup no se usa como fondo ni se presenta como fotografía real.

**QA previo a cierre:** revisar controles táctiles en 320/360/390/414 px y escritorio; foco visible, navegación por teclado, contador 01-03, descripción de tarjetas, resplandor/fusión, tipografía del CTA sin quiebres, promoción sin tapa del CTA flotante y vínculo real al WhatsApp precargado. Probar movimiento reducido. La conformidad final requiere captura en dispositivo, no solo validación de código.

## V4.5.1 — Ajuste de la segunda pantalla (18/11/2026)

**Motivo:** captura Android tras Electric Emerald Glow: el carrusel debía mantener su tamaño; el aviso descriptivo de imágenes conceptuales y el panel de descuento estaban ocupando espacio que impedía ver juntas las dos cápsulas de la promoción.

**Cambios deliberadamente acotados:**
- Se retira de la interfaz de servicios el párrafo situado debajo de «Deslizá para explorar» que decía «Fotografías publicitarias conceptuales · No muestran trabajos reales de CARLOS». Las descripciones alternativas de los recursos conservan su naturaleza conceptual y se mantiene el contexto de marca en otras secciones, sin presentar fotografías generadas como trabajos comprobados.
- Se conserva idéntico el carrusel: tres fotografías WebP, alto y ancho de tarjetas, sombras Electric Emerald Glow, desvanecimientos, logos y lógica de navegación.
- Se añade al final de la cascada `brand-v4-5-servicios-compact.css`: solo contiene ajustes mobile hasta 600px (con ajuste adicional a 360px). Reduce separaciones entre controles, panel promocional y CTA.
- Se reduce el panel «20% DE DESCUENTO» en padding, icono, título y número; el texto de condiciones se abrevia «Primer lavado · Beneficio sujeto a verificación» manteniendo su significado.
- Se reduce la cápsula de «SOLICITAR MI 20%»: ancho `calc(100% - 42px)` en móviles habituales, alto mínimo de 54px, iconos proporcionados y halo inferior más discreto; mantiene centro grafito, borde eléctrico y foco accesible.
- No cambia el enlace con mensaje precargado a WhatsApp Business, la condición de cliente nuevo, el descuento por única vez, el rebote del 20%, la primera pantalla, la tercera pantalla ni Cal.com y su aprobación manual.

**Validación:** revisión estática de la estructura de HTML/CSS, enlaces de destino, conservación de imágenes y accesibilidad básica. Validar en captura real Android 320/360/390/414 px; pantallas muy bajas pueden requerir desplazamiento vertical natural, porque el tamaño fotográfico aprobado permanece fijo.

## V4.5.2 — Ajuste fino de densidad de pantalla 2 (18/11/2026)

**Aprobación:** conservar el título «Nuestros servicios», las tres fotografías exactamente del tamaño actual, el contorno brillante Electric Emerald Glow, los indicadores y la guía de deslizamiento, y compactar más las dos cápsulas para ganar altura visual.

**Implementación incremental:** se actualiza exclusivamente la hoja de estilos ya existente `brand-v4-5-servicios-compact.css`, sin incorporar nuevas capas ni modificar el HTML, el JS o los assets de la sección.
- Título móvil con margen inferior más corto, tamaño todavía legible y subrayado eléctrico proporcional; contador con menos separación.
- Se reduce únicamente el `padding-top` y el `padding-bottom` del **contenedor desplazable**, nunca `width`, `height`, `flex-basis` ni `aspect-ratio` de `.service-card` o de sus fotografías.
- Controles del carrusel e ícono de deslizamiento se acercan verticalmente y conservan su funcionalidad.
- El panel del 20% adopta layout editorial compacto: cabecera, porcentaje y fila con sello «POR ÚNICA VEZ» más condiciones; se reduce su padding, no se suprimen requisitos comerciales.
- CTA WhatsApp tipo cápsula luminoso de alto mínimo 50px, menos ancho, bordes y halos originales preservados; sigue siendo parte del mismo enlace al número oficial con mensaje precargado.
- A `max-width:360px`, las condiciones pueden ocupar una línea adicional en vez de quedar cortadas.

**Invariantes:** logo maestro original, fotografías publicitarias, título, teléfono Business +54 11 4142-7755, promoción de nuevo cliente por única vez, animación suave del 20%, calendario Cal.com y aprobación manual.

**QA:** revisar dimensiones 320, 360, 390 y 414 px; no garantizar toda la segunda pantalla en un viewport corto si el usuario exige conservar el tamaño fijo de las imágenes. Preferir deslizamiento vertical natural antes que reducir texto por debajo de una lectura cómoda.

## V4.6 — Pantalla 03 «CARLOS EXPERIENCE JOURNEY» (18/11/2026)

**Referencia creativa aprobada:** maqueta con foto contextual «EL TIEMPO ES TUYO.», título «CUIDAMOS TU AUTO. RESPETAMOS TU TIEMPO.», tres tarjetas conectadas (01/02/03), borde Electric Emerald Glow en la seleccionada, panel que informa cada paso, cápsula luminosa «RESERVAR MI TURNO» y beneficios «A domicilio / Confianza / Tu tiempo vale».

**Implementación real y aislada:**
- `index.html`: se reemplazan solo las tres filas estáticas de `#experiencia` por una navegación de 3 pestañas `role="tablist"` con botones, nombres, `aria-selected`, `aria-controls`, un `role="tabpanel"` de contenido variable e iconos SVG inline. Imagen `assets/fachada.webp`, alt conceptual, figcaption, título y copy aprobados se conservan.
- `brand-v4-6-experience.css`: hoja final específica de `#experiencia` con fusión fotográfica, 3 tarjetas conectadas, Electric Edge Glow, panel grafito, botón cápsula oscuro con borde verde `#24D65A`, reflejo y halo, beneficios compactos. Adaptación 320/360/390/414px, tablet y escritorio; efectos con `prefers-reduced-motion:reduce`.
- `script.js`: selección de paso con clic/tacto y teclado (ArrowLeft/ArrowRight/Home/End), `tabindex` itinerante, actualización de `aria-selected`, `aria-labelledby`, número, título, explicación y SVG; transición de 250 ms solo cuando el usuario no solicita reducir movimiento. Estado inicial: Paso 01.
- **Reserva única:** el nuevo CTA enlaza a `#reservar`, bloque Cal.com ya existente. No crea una agenda nueva ni promete confirmación automática. La aprobación manual continúa siendo administrada fuera de GitHub en Cal.com.
- **Evitar dos CTA:** el botón sticky inferior existente se oculta al entrar en la sección Experiencia para no competir con el CTA local y reaparece al salir, salvo en secciones donde ya debía ocultarse.

**Estado y alcance:** no cambiar las pantallas 1/2 (pantalla 2 V4.5.3 provisional), su promoción 20%, fotografías, logotipo maestro, WhatsApp Business, el evento `carlos-lavados/solicitud-lavado-domicilio` ni la configuración de aprobación manual.

**Validación exigida:** comprobar interacciones de los tres pasos y teclado, foco visible, contenido del panel, transiciones, mobile 320/360/390/414, overflow, contraste y que el CTA salte al calendario con la aprobación manual externa intacta. En dispositivos con poca altura de pantalla, permitir scroll vertical natural en lugar de comprimir textos y objetivos táctiles por debajo de tamaños legibles. No confundir validaciones de código con pruebas reales de usuario.

## V4.7 — CARLOS RESERVA / 03: calendario protagonista (18/11/2026)

**Motivo UX:** en la pantalla 3 (`#experiencia`) ya existe un recorrido interactivo de tres pasos. La sección de reservas (`#reservar`) volvía a explicar esos pasos dentro de un panel enorme que retrasaba el acceso al calendario en móvil.

**Cambios limitados a `#reservar`:**
- Se elimina el `aside` con los tres pasos repetidos y el bloque explicativo redundante. Se conservan el titular «TU PRÓXIMO LAVADO. A UN CLIC.» y el aviso de aprobación manual: «Elegí una fecha y un horario disponible. Tu solicitud queda pendiente hasta que Carlos la apruebe».
- Se incorporan dos microcápsulas informativas: «Reserva online» y «Confirmación personal», con íconos SVG, grafito/plata y verde eléctrico oficial.
- El contenedor `.booking-layout-streamlined` es de una columna incluso en escritorio. El calendario pasa a ser la primera acción: `.booking-top` y `#cal-booking`; el enlace externo «Abrir calendario a pantalla completa» permanece disponible debajo del calendario, no arriba.
- Se conserva el contacto de WhatsApp como enlace secundario debajo del calendario. Se conserva el aviso de privacidad y los enlaces directos existentes a Cal.com.
- Nueva hoja terminal `brand-v4-7-reserva.css`, totalmente limitada a `#reservar`, con mobile-first, encabezado más compacto, bordes Electric Emerald Glow moderados y estados de foco visibles.

**No se modifica:** recursos visuales, sección 1, servicios V4.5.3, la experiencia V4.6.1, WhatsApp Business +54 11 4142-7755, código de `script.js`, identificador del evento `carlos-lavados/solicitud-lavado-domicilio` y colores `#24D65A`, `#0B0F10`, `#BFC4C9`. La aprobación manual se administra externamente en Cal.com y no puede verificarse editando la landing.

**QA:** verificar estructura del HTML, ausencia de pasos duplicados, permanencia de los enlaces y el embed Cal.com, accesibilidad de las microcápsulas y cambio de layout. Comprobar renderizado en Android real con captura y probar la carga externa de Cal.com sin realizar una reserva no deseada.

## V4.7.1 — Más aire en Experiencia (18/11/2026)

Se retira únicamente la franja redundante de beneficios «A domicilio / Confianza / Tu tiempo vale» que estaba debajo del CTA `RESERVAR MI TURNO` en `#experiencia`. Se eliminan también sus selectores CSS sin uso. Para dar respiro a la transición visual hacia la sección de reservas, se aumenta el padding inferior de `#experiencia` a 36px en móvil y 44px en escritorio.

**Se conservan**: fotografía, titular, tres pestañas interactivas del timeline, panel dinámico, CTA luminoso del mismo tamaño que la cápsula de la pantalla 2, enlace al calendario, Cal.com, WhatsApp, las pantallas 1 y 2 y la V4.7 de Reserva simplificada. No se modifica el flujo de solicitud ni el sistema de confirmación manual.

Revisar en Android que la cápsula y el comienzo de CARLOS RESERVA tengan una separación limpia sin cortes.

## V4.7.2 — Ajuste de jerarquía y transición de calendario (19/11/2026)

**Objetivo:** refinar la cuarta sección «CARLOS RESERVA» según captura Android aprobada, sin alterar el evento de Cal.com ni el diseño funcional.

**Cambios CSS aislados a `#reservar`:**
- Encabezado interno del calendario «CARLOS RESERVA»: de 16 px a 14 px en móvil (reducción del 12,5%) y rango de 15–18 px en escritorio, conservando el título comercial principal.
- Menos padding vertical en la barra interna del calendario y ligeros ajustes de márgenes de introducción y microcápsulas, para evitar que el título secundario compita con la acción.
- Más separación entre la pantalla 3 y reservas: padding superior móvil de 25 a 34 px, y aumento proporcional en escritorio.
- Se mantiene **sin recortar** el iframe de Cal.com. El espacio amplio visible entre la barra de CARLOS RESERVA y el mes pertenece a la interfaz de Cal.com: la página ya usa `month_view` y `hideEventTypeDetails:true`. No se modifican estilos dentro del iframe, alturas artificiales ni posición de calendario, porque podrían ocultar fechas/horarios o romper el manejo de foco.

**Sin cambios:** HTML, `script.js`, endpoint Cal.com `carlos-lavados/solicitud-lavado-domicilio`, solicitud sujeta a aprobación manual, calendario, fotografía, marcas, WhatsApp y pantallas 1–3. Validación visual Android posterior necesaria.
