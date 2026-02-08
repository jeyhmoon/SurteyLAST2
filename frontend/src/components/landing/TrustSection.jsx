import React from 'react';
import { Shield, Users, Eye } from 'lucide-react';

const trustItems = [
  {
    icon: Shield,
    title: 'Safety & Fraud Protection',
    description: 'Every verification includes GPS coordinates, timestamps, and tamper-proof documentation. We expose fake listings before you lose money.',
    color: '#059669'
  },
  {
    icon: Users,
    title: 'Real Local Verification',
    description: 'Our verified local agents physically visit locations. No AI, no stock photos — just real humans providing authentic proof.',
    color: '#0891b2'
  },
  {
    icon: Eye,
    title: 'Transparent Process',
    description: 'Track your verification in real-time. Get detailed reports with photos, videos, and honest assessments delivered to your inbox.',
    color: '#7c3aed'
  }
];

const TrustSection = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2b4a] mb-4">
            Why Trust Surtey?
          </h2>
          <p className="text-lg text-[#64748b] max-w-xl mx-auto">
            We're building the trust layer for remote transactions
          </p>
        </div>

        {/* Trust Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-[#FAFBFC] border border-gray-100 hover:shadow-lg transition-all group"
              >
                {/* Icon */}
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${item.color}15` }}
                >
                  <Icon className="w-8 h-8" style={{ color: item.color }} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-[#1a2b4a] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#64748b] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-[#FEF3C7] border border-[#F59E0B]/30 rounded-full px-6 py-3">
            <span className="text-[#92400E] text-sm font-medium">
              🛡️ 100% money-back guarantee if we can't verify your request
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
