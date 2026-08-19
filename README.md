# Koding Lab — Website Tugas PBO

Koding Lab adalah website pembelajaran interaktif yang menerapkan konsep Pemrograman Berorientasi Objek (PBO) Bab 4–6 dalam bentuk materi visual dan demo yang dapat dijalankan.

## Konsep PBO yang Diterapkan

| Bab | Konsep | Implementasi |
|---|---|---|
| Bab 4 | Encapsulation | Class `User` menyimpan `username` dan `role` sebagai properti private, lalu mengaksesnya melalui getter dan setter. |
| Bab 5 | Inheritance | Class `Admin` mewarisi class `User` menggunakan `extends` dan menambahkan method `getPermissions()`. |
| Bab 6 | Polymorphism | Class abstract `Shape` memiliki method `draw()`. Class `Circle` dan `Rectangle` mengimplementasikan method yang sama dengan output berbeda. |

## Struktur Penting

File `client/src/lib/pbo.ts` berisi implementasi class dan function PBO. File `client/src/pages/Home.tsx` menggunakan object tersebut melalui demo interaktif. Pengguna dapat memasukkan nama, memilih bentuk, lalu menjalankan demo untuk melihat output object dan method.

## Menjalankan Project

```bash
pnpm install
pnpm dev
```

Buka alamat lokal yang ditampilkan oleh Vite di browser.

## Cara Push ke GitHub

Buat repository baru di GitHub, kemudian jalankan perintah berikut dari folder project:

```bash
git init
git add .
git commit -m "Membuat website PBO Bab 4-6"
git branch -M main
git remote add origin https://github.com/USERNAME/NAMA-REPOSITORY.git
git push -u origin main
```

Ganti `USERNAME/NAMA-REPOSITORY` dengan alamat repository milik sendiri. Setelah berhasil, kirim link repository GitHub tersebut sesuai instruksi tugas.

## Catatan Pengumpulan

Sebelum mengirim link, pastikan repository dapat dibuka, file `README.md` terlihat, project dapat dijalankan, dan bagian PBO menampilkan demo Encapsulation, Inheritance, serta Polymorphism.
