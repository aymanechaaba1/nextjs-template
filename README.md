# NextJS NextAuth v5 Starter Kit

1. `npm i`
2. Setup you .env variables (Check env.example)
3. `npm run dev`

- NextAuth v5
- NextJS 14
- shadcn for the UI
- Pre-Configured Dark/Light Mode
- Pre-Configured Toast Notifications (Sonner)
- Postgres DB
- Prisma ORM
- Deployment: Vercel

```ts
import { auth } from '@/lib/auth';

const session = await auth();
```

### User Payload

`{
name: string;
email: string;
image: string;
id: string;
access_token: string;
}`

Happy Coding 😎
