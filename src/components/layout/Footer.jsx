import React from 'react';
import { FiTwitter, FiLinkedin, FiGithub } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-dark-800 text-white py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <h3 className="text-2xl font-bold bg-hero-gradient bg-clip-text text-transparent mb-4">
            Complytics
          </h3>
          <p className="text-gray-400">
            Automated compliance solutions for modern businesses.
          </p>
          <div className="flex space-x-4 mt-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FiTwitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FiLinkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FiGithub className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Product</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Integrations</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Updates</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Company</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Resources</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Community</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Webinars</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
        <p>© {new Date().getFullYear()} Complytics. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;