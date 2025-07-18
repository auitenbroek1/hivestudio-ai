# 🐝 Hive Studio AI Website

**Current Version**: 1.1.0 - Professional Service Cards & Detailed Modals ✅

Transform AI curiosity into competitive advantage with practical implementations that deliver measurable business results.

## 🚀 Live Site
**Production**: [https://hivestudio.ai](https://hivestudio.ai)

## 📋 Project Overview

Hive Studio AI is a modern, responsive React website showcasing AI consulting services. The site features:

- **Typing Animation Hero**: Dynamic text animation highlighting our core value proposition
- **Service Showcase**: Four comprehensive AI consulting services with interactive cards
- **Client Testimonials**: Real success stories focusing on measurable ROI
- **Responsive Design**: Optimized for all devices and screen sizes
- **Performance Optimized**: Fast loading with smooth animations

## 🛠️ Tech Stack

- **Frontend**: React 19.0.0 with Framer Motion animations
- **Styling**: Tailwind CSS with custom hexagon designs
- **Build Tool**: Create React App with CRACO
- **Deployment**: Vercel with custom domain
- **Performance**: Optimized bundle size and smooth animations

## 🎨 Design Features

### Visual Identity
- Custom hexagon-based design system
- Golden honey color palette (#DAA520, #FFBF00)
- Charcoal dark theme with high contrast
- Transparent logo watermark background

### Interactive Elements
- Smooth hover effects with golden glow
- Responsive service card animations
- Intersection Observer triggered animations
- Mobile-optimized touch interactions

## 📁 Project Structure

```
hivestudio-ai/
├── frontend/                 # React application
│   ├── src/
│   │   ├── components/       # Reusable React components
│   │   ├── assets/          # Images, logos, and static assets
│   │   └── App.js           # Main application component
│   ├── public/              # Public assets and HTML template
│   └── build/               # Production build output
├── DEPLOYMENT.md            # Comprehensive deployment guide
├── DOMAIN_SETUP.md          # Domain configuration instructions
├── PRE_DEPLOYMENT_CHECKLIST.md  # Pre-launch verification
└── PRODUCTION_OPTIMIZATION_REPORT.md  # Performance analysis
```

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Local Development
```bash
# Clone the repository
git clone <repository-url>
cd hivestudio-ai

# Install dependencies
cd frontend
npm install

# Start development server
npm start

# Open http://localhost:3000
```

### Production Build
```bash
# Build for production
npm run build

# Test production build locally
npx serve -s build
```

## 📋 Available Scripts

In the `frontend/` directory:

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run test suite
- `npm run eject` - Eject from Create React App

## 🌐 Deployment

### Vercel (Recommended)
1. Connect repository to Vercel
2. Configure environment variables
3. Add custom domain (hivestudio.ai)
4. Deploy with automatic SSL

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

### Environment Variables
Required for production:
```
REACT_APP_SITE_URL=https://hivestudio.ai
REACT_APP_CONTACT_EMAIL=sales@hivestudio.ai
REACT_APP_ENVIRONMENT=production
```

## 🎯 Key Features

### Services Offered
1. **The AI Level-Up** - AI fundamentals for business teams
2. **The AI-First Leader** - Advanced AI implementation skills
3. **AI Discovery Workshop** - Strategic AI roadmap development
4. **AI Build Services** - Custom AI solution implementation

### Performance Optimizations
- Removed backdrop-filter for smooth animations
- Optimized bundle size (105KB gzipped JS)
- GPU-accelerated hover effects
- Responsive image loading
- Production-ready security headers

## 📞 Contact & Support

- **Website**: [https://hivestudio.ai](https://hivestudio.ai)
- **Email**: sales@hivestudio.ai
- **LinkedIn**: [Aaron Uitenbroek](https://www.linkedin.com/in/aaroni10/)
- **Location**: Des Moines, IA USA

## 📝 Content Strategy

The website content is optimized for:
- **Business Decision Makers** seeking practical AI implementation
- **Technology Leaders** looking for AI expertise
- **Organizations** wanting measurable AI transformation results

Content focuses on ROI, practical implementation, and proven business value rather than technical complexity.

## 🔒 Security

- Security headers configured via Vercel
- HTTPS enforcement
- XSS protection enabled
- Content type validation
- No sensitive data exposure

## 📊 Analytics & Monitoring

Ready for integration with:
- Google Analytics
- Performance monitoring tools
- Error tracking services
- Uptime monitoring

## 🤝 Contributing

This is a client project. For changes or updates:
1. Contact the development team
2. Follow the deployment checklist
3. Test thoroughly before production deployment

## 📄 License

© 2025 Hive Studio AI. All rights reserved.

---

**Last Updated**: January 16, 2025  
**Version**: 1.0.0  
**Status**: Production Ready ✅