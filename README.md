# Next.Js ShadCN Template

## Features

<ul>
  <li>✅Responsive Mobile/Table/Desktop screens</li>
  <li>✅Dynamic Navbar (defined in: <code>utils/constants.ts</code>)</li>
  <li>✅Different Navbar for Desktop/Mobile
    <details>
      <summary><i>Preview</i></summary>
      <img src="https://github.com/user-attachments/assets/c660f0f9-6303-451e-a6a4-c21a30c6f92d" />
      <img src="https://github.com/user-attachments/assets/a205124a-0886-4bcc-9688-7294df6e6570" />
    </details> 
  </li>
  <li>✅Light/Dark Mode Changer
   <details>
     <summary><i>Preview</i></summary>
     <img src="https://github.com/user-attachments/assets/487eff54-15ad-4f20-94c3-da41de8c1ece" />
   </details>
  </li>
</ul>

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
