import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useDevice } from './contexts/DeviceContext';
import AnimatedText from './components/AnimatedText';
import ContactForm from './components/ContactForm';
import AIChatWidget from './components/AIChatWidget';
import BrandLogo from './components/BrandLogo';
import LearnMoreModal from './components/LearnMoreModal';
import ServiceDetailModal from './components/ServiceDetailModal';
import FounderSection from './components/FounderSection';
import LogoCarousel from './components/LogoCarousel';
import logoTransparent from './assets/logos/HiveStudio-logoTransparent.png';
import './App.css';

const App = () => {
  const device = useDevice();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeService, setActiveService] = useState(null);
  const [hoveredService, setHoveredService] = useState(null);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [isLearnMoreOpen, setIsLearnMoreOpen] = useState(false);
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  // Service modal handlers
  const openServiceModal = (service) => {
    setSelectedService(service);
    setIsServiceModalOpen(true);
  };

  const closeServiceModal = () => {
    setIsServiceModalOpen(false);
    setSelectedService(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
      
      // Calculate scroll progress with more stable calculation
      const totalHeight = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1 // Prevent division by zero
      );
      const currentScroll = Math.min(window.scrollY, totalHeight);
      const progress = Math.min((currentScroll / totalHeight) * 100, 100);
      setScrollProgress(Math.round(progress * 100) / 100); // Round to prevent micro-fluctuations
      
      // Handle mobile service activation based on scroll position
      if (isMobile) {
        const servicesSection = document.getElementById('services');
        if (servicesSection) {
          const serviceCards = servicesSection.querySelectorAll('[data-service-id]');
          let activeServiceId = null;
          
          serviceCards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const cardCenter = rect.top + rect.height / 2;
            const viewportCenter = window.innerHeight / 2;
            
            // If card center is near viewport center, activate it
            if (Math.abs(cardCenter - viewportCenter) < rect.height / 2) {
              activeServiceId = parseInt(card.getAttribute('data-service-id'));
            }
          });
          
          if (activeServiceId !== activeService) {
            setActiveService(activeServiceId);
          }
        }
      }
    };
    
    // Throttle scroll events to prevent excessive updates
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, [activeService, isMobile]);

  // Device detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);


  // Intersection observer hooks for animations
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [aboutRef, aboutInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [testimonialsRef, testimonialsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  // Service card individual intersection observers
  const [service1Ref, service1InView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [service2Ref, service2InView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [service3Ref, service3InView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [service4Ref, service4InView] = useInView({ threshold: 0.3, triggerOnce: true });

  const services = [
    {
      id: 1,
      title: "AI Level-Up",
      subtitle: "For teams new to practical AI",
      description: "Patient, educational guidance through practical AI fundamentals, frameworks, and tools that cut through the hype and focus on real business value.",
      features: ["AI fundamentals for business", "Practical use cases", "Think and use AI like a pro", "Achieve measurable outcomes"],
      icon: "🎓",
      color: "from-hive-gold to-honey-bright"
    },
    {
      id: 2,
      title: "AI Power User",
      subtitle: "Fastest path to AI confidence",
      description: "Take your AI skills and abilities to the next level, creating a lasting competitive advantage for your business or career.",
      features: ["Hands-on AI implementations", "AI agents & automations", "Advanced AI workflows & frameworks", "New tools & tool-chaining"],
      icon: "🛠️",
      color: "from-honey-bright to-hive-gold-dark"
    },
    {
      id: 3,
      title: "AI Discovery Workshop",
      subtitle: "Strategic AI roadmap development",
      description: "Identify high-value AI opportunities specific to your business through structured discovery sessions.",
      features: ["AI opportunity assessment", "Custom solution planning", "Implementation roadmap", "Readiness audit & resource planning"],
      icon: "🔍",
      color: "from-hive-gold-dark to-charcoal-light"
    },
    {
      id: 4,
      title: "AI Build Services",
      subtitle: "Direct AI solution implementation",
      description: "Custom AI solutions, advanced agent automation, and full implementation of high-value AI projects that deliver value from day one.",
      features: ["Custom AI development", "End-to-end build & integration services", "Performance optimization", "Ongoing refinement & support"],
      icon: "⚡",
      color: "from-charcoal-light to-hive-gold"
    }
  ];

  const testimonials = [
    {
      name: "S. Johnson",
      title: "VP, Investments",
      content: "Hive Studio transformed our understanding of AI from curiosity to competitive advantage. We're now saving 15+ hours weekly on routine tasks.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Mike T.",
      title: "Operations Director, AgTech", 
      content: "Not only did we get concrete deliverables that we are using to get real results, we now have a new mindset and perspective that allows us to see AI and automation opportunities around us every day.",
      rating: 5,
      avatar: "MT"
    },
    {
      name: "Lisa R.",
      title: "Founder, Central Iowa SMB",
      content: "Aaron's practical approach to AI implementation exceeded our expectations. We're seeing immediate ROI and excited about our new capabilities.",
      rating: 5,
      avatar: "LR"
    }
  ];

  return (
    <div className="min-h-screen bg-white relative">
      {/* Fixed Background Logo */}
      <div className="fixed inset-0 pointer-events-none flex items-center justify-center" style={{ zIndex: 1 }}>
        <img 
          src={logoTransparent}
          alt=""
          className="w-auto h-auto"
          style={{
            maxHeight: '150vh',
            maxWidth: '150vw',
            opacity: 0.15,
            objectFit: 'contain'
          }}
        />
      </div>
      
      {/* Main Content Wrapper */}
      <div className="relative" style={{ zIndex: 10, backgroundColor: 'transparent' }}>
        {/* Progress Bar with Honey Drip Effect */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-hive-gold to-honey-bright z-50 origin-left honey-drip"
        style={{ 
          transform: `scaleX(${Math.min(scrollProgress / 100, 1)})`,
          willChange: 'transform'
        }}
      />

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-40 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-hexagon' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div 
              whileHover={!device.isMobileDevice ? { scale: 1.05 } : {}}
            >
              <a 
                href="/" 
                className="cursor-pointer"
                onClick={() => window.location.reload()}
              >
                <BrandLogo 
                  variant="horizontal" 
                  size="large" 
                  style={{ maxHeight: '120px' }}
                />
              </a>
            </motion.div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-charcoal hover:text-hive-gold transition-colors">Services</a>
              <a href="#about" className="text-charcoal hover:text-hive-gold transition-colors">About</a>
              <a href="#testimonials" className="text-charcoal hover:text-hive-gold transition-colors">Testimonials</a>
              <motion.button
                onClick={() => setIsContactFormOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hexagon-button"
              >
                Get Started
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-16 pb-8"
      >
        <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-7xl font-bold text-charcoal leading-tight"
              >
                <AnimatedText 
                  texts={["Cut Through", "Navigate Beyond", "Rise Above"]}
                  staticEnd="the AI Hype"
                  className="block"
                />
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl sm:text-2xl text-charcoal-light max-w-4xl mx-auto leading-relaxed"
              >
                Transform AI curiosity into competitive advantage with practical implementations that deliver measurable business results.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center justify-center"
            >
              <motion.button
                onClick={() => setIsContactFormOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hexagon-button text-lg px-10 py-4 honey-glow"
              >
                Start Your AI Journey
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={servicesRef}
            initial={{ opacity: 0, y: 50 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-6">
              Our AI Consulting Services
            </h2>
            <p className="text-lg text-charcoal-light max-w-3xl mx-auto">
              From education to implementation, we guide your AI transformation with practical expertise and proven methodologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const serviceRefs = [service1Ref, service2Ref, service3Ref, service4Ref];
              const serviceInViews = [service1InView, service2InView, service3InView, service4InView];
              const currentRef = serviceRefs[index];
              const currentInView = serviceInViews[index];
              
              return (
                <motion.div
                  key={service.id}
                  ref={currentRef}
                  data-service-id={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={
                    device.isMobileDevice && currentInView 
                      ? {
                          opacity: 1,
                          y: 0,
                          scale: [1, 1.05, 1],
                          boxShadow: [
                            "0 0 20px rgba(218, 165, 32, 0.2)",
                            "0 0 30px rgba(218, 165, 32, 0.4)",
                            "0 0 20px rgba(218, 165, 32, 0.2)"
                          ]
                        }
                      : servicesInView 
                        ? { opacity: 1, y: 0 }
                        : {}
                  }
                  transition={
                    device.isMobileDevice && currentInView 
                      ? {
                          duration: 1.5,
                          delay: 0.5,
                          ease: "easeInOut"
                        }
                      : { 
                          duration: 0.8, 
                          delay: index * 0.1,
                          scale: { type: "spring", stiffness: 400, damping: 10 }
                        }
                  }
                  whileHover={!device.isMobileDevice ? { scale: 1.05 } : {}}
                  onHoverStart={() => setHoveredService(service.id)}
                  onHoverEnd={() => setHoveredService(null)}
                  className="service-card-hexagon rounded-2xl cursor-pointer group"
                >
                <div className="text-left space-y-4 py-2">
                  <div className="mb-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-hive-gold/30 backdrop-blur-sm rounded-lg text-4xl">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm text-hive-gold font-medium">
                    {service.subtitle}
                  </p>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="text-xs text-gray-400 space-y-1 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-hive-gold mr-2 flex-shrink-0" style={{clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'}}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Learn More Button */}
                  <div className="flex justify-center mt-auto">
                    <motion.button
                      onClick={() => openServiceModal(service)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-xs px-4 py-2 bg-hive-gold/20 hover:bg-hive-gold/30 text-hive-gold border border-hive-gold/30 rounded-lg transition-colors"
                    >
                      Learn More
                    </motion.button>
                  </div>
                </div>
              </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-charcoal/95 to-charcoal-light/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            ref={aboutRef}
            initial={{ opacity: 0, y: 50 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              <span className="text-white">Why Choose</span> <span className="gradient-text">Hive Studio?</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We bridge the gap between AI potential and business reality. Our approach combines deep technical expertise with practical business acumen.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center space-y-4"
              >
                <div className="text-4xl">🏗️</div>
                <h3 className="text-xl font-semibold text-hive-gold">20+ Years Experience</h3>
                <p className="text-gray-400">
                  Tech industry and business building leadership experience
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-center space-y-4"
              >
                <div className="text-4xl">🤝</div>
                <h3 className="text-xl font-semibold text-hive-gold">Hands-on Implementation</h3>
                <p className="text-gray-400">
                  Direct implementation with real deliverables to Fortune 500 clients
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-center space-y-4"
              >
                <div className="text-4xl">📊</div>
                <h3 className="text-xl font-semibold text-hive-gold">Measurable Results</h3>
                <p className="text-gray-400">
                  ROI-focused approach with measurable outcomes and proven methodologies
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <FounderSection />

      {/* Logo Carousel */}
      <LogoCarousel />

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={testimonialsRef}
            initial={{ opacity: 0, y: 50 }}
            animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-charcoal">Client</span> <span className="gradient-text">Success Stories</span>
            </h2>
            <p className="text-lg text-charcoal-light max-w-3xl mx-auto">
              Measurable results that exceed expectations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="testimonial-hexagon text-center space-y-4"
              >
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-hive-gold to-honey-bright rounded-full flex items-center justify-center text-charcoal font-bold text-lg">
                    {testimonial.avatar}
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-white italic">"{testimonial.content}"</p>
                  <h4 className="font-semibold text-hive-gold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.title}</p>
                </div>
                <div className="flex justify-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-honey-bright">⭐</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        ref={ctaRef}
        className="py-20 text-white relative overflow-hidden"
        style={{ background: 'linear-gradient(to right, rgba(26,26,26,0.95), rgba(42,42,42,0.95))' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 z-10">
          <motion.div 
            className="mb-12 flex items-center justify-center"
          >
            <motion.img
              src={logoTransparent}
              alt="Hive Studio AI Logo"
              className="h-80 w-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ 
                scale: 1.1,
                filter: "drop-shadow(0 0 30px rgba(218, 165, 32, 0.8)) drop-shadow(0 0 60px rgba(255, 191, 0, 0.6))"
              }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              style={{
                filter: "drop-shadow(0 0 20px rgba(218, 165, 32, 0.3))"
              }}
            />
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 gradient-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Business with AI?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 text-gray-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Discover how AI can drive measurable results for your organization.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={() => setIsContactFormOpen(true)}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(218, 165, 32, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="hexagon-button text-lg px-10 py-4 honey-glow"
            >
              Start Your AI Journey
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-charcoal text-white py-12 relative overflow-hidden">
        {/* Honeycomb Background Pattern */}
        <div className="absolute inset-0 opacity-10 overflow-hidden">
          <div className="absolute inset-0" style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='52' viewBox='0 0 60 52' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23FFD700' stroke-width='1' opacity='1'%3E%3Cpath d='M30 0 L45 8.66 L45 26 L30 34.64 L15 26 L15 8.66 Z'/%3E%3Cpath d='M0 17.32 L15 26 L15 43.3 L0 52 L-15 43.3 L-15 26 Z'/%3E%3Cpath d='M60 17.32 L75 26 L75 43.3 L60 52 L45 43.3 L45 26 Z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 52px',
            backgroundRepeat: 'repeat'
          }}>
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 gradient-text">HIVE STUDIO</h3>
              <p className="text-gray-300 mb-4">
                Transforming businesses and careers through powerful and practical AI implementations and strategies.
              </p>
              <div className="flex space-x-4">
                <motion.a
                  href="https://www.linkedin.com/in/aaroni10/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="text-hive-gold hover:text-honey-bright transition-colors"
                >
                  LinkedIn
                </motion.a>
                <motion.a
                  href="mailto:sales@hivestudio.ai"
                  whileHover={{ scale: 1.1 }}
                  className="text-hive-gold hover:text-honey-bright transition-colors"
                >
                  Email
                </motion.a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-hive-gold">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <button 
                    onClick={() => openServiceModal(services.find(s => s.id === 1))}
                    className="hover:text-hive-gold transition-colors cursor-pointer text-left"
                  >
                    AI Level-Up
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => openServiceModal(services.find(s => s.id === 2))}
                    className="hover:text-hive-gold transition-colors cursor-pointer text-left"
                  >
                    AI Power User
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => openServiceModal(services.find(s => s.id === 3))}
                    className="hover:text-hive-gold transition-colors cursor-pointer text-left"
                  >
                    AI Discovery Workshop
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => openServiceModal(services.find(s => s.id === 4))}
                    className="hover:text-hive-gold transition-colors cursor-pointer text-left"
                  >
                    AI Build Services
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-hive-gold">Contact</h4>
              <p className="text-gray-300 mb-2">sales@hivestudio.ai</p>
              <p className="text-gray-300 mb-2">Des Moines, IA USA</p>
              <p className="text-gray-300">https://hivestudio.ai</p>
            </div>
          </div>
          <div className="border-t border-hive-gold/30 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2025 Hive Studio AI. All rights reserved. Built with 100% AI-powered development.</p>
          </div>
        </div>
      </footer>

      {/* VoiceFlow Chatbot Container */}
      <div id="voiceflow-widget" className="fixed bottom-4 right-4 z-50">
        {/* VoiceFlow widget will be injected here */}
      </div>

      {/* Contact Form Modal */}
      <AnimatePresence>
        {isContactFormOpen && (
          <ContactForm onClose={() => setIsContactFormOpen(false)} />
        )}
      </AnimatePresence>

      {/* Learn More Modal */}
      <AnimatePresence>
        {isLearnMoreOpen && (
          <LearnMoreModal onClose={() => setIsLearnMoreOpen(false)} />
        )}
      </AnimatePresence>
      
      {/* Service Detail Modal */}
      <ServiceDetailModal 
        isOpen={isServiceModalOpen}
        onClose={closeServiceModal}
        service={selectedService}
      />

      {/* AI Chat Widget */}
      <AIChatWidget />
      </div>
    </div>
  );
};

export default App;