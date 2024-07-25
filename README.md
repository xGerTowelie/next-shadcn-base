# Next.Js ShadCN Template

## Features

- [X] Desktop screens
- [X] Tablet screens
- [X] Mobile screens
- [X] Light/Dark mode (+changer)
- [X] Dynamic Navbar
- [X] Different Navbar for Desktop/Mobile

## Dependencies

- [**Next.js**](https://nextjs.org)
- [**TailwindCSS**](https://tailwindcss.com)
- [**ShadCN**](https://ui.shadcn.com)
- [**Prisma**](https://www.prisma.io)
- [**Docker**](https://www.docker.com)
- [**Postgres**](https://www.postgresql.org)

## Install & Configuration

First install all the dependencies for Node.js

```bash
npm install
```

After fill the .env variables:

```.env
PROJECT_NAME=
POSTGRES_USER=
POSTGRES_PASSWORD=
POSTGRES_PORT=
DATABASE_URL=
```

## Usage

First make sure to start docker:

```bash
docker compose up -d
```

Then start the next app:

```bash
// Development
npm run dev

// Production
npm run build
npm run start
```

Finally start prisma studio:
```bash
npx prisma studio
```
