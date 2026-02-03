import React, { useRef, useState, useEffect } from 'react';
import { Star, Users, Truck, Building, CheckCircle, Clock, Shield } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

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
      if (progress < 1) animationFrame = requestAnimationFrame(animate);
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, startCounting]);
  return count;
};

const AboutPage = () => {
  const [heroVisible, setHeroVisible] = useState(false);
  const [trustVisible, setTrustVisible] = useState(false);
  const [featuresVisible, setFeaturesVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [missionVisible, setMissionVisible] = useState(false);
  
  const trustRef = useRef(null);
  const featuresRef = useRef(null);
  const statsRef = useRef(null);
  const missionRef = useRef(null);

  // Count up values
  const customersCount = useCountUp(9984, 2000, statsVisible);
  const branchesCount = useCountUp(15, 1500, statsVisible);
  const staffCount = useCountUp(400, 2000, statsVisible);
  const yearsCount = useCountUp(15, 1500, statsVisible);

  useEffect(() => {
    setHeroVisible(true);
    
    const observers = [
      { ref: trustRef, setter: setTrustVisible },
      { ref: featuresRef, setter: setFeaturesVisible },
      { ref: statsRef, setter: setStatsVisible },
      { ref: missionRef, setter: setMissionVisible }
    ].map(({ ref, setter }) => {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) setter(true);
      }, { threshold: 0.2 });
      if (ref.current) observer.observe(ref.current);
      return observer;
    });
    
    return () => observers.forEach(o => o.disconnect());
  }, []);

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
          <div className={`max-w-3xl mx-auto text-center text-white transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Farrari Laundries</h1>
            <p className="text-xl text-white/90">Kuwait's Premier Dry Cleaning & Laundry Service Since 2010</p>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section ref={trustRef} className="py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className={`absolute -top-4 -left-4 w-24 h-24 bg-red-100 rounded-full transition-all duration-1000 ${trustVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} />
              <div className={`absolute -bottom-4 -right-4 w-32 h-32 bg-red-100 rounded-full transition-all duration-1000 delay-200 ${trustVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} />
              <div className={`transition-all duration-1000 delay-300 ${trustVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-12'}`}>
                <img src="https://images.pexels.com/photos/8774643/pexels-photo-8774643.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Our Facility" className="relative rounded-2xl shadow-2xl w-full h-[400px] object-cover" />
              </div>
            </div>

            <div>
              <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-6 transition-all duration-1000 ${trustVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
                Trust the Expert
              </h2>
              <p className={`text-lg text-gray-600 mb-6 transition-all duration-1000 delay-100 ${trustVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
                Farrari started as a small neighborhood laundry in 2010 and grew into a nationwide network known for reliable quality, large capacity, and strong corporate relationships.
              </p>
              <p className={`text-gray-600 mb-8 transition-all duration-1000 delay-200 ${trustVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
                With 15+ branches across Kuwait, supported by central processing facilities and a team of 400+ dedicated staff, we serve both retail customers (B2C) and commercial clients (B2B) with pickup & delivery as our core service.
              </p>

              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: Star, label: 'Top Quality' },
                  { icon: CheckCircle, label: 'Reliability' },
                  { icon: Truck, label: 'Convenience' }
                ].map((item, index) => (
                  <div 
                    key={item.label}
                    className={`bg-red-50 rounded-xl p-4 text-center hover:bg-red-100 transition-all duration-700 ${trustVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{ transitionDelay: `${300 + index * 100}ms` }}
                  >
                    <item.icon className="w-8 h-8 text-red-600 mx-auto mb-2" />
                    <span className="text-sm font-medium text-gray-800">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section ref={featuresRef} className="py-20 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 transition-all duration-1000 ${featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <div className={`w-20 h-1 bg-red-600 mx-auto transition-transform duration-1000 delay-300 ${featuresVisible ? 'scale-x-100' : 'scale-x-0'}`} />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: 'Reliability', desc: 'We deliver on our promises – every order, every time. Customers trust us because we consistently meet expectations.' },
              { icon: Star, title: 'Quality', desc: 'Clean, pressed, and perfectly finished garments. We never compromise on standards, regardless of volume or time.' },
              { icon: Users, title: 'Respect', desc: 'We treat every customer, partner, and team member with dignity. Professionalism starts with how we communicate.' },
              { icon: CheckCircle, title: 'Accountability', desc: 'We own our mistakes. If something goes wrong, we fix it fairly and quickly.' },
              { icon: Clock, title: 'Continuous Improvement', desc: 'We constantly refine our systems, processes, and services to stay ahead and serve better.' },
              { icon: Building, title: 'Integrity', desc: 'We operate transparently, charge fairly, and never mislead. Trust is earned through honesty.' }
            ].map((item, index) => (
              <Card 
                key={item.title}
                className={`border-0 shadow-lg hover:shadow-xl transition-all duration-700 hover:-translate-y-2 ${featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section ref={statsRef} className="py-20 bg-gradient-to-br from-red-600 to-red-700">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            {[
              { value: customersCount, suffix: '+', label: 'Happy Customers' },
              { value: branchesCount, suffix: '+', label: 'Branches' },
              { value: staffCount, suffix: '+', label: 'Team Members' },
              { value: yearsCount, suffix: '+', label: 'Years Experience' }
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className={`transition-all duration-700 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value.toLocaleString()}{stat.suffix}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section ref={missionRef} className="py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card 
              className={`border-0 shadow-xl bg-gradient-to-br from-red-50 to-white transition-all duration-1000 ${missionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}
            >
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To provide reliable, high-quality laundry solutions that make life and business operations easier, cleaner, and more organized – every single day. We aim to make laundry hassle-free for households, deliver consistent quality and on-time service, be a trusted partner for businesses, and operate with professionalism, integrity, and transparency.
                </p>
              </CardContent>
            </Card>
            <Card 
              className={`border-0 shadow-xl bg-gradient-to-br from-red-50 to-white transition-all duration-1000 delay-200 ${missionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}
            >
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To be Kuwait's most trusted and most efficient laundry network – and the benchmark for professional B2B and subscription-based laundry in the region. We aim to dominate pickup & delivery laundry in Kuwait, become the preferred laundry partner for hotels, gyms, spas, and corporate clients, and run a fully integrated digital operation with high reliability standards.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
