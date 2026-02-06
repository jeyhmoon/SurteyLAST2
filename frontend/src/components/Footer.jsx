import React from 'react';
import { Shield, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-black" />
            </div>
            <span className="text-white font-bold text-lg">SURETY</span>
          </a>

          {/* Made with Emergent */}
          <a
            href="https://app.emergent.sh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800/50 border border-gray-700 rounded-full px-4 py-2 text-gray-400 hover:text-white hover:border-gray-600 transition-all"
          >
            <ExternalLink className="w-4 h-4" />
            <span className="text-sm">Made with Emergent</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
