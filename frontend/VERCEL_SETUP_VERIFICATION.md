# Vercel Setup Verification Guide

## Current Status ✅
- **Domain**: hivestudio.ai is live and working
- **Server**: Confirmed running on Vercel
- **Repository**: https://github.com/auitenbroek1/hivestudio-ai

## Step-by-Step Vercel Configuration Verification

### 1. Login and Access Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Login to your account
3. Look for a project named something like:
   - `hivestudio-ai`
   - `hivestudio-ai-frontend` 
   - `auitenbroek1-hivestudio-ai`

### 2. Verify Project Settings

#### Repository Connection ✅ Required Settings:
```
Repository: auitenbroek1/hivestudio-ai
Branch: main (should auto-deploy)
Root Directory: frontend
Framework Preset: Create React App
```

#### Build Settings ✅ Required:
```
Build Command: npm run build
Output Directory: build
Install Command: npm install
Development Command: npm start
```

### 3. Environment Variables
In your Vercel project dashboard > Settings > Environment Variables, you should have:

```bash
# Production Environment Variables
REACT_APP_SITE_URL=https://hivestudio.ai
REACT_APP_SITE_NAME=Hive Studio AI
REACT_APP_CONTACT_EMAIL=sales@hivestudio.ai
REACT_APP_ADDRESS=Des Moines, IA USA
REACT_APP_LINKEDIN=https://www.linkedin.com/in/aaroni10/
REACT_APP_DESCRIPTION=Transform AI curiosity into competitive advantage with practical implementations that deliver measurable business results.
REACT_APP_ENVIRONMENT=production
REACT_APP_VERSION=1.0.0
GENERATE_SOURCEMAP=false
```

### 4. Domain Configuration ✅ 
In Domains section, you should see:
- `hivestudio.ai` (Primary domain)
- SSL Certificate: Auto-managed ✅
- Status: Valid ✅

### 5. Deployment Settings ✅ Required:
- **Auto-deploy**: Enabled for `main` branch
- **Production Branch**: main
- **Root Directory**: frontend

## Common Issues & Fixes

### Issue 1: Build Failing
**Fix**: Check these settings in Vercel:
```
Root Directory: frontend
Build Command: npm run build
Output Directory: build
```

### Issue 2: Wrong Repository Connected
**Fix**: 
1. Go to Settings > Git
2. Disconnect current repository
3. Connect to: `auitenbroek1/hivestudio-ai`
4. Set root directory to `frontend`

### Issue 3: Domain Not Working
**Fix**:
1. Settings > Domains
2. Add custom domain: `hivestudio.ai`
3. Follow DNS instructions (should point to Vercel nameservers)

### Issue 4: Environment Variables Missing
**Fix**: Add all variables listed in section 3 above

## Verification Steps

### Test 1: Check Deployment
1. Go to your Vercel project dashboard
2. Look at "Deployments" tab
3. Latest deployment should be from today with status "Ready"
4. Click on the deployment to see build logs

### Test 2: Check Domain
1. Visit https://hivestudio.ai
2. Should load the current site
3. Check browser dev tools > Network tab
4. Should see `server: Vercel` in response headers

### Test 3: Check Auto-Deploy
1. Make a small change to any file in the repository
2. Commit and push to `main` branch
3. Vercel should automatically trigger a new deployment
4. Check Deployments tab for new build

## If You Need to Reconnect/Fix

### Complete Setup from Scratch:
1. **Import Project**:
   - Click "Add New" > "Project"
   - Import from GitHub: `auitenbroek1/hivestudio-ai`

2. **Configure Build**:
   ```
   Framework Preset: Create React App
   Root Directory: frontend
   Build Command: npm run build
   Output Directory: build
   ```

3. **Add Domain**:
   - After project created, go to Settings > Domains
   - Add: `hivestudio.ai`

4. **Set Environment Variables**:
   - Copy all variables from section 3 above
   - Set each one in Settings > Environment Variables

5. **Deploy**:
   - Should auto-deploy after configuration
   - Check Deployments tab for status

## Contact for Issues

If you encounter problems:
1. Check Vercel deployment logs for specific errors
2. Verify all settings match this guide exactly
3. Contact support if domain DNS issues persist

---

**This guide ensures your Vercel deployment matches the working configuration for hivestudio.ai**