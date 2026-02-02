import React, { useState, useEffect } from 'react';
import { Quote, Star } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { testimonials } from '../../data/mockData';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
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
  );
};

export default TestimonialsSection;
