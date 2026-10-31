// =========================================================
// Interacciones del portafolio:
//   1. Botón de tema claro/oscuro (se guarda en localStorage)
//   2. Menú móvil
//   3. Resaltar en el menú la sección que se está viendo
//   4. Animación suave de aparición al hacer scroll
//   5. Año actual en el pie de página
// =========================================================

(function () {
  const root = document.documentElement;

  // 1. Tema claro / oscuro
  const botonTema = document.querySelector('.theme-toggle');
  function aplicarTema(tema) {
    root.setAttribute('data-theme', tema);
    document.querySelector('meta[name="theme-color"]')
      .setAttribute('content', tema === 'dark' ? '#0b1114' : '#f6f7fb');
  }
  aplicarTema(root.getAttribute('data-theme') || 'light');
  botonTema.addEventListener('click', function () {
    const nuevo = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    aplicarTema(nuevo);
    try { localStorage.setItem('tema', nuevo); } catch (e) { /* modo privado */ }
  });

  // 2. Menú móvil
  const botonMenu = document.querySelector('.nav-toggle');
  const menu = document.getElementById('nav-menu');
  function cerrarMenu() {
    menu.classList.remove('is-open');
    botonMenu.setAttribute('aria-expanded', 'false');
    botonMenu.setAttribute('aria-label', 'Open menu');
  }
  botonMenu.addEventListener('click', function () {
    const abierto = menu.classList.toggle('is-open');
    botonMenu.setAttribute('aria-expanded', String(abierto));
    botonMenu.setAttribute('aria-label', abierto ? 'Close menu' : 'Open menu');
  });
  menu.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', cerrarMenu); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') cerrarMenu(); });

  // 3. Sección activa en el menú
  const enlaces = Array.from(menu.querySelectorAll('a'));
  const secciones = enlaces
    .map(function (a) { return document.querySelector(a.getAttribute('href')); })
    .filter(Boolean);

  if ('IntersectionObserver' in window) {
    const observador = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (!entrada.isIntersecting) return;
        const id = '#' + entrada.target.id;
        enlaces.forEach(function (a) {
          a.classList.toggle('is-active', a.getAttribute('href') === id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    secciones.forEach(function (s) { observador.observe(s); });

    // 4. Animación de aparición
    const reveal = new IntersectionObserver(function (entradas, obs) {
      entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
          entrada.target.classList.add('is-visible');
          obs.unobserve(entrada.target);
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.section .card, .focus-grid li').forEach(function (el) {
      el.classList.add('reveal');
      reveal.observe(el);
    });
  }

  // 5. Año actual
  const anio = document.getElementById('year');
  if (anio) anio.textContent = new Date().getFullYear();
})();
