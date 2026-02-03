import React, { useState, useEffect, useRef } from 'react';
import { Quote, Star } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

const testimonials = [
  { id: 1, name: "Rami", text: "I have to say, the quality is NEXT LEVEL. I am super impressed with the results and I couldn't stop talking about it all day. Great job!" },
  { id: 2, name: "Gemma Bellante", text: "My bag came back looking good as new! I nearly threw it away, it was such a mess... Thanks for bringing it back to life for me." },
  { id: 3, name: "Ms. Nikita Phulwani", text: "I made a complete mess of my white shoes. But to my absolute shock, when the shoes arrived they were cleaner than before! They are really the best at what they do." },
  { id: 4, name: "Helen Farmer", text: "As a busy mom, the pick-up and drop-off service is incredibly useful. They dry cleaned my wedding dress and it is like new!" }
];

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.2 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % 4);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div 
        className="absolute top-0 left-0 w-64 h-64 bg-red-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50 transition-all duration-1000"
        style={{
          transform: isVisible ? 'translate(-50%, -50%) scale(1)' : 'translate(-50%, -50%) scale(0.5)',
          opacity: isVisible ? 0.5 : 0
        }}
      />
      <div 
        className="absolute bottom-0 right-0 w-96 h-96 bg-red-100 rounded-full translate-x-1/2 translate-y-1/2 opacity-50 transition-all duration-1000 delay-200"
        style={{
          transform: isVisible ? 'translate(50%, 50%) scale(1)' : 'translate(50%, 50%) scale(0.5)',
          opacity: isVisible ? 0.5 : 0
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div 
          className="text-center mb-12 transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)'
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Customers Say</h2>
          <div 
            className="w-20 h-1 bg-red-600 mx-auto transition-all duration-1000 delay-300"
            style={{
              transform: isVisible ? 'scaleX(1)' : 'scaleX(0)'
            }}
          />
        </div>
        <div className="max-w-4xl mx-auto">
          <div 
            className="relative transition-all duration-1000 delay-200"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.9)'
            }}
          >
            <Quote className="absolute -top-4 -left-4 w-16 h-16 text-red-200" />
            <div className="relative overflow-hidden">
              {testimonials.map((t, i) => (
                <div key={t.id} className={`transition-all duration-700 ${i === currentTestimonial ? 'opacity-100 translate-x-0' : 'opacity-0 absolute inset-0 translate-x-full'}`}>
                  <Card className="border-0 shadow-xl bg-white">
                    <CardContent className="p-8 md:p-12">
                      <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">"{t.text}"</p>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                          <span className="text-red-600 font-bold text-lg">{t.name.charAt(0)}</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{t.name}</h4>
                          <div className="flex gap-1">{[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-2 mt-6">
              {[0,1,2,3].map(i => (
                <button key={i} onClick={() => setCurrentTestimonial(i)} className={`w-3 h-3 rounded-full transition-all duration-300 ${i === currentTestimonial ? 'bg-red-600 w-8' : 'bg-gray-300 hover:bg-gray-400'}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
