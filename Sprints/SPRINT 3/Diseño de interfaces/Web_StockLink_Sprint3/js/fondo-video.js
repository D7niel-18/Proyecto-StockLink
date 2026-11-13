// Vídeo de fondo de las pantallas de acceso (login y registro).
// - Solo se carga y reproduce en escritorio: en móvil el panel está oculto y no se gastan datos.
// - No arranca solo si el usuario prefiere menos movimiento (prefers-reduced-motion).
// - El botón permite pausar y reanudar, porque el movimiento de más de 5 s debe poder detenerse (WCAG 2.2.2).
(() => {
  const video = document.querySelector('[data-fondo-video]');
  const boton = document.querySelector('[data-fondo-pausa]');
  if (!video || !boton) return;

  const escritorio = window.matchMedia('(min-width: 64rem)');
  const sinMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)');
  let eleccion = null; // null = automático; 'play' o 'pausa' = decisión del usuario

  const debeReproducir = () =>
    eleccion ? eleccion === 'play' : escritorio.matches && !sinMovimiento.matches;

  const etiqueta = () => {
    boton.textContent = video.paused ? 'Reanudar animación' : 'Pausar animación';
  };

  const actualizar = () => {
    boton.hidden = !escritorio.matches;
    if (escritorio.matches && debeReproducir()) {
      video.preload = 'auto';
      video.play().catch(() => {});
    } else {
      video.pause();
    }
    etiqueta();
  };

  boton.addEventListener('click', () => {
    eleccion = video.paused ? 'play' : 'pausa';
    actualizar();
  });
  video.addEventListener('play', etiqueta);
  video.addEventListener('pause', etiqueta);
  escritorio.addEventListener('change', actualizar);
  sinMovimiento.addEventListener('change', actualizar);
  actualizar();
})();
