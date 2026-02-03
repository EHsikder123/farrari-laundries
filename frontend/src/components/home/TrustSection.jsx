import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

const TrustSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.2 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image with pop-up effect */}
          <div className="relative">
            <div 
              className="absolute -top-4 -left-4 w-24 h-24 bg-red-100 rounded-full transition-all duration-1000"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1)' : 'scale(0.5)'
              }}
            />
            <div 
              className="absolute -bottom-4 -right-4 w-32 h-32 bg-red-100 rounded-full transition-all duration-1000 delay-200"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1)' : 'scale(0.5)'
              }}
            />
            <div
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1) translateY(0)' : 'scale(0.8) translateY(50px)',
                transition: 'all 1s ease-out 0.3s'
              }}
            >
              <img
                src="https://images.pexels.com/photos/8774643/pexels-photo-8774643.jpeg?auto=compress&w=800"
                alt="Our Facility"
                className="relative rounded-2xl shadow-2xl w-full h-[400px] object-cover hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
          
          {/* Text with slide-in effect */}
          <div>
            <h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 transition-all duration-1000"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(100px)'
              }}
            >
              Trust the Expert
            </h2>
            <p 
              className="text-lg text-gray-600 mb-8 transition-all duration-1000"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(100px)',
                transitionDelay: '0.2s'
              }}
            >
              Farrari Laundries aim has always been to provide 5 star premium dry cleaning and laundry services to expat and local populations of Kuwait.
            </p>
            
            <div className="grid grid-cols-3 gap-4 mb-8">
              {['Top Quality', 'Cleanliness', 'Convenience'].map((label, index) => (
                <div 
                  key={label}
                  className="bg-red-50 rounded-xl p-4 text-center hover:bg-red-100 transition-all"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.8)',
                    transition: `all 0.6s ease-out ${0.4 + index * 0.1}s`
                  }}
                >
                  <Star className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <span className="text-sm font-medium text-gray-800">{label}</span>
                </div>
              ))}
            </div>

            <div
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.6s ease-out 0.7s'
              }}
            >
              <Link to="/about">
                <Button className="bg-red-600 hover:bg-red-700 text-white gap-2 hover:scale-105 transition-transform">
                  More About Us
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
