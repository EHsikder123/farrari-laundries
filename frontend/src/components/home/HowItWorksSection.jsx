import React from 'react';
import { Phone } from 'lucide-react';
import { Button } from '../ui/button';
import { businessInfo, howItWorks } from '../../data/mockData';

const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How it Works</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-1 bg-gradient-to-r from-red-200 via-red-400 to-red-200 -translate-y-1/2" />
          
          {howItWorks.map((step) => (
            <div key={step.id} className="relative group">
              <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 relative z-10">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {step.step}
                </div>
                <div className="overflow-hidden rounded-xl mb-6 mt-4">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Step {step.step} - {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href={businessInfo.appLink} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white gap-2 hover:scale-105 transition-transform">
              <Phone className="w-5 h-5" />
              Order Now
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
