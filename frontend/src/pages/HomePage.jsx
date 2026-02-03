import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import HeroSlider from '../components/home/HeroSlider';
import TestimonialsSection from '../components/home/TestimonialsSection';
import TrustSection from '../components/home/TrustSection';
import AppSection from '../components/home/AppSection';
import HowItWorksSection from '../components/home/HowItWorksSection';
import ServicesSection from '../components/home/ServicesSection';
import BranchesPreview from '../components/home/BranchesPreview';
import FAQPreview from '../components/home/FAQPreview';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSlider />
      <TrustSection />
      <AppSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <ServicesSection />
      <BranchesPreview />
      <FAQPreview />
      <Footer />
    </div>
  );
};

export default HomePage;
