import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { franchiseData, businessInfo } from '../data/mockData';
import { toast } from '../hooks/use-toast';
import { Toaster } from '../components/ui/toaster';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const FranchisingPage = () => {
  const [activeTab, setActiveTab] = useState('concept-brief');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    investment: '',
    experience: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const tabs = [
    { id: 'concept-brief', label: 'Concept Brief' },
    { id: 'owner-profile', label: 'Owner Profile' },
    { id: 'support-programs', label: 'Support Programs' },
    { id: 'franchising-services', label: 'Franchising Services' },
    { id: 'franchising-fee', label: 'Franchising Fee' },
    { id: 'register', label: 'Register' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`${BACKEND_URL}/api/franchise-register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Registration Submitted!",
          description: "We will contact you soon regarding your franchise inquiry.",
        });
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          country: '',
          city: '',
          investment: '',
          experience: '',
          message: ''
        });
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderContent = (content) => {
    return content.split('\n\n').map((para, i) => {
      if (para.startsWith('**') && para.includes('**')) {
        const parts = para.split('**');
        return (
          <div key={i} className="mb-4">
            {parts.map((part, j) => 
              j % 2 === 1 ? (
                <strong key={j} className="text-gray-900">{part}</strong>
              ) : (
                <span key={j}>{part}</span>
              )
            )}
          </div>
        );
      }
      if (para.startsWith('•')) {
        return (
          <ul key={i} className="list-none space-y-2 mb-4">
            {para.split('\n').map((item, j) => (
              <li key={j} className="flex items-start gap-2">
                <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span>{item.replace('• ', '')}</span>
              </li>
            ))}
          </ul>
        );
      }
      return <p key={i} className="mb-4 text-gray-600 leading-relaxed">{para}</p>;
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Toaster />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-red-600 via-red-700 to-red-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full" />
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/10 rounded-full" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">We are now Franchising</h1>
            <p className="text-xl text-white/90">
              Our 5 star cleaning service is coming to you everywhere.
            </p>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="flex flex-wrap justify-center gap-2 mb-12 bg-transparent h-auto">
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="px-6 py-3 rounded-lg font-medium data-[state=active]:bg-red-600 data-[state=active]:text-white data-[state=inactive]:bg-gray-100 data-[state=inactive]:text-gray-700 hover:bg-gray-200 data-[state=active]:hover:bg-red-700 transition-all duration-300"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="concept-brief">
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8 md:p-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">{franchiseData.conceptBrief.title}</h2>
                  {renderContent(franchiseData.conceptBrief.content)}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="owner-profile">
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8 md:p-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">{franchiseData.ownerProfile.title}</h2>
                  {renderContent(franchiseData.ownerProfile.content)}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="support-programs">
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8 md:p-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">{franchiseData.supportPrograms.title}</h2>
                  {renderContent(franchiseData.supportPrograms.content)}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="franchising-services">
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8 md:p-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">{franchiseData.franchisingServices.title}</h2>
                  {renderContent(franchiseData.franchisingServices.content)}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="franchising-fee">
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8 md:p-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">{franchiseData.franchisingFees.title}</h2>
                  {renderContent(franchiseData.franchisingFees.content)}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="register">
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8 md:p-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Register Your Interest</h2>
                  <p className="text-gray-600 mb-8">
                    Please fill up the form below and we will get back to you shortly.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          required
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="country">Country *</Label>
                        <Input
                          id="country"
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                          required
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="city">City *</Label>
                        <Input
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          required
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="investment">Investment Capacity (USD)</Label>
                        <Input
                          id="investment"
                          name="investment"
                          value={formData.investment}
                          onChange={handleInputChange}
                          className="mt-2"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="experience">Business Experience</Label>
                      <Textarea
                        id="experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        rows={3}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">Additional Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="mt-2"
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 gap-2"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Application'}
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FranchisingPage;
