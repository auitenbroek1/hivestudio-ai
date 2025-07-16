# HiveStudio.ai Frontend

A modern React application for HiveStudio.ai - Transform AI curiosity into competitive advantage with practical implementations that deliver measurable business results.

## Overview

This is the official frontend website for Hive Studio AI, a Central Iowa-based AI consulting firm. Built with React and featuring:
- **Hive-themed design** with hexagon patterns, honey glow effects, and connected intelligence metaphors
- **Four comprehensive AI consulting services** from education to full implementation
- **Responsive design** optimized for all devices and modern browsers
- **Brand-consistent styling** with custom hexagon components and honey animations
- **Professional contact forms** with validation and brand styling
- **Interactive elements** including animated text, service cards, and testimonials

## Features

### Services Offered
1. **The AI Level-Up** - For teams new to practical AI (patient, educational guidance)
2. **The AI-First Leader** - Fastest path to AI confidence (hands-on tools & automations)
3. **AI Discovery Workshop** - Strategic AI roadmap development (opportunity assessment)
4. **AI Build Services** - Direct AI solution implementation (custom development & integration)

### Design Elements
- **Brand Colors**: Hive Gold (#DAA520), Honey Bright (#FFBF00), Charcoal (#1a1a1a)
- **Hexagon UI elements** and honeycomb patterns
- **Honey drip effects** and bee animations
- **Glass morphism** with honey tints
- **Gradient text** and hover effects

### Technical Features
- **Framer Motion** animations with spring physics and scroll-triggered effects
- **Tailwind CSS** with custom hexagon utilities and brand color palette
- **React Intersection Observer** for progressive loading and scroll animations
- **Responsive design** with mobile-first approach and cross-device optimization
- **Custom SVG logo** with transparent background and hover effects
- **AI chat widget** with predefined responses and typing indicators
- **Contact form** with brand styling, validation, and submission handling
- **Progressive enhancement** with graceful fallbacks

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test
```

## Project Structure

```
src/
├── components/
│   ├── BrandLogo.js          # HiveStudio logo with hexagon
│   ├── FloatingElements.js   # Animated hexagons and bees
│   ├── AnimatedText.js       # Typewriter effect for headlines
│   ├── ContactForm.js        # Lead capture form
│   ├── AIChatWidget.js       # Customer support chat
│   └── LearnMoreModal.js     # Detailed information modal
├── App.js                    # Main application component
├── App.css                   # HiveStudio custom styles
├── index.js                  # React entry point
└── index.css                 # Global styles and utilities
```

## Deployment

This project is configured for Vercel deployment:

1. **Build the project**: `npm run build`
2. **Deploy to Vercel**: Connect your GitHub repository
3. **Configure domain**: Point hivestudio.ai to your Vercel deployment

## VoiceFlow Integration

The VoiceFlow chatbot integration point is ready at:
```html
<div id="voiceflow-widget" class="fixed bottom-4 right-4 z-50">
  <!-- VoiceFlow widget will be injected here -->
</div>
```

## GoHighLevel Integration

Lead capture forms are configured to work with standard form processors. Update the `ContactForm.js` component with your GHL webhook URL.

## Customization

### Colors
Update brand colors in `tailwind.config.js`:
```javascript
colors: {
  'hive-gold': '#DAA520',
  'honey-bright': '#FFBF00',
  'charcoal': '#1a1a1a',
  // ... other colors
}
```

### Content
Update service descriptions, testimonials, and copy in `App.js` and component files.

### Animations
Customize hexagon animations and honey effects in `App.css` and `index.css`.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- **Bundle size**: ~105KB gzipped (optimized for fast loading)
- **Build optimizations**: Code splitting, image optimization, CSS minification
- **Loading performance**: Intersection Observer for lazy loading animations
- **Cross-browser compatibility**: Tested on Chrome, Firefox, Safari, Edge
- **Mobile optimization**: Touch-friendly interactions and responsive design

## Contributing

1. Clone the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

Private project for HiveStudio.ai

## Live Site

**Production URL**: https://hivestudio.ai

## Version Information

- **Current Version**: 1.0.0 (Stable)
- **Last Updated**: January 2025
- **Status**: Production Ready
- **Features Complete**: Hero section, services, testimonials, contact form, chat widget

## Contact

For questions or support:
- **Email**: sales@hivestudio.ai
- **Website**: https://hivestudio.ai
- **Location**: Des Moines, IA USA
- **LinkedIn**: https://www.linkedin.com/in/aaroni10/

---

**Hive Studio AI** - Transform AI curiosity into competitive advantage with practical implementations that deliver measurable business results. Built with AI-powered development.