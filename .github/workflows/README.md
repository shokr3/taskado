# GitHub Actions Workflows

Automated build and deployment pipelines for the Taskado Landing Page.

## Workflows

### 1. `deploy-production.yml` - Cloud Run Deployment
Automatically builds and deploys to Cloud Run on every push to main/master branches.

**Triggers:**
- Push to `main`, `master`, or `dev` branches
- Manual trigger via GitHub UI

**Steps:**
1. Build Docker image using `Dockerfile-prod`
2. Push to Artifact Registry
3. Deploy to Cloud Run
4. Output service URL

### 2. `deploy-gke.yml` - GKE Deployment
Automatically builds and deploys to Google Kubernetes Engine.

**Triggers:**
- Push to `main` or `master` branches
- Manual trigger via GitHub UI

**Steps:**
1. Build Docker image using `Dockerfile-prod`
2. Push to Artifact Registry
3. Update GKE deployment
4. Monitor rollout status

## Setup

### Prerequisites

1. **Google Cloud Service Account** with permissions:
   - `Artifact Registry Writer`
   - `Cloud Run Admin` (for Cloud Run deployment)
   - `Kubernetes Engine Developer` (for GKE deployment)

2. **Create Service Account:**
   ```bash
   # Create service account
   gcloud iam service-accounts create github-actions \
     --display-name="GitHub Actions" \
     --project=taskado-477909
   
   # Get service account email
   SA_EMAIL="github-actions@taskado-477909.iam.gserviceaccount.com"
   
   # Grant permissions for Artifact Registry
   gcloud projects add-iam-policy-binding taskado-477909 \
     --member="serviceAccount:${SA_EMAIL}" \
     --role="roles/artifactregistry.writer"
   
   # For Cloud Run deployment
   gcloud projects add-iam-policy-binding taskado-477909 \
     --member="serviceAccount:${SA_EMAIL}" \
     --role="roles/run.admin"
   
   gcloud projects add-iam-policy-binding taskado-477909 \
     --member="serviceAccount:${SA_EMAIL}" \
     --role="roles/iam.serviceAccountUser"
   
   # For GKE deployment
   gcloud projects add-iam-policy-binding taskado-477909 \
     --member="serviceAccount:${SA_EMAIL}" \
     --role="roles/container.developer"
   
   # Create and download key
   gcloud iam service-accounts keys create github-actions-key.json \
     --iam-account="${SA_EMAIL}"
   ```

3. **Add GitHub Secret:**
   - Go to your GitHub repository
   - Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Name: `GCP_SA_KEY`
   - Value: Paste the entire contents of `github-actions-key.json`
   - Click "Add secret"

### Configuration

#### Environment Variables (in workflow files):

**Common:**
```yaml
PROJECT_ID: taskado-477909
REGION: europe-west4
REGISTRY: europe-west4-docker.pkg.dev
REPOSITORY: taskado-prod
IMAGE_NAME: taskado_landing
```

**Cloud Run specific:**
```yaml
SERVICE_NAME: landing-page
```

**GKE specific:**
```yaml
GKE_CLUSTER: taskado-cluster      # Change to your cluster name
GKE_ZONE: europe-west4-a          # Change to your zone
DEPLOYMENT_NAME: landing-page
NAMESPACE: production
```

### Enable/Disable Workflows

To use only one workflow, disable the other:
- Go to Actions tab in GitHub
- Click on the workflow you want to disable
- Click the "..." menu → "Disable workflow"

Or delete the workflow file you don't need.

## Usage

### Automatic Deployment

Just push to the configured branch:
```bash
git add .
git commit -m "Update landing page"
git push origin main
```

The workflow will automatically:
1. Build the Docker image
2. Push to Artifact Registry
3. Deploy to Cloud Run or GKE
4. Show deployment URL/info in the Actions log

### Manual Deployment

1. Go to your repository on GitHub
2. Click "Actions" tab
3. Select the workflow (deploy-production or deploy-gke)
4. Click "Run workflow" button
5. Select the branch
6. Click "Run workflow"

## Monitoring

### View Workflow Status

- Go to Actions tab in GitHub
- Click on a workflow run to see details
- Each step shows logs and execution time

### Common Issues

**❌ Authentication failed:**
- Check that `GCP_SA_KEY` secret is set correctly
- Verify service account has required permissions

**❌ Image push failed:**
- Ensure Artifact Registry repository exists
- Check service account has `artifactregistry.writer` role

**❌ Cloud Run deployment failed:**
- Verify service account has `run.admin` role
- Check that Cloud Run API is enabled

**❌ GKE deployment failed:**
- Verify GKE cluster name and zone are correct
- Check that deployment exists in the specified namespace
- Ensure service account has `container.developer` role

## Cost Comparison

### GitHub Actions (Free Tier)
- **Public repos:** Unlimited
- **Private repos:** 2,000 minutes/month free
- **After free tier:** ~$0.008/minute

### Cloud Build
- **First 120 build-minutes/day:** Free
- **After free tier:** $0.003/build-minute

**Estimate for this project:**
- Build time: ~5-10 minutes
- Deployments per day: 5-10
- **GitHub Actions:** Likely within free tier
- **Cloud Build:** Likely within free tier

## Security Notes

- Service account key is sensitive - never commit to repository
- Use least privilege principle for service account permissions
- Rotate service account keys periodically
- Consider using Workload Identity Federation for keyless auth (advanced)

## Switching Back to Cloud Build

If you want to use Cloud Build instead, the `cloudbuild-prod.yaml` and `cloudbuild-prod-cloudrun.yaml` files are still available and ready to use.
