/* ============================================================
   CORNERSTONE ENTERPRISE SOLUTIONS · home.js
   JavaScript específico del index.html
   ============================================================ */

(function () {
  document.addEventListener('DOMContentLoaded', () => {

    /* ══════════════════════════════════════════════════════════
       1. ROTADOR DE NOTICIAS (Latest News)
       Cambia de noticia cada 5 segundos
       ══════════════════════════════════════════════════════════ */
    const newsRotator = document.getElementById('news-rotator');
    if (newsRotator) {
      const newsItems = newsRotator.querySelectorAll('.news-item');
      let idx = 0;

      if (newsItems.length > 1) {
        setInterval(() => {
          newsItems[idx].classList.remove('active');
          idx = (idx + 1) % newsItems.length;
          newsItems[idx].classList.add('active');
        }, 5000);
      }
    }

    /* ══════════════════════════════════════════════════════════
       2. ANIMACIONES AL SCROLL
       Añade .is-visible cuando el elemento entra en pantalla
       ══════════════════════════════════════════════════════════ */
    const animatedElements = document.querySelectorAll('#grt-inicio-wrapper .animate-on-scroll');
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