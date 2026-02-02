import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { services } from '../../data/mockData';

const ServicesSection = () => {
  const [currentService, setCurrentService] = useState(0);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At Farrari Laundries we utilize state of the art, fully computerized dry cleaning machines complimented by the best quality dry cleaning solvents, and the most advanced detergents.
          </p>
          <div className="w-20 h-1 bg-red-600 mx-auto mt-4" />
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentService * (100 / 4)}%)` }}
            >
              {services.map((service) => (
                <div
                  key={service.id}
                  className="w-full md:w-1/2 lg:w-1/4 flex-shrink-0 px-3"
                >
                  <Link to={`/services#${service.slug}`}>
                    <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group h-full">
                      <div className="relative overflow-hidden h-48">
                        <img
                          src={service.image}
                          alt={service.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-white font-semibold text-lg">{service.name}</h3>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => setCurrentService(Math.max(0, currentService - 1))}
            disabled={currentService === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed z-10"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => setCurrentService(Math.min(services.length - 4, currentService + 1))}
            disabled={currentService >= services.length - 4}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed z-10"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="text-center mt-8">
          <Link to="/services">
            <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 gap-2">
              More About Services
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
