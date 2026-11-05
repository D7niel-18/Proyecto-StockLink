Las animaciones se han escrito en SCSS, siguiendo la estructura del proyecto (variables, mixins y bloques BEM). El CSS final se genera compilando `assets/scss/main.scss` a `assets/css/main.css`.

Se han reutilizado elementos que ya existían en la interfaz (iconos, botones, tarjetas y barras). Solo se animan `transform` y `opacity`, para no provocar recálculos de diseño y mantener el rendimiento.

- [x] Creado `assets/scss/_animaciones.scss` y añadido a `main.scss` (el último, para poder ajustar los componentes anteriores).
- [x] Añadido a `_mixins.scss` el mixin `con-movimiento`, que envuelve el código en `@media (prefers-reduced-motion: no-preference)`.
- [x] **Iconos SVG de la navegación:** al pasar el ratón o enfocar un enlace, el icono se desplaza y crece (`transition` + `transform`).
- [x] **Botones:** suben 1px al hover y bajan 1px al pulsar; los botones desactivados no se mueven.
- [x] **Barras de ocupación de almacenes:** se llenan al cargar la página con `@keyframes llenar-barra` (`scaleX`, en lugar de animar `width`).
- [x] **Tarjetas de estadísticas, paneles y tarjetas de almacén:** aparecen con fundido y subida suave con `@keyframes aparecer`; las tarjetas de estadísticas entran escalonadas.
- [x] Duraciones cortas (0.15 s en transiciones, 0.4–0.8 s en entradas) y sin animaciones infinitas.

**Iconos SVG de la navegación (incluidos en el SCSS)**

- [x] 6 iconos en `assets/svg/`: `nav-panel`, `nav-productos`, `nav-categorias`, `nav-almacenes`, `nav-movimientos` y `nav-empresas`.
- [x] Eliminado el archivo `iconos.css` suelto y su `<link>` en los 6 HTML con barra lateral: ahora todo sale de `main.css`.

### Comprobación de las animaciones y accesibilidad

- [x] Comprobar en el navegador que las animaciones funcionan en Dashboard, Productos, Categorías, Almacenes, Movimientos y Empresas.
- [x] Comprobar que los iconos de la navegación se ven alineados y no desplazan el contador de "Panel de control".
- [x] Comprobar que las animaciones no interfieren con enlaces, formularios, botones ni la navegación por teclado.
- [x] Revisar el aspecto de los iconos y las animaciones con el tema claro.

### Archivos modificados

- `assets/scss/_animaciones.scss` (nuevo)
- `dashboard.html`, `productos.html`, `categorias.html`, `almacenes.html`, `movimientos.html`, `empresas.html` (iconos de navegación; sin el enlace a `iconos.css`)
