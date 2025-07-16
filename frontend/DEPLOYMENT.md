# Hive Studio AI - Deployment Guide

## Current Deployment Status

**Live Site**: https://hivestudio.ai  
**Version**: 1.0.0 (Stable)  
**Last Deployed**: January 2025  
**Platform**: Vercel  
**Status**: ✅ Production Ready

## Quick Deployment to Vercel

### Prerequisites
- Node.js 18+ installed
- Git repository connected to Vercel (✅ Connected)
- Domain hivestudio.ai configured (✅ Active)
- DNS properly configured (✅ Verified)

### Deployment Process (Current Setup)

1. **Automatic Deployment** ✅
   ```bash
   # Any push to main branch triggers automatic deployment
   git add .
   git commit -m "Your changes"
   git push origin main
   ```

2. **Vercel Configuration** ✅
   - Repository: `auitenbroek1/hivestudio-ai` 
   - Build command: `npm run build`
   - Output directory: `build`
   - Framework: Create React App
   - Auto-deploy on main branch: Enabled

3. **Domain Configuration** ✅
   - Primary domain: `hivestudio.ai`
   - SSL certificate: Auto-managed by Vercel
   - DNS: Properly configured and verified

### Environment Variables

**Production Environment Variables**: 
```bash
# Site Configuration (from .env.production)
REACT_APP_SITE_URL=https://hivestudio.ai
REACT_APP_SITE_NAME=Hive Studio AI
REACT_APP_CONTACT_EMAIL=sales@hivestudio.ai
REACT_APP_ADDRESS=Des Moines, IA USA
REACT_APP_LINKEDIN=https://www.linkedin.com/in/aaroni10/

# SEO & Meta
REACT_APP_DESCRIPTION=Transform AI curiosity into competitive advantage with practical implementations that deliver measurable business results.

# Build Settings
GENERATE_SOURCEMAP=false
REACT_APP_ENVIRONMENT=production
REACT_APP_VERSION=1.0.0
```

**Optional Future Integrations**:
```bash
# Analytics (when ready to implement)
# REACT_APP_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX

# VoiceFlow (when ready to implement)  
# REACT_APP_VOICEFLOW_PROJECT_ID=your-voiceflow-id
```

## Current Features (Live)

### ✅ Implemented & Live
- **Hero Section**: Animated text with "Cut Through the AI Hype" messaging
- **Services Section**: Four main services with hexagon cards and hover effects
- **About Section**: Company credentials and differentiators
- **Testimonials**: Client success stories with ratings
- **Contact Form**: Brand-styled form with validation and submission handling
- **AI Chat Widget**: Custom chat interface with predefined responses
- **Footer**: Complete contact information and service links
- **Responsive Design**: Optimized for all devices
- **Brand Styling**: Consistent hexagon theme with honey glow effects

### 🔄 Future Integrations (Ready to Implement)

**VoiceFlow Integration**:
- Widget container already positioned in app
- Ready for embed code integration
- Custom styling hooks available

**GoHighLevel CRM**:
- Contact form structure ready for webhook integration
- Form validation and error handling implemented
- Lead capture optimized for conversion

## GoHighLevel Integration

### Contact Form Setup

1. **Create GHL webhook**
   - In GoHighLevel, go to Settings > Integrations
   - Create a new webhook for form submissions
   - Copy the webhook URL

2. **Update ContactForm.js**
   ```javascript
   const handleSubmit = async (e) => {
     e.preventDefault();
     
     try {
       const response = await fetch('YOUR_GHL_WEBHOOK_URL', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify(formData),
       });
       
       if (response.ok) {
         setSubmitStatus('success');
       } else {
         setSubmitStatus('error');
       }
     } catch (error) {
       setSubmitStatus('error');
     }
   };
   ```

## Performance Optimization

### Before Deployment

1. **Optimize images**
   - Use WebP format where possible
   - Compress images to appropriate sizes
   - Use responsive images for different screen sizes

2. **Code splitting**
   - Already implemented with React lazy loading
   - Consider additional splitting for large components

3. **Bundle analysis**
   ```bash
   npm install -g webpack-bundle-analyzer
   npm run build
   npx webpack-bundle-analyzer build/static/js/*.js
   ```

### After Deployment

1. **Enable compression**
   - Vercel automatically enables gzip compression
   - No additional configuration needed

2. **Set up monitoring**
   - Use Vercel Analytics for performance monitoring
   - Set up error tracking (Sentry, LogRocket, etc.)

## SEO Configuration

### Meta Tags
Already configured in `public/index.html`:
- Title and description
- Open Graph tags
- Twitter Card tags
- Theme color for mobile browsers

### Additional SEO

1. **Add sitemap.xml**
   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://hivestudio.ai/</loc>
       <lastmod>2024-01-01</lastmod>
       <changefreq>monthly</changefreq>
       <priority>1.0</priority>
     </url>
   </urlset>
   ```

2. **Add robots.txt**
   Already configured in `public/robots.txt`

## Security Considerations

1. **HTTPS Only**
   - Vercel automatically provides SSL
   - Force HTTPS redirects are enabled

2. **Content Security Policy**
   - Consider adding CSP headers for enhanced security
   - Configure in `vercel.json` if needed

3. **Form Security**
   - Add CSRF protection for forms
   - Validate all form inputs
   - Use rate limiting for contact forms

## Monitoring and Analytics

### Recommended Tools

1. **Vercel Analytics**
   - Enable in Vercel dashboard
   - Track Core Web Vitals

2. **Google Analytics**
   - Add GA4 tracking
   - Set up conversion goals

3. **Error Tracking**
   - Sentry for error monitoring
   - LogRocket for user session recordings

## Troubleshooting

### Common Issues

1. **Build failures**
   - Check Node.js version compatibility
   - Clear npm cache: `npm cache clean --force`
   - Delete node_modules and reinstall

2. **CSS not loading**
   - Verify Tailwind CSS build process
   - Check for syntax errors in CSS files

3. **Components not rendering**
   - Check console for JavaScript errors
   - Verify all imports are correct

### Debug Mode

```bash
# Run with debug information
DEBUG=* npm start

# Check bundle size
npm run build --analyze
```

## Maintenance

### Regular Updates

1. **Dependencies**
   ```bash
   npm audit
   npm update
   ```

2. **Security patches**
   ```bash
   npm audit fix
   ```

3. **Performance monitoring**
   - Check Lighthouse scores monthly
   - Monitor Core Web Vitals
   - Update content and images as needed

## Support

## Current Site Metrics

**Performance**:
- Bundle size: ~105KB gzipped
- Build time: ~30 seconds
- Deployment time: ~2 minutes
- Page load: <3 seconds

**SEO Ready**:
- Meta tags configured
- Open Graph tags
- Twitter Cards
- Sitemap ready
- Robots.txt configured

## Support & Contact

For deployment issues or questions:
- **Primary Contact**: sales@hivestudio.ai
- **Location**: Des Moines, IA USA
- **Documentation**: See README.md for development details
- **Emergency**: Check Vercel status page for service issues
- **Repository**: https://github.com/auitenbroek1/hivestudio-ai