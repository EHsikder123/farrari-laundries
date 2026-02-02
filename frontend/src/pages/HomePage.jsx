import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Quote, Star, Gift, Percent, CreditCard, Award, Clock, Sparkles, Briefcase, Gem, Phone, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { businessInfo, heroSlides, testimonials, appStats, appBenefits, howItWorks, services, branches, faqs, aboutData } from '../data/mockData';

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2000, suffix = '' }) => {
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
      {count.toLocaleString()}{suffix}
    </span>
  );
};

// Icon mapping for app benefits
const iconMap = {
  gift: Gift,
  percent: Percent,
  'credit-card': CreditCard,
  award: Award,
  star: Star,
  gem: Gem,
  sparkles: Sparkles,
  briefcase: Briefcase,
  clock: Clock,
};

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentService, setCurrentService] = useState(0);

  // Auto-advance hero slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Slider Section */}
      <section className="relative h-[80vh] min-h-[600px] overflow-hidden pt-20">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10" />
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 z-20 flex items-center">
              <div className="container mx-auto px-4">
                <div
                  className={`max-w-2xl transition-all duration-1000 delay-300 ${
                    index === currentSlide
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                  }`}
                >
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-white/90 mb-8">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a href={businessInfo.appLink} target="_blank" rel="noopener noreferrer">
                      <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-6 hover:scale-105 transition-transform">
                        Order Now
                      </Button>
                    </a>
                    <Link to="/services">
                      <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-6">
                        Our Services
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/40 transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/40 transition-all duration-300 hover:scale-110"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-red-600 w-8'
                  : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-red-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-100 rounded-full translate-x-1/2 translate-y-1/2 opacity-50" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Customers Say</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto" />
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <Quote className="absolute -top-4 -left-4 w-16 h-16 text-red-200" />
              
              <div className="relative overflow-hidden">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className={`transition-all duration-700 ${
                      index === currentTestimonial
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-0 absolute inset-0 translate-x-full'
                    }`}
                  >
                    <Card className="border-0 shadow-xl bg-white">
                      <CardContent className="p-8 md:p-12">
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                          "{testimonial.text}"
                        </p>
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                            <span className="text-red-600 font-bold text-lg">
                              {testimonial.name.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                            <div className="flex gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>

              {/* Testimonial Indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? 'bg-red-600 w-8'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust the Expert Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative animate-fade-in-up">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-red-100 rounded-full" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-red-100 rounded-full" />
              <img
                src="https://images.pexels.com/photos/8774643/pexels-photo-8774643.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our Facility"
                className="relative rounded-2xl shadow-2xl w-full h-[400px] object-cover hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {aboutData.title}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {aboutData.description}
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {aboutData.values.map((value) => {
                  const IconComponent = iconMap[value.icon] || Star;
                  return (
                    <div
                      key={value.id}
                      className="bg-red-50 rounded-xl p-4 text-center hover:bg-red-100 transition-colors duration-300 hover:scale-105 transform"
                    >
                      <IconComponent className="w-8 h-8 text-red-600 mx-auto mb-2" />
                      <span className="text-sm font-medium text-gray-800">{value.title}</span>
                    </div>
                  );
                })}
              </div>

              <Link to="/about">
                <Button className="bg-red-600 hover:bg-red-700 text-white gap-2 hover:scale-105 transition-transform">
                  More About Us
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* App Download Section */}
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

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold">
                    <AnimatedCounter end={appStats.users} suffix="" />
                  </div>
                  <div className="text-white/80">Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold">
                    <AnimatedCounter end={appStats.downloads} suffix="" />
                  </div>
                  <div className="text-white/80">Downloads</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold">
                    <AnimatedCounter end={45} suffix="" />
                  </div>
                  <div className="text-white/80">Ratings (4.5)</div>
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

      {/* App Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Our Apps Benefit</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {appBenefits.map((benefit, index) => {
              const IconComponent = iconMap[benefit.icon] || Gift;
              return (
                <Card
                  key={benefit.id}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-red-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How it Works</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-1 bg-gradient-to-r from-red-200 via-red-400 to-red-200 -translate-y-1/2" />
            
            {howItWorks.map((step, index) => (
              <div
                key={step.id}
                className="relative group"
              >
                <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 relative z-10">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {step.step}
                  </div>
                  <div className="overflow-hidden rounded-xl mb-6 mt-4">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Step {step.step} - {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href={businessInfo.appLink} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white gap-2 hover:scale-105 transition-transform">
                <Phone className="w-5 h-5" />
                Order Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At Farrari Laundries we utilize state of the art, fully computerized dry cleaning machines complimented by the best quality dry cleaning solvents, and the most advanced detergents.
            </p>
            <div className="w-20 h-1 bg-red-600 mx-auto mt-4" />
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentService * (100 / 4)}%)` }}
              >
                {services.map((service) => (
                  <div
                    key={service.id}
                    className="w-full md:w-1/2 lg:w-1/4 flex-shrink-0 px-3"
                  >
                    <Link to={`/services#${service.slug}`}>
                      <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group h-full">
                        <div className="relative overflow-hidden h-48">
                          <img
                            src={service.image}
                            alt={service.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          <div className="absolute bottom-4 left-4 right-4">
                            <h3 className="text-white font-semibold text-lg">{service.name}</h3>
                          </div>
                        </div>
                      </Card>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Navigation */}
            <button
              onClick={() => setCurrentService(Math.max(0, currentService - 1))}
              disabled={currentService === 0}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed z-10"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setCurrentService(Math.min(services.length - 4, currentService + 1))}
              disabled={currentService >= services.length - 4}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed z-10"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="text-center mt-8">
            <Link to="/services">
              <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 gap-2">
                More About Services
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Branches Preview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Winning Locations</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {branches.slice(0, 3).map((branch) => (
              <Card
                key={branch.id}
                className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={branch.image}
                    alt={branch.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">{branch.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{branch.address}</p>
                  <a
                    href={`tel:${branch.phone}`}
                    className="text-red-600 font-medium hover:text-red-700 transition-colors"
                  >
                    {branch.phone}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/branches">
              <Button className="bg-red-600 hover:bg-red-700 text-white gap-2 hover:scale-105 transition-transform">
                View More Branches
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Preview Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-40 h-40 bg-red-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50" />
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-red-100 rounded-full translate-x-1/2 translate-y-1/2 opacity-50" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <p className="text-gray-600 mb-8">
                Find answers to common questions about our services.
              </p>
              <Link to="/faq">
                <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 gap-2">
                  View More
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            <Accordion type="single" collapsible className="space-y-3">
              {faqs.slice(0, 4).map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={`faq-${faq.id}`}
                  className="bg-white rounded-xl shadow-md border-0 overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 text-left font-medium text-gray-900">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600">
                    {faq.answer.split('\n').map((line, i) => (
                      <p key={i} className="mb-2">{line}</p>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
