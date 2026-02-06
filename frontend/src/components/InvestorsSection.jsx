import React, { useState } from 'react';
import { TrendingUp, ExternalLink, BarChart3, Target, Percent, DollarSign } from 'lucide-react';
import { investorStats, futureIntegrations } from '../data/mock';
import { useLanguage } from '../context/LanguageContext';

const iconMap = {
  0: Target,
  1: BarChart3,
  2: Percent,
  3: DollarSign
};

const InvestorsSection = () => {
  const { language, t } = useLanguage();
  const [hoveredStat, setHoveredStat] = useState(null);

  const handleInvestorContact = () => {
    const subject = encodeURIComponent('Investment Deck Request - Surtey');
    const body = encodeURIComponent(
      `Hello Surtey Team,\n\n` +
      `I am interested in learning more about investment opportunities with Surtey.\n\n` +
      `Please send me the investment deck and any relevant materials.\n\n` +
      `Best regards`
    );
    window.location.href = `mailto:getsurtey@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="investors" className="py-24 bg-[#0a0a0a] relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1535391879778-3bae11d29a24?crop=entropy&cs=srgb&fm=jpg&q=85&w=1920"
          alt="City background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-[#0a0a0a]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 bg-gray-800/50 border border-gray-700 rounded-full px-4 py-2">
            <TrendingUp className="w-4 h-4 text-cyan-400" />
            <span className="text-gray-300 text-sm font-medium">{t.investors.badge}</span>
          </div>
        </div>

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            {t.investors.title1}
          </h2>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">{t.investors.title2}</span>
          </h2>
          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
            {t.investors.subtitle}
          </p>
        </div>

        {/* Interactive Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {investorStats.map((stat, index) => {
            const IconComponent = iconMap[index];
            return (
              <div
                key={index}
                className={`bg-gray-900/50 border rounded-2xl p-6 text-center transition-all cursor-pointer ${
                  hoveredStat === index 
                    ? 'border-emerald-500/50 scale-105 shadow-lg shadow-emerald-500/10' 
                    : 'border-gray-800 hover:border-gray-700'
                }`}
                onMouseEnter={() => setHoveredStat(index)}
                onMouseLeave={() => setHoveredStat(null)}
              >
                <div className={`w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center transition-colors ${
                  hoveredStat === index ? 'bg-emerald-500/20' : 'bg-gray-800/50'
                }`}>
                  <IconComponent className={`w-6 h-6 transition-colors ${
                    hoveredStat === index ? 'text-emerald-400' : 'text-gray-500'
                  }`} />
                </div>
                <div className="text-4xl font-bold text-emerald-400 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {stat.value}
                </div>
                <div className="text-white font-semibold mb-1">
                  {language === 'tr' && stat.labelTr ? stat.labelTr : stat.label}
                </div>
                <div className="text-gray-500 text-sm">
                  {language === 'tr' ? stat.descriptionTr : stat.description}
                </div>
              </div>
            );
          })}
        </div>

        {/* Quote */}
        <div className="text-center mb-16">
          <blockquote className="text-2xl md:text-3xl text-gray-300 italic max-w-3xl mx-auto" style={{ fontFamily: "'Playfair Display', serif" }}>
            {t.investors.quote1}<br />
            <span className="text-white font-semibold">{t.investors.quote2}</span>
          </blockquote>
        </div>

        {/* Description */}
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          {t.investors.description}
        </p>

        {/* Future Integrations with Logos */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <span className="text-gray-500 text-sm">{t.investors.futureIntegrations}</span>
          {futureIntegrations.map((integration, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-gray-400 text-sm bg-gray-800/50 px-4 py-2 rounded-lg hover:bg-gray-700/50 transition-colors"
            >
              {integration.logo ? (
                <img 
                  src={integration.logo} 
                  alt={integration.name} 
                  className="h-5 w-auto object-contain brightness-0 invert opacity-70"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              ) : null}
              <span>{integration.name}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={handleInvestorContact}
            className="inline-flex items-center gap-2 bg-emerald-500 text-black font-semibold px-8 py-4 rounded-full hover:bg-emerald-400 transition-all hover:shadow-lg hover:shadow-emerald-500/30"
          >
            {t.investors.contactBtn}
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default InvestorsSection;
