import React, { useState, useEffect, useRef } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const faqs = [
  { id: 1, q: "What is dry cleaning and what is laundry? How are they different?", a: "Dry Cleaning uses solvents instead of water, making it ideal for delicate fabrics like suits, dresses, abayas, and kandoras that could be damaged by water. Regular laundry uses water and detergent, perfect for everyday wear like shirts, t-shirts, trousers, and pajamas." },
  { id: 2, q: "Why should I choose Farrari Laundries?", a: "With 15+ years of experience, 15+ branches across Kuwait, and 400+ dedicated staff, we offer professional CRM-powered operations, free pickup & delivery, and specialized services for both retail customers and businesses. We're known for fast response, wide coverage, and consistent quality." },
  { id: 3, q: "What is your service turnaround?", a: "Normal service is 2 working days from collection. Items picked up on Saturday will be delivered on Tuesday as Sunday is an off day. Carpets, curtains, and special items may take 2-5 days." },
  { id: 4, q: "Do you offer express/rush service?", a: "Yes! Express service provides same-day or next-day turnaround. Customers will be charged 50% extra for rush orders. Availability depends on our operational capacity – please check when placing your order." },
  { id: 5, q: "Do you offer free pickup and delivery?", a: "Yes! Free pickup and delivery is our core service. Call us at +965 9758 8886 or use our app to schedule. We organize multi-pickup routes with convenient time windows." },
  { id: 6, q: "What areas do you service in Kuwait?", a: "We serve all major areas including Shuwaikh, Kuwait City, Salmiya, Hawalli, Farwaniya, Jahra, Fahaheel, Mangaf, Mahboula, Fintas, Sabah Al Salem, Mishref, Rumaithiya, Bayan, Jabriya, and more." },
  { id: 7, q: "What services do you offer?", a: "We offer regular laundry (wash & iron), dry cleaning, ironing/pressing, starching, stain removal, carpet & curtain cleaning, sofa cover cleaning, special clothing care (abayas, kandoras, wedding dresses), bag & shoe cleaning, and express service." },
  { id: 8, q: "Do you clean carpets and curtains?", a: "Yes, we have a specialist department for carpets, curtains, drapes, and sofa covers. Turnaround is usually 2-5 days depending on the item." },
  { id: 9, q: "Do you clean bags and shoes?", a: "Yes! We not only clean bags & shoes but also restore them. All items are sanitized and hygienized through advanced technology." },
  { id: 10, q: "Can you remove stains?", a: "We offer professional stain removal for food/oil, ink, makeup, sweat stains, and more. Important: We always treat stains to the best possible level but cannot guarantee 100% removal as it depends on the stain type and fabric." },
  { id: 11, q: "Do you clean wedding gowns?", a: "Yes! We have a special wedding gown cleaning and preservation program. All packing boxes and wrapping papers are acid-free to ensure long preservation. We handle beadwork and delicate fabrics with extra care." },
  { id: 12, q: "What is your compensation policy for damaged items?", a: "For lost or heavily damaged garments caused by our process, compensation is based on item age and approximate value, typically partial. Maximum compensation is 10 times the cleaning charge stated on your invoice." },
  { id: 13, q: "Do you offer subscription plans?", a: "Yes! FarrariGo is our monthly subscription service for regular users. It includes a monthly fee with defined usage (item count/pickups) for selected services. Great for busy households!" },
  { id: 14, q: "Do you serve businesses (B2B)?", a: "Absolutely! We specialize in high-volume B2B services for hotels, gyms, spas, salons, restaurants, clinics, and corporate offices. We offer bulk washing, monthly contracts, towel programs, and dedicated account management." },
  { id: 15, q: "How do I pay?", a: "We accept cash, K-Net, and payment links. For B2B clients, we offer monthly invoicing. Subscription billing is automated through our system." }
];

const FAQPage = () => {
  const [heroVisible, setHeroVisible] = useState(false);
  const [faqsVisible, setFaqsVisible] = useState(false);
  const faqRef = useRef(null);

  useEffect(() => {
    setHeroVisible(true);
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setFaqsVisible(true);
    }, { threshold: 0.1 });
    if (faqRef.current) observer.observe(faqRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <section className="pt-32 pb-20 bg-gradient-to-br from-red-600 via-red-700 to-red-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full" />
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/10 rounded-full" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className={`max-w-3xl mx-auto text-center text-white transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-white/90">To know us better, see our FAQs below to find answers.</p>
          </div>
        </div>
      </section>

      <section ref={faqRef} className="py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((f, i) => (
                <div
                  key={f.id}
                  className={`transition-all duration-700 ${faqsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <AccordionItem value={`faq-${f.id}`} className="bg-white rounded-xl shadow-lg border-0 overflow-hidden hover:shadow-xl transition-shadow">
                    <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-gray-50 text-left font-semibold text-gray-900 data-[state=open]:bg-red-50 data-[state=open]:text-red-600">
                      <span className="pr-4">{f.q}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 text-gray-600"><div className="pt-2">{f.a}</div></AccordionContent>
                  </AccordionItem>
                </div>
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
