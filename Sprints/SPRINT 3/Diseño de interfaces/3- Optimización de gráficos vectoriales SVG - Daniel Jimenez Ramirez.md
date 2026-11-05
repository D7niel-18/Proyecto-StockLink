## Tareas 7, 8 y 9 · Optimización y externalización de SVG

Páginas revisadas: Login, Registro, Dashboard, Productos, Categorías, Almacenes, Movimientos y Empresas.

### 7. Revisión y optimización de los archivos SVG

- [x] Revisados los gráficos vectoriales (logotipo e iconos) de las 8 páginas de la aplicación.
- [x] Conservado el `viewBox` para que los gráficos escalen correctamente.
- [x] Tamaño final de `logo.svg`: 270 bytes.
- [x] Los 3 iconos de funcionalidades de Login y Registro (multiempresa, visibilidad total y alertas de stock) ya eran código mínimo, sin elementos sobrantes.

### 8. Externalización y reutilización del logotipo SVG

El logotipo estaba escrito directamente dentro del HTML, repitiendo el mismo código en cada página.

- [x] Creado `assets/svg/logo.svg` con el logotipo.
- [x] Añadido `xmlns="http://www.w3.org/2000/svg"`, necesario en un SVG externo.
- [x] Sustituido el SVG incrustado por la carga del archivo externo en las 8 páginas:

```html
<img class="logo__icono" src="assets/svg/logo.svg" alt="" aria-hidden="true">
```

- [x] Login y Registro lo usan 2 veces cada una (panel de presentación y cabecera del formulario); las otras 6 páginas, 1 vez en la barra lateral.
- [x] Mantenida la clase `logo__icono` para conservar los estilos existentes.
- [x] `alt=""` y `aria-hidden="true"`, porque el logotipo es decorativo y va acompañado del texto "StockLink".
- [x] Un único archivo para todas las páginas: se evita repetir código y el mantenimiento se hace en un solo sitio.
- [x] Los iconos de funcionalidades de Login y Registro se mantienen incrustados, ya que aparecen una sola vez por página.

### Añadido: iconos SVG en la barra de navegación

- [x] Creados 6 iconos en `assets/svg/`: `nav-panel.svg`, `nav-productos.svg`, `nav-categorias.svg`, `nav-almacenes.svg`, `nav-movimientos.svg` y `nav-empresas.svg`.
- [x] Mismo estilo que el resto de iconos: `viewBox="0 0 24 24"`, trazo de 1.8, sin relleno.
- [x] Creado `assets/css/iconos.css`, que usa cada SVG como máscara (`mask-image`) con `background-color: currentColor`. Así el icono hereda el color del texto y cambia con el tema y el enlace activo.
- [x] Añadido un `<span class="navegacion__icono navegacion__icono--X" aria-hidden="true">` junto a cada enlace del grupo "Navegación" en las 6 páginas con barra lateral.
- [x] Enlazado `iconos.css` en el `<head>` de esas páginas, después de `main.css`.

### 9. Comprobación de la visualización de los gráficos vectoriales

- [x] Todos los SVG nuevos (`logo.svg` y los 6 iconos de navegación) validados como XML bien formado.
- [x] Comprobado que no quedan SVG del logotipo incrustados en ninguna de las 8 páginas.
- [x] Rutas relativas a la raíz del proyecto: `assets/svg/logo.svg` en los HTML y `../svg/nav-*.svg` desde `assets/css/iconos.css`.
- [x] Comprobar en el navegador que el logotipo se ve en todas las páginas.
- [x] Comprobar que los iconos de navegación se ven y quedan alineados con el texto, sin desplazar el contador de "Panel de control".
- [x] Revisar dimensiones, color y proporciones frente al diseño original.
- [x] Comprobar en la pestaña Red de las herramientas de desarrollo que los SVG cargan sin error 404.