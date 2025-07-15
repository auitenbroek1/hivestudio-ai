# HiveStudio.ai Deployment Guide

## Quick Deployment to Vercel

### Prerequisites
- Node.js 18+ installed
- Git repository connected to Vercel
- Domain hivestudio.ai ready for DNS configuration

### Steps

1. **Prepare the build**
   ```bash
   npm run build
   ```

2. **Deploy to Vercel**
   - Connect your GitHub repository to Vercel
   - Set build command: `npm run build`
   - Set output directory: `build`
   - Deploy automatically on push to main branch

3. **Configure Custom Domain**
   - In Vercel dashboard, go to your project settings
   - Add custom domain: `hivestudio.ai`
   - Update DNS records as instructed by Vercel

### Environment Variables

Currently no environment variables are required, but you may want to add:

```bash
# For analytics
REACT_APP_GA_TRACKING_ID=your-ga-id

# For contact forms
REACT_APP_CONTACT_ENDPOINT=your-endpoint

# For VoiceFlow
REACT_APP_VOICEFLOW_PROJECT_ID=your-voiceflow-id
```

## VoiceFlow Integration

### Setup Instructions

1. **Get VoiceFlow embed code**
   - Go to your VoiceFlow project
   - Navigate to Integrations > Web Chat
   - Copy the embed script

2. **Add to public/index.html**
   ```html
   <script>
     (function(d, t) {
       var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
       v.onload = function() {
         window.voiceflow.chat.load({
           verify: { projectID: 'your-project-id' },
           url: 'https://general-runtime.voiceflow.com',
           versionID: 'production'
         });
       }
       v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
     })(document, 'script');
   </script>
   ```

3. **Style the widget**
   The widget container is already positioned in the app. You can customize its appearance with CSS.

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

For deployment issues or questions:
- **Email**: aaron@hivestudio.ai
- **Documentation**: See README.md for development details
- **Emergency**: Check Vercel status page for service issues