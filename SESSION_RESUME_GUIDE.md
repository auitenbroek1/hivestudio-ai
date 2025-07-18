# 🐝 Hive Studio AI - Session Resume Guide

**📍 IMPORTANT**: This file contains the exact prompt and context you need to resume development work on the Hive Studio AI website in a new Claude Code session.

---

## 🚀 Quick Resume Prompt

**Copy and paste this exact prompt in your new Claude Code terminal session:**

```
I'm working on the Hive Studio AI website project. Here's the current status:

**Project Location**: /Users/aaronuitenbroek/projects/hivestudio-ai/frontend/

**Current Version**: 1.1.0 (Professional Service Cards & Detailed Modals) ✅

**Live Site**: https://hivestudio.ai (fully working and deployed)

**Project Status**: 
- Complete React website with professional service cards and detailed modals
- Dark hive-themed design with hexagon patterns and honey glow effects
- Four main AI consulting services with comprehensive modal descriptions
- Service Detail Modal system with professional tone content
- Static hexagon-only logo with transparent background (no animations)
- Mobile-optimized modals with proper overflow control
- Comprehensive device detection system (DeviceContext)
- Professional ampersand formatting across all service features
- Vercel deployment working perfectly with automatic GitHub integration
- All documentation updated to v1.1.0

**Technical Stack**:
- React 19 with Create React App + CRACO
- Tailwind CSS with custom hexagon utilities  
- Framer Motion for animations with device-aware behavior
- DeviceContext for comprehensive device detection
- Deployed on Vercel with Root Directory: frontend
- Repository: auitenbroek1/hivestudio-ai

**Vercel Settings (Verified Working)**:
- Framework: Create React App
- Root Directory: frontend  
- Build Command: npm run build
- Output Directory: build
- Domains: hivestudio.ai (with optimized DNS)

**What I want to work on**: [DESCRIBE YOUR NEW TASK HERE]

Please read the SESSION_RESUME_GUIDE.md file for complete context and start helping me with the task above.
```

---

## 📂 Project Structure & Key Files

```
hivestudio-ai/
├── frontend/                 # Main React application (Root Directory for Vercel)
│   ├── src/
│   │   ├── App.js           # Main app component with all sections
│   │   ├── components/      # React components
│   │   │   ├── BrandLogo.js          # Custom SVG hexagon logo with mobile animation support
│   │   │   ├── ContactForm.js        # Mobile-optimized contact form with device detection
│   │   │   ├── AnimatedText.js       # Typewriter hero animations
│   │   │   ├── AIChatWidget.js       # Customer support chat with cross-platform bee icon
│   │   │   ├── BeeIcon.js            # Custom SVG bee icon for non-Apple devices
│   │   │   └── LearnMoreModal.js     # Company information modal
│   │   ├── contexts/        # React contexts
│   │   │   └── DeviceContext.js      # Comprehensive device detection system
│   │   ├── assets/logos/    # Logo files and brand assets
│   │   ├── App.css         # Custom hexagon styles and animations
│   │   └── index.css       # Global styles and Tailwind config
│   ├── public/             # Public HTML template and assets
│   │   ├── index.html      # Main HTML template
│   │   ├── favicon.png     # Site favicon
│   │   └── manifest.json   # PWA manifest
│   ├── package.json        # Dependencies and scripts (v1.1.0)
│   ├── vercel.json         # Vercel deployment config
│   ├── tailwind.config.js  # Tailwind with custom hive colors
│   └── craco.config.js     # Build configuration
├── CHANGELOG.md            # Complete version history
├── README.md              # Main project documentation  
└── SESSION_RESUME_GUIDE.md # This file - for resuming work
```

---

## ✅ Current Production Features (v1.1.0 - All Working)

### 🎯 Hero Section
- **Animated text**: Refined phrases - "Cut Through", "Navigate Beyond", "Rise Above" + "the AI Hype"
- **Background**: Removed white overlay, enhanced logo visibility with 150vh/150vw sizing
- **Tagline**: "Transform AI curiosity into competitive advantage with practical **implementations** that deliver measurable business results."
- **CTA**: Single "Start Your AI Journey" button (Learn More removed)

### 🛠️ Services Section  
1. **The AI Level-Up** - For teams new to practical AI
2. **The AI-First Leader** - Hands-on AI tools & automations  
3. **AI Discovery Workshop** - Strategic AI roadmap development
4. **AI Build Services** - Direct AI solution implementation
- **Service Icons**: Golden rounded backgrounds (bg-hive-gold/10) for better contrast
- **Mobile Animations**: Auto-play glow effect when cards scroll into view
- **Hover Effects**: Desktop hover animations preserved

### 👥 About Section
- Company credentials and differentiators
- 20+ years experience, hands-on implementation, measurable results

### 💬 Testimonials
- 3 client success stories with ratings and specific ROI examples

### 📞 Contact & Footer
- **Email**: sales@hivestudio.ai  
- **Location**: Des Moines, IA USA
- **Footer Tagline**: "Transforming businesses and careers through powerful and practical AI implementations and strategies"
- **Copyright**: "Built with AI-powered development"
- **Mobile Modal**: Bottom sheet design with proper viewport handling

### 🎨 Interactive Elements
- **Contact Form**: Dark theme with mobile-optimized modal, viewport-aware sizing
- **AI Chat Widget**: Cross-platform bee icon (emoji on Apple, SVG on Windows/Android)
- **Mobile Animations**: Strategic replacements for hover effects:
  - Brand logo: Hexagon rotation every 15 seconds (hexagon only)
  - Service cards: Auto-play glow when scrolled into view  
  - Chat widget: Pulse animation every 5 seconds
- **Background Logo**: Enhanced visibility with 150vh/150vw sizing, proper aspect ratio
- **Device Detection**: Comprehensive DeviceContext for OS and form factor detection

---

## 🔧 New Architecture Features (v1.1.0)

### 📱 DeviceContext System
- **Comprehensive Detection**: OS (iOS, macOS, Android, Windows), browser, form factor
- **Mobile Optimizations**: Device-aware modal sizing, animation behavior, icon rendering
- **Utility Methods**: `shouldUseNativeEmoji()`, `getModalHeight()`, `isMobileDevice`
- **Safe Area Support**: Proper iOS viewport handling with safe area insets

### 🎯 Cross-Platform Consistency
- **Bee Icon**: Native emoji (🐝) on Apple devices, custom SVG on Windows/Android
- **Animation Strategy**: Hover effects on desktop, strategic mobile alternatives
- **Modal Behavior**: Desktop centered modals, mobile bottom sheet design
- **Touch Optimization**: Larger touch targets and improved mobile interactions

### 🎨 Enhanced Visual Polish
- **Service Icons**: Golden rounded backgrounds (bg-hive-gold/10) for better contrast
- **Background Logo**: Fixed aspect ratio distortion, increased size to 150vh/150vw
- **Mobile Animations**: Periodic logo rotation, scroll-triggered service glows, chat pulse
- **iOS Support**: Safe area padding and viewport-fit=cover for modern devices

---

## 🔧 Technical Configuration (Verified Working)

### Vercel Deployment Settings ✅
```bash
Repository: auitenbroek1/hivestudio-ai
Branch: main (auto-deploy enabled)
Root Directory: frontend
Framework: Create React App
Build Command: npm run build  
Output Directory: build
Install Command: npm install
```

### Environment Variables ✅
```bash
REACT_APP_SITE_URL=https://hivestudio.ai
REACT_APP_CONTACT_EMAIL=sales@hivestudio.ai
REACT_APP_ADDRESS=Des Moines, IA USA
REACT_APP_VERSION=1.0.2
GENERATE_SOURCEMAP=false
```

### Build Process ✅
- `npm install` → installs dependencies including @craco/craco
- `npm run build` → runs `craco build` → generates optimized production build
- Output: ~105KB gzipped bundle with all assets

---

## 🎨 Brand Design System

### Colors
```css
--hive-gold: #DAA520
--honey-bright: #FFBF00  
--charcoal: #1a1a1a
--charcoal-light: #2a2a2a
```

### Design Elements
- **Hexagon patterns** throughout (buttons, cards, decorative elements)
- **Honey glow effects** on hover states
- **Custom SVG logo** with transparent background
- **Glass morphism** with honey tints
- **Gradient text** for headings

---

## 🚨 Critical Information for Development

### ⚠️ Do NOT Change These (Working Configuration):
1. **Vercel Root Directory**: Must stay `frontend`
2. **Build command**: Must be `npm run build` (uses craco)
3. **Package.json scripts**: Uses craco, not react-scripts
4. **Public folder**: Must be committed to git (not in .gitignore)

### ✅ Safe to Modify:
- Content in App.js (services, testimonials, copy)
- Styling in App.css and index.css  
- Components in src/components/
- Assets in src/assets/
- Public files (favicon, manifest, etc.)

### 🔄 Deployment Process:
1. Make changes in `/frontend/src/` directory
2. Commit and push to main branch: `git add . && git commit -m "Description" && git push origin main`
3. Vercel automatically deploys (takes 2-3 minutes)
4. Verify at https://hivestudio.ai

### 🆕 Key v1.1.0 File Changes:
- **ServiceDetailModal.js**: NEW comprehensive modal system with professional service content
- **App.js**: Added service modal state management and Learn More button integration
- **BrandLogo.js**: Removed all animations for static professional logo appearance
- **App.css**: Added hexagon bullet styling for modal lists
- **ORIGINAL_SERVICE_DESCRIPTIONS.md**: NEW file preserving original conversational content
- **package.json**: Version bumped to 1.1.0
- **STABLE_VERSION_SUMMARY.md**: NEW comprehensive version documentation

---

## 🎯 Common Development Tasks

### Adding New Content:
- **Services**: Edit `services` array in App.js line ~93
- **Testimonials**: Edit `testimonials` array in App.js line ~132
- **Hero text**: Edit motion.p element in App.js line ~250
- **Contact info**: Edit footer section in App.js line ~567

### Styling Changes:
- **Colors**: Update Tailwind config in `tailwind.config.js`
- **Animations**: Modify Framer Motion props in components
- **Custom CSS**: Add to App.css for hexagon utilities

### Adding Components:
1. Create new file in `src/components/`
2. Import in App.js
3. Follow existing patterns for animations and styling

---

## 📋 Known Working Commands

```bash
# Navigate to project
cd /Users/aaronuitenbroek/projects/hivestudio-ai/frontend/

# Install dependencies  
npm install

# Start development server
npm start

# Build for production
npm run build

# Check git status
git status

# Commit and deploy
git add . && git commit -m "Your changes" && git push origin main
```

---

## 🆘 Troubleshooting Reference

### If Deployment Fails:
1. Check Vercel dashboard for build logs
2. Verify Root Directory is set to `frontend`
3. Ensure public folder is committed to git
4. Confirm build command is `npm run build`

### If Site Changes Don't Show:
1. Wait 2-3 minutes for Vercel deployment
2. Force refresh browser (⌘⇧R on Mac)
3. Check Vercel dashboard for deployment status

### If Local Development Issues:
1. Delete node_modules: `rm -rf node_modules`
2. Reinstall: `npm install`
3. Clear cache: `npm start`

---

## 📞 Emergency Contacts & Resources

- **Live Site**: https://hivestudio.ai
- **Vercel Dashboard**: https://vercel.com (Aaron's account)
- **GitHub Repo**: https://github.com/auitenbroek1/hivestudio-ai
- **Contact Email**: sales@hivestudio.ai

---

**🎯 Remember**: This is a stable, production-ready website. All core functionality is working perfectly. Use this guide to maintain context when resuming development work in future sessions.

**📅 Last Updated**: January 18, 2025 - v1.1.0 Professional Service Cards & Detailed Modals