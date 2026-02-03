import React, { useRef, useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { businessInfo } from '../../data/mockData';
import { getAppLink } from '../../utils/deviceDetection';

const steps = [
  { 
    id: 1, 
    title: "Place an Order", 
    desc: "Use our app and place your order. You can also call us directly. Our easy-to-use interface makes scheduling your laundry pickup a breeze. Select your items, choose your preferred service, and schedule a convenient pickup time.", 
    image: "https://i.pinimg.com/1200x/cd/6c/60/cd6c60566aac9468991d158551f95f7a.jpg",
    isPortrait: true
  },
  { 
    id: 2, 
    title: "Pickup and Clean", 
    desc: "We pick up your clothes conveniently at your doorstep. Our expert team treats every garment with utmost care using state-of-the-art equipment. Your items are cleaned, pressed, and quality-checked before packaging.", 
    image: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=1200&q=90",
    isPortrait: false
  },
  { 
    id: 3, 
    title: "Deliver", 
    desc: "Hassle-free delivery at your doorstep. Enjoy our premium quality service with clothes that look and feel brand new. We ensure timely delivery with your garments perfectly pressed and ready to wear.", 
    image: "https://i.pinimg.com/1200x/98/11/08/981108d894b3215ced599b67a1b2a496.jpg",
    isPortrait: false
  }
];

const HowItWorksSection = () => {
  const [visibleSteps, setVisibleSteps] = useState([]);
  const stepRefs = useRef([]);
  const titleRef = useRef(null);
  const [titleVisible, setTitleVisible] = useState(false);
  const appLink = getAppLink(businessInfo.playStoreLink, businessInfo.appStoreLink);

  useEffect(() => {
    const titleObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setTitleVisible(true);
    }, { threshold: 0.5 });
    if (titleRef.current) titleObserver.observe(titleRef.current);
    return () => titleObserver.disconnect();
  }, []);

  useEffect(() => {
    const observers = stepRefs.current.map((ref, index) => {
      if (!ref) return null;
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) setVisibleSteps(prev => [...new Set([...prev, index])]);
      }, { threshold: 0.2 });
      observer.observe(ref);
      return observer;
    });
    return () => observers.forEach(o => o?.disconnect());
  }, []);

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Title with pop-up animation */}
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${titleVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-10'}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How it Works</h2>
          <div className={`w-20 h-1 bg-red-600 mx-auto transition-all duration-1000 delay-300 ${titleVisible ? 'scale-x-100' : 'scale-x-0'}`} />
        </div>
        
        <div className="space-y-32">
          {steps.map((step, i) => {
            const isVisible = visibleSteps.includes(i);
            const isEven = i % 2 === 1;
            
            return (
              <div 
                key={step.id} 
                ref={el => stepRefs.current[i] = el} 
                className="min-h-[70vh] flex items-center"
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
                  {/* Text Content - Slides in from left/right */}
                  <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                    <div 
                      className="transition-all duration-1000 ease-out"
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible 
                          ? 'translateX(0)' 
                          : `translateX(${isEven ? '100px' : '-100px'})`
                      }}
                    >
                      <div className="flex items-center gap-4 mb-6">
                        <div 
                          className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg transition-all duration-700 delay-200"
                          style={{
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'scale(1)' : 'scale(0.5)'
                          }}
                        >
                          {step.id}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{step.title}</h3>
                      </div>
                      <p 
                        className="text-lg text-gray-600 mb-8 leading-relaxed transition-all duration-1000 delay-300"
                        style={{
                          opacity: isVisible ? 1 : 0,
                          transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
                        }}
                      >
                        {step.desc}
                      </p>
                      {i === 0 && (
                        <a 
                          href={appLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-block transition-all duration-700 delay-500"
                          style={{
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
                          }}
                        >
                          <Button className="bg-red-600 hover:bg-red-700 text-white gap-2 hover:scale-105 transition-transform" data-testid="how-it-works-order-btn">
                            Order Now <ArrowRight className="w-4 h-4" />
                          </Button>
                        </a>
                      )}
                    </div>
                  </div>
                  
                  {/* Image - Pops up with scale animation */}
                  <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                    <div 
                      className="transition-all duration-1000 delay-200 ease-out"
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'scale(1) translateY(0)' : 'scale(0.8) translateY(50px)'
                      }}
                    >
                      <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-red-100 to-red-50 rounded-3xl transition-all duration-700 delay-400" 
                          style={{
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'scale(1)' : 'scale(0.9)'
                          }}
                        />
                        {step.isPortrait ? (
                          /* Portrait mobile screen image for Step 1 - Taller */
                          <div className="relative flex justify-center">
                            <div className="relative w-64 md:w-72 h-[480px] md:h-[560px] bg-gray-900 rounded-[2.5rem] p-2 shadow-xl">
                              {/* Notch */}
                              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-5 bg-gray-900 rounded-full z-10" />
                              {/* Screen */}
                              <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden">
                                <img 
                                  src={step.image} 
                                  alt={step.title} 
                                  className="w-full h-full object-cover" 
                                />
                              </div>
                              {/* Home indicator */}
                              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-gray-600 rounded-full" />
                            </div>
                          </div>
                        ) : (
                          /* Landscape images for other steps */
                          <img 
                            src={step.image} 
                            alt={step.title} 
                            className="relative w-full h-80 lg:h-96 object-cover rounded-2xl shadow-xl" 
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Final Order Now Button with pop-up */}
        <div className="text-center mt-16">
          <a href={appLink} target="_blank" rel="noopener noreferrer">
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white gap-2 hover:scale-105 transition-transform px-12 py-6 text-lg"
              data-testid="how-it-works-final-order-btn"
            >
              Order Now <ArrowRight className="w-5 h-5" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
