# Google Cloud Build Setup

## Prerequisites

1. **Google Cloud Project**: `taskado-477909`
2. **Artifact Registry Repository**: 
   - Region: `europe-west4`
   - Repository: `taskado-prod`
3. **IAM Permissions**: Cloud Build service account needs:
   - `Artifact Registry Writer`
   - `Cloud Build Service Account`
   - **For GKE**: `Kubernetes Engine Developer` or `container.developer`
   - **For Cloud Run**: `Cloud Run Admin` or `run.admin`

### Setup IAM Permissions:

```bash
# Get Cloud Build service account
PROJECT_NUMBER=$(gcloud projects describe taskado-477909 --format='value(projectNumber)')
SERVICE_ACCOUNT="${PROJECT_NUMBER}@cloudbuild.gserviceaccount.com"

# For GKE deployment
gcloud projects add-iam-policy-binding taskado-477909 \
  --member="serviceAccount:${SERVICE_ACCOUNT}" \
  --role="roles/container.developer"

# For Cloud Run deployment
gcloud projects add-iam-policy-binding taskado-477909 \
  --member="serviceAccount:${SERVICE_ACCOUNT}" \
  --role="roles/run.admin"

# Artifact Registry (required for both)
gcloud projects add-iam-policy-binding taskado-477909 \
  --member="serviceAccount:${SERVICE_ACCOUNT}" \
  --role="roles/artifactregistry.writer"
```

## Image Naming Convention

```
europe-west4-docker.pkg.dev/taskado-477909/taskado-prod/taskado_landing:<TAG>
```

**Tags:**
- `${SHORT_SHA}` - First 7 characters of git commit hash
- `latest` - Latest production build

## Deployment Options

### Option 1: GKE (Kubernetes) - `cloudbuild-prod.yaml`
Automatically updates Kubernetes deployment after building image.

**Prerequisites:**
- GKE cluster exists
- Deployment named `landing-page` exists in `production` namespace
- Cloud Build service account has GKE permissions

**Substitutions to set:**
- `_GKE_CLUSTER`: Your GKE cluster name (e.g., `taskado-cluster`)
- `_DEPLOYMENT_NAME`: Kubernetes deployment name (default: `landing-page`)
- `_NAMESPACE`: Kubernetes namespace (default: `production`)

### Option 2: Cloud Run - `cloudbuild-prod-cloudrun.yaml`
Automatically deploys to Cloud Run after building image.

**Substitutions to set:**
- `_SERVICE_NAME`: Cloud Run service name (default: `landing-page`)
- `_REGION`: Cloud Run region (default: `europe-west4`)

## Manual Build

### For GKE deployment:
```bash
cd services/landing-page

# Submit build with GKE deployment
gcloud builds submit \
  --config=cloudbuild-prod.yaml \
  --project=taskado-477909 \
  --region=europe-west4 \
  --substitutions=_GKE_CLUSTER="your-cluster-name"
```

### For Cloud Run deployment:
```bash
cd services/landing-page

# Submit build with Cloud Run deployment
gcloud builds submit \
  --config=cloudbuild-prod-cloudrun.yaml \
  --project=taskado-477909 \
  --region=europe-west4 \
  --substitutions=_SERVICE_NAME="landing-page"
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
4. **Deploy**: Automatically deploy new image
   - **GKE**: Updates Kubernetes deployment with `kubectl set image`
   - **Cloud Run**: Deploys new revision with `gcloud run deploy`
5. **Verify**: 
   - **GKE**: Monitors rollout status until complete
   - **Cloud Run**: Returns service URL after deployment

### Deployment Details:

**GKE Deployment:**
- Updates deployment `landing-page` in namespace `production`
- Uses image with specific commit hash (not `latest`)
- Records deployment for rollback capability
- Waits up to 5 minutes for rollout to complete
- Kubernetes handles rolling update automatically

**Cloud Run Deployment:**
- Deploys to service `landing-page` in region `europe-west4`
- Auto-scaling: 1-10 instances
- Resources: 1 CPU, 512Mi memory
- Timeout: 300 seconds
- Allows unauthenticated access (public)
- Zero downtime deployment

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
