import React from 'react';
import { FileText, CreditCard, MapPin, FileCheck } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const icons = [FileText, CreditCard, MapPin, FileCheck];
const colors = ['#059669', '#0891b2', '#7c3aed', '#059669'];

const ServiceFlow = () => {
  const { t } = useLanguage();

  return (
    <section id="how-it-works" className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a2b4a] mb-3 sm:mb-4">
            {t.flow.title}
          </h2>
          <p className="text-base sm:text-lg text-[#64748b] max-w-xl mx-auto">
            {t.flow.subtitle}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {t.flow.steps.map((step, index) => {
            const Icon = icons[index];
            const color = colors[index];
            return (
              <div
                key={index}
                className="relative bg-[#FAFBFC] rounded-2xl p-5 sm:p-6 border border-gray-100 hover:border-[#059669]/30 hover:shadow-lg transition-all group"
              >
                {/* Step Number */}
                <div 
                  className="absolute -top-3 -right-3 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold text-white"
                  style={{ backgroundColor: color }}
                >
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Icon */}
                <div 
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-4 sm:mb-5 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${color}15` }}
                >
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: color }} />
                </div>

                {/* Content */}
                <h3 className="text-base sm:text-lg font-semibold text-[#1a2b4a] mb-2">
                  {step.title}
                </h3>
                <p className="text-[#64748b] text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Connector Line (hidden on mobile) */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gray-200" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceFlow;
