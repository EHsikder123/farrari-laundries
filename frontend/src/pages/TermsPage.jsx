import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { businessInfo } from '../data/mockData';

const TermsPage = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms and Conditions</h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-gray-600 mb-8">
              Thank you for using Farrari Laundries application, an online platform to cater to your laundry needs at your doorstep. The following terms and conditions (Terms of Use) regulate your access and use of the Farrari Laundries application, as well as all services and contents offered on or through the Farrari Laundries application. Please read the following Terms of Use carefully before using the Farrari Laundries application. We reserve the right to change these Terms of Use at any time in our sole discretion and without any notice and all changes are effective immediately.
            </p>

            <p className="text-red-600 font-semibold mb-8">
              IF YOU DO NOT AGREE TO ALL OF THESE TERMS AND CONDITIONS, DO NOT ACCESS AND USE FARRARI LAUNDRIES APPLICATION OR ANY SERVICES PROVIDED BY FARRARI LAUNDRIES.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Use of Application and the Services</h2>
            <p className="text-gray-600 mb-6">
              You affirm that the information you provide to Farrari Laundries is complete and accurate. Farrari Laundries reserves the right at all times to verify the provided information and to refuse the service or use of the application at its sole discretion without providing reasons. By using the application, you consent to all actions taken by us concerning your information in compliance with our internal privacy policy.
            </p>

            <p className="text-gray-600 mb-6">
              You acknowledge and agree that we will not be liable if, for any reason, all or any part of the application is unavailable at any time or for any period.
            </p>

            <p className="text-gray-600 mb-6">By using the application or the service, you further agree that:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>You will only use the service or download the application for your sole, individual use and will not resell it to a third party.</li>
              <li>You won't approve others to use your account.</li>
              <li>You will not assign or otherwise transfer your account to any other person or legal entity.</li>
              <li>You will not use an account that is subject to the rights of someone other than you without appropriate authorization.</li>
              <li>You will not use the service or application for unlawful purposes.</li>
              <li>You will not copy or disseminate the application or other Farrari Laundries content without written consent from Farrari Laundries.</li>
              <li>You will keep secure and confidential your account password or any identification we provide you which allows access to the service and the application.</li>
              <li>You will provide us with whatever proof of identity we may reasonably request.</li>
              <li>You will not use the service or application with an incompatible or unauthorized device.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Garment Care</h2>
            <p className="text-gray-600 mb-6">
              Farrari Laundries will examine the labels of the clothes, assuring they are dealt with accordingly. If the label is missing, Farrari Laundries team will inspect and advise on the best treatment. If the client requests a special wash that is in contradiction with the item's label, Farrari Laundries team will contact the client and prompt the potential risks related to the particular wash and will only continue with such a request without any liability howsoever arising.
            </p>
            <p className="text-gray-600 mb-6">
              Farrari Laundries will not guarantee the successful removal of all stains but will make every attempt to remove the stains.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Item Count</h2>
            <p className="text-gray-600 mb-6">
              Farrari Laundries team will ensure that, once they arrive at the laundry plant, will count again the items that have been brought and if there is a discrepancy between the items as per the application and the items received, Farrari Laundries staff will ensure to call the customer and inform accordingly and will take the privilege to update the system on customer's behalf.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Damage & Lost Items</h2>
            <p className="text-gray-600 mb-6">
              Farrari Laundries strives for customer satisfaction by taking care of all their garments and our objective is to provide the best laundry service. Farrari Laundries team treats every item with extreme care and reasonability, however, we cannot guarantee against color change or shrinkage of the clothing and we shall not be responsible for any change of color or shrinkage of garments beyond our control. Farrari Laundries shall not be responsible for the wear and tear of the clothing and any valuables left in the pockets of your garments. Please check your laundry at the time of delivery as we will not be responsible for any missing or damaged item thereafter.
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>For any items damaged by the actions of Farrari Laundries not resulting from the inherent state of the item prior to cleaning, our maximum liability shall be ten times the charge for cleaning the item as stated in your invoice.</li>
              <li>Any damaged item must be reported to Farrari Laundries team not later than 24 hours from the date of receiving the item at {businessInfo.email}.</li>
              <li>Any lost items must be reported within 24 hours of the order delivery date at {businessInfo.email}. The items are considered lost 48 hours after the first claim has been made.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cancellation of Your Order</h2>
            <p className="text-gray-600 mb-6">We may cancel your order and the contract between you and us under the below conditions:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>If you fail to make the items available for collection</li>
              <li>As a result of an event outside our control</li>
              <li>If we consider that any item does not relate to the order, is damaged, has no information about its content or cleaning instructions</li>
              <li>If we cancel your order we will reach you by phone or email</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Collection & Delivery</h2>
            <p className="text-gray-600 mb-6">
              Farrari Laundries will do reasonable endeavors to collect and deliver Items at the times specified in the order but we cannot guarantee for the same. We will make reasonable efforts to communicate any delay to you by phone or email.
            </p>
            <p className="text-gray-600 mb-6">
              If you have failed to accept or arrange delivery of an Item for more than 90 days after the delivery date specified in the order we may dispose the Item or donate it to charity without reference to you.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment</h2>
            <p className="text-gray-600 mb-6">
              Farrari Laundries shall charge you for the services you have requested which shall include all the treatments as per the cleaning process. You agree that you will pay for all the services of items as ordered through Farrari Laundries application.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property Rights</h2>
            <p className="text-gray-600 mb-6">
              You acknowledge that the application and different components contained in it are protected by copyrights, trademarks, trade secrets, patents, or other proprietary rights and that these rights are valid and protected in all forms, media, and advancements existing now and hereinafter developed.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Warranty Disclaimer</h2>
            <p className="text-gray-600 mb-6">
              This application and the content, materials, and services on this application are provided "as is" and without warranties of any sort, regardless of whether expressed or implied.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Permission</h2>
            <p className="text-gray-600 mb-6">
              We would like to send you exclusive offers and the latest information from our group of companies by SMS, Email, Phone, and other electronic means, by registering on our APP you're allowing group companies to do the same. We will always place your details with the utmost care and will never sell them to other companies for marketing purposes.
            </p>

            <div className="mt-12 p-6 bg-gray-50 rounded-xl">
              <p className="text-gray-600">
                For any questions regarding these terms, please contact us at:
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

export default TermsPage;
