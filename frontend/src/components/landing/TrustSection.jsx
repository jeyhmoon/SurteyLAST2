import React from 'react';
import { Shield, Users, Eye } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const icons = [Shield, Users, Eye];
const colors = ['#059669', '#0891b2', '#7c3aed'];

const TrustSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a2b4a] mb-3 sm:mb-4">
            {t.trust.title}
          </h2>
          <p className="text-base sm:text-lg text-[#64748b] max-w-xl mx-auto">
            {t.trust.subtitle}
          </p>
        </div>

        {/* Trust Cards */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {t.trust.items.map((item, index) => {
            const Icon = icons[index];
            const color = colors[index];
            return (
              <div
                key={index}
                className="text-center p-6 sm:p-8 rounded-2xl bg-[#FAFBFC] border border-gray-100 hover:shadow-lg transition-all group"
              >
                {/* Icon */}
                <div 
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 sm:mb-6 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${color}15` }}
                >
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8" style={{ color: color }} />
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl font-semibold text-[#1a2b4a] mb-2 sm:mb-3">
                  {item.title}
                </h3>
                <p className="text-[#64748b] text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="inline-flex items-center gap-2 bg-[#FEF3C7] border border-[#F59E0B]/30 rounded-full px-4 sm:px-6 py-2 sm:py-3">
            <span className="text-[#92400E] text-xs sm:text-sm font-medium">
              🛡️ {t.trust.guarantee}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
