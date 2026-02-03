import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Phone, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { businessInfo } from '../data/mockData';
import { getAppLink } from '../utils/deviceDetection';

const serviceCategories = [
  { id: 1, name: "Free Pickup & Delivery", slug: "free-pickup-delivery", description: "Enjoy the convenience of our free pickup and delivery service. We come to your doorstep to collect and return your garments, making laundry effortless.", image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&q=90", hasPricing: false },
  { id: 2, name: "Wash & Iron", slug: "wash-iron", description: "Our wash and iron service provides thorough cleaning and professional pressing for your everyday garments. We use premium detergents and state-of-the-art equipment.", image: "https://images.unsplash.com/photo-1635274605638-d44babc08a4f?w=800&q=90", hasPricing: true },
  { id: 3, name: "Iron", slug: "iron", description: "Professional ironing and pressing service to give your clothes that crisp, polished look. Our skilled staff uses commercial-grade equipment.", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=90", hasPricing: true },
  { id: 4, name: "Dry Clean", slug: "dry-clean", description: "Expert dry cleaning for delicate fabrics and special garments. Our advanced dry cleaning process safely removes stains without water damage.", image: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=800&q=90", hasPricing: true }
];

const ServicesPage = () => {
  const location = useLocation();
  const appLink = getAppLink(businessInfo.playStoreLink, businessInfo.appStoreLink);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [location]);

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
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-white/90">Professional laundry and dry cleaning services for all your needs.</p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {serviceCategories.map((s) => (
              <a key={s.id} href={`#${s.slug}`} className="group">
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
          {serviceCategories.map((s, i) => (
            <div key={s.id} id={s.slug} className="scroll-mt-32 grid lg:grid-cols-2 gap-12 items-start">
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <img src={s.image} alt={s.name} className="w-full h-80 object-cover rounded-2xl shadow-xl" />
              </div>
              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <span className="inline-block px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm font-medium mb-4">Service {String(i + 1).padStart(2, '0')}</span>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{s.name}</h2>
                <p className="text-gray-600 mb-8">{s.description}</p>
                <a href={appLink} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-red-600 hover:bg-red-700 text-white gap-2">Order Now <ArrowRight className="w-4 h-4" /></Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Pricing</h2>
            <p className="text-gray-600">All prices are in KWD (Kuwaiti Dinar)</p>
            <div className="w-20 h-1 bg-red-600 mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
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

            <Card className="border-0 shadow-lg">
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

            <Card className="border-0 shadow-lg">
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

            <Card className="border-0 shadow-lg">
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

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to experience our premium services?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Contact us today for free pickup and delivery service.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${businessInfo.phone}`}>
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 gap-2"><Phone className="w-5 h-5" />Call Us Now</Button>
            </a>
            <a href={appLink} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">Download App</Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
