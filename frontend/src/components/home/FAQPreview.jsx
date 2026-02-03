import React from 'react';
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
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-40 h-40 bg-red-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50" />
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-red-100 rounded-full translate-x-1/2 translate-y-1/2 opacity-50" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-gray-600 mb-8">Find answers to common questions about our services.</p>
            <Link to="/faq"><Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 gap-2">View More <ArrowRight className="w-4 h-4" /></Button></Link>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f) => (
              <AccordionItem key={f.id} value={`faq-${f.id}`} className="bg-white rounded-xl shadow-md border-0 overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 text-left font-medium text-gray-900">{f.q}</AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQPreview;
