import React from 'react';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';
import { stats } from '../data/mock';
import { useLanguage } from '../context/LanguageContext';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleVerifyClick = (e) => {
    e.preventDefault();
    const element = document.querySelector('#verify');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHowItWorksClick = (e) => {
    e.preventDefault();
    const element = document.querySelector('#solution');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-[#0a0a0a] relative overflow-hidden pt-24">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/20 via-transparent to-transparent" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gray-800/50 border border-gray-700 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-gray-300 text-sm">{t.hero.badge}</span>
            </div>

            {/* Main Heading */}
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                {t.hero.title1}
              </h1>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                <span className="text-emerald-400">{t.hero.title2}</span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed">
              {t.hero.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#verify"
                onClick={handleVerifyClick}
                className="inline-flex items-center gap-2 bg-emerald-500 text-black font-semibold px-8 py-4 rounded-full hover:bg-emerald-400 transition-all hover:shadow-lg hover:shadow-emerald-500/30 group"
              >
                {t.hero.cta1}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#solution"
                onClick={handleHowItWorksClick}
                className="inline-flex items-center gap-2 bg-transparent border border-gray-700 text-white font-semibold px-8 py-4 rounded-full hover:bg-gray-800/50 transition-all group"
              >
                <Play className="w-5 h-5" />
                {t.hero.cta2}
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-12 pt-8">
              <div>
                <div className="text-3xl font-bold text-emerald-400">{stats.verifications}</div>
                <div className="text-gray-500 text-sm">{t.hero.verifications}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-400">{stats.activeAgents}</div>
                <div className="text-gray-500 text-sm">{t.hero.activeAgents}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-400">{stats.rating}★</div>
                <div className="text-gray-500 text-sm">{t.hero.rating}</div>
              </div>
            </div>
          </div>

          {/* Right Column - Image Card */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1642109559111-ec0677f5fcec?crop=entropy&cs=srgb&fm=jpg&q=85&w=800"
                alt="Person verifying location"
                className="w-full h-[500px] object-cover"
              />
              {/* Overlay Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-gray-900/90 backdrop-blur-md rounded-xl p-4 border border-gray-800">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">{t.hero.verificationComplete}</div>
                      <div className="text-gray-400 text-sm">GPS: 50.0755°N, 14.4378°E • 14:32 CET</div>
                    </div>
                  </div>
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
