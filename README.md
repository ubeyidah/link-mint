<p align="center">
  <img src="public/logo.png" width="80" alt="LinkMint Logo">
</p>

<h1 align="center">LinkMint 🚀</h1>
<p align="center">
Modern URL Shortener with a coin-based system and dashboard.
</p>

---

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Getting Started](#getting-started)
5. [Scripts](#scripts)
6. [Deployment](#deployment)
7. [Contributing](#contributing)
8. [License](#license)

---

## Overview

LinkMint is a modern, multilingual URL shortener designed to be simple, fast, and functional. Users can:

- Shorten URLs quickly.
- Track clicks and usage via a dashboard.
- Earn and spend coins for premium features.
- Manage links, favorites, and history.

This project is built with **Next.js, TypeScript, Tailwind CSS, Prisma**, making it fully scalable and production-ready.

---

## Features

- ✅ User Authentication (Better Auth, Google, Email)
- ✅ Multilingual support: English, Amharic
- ✅ Dashboard with link management and stats
- ✅ Coins-based system for premium actions
- ✅ Payment integration via Chapa
- ✅ AI-enhanced features (planned)

---

## Tech Stack

| Frontend             | Backend | Database                | Other Tools                                                   |
| -------------------- | ------- | ----------------------- | ------------------------------------------------------------- |
| Next.js + TypeScript | Nextjs  | PostgreSQL (Prisma ORM) | pnpm, Tailwind CSS, shadcn/ui, Better Auth, Resend, Chapa API |

---

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/ubeyidah/link-mint.git
cd link-mint
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Setup environment variables

Create a `.env` file in the root:

```env
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=http://localhost:3000 #Base URL of your app
DATABASE_URL="postgresql://postgres:password@localhost:5432/link-mint"
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

### 4. Run locally

```bash
pnpm dev
```

The app should now be running at `http://localhost:3000`.

---

## Scripts

| Command            | Description                  |
| ------------------ | ---------------------------- |
| `pnpm dev`         | Start dev server             |
| `pnpm build`       | Build project for production |
| `pnpm start`       | Start production server      |
| `pnpm lint`        | Run ESLint                   |
| `pnpm db:generate` | Generate Prisma client       |
| `pnpm db:migrate`  | Run database migrations      |

---

## Deployment

- Recommended hosting: **Vercel**
- GitHub CI/CD automatically checks linting, TypeScript types, and builds before deployment.

---

## Contributing

Contributions are welcome!

1. Fork the repo
2. Create a branch (`git checkout -b feature/my-feature`)
3. Commit changes (`git commit -m "Add feature"`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a Pull Request

---

## License

MIT License © 2025 [Ubeyidah Oumer](https://github.com/ubeyidah)
