import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Gem, Sparkles, Briefcase, Clock, Award, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { aboutData } from '../../data/mockData';

const iconMap = {
  star: Star,
  gem: Gem,
  sparkles: Sparkles,
  briefcase: Briefcase,
  clock: Clock,
  award: Award,
};

const TrustSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-red-100 rounded-full" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-red-100 rounded-full" />
            <img
              src="https://images.pexels.com/photos/8774643/pexels-photo-8774643.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Our Facility"
              className="relative rounded-2xl shadow-2xl w-full h-[400px] object-cover hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {aboutData.title}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {aboutData.description}
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {aboutData.values.map((value) => {
                const IconComponent = iconMap[value.icon] || Star;
                return (
                  <div
                    key={value.id}
                    className="bg-red-50 rounded-xl p-4 text-center hover:bg-red-100 transition-colors duration-300 hover:scale-105 transform"
                  >
                    <IconComponent className="w-8 h-8 text-red-600 mx-auto mb-2" />
                    <span className="text-sm font-medium text-gray-800">{value.title}</span>
                  </div>
                );
              })}
            </div>

            <Link to="/about">
              <Button className="bg-red-600 hover:bg-red-700 text-white gap-2 hover:scale-105 transition-transform">
                More About Us
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
