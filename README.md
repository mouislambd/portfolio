# Kanich Fatema Mou — Portfolio

Personal portfolio website built with Next.js 15 (App Router), showcasing projects, skills, and experience — with a MongoDB-backed admin panel to add new projects dynamically without touching code.

**Live:** [bibliodrop-client-sand.vercel.app](#) <!-- update with actual portfolio URL -->

---

## Tech Stack

- **Framework:** Next.js 15 (App Router, TypeScript)
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Database:** MongoDB Atlas
- **Icons:** react-icons (Feather)
- **Contact form:** Web3Forms
- **Deployment:** Vercel

---

## Features

- Responsive multi-section site — Home, About, Skills, Projects, Contact
- Animated hero, timeline, and project cards (Framer Motion)
- Live-searchable projects page
- Contact form with email delivery via Web3Forms
- **Admin panel** — password-protected route to add new projects directly to MongoDB, no redeploy needed
- Downloadable CV

---

## Project Structure

```
mou-portfolio/
├── app/
│   ├── about/
│   ├── admin/
│   │   ├── login/          # Admin login page
│   │   └── add-project/    # Protected: add new project form
│   ├── api/
│   │   ├── auth/
│   │   │   ├── login/      # POST — validates admin credentials, sets session cookie
│   │   │   └── logout/     # POST — clears session cookie
│   │   └── projects/       # GET (public) / POST (protected) — project CRUD
│   ├── contact/
│   ├── projects/
│   ├── skills/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── ProjectsPreview.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── lib/
│   └── mongodb.ts           # MongoDB client connection
├── middleware.ts             # Protects /admin/add-project
└── public/
    └── cv.pdf
```

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

Create a `.env.local` file in the project root:

```env
MONGODB_URI=mongodb://<username>:<password>@<host>:27017/portfolio?ssl=true&replicaSet=<replica-set>&authSource=admin&appName=Cluster0
ADMIN_EMAIL=your@email.com
ADMIN_PASSWORD=your_secure_password
ADMIN_SESSION_TOKEN=any_long_random_string
```

> **Note:** If your ISP blocks `mongodb+srv://` DNS lookups, use the **legacy (non-SRV) connection string** from MongoDB Atlas → Connect → Drivers → toggle "Legacy URI String".

### 3. Run the dev server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

---

## Admin Panel

Add new projects to the portfolio without editing code:

1. Go to `/admin/login`
2. Log in with the credentials set in `.env.local`
3. Fill out the form at `/admin/add-project`
4. New project appears instantly on `/projects` and the homepage preview

Access is protected by `middleware.ts`, which checks for a valid session cookie before allowing access to `/admin/add-project`.

---

## Deployment (Vercel)

1. Push the repo to GitHub
2. Import the project on [vercel.com](https://vercel.com)
3. Add the same environment variables from `.env.local` in the Vercel dashboard (Project Settings → Environment Variables)
4. Deploy

---

## Author

**Kanich Fatema Mou**
Full Stack Developer · Rangpur, Bangladesh
- GitHub: [github.com/mouislambd](https://github.com/mouislambd)
- LinkedIn: [linkedin.com/in/kanich-fatimah-mou](https://www.linkedin.com/in/kanich-fatimah-mou)
-