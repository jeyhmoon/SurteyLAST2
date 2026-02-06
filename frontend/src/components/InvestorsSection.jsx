import React from 'react';
import { TrendingUp } from 'lucide-react';
import { investorStats, futureIntegrations } from '../data/mock';

const InvestorsSection = () => {
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
            <span className="text-gray-300 text-sm font-medium">For Investors</span>
          </div>
        </div>

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Join the Future of
          </h2>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Digital Trust</span>
          </h2>
          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
            We're building the trust layer of the internet. A $50B+ market opportunity waiting to be disrupted.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {investorStats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 text-center hover:border-gray-700 transition-all"
            >
              <div className="text-4xl font-bold text-emerald-400 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                {stat.value}
              </div>
              <div className="text-white font-semibold mb-1">{stat.label}</div>
              <div className="text-gray-500 text-sm">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="text-center mb-16">
          <blockquote className="text-2xl md:text-3xl text-gray-300 italic max-w-3xl mx-auto" style={{ fontFamily: "'Playfair Display', serif" }}>
            "We're not just building a service.<br />
            <span className="text-white font-semibold">We're building the TRUST LAYER of the internet."</span>
          </blockquote>
        </div>

        {/* Description */}
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Scalable. AI-augmented. Global API. The infrastructure for verified truth in the age of digital deception.
        </p>

        {/* Future Integrations */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <span className="text-gray-500 text-sm">FUTURE INTEGRATIONS:</span>
          {futureIntegrations.map((integration, index) => (
            <span
              key={index}
              className="text-gray-400 text-sm bg-gray-800/50 px-4 py-2 rounded-lg"
            >
              {integration}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="mailto:getsurtey@gmail.com"
            className="inline-flex items-center gap-2 bg-emerald-500 text-black font-semibold px-8 py-4 rounded-full hover:bg-emerald-400 transition-all hover:shadow-lg hover:shadow-emerald-500/30"
          >
            Contact for Investment Deck
          </a>
        </div>
      </div>
    </section>
  );
};

export default InvestorsSection;
