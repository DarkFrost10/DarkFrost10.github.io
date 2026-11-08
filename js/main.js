/* ============================================================
   CORNERSTONE ENTERPRISE SOLUTIONS · main.js
   JavaScript compartido para index.html y contact.html
   ============================================================ */

(function () {
  document.addEventListener('DOMContentLoaded', () => {

    /* ══════════════════════════════════════════════════════════
       1. HEADER STICKY
       Se vuelve sólido al bajar de 40px
       ══════════════════════════════════════════════════════════ */
    const header = document.querySelector('.grt-header');
    const spacer = document.getElementById('grt-header-spacer');

    if (header && spacer) {
      const headerHeight = header.offsetHeight;
      spacer.style.height = headerHeight + 'px';

      const handleScroll = () => {
        if (window.pageYOffset > 40) {
          header.classList.add('sticky-active');
          spacer.classList.add('active');
        } else {
          header.classList.remove('sticky-active');
          spacer.classList.remove('active');
        }
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();
    }

    /* ══════════════════════════════════════════════════════════
       2. MENÚ MÓVIL
       Abrir/cerrar el modal, bloquear scroll del body
       ══════════════════════════════════════════════════════════ */
    const hamburger = document.getElementById('grt-hamburger-menu');
    const modal = document.getElementById('grt-mobile-menu-modal');
    const closeBtn = document.getElementById('grt-close-menu-button');
    const body = document.body;

    const openModal = () => {
      if (modal) modal.classList.add('active');
      if (body) body.classList.add('grt-modal-open');
      if (hamburger) hamburger.classList.add('is-active');
    };

    const closeModal = () => {
      if (modal) modal.classList.remove('active');
      if (body) body.classList.remove('grt-modal-open');
      if (hamburger) hamburger.classList.remove('is-active');
    };

    if (hamburger && modal && closeBtn) {
      hamburger.addEventListener('click', openModal);
      closeBtn.addEventListener('click', closeModal);

      /* Cerrar el menú al hacer clic en cualquier enlace dentro del modal */
      modal.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeModal);
      });
    }
    
    const animatedElements = document.querySelectorAll('#grt-services-wrapper .animate-on-scroll');
        if (animatedElements.length > 0 && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  animatedElements.forEach(el => observer.observe(el));
}

  });
})();
