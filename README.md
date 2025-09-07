# ALX Listing App
The ALX Listing App is an Airbnb-inspired project designed to practice building scalable, component-driven web applications with Next.js.
This milestone sets up the project foundation with TypeScript, ESLint, TailwindCSS, and a well-structured folder layout to ensure maintainability as we add more features (such as listing pages and reusable components).

## Project Goals:

- Build an Airbnb clone listing page using Next.js
- Establish a clean and maintainable code structure.
- Create reusable components (eg. Cards, Buttons, etc..)
- Apply responsive styling with TailwindCSS.
- Ensure type safety with TypeScript.

## 📂 Project Structure

````bash
alx-listing-app/
│
├── components/          # Reusable UI components
│   └── common/
│       ├── Card.tsx     # Card component for property listings
│       └── Button.tsx   # Reusable button component
│
├── interfaces/          # TypeScript interfaces
│   └── index.ts         # Placeholder interfaces (e.g., CardProps, ButtonProps)
│
├── constants/           # Reusable constants
│   └── index.ts
│
├── public/
│   └── assets/          # Static assets (images, SVGs, icons, etc.)
│
├── pages/               # Next.js pages
│   └── index.tsx        # Home page
│
├── styles/
│   └── globals.css      # TailwindCSS global styles
│
├── tailwind.config.js   # TailwindCSS configuration
├── tsconfig.json        # TypeScript configuration
├── package.json         # Project dependencies and scripts
└── README.md            # Project documentation
````
## How to run locally:
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

git clone https://github.com/<your-username>/alx-listing-app.git
cd alx-listing-app

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.
