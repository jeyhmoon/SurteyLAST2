import React, { useState } from 'react';
import { Globe, ChevronDown, Menu, X } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const Header = () => {
  const { language, setLanguage, t, languages, languageNames } = useLanguage();
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const languageFlags = {
    en: '🇬🇧',
    tr: '🇹🇷',
    cz: '🇨🇿'
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setShowMobileMenu(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <img 
              src="/logo.png" 
              alt="Surtey Logo" 
              className="h-8 sm:h-10 w-auto"
            />
            <span className="text-lg sm:text-xl font-semibold text-[#1a2b4a] tracking-tight">
              SURTEY
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-[#64748b] hover:text-[#1a2b4a] text-sm font-medium transition-colors"
            >
              {t.nav.howItWorks}
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-[#64748b] hover:text-[#1a2b4a] text-sm font-medium transition-colors"
            >
              {t.nav.pricing}
            </button>
            <button 
              onClick={() => scrollToSection('become-agent')}
              className="text-[#64748b] hover:text-[#1a2b4a] text-sm font-medium transition-colors"
            >
              {t.nav.becomeAgent}
            </button>
          </nav>

          {/* Right side: Language + CTA */}
          <div className="flex items-center gap-3">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setShowLangDropdown(!showLangDropdown)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors text-sm"
                data-testid="language-selector"
              >
                <Globe className="w-4 h-4 text-[#64748b]" />
                <span className="hidden sm:inline text-[#64748b]">{languageFlags[language]}</span>
                <span className="text-[#1a2b4a] font-medium">{language.toUpperCase()}</span>
                <ChevronDown className="w-3 h-3 text-[#64748b]" />
              </button>

              {showLangDropdown && (
                <>
                  <div 
                    className="fixed inset-0 z-10" 
                    onClick={() => setShowLangDropdown(false)} 
                  />
                  <div className="absolute right-0 top-full mt-1 bg-white rounded-xl shadow-lg border border-gray-100 py-1 min-w-[140px] z-20">
                    {languages.map((lang) => (
                      <button
                        key={lang}
                        onClick={() => {
                          setLanguage(lang);
                          setShowLangDropdown(false);
                        }}
                        className={`w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                          language === lang ? 'text-[#059669] font-medium' : 'text-[#64748b]'
                        }`}
                        data-testid={`lang-option-${lang}`}
                      >
                        <span>{languageFlags[lang]}</span>
                        <span>{languageNames[lang]}</span>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Desktop CTA */}
            <button
              onClick={() => scrollToSection('pricing')}
              className="hidden sm:block bg-[#059669] text-white font-medium px-4 py-2 rounded-full hover:bg-[#047857] transition-all text-sm"
              data-testid="header-cta"
            >
              {t.nav.startVerification}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              data-testid="mobile-menu-toggle"
            >
              {showMobileMenu ? (
                <X className="w-5 h-5 text-[#1a2b4a]" />
              ) : (
                <Menu className="w-5 h-5 text-[#1a2b4a]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
            <nav className="flex flex-col gap-2">
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="text-left px-4 py-3 text-[#1a2b4a] hover:bg-gray-50 rounded-lg transition-colors font-medium"
              >
                {t.nav.howItWorks}
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-left px-4 py-3 text-[#1a2b4a] hover:bg-gray-50 rounded-lg transition-colors font-medium"
              >
                {t.nav.pricing}
              </button>
              <button 
                onClick={() => scrollToSection('become-agent')}
                className="text-left px-4 py-3 text-[#1a2b4a] hover:bg-gray-50 rounded-lg transition-colors font-medium"
              >
                {t.nav.becomeAgent}
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="mt-2 bg-[#059669] text-white font-medium px-4 py-3 rounded-xl hover:bg-[#047857] transition-all text-center"
              >
                {t.nav.startVerification}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
