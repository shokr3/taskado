# Docker Setup for Landing Page

## Development

### Build and run development container:
```bash
# Using Docker Compose (recommended)
docker-compose --profile dev up

# Or using Docker directly
docker build -t landing-page-dev -f Dockerfile .
docker run -p 5173:5173 -v $(pwd):/app -v /app/node_modules landing-page-dev
```

Dev server će biti dostupan na: http://localhost:5173

Hot reload je omogućen - promjene u kodu će se automatski reflektirati.

## Production

### Build and run production container:
```bash
# Using Docker Compose (recommended)
docker-compose --profile prod up

# Or using Docker directly
docker build -t landing-page-prod -f Dockerfile-prod .
docker run -p 8080:80 landing-page-prod
```

Landing page će biti dostupan na: http://localhost:8080/

### Multi-stage build proces:
1. **Stage 1 (Builder)**: Buildanje React aplikacije sa npm run build
2. **Stage 2 (Nginx)**: Kopiranje build fileova u `/usr/share/nginx/html`

### Nginx konfiguracija:
- Gzip compression omogućen
- SPA routing podrška (try_files za client-side routing)
- Caching statickih assetsa (1 godina)
- Landing page se servira iz root path-a (`/`)

## Deployment

Za deployment u produkciju:

```bash
# Build production image
docker build -t taskado-landing-page:latest -f Dockerfile-prod .

# Tag za registry (ako koristite)
docker tag taskado-landing-page:latest your-registry/taskado-landing-page:latest

# Push to registry
docker push your-registry/taskado-landing-page:latest
```

## Environment Variables

Za Contact formu:
- `VITE_WEB3FORMS_ACCESS_KEY` - Web3Forms Access Key (za slanje emailova)

Dodaj ih u `.env.local` file (za development) ili kao build argument (za production).
