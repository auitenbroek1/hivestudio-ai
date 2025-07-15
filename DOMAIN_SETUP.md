# Domain Setup Instructions for hivestudio.ai

## 🌐 Complete Domain Configuration Guide

This document provides step-by-step instructions for configuring the hivestudio.ai domain for production deployment.

## 📋 Domain Setup Checklist

### Prerequisites
- [ ] Domain purchased and owned (hivestudio.ai)
- [ ] Access to domain registrar control panel
- [ ] Vercel account configured
- [ ] Website ready for deployment

## 🔧 DNS Configuration

### Step 1: Configure Vercel for Custom Domain

1. **Deploy to Vercel First**
   ```bash
   # If not already deployed
   npx vercel --prod
   ```

2. **Add Custom Domain in Vercel Dashboard**
   - Go to Vercel Dashboard → Your Project → Settings → Domains
   - Add domain: `hivestudio.ai`
   - Add domain: `www.hivestudio.ai`

### Step 2: DNS Records Configuration

Configure the following DNS records with your domain registrar:

#### Primary Domain (hivestudio.ai)
```
Type: A
Name: @
Value: 76.76.19.61
TTL: 3600 (or default)
```

#### WWW Subdomain
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600 (or default)
```

#### Alternative Vercel Configuration
If using Vercel's nameservers (recommended for easier management):
```
Type: CNAME
Name: @
Value: cname.vercel-dns.com
TTL: 3600

Type: CNAME  
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

### Step 3: Email Configuration (Optional)

If setting up email for aaron@hivestudio.ai:

#### Using Google Workspace
```
Type: MX
Name: @
Value: 1 smtp.google.com
TTL: 3600
```

#### Using Custom Email Provider
Configure MX records according to your email provider's specifications.

## 🔒 SSL Certificate Setup

### Automatic SSL (Recommended)
Vercel automatically provides SSL certificates for custom domains:
- SSL certificate is automatically generated and renewed
- Force HTTPS redirects are enabled by default
- No manual configuration required

### Manual SSL Verification
If needed, verify SSL is working:
1. Visit https://hivestudio.ai
2. Check for padlock icon in browser
3. Verify certificate details show "Let's Encrypt" or "Vercel"

## 🚀 Deployment Process

### Step 1: Final Production Deployment
```bash
cd /Users/aaronuitenbroek/projects/hivestudio-ai/frontend

# Build and test locally first
npm run build
npm run lint
npm run typecheck

# Deploy to production
npx vercel --prod
```

### Step 2: Configure Domain in Vercel
1. Go to Vercel Dashboard
2. Select your project
3. Navigate to Settings → Domains
4. Add `hivestudio.ai` and `www.hivestudio.ai`
5. Follow Vercel's DNS configuration instructions

### Step 3: Update Environment Variables
Ensure production environment variables are set in Vercel:
- `REACT_APP_SITE_URL=https://hivestudio.ai`
- `REACT_APP_CONTACT_EMAIL=aaron@hivestudio.ai`
- `REACT_APP_ENVIRONMENT=production`

## 🔍 Verification Steps

### Domain Propagation Check
```bash
# Check DNS propagation
nslookup hivestudio.ai
nslookup www.hivestudio.ai

# Check with online tools
# - https://dnschecker.org
# - https://whatsmydns.net
```

### Website Functionality Test
- [ ] https://hivestudio.ai loads correctly
- [ ] https://www.hivestudio.ai redirects to main domain
- [ ] All pages load without errors
- [ ] Contact forms work properly
- [ ] Mobile responsiveness verified
- [ ] SSL certificate is valid and active

## ⏱️ Timeline Expectations

### DNS Propagation Times
- **Immediate**: Vercel servers (usually 1-5 minutes)
- **Local ISP**: 15 minutes to 2 hours
- **Global**: Up to 24-48 hours (full propagation)

### Recommended Waiting Periods
- Wait 15 minutes after DNS changes before testing
- Allow 2 hours for most users to see changes
- Full global propagation: 24-48 hours

## 🛠️ Troubleshooting

### Common Issues

#### Domain Not Resolving
1. **Check DNS records**: Verify A/CNAME records are correct
2. **TTL settings**: Lower TTL to 300 for faster updates during setup
3. **Clear DNS cache**: `ipconfig /flushdns` (Windows) or `sudo dscacheutil -flushcache` (Mac)

#### SSL Certificate Issues
1. **Wait for propagation**: SSL certificates may take 10-15 minutes to activate
2. **Check domain verification**: Ensure domain is properly verified in Vercel
3. **Force HTTPS**: Enable "Force HTTPS" in Vercel domain settings

#### 404 Errors
1. **Check deployment**: Ensure latest version is deployed to production
2. **Verify routing**: Check vercel.json rewrites configuration
3. **Build issues**: Verify production build completes successfully

### Debugging Commands
```bash
# Check DNS resolution
dig hivestudio.ai
dig www.hivestudio.ai

# Test SSL certificate
openssl s_client -connect hivestudio.ai:443 -servername hivestudio.ai

# Check HTTP response
curl -I https://hivestudio.ai
```

## 📞 Support Resources

### Vercel Support
- **Documentation**: https://vercel.com/docs/concepts/projects/custom-domains
- **Support**: https://vercel.com/help
- **Community**: https://github.com/vercel/vercel/discussions

### Domain Registrar Support
- Contact your domain registrar's support team for DNS configuration help
- Provide them with the DNS records listed above

### Emergency Contacts
- **Technical Issues**: Development team
- **Domain Issues**: Domain registrar support
- **Hosting Issues**: Vercel support

## 🔄 Rollback Plan

If domain configuration causes issues:

1. **Immediate**: Remove custom domain from Vercel, use vercel.app URL temporarily
2. **DNS Revert**: Change DNS records back to previous configuration
3. **Wait**: Allow 1-2 hours for DNS propagation
4. **Debug**: Identify and fix the issue
5. **Retry**: Reconfigure domain with corrected settings

## 📝 Post-Setup Tasks

After successful domain configuration:

- [ ] Update all marketing materials with new domain
- [ ] Set up Google Analytics with new domain
- [ ] Configure any third-party integrations with new URL
- [ ] Update social media profiles and links
- [ ] Test all external links pointing to the site
- [ ] Set up monitoring for domain and SSL certificate expiration

---

**Setup Date**: _To be filled after completion_  
**Domain Registrar**: _To be documented_  
**DNS Provider**: _To be documented_  
**SSL Provider**: Vercel (Let's Encrypt)