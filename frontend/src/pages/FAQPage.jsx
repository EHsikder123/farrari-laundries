import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const faqs = [
  { id: 1, q: "What is dry cleaning and what is laundry? How are they different?", a: "Dry Cleaning involves solvents instead of water, ideal for fabrics susceptible to water. Normal washing (Laundry) uses water and detergent with factors like temperature, alkalinity, and mechanical action." },
  { id: 2, q: "Why should I come to Farrari Laundries for my items?", a: "We offer fully automated state-of-the-art systems, strategically located outlets across Kuwait, free pickup and delivery, and full range of added value services including bag & shoe cleaning, carpet cleaning, and more." },
  { id: 3, q: "What is your service turnaround?", a: "Normal service is 2 working days from collection. Items picked-up on Saturday will be delivered on Tuesday as Sunday is an off day." },
  { id: 4, q: "What if I want a rush order?", a: "Rush service is 1 working day from collection. Customers will be charged 50% extra for all rush orders." },
  { id: 5, q: "Do you service in all areas in Kuwait?", a: "Yes, we have a strong presence across Kuwait including Shuwaikh, Kuwait City, Salmiya, Hawalli, Farwaniya, Jahra, and many more locations." },
  { id: 6, q: "Do you clean curtains and upholstery?", a: "Yes, we have a specialist department for curtains & upholstery cleaning." },
  { id: 7, q: "Do you clean bags and shoes?", a: "We not only clean bags & shoes but also restore them to their original color. All items will be sanitized and hygienized through our advanced technology without chemicals." },
  { id: 8, q: "Do you clean strollers, car seats and children soft toys?", a: "Yes, we clean, sanitize and deodorize all kinds of baby accessories including strollers, car seats, soft toys, pads, high chairs, baby cots, etc." },
  { id: 9, q: "Do you clean mattresses?", a: "Yes, we clean mattresses using specialized inject cleaning methods. In-house visits can also be arranged for on-site cleaning." },
  { id: 10, q: "Do you clean and preserve wedding gowns?", a: "Yes, we have a special wedding gown cleaning and preservation program. All packing boxes and wrapping papers are acid free to ensure long preservation." },
  { id: 11, q: "Do you do free pick-up and delivery?", a: "Yes, call us anytime at +965 9758 8886 and our customer service representatives will assist you." },
  { id: 12, q: "If anything happens what is your compensation policy?", a: "Maximum compensation payable by the company will be 10 times the charge on the bill related to that particular item." }
];

const FAQPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <section className="pt-32 pb-20 bg-gradient-to-br from-red-600 via-red-700 to-red-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full" />
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/10 rounded-full" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-white/90">To know us better, see our FAQs below to find answers.</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((f, i) => (
                <AccordionItem key={f.id} value={`faq-${f.id}`} className="bg-white rounded-xl shadow-lg border-0 overflow-hidden transition-all duration-300 hover:shadow-xl">
                  <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-gray-50 text-left font-semibold text-gray-900 data-[state=open]:bg-red-50 data-[state=open]:text-red-600">
                    <span className="pr-4">{f.q}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-gray-600"><div className="pt-2">{f.a}</div></AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h2>
          <p className="text-gray-600 mb-6">Can't find the answer you're looking for? Please contact our friendly team.</p>
          <a href="/contact" className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 hover:scale-105">Contact Us</a>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default FAQPage;
