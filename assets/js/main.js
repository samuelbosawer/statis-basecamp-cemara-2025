/* ============================================================
   Basecamp Cemara — main.js
   Vanilla JavaScript | No dependencies
   ============================================================ */

'use strict';

/* ======================== PAGE LOADER ======================== */
(function () {
  document.body.style.overflow = 'hidden';

  window.addEventListener('load', function () {
    setTimeout(function () {
      var loader = document.getElementById('page-loader');
      if (loader) {
        loader.classList.add('hidden');
        document.body.style.overflow = '';
      }
    }, 700);
  });
})();


/* ======================== HERO SLIDER ======================== */
(function () {
  var slides = document.querySelectorAll('.hero-slide');
  var dots   = document.querySelectorAll('.slide-dot');
  var current = 0;
  var timer;
  var INTERVAL = 5500;

  if (!slides.length) return;

  function activate(index) {
    slides[current].classList.remove('active');
    if (dots[current]) dots[current].classList.remove('active');

    current = (index + slides.length) % slides.length;

    slides[current].classList.add('active');
    if (dots[current]) dots[current].classList.add('active');
  }

  function autoNext() {
    timer = setInterval(function () { activate(current + 1); }, INTERVAL);
  }

  function reset() {
    clearInterval(timer);
    autoNext();
  }

  var prevBtn = document.getElementById('hero-prev');
  var nextBtn = document.getElementById('hero-next');

  if (prevBtn) prevBtn.addEventListener('click', function () { activate(current - 1); reset(); });
  if (nextBtn) nextBtn.addEventListener('click', function () { activate(current + 1); reset(); });

  dots.forEach(function (dot, i) {
    dot.addEventListener('click', function () { activate(i); reset(); });
  });

  /* Touch swipe */
  var startX = 0;
  var heroEl = document.querySelector('.hero-wrapper');
  if (heroEl) {
    heroEl.addEventListener('touchstart', function (e) { startX = e.touches[0].clientX; }, { passive: true });
    heroEl.addEventListener('touchend', function (e) {
      var diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) { activate(diff > 0 ? current + 1 : current - 1); reset(); }
    }, { passive: true });
  }

  autoNext();
})();


/* ======================== NAVBAR ======================== */
(function () {
  var navbar = document.getElementById('navbar');
  var hamburger = document.getElementById('hamburger');
  var mobileMenu = document.getElementById('mobile-menu');
  var hamIcon = document.getElementById('ham-icon');

  if (!navbar) return;

  /* Scroll effect */
  function onScroll() {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  /* Hamburger toggle */
  if (hamburger) {
    hamburger.addEventListener('click', function () {
      var isOpen = mobileMenu.classList.toggle('open');
      if (hamIcon) {
        hamIcon.className = isOpen ? 'fas fa-times' : 'fas fa-bars';
      }
    });
  }

  /* Close mobile menu on nav link click */
  document.querySelectorAll('.mobile-nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
      mobileMenu.classList.remove('open');
      if (hamIcon) hamIcon.className = 'fas fa-bars';
    });
  });

  /* Active nav link on scroll */
  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('.nav-link-item');

  function updateActiveLink() {
    var scrollY = window.scrollY + 120;
    var activeSec = '';
    sections.forEach(function (sec) {
      if (sec.offsetTop <= scrollY) activeSec = sec.getAttribute('id');
    });
    navLinks.forEach(function (link) {
      var href = link.getAttribute('href');
      if (href === '#' + activeSec) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
  window.addEventListener('scroll', updateActiveLink, { passive: true });
})();


/* ======================== SCROLL REVEAL ======================== */
(function () {
  var targets = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  if (!targets.length) return;

  if (!('IntersectionObserver' in window)) {
    /* Fallback for older browsers */
    targets.forEach(function (el) { el.classList.add('visible'); });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  targets.forEach(function (el) { observer.observe(el); });
})();


/* ======================== FAQ ACCORDION ======================== */
(function () {
  var items = document.querySelectorAll('.faq-item');
  if (!items.length) return;

  items.forEach(function (item) {
    var question = item.querySelector('.faq-question');
    var answer   = item.querySelector('.faq-answer');
    if (!question || !answer) return;

    question.addEventListener('click', function () {
      var isOpen = item.classList.contains('open');

      /* Close all */
      items.forEach(function (i) {
        i.classList.remove('open');
        var a = i.querySelector('.faq-answer');
        if (a) a.classList.remove('open');
      });

      /* Open clicked if was closed */
      if (!isOpen) {
        item.classList.add('open');
        answer.classList.add('open');
      }
    });
  });
})();


/* ======================== SCROLL TO TOP ======================== */
(function () {
  var btn = document.getElementById('scroll-top');
  if (!btn) return;

  window.addEventListener('scroll', function () {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();


/* ======================== WHATSAPP POPUP ======================== */
(function () {
  var toggle  = document.getElementById('wa-toggle');
  var popup   = document.getElementById('wa-popup');
  var iconEl  = document.getElementById('wa-icon');
  var floatEl = document.getElementById('wa-float');
  if (!toggle || !popup) return;

  toggle.addEventListener('click', function (e) {
    e.stopPropagation();
    var isOpen = popup.classList.toggle('open');
    if (iconEl) {
      iconEl.className = isOpen ? 'fas fa-times' : 'fab fa-whatsapp';
    }
  });

  document.addEventListener('click', function (e) {
    if (floatEl && !floatEl.contains(e.target)) {
      popup.classList.remove('open');
      if (iconEl) iconEl.className = 'fab fa-whatsapp';
    }
  });
})();


/* ======================== SMOOTH SCROLL ======================== */
(function () {
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var id = this.getAttribute('href');
      if (id === '#') return;
      var target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        window.scrollTo({ top: target.offsetTop - 78, behavior: 'smooth' });
      }
    });
  });
})();


/* ======================== COUNTER ANIMATION ======================== */
(function () {
  var counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  var ran = false;
  function runCounters() {
    if (ran) return;
    ran = true;
    counters.forEach(function (el) {
      var target = parseInt(el.getAttribute('data-count'), 10);
      var duration = 1500;
      var step = target / (duration / 16);
      var current = 0;
      var suffix = el.getAttribute('data-suffix') || '';

      var id = setInterval(function () {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(id);
        }
        el.textContent = Math.floor(current) + suffix;
      }, 16);
    });
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) runCounters();
    });
  }, { threshold: 0.3 });

  counters.forEach(function (el) { observer.observe(el); });
})();
