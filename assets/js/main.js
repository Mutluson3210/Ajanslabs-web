/* AjansLabs — interactions */
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
function openVideoPopup(embedUrl, title) {
  document.getElementById('popupIframe').src = embedUrl;
  document.getElementById('popupVideoTitle').textContent = title;
  showOverlay('popupVideo');
}
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closePopup();
});

function handleForm(e) {
  e.preventDefault();
  var form = e.target;
  var btn = form.querySelector('.form-submit');
  var successEl = document.getElementById('formSuccess');
  btn.disabled = true;
  btn.textContent = 'Gönderiliyor…';

  fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(Object.fromEntries(new FormData(form)))
  })
  .then(function (res) { return res.json(); })
  .then(function (data) {
    if (data.success) {
      form.reset();
      btn.style.display = 'none';
      successEl.style.display = 'block';
    } else {
      btn.disabled = false;
      btn.textContent = '— Ücretsiz İş Analizi Talep Et —';
      alert('Bir hata oluştu, lütfen tekrar deneyin.');
    }
  })
  .catch(function () {
    btn.disabled = false;
    btn.textContent = '— Ücretsiz İş Analizi Talep Et —';
    alert('Bağlantı hatası, lütfen tekrar deneyin.');
  });
}

function handleNewsletter(e) {
  e.preventDefault();
  var form = e.target;
  var btn = form.querySelector('button');
  btn.disabled = true;
  btn.textContent = '...';

  fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(Object.fromEntries(new FormData(form)))
  })
  .then(function (res) { return res.json(); })
  .then(function (data) {
    if (data.success) {
      form.style.display = 'none';
      document.getElementById('newsletterSuccess').style.display = 'block';
    } else {
      btn.disabled = false;
      btn.textContent = 'Kayıt Ol';
    }
  })
  .catch(function () {
    btn.disabled = false;
    btn.textContent = 'Kayıt Ol';
  });
}
