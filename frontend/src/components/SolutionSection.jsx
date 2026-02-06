import React from 'react';
import { Shield, MapPin, Clock, Lock } from 'lucide-react';
import { solutionSteps } from '../data/mock';
import { useLanguage } from '../context/LanguageContext';

const SolutionSection = () => {
  const { language, t } = useLanguage();

  return (
    <section id="solution" className="py-24 bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2">
            <Shield className="w-4 h-4 text-emerald-500" />
            <span className="text-emerald-400 text-sm font-medium">{t.solution.badge}</span>
          </div>
        </div>

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            {t.solution.title1}
          </h2>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
            <span className="text-emerald-400">{t.solution.title2}</span>
          </h2>
          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
            {t.solution.subtitle}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {solutionSteps.map((step, index) => (
            <div
              key={index}
              className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-emerald-500/30 transition-all hover:transform hover:scale-[1.02] group"
            >
              <div className="text-emerald-500/50 text-sm font-mono mb-4">STEP {step.step}</div>
              <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                {language === 'tr' ? step.titleTr : step.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {language === 'tr' ? step.descriptionTr : step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Digital Proof Card */}
        <div className="relative rounded-3xl overflow-hidden border border-gray-800">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/40 to-transparent z-10" />
          <img
            src="https://images.unsplash.com/photo-1763246508199-037391849385?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200"
            alt="Digital Trust"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="p-12 max-w-lg">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                {t.solution.proofTitle1}<br />
                <span className="text-emerald-400">{t.solution.proofTitle2}</span>
              </h3>
              <p className="text-gray-300 mb-6">
                {t.solution.proofDesc}
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-emerald-400">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{t.solution.gpsVerified}</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-400">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{t.solution.timestamped}</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-400">
                  <Lock className="w-4 h-4" />
                  <span className="text-sm">{t.solution.tamperProof}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
