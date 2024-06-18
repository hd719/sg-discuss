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

- Create a `.env.local` file and add (do not version control)

```
GITHUB_CLIENT_SECRET=
GITHUB_CLIENT_ID=
AUTH_SECRET=
```
- In order to run this project make sure you on node version `v21.6.2 `
- Run in dev mode

```sh
nvm use node 21.6.2
pnpm install
pnpm run dev

npx prisma generate
```
