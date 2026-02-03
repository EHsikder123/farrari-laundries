import React, { useState, useEffect, useRef } from 'react';
import { Gift, Percent, CreditCard, Award } from 'lucide-react';
import { businessInfo, appBenefitImages } from '../../data/mockData';

// Counter animation hook
const useCountUp = (end, duration = 2000, startCounting = false) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!startCounting) return;
    
    let startTime;
    let animationFrame;
    
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, startCounting]);
  
  return count;
};

const AppSection = () => {
  const [selectedBenefit, setSelectedBenefit] = useState('gift');
  const [isVisible, setIsVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const sectionRef = useRef(null);
  const statsRef = useRef(null);

  // Count up values
  const usersCount = useCountUp(9984, 2000, statsVisible);
  const downloadsCount = useCountUp(2000, 2000, statsVisible);
  const ratingsCount = useCountUp(45, 1500, statsVisible);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.2 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setStatsVisible(true);
    }, { threshold: 0.5 });
    if (statsRef.current) observer.observe(statsRef.current);
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
      {/* Just A Click Away Section */}
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
              <div ref={statsRef} className="grid grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold">{usersCount.toLocaleString()}+</div>
                  <div className="text-white/80">Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold">{downloadsCount.toLocaleString()}+</div>
                  <div className="text-white/80">Downloads</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold">{(ratingsCount / 10).toFixed(1)}</div>
                  <div className="text-white/80">Ratings</div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img src="https://i.pinimg.com/1200x/48/37/d7/4837d723a02eb118c89a0ebedebab6c9.jpg" alt="App Screenshot" className="max-w-xs w-full rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Apps Benefit Section */}
      <section ref={sectionRef} className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Our Apps Benefit</h2>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Mobile Frame - On top for mobile, on right for desktop */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
                {/* Wider Mobile Frame for full image visibility */}
                <div className="relative w-80 md:w-96 h-[600px] md:h-[700px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                  {/* Notch */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-900 rounded-full z-10" />
                  {/* Screen */}
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                    <img 
                      src={appBenefitImages[selectedBenefit]} 
                      alt="App Feature" 
                      className="w-full h-full object-contain bg-gray-100 transition-all duration-500" 
                    />
                  </div>
                  {/* Home indicator */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1 bg-gray-600 rounded-full" />
                </div>
              </div>
            </div>
            
            {/* Benefit Cards - Below mobile for mobile, on left for desktop */}
            <div className="order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((b, index) => (
                <button 
                  key={b.id} 
                  onClick={() => setSelectedBenefit(b.id)} 
                  className={`p-6 rounded-2xl text-left transition-all duration-500 hover:scale-105 ${selectedBenefit === b.id ? 'bg-red-600 text-white shadow-lg' : 'bg-white text-gray-900 shadow-md hover:shadow-lg'}`}
                  style={{
                    transitionDelay: `${index * 100}ms`,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(-50px)'
                  }}
                  data-testid={`benefit-${b.id}`}
                >
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
