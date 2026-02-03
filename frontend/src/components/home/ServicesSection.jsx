import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';

const services = [
  { id: 1, name: "Free Pickup & Delivery", slug: "free-pickup-delivery", desc: "Convenient doorstep service.", image: "https://i.pinimg.com/1200x/98/11/08/981108d894b3215ced599b67a1b2a496.jpg" },
  { id: 2, name: "Wash & Iron", slug: "wash-iron", desc: "Thorough cleaning and pressing.", image: "https://images.unsplash.com/photo-1635274605638-d44babc08a4f?w=800" },
  { id: 3, name: "Iron", slug: "iron", desc: "Professional ironing service.", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800" },
  { id: 4, name: "Dry Clean", slug: "dry-clean", desc: "Expert dry cleaning for delicates.", image: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=800" }
];

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.2 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div 
          className="text-center mb-12 transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)'
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">State of the art dry cleaning machines with best quality solvents.</p>
          <div 
            className="w-20 h-1 bg-red-600 mx-auto mt-4 transition-all duration-1000 delay-300"
            style={{
              transform: isVisible ? 'scaleX(1)' : 'scaleX(0)'
            }}
          />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, index) => (
            <Link 
              key={s.id} 
              to={`/services#${s.slug}`} 
              className="group"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.9)',
                transition: `all 0.8s ease-out ${index * 150}ms`
              }}
            >
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
        <div 
          className="text-center mt-8 transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '0.6s'
          }}
        >
          <Link to="/services"><Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 gap-2">View All Services <ArrowRight className="w-4 h-4" /></Button></Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
