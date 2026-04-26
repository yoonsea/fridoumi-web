(function () {
  // Auto-detect language on first visit
  var userLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
  var isKorean = userLang.startsWith('ko');
  var path = window.location.pathname;
  var isKoPage = path.includes('/ko/') || path.endsWith('/ko');

  if (isKorean && !isKoPage && !localStorage.getItem('langChosen')) {
    // Use relative redirect: insert 'ko/' before the filename
    // Works correctly on both custom domains and GitHub Pages subdirectory deployments
    var basePath = path.substring(0, path.lastIndexOf('/') + 1); // e.g. '/fridoumi-web/'
    var filename = path.split('/').pop();                          // e.g. 'index.html'
    var koUrl = basePath + 'ko/' + (filename || 'index.html');
    window.location.replace(koUrl);
  }

  // Highlight active language in switcher
  document.addEventListener('DOMContentLoaded', function () {
    var links = document.querySelectorAll('.lang-switcher a');
    links.forEach(function (a) {
      a.addEventListener('click', function () {
        localStorage.setItem('langChosen', a.dataset.lang || 'en');
      });
    });

    // FAQ accordion
    var faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(function (item) {
      var btn = item.querySelector('.faq-question');
      if (!btn) return;
      btn.addEventListener('click', function () {
        var isOpen = item.classList.contains('open');
        faqItems.forEach(function (i) { i.classList.remove('open'); });
        if (!isOpen) item.classList.add('open');
      });
    });
  });
})();
