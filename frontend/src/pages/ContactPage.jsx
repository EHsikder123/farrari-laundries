import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, Facebook, Youtube, Instagram } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { businessInfo, branches } from '../data/mockData';
import { toast } from '../hooks/use-toast';
import { Toaster } from '../components/ui/toaster';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const SnapchatIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301a.601.601 0 0 1 .272-.054c.12 0 .24.024.36.078.27.102.45.306.51.516.06.21.03.438-.09.6-.18.24-.51.39-.78.45-.39.09-.78.12-1.02.12-.075 0-.151-.003-.227-.009l-.11-.004c-.063-.004-.125-.008-.182-.015-.15.45-.3.9-.45 1.35-.405 1.2-.81 2.385-1.125 3.24l-.023.063c-.225.555-.39.93-.645 1.29-.21.3-.42.54-.69.72a2.72 2.72 0 0 1-.555.3c-.675.27-1.41.405-2.325.405h-.12c-.93 0-1.71-.135-2.415-.42a2.55 2.55 0 0 1-.54-.3c-.27-.18-.48-.42-.69-.72-.255-.36-.42-.735-.645-1.29l-.023-.063c-.314-.855-.72-2.04-1.125-3.24-.15-.45-.3-.9-.45-1.35-.057.007-.119.011-.182.015l-.11.004a2.013 2.013 0 0 1-.227.009c-.24 0-.63-.03-1.02-.12-.27-.06-.6-.21-.78-.45a.712.712 0 0 1-.09-.6c.06-.21.24-.414.51-.516a.903.903 0 0 1 .36-.078.601.601 0 0 1 .272.054c.374.181.733.285 1.033.301.198 0 .326-.045.401-.09a16.44 16.44 0 0 0-.03-.51l-.003-.06c-.105-1.628-.23-3.654.3-4.847C6.453 1.069 9.809.793 10.799.793h1.407z"/>
  </svg>
);

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState(branches[0]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBranchChange = (branchId) => {
    const branch = branches.find((b) => b.id.toString() === branchId);
    if (branch) setSelectedBranch(branch);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`${BACKEND_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "We will get back to you as soon as possible.",
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      toast({
        title: "Sending Failed",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, url: businessInfo.socialMedia.facebook, label: 'Facebook', color: 'hover:bg-blue-600' },
    { icon: <Youtube className="w-5 h-5" />, url: businessInfo.socialMedia.youtube, label: 'YouTube', color: 'hover:bg-red-600' },
    { icon: <Instagram className="w-5 h-5" />, url: businessInfo.socialMedia.instagram, label: 'Instagram', color: 'hover:bg-pink-600' },
    { icon: <SnapchatIcon />, url: businessInfo.socialMedia.snapchat, label: 'Snapchat', color: 'hover:bg-yellow-500' },
    { icon: <TikTokIcon />, url: businessInfo.socialMedia.tiktok, label: 'TikTok', color: 'hover:bg-gray-900' },
    { icon: <MessageCircle className="w-5 h-5" />, url: businessInfo.socialMedia.whatsapp, label: 'WhatsApp', color: 'hover:bg-green-600' },
  ];

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-white/90">
              Get in touch with us for any inquiries or support
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <Card className="border-0 shadow-xl mb-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Address</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Main Office Address</h3>
                        <p className="text-gray-600 whitespace-pre-line">{businessInfo.address}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                        <a href={`mailto:${businessInfo.email}`} className="text-red-600 hover:text-red-700">
                          {businessInfo.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map */}
              <Card className="border-0 shadow-xl mb-8 overflow-hidden">
                <CardContent className="p-0">
                  <div className="h-80">
                    <MapContainer
                      center={[29.3375, 47.9774]}
                      zoom={13}
                      style={{ height: '100%', width: '100%' }}
                    >
                      <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      />
                      <Marker position={[29.3375, 47.9774]}>
                        <Popup>
                          <strong>Farrari Laundries</strong>
                          <br />
                          Main Office
                        </Popup>
                      </Marker>
                    </MapContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Numbers */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">General Inquiries</p>
                      <a href={`tel:${businessInfo.phone}`} className="font-semibold text-gray-900">
                        {businessInfo.phone}
                      </a>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">WhatsApp</p>
                      <a href={businessInfo.socialMedia.whatsapp} target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-900">
                        {businessInfo.whatsapp}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Social Media */}
              <Card className="border-0 shadow-xl">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Stay Connected</h3>
                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center transition-all duration-300 ${social.color} hover:text-white hover:scale-110`}
                        title={social.label}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-2"
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
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
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        required
                        className="mt-2"
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-red-600 hover:bg-red-700 text-white py-6 gap-2"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      <Send className="w-4 h-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Branch Locations */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Outlets</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto" />
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <Label className="mb-4 block">Select a Branch</Label>
              <Select onValueChange={handleBranchChange} defaultValue={branches[0].id.toString()}>
                <SelectTrigger className="w-full bg-white">
                  <SelectValue placeholder="Select a branch" />
                </SelectTrigger>
                <SelectContent>
                  {branches.map((branch) => (
                    <SelectItem key={branch.id} value={branch.id.toString()}>
                      {branch.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {selectedBranch && (
                <Card className="mt-6 border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">{selectedBranch.name}</h3>
                    <p className="text-gray-600 mb-4">{selectedBranch.address}</p>
                    <a
                      href={`tel:${selectedBranch.phone}`}
                      className="flex items-center gap-2 text-red-600 font-medium"
                    >
                      <Phone className="w-4 h-4" />
                      {selectedBranch.phone}
                    </a>
                  </CardContent>
                </Card>
              )}
            </div>

            <div className="h-80 rounded-xl overflow-hidden shadow-lg">
              {selectedBranch && (
                <MapContainer
                  key={selectedBranch.id}
                  center={[selectedBranch.lat, selectedBranch.lng]}
                  zoom={15}
                  style={{ height: '100%', width: '100%' }}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  <Marker position={[selectedBranch.lat, selectedBranch.lng]}>
                    <Popup>
                      <strong>{selectedBranch.name}</strong>
                      <br />
                      {selectedBranch.address}
                    </Popup>
                  </Marker>
                </MapContainer>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
