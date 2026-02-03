import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { businessInfo } from '../data/mockData';
import { getAppLink } from '../utils/deviceDetection';

const ServicesPage = () => {
  const location = useLocation();
  const appLink = getAppLink(businessInfo.playStoreLink, businessInfo.appStoreLink);
  const [visibleSections, setVisibleSections] = useState([]);
  const [heroVisible, setHeroVisible] = useState(false);
  const [categoriesVisible, setCategoriesVisible] = useState(false);
  const [pricingVisible, setPricingVisible] = useState(false);
  const sectionRefs = useRef([]);
  const categoriesRef = useRef(null);
  const pricingRef = useRef(null);

  const serviceCategories = [
    { 
      id: 1, 
      name: "Free Pickup & Delivery", 
      slug: "free-pickup-delivery", 
      description: "Enjoy the ultimate convenience with our free pickup and delivery service. We come to your home or office to collect your garments and return them fresh and clean. Organized via our app, WhatsApp, or phone with multi-pickup routes and convenient time windows. Our drivers are trained to be polite, presentable, and respectful.", 
      image: "https://i.pinimg.com/1200x/98/11/08/981108d894b3215ced599b67a1b2a496.jpg", 
      hasPricing: false 
    },
    { 
      id: 2, 
      name: "Wash & Iron", 
      slug: "wash-iron", 
      description: "Our regular laundry service covers daily wear like shirts, t-shirts, trousers, jeans, pajamas, and children's clothes. Workflow includes pickup & tagging, sorting, washing with premium detergents, drying, folding/hanging, and professional packaging. Usually next-day or 48-hour turnaround. KPIs: Cleanliness, no color bleeding, fresh smell.", 
      image: "https://images.unsplash.com/photo-1635274605638-d44babc08a4f?w=800&q=90", 
      hasPricing: true 
    },
    { 
      id: 3, 
      name: "Iron", 
      slug: "iron", 
      description: "Professional ironing and pressing service for washed garments from Farrari or customer-washed clothes. Our workflow includes setting proper temperature per fabric, careful ironing, hanging/folding, and quality packaging. KPIs: No burn marks, minimal creases, proper shoulder shaping on shirts. Starching available for shirts, kandoras, and uniforms.", 
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=90", 
      hasPricing: true 
    },
    { 
      id: 4, 
      name: "Dry Clean", 
      slug: "dry-clean", 
      description: "Expert dry cleaning for suits, dresses, jackets, delicate fabrics, abayas, kandoras, and high-end clothing. Process includes garment inspection, pre-spotting, dry-cleaning with premium solvents, pressing & finishing, and hanging with cover packaging. KPIs: Shape retention, no shrinkage, no color fading, professional pressing.", 
      image: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=800&q=90", 
      hasPricing: true 
    }
  ];

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
    const catObserver = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setCategoriesVisible(true); }, 
      { threshold: 0.2 }
    );
    if (categoriesRef.current) catObserver.observe(categoriesRef.current);

    const priceObserver = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setPricingVisible(true); }, 
      { threshold: 0.2 }
    );
    if (pricingRef.current) priceObserver.observe(pricingRef.current);

    return () => {
      catObserver.disconnect();
      priceObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const observers = sectionRefs.current.map((ref, index) => {
      if (!ref) return null;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setVisibleSections(prev => [...new Set([...prev, index])]); }, 
        { threshold: 0.2 }
      );
      observer.observe(ref);
      return observer;
    });
    return () => observers.forEach(o => o && o.disconnect());
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-red-600 via-red-700 to-red-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full" />
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/10 rounded-full" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className={`max-w-3xl mx-auto text-center text-white transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-white/90">Professional laundry and dry cleaning services using state-of-the-art equipment and premium detergents.</p>
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
                className={`group transition-all duration-700 ${categoriesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
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
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-12'}`}>
                    <img src={s.image} alt={s.name} className="w-full h-80 object-cover rounded-2xl shadow-xl" />
                  </div>
                </div>
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${isEven ? 'translate-x-20' : '-translate-x-20'}`}`}>
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

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: "Stain Removal", desc: "Professional treatment for food/oil, ink, makeup, and sweat stains." },
              { title: "Carpets & Curtains", desc: "Specialist cleaning for carpets, curtains, drapes, and sofa covers." },
              { title: "Special Clothing", desc: "Expert care for abayas, kandoras, wedding dresses, and branded items." },
              { title: "Bags & Shoes", desc: "Cleaning and restoration for bags and shoes of all types." },
              { title: "Express Service", desc: "Same-day or next-day turnaround with priority handling." },
              { title: "FarrariGo Subscription", desc: "Monthly subscription plans for regular laundry users." }
            ].map((item, index) => (
              <Card key={item.title} className="border-0 shadow-md hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section ref={pricingRef} className="py-20">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 transition-all duration-1000 ${pricingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Pricing</h2>
            <p className="text-gray-600">All prices are in KWD (Kuwaiti Dinar)</p>
            <div className={`w-20 h-1 bg-red-600 mx-auto mt-4 transition-transform duration-1000 delay-300 ${pricingVisible ? 'scale-x-100' : 'scale-x-0'}`} />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className={`border-0 shadow-lg overflow-hidden transition-all duration-700 ${pricingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '150ms' }}>
              <div className="bg-red-600 px-6 py-4"><h3 className="text-xl font-bold text-white">Traditional</h3></div>
              <CardContent className="p-0">
                <table className="w-full text-sm">
                  <thead><tr className="bg-gray-50"><th className="p-3 text-left">Item</th><th className="p-3 text-center">Dry Clean</th><th className="p-3 text-center">Wash & Iron</th><th className="p-3 text-center">Iron</th></tr></thead>
                  <tbody>
                    <tr className="border-t"><td className="p-3">Dishdasha (Summer)</td><td className="p-3 text-center">0.750</td><td className="p-3 text-center">0.600</td><td className="p-3 text-center">0.400</td></tr>
                    <tr className="border-t"><td className="p-3">Dishdasha (Winter)</td><td className="p-3 text-center">0.800</td><td className="p-3 text-center">0.600</td><td className="p-3 text-center">0.400</td></tr>
                    <tr className="border-t"><td className="p-3">Abaya</td><td className="p-3 text-center">1.250</td><td className="p-3 text-center">1.000</td><td className="p-3 text-center">0.650</td></tr>
                    <tr className="border-t"><td className="p-3">Gutrah</td><td className="p-3 text-center">0.750</td><td className="p-3 text-center">0.400</td><td className="p-3 text-center">0.250</td></tr>
                    <tr className="border-t"><td className="p-3">Besht</td><td className="p-3 text-center">4.000</td><td className="p-3 text-center">4.000</td><td className="p-3 text-center">2.000</td></tr>
                  </tbody>
                </table>
              </CardContent>
            </Card>

            <Card className={`border-0 shadow-lg overflow-hidden transition-all duration-700 ${pricingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '300ms' }}>
              <div className="bg-red-600 px-6 py-4"><h3 className="text-xl font-bold text-white">Tops & Bottoms</h3></div>
              <CardContent className="p-0">
                <table className="w-full text-sm">
                  <thead><tr className="bg-gray-50"><th className="p-3 text-left">Item</th><th className="p-3 text-center">Dry Clean</th><th className="p-3 text-center">Wash & Iron</th><th className="p-3 text-center">Iron</th></tr></thead>
                  <tbody>
                    <tr className="border-t"><td className="p-3">Shirt</td><td className="p-3 text-center">0.600</td><td className="p-3 text-center">0.500</td><td className="p-3 text-center">0.300</td></tr>
                    <tr className="border-t"><td className="p-3">T-shirt</td><td className="p-3 text-center">0.750</td><td className="p-3 text-center">0.500</td><td className="p-3 text-center">0.250</td></tr>
                    <tr className="border-t"><td className="p-3">Trouser/Pants</td><td className="p-3 text-center">0.750</td><td className="p-3 text-center">0.600</td><td className="p-3 text-center">0.300</td></tr>
                    <tr className="border-t"><td className="p-3">Jeans</td><td className="p-3 text-center">0.750</td><td className="p-3 text-center">0.600</td><td className="p-3 text-center">0.350</td></tr>
                    <tr className="border-t"><td className="p-3">Blouse</td><td className="p-3 text-center">0.600</td><td className="p-3 text-center">0.400</td><td className="p-3 text-center">0.300</td></tr>
                  </tbody>
                </table>
              </CardContent>
            </Card>

            <Card className={`border-0 shadow-lg overflow-hidden transition-all duration-700 ${pricingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '450ms' }}>
              <div className="bg-red-600 px-6 py-4"><h3 className="text-xl font-bold text-white">Suits & Outerwear</h3></div>
              <CardContent className="p-0">
                <table className="w-full text-sm">
                  <thead><tr className="bg-gray-50"><th className="p-3 text-left">Item</th><th className="p-3 text-center">Dry Clean</th><th className="p-3 text-center">Wash & Iron</th><th className="p-3 text-center">Iron</th></tr></thead>
                  <tbody>
                    <tr className="border-t"><td className="p-3">Two-piece Suit</td><td className="p-3 text-center">2.000</td><td className="p-3 text-center">1.750</td><td className="p-3 text-center">1.000</td></tr>
                    <tr className="border-t"><td className="p-3">Three-piece Suit</td><td className="p-3 text-center">2.500</td><td className="p-3 text-center">2.000</td><td className="p-3 text-center">1.250</td></tr>
                    <tr className="border-t"><td className="p-3">Jacket</td><td className="p-3 text-center">1.750</td><td className="p-3 text-center">1.500</td><td className="p-3 text-center">0.750</td></tr>
                    <tr className="border-t"><td className="p-3">Coat</td><td className="p-3 text-center">4.500</td><td className="p-3 text-center">3.000</td><td className="p-3 text-center">1.500</td></tr>
                  </tbody>
                </table>
              </CardContent>
            </Card>

            <Card className={`border-0 shadow-lg overflow-hidden transition-all duration-700 ${pricingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '600ms' }}>
              <div className="bg-red-600 px-6 py-4"><h3 className="text-xl font-bold text-white">Dresses & Special Items</h3></div>
              <CardContent className="p-0">
                <table className="w-full text-sm">
                  <thead><tr className="bg-gray-50"><th className="p-3 text-left">Item</th><th className="p-3 text-center">Dry Clean</th><th className="p-3 text-center">Wash & Iron</th><th className="p-3 text-center">Iron</th></tr></thead>
                  <tbody>
                    <tr className="border-t"><td className="p-3">Dress (Normal)</td><td className="p-3 text-center">4.000</td><td className="p-3 text-center">3.500</td><td className="p-3 text-center">2.000</td></tr>
                    <tr className="border-t"><td className="p-3">Evening Dress</td><td className="p-3 text-center">10.000</td><td className="p-3 text-center">9.000</td><td className="p-3 text-center">4.000</td></tr>
                    <tr className="border-t"><td className="p-3">Shoes</td><td className="p-3 text-center">7.000</td><td className="p-3 text-center">7.000</td><td className="p-3 text-center">-</td></tr>
                    <tr className="border-t"><td className="p-3">Bag</td><td className="p-3 text-center">10.000</td><td className="p-3 text-center">10.000</td><td className="p-3 text-center">-</td></tr>
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
