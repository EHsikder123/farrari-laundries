# How to Deploy Farrari Laundries Website to Vercel

This guide explains how to deploy your Farrari Laundries website to Vercel.

---

## Prerequisites

1. A [Vercel account](https://vercel.com/signup) (free)
2. A [GitHub account](https://github.com) (to host your code)
3. Your project code pushed to a GitHub repository

---

## Step 1: Prepare Your Project

### 1.1 Create Environment Variables File

Create a `.env.production` file in your `frontend` folder:

```
REACT_APP_BACKEND_URL=https://your-backend-url.com
```

### 1.2 Verify Build Works Locally

Run these commands to test your build:

```bash
cd frontend
npm run build
```

If the build succeeds, you're ready to deploy!

---

## Step 2: Push Code to GitHub

If you haven't already:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Push to GitHub
git push -u origin main
```

---

## Step 3: Deploy to Vercel

### Option A: Using Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"Add New..."** → **"Project"**
3. Click **"Import"** next to your GitHub repository
4. Configure your project:
   - **Framework Preset:** Create React App
   - **Root Directory:** `frontend`
   - **Build Command:** `npm run build` (or `yarn build`)
   - **Output Directory:** `build`

5. Add Environment Variables:
   - Click **"Environment Variables"**
   - Add: `REACT_APP_BACKEND_URL` = `https://your-backend-api-url.com`

6. Click **"Deploy"**

### Option B: Using Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Navigate to frontend folder:
```bash
cd frontend
```

3. Deploy:
```bash
vercel
```

4. Follow the prompts:
   - Link to existing project? No
   - Project name: farrari-laundries
   - Directory: ./
   - Override settings? No

---

## Step 4: Configure Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click **"Settings"** → **"Domains"**
3. Add your custom domain (e.g., `www.farrarilaundries.com`)
4. Update your domain's DNS settings:
   - Add a CNAME record pointing to `cname.vercel-dns.com`

---

## Step 5: Deploy Backend (FastAPI)

For the backend, you have several options:

### Option A: Deploy Backend Separately

The backend can be deployed to:
- **Railway** - [railway.app](https://railway.app)
- **Render** - [render.com](https://render.com)
- **DigitalOcean App Platform** - [digitalocean.com](https://digitalocean.com)
- **Fly.io** - [fly.io](https://fly.io)

### Backend Deployment Steps (Railway Example)

1. Create account at railway.app
2. Click **"New Project"** → **"Deploy from GitHub repo"**
3. Select your repository
4. Configure:
   - Root Directory: `backend`
   - Start Command: `uvicorn server:app --host 0.0.0.0 --port $PORT`

5. Add environment variables:
   - `MONGO_URL`: Your MongoDB connection string
   - `DB_NAME`: Your database name
   - Any other required variables

6. After deployment, copy your backend URL and update your frontend's `REACT_APP_BACKEND_URL` environment variable in Vercel.

---

## Step 6: Set Up MongoDB (If Not Already Done)

1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a free cluster
3. Create a database user
4. Whitelist IP addresses (or allow access from anywhere for development)
5. Get your connection string
6. Add it as `MONGO_URL` in your backend environment variables

---

## Automatic Deployments

Once set up, Vercel will automatically deploy:
- Every time you push to the `main` branch
- Every pull request gets a preview deployment

---

## Troubleshooting

### Build Fails

1. Check the build logs in Vercel dashboard
2. Ensure all dependencies are in `package.json`
3. Run `npm run build` locally to debug

### Environment Variables Not Working

1. Verify variable names start with `REACT_APP_`
2. Redeploy after adding new variables
3. Check Variables are set for "Production" environment

### API Calls Failing

1. Check CORS settings on your backend
2. Verify `REACT_APP_BACKEND_URL` is correct
3. Ensure backend is deployed and accessible

---

## Useful Commands

```bash
# Check Vercel deployment status
vercel ls

# View deployment logs
vercel logs

# Promote preview to production
vercel promote [deployment-url]

# Set environment variable
vercel env add REACT_APP_BACKEND_URL
```

---

## Resources

- [Vercel Documentation](https://vercel.com/docs)
- [React Deployment Guide](https://create-react-app.dev/docs/deployment)
- [MongoDB Atlas Documentation](https://docs.atlas.mongodb.com)

---

## Support

For deployment issues:
1. Check Vercel's [status page](https://www.vercel-status.com)
2. Join Vercel's [Discord community](https://vercel.com/discord)
3. Contact Vercel support through your dashboard
