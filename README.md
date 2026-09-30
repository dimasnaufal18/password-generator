# Password Generator

![HTML](https://img.shields.io/badge/HTML-HTML5-E34F26?logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-green.svg)

Tool sederhana untuk membuat **password kuat dan acak** langsung melalui browser. Gratis, ringan, responsif, dan menggunakan `crypto.getRandomValues()` untuk menghasilkan nilai acak yang lebih aman dibandingkan generator acak biasa.

## Daftar Isi

- [Fitur](#fitur)
- [Teknologi](#teknologi)
- [Cara Pakai](#cara-pakai)
- [Contoh](#contoh)
- [Struktur Project](#struktur-project)
- [Live Demo](#live-demo)
- [Troubleshooting](#troubleshooting)
- [Kontribusi](#kontribusi)
- [Author](#author)
- [Lisensi](#lisensi)

## Fitur

- Generate password acak dengan panjang **4–64 karakter**.
- Pilih jenis karakter yang ingin digunakan:
  - Huruf besar (`A-Z`)
  - Huruf kecil (`a-z`)
  - Angka (`0-9`)
  - Simbol
- Indikator kekuatan password:
  - **Lemah**
  - **Sedang**
  - **Kuat**
  - **Sangat Kuat**
- Copy password ke clipboard dengan satu klik.
- Menyimpan **5 password terakhir** sebagai riwayat.
- Responsif untuk perangkat **mobile maupun desktop**.
- Menggunakan `crypto.getRandomValues()` untuk proses pengacakan yang lebih aman.
- Tidak membutuhkan instalasi atau backend.

## Teknologi

| Teknologi | Kegunaan |
|---|---|
| **HTML5** | Struktur halaman dan elemen antarmuka |
| **CSS3** | Tampilan, layout, dan responsivitas |
| **JavaScript** | Logika generator password dan interaksi pengguna |
| **Web Crypto API** | Menghasilkan nilai acak melalui `crypto.getRandomValues()` |

## Cara Pakai

1. Buka `index.html` menggunakan browser.
2. Atur panjang password menggunakan **slider**. Panjang yang tersedia adalah **4–64 karakter**.
3. Pilih jenis karakter yang ingin digunakan.
4. Klik tombol **Generate**.
5. Password baru akan ditampilkan beserta indikator kekuatannya.
6. Klik tombol **📋** untuk menyalin password ke clipboard.
7. Password yang baru dibuat dapat dilihat kembali melalui **riwayat 5 password terakhir**.

> **Tips:** Gunakan kombinasi huruf besar, huruf kecil, angka, dan simbol untuk membuat password yang lebih kompleks.

## Contoh

Misalnya pengguna memilih:

```text
Panjang       : 16 karakter
Huruf besar   : Ya
Huruf kecil   : Ya
Angka         : Ya
Simbol        : Ya
```

Contoh hasil:

```text
G7!mQ2#vL9@xP4$k
```

> Contoh di atas hanya ilustrasi. Password yang dihasilkan aplikasi akan berbeda setiap kali proses generate dilakukan.

### Contoh Penggunaan

```text
1. Atur slider menjadi 16 karakter
2. Aktifkan huruf besar
3. Aktifkan huruf kecil
4. Aktifkan angka
5. Aktifkan simbol
6. Klik "Generate"
7. Klik "📋" untuk menyalin password
```

## Struktur Project

```text
password-generator/
├── index.html
├── style.css
├── script.js
├── README.md
└── LICENSE
```

### Penjelasan File

| File | Fungsi |
|---|---|
| `index.html` | Struktur dan elemen antarmuka aplikasi |
| `style.css` | Styling dan responsive design |
| `script.js` | Logika generate password, strength indicator, clipboard, dan riwayat |
| `README.md` | Dokumentasi project |
| `LICENSE` | Lisensi MIT untuk project |

## Live Demo

Project ini dapat dijalankan langsung secara lokal tanpa server.

```bash
# Clone repository
git clone https://github.com/dimasnaufal18/password-generator.git

# Masuk ke folder project
cd password-generator
```

Kemudian buka file berikut di browser:

```text
index.html
```

Jika project sudah di-deploy menggunakan **GitHub Pages**, link Live Demo dapat ditambahkan pada bagian ini, misalnya:

```text
https://dimasnaufal18.github.io/password-generator/
```

> Pastikan URL tersebut sudah aktif sebelum digunakan sebagai link resmi project.

https://password-generator-web-chi.vercel.app

## Troubleshooting

### Password tidak dapat dibuat

Pastikan setidaknya satu jenis karakter telah dipilih, seperti huruf kecil, huruf besar, angka, atau simbol.

### Tombol copy tidak bekerja

Pastikan aplikasi dibuka menggunakan browser modern yang mendukung **Clipboard API**. Pada beberapa kondisi, fitur clipboard dapat membutuhkan konteks yang aman seperti HTTPS atau `localhost`.

### `crypto.getRandomValues()` tidak tersedia

Gunakan browser modern seperti:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari

Browser yang sangat lama mungkin tidak mendukung Web Crypto API secara lengkap.

### Tampilan tidak sesuai

Pastikan file berikut berada dalam folder yang sama:

```text
index.html
style.css
script.js
```

Periksa juga apakah `index.html` sudah memanggil file CSS dan JavaScript dengan path yang benar.

## Kontribusi

Kontribusi terbuka untuk siapa saja yang ingin membantu mengembangkan project ini.

Untuk berkontribusi:

1. **Fork** repository.
2. Buat branch baru:

```bash
git checkout -b fitur-baru
```

3. Lakukan perubahan yang diperlukan.
4. Commit perubahan:

```bash
git add .
git commit -m "Menambahkan fitur baru"
```

5. Push branch:

```bash
git push origin fitur-baru
```

6. Buat **Pull Request** dan jelaskan perubahan yang dilakukan.

Pastikan perubahan tetap sederhana, mudah dipahami, dan tidak mengurangi keamanan generator password.

## Author

**Mhd Dimas Naufal**

- GitHub: [@dimasnaufal18](https://github.com/dimasnaufal18)

## Lisensi

Project ini menggunakan **MIT License**.

Anda bebas menggunakan, menyalin, memodifikasi, dan mendistribusikan project ini sesuai dengan ketentuan lisensi.

Lihat file [`LICENSE`](LICENSE) untuk informasi lengkap mengenai lisensi yang digunakan.

---

**Password Generator** — sederhana, cepat, dan dapat digunakan langsung dari browser.
