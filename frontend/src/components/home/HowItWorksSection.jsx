import React, { useRef, useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { businessInfo } from '../../data/mockData';
import { getAppLink } from '../../utils/deviceDetection';

const steps = [
  { id: 1, title: "Place an Order", desc: "Use our app and place your order. You can also call us directly. Our easy-to-use interface makes scheduling your laundry pickup a breeze.", image: "https://i.pinimg.com/1200x/48/37/d7/4837d723a02eb118c89a0ebedebab6c9.jpg" },
  { id: 2, title: "Pickup and Clean", desc: "We pick up your clothes conveniently at your doorstep. Our expert team treats every garment with utmost care using state-of-the-art equipment.", image: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=800&q=90" },
  { id: 3, title: "Deliver", desc: "Hassle-free delivery at your doorstep. Enjoy our premium quality service with clothes that look and feel brand new.", image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&q=90" }
];

const HowItWorksSection = () => {
  const [visibleSteps, setVisibleSteps] = useState([]);
  const stepRefs = useRef([]);
  const appLink = getAppLink(businessInfo.playStoreLink, businessInfo.appStoreLink);

  useEffect(() => {
    const observers = stepRefs.current.map((ref, index) => {
      if (!ref) return null;
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) setVisibleSteps(prev => [...new Set([...prev, index])]);
      }, { threshold: 0.3 });
      observer.observe(ref);
      return observer;
    });
    return () => observers.forEach(o => o?.disconnect());
  }, []);

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How it Works</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto" />
        </div>
        <div className="space-y-24">
          {steps.map((step, i) => {
            const isVisible = visibleSteps.includes(i);
            const isEven = i % 2 === 1;
            return (
              <div key={step.id} ref={el => stepRefs.current[i] = el} className="grid lg:grid-cols-2 gap-12 items-center">
                <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                  <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${isEven ? 'translate-x-20' : '-translate-x-20'}`}`}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">{step.id}</div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">{step.desc}</p>
                    {i === 0 && (
                      <a href={appLink} target="_blank" rel="noopener noreferrer">
                        <Button className="bg-red-600 hover:bg-red-700 text-white gap-2 hover:scale-105 transition-transform">Order Now <ArrowRight className="w-4 h-4" /></Button>
                      </a>
                    )}
                  </div>
                </div>
                <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                  <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                    <div className="relative">
                      <div className="absolute -inset-4 bg-gradient-to-r from-red-100 to-red-50 rounded-3xl" />
                      <img src={step.image} alt={step.title} className="relative w-full h-80 object-cover rounded-2xl shadow-xl" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-16">
          <a href={appLink} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white gap-2 hover:scale-105 transition-transform px-12 py-6 text-lg">Order Now <ArrowRight className="w-5 h-5" /></Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
