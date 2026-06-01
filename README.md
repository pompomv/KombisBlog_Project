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

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/posts` | Retrieve all articles (newest first) |
| `GET` | `/api/posts/{slug}` | Retrieve a single article by slug |

### Example Response

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

### Prerequisites

Make sure the following are installed on your machine:

- **Node.js** ≥ 18.x & **npm**
- **PHP** ≥ 8.2
- **Composer** (PHP package manager)

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/<username>/Blog_Project.git
cd Blog_Project
```

### 2️⃣ Set Up the Backend (Laravel)

```bash
cd backend

# Install PHP dependencies
composer install

# Copy the environment file
cp .env.example .env

# Generate the application key
php artisan key:generate

# Run database migrations (SQLite)
php artisan migrate

# Seed the database with article data
php artisan db:seed

# Start the Laravel server
php artisan serve
```

> The backend will be running at **http://localhost:8000**

### 3️⃣ Set Up the Frontend (Next.js)

Open a new terminal:

```bash
cd frontend

# Install Node dependencies
npm install

# Start the development server
npm run dev
```

> The frontend will be running at **http://localhost:3000**

### 4️⃣ Open in Browser

Make sure **both servers** (Laravel & Next.js) are running simultaneously, then open:

🌐 **http://localhost:3000**

---

## 📚 Article Topics

| # | Title | Slug | Category |
|---|-------|------|----------|
| 1 | Email as a Written Communication Tool | `email-communication` | Digital Communication |
| 2 | Making Business Writing Effective | `effective-business-writing` | Writing Skills |
| 3 | Memo | `memo` | Internal Communication |
| 4 | Business Letter | `business-letter` | External Communication |
| 5 | Minutes of a Meeting | `minutes-of-meeting` | Documentation |
| 6 | Importance of Data in Business Communication | `importance-of-data` | Data & Analytics |

---

## 🎨 Screenshots

> _Add website screenshots here._

<!--
Example:
![Homepage](./screenshots/homepage.png)
![Dark Mode](./screenshots/dark-mode.png)
![Article Detail](./screenshots/article-detail.png)
-->

---

## 🛠️ Scripts

### Frontend

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |

### Backend

| Command | Description |
|---------|-------------|
| `php artisan serve` | Start the development server |
| `php artisan migrate` | Run database migrations |
| `php artisan db:seed` | Seed data into the database |
| `composer dev` | Run server + queue + logs + vite concurrently |

---

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
