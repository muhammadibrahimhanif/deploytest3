# Keikgini — Burnt Cheesecake Specialist
> Website premium untuk brand Keikgini · Cibubur & Depok

---

## Prerequisites (Install Sekali)

Pastikan software berikut sudah terinstall di komputer kamu:

| Software | Link Download | Cek Versi |
|---|---|---|
| **Node.js** v18+ | https://nodejs.org (pilih LTS) | `node -v` |
| **Git** | https://git-scm.com | `git --version` |

---

## Deploy di Lokal (Local Development)

### Langkah 1 — Extract source code

Ekstrak file `keikgini-source.zip` ke folder pilihan, misalnya:
- Windows: `C:\Projects\keikgini\`
- Mac/Linux: `~/Projects/keikgini/`

### Langkah 2 — Buka Terminal, masuk ke folder project

```bash
cd C:\Projects\keikgini      # Windows
cd ~/Projects/keikgini       # Mac / Linux
```

### Langkah 3 — Install dependencies

```bash
npm install
```

Tunggu hingga selesai (1–3 menit).

### Langkah 4 — Jalankan dev server

```bash
npm run dev
```

Output yang muncul:
```
  ➜  Local:   http://localhost:5173/
```

### Langkah 5 — Buka di browser

```
http://localhost:5173
```

Selesai! Tekan Ctrl+C untuk menghentikan server.

---

## Build untuk Production

```bash
npm run build       # output ke folder dist/
npm run preview     # preview di http://localhost:4173
```

---

## Deploy ke Vercel — Metode A (via GitHub, Recommended)

### 1. Upload ke GitHub

```bash
cd path/ke/folder/keikgini
git init
git add .
git commit -m "feat: initial commit Keikgini website"
git remote add origin https://github.com/USERNAME/keikgini.git
git push -u origin main
```

### 2. Deploy di Vercel

1. Buka https://vercel.com → login dengan akun GitHub
2. Klik **"Add New Project"**
3. Klik **"Import Git Repository"** → pilih repo `keikgini`
4. Pastikan settings:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
5. Klik **"Deploy"**

Website live dalam 1–2 menit di `https://keikgini.vercel.app`

---

## Deploy ke Vercel — Metode B (via CLI)

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy dari folder project
cd path/ke/folder/keikgini
vercel

# Deploy ke production
vercel --prod
```

---

## Struktur Project

```
keikgini/
├── src/
│   ├── App.tsx          <- Semua komponen website
│   ├── index.css        <- Global styles & animasi
│   ├── main.tsx         <- Entry point React
│   └── components/ui/   <- shadcn/ui components
├── index.html           <- HTML template + SEO
├── package.json         <- Dependencies
├── vite.config.ts       <- Vite config
└── tailwind.config.js   <- Tailwind config
```

## Cara Edit Konten

| Yang diubah | Lokasi di App.tsx |
|---|---|
| Nomor WhatsApp | Cari `wa.me/` lalu ubah nomor |
| Harga produk | Array `bbcProducts` / `brownieProducts` |
| Deskripsi produk | Field `desc` di tiap produk |
| Testimonial | Array `testimonials` |
| Info kontak & lokasi | Komponen `Footer` |
| Hero headline | Komponen `Hero` |

## npm Scripts

| Command | Fungsi |
|---|---|
| `npm run dev` | Dev server di localhost:5173 |
| `npm run build` | Build production ke `dist/` |
| `npm run preview` | Preview build di localhost:4173 |

---

## Troubleshooting

**`node: command not found`** → Install Node.js dari nodejs.org

**`npm install` gagal** → Hapus folder `node_modules`, jalankan `npm install` lagi

**Port 5173 sudah dipakai** → Vite otomatis pakai port berikutnya, lihat output terminal
