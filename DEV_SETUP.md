# Development Server Setup

This project has been optimized for a stable development experience. Here's how to get started:

## Quick Start

### Option 1: Use the Helper Script (Recommended)
```bash
npm run dev:helper
```

### Option 2: Use Stable Development Server
```bash
npm run dev:stable
```

### Option 3: Use Turbopack (Fastest, but may be less stable)
```bash
npm run dev
```

## Optimizations Made

### 1. Next.js Configuration (`next.config.ts`)
- **File Watching**: Improved polling and aggregation timeout
- **Memory Management**: Optimized page buffer and inactive age settings
- **Build Performance**: Enabled SWC minification

### 2. Development Scripts
- **Stable Mode**: Uses standard Next.js dev server (most stable)
- **Turbopack Mode**: Uses Next.js with Turbopack (fastest)
- **Helper Script**: Automated setup with environment optimizations

### 3. Environment Optimizations
- Increased Node.js memory limit (4GB)
- Disabled telemetry for faster startup
- Optimized file watching with polling

## Troubleshooting

### Server Won't Start
1. Kill existing processes: `pkill -f "next dev"`
2. Clear Next.js cache: `rm -rf .next`
3. Reinstall dependencies: `npm install`
4. Try the helper script: `npm run dev:helper`

### Hot Reload Not Working
1. Check if files are being watched: Look for file change logs in terminal
2. Try the stable mode: `npm run dev:stable`
3. Check for file permission issues

### Memory Issues
1. The helper script automatically sets memory limits
2. If issues persist, increase `--max-old-space-size` in `dev-server.sh`

### Port Already in Use
1. Kill process on port 3000: `lsof -ti:3000 | xargs kill -9`
2. Or use a different port: `npm run dev:stable -- --port 3001`

## File Structure
```
daylight-clone/
├── dev-server.sh          # Helper script for stable development
├── next.config.ts         # Optimized Next.js configuration
├── package.json           # Updated scripts
└── DEV_SETUP.md          # This file
```

## Best Practices

1. **Use the helper script** for the most stable experience
2. **Keep the terminal open** - don't close it while developing
3. **Check the console** for any error messages
4. **Restart the server** if you encounter persistent issues

## Commands Reference

| Command | Description |
|---------|-------------|
| `npm run dev:helper` | Start with helper script (most stable) |
| `npm run dev:stable` | Start stable development server |
| `npm run dev` | Start with Turbopack (fastest) |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

The server should now be much more stable and not require frequent restarts! 