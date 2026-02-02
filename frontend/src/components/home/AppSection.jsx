import React, { useState, useEffect } from 'react';
import { Gift, Percent, CreditCard, Award } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

const businessInfo = {
  appLink: "https://play.google.com/store/apps/details?id=com.cleancloudapp.farrarilaundries"
};

const appStats = {
  users: 9984,
  downloads: 2000,
  ratings: 4.5
};

const appBenefits = [
  { id: 1, title: "Gift", description: "Instant gift for your family and friends from our app.", Icon: Gift },
  { id: 2, title: "Promos & Discounts", description: "You can find exclusive deals and discounts in our app.", Icon: Percent },
  { id: 3, title: "Cashless Payment", description: "Pay via credit/debit card through our app.", Icon: CreditCard },
  { id: 4, title: "Rewards", description: "Get rewarded for every friend you refer.", Icon: Award }
];

const AnimatedCounter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration, hasStarted]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById(`counter-${end}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [end]);

  return (
    <span id={`counter-${end}`}>
      {count.toLocaleString()}
    </span>
  );
};

const AppSection = () => {
  return (
    <>
      <section className="py-20 bg-gradient-to-br from-red-600 via-red-700 to-red-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full" />
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/10 rounded-full" />
          <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-white/5 rounded-full" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Just A Click Away</h2>
              <p className="text-xl text-white/90 mb-8">
                Our apps got a better and convenient way of getting your laundry and dry cleaning with our 5-star services. Download now and register to get more exclusive offers.
              </p>
              
              <a
                href={businessInfo.appLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="h-14 hover:scale-105 transition-transform"
                />
              </a>

              <div className="grid grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold">
                    <AnimatedCounter end={appStats.users} />
                  </div>
                  <div className="text-white/80">Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold">
                    <AnimatedCounter end={appStats.downloads} />
                  </div>
                  <div className="text-white/80">Downloads</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold">4.5</div>
                  <div className="text-white/80">Ratings</div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <img
                src="https://play-lh.googleusercontent.com/SDmHVyKGu4KmVHWXBlaHajbfvUMEIjsiSGB84LPT-ARTyUcIsZYHdnJpJKvdNct5N_XN_RQgF33kfbhzh9E4SQ=w526-h296-rw"
                alt="App Screenshot"
                className="max-w-sm w-full rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Our Apps Benefit</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {appBenefits.map((benefit) => (
              <Card
                key={benefit.id}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <benefit.Icon className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AppSection;
