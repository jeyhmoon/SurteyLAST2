import React from 'react';
import { ArrowRight, Shield, MapPin } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const HeroSection = ({ onStartVerification }) => {
  const { t } = useLanguage();

  return (
    <section className="pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Trust Badge */}
        <div className="inline-flex items-center gap-2 bg-[#E8F5F0] border border-[#34D399]/30 rounded-full px-4 py-2 mb-6 sm:mb-8">
          <Shield className="w-4 h-4 text-[#059669]" />
          <span className="text-[#059669] text-sm font-medium">{t.hero.badge}</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a2b4a] mb-4 sm:mb-6 leading-tight">
          {t.hero.title}
          <span className="text-[#059669]"> {t.hero.titleHighlight}</span>
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-[#64748b] mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-4">
          {t.hero.description}
        </p>

        {/* CTA Button */}
        <button
          onClick={onStartVerification}
          data-testid="start-verification-btn"
          className="inline-flex items-center gap-2 bg-[#059669] text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-[#047857] transition-all hover:shadow-lg hover:shadow-[#059669]/25 text-base sm:text-lg group"
        >
          {t.hero.cta}
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Location Badge */}
        <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8 text-[#64748b]">
          <MapPin className="w-4 h-4" />
          <span className="text-xs sm:text-sm">{t.hero.location} 🇨🇿</span>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-12 md:gap-16 mt-12 sm:mt-16">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a2b4a]">50+</div>
            <div className="text-xs sm:text-sm text-[#64748b] mt-1">{t.hero.stats.verifications}</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a2b4a]">4.9★</div>
            <div className="text-xs sm:text-sm text-[#64748b] mt-1">{t.hero.stats.rating}</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a2b4a]">2h</div>
            <div className="text-xs sm:text-sm text-[#64748b] mt-1">{t.hero.stats.response}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
