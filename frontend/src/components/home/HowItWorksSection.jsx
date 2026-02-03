import React, { useRef, useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { businessInfo, howItWorksSteps } from '../../data/mockData';
import { getAppLink } from '../../utils/deviceDetection';

const HowItWorksSection = () => {
  const [visibleSteps, setVisibleSteps] = useState([]);
  const stepRefs = useRef([]);
  const appLink = getAppLink(businessInfo.playStoreLink, businessInfo.appStoreLink);

  useEffect(() => {
    const observers = stepRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSteps(prev => [...new Set([...prev, index])]);
          }
        },
        { threshold: 0.3 }
      );
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How it Works</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto" />
        </div>

        <div className="space-y-24">
          {howItWorksSteps.map((step, index) => {
            const isVisible = visibleSteps.includes(index);
            const isEven = index % 2 === 1;
            
            return (
              <div
                key={step.id}
                ref={el => stepRefs.current[index] = el}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                {/* Text Content */}
                <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div
                    className={`transition-all duration-1000 ${
                      isVisible
                        ? 'opacity-100 translate-x-0'
                        : `opacity-0 ${isEven ? 'translate-x-20' : '-translate-x-20'}`
                    }`}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                        {step.step}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    {index === 0 && (
                      <a href={appLink} target="_blank" rel="noopener noreferrer">
                        <Button className="bg-red-600 hover:bg-red-700 text-white gap-2 hover:scale-105 transition-transform">
                          Order Now
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </a>
                    )}
                  </div>
                </div>

                {/* Image */}
                <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div
                    className={`transition-all duration-1000 delay-300 ${
                      isVisible
                        ? 'opacity-100 scale-100'
                        : 'opacity-0 scale-90'
                    }`}
                  >
                    <div className="relative">
                      <div className="absolute -inset-4 bg-gradient-to-r from-red-100 to-red-50 rounded-3xl" />
                      <img
                        src={step.image}
                        alt={step.title}
                        className="relative w-full h-80 object-cover rounded-2xl shadow-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Final Order Now Button */}
        <div className="text-center mt-16">
          <a href={appLink} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white gap-2 hover:scale-105 transition-transform px-12 py-6 text-lg">
              Order Now
              <ArrowRight className="w-5 h-5" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
