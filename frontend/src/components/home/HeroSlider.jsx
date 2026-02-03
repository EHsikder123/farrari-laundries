import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import { businessInfo } from '../../data/mockData';
import { getAppLink } from '../../utils/deviceDetection';

const heroSlides = [
  { id: 1, image: "https://images.unsplash.com/photo-1635274605638-d44babc08a4f?w=1920&q=90", title: "Premium Laundry Services", subtitle: "Experience the finest dry cleaning in Kuwait" },
  { id: 2, image: "https://images.unsplash.com/photo-1549037173-e3b717902c57?w=1920&q=90", title: "Expert Dry Cleaning", subtitle: "Your clothes deserve the best care" },
  { id: 3, image: "https://images.pexels.com/photos/8774643/pexels-photo-8774643.jpeg?w=1920", title: "State of the Art Facility", subtitle: "Modern equipment for superior results" },
  { id: 4, image: "https://images.pexels.com/photos/8774367/pexels-photo-8774367.jpeg?w=1920", title: "Professional Team", subtitle: "Dedicated experts caring for your garments" }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const appLink = getAppLink(businessInfo.playStoreLink, businessInfo.appStoreLink);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = useCallback(() => setCurrentSlide((prev) => (prev + 1) % 4), []);
  const prevSlide = useCallback(() => setCurrentSlide((prev) => (prev - 1 + 4) % 4), []);

  return (
    <section className="relative h-[80vh] min-h-[600px] overflow-hidden pt-20">
      {heroSlides.map((slide, index) => (
        <div key={slide.id} className={`absolute inset-0 transition-all duration-1000 ${index === currentSlide ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0'}`}>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10" />
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container mx-auto px-4">
              <div className={`max-w-2xl transition-all duration-1000 delay-300 ${index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{slide.title}</h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8 pr-12 md:pr-0">{slide.subtitle}</p>
                <div className="flex flex-wrap gap-4">
                  <a href={appLink} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-6 hover:scale-105 transition-transform">Order Now</Button>
                  </a>
                  <Link to="/services">
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-6">Our Services</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/40 transition-all"><ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" /></button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/40 transition-all"><ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" /></button>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {[0, 1, 2, 3].map((i) => (
          <button key={i} onClick={() => setCurrentSlide(i)} className={`w-3 h-3 rounded-full transition-all duration-300 ${i === currentSlide ? 'bg-red-600 w-8' : 'bg-white/50 hover:bg-white/80'}`} />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
