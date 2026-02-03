import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Youtube, Instagram, MessageCircle } from 'lucide-react';
import { businessInfo, serviceCategories } from '../../data/mockData';

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

const Footer = () => {
  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, url: businessInfo.socialMedia.facebook, label: 'Facebook' },
    { icon: <Youtube className="w-5 h-5" />, url: businessInfo.socialMedia.youtube, label: 'YouTube' },
    { icon: <Instagram className="w-5 h-5" />, url: businessInfo.socialMedia.instagram, label: 'Instagram' },
    { icon: <SnapchatIcon />, url: businessInfo.socialMedia.snapchat, label: 'Snapchat' },
    { icon: <TikTokIcon />, url: businessInfo.socialMedia.tiktok, label: 'TikTok' },
    { icon: <MessageCircle className="w-5 h-5" />, url: businessInfo.socialMedia.whatsapp, label: 'WhatsApp' },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      {/* CTA Section */}
      <div className="bg-red-600 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <a href={businessInfo.playStoreLink} target="_blank" rel="noopener noreferrer">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="h-12 hover:scale-105 transition-transform"
                />
              </a>
              <a href={businessInfo.appStoreLink} target="_blank" rel="noopener noreferrer">
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on App Store"
                  className="h-12 hover:scale-105 transition-transform"
                />
              </a>
            </div>
            <a
              href={`tel:${businessInfo.phone}`}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg hover:bg-white/20 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              <span className="font-semibold">Call: {businessInfo.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-400">Stay Connected</h3>
            <p className="text-gray-400 mb-4">Follow us for latest happenings:</p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-all duration-300 hover:scale-110"
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-400">Services</h3>
            <ul className="space-y-2">
              {serviceCategories.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services#${service.slug}`}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/branches" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  Our Branches
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/franchising" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  Franchising
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-400">Contact Us</h3>
            <p className="text-gray-400 text-sm mb-4">
              Contact us and we would be glad to know what we can do for you. We are after all, at your service!
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm whitespace-pre-line">{businessInfo.address}</span>
              </li>
              <li>
                <a
                  href={`tel:${businessInfo.phone}`}
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5 text-red-400" />
                  <span className="text-sm">{businessInfo.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${businessInfo.email}`}
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5 text-red-400" />
                  <span className="text-sm">{businessInfo.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} {businessInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
