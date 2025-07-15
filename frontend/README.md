# HiveStudio.ai Frontend

A modern React application for HiveStudio.ai - Connected AI Implementation that actually works.

## Overview

This project is a complete frontend website for HiveStudio.ai, built with React and featuring:
- **Hive-themed design** with hexagon patterns, honey effects, and bee metaphors
- **Connected AI consultancy focus** with four main service offerings
- **Responsive design** optimized for all devices
- **VoiceFlow chatbot integration** ready
- **Lead capture forms** for GoHighLevel CRM
- **Hexagon animations** and honeycomb patterns throughout

## Features

### Services Offered
1. **Connected AI Education** - For teams new to collaborative intelligence
2. **Collaborative Intelligence Training** - Fastest path to connected AI confidence
3. **Hive Intelligence Workshop** - Strategic connected AI roadmap development
4. **Custom Hive Solutions** - Direct connected AI implementation

### Design Elements
- **Brand Colors**: Hive Gold (#DAA520), Honey Bright (#FFBF00), Charcoal (#1a1a1a)
- **Hexagon UI elements** and honeycomb patterns
- **Honey drip effects** and bee animations
- **Glass morphism** with honey tints
- **Gradient text** and hover effects

### Technical Features
- **Framer Motion** animations
- **Tailwind CSS** with custom hexagon utilities
- **React Intersection Observer** for scroll animations
- **Responsive design** with mobile-first approach
- **VoiceFlow widget** integration point
- **AI chat widget** for customer support

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

- **Bundle size**: ~105KB gzipped
- **Lighthouse score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Loading time**: < 3 seconds on 3G networks

## Contributing

1. Clone the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

Private project for HiveStudio.ai

## Contact

For questions or support:
- **Email**: aaron@hivestudio.ai
- **Website**: https://hivestudio.ai
- **LinkedIn**: https://www.linkedin.com/in/aaroni10/

---

**HiveStudio.ai** - Where collaborative intelligence meets business reality. Connected AI implementation for measurable results.