# Web3Forms Setup za Contact Formu

Web3Forms je besplatan servis za slanje contact forme emailova bez backend-a.

## 1. Dobij Access Key (besplatno)

1. Idi na: **https://web3forms.com/**
2. Klikni **"Get Started Free"**
3. Unesi svoj email: `taskado@knowit.tech`
4. Potvrdi email (provjeri inbox)
5. Dobit ćeš **Access Key** (npr: `a1b2c3d4-1234-5678-90ab-cdef12345678`)

## 2. Dodaj Access Key u env varijablu

### Za lokalni development:

Kreiraj `.env.local` u `/services/landing-page/`:

```bash
VITE_WEB3FORMS_ACCESS_KEY=tvoj_access_key_ovdje
```

### Za production (GitHub Actions):

Dodaj GitHub Secret:

1. Idi na: **Settings → Secrets and variables → Actions**
2. Klikni **"New repository secret"**
3. Name: `WEB3FORMS_ACCESS_KEY`
4. Value: tvoj Access Key
5. Klikni **"Add secret"**

Dodaj u build command u GitHub Actions workflow (`.github/workflows/deploy-production.yml`):

```yaml
- name: Build landing page
  run: |
    npm ci
    VITE_WEB3FORMS_ACCESS_KEY=${{ secrets.WEB3FORMS_ACCESS_KEY }} npm run build
  working-directory: ./services/landing-page
```

### Za production (Dockerfile):

Updateaj `Dockerfile-prod` da prima build argument:

```dockerfile
ARG VITE_WEB3FORMS_ACCESS_KEY
ENV VITE_WEB3FORMS_ACCESS_KEY=$VITE_WEB3FORMS_ACCESS_KEY

RUN npm run build
```

Build sa:
```bash
docker build --build-arg VITE_WEB3FORMS_ACCESS_KEY=tvoj_key -f Dockerfile-prod -t landing-page .
```

## 3. Testiraj

```bash
cd services/landing-page
npm run dev
```

Ispuni contact formu i klikni "Pošalji zahtjev" - email bi trebao stići na `taskado@knowit.tech`! 🎉

## Features

✅ **Besplatno** do 250 emailova/mjesec
✅ **Spam zaštita** uključena
✅ **Email notifikacije** na tvoj email
✅ **Custom subject** sa imenom i tvrtkom
✅ **Sve podatke iz forme** automatski šalje

## Troubleshooting

Ako ne radi:
1. Provjeri da li je Access Key ispravan
2. Provjeri konzolu za errore
3. Provjeri da li email stigne u spam folder

## Web3Forms Dashboard

Login na: https://web3forms.com/login

Tu možeš vidjeti:
- Broj poslanih emailova
- Statistiku
- Spam protection settings
