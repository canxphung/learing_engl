# website-learn monorepo

Quick workspace setup for local development (Windows PowerShell). This repo contains `apps/*` and `lib/*`.

Prereqs: Node 18+, npm or pnpm, Docker (for local mariadb/redis)

PowerShell commands to bootstrap:

```powershell
# from repo root
npm install

# install app deps (example: user-service)
cd .\apps\user-service
npm install @nestjs/common @nestjs/core @nestjs/config @nestjs/typeorm typeorm mariadb reflect-metadata ioredis
cd ../../

# start local infra
npm run docker:up

# run user-service in dev
npm run start:user-service:dev
```

Notes:
- Uses TypeScript path mapping `@lib/*` for local imports.
- If using pnpm/workspaces, adapt commands accordingly.
