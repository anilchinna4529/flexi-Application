# AI Services Platform

## 🚀 Quick Start (Windows)

Due to PowerShell execution policies, please use `npm.cmd` instead of `npm` for these commands.

### 1. Start Docker
Ensure Docker Desktop is running, then start the database and redis:
```powershell
cd docker
docker compose up -d
cd ..
```

### 2. Run the Development Server
```powershell
npm.cmd run dev
```

### 3. Ports
- **Frontend**: [http://localhost:3000](http://localhost:3000)
- **Backend API**: [http://localhost:3001/api/v1](http://localhost:3001/api/v1)
- **Database (Internal)**: Port `5433`

## 🛠 Troubleshooting

### "Script execution is disabled"
If you get an error about `npm.ps1` not being loaded, always use **`npm.cmd`** explicitly.

### "Another dev server is already running"
If port 3000 is blocked, run:
```powershell
taskkill /F /IM node.exe /T
```

## 📂 Project Structure
- `apps/web`: Next.js Frontend
- `apps/api`: NestJS Backend
- `packages/database`: Prisma Schema & Client
