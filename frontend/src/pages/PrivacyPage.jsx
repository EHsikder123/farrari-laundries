import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { businessInfo } from '../data/mockData';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-red-600 via-red-700 to-red-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full" />
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/10 rounded-full" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-gray-600 mb-8">
              One of the main priorities of Farrari Laundries is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Farrari Laundries and how we use it.
            </p>

            <p className="text-gray-600 mb-8">
              This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collected. This policy is not applicable to any information collected offline or via channels other than this website.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Consent</h2>
            <p className="text-gray-600 mb-6">
              By using our website, you hereby consent to our Privacy Policy and agree to its terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
            <p className="text-gray-600 mb-6">
              When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.
            </p>
            <p className="text-gray-600 mb-6">
              If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
            <p className="text-gray-600 mb-6">We use the information we collect in various ways, including:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Provide, operate, and maintain our website</li>
              <li>Improve, personalize, and expand our website</li>
              <li>Understand and analyze how you use our website</li>
              <li>Develop new products, services, features, and functionality</li>
              <li>Send you emails</li>
              <li>Find and prevent fraud</li>
              <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Log Files</h2>
            <p className="text-gray-600 mb-6">
              Farrari Laundries follows a standard procedure of using log files. These files log visitors when they visit websites. This is a standard practice for hosting firms as part of their analytics. Internet protocol (IP) addresses, browser types, Internet Service Providers (ISPs), date and time stamps, referring/exit pages, and maybe click counts are among the data gathered by log files. These are not connected to any personally identifiable information.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Web Beacons</h2>
            <p className="text-gray-600 mb-6">
              We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Beacons, tags, and scripts are examples of tracking technologies that are used to gather and monitor data in order to enhance and evaluate our Service.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-3">Cookies or Browser Cookies</h3>
            <p className="text-gray-600 mb-6">
              A cookie is a small file placed on Your Device. You can instruct Your browser to reject cookies altogether or to alert you when one is being sent. You might not be able to utilize some sections of our service, though, if You reject Cookies. Unless you have configured your browser to reject cookies, our service might make use of them.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-3">Web Beacons</h3>
            <p className="text-gray-600 mb-6">
              Web beacons, also known as clear gifs, pixel tags, and single-pixel gifs, are tiny electronic files that are sometimes included in email messages and certain parts of our service. They allow the company to track user activity on those pages, count the number of people who have visited those pages, and gather other website-related data.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Security</h2>
            <p className="text-gray-600 mb-6">
              We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. However, keep in mind that there is no 100% safe and dependable way to transmit data over the internet or store electronic files, and we are unable to guarantee complete security.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Links to Other Sites</h2>
            <p className="text-gray-600 mb-6">
              There could be links to other websites on this service. A third-party link will take you to that website when you click on it. Please be aware that we do not run these external websites. As a result, we highly suggest that you read these websites' privacy policies. The content, privacy practices, or other policies of any third-party websites or services are beyond our control and responsibility.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
            <p className="text-gray-600 mb-6">
              Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children under 13. If you become aware that a child has provided us with personal information, please contact us.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-600 mb-6">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
            </p>

            <div className="mt-12 p-6 bg-gray-50 rounded-xl">
              <p className="text-gray-600">
                For any questions regarding this privacy policy, please contact us at:
              </p>
              <p className="font-semibold text-gray-900">{businessInfo.email}</p>
              <p className="font-semibold text-gray-900">{businessInfo.phone}</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPage;
