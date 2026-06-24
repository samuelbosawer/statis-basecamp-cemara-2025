/* ============================================================
   Basecamp Cemara — Data Kedai UMKM
   Sumber: kopi-acem.html, sabar-samarasta.html, mae-coffe.html
   ============================================================ */

var UMKM_DATA = [
  {
    id: "kopi-acem",
    nama: "Kopi Acem",
    tagline: "Kopi Asli Papua, Langsung dari Hati Anak Muda Papua",
    kategori: "Kopi Lokal",
    kategori_warna: "#8B6900",
    kategori_bg: "rgba(255,191,0,0.14)",
    icon: "fas fa-mug-hot",
    warna_aksen: "#FFBF00",
    gambar: "assets/images/kopi-acem.png",
    gambar_produk: null,
    deskripsi: "Kami adalah komunitas anak muda Papua yang memiliki semangat untuk menjual kopi asli dari tanah kami. Dengan penuh dedikasi, kami mengolah biji kopi pilihan dari petani lokal menggunakan cara terbaik agar tetap menjaga aroma dan rasa khasnya. Setiap cangkir kopi yang kami sajikan bukan hanya sekadar minuman, tetapi juga wujud cinta kami terhadap tanah Papua, budaya kerja keras, dan kebersamaan. Sambil menikmati hangatnya kopi, Anda dapat merasakan ketenangan dan keindahan Danau Sentani, panorama alami yang menambah kenikmatan setiap tegukan. Kami ingin menghadirkan pengalaman menikmati kopi yang otentik, hangat, dan bermakna langsung dari hati anak muda Papua untuk Anda.",
    wa_link: "https://wa.me/6281344552766/?text=Hallo%20sa%20mau%20pesan%20dari%20Kopi%20Acem",
    wa_nomor: "0813-4455-2766",
    instagram_link: "https://www.instagram.com/kopiacem_hjk",
    instagram_handle: "@kopiacem_hjk",
    jam_buka: "08.00 – 22.00 WIT",
    lokasi: "Basecamp Cemara, Sentani, Jayapura",
    tags: ["Kopi Papua", "Premium", "Lokal", "Danau Sentani"],
    produk_tipe: "menu_kategori",
    menu: [
      {
        kategori: "Kopi Premium Papua",
        emoji: "☕",
        items: [
          { nama: "Kopi hitam",                harga: 20000 },
          { nama: "Kopi + susu (Gelas kecil)", harga: 25000 },
          { nama: "Kopi + susu (Gelas sedang)", harga: 30000 }
        ]
      },
      {
        kategori: "Kopi MU",
        emoji: "☕",
        items: [
          { nama: "Kopi hitam (Gelas kecil)",  harga: 5000  },
          { nama: "Kopi hitam (Gelas sedang)", harga: 10000 },
          { nama: "Kopi + susu (Gelas kecil)", harga: 10000 },
          { nama: "Kopi + susu (Gelas sedang)", harga: 15000 }
        ]
      },
      {
        kategori: "Makanan Ringan",
        emoji: "🍠",
        items: [
          { nama: "Pisang goreng",   harga: 10000 },
          { nama: "Singkong goreng", harga: 10000 },
          { nama: "Ikan Tuna Suir",  harga: 35000 },
          { nama: "Betatas goreng",  harga: 10000 },
          { nama: "Keladi goreng",   harga: 10000 }
        ]
      },
      {
        kategori: "Minuman Lainnya",
        emoji: "🍵",
        items: [
          { nama: "Teh Panas",                                          harga: 10000 },
          { nama: "Es Teh",                                             harga: 10000 },
          { nama: "Chocolate (Van Houten, Ovaltin, Milo + Susu)",       harga: 20000 },
          { nama: "Es Kopi ACEM (Kopi Premium + Susu)",                 harga: 30000 },
          { nama: "Es Kopi Cemara (Kopi Nescafe + Susu)",               harga: 20000 }
        ]
      }
    ]
  },

  {
    id: "sabar-samarasta",
    nama: "Sabar Samarasta",
    tagline: "Sagu Bakar Khas Papua — Autentik, Higienis, Menggugah Selera",
    kategori: "Kuliner Papua",
    kategori_warna: "#467235",
    kategori_bg: "rgba(70,114,53,0.1)",
    icon: "fas fa-utensils",
    warna_aksen: "#467235",
    gambar: "assets/images/sabar-samarasta.png",
    gambar_produk: "assets/images/sabar-samarasta/sagu.png",
    deskripsi: "Kami menjual sagu bakar dan berbagai jajanan olahan sagu khas Papua yang lezat dan menggugah selera. Produk kami dibuat dari bahan-bahan alami berkualitas terbaik, diolah secara higienis dengan resep tradisional turun-temurun khas masyarakat Papua. Kami menghadirkan rasa autentik dan cita rasa khas daerah yang jarang ditemukan di tempat lain. Selain sagu bakar, kami juga menyediakan variasi makanan ringan berbahan dasar sagu seperti kue dan camilan gurih. Kami berkomitmen menjaga keaslian rasa dan kualitas produk agar setiap pembeli dapat merasakan kehangatan budaya Papua melalui setiap gigitan.",
    wa_link: "https://wa.me/6282115151372/?text=Hallo%20sa%20mau%20pesan%20dari%20Sabar%20Samarasta",
    wa_nomor: "0821-1515-1372",
    instagram_link: "https://www.instagram.com/sabarsamarasta",
    instagram_handle: "@sabarsamarasta",
    jam_buka: "08.00 – 22.00 WIT",
    lokasi: "Basecamp Cemara, Sentani, Jayapura",
    tags: ["Sagu Bakar", "Forna", "Kuliner Lokal", "Papua"],
    produk_tipe: "menu_list",
    menu: [
      { nama: "Forna Original",       harga: 20000 },
      { nama: "Forna Coklat",         harga: 25000 },
      { nama: "Forna Kecu",           harga: 30000 },
      { nama: "Forna Kacang",         harga: 30000 },
      { nama: "Forna Coklat Kacang",  harga: 35000 },
      { nama: "Forna Gula Aren",      harga: 35000 },
      { nama: "Forna Coklat Keju",    harga: 35000 },
      { nama: "Samarasta",            harga: 25000 },
      { nama: "Telur Ome Pedas Manis", harga: 30000 },
      { nama: "Ikan Tuna Suir",       harga: 35000 },
      { nama: "Sosis",                harga: 35000 },
      { nama: "Ikan Marlin Suir",     harga: 35000 }
    ]
  },

  {
    id: "mae-coffe",
    nama: "Mae Coffe",
    tagline: "Kopi Spesial & Minuman Kekinian Kreasi Anak Muda Papua",
    kategori: "Coffee & Drinks",
    kategori_warna: "#283F24",
    kategori_bg: "rgba(40,63,36,0.08)",
    icon: "fas fa-coffee",
    warna_aksen: "#283F24",
    gambar: "assets/images/mae-coffe.png",
    gambar_produk: "assets/images/mae-drinks.png",
    deskripsi: "Kami menjual kopi spesial dan minuman kekinian dengan cita rasa unik yang menggugah selera. Menggunakan biji kopi pilihan dari Papua dan bahan-bahan berkualitas tinggi, setiap racikan kami dibuat dengan standar higienis dan sentuhan kreativitas anak muda Papua. Kami menghadirkan pengalaman minum yang berbeda — aroma kopi yang khas berpadu dengan rasa inovatif minuman kekinian. Selain kopi spesial, kami juga menawarkan berbagai varian minuman segar dengan kombinasi rasa baru yang autentik. Komitmen kami adalah menjaga kualitas dan menghadirkan sensasi minum yang menyenangkan agar setiap tegukan menjadi pengalaman tak terlupakan.",
    wa_link: null,
    wa_nomor: null,
    instagram_link: "https://www.instagram.com/maecoffee_",
    instagram_handle: "@maecoffee_",
    jam_buka: "08.00 – 22.00 WIT",
    lokasi: "Basecamp Cemara, Sentani, Jayapura",
    tags: ["Coffee", "Non Coffee", "Minuman Kekinian", "Signature"],
    produk_tipe: "produk_grid",
    menu: [
      { nama: "Coffee",     deskripsi: "Kopi premium pilihan Papua" },
      { nama: "Non Coffee", deskripsi: "Minuman segar tanpa kopi" },
      { nama: "Mae's Fly",  deskripsi: "Minuman andalan Mae Coffe" },
      { nama: "Signature",  deskripsi: "Racikan spesial resep sendiri" },
      { nama: "Squash",     deskripsi: "Minuman segar buah pilihan" },
      { nama: "Juice",      deskripsi: "Jus segar aneka buah tropis" }
    ]
  }
];
