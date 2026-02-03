import React from 'react';
import { Star, Users, Truck, Building, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-red-600 via-red-700 to-red-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full" />
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/10 rounded-full" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Farrari Laundries
            </h1>
            <p className="text-xl text-white/90">
              Kuwait's Premier Dry Cleaning & Laundry Service
            </p>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
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
                Trust the Expert
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Farrari Laundries aim has always been to provide 5 star premium dry cleaning and laundry services to expat and local populations of Kuwait.
              </p>
              <p className="text-gray-600 mb-8">
                We use fully automatic state-of-the-art washing and dry cleaning systems with automatic dosing units. Our brand is known for its use of mild chemicals, the best spotting agents in the industry for the best treatment of fragile expensive fibers and textiles.
              </p>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-red-50 rounded-xl p-4 text-center hover:bg-red-100 transition-all">
                  <Star className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <span className="text-sm font-medium text-gray-800">Top Quality</span>
                </div>
                <div className="bg-red-50 rounded-xl p-4 text-center hover:bg-red-100 transition-all">
                  <CheckCircle className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <span className="text-sm font-medium text-gray-800">Cleanliness</span>
                </div>
                <div className="bg-red-50 rounded-xl p-4 text-center hover:bg-red-100 transition-all">
                  <Truck className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <span className="text-sm font-medium text-gray-800">Convenience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Team</h3>
                <p className="text-gray-600 text-sm">Our skilled professionals have years of experience in garment care.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Free Delivery</h3>
                <p className="text-gray-600 text-sm">Convenient pickup and delivery service at your doorstep.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Modern Facility</h3>
                <p className="text-gray-600 text-sm">State-of-the-art equipment for superior cleaning results.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Guaranteed</h3>
                <p className="text-gray-600 text-sm">100% satisfaction guaranteed on all our services.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-br from-red-600 to-red-700">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">9,984+</div>
              <div className="text-white/80">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">6+</div>
              <div className="text-white/80">Branches</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">10+</div>
              <div className="text-white/80">Services</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">4.5</div>
              <div className="text-white/80">Star Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-red-50 to-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To provide 5-star premium dry cleaning and laundry services to our valued customers in Kuwait. We are committed to treating your garments with the utmost care and quality using state-of-the-art equipment and employing exceptional people with a wealth of industry experience.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-xl bg-gradient-to-br from-red-50 to-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To become the leading dry cleaning and laundry concept in the region while spreading our excellence throughout the Middle East and beyond. We aim to achieve optimal return on investment and value growth in the industry while maintaining the highest standards of ethics and service.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
