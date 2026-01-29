# Google Cloud Build Setup

## Prerequisites

1. **Google Cloud Project**: `taskado-477909`
2. **Artifact Registry Repository**: 
   - Region: `europe-west4`
   - Repository: `taskado-prod`
3. **IAM Permissions**: Cloud Build service account needs:
   - `Artifact Registry Writer`
   - `Cloud Build Service Account`

## Image Naming Convention

```
europe-west4-docker.pkg.dev/taskado-477909/taskado-prod/taskado_landing:<TAG>
```

**Tags:**
- `${SHORT_SHA}` - First 7 characters of git commit hash
- `latest` - Latest production build

## Manual Build

### Trigger build manually:
```bash
cd services/landing-page

# Submit build to Cloud Build
gcloud builds submit \
  --config=cloudbuild-prod.yaml \
  --project=taskado-477909 \
  --region=europe-west4
```

## Automatic Build Trigger

### Setup GitHub/GitLab trigger:

```bash
# Create trigger
gcloud builds triggers create github \
  --name="landing-page-prod" \
  --repo-name="taskado-borna" \
  --repo-owner="your-org" \
  --branch-pattern="^main$" \
  --build-config="services/landing-page/cloudbuild-prod.yaml" \
  --included-files="services/landing-page/**" \
  --project=taskado-477909 \
  --region=europe-west4
```

### Trigger on specific branch:
- **Branch**: `main` or `production`
- **Config**: `cloudbuild-prod.yaml`
- **Included files**: `services/landing-page/**`

## Build Process

### Steps:
1. **Build**: Multi-stage Docker build using `Dockerfile-prod`
   - Stage 1: Build React app with npm
   - Stage 2: Create nginx container with built files
2. **Tag**: Image tagged with commit hash and 'latest'
3. **Push**: Push both tags to Artifact Registry
4. **Cache**: Uses layer caching for faster builds

### Build specifications:
- **Machine**: N1_HIGHCPU_8 (8 vCPU)
- **Disk**: 100GB
- **Timeout**: 30 minutes (1800s)
- **Build timeout**: 20 minutes (1200s)

## Deployment

### Pull and run the image:
```bash
# Pull specific version
docker pull europe-west4-docker.pkg.dev/taskado-477909/taskado-prod/taskado_landing:abc1234

# Or pull latest
docker pull europe-west4-docker.pkg.dev/taskado-477909/taskado-prod/taskado_landing:latest

# Run container
docker run -p 80:80 europe-west4-docker.pkg.dev/taskado-477909/taskado-prod/taskado_landing:latest
```

### Access the app:
- Local: `http://localhost/landing-page`
- Production: `https://your-domain.com/landing-page`

## Monitoring

### View build logs:
```bash
# List recent builds
gcloud builds list --project=taskado-477909 --region=europe-west4

# Get specific build details
gcloud builds describe <BUILD_ID> --project=taskado-477909 --region=europe-west4
```

### View build history:
https://console.cloud.google.com/cloud-build/builds?project=taskado-477909

## Troubleshooting

### Common issues:

**1. Authentication error:**
```bash
gcloud auth configure-docker europe-west4-docker.pkg.dev
```

**2. Repository doesn't exist:**
```bash
# Create Artifact Registry repository
gcloud artifacts repositories create taskado-prod \
  --repository-format=docker \
  --location=europe-west4 \
  --project=taskado-477909
```

**3. Permission denied:**
- Ensure Cloud Build service account has `Artifact Registry Writer` role
- Check IAM permissions in Google Cloud Console

## Environment Variables

Set these in Cloud Build trigger or substitutions:
- `_REGISTRY`: Artifact Registry domain
- `_PROJECT_ID`: GCP project ID
- `_REPO`: Artifact Registry repository name
- `_IMAGE`: Image name

## Cost Optimization

- **Use caching**: Enabled in config with `--cache-from`
- **Machine type**: N1_HIGHCPU_8 (adjust based on needs)
- **Disk size**: 100GB (adjust if needed)
- **Build triggers**: Only build on specific paths/branches
