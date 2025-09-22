# API-ULASAN-FILM

## Anggota Kelompok
-Wempi Ariyan Saputro (362458302087)
-Aryasatya Maheswara (362458302082)
-Restu Sulung Purpangestu (362458302028)
-M Zulqornain Rofiki (362458302086)


## Deskripsi Proyek
API ini adalah layanan internal untuk mengelola ulasan film dari Studio Ghilbi, dengan data film yang di referensikan dari Ghibli API publik.

## Cara Menjalankan Proyek
1. Clone Repository ini : `git:clone https://github.com/Aryasatya2356/API-ULASAN-FILM`
2. Masuk ke direktori: `cd API-ULASAN-FILM`
3. Install depedensi: `npm init -y dan npm install express cors `
4. Jalankan server: `node server.js`
server akan berjalan di `http://localhost:3300`

## Daftar EndPoint
- `GET/status`: Cek Status API Ulasan film.
- `GET/reviews`: Mengambil Semua ulasan film yang dibuat.
- `GET/reviews/:id`: Mengambil ulasan film spesifik berdasakan ID.
- `POST/reviews`: Membuat ulasan Baru dengan Validasi Input.
- `PUT/reviews/(id)`: Memperbarui Ulasan berdasarkan id.
- `DELETE/reviews/(id)`: Menghapus Ulasan berdasarkan id.

Semua endpoint diuji dengan POSTMAN lalu di export dan dimasukkan ke dalam file Koleksi_Pengujian.json
Cara menjalankannya dengan import file Koleksi_Pengujian.json di POSTMAN