# react-trpc-turbo

## Technologies used

- Turborepo
- React Vite
- Express.js
- tRPC
- TanStack Router
- Tailwind CSS

### Apps and Packages

- `@repo/web`: Vite, React, TanStack Router and tRPC Client
- `@repo/api`: Express.js, Drizzle and tRPC Server
- `@repo/eslint-config`: `eslint` configurations
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo
- `@repo/tailwind-config`: shared Tailwind configuration

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

## Setup

To get started, clone the repository and install the dependencies:

```
pnpm install
```

Then, copy the `.env.example` file to `.env` in the web/ folder and fill in the necessary environment variables. For local development, the defaul value will work. If you want to deploy the app, you will need to specify where the backend is hosted.

```
cp ./apps/web/.env.example ./apps/web/.env
```

### Build

To build all apps and packages, run the following command:

```
pnpm build
```

### Develop

To run all apps and packages in development mode, run the following command:

```
pnpm dev
```
