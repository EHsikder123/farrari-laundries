import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Phone } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';

const branches = [
  { id: 1, name: "Shuwaikh Main Branch", address: "Industrial Area 3, Block D", phone: "+965 9758 8886", image: "https://images.pexels.com/photos/8774643/pexels-photo-8774643.jpeg?w=600" },
  { id: 2, name: "Kuwait City Branch", address: "Block 5, Ahmed Al Jaber Street", phone: "+965 9758 8887", image: "https://images.pexels.com/photos/8774367/pexels-photo-8774367.jpeg?w=600" },
  { id: 3, name: "Salmiya Branch", address: "Salem Al Mubarak Street, Block 10", phone: "+965 9758 8888", image: "https://images.pexels.com/photos/8774643/pexels-photo-8774643.jpeg?w=600" }
];

const BranchesPreview = () => {
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
    <section ref={sectionRef} className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div 
          className="text-center mb-12 transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)'
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Winning Locations</h2>
          <div 
            className="w-20 h-1 bg-red-600 mx-auto transition-all duration-1000 delay-300"
            style={{
              transform: isVisible ? 'scaleX(1)' : 'scaleX(0)'
            }}
          />
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {branches.map((b, index) => (
            <Link 
              key={b.id} 
              to={`/branches?branch=${b.id}`} 
              className="group"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.9)',
                transition: `all 0.8s ease-out ${index * 150}ms`
              }}
            >
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                <div className="relative overflow-hidden h-48">
                  <img src={b.image} alt={b.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <CardContent className="p-4">
                  <div className="flex items-start gap-2 mb-2">
                    <MapPin className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div><h3 className="font-semibold text-gray-900">{b.name}</h3><p className="text-sm text-gray-600">{b.address}</p></div>
                  </div>
                  <div className="flex items-center gap-2 text-red-600 font-medium"><Phone className="w-4 h-4" />{b.phone}</div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        <div 
          className="text-center mt-8 transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '0.5s'
          }}
        >
          <Link to="/branches"><Button className="bg-red-600 hover:bg-red-700 text-white gap-2 hover:scale-105 transition-transform">View More Branches <ArrowRight className="w-4 h-4" /></Button></Link>
        </div>
      </div>
    </section>
  );
};

export default BranchesPreview;
