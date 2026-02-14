This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Backend (Admin + API)

The app includes an admin dashboard (username/password login), blog CRUD, analytics, and image uploads to **Digital Ocean Spaces**.

### Setup

1. **Environment**  
   Copy `.env.example` to `.env` and set:
   - `DATABASE_URL` – MongoDB connection string. **Local MongoDB must run as a replica set** (see `docker-mongodb.md`). Or use MongoDB Atlas (replica set by default).
   - `JWT_SECRET` – At least 32 characters, for admin sessions.
   - **Digital Ocean Spaces** (optional, for image uploads):  
     `DO_SPACES_ENDPOINT`, `DO_SPACES_REGION`, `DO_SPACES_BUCKET`, `DO_SPACES_ACCESS_KEY`, `DO_SPACES_SECRET_KEY`, `DO_SPACES_CDN_URL`.

2. **Database**
   ```bash
   npm run db:generate   # Generate Prisma client
   npm run db:push       # Sync schema to MongoDB (use this; MongoDB does not use migrations)
   npm run db:seed       # Create default admin (username: admin, password: admin123 — change in production)
   ```
   To set a custom admin user: `ADMIN_USERNAME=myuser ADMIN_PASSWORD=mypass npm run db:seed`

3. **Admin dashboard**
   - URL: [http://localhost:3000/admin](http://localhost:3000/admin)  
   - Login with the seeded credentials (or the ones you set via env).  
   - From the dashboard you can create/edit/delete posts, upload images to DO Spaces, and view analytics (views over time, top posts).

### API overview

- **Auth:** `POST /api/auth/login`, `POST /api/auth/logout`, `GET /api/auth/session`
- **Public:** `GET /api/posts` (list), `GET /api/posts/[slug]` (single), `POST /api/posts/[slug]/view` (record view)
- **Admin (authenticated):** `GET/POST /api/admin/posts`, `GET/PATCH/DELETE /api/admin/posts/[id]`, `POST /api/admin/upload`, `GET /api/admin/analytics`

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
