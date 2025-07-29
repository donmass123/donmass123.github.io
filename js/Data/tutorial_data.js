
// Array of tutorial data
const tutorialsData = [
  {
    title: "📑 Menambahkan Filter Sub-Kategori ke Indeks Produk di POS",
    link: "html/1.html",
    level: "pemula",
    image: "cover/1.webp",
    updateDate: "01 Juli 2025",
    description: "🔍 Menambahkan filter sub-kategori dinamis ke indeks produk"
  },
  {
    title: "📑 Peningkatan Filter Laporan Stok",
    link: "html/2.html",
    level: "mahir",
    image: "cover/2.webp",
    updateDate: "02 Juli 2025",
    description: "📊 Peningkatan filter laporan stok untuk efisiensi"
  },
  {
    title: "📑 Pencetakan Label yang Ditingkatkan untuk POS",
    link: "html/3.html",
    level: "menengah",
    image: "cover/3.webp",
    updateDate: "02 Juli 2025",
    description: "🖨️ Peningkatan fitur pencetakan label untuk POS"
  },
  {
    title: "📑 Fitur Penagihan Jatuh Tempo",
    link: "html/4.html",
    level: "menengah",
    image: "cover/4.webp",
    updateDate: "02 Juli 2025",
    description: "⏰ Fitur penagihan jatuh tempo untuk manajemen keuangan"
  },
  {
    title: "📑 Ukuran Db yang besar di POS",
    link: "html/5.html",
    level: "bahaya",
    image: "cover/5.webp",
    updateDate: "02 Juli 2025",
    description: "📦 Ukuran database yang besar di POS dan cara mengelolanya"
  },
  {
    title: "📑 Hapus Transaksi, Produk, Inventaris",
    link: "html/6.html",
    level: "bahaya",
    image: "cover/6.webp",
    updateDate: "03 Juli 2025",
    description: "🗑️ Cara menghapus transaksi, produk, dan inventaris dalam Database"
  },
  {
    title: "📑 Panduan Implementasi Modal Tambah Produk Cepat",
    link: "html/7.html",
    level: "menengah",
    image: "cover/7.webp",
    updateDate: "03 Juli 2025",
    description: "🛠 Panduan untuk mengimplementasikan modal tambah produk cepat di POS"
  },
  {
    title: "📑 Perintah Admin untuk POS",
    link: "html/8.html",
    level: "menengah",
    image: "cover/8.webp",
    updateDate: "06 Juli 2025",
    description: "⚙️ Perintah admin untuk mengelola POS dengan efisien"
  },
  {
    title: "📑 Menambahkan “Kebutuhan Stok Cetak” ke Dasbor Beranda",
    link: "html/9.html",
    level: "menengah",
    image: "cover/9.webp",
    updateDate: "06 Juli 2025",
    description: "🖨️ Menambahkan fitur kebutuhan stok cetak ke dasbor beranda POS"
  },
  {
    title: "📑 Panduan Implementasi Sistem Tukar Barang di POS",
    link: "html/10.html",
    level: "mahir",
    image: "cover/10.webp",
    updateDate: "07 Juli 2025",
    description: "🔄 Panduan untuk mengimplementasikan sistem tukar barang di POS"
  },
  {
    title: "📑 Menangani Pengembalian Produk Tanpa Nomor Faktur",
    link: "html/11.html",
    level: "pemula",
    image: "cover/11.webp",
    updateDate: "07 Juli 2025",
    description: "🔄 Proses pengembalian produk tanpa nomor faktur di POS"
  },
  {
    title: "📑 Menambahkan Jatuh Tempo Sebelumnya di Struk POS",
    link: "html/12.html",
    level: "pemula",
    image: "cover/12.webp",
    updateDate: "07 Juli 2025",
    description: "⏳ Menambahkan jumlah jatuh tempo sebelumnya di struk POS"
  },
  {
    title: "📑 Panduan Penerapan Pemindai Barcode Kamera POS",
    link: "html/13.html",
    level: "mahir",
    image: "cover/13.webp",
    updateDate: "08 Juli 2025",
    description: "📸 Panduan penerapan pemindai barcode kamera POS"
  },
  {
    title: "📚 Katalog Produk Digital & Module Menu untuk POS ( UPDATE )",
    link: "https://drive.google.com/file/d/1fsafNy1r-j7lvW7iXvyjUavJiSKhFt5E/view?usp=sharing",
    level: "module",
    image: "cover/module/1.webp",
    updateDate: "11 Juli 2025",
    description: "🧩 Module Cataloge Terbaru 11-7-2025"
  },
  {
    title: "📚 Inventory Module untuk POS ( UPDATE )",
    link: "https://drive.google.com/file/d/1BNZWbVEdrOsv2eaIHtB-Jin9ODYKeuHr/view?usp=sharing",
    level: "module",
    image: "cover/module/2.webp",
    updateDate: "11 Juli 2025",
    description: "🧩 Module Inventory Terbaru 11-7-2025"
  },
  {
    title: "📚 Whatapps Module untuk POS ( UPDATE )",
    link: "https://drive.google.com/file/d/1tBZodbDvRsZE81g7mYd5tLJ0lFxuPiLH/view?usp=sharing",
    level: "module",
    image: "cover/module/3.webp",
    updateDate: "11 Juli 2025",
    description: "🧩 Module Whatapps Terbaru 11-7-2025"
  },
  {
    title: "📚 Manajemen Assets Module untuk POS ( UPDATE )",
    link: "https://drive.google.com/file/d/19JmP4XQKfVamkRoBsp01OQipvS4H7KYl/view?usp=drive_link",
    level: "module",
    image: "cover/module/4.webp",
    updateDate: "11 Juli 2025",
    description: "🧩 Manajemen Aset (Asset Management) Module dalam konteks Point of Sale (POS)"
  },
  {
    title: "📚 Laporan ageing Module untuk POS ( UPDATE )",
    link: "https://drive.google.com/file/d/1E2U6GK5-kFT1wm_D9d0LgetQeuNnLMIL/view?usp=drive_link",
    level: "module",
    image: "cover/module/5.webp",
    updateDate: "11 Juli 2025",
    description: "🧩 laporan keuangan yang mengelompokkan piutang atau hutang berdasarkan jangka waktu keterlambatan pembayarannya"
  },
  {
    title: "📚 Penghubung API Module untuk POS ( UPDATE )",
    link: "https://drive.google.com/file/d/1q4dpSlthykEtrFVqPPK1rimBabrrKAuS/view?usp=drive_link",
    level: "module",
    image: "cover/module/6.webp",
    updateDate: "11 Juli 2025",
    description: "🧩 Penghubung API (Application Programming Interface) module untuk POS"
  },
  {
    title: "📚 Manajemen Akuntansi Module untuk POS ( UPDATE )",
    link: "https://drive.google.com/file/d/16DM86aBUT_hjuGcLtudArEkP1fN8LT3Z/view?usp=sharing",
    level: "module",
    image: "cover/module/7.webp",
    updateDate: "11 Juli 2025",
    description: "🧩 Modul Manajemen Akuntansi untuk POS (Point of Sale) adalah bagian dari sistem POS yang mengelola aspek keuangan dan akuntansi terkait dengan transaksi penjualan."
  },
  {
    title: "📁 Kostum Tambah dan Edit Untuk Kontak pelanggan",
    link: "https://drive.google.com/file/d/1VADZpKrLUVslkOiXwwQY4GPC45pqIbn4/view?usp=sharing",
    level: "file",
    image: "cover/file/1.webp",
    updateDate: "11 Juli 2025",
    description: "🧩 Kostum ini di Desuaikan Dengan Kebutuhan dari Retail Store (Baiq Market)."
  },
  {
    title: "📁 Kostum Label Disesuaikan Dengan Warehouse",
    link: "https://drive.google.com/file/d/1KYcL6IuSWVZDR-figEbOIxSijf6cnlGn/view?usp=sharing",
    level: "file",
    image: "cover/file/2.webp",
    updateDate: "11 Juli 2025",
    description: "🧩 Kostum ini di Desuaikan Dengan Kebutuhan dari Retail Store (Baiq Market)."
  },
  {
    title: "📑 Panduan Implementasi Laporan Peningkatan Laba Berdasarkan Produk",
    link: "html/14.html",
    level: "menengah",
    image: "cover/14.webp",
    updateDate: "17 Juli 2025",
    description: "📦 Panduan ini akan memandu Anda dalam mengimplementasikan kolom yang ditingkatkan pada laporan Profit by Products di POS Laravel."
  },
  {
    title: "📑 File POS untuk dijalankan Di Android Dan IOS",
    link: "https://drive.google.com/file/d/1284DtOh9qytRf-90os2FzZs34XaqLoTI/view?usp=sharing",
    level: "file",
    image: "cover/file/3.webp",
    updateDate: "24 Juli 2025",
    description: "📦 POS Untuk Device Android Da IOS 1.7.2."
  },
  {
    title: "📑 Menambahkan Kolom Diskon ke Laporan Penjualan Produk",
    link: "html/15.html",
    level: "menengah",
    image: "cover/15.webp",
    updateDate: "24 Juli 2025",
    description: "📦 Menambahkan Kolom Diskon ke Laporan Penjualan Produk."
  },
  {
    title: "📑 Fitur Watermark POS - Panduan Implementasi Lengkap",
    link: "html/16.html",
    level: "mahir",
    image: "cover/16.webp",
    updateDate: "29 Juli 2025",
    description: "📦 Fitur Watermark POS - Panduan Implementasi Lengkap."
  }
];