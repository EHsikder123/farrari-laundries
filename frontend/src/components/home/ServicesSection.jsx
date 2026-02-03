import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';

const services = [
  { id: 1, name: "Free Pickup & Delivery", slug: "free-pickup-delivery", desc: "Convenient doorstep service.", image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800" },
  { id: 2, name: "Wash & Iron", slug: "wash-iron", desc: "Thorough cleaning and pressing.", image: "https://images.unsplash.com/photo-1635274605638-d44babc08a4f?w=800" },
  { id: 3, name: "Iron", slug: "iron", desc: "Professional ironing service.", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800" },
  { id: 4, name: "Dry Clean", slug: "dry-clean", desc: "Expert dry cleaning for delicates.", image: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=800" }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">State of the art dry cleaning machines with best quality solvents.</p>
          <div className="w-20 h-1 bg-red-600 mx-auto mt-4" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <Link key={s.id} to={`/services#${s.slug}`} className="group">
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                <div className="relative overflow-hidden h-48">
                  <img src={s.image} alt={s.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4"><h3 className="text-white font-bold text-lg">{s.name}</h3></div>
                </div>
                <CardContent className="p-4"><p className="text-gray-600 text-sm">{s.desc}</p></CardContent>
              </Card>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/services"><Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 gap-2">View All Services <ArrowRight className="w-4 h-4" /></Button></Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
