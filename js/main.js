/* Jean Piaget Tambogrande. Navegación, movimiento y galería del sitio. */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function initNav() {
    var toggle = document.querySelector(".nav__toggle");
    var links = document.querySelector(".nav__links");
    if (!toggle || !links) return;
    var icon = toggle.querySelector("i");

    function setOpen(open) {
      links.setAttribute("data-open", open ? "true" : "false");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
      if (icon) {
        icon.classList.toggle("ph-list", !open);
        icon.classList.toggle("ph-x", open);
      }
    }

    setOpen(false);
    toggle.addEventListener("click", function () {
      setOpen(links.getAttribute("data-open") !== "true");
    });
    links.addEventListener("click", function (event) {
      if (event.target.closest('a[href^="#"]')) setOpen(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && links.getAttribute("data-open") === "true") {
        setOpen(false);
        toggle.focus();
      }
    });
    var desktop = window.matchMedia("(min-width: 1021px)");
    if (desktop.addEventListener) desktop.addEventListener("change", function (e) { if (e.matches) setOpen(false); });
  }

  function initReveal() {
    var targets = document.querySelectorAll(".reveal");
    if (!targets.length) return;
    if (reduceMotion || !("IntersectionObserver" in window)) {
      targets.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });
    targets.forEach(function (el, i) {
      if (el.getAttribute("data-reveal-group")) el.style.setProperty("--reveal-delay", (i % 4) * 70 + "ms");
      observer.observe(el);
    });
  }

  function initDesign() {
    document.querySelectorAll('.split').forEach(function (split) {
      split.querySelectorAll(':scope > .reveal').forEach(function (el, i) {
        el.dataset.reveal = i === 0 ? 'left' : 'right';
      });
    });
    document.querySelectorAll('.gallery .reveal').forEach(function (el, i) {
      el.dataset.reveal = 'scale';
      el.style.setProperty('--reveal-delay', (i % 3) * 80 + 'ms');
    });
    var header = document.querySelector('.site-header');
    if (header && 'IntersectionObserver' in window) {
      var sentinel = document.createElement('div');
      sentinel.setAttribute('aria-hidden', 'true');
      sentinel.style.cssText = 'position:absolute;top:0;width:1px;height:1px;pointer-events:none';
      document.body.prepend(sentinel);
      new IntersectionObserver(function (entries) {
        header.classList.toggle('is-scrolled', !entries[0].isIntersecting);
      }).observe(sentinel);
    }
  }

  function initGallery() {
    var images = Array.prototype.slice.call(document.querySelectorAll('.gallery img'));
    if (!images.length || typeof HTMLDialogElement === 'undefined') return;
    var dialog = document.createElement('dialog');
    if (typeof dialog.showModal !== 'function') return;
    dialog.className = 'gallery-dialog';
    dialog.setAttribute('aria-labelledby', 'gallery-dialog-title');
    dialog.setAttribute('aria-describedby', 'gallery-dialog-caption');
    dialog.innerHTML = '<div class="gallery-dialog__bar"><h2 id="gallery-dialog-title">Nuestra galería</h2><button type="button" class="gallery-dialog__close" aria-label="Cerrar fotografía">×</button></div>' +
      '<div class="gallery-dialog__stage"><button type="button" class="gallery-dialog__arrow gallery-dialog__arrow--prev" aria-label="Fotografía anterior">‹</button><img class="gallery-dialog__image" alt=""><button type="button" class="gallery-dialog__arrow gallery-dialog__arrow--next" aria-label="Fotografía siguiente">›</button></div>' +
      '<p class="gallery-dialog__caption" id="gallery-dialog-caption" aria-live="polite"></p>';
    document.body.appendChild(dialog);
    var selected = 0;
    var opener = null;
    var preview = dialog.querySelector('.gallery-dialog__image');
    var caption = dialog.querySelector('.gallery-dialog__caption');
    var title = dialog.querySelector('#gallery-dialog-title');
    var close = dialog.querySelector('.gallery-dialog__close');
    function show(index) {
      selected = (index + images.length) % images.length;
      var source = images[selected];
      preview.src = source.dataset.full || source.currentSrc || source.src;
      preview.alt = source.alt;
      var label = source.closest('figure').querySelector('figcaption');
      caption.textContent = label ? label.textContent : source.alt;
      title.textContent = 'Fotografía ' + (selected + 1) + ' de ' + images.length;
    }
    images.forEach(function (img, index) {
      var button = document.createElement('button');
      button.type = 'button';
      button.className = 'photo-open';
      button.setAttribute('aria-label', 'Ampliar: ' + img.alt);
      img.before(button);
      button.appendChild(img);
      button.addEventListener('click', function () {
        opener = button;
        show(index);
        dialog.showModal();
        document.body.classList.add('gallery-is-open');
        close.focus();
      });
    });
    close.addEventListener('click', function () { dialog.close(); });
    dialog.querySelector('.gallery-dialog__arrow--prev').addEventListener('click', function () { show(selected - 1); });
    dialog.querySelector('.gallery-dialog__arrow--next').addEventListener('click', function () { show(selected + 1); });
    dialog.addEventListener('keydown', function (event) {
      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        event.preventDefault();
        show(selected + (event.key === 'ArrowRight' ? 1 : -1));
      }
    });
    dialog.addEventListener('click', function (event) { if (event.target === dialog) dialog.close(); });
    dialog.addEventListener('close', function () {
      document.body.classList.remove('gallery-is-open');
      if (opener) opener.focus({ preventScroll: true });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initNav();
    initDesign();
    initReveal();
    initGallery();
  });

  function initAmbientControl() {
    if ('IntersectionObserver' in window) {
      var ambientObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          entry.target.classList.toggle('ambient-offscreen', !entry.isIntersecting);
        });
      });
      document.querySelectorAll('.hero, .page-hero, .tb-hero').forEach(function (section) {
        ambientObserver.observe(section);
      });
    }
    document.addEventListener('visibilitychange', function () {
      document.documentElement.classList.toggle('ambient-hidden', document.hidden);
    });
    var footer = document.querySelector('.site-footer');
    if (!footer || reduceMotion) return;
    var button = document.createElement('button');
    button.type = 'button';
    button.className = 'motion-toggle';
    button.textContent = 'Pausar fondo';
    button.setAttribute('aria-pressed', 'false');
    button.addEventListener('click', function () {
      var paused = document.documentElement.classList.toggle('motion-paused');
      button.setAttribute('aria-pressed', String(paused));
      button.textContent = paused ? 'Activar fondo' : 'Pausar fondo';
    });
    var container = footer.querySelector('.shell') || footer;
    container.appendChild(button);
  }
  initAmbientControl();
})();
