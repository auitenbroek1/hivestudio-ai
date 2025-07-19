import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

// Import all carousel logos
const logos = [
  { src: require('../assets/logos/carousel-images/1SandP.png'), alt: 'S&P Global' },
  { src: require('../assets/logos/carousel-images/1accenture.png'), alt: 'Accenture' },
  { src: require('../assets/logos/carousel-images/1edwardjones.png'), alt: 'Edward Jones' },
  { src: require('../assets/logos/carousel-images/1johndeere.png'), alt: 'John Deere' },
  { src: require('../assets/logos/carousel-images/1tda.png'), alt: 'TD Ameritrade' },
  { src: require('../assets/logos/carousel-images/1mellon.png'), alt: 'BNY Mellon' },
  { src: require('../assets/logos/carousel-images/1merrill.png'), alt: 'Merrill Lynch' },
  { src: require('../assets/logos/carousel-images/1morgan.png'), alt: 'Morgan Stanley' },
  { src: require('../assets/logos/carousel-images/1ubs.png'), alt: 'UBS' },
  { src: require('../assets/logos/carousel-images/1rbc.png'), alt: 'RBC' },
  { src: require('../assets/logos/carousel-images/1corteva.png'), alt: 'Corteva' },
  { src: require('../assets/logos/carousel-images/1vermeer.png'), alt: 'Vermeer' },
  { src: require('../assets/logos/carousel-images/1workiva.png'), alt: 'Workiva' },
  { src: require('../assets/logos/carousel-images/1pmi.png'), alt: 'PMI' },
  { src: require('../assets/logos/carousel-images/1wfa.png'), alt: 'Wells Fargo' },
  { src: require('../assets/logos/carousel-images/1rj.png'), alt: 'Raymond James' },
  { src: require('../assets/logos/carousel-images/1tr.png'), alt: 'Thomson Reuters' },
  { src: require('../assets/logos/carousel-images/1cs.png'), alt: 'Credit Suisse' },
  { src: require('../assets/logos/carousel-images/1cfra.png'), alt: 'CFRA' },
  { src: require('../assets/logos/carousel-images/1acpm.png'), alt: 'ACPM' },
  { src: require('../assets/logos/carousel-images/1opp.png'), alt: 'OPP' },
  { src: require('../assets/logos/carousel-images/1pillar.png'), alt: 'Pillar' }
];

const LogoCarousel = () => {
  return (
    <div className="relative bg-gray-50 py-16 overflow-hidden">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto px-6 text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Industry <span className="text-hive-gold">Leaders</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experienced with Fortune 500 companies across multiple industries
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-hive-gold to-yellow-400 mx-auto mt-6"></div>
        </motion.div>
      </div>

      {/* First Carousel - Left to Right */}
      <div className="mb-8">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={40}
          slidesPerView="auto"
          loop={true}
          loopedSlides={22}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            reverseDirection: false,
          }}
          allowTouchMove={false}
          centeredSlides={false}
          freeMode={true}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 35,
            },
            1280: {
              slidesPerView: 6,
              spaceBetween: 40,
            },
          }}
          className="logo-carousel-swiper"
        >
          {/* Render all logos multiple times for true infinite loop */}
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <SwiperSlide key={`row1-${index}`} className="!w-auto">
              <motion.div
                className="flex-shrink-0 w-32 h-20 flex items-center justify-center bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-4 cursor-pointer"
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  loading="lazy"
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Second Carousel - Right to Left */}
      <div>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={40}
          slidesPerView="auto"
          loop={true}
          loopedSlides={22}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            reverseDirection: true,
          }}
          allowTouchMove={false}
          centeredSlides={false}
          freeMode={true}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 35,
            },
            1280: {
              slidesPerView: 6,
              spaceBetween: 40,
            },
          }}
          className="logo-carousel-swiper"
        >
          {/* Render all logos multiple times for true infinite loop */}
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <SwiperSlide key={`row2-${index}`} className="!w-auto">
              <motion.div
                className="flex-shrink-0 w-32 h-20 flex items-center justify-center bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-4 cursor-pointer"
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  loading="lazy"
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-hive-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-400/5 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default LogoCarousel;