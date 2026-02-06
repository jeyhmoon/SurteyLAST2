import React from 'react';
import { ExternalLink, Shield } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <>
      {/* Footer with copyright */}
      <footer className="bg-[#0a0a0a] border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-black" />
              </div>
              <span className="text-white font-bold text-lg">SURTEY</span>
            </a>

            {/* Copyright */}
            <p className="text-gray-500 text-sm">
              {t.footer.copyright}
            </p>
          </div>
        </div>
      </footer>

      {/* Fixed Made with Emergent badge */}
      <a
        href="https://app.emergent.sh"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-gray-900/90 backdrop-blur-md border border-gray-700 rounded-full px-4 py-2 text-gray-400 hover:text-white hover:border-gray-600 transition-all shadow-lg"
      >
        <ExternalLink className="w-4 h-4" />
        <span className="text-sm">{t.footer.madeWith}</span>
      </a>
    </>
  );
};

export default Footer;
