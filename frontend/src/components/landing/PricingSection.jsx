import React from 'react';
import { Check, Zap } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const packageIds = ['quick_check', 'live_walkthrough', 'deep_verify'];
const prices = { quick_check: 9, live_walkthrough: 19, deep_verify: 39 };

const PricingSection = ({ onSelectPlan }) => {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="py-16 sm:py-20 px-4 sm:px-6 bg-[#FAFBFC]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a2b4a] mb-3 sm:mb-4">
            {t.pricing.title}
          </h2>
          <p className="text-base sm:text-lg text-[#64748b] max-w-xl mx-auto">
            {t.pricing.subtitle}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {packageIds.map((pkgId, index) => {
            const pkg = t.pricing.packages[pkgId];
            const price = prices[pkgId];
            const isPopular = pkgId === 'live_walkthrough';
            
            const plan = {
              id: pkgId,
              name: pkg.name,
              price: price,
              turnaround: pkg.turnaround,
              description: pkg.description,
              features: pkg.features
            };

            return (
              <div
                key={pkgId}
                data-testid={`pricing-card-${pkgId}`}
                className={`relative bg-white rounded-2xl p-5 sm:p-6 border-2 transition-all hover:shadow-xl ${
                  isPopular 
                    ? 'border-[#059669] shadow-lg shadow-[#059669]/10' 
                    : 'border-gray-100 hover:border-[#059669]/30'
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-[#059669] text-white text-xs font-bold px-3 sm:px-4 py-1 rounded-full whitespace-nowrap">
                      {t.pricing.popular}
                    </span>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-5 sm:mb-6 pt-2">
                  <h3 className="text-lg sm:text-xl font-bold text-[#1a2b4a] mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-[#64748b] text-sm italic mb-3 sm:mb-4">
                    "{pkg.description}"
                  </p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-3xl sm:text-4xl font-bold text-[#059669]">€{price}</span>
                  </div>
                  <div className="flex items-center justify-center gap-1 mt-2 text-[#64748b]">
                    <Zap className="w-4 h-4" />
                    <span className="text-sm">{pkg.turnaround}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2 sm:space-y-3 mb-5 sm:mb-6">
                  {pkg.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2 sm:gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#E8F5F0] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-[#059669]" />
                      </div>
                      <span className="text-[#64748b] text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => onSelectPlan(plan)}
                  data-testid={`select-plan-${pkgId}`}
                  className={`w-full py-3 rounded-xl font-semibold transition-all ${
                    isPopular
                      ? 'bg-[#059669] text-white hover:bg-[#047857]'
                      : 'bg-[#E8F5F0] text-[#059669] hover:bg-[#059669] hover:text-white'
                  }`}
                >
                  {t.pricing.selectPackage}
                </button>
              </div>
            );
          })}
        </div>

        {/* Trust Note */}
        <p className="text-center text-[#64748b] text-sm mt-6 sm:mt-8">
          {t.pricing.trustNote}
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
