# Pankaj Jangid — Portfolio

Built with Next.js 16, React 19, Tailwind CSS v4, motion.

## Adding a project
1. Create `content/projects/my-project.ts`
2. Add it to `content/projects/index.ts`
3. Add it to `content/config.ts` → projectOrder (and featuredProjects if featured)

If no screenshots are added in the my-project.ts file, then screenshots are auto-detected from `/screenshots/01.png`, `/02.png`...
in the project's GitHub repo. If none available, falls back to the GitHub OG card.

## Local dev
npm install && npm run dev

## Deploy
Push to GitHub → connect to Vercel → every push auto-deploys.