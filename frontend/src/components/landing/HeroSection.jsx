import React from 'react';
import { ArrowRight, Shield, MapPin } from 'lucide-react';

const HeroSection = ({ onStartVerification }) => {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Trust Badge */}
        <div className="inline-flex items-center gap-2 bg-[#E8F5F0] border border-[#34D399]/30 rounded-full px-4 py-2 mb-8">
          <Shield className="w-4 h-4 text-[#059669]" />
          <span className="text-[#059669] text-sm font-medium">Trusted Verification Service</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1a2b4a] mb-6 leading-tight">
          Verify Before You
          <span className="text-[#059669]"> Commit</span>
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl text-[#64748b] mb-10 max-w-2xl mx-auto leading-relaxed">
          Don't risk your money on fake listings. Our local agents physically verify 
          apartments, cars, and products — so you can make decisions with confidence.
        </p>

        {/* CTA Button */}
        <button
          onClick={onStartVerification}
          data-testid="start-verification-btn"
          className="inline-flex items-center gap-2 bg-[#059669] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#047857] transition-all hover:shadow-lg hover:shadow-[#059669]/25 text-lg group"
        >
          Start Verification
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Location Badge */}
        <div className="flex items-center justify-center gap-2 mt-8 text-[#64748b]">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">Currently serving Prague, Czech Republic 🇨🇿</span>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 sm:gap-16 mt-16">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-[#1a2b4a]">50+</div>
            <div className="text-sm text-[#64748b] mt-1">Verifications</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-[#1a2b4a]">4.9★</div>
            <div className="text-sm text-[#64748b] mt-1">Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-[#1a2b4a]">2h</div>
            <div className="text-sm text-[#64748b] mt-1">Avg. Response</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
