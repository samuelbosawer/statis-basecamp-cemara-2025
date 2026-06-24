/* ============================================================
   Basecamp Cemara — kedai.js
   Render halaman detail kedai dari UMKM_DATA (umkm.js)
   ============================================================ */

'use strict';

(function () {

  /* ── Helpers ── */
  function rp(nominal) {
    return 'Rp ' + new Intl.NumberFormat('id-ID').format(nominal);
  }

  function getParam(key) {
    return new URLSearchParams(window.location.search).get(key);
  }

  function escHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /* ── Find kedai ── */
  var id    = getParam('id');
  var kedai = null;
  var lain  = [];

  if (typeof UMKM_DATA !== 'undefined' && id) {
    UMKM_DATA.forEach(function (k) {
      if (k.id === id) kedai = k;
      else lain.push(k);
    });
  }

  /* ── Render: menu_kategori (Kopi Acem) ── */
  function renderMenuKategori(menu) {
    var tabs = menu.map(function (cat, i) {
      return '<button class="menu-tab-btn' + (i === 0 ? ' active' : '') + '" data-panel="mpanel-' + i + '">'
        + '<span class="mr-1">' + cat.emoji + '</span>'
        + escHtml(cat.kategori)
        + '</button>';
    }).join('');

    var panels = menu.map(function (cat, i) {
      var rows = cat.items.map(function (item) {
        return '<div class="menu-price-row">'
          + '<span class="menu-item-name">' + escHtml(item.nama) + '</span>'
          + '<span class="menu-item-price">' + rp(item.harga) + '</span>'
          + '</div>';
      }).join('');

      return '<div id="mpanel-' + i + '" class="menu-panel' + (i === 0 ? ' active' : '') + '">'
        + '<div class="menu-panel-head"><span>' + cat.emoji + '</span><span>' + escHtml(cat.kategori) + '</span></div>'
        + rows
        + '</div>';
    }).join('');

    return '<div class="menu-tabs-nav">' + tabs + '</div>'
         + '<div class="menu-panels">' + panels + '</div>';
  }

  /* ── Render: menu_list (Sabar Samarasta) ── */
  function renderMenuList(menu) {
    var rows = menu.map(function (item, i) {
      return '<div class="menu-price-row' + (i % 2 === 0 ? ' even' : '') + '">'
        + '<span class="menu-item-name">' + escHtml(item.nama) + '</span>'
        + '<span class="menu-item-price">' + rp(item.harga) + '</span>'
        + '</div>';
    }).join('');

    return '<div class="menu-list-wrap">' + rows + '</div>';
  }



  /* ── Render: other kedai cards ── */
  function renderOtherKedai(list) {
    if (!list.length) return '';
    var cards = list.map(function (k) {
      return '<a href="kedai.html?id=' + escHtml(k.id) + '" class="other-kedai-card reveal">'
        + '<div class="other-kedai-img">'
        + '<img src="' + escHtml(k.gambar) + '" alt="' + escHtml(k.nama) + '" loading="lazy" />'
        + '</div>'
        + '<div class="other-kedai-body">'
        + '<span class="other-kedai-tag" style="background:' + k.kategori_bg + ';color:' + k.kategori_warna + ';">' + escHtml(k.kategori) + '</span>'
        + '<h3 class="other-kedai-name">' + escHtml(k.nama) + '</h3>'
        + '<p class="other-kedai-desc">' + escHtml(k.deskripsi.substring(0, 90)) + '...</p>'
        + '<span class="other-kedai-cta">Lihat Detail <i class="fas fa-arrow-right text-xs ml-1"></i></span>'
        + '</div>'
        + '</a>';
    }).join('');

    return '<section class="section-padding bg-pattern">'
      + '<div class="max-w-7xl mx-auto px-4 sm:px-6">'
      + '<div class="text-center mb-12 reveal">'
      + '<div class="section-badge mb-4"><i class="fas fa-store" style="font-size:.65rem;"></i> Kedai Lainnya</div>'
      + '<h2 class="text-2xl lg:text-3xl font-bold" style="color:#283F24;">Kedai UMKM Lain di Basecamp Cemara</h2>'
      + '</div>'
      + '<div class="other-kedai-grid">' + cards + '</div>'
      + '</div>'
      + '</section>';
  }

  /* ── Render: tags ── */
  function renderTags(tags) {
    return tags.map(function (t) {
      return '<span class="detail-tag">' + escHtml(t) + '</span>';
    }).join('');
  }

  /* ── Main render ── */
  function renderPage(k) {
    document.title = k.nama + ' — Basecamp Cemara';

    /* meta description */
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', k.tagline);

    /* Menu section content */
    var menuContent = '';
    if (k.produk_tipe === 'menu_kategori') menuContent = renderMenuKategori(k.menu);
    else if (k.produk_tipe === 'menu_list')   menuContent = renderMenuList(k.menu);
    else if (k.produk_tipe === 'produk_grid') menuContent = renderProdukGrid(k);

    /* WA button */
    var waBtn = k.wa_link
      ? '<a href="' + escHtml(k.wa_link) + '" target="_blank" rel="noopener" class="btn-primary detail-wa-btn">'
        + '<i class="fab fa-whatsapp"></i> Pesan via WhatsApp'
        + '</a>'
      : '';

    /* Instagram button */
    var igBtn = k.instagram_link
      ? '<a href="' + escHtml(k.instagram_link) + '" target="_blank" rel="noopener" class="btn-secondary detail-ig-btn">'
        + '<i class="fab fa-instagram"></i> ' + escHtml(k.instagram_handle)
        + '</a>'
      : '';

    var html =
      /* ── Breadcrumb ── */
      '<nav class="breadcrumb-bar">'
        + '<div class="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center gap-2 text-sm">'
        + '<a href="index.html" class="breadcrumb-link"><i class="fas fa-home text-xs"></i> Beranda</a>'
        + '<i class="fas fa-chevron-right breadcrumb-sep"></i>'
        + '<a href="index.html#umkm" class="breadcrumb-link">UMKM</a>'
        + '<i class="fas fa-chevron-right breadcrumb-sep"></i>'
        + '<span class="breadcrumb-current">' + escHtml(k.nama) + '</span>'
        + '</div>'
        + '</nav>'

      /* ── Hero image ── */
      + '<section class="detail-hero">'
        + '<div class="max-w-7xl mx-auto px-4 sm:px-6" style="padding-top:24px;">'
          + '<div class="detail-hero-img-wrap">'
            + '<img src="' + escHtml(k.gambar) + '" alt="' + escHtml(k.nama) + '" class="detail-hero-img" />'
          + '</div>'
          + '<div class="detail-hero-info">'
            + '<div class="hero-badge" style="width:fit-content;margin-top:16px;"><i class="' + k.icon + '" style="font-size:.6rem;"></i> ' + escHtml(k.kategori) + '</div>'
            + '<h1 class="detail-hero-title">' + escHtml(k.nama) + '</h1>'
            + '<p class="detail-hero-tagline">' + escHtml(k.tagline) + '</p>'
            + '<div class="detail-tags">' + renderTags(k.tags) + '</div>'
          + '</div>'
        + '</div>'
      + '</section>'

      /* ── About: 2 col ── */
      + '<section class="section-padding bg-white">'
        + '<div class="max-w-7xl mx-auto px-4 sm:px-6">'
          + '<div class="detail-about-grid">'

            /* Left: description */
            + '<div class="detail-desc-col reveal-left">'
              + '<div class="section-badge mb-5"><i class="fas fa-info-circle" style="font-size:.65rem;"></i> Tentang Kedai</div>'
              + '<h2 class="detail-section-title">' + escHtml(k.nama) + '</h2>'
              + '<p class="detail-desc-text">' + escHtml(k.deskripsi) + '</p>'
              + '<div class="detail-actions">' + waBtn + igBtn + '</div>'
            + '</div>'

            /* Right: info card */
            + '<div class="detail-info-col reveal-right">'
              + '<div class="detail-info-card">'
                + '<div class="detail-info-header" style="background:linear-gradient(135deg,#283F24,#467235);">'
                  + '<div class="detail-info-header-icon"><i class="' + k.icon + '"></i></div>'
                  + '<div>'
                    + '<div class="font-bold text-white text-base">' + escHtml(k.nama) + '</div>'
                    + '<div class="text-white/60 text-xs">' + escHtml(k.kategori) + '</div>'
                  + '</div>'
                + '</div>'
                + '<div class="detail-info-body">'
                  + '<div class="info-item"><i class="fas fa-clock info-item-icon" style="color:#FFBF00;"></i><div><div class="info-item-label">Jam Buka</div><div class="info-item-value">' + escHtml(k.jam_buka) + '</div></div></div>'
                  + '<div class="info-item"><i class="fas fa-map-marker-alt info-item-icon" style="color:#467235;"></i><div><div class="info-item-label">Lokasi</div><div class="info-item-value">' + escHtml(k.lokasi) + '</div></div></div>'
                  + (k.wa_nomor ? '<div class="info-item"><i class="fab fa-whatsapp info-item-icon" style="color:#25D366;"></i><div><div class="info-item-label">WhatsApp</div><div class="info-item-value">' + escHtml(k.wa_nomor) + '</div></div></div>' : '')
                  + (k.instagram_handle ? '<div class="info-item" style="border:none;"><i class="fab fa-instagram info-item-icon" style="color:#C13584;"></i><div><div class="info-item-label">Instagram</div><div class="info-item-value">' + escHtml(k.instagram_handle) + '</div></div></div>' : '')
                + '</div>'
                + (k.wa_link ? '<div class="detail-info-footer"><a href="' + escHtml(k.wa_link) + '" target="_blank" rel="noopener" class="btn-primary w-full justify-center text-sm"><i class="fab fa-whatsapp"></i> Pesan Sekarang</a></div>' : '')
              + '</div>'
            + '</div>'

          + '</div>'
        + '</div>'
      + '</section>'

      /* ── Menu / Produk section ── */
      + '<section class="section-padding bg-pattern">'
        + '<div class="max-w-7xl mx-auto px-4 sm:px-6">'
          + '<div class="text-center mb-12 reveal">'
            + '<div class="section-badge mb-4"><i class="fas fa-list" style="font-size:.65rem;"></i> Menu &amp; Produk</div>'
            + '<h2 class="text-2xl lg:text-3xl font-bold mb-3" style="color:#283F24;">Produk yang Dijual</h2>'
            + '<p class="text-gray-500 text-sm max-w-md mx-auto">Pilih produk favorit Anda dan pesan langsung via WhatsApp.</p>'
          + '</div>'
          + '<div class="reveal">' + menuContent + '</div>'
          + (k.wa_link
              ? '<div class="text-center mt-10 reveal"><a href="' + escHtml(k.wa_link) + '" target="_blank" rel="noopener" class="btn-primary" style="padding:14px 36px;font-size:1rem;"><i class="fab fa-whatsapp"></i> Pesan Sekarang via WhatsApp</a></div>'
              : '')
        + '</div>'
      + '</section>'

      /* ── CTA strip ── */
      + '<section class="cta-bg section-padding" style="padding:60px 0;">'
        + '<div class="max-w-3xl mx-auto px-4 text-center relative z-10 reveal">'
          + '<h2 class="text-2xl lg:text-3xl font-bold text-white mb-4">Tertarik dengan <span style="color:#FFBF00;">' + escHtml(k.nama) + '</span>?</h2>'
          + '<p class="text-white/65 text-sm mb-7">Kunjungi langsung di Basecamp Cemara, Sentani Jayapura, atau hubungi kami.</p>'
          + '<div class="flex flex-wrap gap-3 justify-center">'
            + (k.wa_link ? '<a href="' + escHtml(k.wa_link) + '" target="_blank" rel="noopener" class="btn-primary"><i class="fab fa-whatsapp"></i> Chat WhatsApp</a>' : '')
            + '<a href="https://maps.app.goo.gl/h7ZHPDK3P1Twgz686" target="_blank" rel="noopener" class="btn-outline-white"><i class="fas fa-map-marker-alt"></i> Lokasi Basecamp</a>'
            + '<a href="index.html#umkm" class="btn-outline-white"><i class="fas fa-store"></i> Lihat UMKM Lain</a>'
          + '</div>'
        + '</div>'
      + '</section>'

      /* ── Other kedai ── */
      + renderOtherKedai(lain);

    document.getElementById('main-content').innerHTML = html;

    /* Init tab switching after render */
    initMenuTabs();

    /* Trigger scroll reveal for newly added elements */
    initReveal();
  }

  /* ── Not found page ── */
  function renderNotFound() {
    document.getElementById('main-content').innerHTML =
      '<div style="min-height:70vh;display:flex;align-items:center;justify-content:center;padding:40px 20px;">'
        + '<div style="text-align:center;">'
          + '<div style="font-size:5rem;font-weight:800;color:#FFBF00;line-height:1;">404</div>'
          + '<h2 style="font-size:1.5rem;font-weight:700;color:#283F24;margin:12px 0 8px;">Kedai tidak ditemukan</h2>'
          + '<p style="color:#888;margin-bottom:24px;">ID kedai tidak valid atau belum terdaftar.</p>'
          + '<a href="index.html#umkm" class="btn-primary"><i class="fas fa-arrow-left"></i> Kembali ke UMKM</a>'
        + '</div>'
      + '</div>';
  }

  /* ── Menu tab switcher ── */
  function initMenuTabs() {
    var btns = document.querySelectorAll('.menu-tab-btn');
    if (!btns.length) return;

    btns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var targetId = btn.getAttribute('data-panel');

        /* deactivate all */
        btns.forEach(function (b) { b.classList.remove('active'); });
        document.querySelectorAll('.menu-panel').forEach(function (p) {
          p.classList.remove('active');
        });

        /* activate clicked */
        btn.classList.add('active');
        var panel = document.getElementById(targetId);
        if (panel) panel.classList.add('active');
      });
    });
  }

  /* ── Scroll reveal (re-init after render) ── */
  function initReveal() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(function (el) {
        el.classList.add('visible');
      });
      return;
    }
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(function (el) {
      obs.observe(el);
    });
  }

  /* ── Boot ── */
  if (!kedai) {
    renderNotFound();
  } else {
    renderPage(kedai);
  }

})();
