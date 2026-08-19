# Koding Lab — Website Tugas PBO

Koding Lab adalah website pembelajaran interaktif yang menerapkan konsep Pemrograman Berorientasi Objek dalam bentuk materi visual dan demo yang dapat dijalankan.

## Konsep PBO yang Diterapkan

| Konsep | Implementasi pada website | Penjelasan saat presentasi |
|---|---|---|
| Encapsulation | Class `User` menyimpan `username` dan `role` sebagai properti private, lalu mengaksesnya melalui getter dan setter. | “Encapsulation digunakan untuk melindungi data di dalam class. Data tidak diubah langsung dari luar, tetapi diakses melalui method.” |
| Inheritance | Class `Admin` mewarisi class `User` menggunakan `extends` dan menambahkan method `getPermissions()`. | “Inheritance memungkinkan class baru memakai atribut dan perilaku class induknya, kemudian menambahkan kemampuan khusus.” |
| Polymorphism | Class `Shape` memiliki method `draw()`. Class `Circle` dan `Rectangle` menggunakan method yang sama dengan output berbeda. | “Polymorphism berarti satu method dapat menghasilkan perilaku berbeda sesuai object yang menjalankannya.” |

> Urutan dan nama bab pada tabel perlu kamu cocokkan lagi dengan modul atau slide guru. Konsep yang ditampilkan tetap Encapsulation, Inheritance, dan Polymorphism karena itulah konsep yang benar-benar digunakan dalam source code.

## Cara Mencoba Demo

Buka bagian **Konsep**, isi nama object bila diperlukan, lalu tekan tombol **Jalankan demo** pada salah satu kartu. Hasil akan muncul langsung di bawah tombol yang ditekan dan halaman akan mengarahkan perhatian ke hasil tersebut. Demo console di bawahnya juga ikut memperbarui output.

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
git commit -m "Membuat website PBO interaktif"
git branch -M main
git remote add origin https://github.com/USERNAME/NAMA-REPOSITORY.git
git push -u origin main
```

Ganti `USERNAME/NAMA-REPOSITORY` dengan alamat repository milikmu. Jika repository sudah memiliki remote, gunakan `git remote -v` untuk memeriksanya dan lanjutkan dengan `git push`.

## Checklist Pengumpulan

Sebelum mengirim link, pastikan repository dapat dibuka, file `README.md` terlihat, project dapat dijalankan, bagian konsep memiliki demo yang dapat ditekan, dan kamu dapat menjelaskan fungsi setiap class secara singkat.
