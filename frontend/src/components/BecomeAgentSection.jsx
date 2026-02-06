import React from 'react';
import { Zap, DollarSign, Globe, ArrowRight } from 'lucide-react';
import { agentBenefits } from '../data/mock';

const iconMap = {
  Zap: Zap,
  DollarSign: DollarSign,
  Globe: Globe
};

const BecomeAgentSection = () => {
  return (
    <section id="agent" className="py-24 bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1612994629424-da39618ff40c?crop=entropy&cs=srgb&fm=jpg&q=85&w=800"
                alt="Surety Agent"
                className="w-full h-[500px] object-cover"
              />
              {/* Stats Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-gray-900/90 backdrop-blur-md rounded-xl p-4 border border-gray-800">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-gray-400 text-sm">Average Monthly Earnings</div>
                    <div className="text-2xl font-bold text-emerald-400">$3,500+</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">Per Verification</div>
                    <div className="text-2xl font-bold text-white">$35</div>
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
              <span className="text-emerald-400 text-sm font-medium">Become an Agent</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Earn by
            </h2>
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-400 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Verifying Truth
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Join our network of trusted local agents. Flexible hours, great earnings, meaningful work fighting fraud.
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
                      <h4 className="text-white font-semibold mb-1">{benefit.title}</h4>
                      <p className="text-gray-500 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 bg-transparent border border-emerald-500 text-emerald-400 font-semibold px-8 py-4 rounded-full hover:bg-emerald-500/10 transition-all group"
            >
              Apply to Become an Agent
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeAgentSection;
