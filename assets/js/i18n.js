/* AjansLabs — i18n language switcher */
(function () {
  'use strict';

  var translations = {
    /* ── NAV ── */
    nav_services:   { tr: 'Hizmetler',          en: 'Services' },
    nav_work:       { tr: 'İşler',              en: 'Work' },
    nav_packages:   { tr: 'Hizmet Paketleri',   en: 'Service Packages' },
    nav_music:      { tr: 'Müzik & PR',         en: 'Music & PR' },
    nav_about:      { tr: 'Hakkımızda',         en: 'About' },
    nav_blog:       { tr: 'Blog',               en: 'Blog' },
    nav_contact:    { tr: 'İletişim',           en: 'Contact' },
    nav_cta:        { tr: '— Ücretsiz İş Analizi Talep Et —', en: '— Request a Free Business Analysis —' },

    /* ── HERO ── */
    hero_desc: {
      tr: 'Markalar ve işletmeler için otomasyon, fikir ve içerik üreten AI creative ajans!<br>Reklam ve sosyal medya yönetiminden iOS ve Android uygulamaya,<br>marka kimliğinden marka müziğine kadar tek çatı altında.',
      en: 'An AI creative agency producing automation, ideas & content for brands and businesses!<br>From advertising and social media management to iOS & Android apps, brand identity to brand music — all under one roof.'
    },
    hero_meta: { tr: 'Creative · Strateji · Ses', en: 'Creative · Strategy · Sound' },

    /* ── SERVICES ── */
    svc_title: { tr: 'Ne yapıyoruz',          en: 'What we do' },
    svc_idx:   { tr: '(01 — Hizmetler)',      en: '(01 — Services)' },

    svc1_name: { tr: 'Marka & Strateji',      en: 'Brand & Strategy' },
    svc1_tags: { tr: 'Marka kimliği · Kampanya & strateji · Lansman projeleri', en: 'Brand identity · Campaign & strategy · Launch projects' },
    svc2_name: { tr: 'Tasarım',               en: 'Design' },
    svc2_tags: { tr: 'Dijital & basılı materyal · Web tasarımı · Sosyal medya görselleri', en: 'Digital & print materials · Web design · Social media visuals' },
    svc3_name: { tr: 'Web & APP',             en: 'Web & APP' },
    svc3_tags: { tr: 'Web siteleri · iOS & Android uygulamaları', en: 'Websites · iOS & Android apps' },
    svc4_name: { tr: 'AI-Dönüşüm',           en: 'AI-Transformation' },
    svc4_tags: { tr: 'CRM otomasyonu · Akıllı chatbot · Süreç otomasyonu', en: 'CRM automation · Smart chatbot · Process automation' },
    svc5_name: { tr: 'AI-Marketing',          en: 'AI-Marketing' },
    svc5_tags: { tr: 'AI içerik stratejisi · Otomatik kampanyalar · SEO optimizasyonu', en: 'AI content strategy · Automated campaigns · SEO optimization' },
    svc6_name: { tr: 'Ses & Müzik',           en: 'Sound & Music' },
    svc6_tags: { tr: 'Markalara özel müzik · Sonic branding', en: 'Custom brand music · Sonic branding' },
    svc7_name: { tr: 'Medya & PR',            en: 'Media & PR' },
    svc7_tags: { tr: 'Reklam · Sosyal medya yönetimi · Basın bülteni dağıtımı', en: 'Advertising · Social media management · Press release distribution' },

    /* ── WORK ── */
    work_title: { tr: 'Seçili işler',          en: 'Selected work' },
    work_idx:   { tr: '(02 — Portfolyo)',      en: '(02 — Portfolio)' },
    work1_kind: { tr: 'Marka Kimliği',         en: 'Brand Identity' },
    work2_kind: { tr: 'Web: E-Ticaret',        en: 'Web: E-Commerce' },
    work3_kind: { tr: 'Marka Müziği',          en: 'Brand Music' },
    work4_kind: { tr: 'Müzik Videosu',         en: 'Music Video' },

    /* ── MUSIC & PR ── */
    music_eyebrow: { tr: 'Farkımız',           en: 'Our Edge' },
    music_badge:   { tr: 'Pek Yakında',        en: 'Coming Soon' },
    music_title:   { tr: 'Markaların sesi, müzisyenlerin sahnesi', en: "The voice of brands, the stage of musicians" },
    music_desc:    { tr: 'Sadece görsel değil, işitsel kimlik de tasarlıyoruz. Markalara özel müzik üretiyor; müzisyenler ve şirketler için basın bültenlerini doğru kanallara ulaştırıyoruz.',
                     en: "We don't just design visuals — we craft sonic identities. We produce custom music for brands and distribute press releases to the right channels for musicians and companies." },
    music_pill1: { tr: 'Markaya özel müzik',     en: 'Custom brand music' },
    music_pill2: { tr: 'Sonic branding',          en: 'Sonic branding' },
    music_pill3: { tr: 'Müzisyen PR\'ı',          en: 'Musician PR' },
    music_pill4: { tr: 'Basın bülteni dağıtımı',  en: 'Press release distribution' },

    /* ── NEWSLETTER ── */
    nl_title:       { tr: 'Haberdar ol',                                           en: 'Stay informed' },
    nl_desc:        { tr: 'Müzik & PR hizmetimiz başladığında ilk sen öğren.',      en: 'Be the first to know when our Music & PR service launches.' },
    nl_placeholder: { tr: 'E-posta adresin',                                        en: 'Your email' },
    nl_btn:         { tr: 'Kayıt Ol',                                               en: 'Subscribe' },
    nl_success:     { tr: 'Kaydın alındı! Hizmet başladığında sana haber vereceğiz.', en: "You're subscribed! We'll notify you when the service launches." },

    /* ── PROCESS ── */
    proc_title: { tr: 'Nasıl çalışıyoruz',   en: 'How we work' },
    proc_idx:   { tr: '(03 — Süreç)',        en: '(03 — Process)' },
    proc1_desc: { tr: 'Hedefi, kitleyi ve hikâyeyi birlikte netleştiriyoruz.',       en: 'We clarify the goal, audience and story together.' },
    proc2_name: { tr: 'Konsept',              en: 'Concept' },
    proc2_desc: { tr: 'Strateji ve yaratıcı yönü tek bir fikirde topluyoruz.',       en: 'We unite strategy and creative direction in a single idea.' },
    proc3_name: { tr: 'Üretim',               en: 'Production' },
    proc3_desc: { tr: 'Tasarım, kod, ses — hepsi aynı ekipte buluşuyor.',           en: 'Design, code, sound — all come together in one team.' },
    proc4_name: { tr: 'Lansman',              en: 'Launch' },
    proc4_desc: { tr: 'Doğru kanallarda, doğru zamanda sahneye çıkarıyoruz.',        en: 'We go live on the right channels, at the right time.' },

    /* ── BLOG ── */
    blog_idx:   { tr: '(04 — İçerik)',       en: '(04 — Content)' },
    blog1_date: { tr: 'Haziran 2026',        en: 'June 2026' },
    blog1_title:{ tr: "2026'da İş Dünyasını Şekillendiren AI Trendleri",              en: 'AI Trends Shaping Business in 2026' },
    blog1_desc: { tr: 'Üretken yapay zeka, otomasyon ve akıllı karar sistemleri — bu yıl şirketlerin gündemine giren en kritik gelişmeleri ve sektörel etkileri inceliyoruz.',
                  en: 'Generative AI, automation and smart decision systems — we analyze the most critical developments and their industry impact this year.' },
    blog2_date: { tr: 'Mayıs 2026',          en: 'May 2026' },
    blog2_title:{ tr: 'İş Süreçlerinde AI: Gerçek Hayattan <span lang="en">Best Practice</span>\'ler',
                  en: 'AI in Business Processes: Real-World Best Practices' },
    blog2_desc: { tr: 'Müşteri hizmetlerinden finans raporlamasına, pazarlamadan lojistiğe kadar — AI\'ı operasyonlarına başarıyla entegre eden şirketlerden somut uygulama örnekleri.',
                  en: 'From customer service to financial reporting, marketing to logistics — real case studies from companies that successfully integrated AI into their operations.' },
    blog_read:  { tr: 'Devamını Oku ↗',      en: 'Read More ↗' },

    /* ── QUOTE ── */
    quote_text: { tr: 'Bir marka <em>görünür</em>, ama iyi bir marka <em>duyulur.</em>',
                  en: 'A brand is <em>seen</em>, but a great brand is <em>heard.</em>' },
    quote_cite: { tr: '— AjansLabs manifestosu', en: '— AjansLabs manifesto' },

    /* ── CONTACT ── */
    contact_title: { tr: 'Bir <a href="mailto:hello@ajanslabs.com">fikrin</a> mi var?',
                     en: 'Got an <a href="mailto:hello@ajanslabs.com">idea</a>?' },
    contact_desc:  { tr: 'Ücretsiz iş analizi için formu doldur, 24 saat içinde dönelim.',
                     en: 'Fill out the form for a free business analysis, and we\'ll get back within 24 hours.' },

    form_name:       { tr: 'Ad Soyad',                               en: 'Full Name' },
    form_name_ph:    { tr: 'Adın Soyadın',                            en: 'Your full name' },
    form_email:      { tr: 'E-posta',                                 en: 'Email' },
    form_company:    { tr: 'Şirket / Marka',                          en: 'Company / Brand' },
    form_company_ph: { tr: 'Şirket adı',                              en: 'Company name' },
    form_service:    { tr: 'İlgilendiğin Hizmet',                     en: 'Service of Interest' },
    form_msg:        { tr: 'Proje Hakkında Kısaca',                    en: 'About Your Project' },
    form_msg_ph:     { tr: 'Ne yapmak istiyorsun? Hedefin nedir?',     en: 'What do you want to achieve? What is your goal?' },
    form_submit:     { tr: '— Ücretsiz İş Analizi Talep Et — →',      en: '— Request a Free Business Analysis — →' },
    form_success:    { tr: 'Teşekkürler! En kısa sürede seninle iletişime geçeceğiz.', en: 'Thank you! We\'ll be in touch shortly.' },

    form_service_opts: {
      tr: ['Seçiniz…', 'Marka & Strateji', 'AI-Dönüşüm', 'AI-Marketing', 'Tasarım', 'Web & APP', 'Ses & Müzik', 'Medya & PR', 'Hizmet Paketi'],
      en: ['Select…', 'Brand & Strategy', 'AI-Transformation', 'AI-Marketing', 'Design', 'Web & APP', 'Sound & Music', 'Media & PR', 'Service Package']
    },

    /* ── PAKETLER PAGE ── */
    pkg_eyebrow:    { tr: 'Hizmet Paketleri',   en: 'Service Packages' },
    pkg_hero_title: { tr: 'Markanı<br><span class="outline">büyütecek</span><br>paketler.', en: 'Packages to<br><span class="outline">grow</span><br>your brand.' },
    pkg_hero_sub:   { tr: 'İhtiyaca göre tasarlanmış ve ölçülebilir sonuçlar vaat eden hizmet paketlerimizle tanışın.', en: 'Discover our service packages designed for your needs with measurable results.' },
    pkg_cta:        { tr: 'Teklif Al →',         en: 'Get a Quote →' },
    pkg_strip:      { tr: 'Hangi paketin sana uygun olduğundan emin değil misin?', en: "Not sure which package is right for you?" },

    pkg1_title: { tr: 'Kurumsal Kimlik & Web Tasarımı',  en: 'Brand Identity & Web Design' },
    pkg1_desc:  { tr: 'Sıfırdan güçlü bir marka kimliği ve profesyonel dijital varlık.', en: 'A strong brand identity and professional digital presence from scratch.' },
    pkg1_items: {
      tr: ['Logo & kurumsal kimlik tasarımı', 'Kartvizit, antet & klasör tasarımı', 'Marka rehberi (brand guideline) hazırlanması', 'Renk paleti, tipografi & ikon sistemi', '5–10 sayfalık kurumsal / E-ticaret web sitesi', 'Mobil uyumlu responsive tasarım', 'Temel SEO kurulumu & hız optimizasyonu', '6 ay teknik destek'],
      en: ['Logo & corporate identity design', 'Business card, letterhead & folder design', 'Brand guideline preparation', 'Color palette, typography & icon system', '5–10 page corporate / E-commerce website', 'Mobile-friendly responsive design', 'Basic SEO setup & speed optimization', '6 months technical support']
    },

    pkg2_badge:   { tr: 'En Popüler',           en: 'Most Popular' },
    pkg2_limited: { tr: '⚡ Sınırlı Kontenjan',  en: '⚡ Limited Availability' },
    pkg2_title:   { tr: 'Sosyal Medya Yönetimi', en: 'Social Media Management' },
    pkg2_desc:    { tr: 'Markanı sosyal medyada öne çıkar, rakiplerinden ayrış.', en: 'Stand out on social media and differentiate from competitors.' },
    pkg2_items: {
      tr: ['META Reklam Yönetimi (Instagram & Facebook)', '3 Adet Reels Video üretimi', '20 Feed Post (tasarım + metin)', '20 Story görseli', 'Aylık içerik takvimi planlaması', 'Topluluk yönetimi & yorum takibi', 'Raporlama & Performans Takibi', 'Rakip analizi (aylık)'],
      en: ['META Ad Management (Instagram & Facebook)', '3 Reels Video production', '20 Feed Posts (design + copy)', '20 Story visuals', 'Monthly content calendar planning', 'Community management & comment tracking', 'Reporting & Performance Tracking', 'Competitor analysis (monthly)']
    },

    pkg3_title: { tr: 'Şirketler için AI Dönüşüm Paketi', en: 'AI Transformation Package for Businesses' },
    pkg3_desc:  { tr: 'İş süreçlerini otomatize et, maliyeti düşür, büyümeyi hızlandır.', en: 'Automate business processes, reduce costs, accelerate growth.' },
    pkg3_items: {
      tr: ['CRM otomasyonu & entegrasyonu', '7/24 akıllı chatbot müşteri desteği', 'CRM otomatik güncelleme & müşteri takibi', 'Müşteri memnuniyeti otomatik analizi', 'Randevu / rezervasyon yönetim sistemi', 'Email pazarlama kampanya optimizasyonu', 'Eski müşterileri canlandırma akışları', 'AI Destekli raporlama & öngörü paneli'],
      en: ['CRM automation & integration', '24/7 smart chatbot customer support', 'Automated CRM updates & customer tracking', 'Automated customer satisfaction analysis', 'Appointment / reservation management system', 'Email marketing campaign optimization', 'Dormant customer reactivation flows', 'AI-powered reporting & insights dashboard']
    },

    pkg4_title: { tr: 'Markaya Özel Müzik',     en: 'Custom Brand Music' },
    pkg4_desc:  { tr: 'Sadece görünmekle kalmayan, duyulan bir marka ol.', en: "Be a brand that's not just seen, but heard." },
    pkg4_items: {
      tr: ['Markaya özel özgün müzik üretimi', 'Sonic branding & kimlik sesi tasarımı', 'Jingle & reklam müziği', 'Sosyal medya içerik müzikleri', 'Mağazalar için müzik tasarımı', 'WAV + MP3 yüksek kaliteli teslimat', '2 revizyon hakkı'],
      en: ['Custom original music production', 'Sonic branding & identity sound design', 'Jingle & commercial music', 'Social media content music', 'In-store music design', 'WAV + MP3 high-quality delivery', '2 revision rounds']
    },

    /* ── FOOTER ── */
    foot_tagline:  { tr: 'Markalar ve müzisyenler için creative ajans.', en: 'Creative agency for brands and musicians.' },
    foot_services: { tr: 'Hizmetler',     en: 'Services' },
    foot_agency:   { tr: 'Ajans',         en: 'Agency' },
    foot_contact:  { tr: 'İletişim',      en: 'Contact' },
    foot_social:   { tr: 'Sosyal',        en: 'Social' },
    foot_copy:     { tr: '© 2026 AjansLabs. Tüm hakları saklıdır.', en: '© 2026 AjansLabs. All rights reserved.' }
  };

  var currentLang = localStorage.getItem('ajanslabs_lang') || 'tr';

  function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem('ajanslabs_lang', lang);
    document.documentElement.lang = lang;

    // Update switch button text
    var btn = document.getElementById('langSwitch');
    if (btn) btn.textContent = lang === 'tr' ? 'EN' : 'TR';

    // Text content / innerHTML
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var t = translations[key];
      if (!t) return;
      var val = t[lang];
      if (typeof val === 'string' && (val.indexOf('<') > -1)) {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    });

    // Placeholders
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-ph');
      var t = translations[key];
      if (t) el.placeholder = t[lang];
    });

    // Select options
    document.querySelectorAll('[data-i18n-opts]').forEach(function (sel) {
      var key = sel.getAttribute('data-i18n-opts');
      var t = translations[key];
      if (!t) return;
      var opts = t[lang];
      var options = sel.querySelectorAll('option');
      opts.forEach(function (text, i) {
        if (options[i]) options[i].textContent = text;
      });
    });

    // List items (paketler)
    document.querySelectorAll('[data-i18n-list]').forEach(function (ul) {
      var key = ul.getAttribute('data-i18n-list');
      var t = translations[key];
      if (!t) return;
      var items = t[lang];
      var lis = ul.querySelectorAll('li');
      items.forEach(function (text, i) {
        if (lis[i]) {
          lis[i].innerHTML = '<span class="check">✓</span>' + text;
        }
      });
    });

    // Marquee
    var marquee = document.getElementById('marqueeTrack');
    if (marquee) {
      var items = marquee.getAttribute('data-' + lang).split('|');
      var spans = marquee.querySelectorAll('span');
      spans.forEach(function (s, i) {
        s.textContent = items[i % items.length];
      });
    }

    // Hero heading
    var heroHead = document.getElementById('heroHead');
    if (heroHead) {
      var lines = heroHead.querySelectorAll('.line');
      if (lang === 'en') {
        lines[0].innerHTML = '<i>Idea,</i>';
        lines[1].innerHTML = '<i class="outline">design</i>';
        lines[2].innerHTML = '<i>& <span class="acc">rhythm.</span><span class="eq"><span></span><span></span><span></span><span></span></span></i>';
      } else {
        lines[0].innerHTML = '<i>Fikir,</i>';
        lines[1].innerHTML = '<i class="outline">tasarım</i>';
        lines[2].innerHTML = '<i>&amp; <span class="acc">ritim.</span><span class="eq"><span></span><span></span><span></span><span></span></span></i>';
      }
    }

    // Update form button text in JS handlers (for error recovery)
    window._i18n_lang = lang;
  }

  // Expose globally
  window.toggleLang = function () {
    applyLang(currentLang === 'tr' ? 'en' : 'tr');
  };

  // Apply on load (if not TR, switch)
  if (currentLang !== 'tr') {
    // Wait for DOM
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function () { applyLang(currentLang); });
    } else {
      applyLang(currentLang);
    }
  }
})();
