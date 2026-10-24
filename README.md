# KerjaYuk - Frontend

Antarmuka KerjaYuk menggunakan React, React Router, Vite, dan Tailwind CSS.
Halaman aktif ada di `D:\WEB\frontend-kerjayuk\src\pages`.

## Menjalankan

```powershell
Set-Location D:\WEB\frontend-kerjayuk
npm.cmd ci
Copy-Item .env.example .env
npm.cmd run dev
```

Lewati penyalinan `.env` jika file tersebut sudah ada. Atur `VITE_API_URL`
ke alamat backend, misalnya `http://localhost:3000/api`.

## Pemeriksaan

```powershell
Set-Location D:\WEB\frontend-kerjayuk
npm.cmd run lint
npm.cmd run build
npm.cmd run preview
```

Folder `dist` adalah hasil build dan dapat dibuat ulang. Konfigurasi
`vercel.json` dipertahankan untuk routing saat deployment ke Vercel.
Petunjuk backend dan pengumpulan tugas ada di `D:\WEB\README.md`.
