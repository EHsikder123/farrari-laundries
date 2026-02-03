import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { businessInfo } from '../data/mockData';
import { getAppLink } from '../utils/deviceDetection';

const serviceCategories = [
  { id: 1, name: "Free Pickup & Delivery", slug: "free-pickup-delivery", description: "Enjoy the convenience of our free pickup and delivery service. We come to your doorstep to collect and return your garments, making laundry effortless.", image: "https://i.pinimg.com/1200x/98/11/08/981108d894b3215ced599b67a1b2a496.jpg", hasPricing: false },
  { id: 2, name: "Wash & Iron", slug: "wash-iron", description: "Our wash and iron service provides thorough cleaning and professional pressing for your everyday garments. We use premium detergents and state-of-the-art equipment.", image: "https://images.unsplash.com/photo-1635274605638-d44babc08a4f?w=800&q=90", hasPricing: true },
  { id: 3, name: "Iron", slug: "iron", description: "Professional ironing and pressing service to give your clothes that crisp, polished look. Our skilled staff uses commercial-grade equipment.", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=90", hasPricing: true },
  { id: 4, name: "Dry Clean", slug: "dry-clean", description: "Expert dry cleaning for delicate fabrics and special garments. Our advanced dry cleaning process safely removes stains without water damage.", image: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=800&q=90", hasPricing: true }
];

const ServicesPage = () => {
  const location = useLocation();
  const appLink = getAppLink(businessInfo.playStoreLink, businessInfo.appStoreLink);
  const [visibleSections, setVisibleSections] = useState([]);
  const [heroVisible, setHeroVisible] = useState(false);
  const [categoriesVisible, setCategoriesVisible] = useState(false);
  const [pricingVisible, setPricingVisible] = useState(false);
  const sectionRefs = useRef([]);
  const heroRef = useRef(null);
  const categoriesRef = useRef(null);
  const pricingRef = useRef(null);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [location]);

  useEffect(() => {
    setHeroVisible(true);
  }, []);

  useEffect(() => {
    const catObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setCategoriesVisible(true);
    }, { threshold: 0.2 });
    if (categoriesRef.current) catObserver.observe(categoriesRef.current);

    const priceObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setPricingVisible(true);
    }, { threshold: 0.2 });
    if (pricingRef.current) priceObserver.observe(pricingRef.current);

    return () => {
      catObserver.disconnect();
      priceObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const observers = sectionRefs.current.map((ref, index) => {
      if (!ref) return null;
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) setVisibleSections(prev => [...new Set([...prev, index])]);
      }, { threshold: 0.2 });
      observer.observe(ref);
      return observer;
    });
    return () => observers.forEach(o => o?.disconnect());
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section ref={heroRef} className="pt-32 pb-20 bg-gradient-to-br from-red-600 via-red-700 to-red-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full" />
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/10 rounded-full" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div 
            className={`max-w-3xl mx-auto text-center text-white transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-white/90">Professional laundry and dry cleaning services for all your needs.</p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section ref={categoriesRef} className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {serviceCategories.map((s, index) => (
              <a 
                key={s.id} 
                href={`#${s.slug}`} 
                className="group"
                style={{
                  opacity: categoriesVisible ? 1 : 0,
                  transform: categoriesVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.9)',
                  transition: `all 0.6s ease-out ${index * 100}ms`
                }}
              >
                <Card className="border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-4 text-center">
                    <div className="overflow-hidden rounded-lg mb-3">
                      <img src={s.image} alt={s.name} className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-red-600">{s.name}</h3>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-20">
        <div className="container mx-auto px-4 space-y-24">
          {serviceCategories.map((s, i) => {
            const isVisible = visibleSections.includes(i);
            const isEven = i % 2 === 1;
            
            return (
              <div 
                key={s.id} 
                id={s.slug} 
                ref={el => sectionRefs.current[i] = el}
                className="scroll-mt-32 grid lg:grid-cols-2 gap-12 items-start"
              >
                {/* Image with pop-up effect */}
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'scale(1) translateY(0)' : 'scale(0.8) translateY(50px)',
                      transition: 'all 0.8s ease-out'
                    }}
                  >
                    <img src={s.image} alt={s.name} className="w-full h-80 object-cover rounded-2xl shadow-xl" />
                  </div>
                </div>
                
                {/* Text with slide-in effect */}
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <div
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateX(0)' : `translateX(${isEven ? '100px' : '-100px'})`,
                      transition: 'all 0.8s ease-out 0.2s'
                    }}
                  >
                    <span className="inline-block px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm font-medium mb-4">Service {String(i + 1).padStart(2, '0')}</span>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{s.name}</h2>
                    <p className="text-gray-600 mb-8">{s.description}</p>
                    <a href={appLink} target="_blank" rel="noopener noreferrer">
                      <Button className="bg-red-600 hover:bg-red-700 text-white gap-2 hover:scale-105 transition-transform">Order Now <ArrowRight className="w-4 h-4" /></Button>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Pricing */}
      <section ref={pricingRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div 
            className="text-center mb-12"
            style={{
              opacity: pricingVisible ? 1 : 0,
              transform: pricingVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
              transition: 'all 0.8s ease-out'
            }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Pricing</h2>
            <p className="text-gray-600">All prices are in KWD (Kuwaiti Dinar)</p>
            <div className="w-20 h-1 bg-red-600 mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Traditional", items: [
                { name: "Dishdasha (Summer)", dc: "0.750", wi: "0.600", i: "0.400" },
                { name: "Dishdasha (Winter)", dc: "0.800", wi: "0.600", i: "0.400" },
                { name: "Abaya", dc: "1.250", wi: "1.000", i: "0.650" },
                { name: "Gutrah", dc: "0.750", wi: "0.400", i: "0.250" },
                { name: "Besht", dc: "4.000", wi: "4.000", i: "2.000" }
              ]},
              { title: "Tops & Bottoms", items: [
                { name: "Shirt", dc: "0.600", wi: "0.500", i: "0.300" },
                { name: "T-shirt", dc: "0.750", wi: "0.500", i: "0.250" },
                { name: "Trouser/Pants", dc: "0.750", wi: "0.600", i: "0.300" },
                { name: "Jeans", dc: "0.750", wi: "0.600", i: "0.350" },
                { name: "Blouse", dc: "0.600", wi: "0.400", i: "0.300" }
              ]},
              { title: "Suits & Outerwear", items: [
                { name: "Two-piece Suit", dc: "2.000", wi: "1.750", i: "1.000" },
                { name: "Three-piece Suit", dc: "2.500", wi: "2.000", i: "1.250" },
                { name: "Jacket", dc: "1.750", wi: "1.500", i: "0.750" },
                { name: "Coat", dc: "4.500", wi: "3.000", i: "1.500" }
              ]},
              { title: "Dresses & Special Items", items: [
                { name: "Dress (Normal)", dc: "4.000", wi: "3.500", i: "2.000" },
                { name: "Evening Dress", dc: "10.000", wi: "9.000", i: "4.000" },
                { name: "Shoes", dc: "7.000", wi: "7.000", i: "-" },
                { name: "Bag", dc: "10.000", wi: "10.000", i: "-" }
              ]}
            ].map((table, index) => (
              <Card 
                key={table.title} 
                className="border-0 shadow-lg overflow-hidden"
                style={{
                  opacity: pricingVisible ? 1 : 0,
                  transform: pricingVisible ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.9)',
                  transition: `all 0.8s ease-out ${(index + 1) * 150}ms`
                }}
              >
                <div className="bg-red-600 px-6 py-4"><h3 className="text-xl font-bold text-white">{table.title}</h3></div>
                <CardContent className="p-0">
                  <table className="w-full text-sm">
                    <thead><tr className="bg-gray-50"><th className="p-3 text-left">Item</th><th className="p-3 text-center">Dry Clean</th><th className="p-3 text-center">Wash & Iron</th><th className="p-3 text-center">Iron</th></tr></thead>
                    <tbody>
                      {table.items.map((item, idx) => (
                        <tr key={idx} className="border-t">
                          <td className="p-3">{item.name}</td>
                          <td className="p-3 text-center">{item.dc}</td>
                          <td className="p-3 text-center">{item.wi}</td>
                          <td className="p-3 text-center">{item.i}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
