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

- Create a `.env.local` file and add

```
const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

```
- In order to run this project make sure you on node version `v21.6.2 `
- Run in dev mode

```sh 
nvm use node 21.6.2
pnpm install
pnpm run dev
```