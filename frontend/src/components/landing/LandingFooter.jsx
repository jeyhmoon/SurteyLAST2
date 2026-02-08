import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const LandingFooter = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#1a2b4a] text-white py-10 sm:py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <img 
              src="/logo.png" 
              alt="Surtey Logo" 
              className="h-8 sm:h-10 w-auto brightness-0 invert"
            />
            <span className="text-lg sm:text-xl font-semibold tracking-tight">
              SURTEY
            </span>
          </div>

          {/* Contact */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-gray-300">
            <a 
              href="mailto:getsurtey@gmail.com" 
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">getsurtey@gmail.com</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Prague, Czech Republic</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-6 sm:my-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-400 text-xs sm:text-sm">
          <p>{t.footer.copyright}</p>
          <div className="flex items-center gap-4 sm:gap-6">
            <a href="#" className="hover:text-white transition-colors">{t.footer.privacy}</a>
            <a href="#" className="hover:text-white transition-colors">{t.footer.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
