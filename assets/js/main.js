/* AjansLabs — interactions */
window._i18n_lang = localStorage.getItem('ajanslabs_lang') || 'tr';
(function () {
  'use strict';

  // sticky nav state
  var nav = document.getElementById('nav');
  window.addEventListener('scroll', function () {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  });

  // mobile menu
  var burger = document.getElementById('burger');
  var links = document.getElementById('navLinks');
  if (burger) {
    burger.addEventListener('click', function () {
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }

  // scroll reveal
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });

  // generate waveform bars
  var wave = document.getElementById('wave');
  if (wave) {
    var bars = 56;
    for (var i = 0; i < bars; i++) {
      var s = document.createElement('span');
      s.style.animationDelay = (-(Math.random() * 1.4)).toFixed(2) + 's';
      s.style.animationDuration = (1 + Math.random()).toFixed(2) + 's';
      wave.appendChild(s);
    }
  }
})();

/* ── Popup helpers ── */
function showOverlay(boxId) {
  var overlay = document.getElementById('popupOverlay');
  overlay.style.display = 'flex';
  document.getElementById(boxId).style.display = 'flex';
  requestAnimationFrame(function () { overlay.classList.add('open'); });
  document.body.style.overflow = 'hidden';
}
function closePopup() {
  var overlay = document.getElementById('popupOverlay');
  overlay.classList.remove('open');
  document.body.style.overflow = '';
  setTimeout(function () {
    overlay.style.display = 'none';
    document.querySelectorAll('.popup-box').forEach(function (b) { b.style.display = 'none'; });
    var audio = document.getElementById('popupAudioEl');
    if (audio) { audio.pause(); audio.src = ''; }
    var iframe = document.getElementById('popupIframe');
    if (iframe) iframe.src = '';
  }, 350);
}
function openImagePopup(src, title) {
  document.getElementById('popupImg').src = src;
  document.getElementById('popupImageTitle').textContent = title;
  showOverlay('popupImage');
}
function openAudioPopup(src, title) {
  document.getElementById('popupAudioEl').src = src;
  document.getElementById('popupAudioTitle').textContent = title;
  showOverlay('popupAudio');
}
function openVideoPopup(embedUrl, title, lang) {
  var titleEl = document.getElementById('popupVideoTitle');
  document.getElementById('popupIframe').src = embedUrl;
  titleEl.textContent = title;
  // Non-Turkish titles need their own lang so uppercase doesn't turn "i" into "İ"
  if (lang) titleEl.setAttribute('lang', lang); else titleEl.removeAttribute('lang');
  showOverlay('popupVideo');
}
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closePopup();
});

var SHEETS_URL = 'https://script.google.com/macros/s/AKfycbw2J9_hEa6BWLfnVS32A2b3YYYIlxIDrt5uMvdH4v_zUmpXdmiY2Xi0FtHzdZYYCV6ozw/exec';

function sendToSheets(data) {
  var params = new URLSearchParams(data).toString();
  fetch(SHEETS_URL + '?' + params, { mode: 'no-cors' }).catch(function () {});
}

function handleForm(e) {
  e.preventDefault();
  var form = e.target;
  var btn = form.querySelector('.form-submit');
  var successEl = document.getElementById('formSuccess');
  var formData = Object.fromEntries(new FormData(form));
  btn.disabled = true;
  btn.textContent = window._i18n_lang === 'en' ? 'Sending…' : 'Gönderiliyor…';

  // Send to Google Sheets
  sendToSheets({
    type: 'contact',
    name: formData.name || '',
    email: formData.email || '',
    company: formData.company || '',
    service: formData.service || '',
    message: formData.message || ''
  });

  // Send to Web3Forms for email
  fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  })
  .then(function (res) { return res.json(); })
  .then(function (data) {
    if (data.success) {
      form.reset();
      btn.style.display = 'none';
      successEl.style.display = 'block';
    } else {
      btn.disabled = false;
      btn.textContent = window._i18n_lang === 'en' ? '— Request a Free Business Analysis — →' : '— Ücretsiz İş Analizi Talep Et — →';
      alert(window._i18n_lang === 'en' ? 'An error occurred, please try again.' : 'Bir hata oluştu, lütfen tekrar deneyin.');
    }
  })
  .catch(function () {
    btn.disabled = false;
    btn.textContent = window._i18n_lang === 'en' ? '— Request a Free Business Analysis — →' : '— Ücretsiz İş Analizi Talep Et — →';
    alert(window._i18n_lang === 'en' ? 'Connection error, please try again.' : 'Bağlantı hatası, lütfen tekrar deneyin.');
  });
}

function handleNewsletter(e) {
  e.preventDefault();
  var form = e.target;
  var btn = form.querySelector('button');
  var formData = Object.fromEntries(new FormData(form));
  btn.disabled = true;
  btn.textContent = '...';

  // Send to Google Sheets
  sendToSheets({
    type: 'newsletter',
    email: formData.email || ''
  });

  // Send to Web3Forms for email notification
  fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  })
  .then(function (res) { return res.json(); })
  .then(function (data) {
    if (data.success) {
      form.style.display = 'none';
      document.getElementById('newsletterSuccess').style.display = 'block';
    } else {
      btn.disabled = false;
      btn.textContent = window._i18n_lang === 'en' ? 'Subscribe' : 'Kayıt Ol';
    }
  })
  .catch(function () {
    btn.disabled = false;
    btn.textContent = window._i18n_lang === 'en' ? 'Subscribe' : 'Kayıt Ol';
  });
}

/* WhatsApp FAB — styles.css + main.js yükleyen her sayfada görünür */
(function () {
  'use strict';

  var PHONE = '905394901847';
  var MSG = {
    tr: 'Merhaba AjansLabs! Bir projem var, konuşabilir miyiz?',
    en: 'Hi AjansLabs! I have a project in mind — can we talk?'
  };
  var LABEL = { tr: 'WhatsApp\'tan yaz', en: 'Chat on WhatsApp' };
  var GLYPH = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.347-.347.52-.52.174-.172.231-.296.347-.495.115-.198.057-.371-.03-.52-.086-.148-.66-1.59-.904-2.178-.237-.571-.479-.492-.66-.502-.172-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';

  var fab = document.createElement('a');
  fab.className = 'wa-fab';
  fab.id = 'waFab';
  fab.target = '_blank';
  fab.rel = 'noopener';
  fab.innerHTML = GLYPH + '<span class="wa-label"></span>';
  document.body.appendChild(fab);

  // footer son satırı butonun soluna hizalansın diye gerçek genişliği paylaş
  function syncWidth() {
    document.documentElement.style.setProperty('--wa-w', fab.offsetWidth + 'px');
  }

  // i18n.js dil değiştirdiğinde de çağrılır
  window.updateWaFab = function (lang) {
    lang = (lang === 'en' || lang === 'tr') ? lang : (window._i18n_lang || 'tr');
    fab.href = 'https://wa.me/' + PHONE + '?text=' + encodeURIComponent(MSG[lang]);
    fab.querySelector('.wa-label').textContent = LABEL[lang];
    fab.setAttribute('aria-label', LABEL[lang]);
    syncWidth();
  };
  window.updateWaFab();
  window.addEventListener('resize', syncWidth);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(syncWidth);
})();
