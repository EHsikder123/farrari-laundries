import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

const faqs = [
  { id: 1, q: "What is dry cleaning and how is it different from laundry?", a: "Dry cleaning uses solvents instead of water, making it ideal for delicate fabrics. Normal washing uses water and detergent." },
  { id: 2, q: "What is your service turnaround?", a: "Normal service is 2 working days. Rush service is 1 working day with 50% extra charge." },
  { id: 3, q: "Do you offer free pick-up and delivery?", a: "Yes, we offer free pickup and delivery service throughout Kuwait. Call us at +965 9758 8886." },
  { id: 4, q: "What is your compensation policy for damaged items?", a: "Maximum compensation is 10 times the charge for cleaning the item as stated in your invoice." }
];

const FAQPreview = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.2 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div 
        className="absolute top-0 left-0 w-40 h-40 bg-red-100 rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-1000"
        style={{
          opacity: isVisible ? 0.5 : 0,
          transform: isVisible ? 'translate(-50%, -50%) scale(1)' : 'translate(-50%, -50%) scale(0.5)'
        }}
      />
      <div 
        className="absolute bottom-0 right-0 w-60 h-60 bg-red-100 rounded-full translate-x-1/2 translate-y-1/2 transition-all duration-1000 delay-200"
        style={{
          opacity: isVisible ? 0.5 : 0,
          transform: isVisible ? 'translate(50%, 50%) scale(1)' : 'translate(50%, 50%) scale(0.5)'
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side text - slides in from left */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-100px)',
              transition: 'all 1s ease-out'
            }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-gray-600 mb-8">Find answers to common questions about our services.</p>
            <Link to="/faq"><Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 gap-2 hover:scale-105 transition-transform">View More <ArrowRight className="w-4 h-4" /></Button></Link>
          </div>
          
          {/* FAQ accordion - each item pops up */}
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, index) => (
              <div
                key={f.id}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0) scale(1)' : 'translateX(50px) scale(0.95)',
                  transition: `all 0.6s ease-out ${(index + 1) * 150}ms`
                }}
              >
                <AccordionItem value={`faq-${f.id}`} className="bg-white rounded-xl shadow-md border-0 overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 text-left font-medium text-gray-900">{f.q}</AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600">{f.a}</AccordionContent>
                </AccordionItem>
              </div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQPreview;
