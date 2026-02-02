import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Phone, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { services, businessInfo } from '../data/mockData';

const ServicesPage = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle hash navigation
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-red-600 via-red-700 to-red-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full" />
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/10 rounded-full" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-white/90">
              Farrari Laundries uses fully automatic state-of-the-art washing and dry cleaning systems with automatic dosing units. The brand is known for its use of mild chemicals, the best spotting agents in the industry for the best treatment of fragile expensive fibers and textiles.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.slug}`}
                className="group"
              >
                <Card className="border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                  <CardContent className="p-4 text-center">
                    <div className="overflow-hidden rounded-lg mb-3">
                      <img
                        src={service.image}
                        alt={service.name}
                        className="w-full h-24 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="text-sm font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                      {service.name}
                    </h3>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.slug}
                className={`scroll-mt-32 grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-red-100 to-red-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <img
                      src={service.image}
                      alt={service.name}
                      className="relative w-full h-80 object-cover rounded-2xl shadow-xl group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <span className="inline-block px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm font-medium mb-4">
                    Service {String(index + 1).padStart(2, '0')}
                  </span>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.name}</h2>
                  <h3 className="text-lg text-red-600 font-medium mb-4">{service.shortDesc}</h3>
                  <div className="text-gray-600 space-y-4 mb-8">
                    {service.description.split('\n\n').map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                  <a href={businessInfo.appLink} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-red-600 hover:bg-red-700 text-white gap-2 hover:scale-105 transition-transform">
                      Order Now
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to experience our premium services?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today for free pickup and delivery service.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${businessInfo.phone}`}>
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 gap-2">
                <Phone className="w-5 h-5" />
                Call Us Now
              </Button>
            </a>
            <a href={businessInfo.appLink} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Download App
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
