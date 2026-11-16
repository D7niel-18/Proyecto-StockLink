## Tarea T-3.4 · Codificación y tratamiento de vídeo y audio

Páginas donde se usan: Login (el vídeo demo ya está integrado en el panel de presentación). El vídeo de fondo en bucle y el sonido de alerta quedan preparados en `assets/media/` para su integración.

El objetivo es preparar los recursos multimedia de StockLink, comprimidos para que pesen poco y exportados en formatos abiertos que funcionan en todos los navegadores: **MP4 y WebM** para el vídeo, **MP3 y OGG** para el audio.

### 1. Material de origen

| Recurso | Descripción | Origen | Licencia |
| --- | --- | --- | --- |
| `demo` (captura original) | Recorrido de la aplicación: login → panel → productos → almacenes → movimientos, 25 s | Creación propia (captura automatizada de las páginas reales con Playwright, con datos de ejemplo) | Propia |
| `fondo-login` | Animación isométrica en bucle de 12 s: naves conectadas, cajas que suben y bajan, paquetes de datos y alerta de stock. Colores de StockLink | Creación propia (código HTML/Canvas renderizado fotograma a fotograma) | Propia |
| `alerta-stock.wav` | Sonido de aviso de stock bajo: doble pitido repetido, 1,5 s | Creación propia (síntesis de audio con Python) | Propia |

No se utiliza material de terceros en ningún recurso multimedia.

### 2. Herramientas

- [x] Captura de pantalla: Playwright (Chromium) sobre las páginas reales, con datos de ejemplo.
- [x] Compresión de vídeo y audio: `ffmpeg` (libx264, libvpx-vp9, libmp3lame, libvorbis).
- [x] Imagen de portada: conversión a WebP con Pillow.

### 3. Vídeo

- [x] Capturada la aplicación durante 25 segundos, sin datos personales reales a la vista (datos de ejemplo, sin pestañas ni barra del navegador).
- [x] Creada la carpeta `assets/media/`.
- [x] Exportado a **MP4** (códec H.264).
- [x] Exportado a **WebM** (códec VP9).
- [x] Ajustados la resolución (1280×720) y el bitrate para reducir el peso, sin pista de audio.
- [x] Creada una imagen de portada (`poster`) en WebP en `assets/img/`.

Comandos de `ffmpeg` (vídeo demo):

```bash
ffmpeg -i demo-original.webm -vf scale=1280:-2,fps=30 -c:v libx264 -crf 28 -preset slow -pix_fmt yuv420p -an -movflags +faststart demo.mp4
ffmpeg -i demo-original.webm -vf scale=1280:-2,fps=30 -c:v libvpx-vp9 -crf 35 -b:v 0 -row-mt 1 -an demo.webm
```

Comandos del vídeo de fondo (24 fps, bucle de 12 s):

```bash
ffmpeg -framerate 24 -i frames/f%04d.png -c:v libx264 -crf 30 -preset slow -pix_fmt yuv420p -an -movflags +faststart fondo-login.mp4
ffmpeg -framerate 24 -i frames/f%04d.png -c:v libvpx-vp9 -crf 38 -b:v 0 -row-mt 1 -an fondo-login.webm
```

**Vídeo demo**

| Archivo | Formato y códec | Resolución | Duración | Bitrate | Peso |
| --- | --- | --- | --- | --- | ---: |
| Original | WebM · VP8 (captura sin comprimir) | 1280×720 | 25,2 s | ~599 kbps | 1.846 KB |
| `demo.mp4` | MP4 · H.264 | 1280×720 | 24,8 s | ~153 kbps | 464 KB (−75 %) |
| `demo.webm` | WebM · VP9 | 1280×720 | 24,8 s | ~176 kbps | 533 KB (−71 %) |
| `video-poster.webp` | WebP | 1280×720 | — | — | 24 KB |

**Vídeo de fondo del login**

| Archivo | Formato y códec | Resolución | Duración | Bitrate | Peso |
| --- | --- | --- | --- | --- | ---: |
| Fotogramas originales | PNG (288 fotogramas) | 1280×720 | 12 s | — | ~87 MB |
| `fondo-login.mp4` | MP4 · H.264 | 1280×720 | 12 s | ~150 kbps | 220 KB |
| `fondo-login.webm` | WebM · VP9 | 1280×720 | 12 s | ~422 kbps | 618 KB |
| `fondo-login-poster.webp` | WebP | 1280×720 | — | — | 20 KB |

### 4. Audio

- [x] Preparado el audio (doble pitido repetido, 1,5 s, mono, volumen moderado).
- [x] Exportado a **MP3**.
- [x] Exportado a **OGG**.
- [x] Ajustado el bitrate para reducir el peso.

```bash
ffmpeg -i alerta-stock.wav -c:a libmp3lame -b:a 128k alerta-stock.mp3
ffmpeg -i alerta-stock.wav -c:a libvorbis -q:a 4 alerta-stock.ogg
```

| Archivo | Formato | Bitrate | Duración | Peso |
| --- | --- | --- | --- | ---: |
| Original `alerta-stock.wav` | WAV sin comprimir | 705 kbps | 1,5 s | 128 KB |
| `alerta-stock.mp3` | MP3 | 128 kbps | 1,5 s | 24 KB (−81 %) |
| `alerta-stock.ogg` | OGG Vorbis | ~63 kbps | 1,5 s | 11 KB (−91 %) |

### 5. Uso en la web

```html
<!-- Vídeo de fondo del login: decorativo, en bucle, sin sonido -->
<video class="acceso__fondo" autoplay muted loop playsinline preload="auto" aria-hidden="true"
  poster="assets/img/fondo-login-poster.webp" width="1280" height="720">
  <source src="assets/media/fondo-login.webm" type="video/webm">
  <source src="assets/media/fondo-login.mp4" type="video/mp4">
</video>

<!-- Vídeo demo con controles -->
<video class="acceso__video" controls muted playsinline preload="metadata"
  poster="assets/img/video-poster.webp" width="1280" height="720">
  <source src="assets/media/demo.webm" type="video/webm">
  <source src="assets/media/demo.mp4" type="video/mp4">
  Tu navegador no reproduce vídeo.
</video>

<!-- Sonido de alerta de stock -->
<audio id="sonido-alerta" preload="none">
  <source src="assets/media/alerta-stock.ogg" type="audio/ogg">
  <source src="assets/media/alerta-stock.mp3" type="audio/mpeg">
</audio>
```

- [x] El vídeo de fondo es decorativo: `muted` (sin él el navegador bloquearía el autoplay), `aria-hidden="true"` y oculto con `prefers-reduced-motion`.
- [x] El vídeo demo lleva controles y `preload="metadata"`, para que no se descargue entero al abrir la página.
- [x] Tamaño fijo con `width`/`height` y `aspect-ratio: 16 / 9` para evitar que la página se mueva al cargar (CLS).
- [x] El audio solo se reproduce tras una acción del usuario (los navegadores bloquean el sonido automático), con `preload="none"`.

### 6. Comprobaciones

- [ ] El vídeo y el audio se reproducen en Chrome, Firefox y Edge.
- [ ] Comprobado en la pestaña Red de las herramientas de desarrollo que no hay errores 404 y que se carga el formato adecuado.
- [ ] Comprobado en modo responsive (móvil y tablet) que el vídeo no se sale de la pantalla.
- [ ] Anotados en `LICENSES.md` el autor, el origen y la licencia de cada archivo de audio y vídeo (creación propia).

### Archivos nuevos o modificados

- `assets/media/` *(nuevo)*: `fondo-login.mp4`, `fondo-login.webm`, `demo.mp4`, `demo.webm`, `alerta-stock.mp3`, `alerta-stock.ogg`
- `assets/img/` *(nuevo)*: `fondo-login-poster.webp`, `video-poster.webp`
- `login.html` *(integración del vídeo demo, a cargo de Daniel Jiménez; el vídeo de fondo y el audio están pendientes de integrar)*
