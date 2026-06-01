<p align="center">
  <strong style="font-size:2em;">Kombis<span>Blog</span>.</strong>
</p>

<h1 align="center">📝 KombisBlog — Blog Komunikasi Bisnis</h1>

<p align="center">
  <em>A comprehensive guide to mastering the art of written communication in the workplace.</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js" alt="Next.js 16" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 19" />
  <img src="https://img.shields.io/badge/Laravel-12-FF2D20?style=for-the-badge&logo=laravel&logoColor=white" alt="Laravel 12" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS 4" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript 5" />
  <img src="https://img.shields.io/badge/SQLite-Database-003B57?style=for-the-badge&logo=sqlite&logoColor=white" alt="SQLite" />
</p>

---

## 📖 Tentang Proyek

**KombisBlog** adalah blog edukasi full-stack yang membahas topik **Komunikasi Bisnis Tertulis** (_Written Business Communication_). Proyek ini dibangun sebagai tugas Semester 4 di **CCIT FTUI** bekerja sama dengan **Politeknik Negeri Jakarta**.

Blog ini menyajikan panduan komprehensif mulai dari penulisan email profesional, memo, surat bisnis, notulen rapat, hingga pentingnya data dalam komunikasi bisnis — semuanya dikemas dengan UI modern dan responsif.

### ✨ Fitur Utama

| Fitur | Deskripsi |
|---|---|
| 🏠 **Landing Page** | Hero section dinamis dengan wave dividers, quote card, dan tiga pilar komunikasi bisnis |
| 📚 **6 Artikel Materi** | Email, Effective Writing, Memo, Business Letter, Minutes of Meeting, Importance of Data |
| 🎨 **Dark/Light Mode** | Toggle tema otomatis (system) dengan transisi halus via `next-themes` |
| 📖 **Detail Artikel** | Halaman artikel dengan gradient hero, estimasi waktu baca, related posts, dan rich HTML content |
| ❓ **FAQ Section** | Accordion FAQ interaktif langsung di homepage |
| 👥 **About Page** | Profil penulis dengan gradient cards dan topic tags |
| 🔗 **REST API** | Backend Laravel menyediakan API endpoint untuk CRUD artikel |
| 📱 **Responsive** | Tampilan optimal di desktop, tablet, dan mobile |

---

## 🏗️ Tech Stack

### Frontend
- **[Next.js 16](https://nextjs.org/)** — React framework dengan App Router & Server Components
- **[React 19](https://react.dev/)** — UI library
- **[TypeScript 5](https://www.typescriptlang.org/)** — Type safety
- **[Tailwind CSS 4](https://tailwindcss.com/)** — Utility-first CSS + Typography plugin
- **[next-themes](https://github.com/pacocoursey/next-themes)** — Dark/light mode management
- **[Lucide React](https://lucide.dev/)** — Icon library
- **[Geist Font](https://vercel.com/font)** — Modern sans-serif & monospace font dari Vercel

### Backend
- **[Laravel 12](https://laravel.com/)** — PHP framework
- **[Laravel Sanctum](https://laravel.com/docs/sanctum)** — API authentication
- **[SQLite](https://www.sqlite.org/)** — Database ringan (file-based)
- **PHP 8.2+**

---

## 📁 Struktur Proyek

```
Blog_Project/
├── frontend/                   # Next.js 16 App
│   ├── app/
│   │   ├── components/
│   │   │   ├── Navbar.tsx      # Navigation bar dengan dropdown
│   │   │   ├── ThemeProvider.tsx # Dark/light mode provider
│   │   │   └── ThemeToggle.tsx  # Tombol toggle tema
│   │   ├── about/
│   │   │   └── page.tsx        # Halaman profil penulis
│   │   ├── artikel/
│   │   │   └── [slug]/
│   │   │       └── page.tsx    # Halaman detail artikel (dynamic route)
│   │   ├── globals.css         # Global styles & Tailwind
│   │   ├── layout.tsx          # Root layout (navbar + footer)
│   │   └── page.tsx            # Homepage / landing page
│   ├── public/                 # Static assets
│   ├── package.json
│   ├── next.config.ts
│   ├── tsconfig.json
│   └── postcss.config.mjs
│
├── backend/                    # Laravel 12 API
│   ├── app/
│   │   ├── Models/
│   │   │   ├── Post.php        # Model artikel
│   │   │   └── User.php
│   │   └── Http/
│   ├── database/
│   │   ├── migrations/         # Schema tabel posts, users, dll.
│   │   ├── seeders/
│   │   │   └── PostSeeder.php  # Data seeder untuk artikel
│   │   └── database.sqlite     # Database file
│   ├── routes/
│   │   └── api.php             # API endpoints
│   ├── composer.json
│   └── .env.example
│
└── .gitignore
```

---

## 🔌 API Endpoints

| Method | Endpoint | Deskripsi |
|--------|----------|-----------|
| `GET` | `/api/posts` | Mengambil semua artikel (terbaru dulu) |
| `GET` | `/api/posts/{slug}` | Mengambil satu artikel berdasarkan slug |

### Contoh Response

```json
{
  "id": 1,
  "title": "Email as a Written Communication Tool",
  "slug": "email-communication",
  "description": "A deep dive into professional email writing...",
  "content": "<h2>Introduction</h2><p>...</p>",
  "image_url": "https://example.com/image.svg",
  "created_at": "2026-05-16T18:36:25.000000Z",
  "updated_at": "2026-05-16T18:36:25.000000Z"
}
```

---

## 🚀 Getting Started

### Prasyarat

Pastikan sudah terinstall di komputer kamu:

- **Node.js** ≥ 18.x & **npm**
- **PHP** ≥ 8.2
- **Composer** (PHP package manager)

### 1️⃣ Clone Repository

```bash
git clone https://github.com/<username>/Blog_Project.git
cd Blog_Project
```

### 2️⃣ Setup Backend (Laravel)

```bash
cd backend

# Install PHP dependencies
composer install

# Copy environment file
cp .env.example .env

# Generate application key
php artisan key:generate

# Jalankan migrasi database (SQLite)
php artisan migrate

# Seed database dengan data artikel
php artisan db:seed

# Jalankan server Laravel
php artisan serve
```

> Backend akan berjalan di **http://localhost:8000**

### 3️⃣ Setup Frontend (Next.js)

Buka terminal baru:

```bash
cd frontend

# Install Node dependencies
npm install

# Jalankan development server
npm run dev
```

> Frontend akan berjalan di **http://localhost:3000**

### 4️⃣ Buka di Browser

Pastikan **kedua server** (Laravel & Next.js) berjalan bersamaan, lalu buka:

🌐 **http://localhost:3000**

---

## 📚 Daftar Materi Artikel

| # | Judul | Slug | Kategori |
|---|-------|------|----------|
| 1 | Email as a Written Communication Tool | `email-communication` | Digital Communication |
| 2 | Making Business Writing Effective | `effective-business-writing` | Writing Skills |
| 3 | Memo | `memo` | Internal Communication |
| 4 | Business Letter | `business-letter` | External Communication |
| 5 | Minutes of a Meeting | `minutes-of-meeting` | Documentation |
| 6 | Importance of Data in Business Communication | `importance-of-data` | Data & Analytics |

---

## 🎨 Screenshots

> _Tambahkan screenshot tampilan website di sini._

<!--
Contoh:
![Homepage](./screenshots/homepage.png)
![Dark Mode](./screenshots/dark-mode.png)
![Artikel Detail](./screenshots/article-detail.png)
-->

---

## 🛠️ Scripts

### Frontend

| Command | Deskripsi |
|---------|-----------|
| `npm run dev` | Jalankan development server |
| `npm run build` | Build untuk production |
| `npm run start` | Jalankan production server |
| `npm run lint` | Jalankan ESLint |

### Backend

| Command | Deskripsi |
|---------|-----------|
| `php artisan serve` | Jalankan development server |
| `php artisan migrate` | Jalankan migrasi database |
| `php artisan db:seed` | Seed data ke database |
| `composer dev` | Jalankan server + queue + logs + vite sekaligus |

---

## 👥 Tim Penulis

Proyek ini dibuat oleh mahasiswa **CCIT FTUI** bekerja sama dengan **Politeknik Negeri Jakarta**:

| Nama | Peran | Topik |
|------|-------|-------|
| Anggota 1 | Lead Writer & Email Communication | Email, Business Etiquette, Digital Tools |
| Anggota 2 | Content Lead & Documentation Specialist | Business Letters, Meeting Minutes, Formal Writing |
| Anggota 3 | Research Lead & Data Communication | Data in Communication, Effective Writing, Research |

---

## 📄 Lisensi

Proyek ini dibuat untuk keperluan **tugas akademik** Semester 4 — mata kuliah **Komunikasi Bisnis**.

---

<p align="center">
  Made with ❤️ using <strong>Next.js</strong> & <strong>Laravel</strong>
</p>
