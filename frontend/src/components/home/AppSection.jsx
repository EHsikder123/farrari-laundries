import React, { useState, useEffect, useRef } from 'react';
import { Gift, Percent, CreditCard, Award } from 'lucide-react';
import { businessInfo, appBenefitImages } from '../../data/mockData';

const AppSection = () => {
  const [selectedBenefit, setSelectedBenefit] = useState('gift');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.2 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const benefits = [
    { id: 'gift', title: 'Gift', desc: 'Instant gift for your family and friends from our app.', Icon: Gift },
    { id: 'promos', title: 'Promos & Discounts', desc: 'Find exclusive deals and discounts in our app.', Icon: Percent },
    { id: 'cashless', title: 'Cashless Payment', desc: 'Pay via credit/debit card through our app.', Icon: CreditCard },
    { id: 'rewards', title: 'Rewards', desc: 'Get rewarded for every friend you refer.', Icon: Award }
  ];

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-red-600 via-red-700 to-red-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full" />
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/10 rounded-full" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Just A Click Away</h2>
              <p className="text-xl text-white/90 mb-8">Our apps got a better and convenient way of getting your laundry and dry cleaning with our 5-star services.</p>
              <div className="flex flex-wrap gap-4">
                <a href={businessInfo.playStoreLink} target="_blank" rel="noopener noreferrer">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-12 hover:scale-105 transition-transform" />
                </a>
                <a href={businessInfo.appStoreLink} target="_blank" rel="noopener noreferrer">
                  <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="h-12 hover:scale-105 transition-transform" />
                </a>
              </div>
              <div className="grid grid-cols-3 gap-8 mt-12">
                <div className="text-center"><div className="text-3xl md:text-4xl font-bold">9,984+</div><div className="text-white/80">Users</div></div>
                <div className="text-center"><div className="text-3xl md:text-4xl font-bold">2,000+</div><div className="text-white/80">Downloads</div></div>
                <div className="text-center"><div className="text-3xl md:text-4xl font-bold">4.5</div><div className="text-white/80">Ratings</div></div>
              </div>
            </div>
            <div className="flex justify-center">
              <img src="https://i.pinimg.com/1200x/48/37/d7/4837d723a02eb118c89a0ebedebab6c9.jpg" alt="App Screenshot" className="max-w-xs w-full rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>

      <section ref={sectionRef} className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Our Apps Benefit</h2>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="order-1 lg:order-2 flex justify-center">
              <div className={`relative transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                <div className="relative w-64 h-[500px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-gray-900 rounded-full z-10" />
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                    <img src={appBenefitImages[selectedBenefit]} alt="App Feature" className="w-full h-full object-cover transition-opacity duration-500" />
                  </div>
                </div>
              </div>
            </div>
            <div className="order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((b) => (
                <button key={b.id} onClick={() => setSelectedBenefit(b.id)} className={`p-6 rounded-2xl text-left transition-all duration-300 hover:scale-105 ${selectedBenefit === b.id ? 'bg-red-600 text-white shadow-lg' : 'bg-white text-gray-900 shadow-md hover:shadow-lg'}`}>
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${selectedBenefit === b.id ? 'bg-white/20' : 'bg-red-100'}`}>
                    <b.Icon className={`w-7 h-7 ${selectedBenefit === b.id ? 'text-white' : 'text-red-600'}`} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{b.title}</h3>
                  <p className={`text-sm ${selectedBenefit === b.id ? 'text-white/90' : 'text-gray-600'}`}>{b.desc}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AppSection;
