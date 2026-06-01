<p align="center">
  <strong style="font-size:2em;">Kombis<span>Blog</span>.</strong>
</p>

<h1 align="center">📝 KombisBlog — Business Communication Blog</h1>

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

## 📖 About the Project

**KombisBlog** is a full-stack educational blog covering the topic of **Written Business Communication**. This project was built as a Semester 4 assignment at **CCIT FTUI** in partnership with **Jakarta State Polytechnic (Politeknik Negeri Jakarta)**.

The blog presents a comprehensive guide ranging from professional email writing, memos, business letters, meeting minutes, to the importance of data in business communication — all wrapped in a modern and responsive UI.

### ✨ Key Features

| Feature | Description |
|---|---|
| 🏠 **Landing Page** | Dynamic hero section with wave dividers, quote card, and three pillars of business communication |
| 📚 **6 Course Articles** | Email, Effective Writing, Memo, Business Letter, Minutes of Meeting, Importance of Data |
| 🎨 **Dark/Light Mode** | Automatic theme toggle (system) with smooth transitions via `next-themes` |
| 📖 **Article Detail** | Article page with gradient hero, estimated reading time, related posts, and rich HTML content |
| ❓ **FAQ Section** | Interactive accordion FAQ directly on the homepage |
| 👥 **About Page** | Author profiles with gradient cards and topic tags |
| 🔗 **REST API** | Laravel backend providing API endpoints for articles |
| 📱 **Responsive** | Optimal display across desktop, tablet, and mobile |

---

## 🏗️ Tech Stack

### Frontend
- **[Next.js 16](https://nextjs.org/)** — React framework with App Router & Server Components
- **[React 19](https://react.dev/)** — UI library
- **[TypeScript 5](https://www.typescriptlang.org/)** — Type safety
- **[Tailwind CSS 4](https://tailwindcss.com/)** — Utility-first CSS + Typography plugin
- **[next-themes](https://github.com/pacocoursey/next-themes)** — Dark/light mode management
- **[Lucide React](https://lucide.dev/)** — Icon library
- **[Geist Font](https://vercel.com/font)** — Modern sans-serif & monospace font by Vercel

### Backend
- **[Laravel 12](https://laravel.com/)** — PHP framework
- **[Laravel Sanctum](https://laravel.com/docs/sanctum)** — API authentication
- **[SQLite](https://www.sqlite.org/)** — Lightweight file-based database
- **PHP 8.2+**

---

## 📁 Project Structure

```
Blog_Project/
├── frontend/                   # Next.js 16 App
│   ├── app/
│   │   ├── components/
│   │   │   ├── Navbar.tsx      # Navigation bar with dropdown
│   │   │   ├── ThemeProvider.tsx # Dark/light mode provider
│   │   │   └── ThemeToggle.tsx  # Theme toggle button
│   │   ├── about/
│   │   │   └── page.tsx        # Author profiles page
│   │   ├── artikel/
│   │   │   └── [slug]/
│   │   │       └── page.tsx    # Article detail page (dynamic route)
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
│   │   │   ├── Post.php        # Article model
│   │   │   └── User.php
│   │   └── Http/
│   ├── database/
│   │   ├── migrations/         # Table schemas for posts, users, etc.
│   │   ├── seeders/
│   │   │   └── PostSeeder.php  # Article data seeder
│   │   └── database.sqlite     # Database file
│   ├── routes/
│   │   └── api.php             # API endpoints
│   ├── composer.json
│   └── .env.example
│
└── .gitignore
```

## 👥 Authors

This project was created by students of **CCIT FTUI** in partnership with **Jakarta State Polytechnic**:

| Name | Role | Topics |
|------|------|--------|
| Member 1 | Lead Writer & Email Communication | Email, Business Etiquette, Digital Tools |
| Member 2 | Content Lead & Documentation Specialist | Business Letters, Meeting Minutes, Formal Writing |
| Member 3 | Research Lead & Data Communication | Data in Communication, Effective Writing, Research |
| Member 4 | Research Lead & Data Communication | Data in Communication, Effective Writing, Research |

---

## 📄 License

This project was created for **academic purposes** — Semester 4 coursework for the **Business Communication** class.

---

<p align="center">
  Made with ❤️ using <strong>Next.js</strong> & <strong>Laravel</strong>
</p>
