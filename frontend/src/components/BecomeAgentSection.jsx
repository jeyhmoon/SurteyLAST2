import React from 'react';
import { Zap, DollarSign, Globe, ArrowRight, MapPin } from 'lucide-react';
import { agentBenefits } from '../data/mock';
import { useLanguage } from '../context/LanguageContext';
import { useNavigate } from 'react-router-dom';

const iconMap = {
  Zap: Zap,
  DollarSign: DollarSign,
  Globe: Globe
};

const BecomeAgentSection = () => {
  const { language, t } = useLanguage();
  const navigate = useNavigate();

  return (
    <section id="agent" className="py-24 bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1519677100203-a0e668c92439?crop=entropy&cs=srgb&fm=jpg&q=85&w=800"
                alt="Prague cityscape"
                className="w-full h-[500px] object-cover"
              />
              {/* Stats Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-gray-900/90 backdrop-blur-md rounded-xl p-4 border border-gray-800">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-gray-400 text-sm">{t.agent.avgEarnings}</div>
                    <div className="text-2xl font-bold text-emerald-400">€500+</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">{t.agent.perVerification}</div>
                    <div className="text-2xl font-bold text-white">€5-25</div>
                  </div>
                  <div className="flex items-center gap-2 text-cyan-400">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">Prague</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            {/* Section Badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4 text-emerald-500" />
              <span className="text-emerald-400 text-sm font-medium">{t.agent.badge}</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              {t.agent.title1}
            </h2>
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-400 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              {t.agent.title2}
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              {t.agent.subtitle}
            </p>

            {/* Benefits */}
            <div className="space-y-6 mb-8">
              {agentBenefits.map((benefit, index) => {
                const IconComponent = iconMap[benefit.icon];
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-emerald-500" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">
                        {language === 'tr' ? benefit.titleTr : benefit.title}
                      </h4>
                      <p className="text-gray-500 text-sm">
                        {language === 'tr' ? benefit.descriptionTr : benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              onClick={() => navigate('/apply-agent')}
              className="inline-flex items-center gap-2 bg-transparent border border-emerald-500 text-emerald-400 font-semibold px-8 py-4 rounded-full hover:bg-emerald-500/10 transition-all group"
            >
              {t.agent.applyBtn}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeAgentSection;
