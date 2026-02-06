import React from 'react';
import { AlertTriangle, Building, Car, Package } from 'lucide-react';
import { crisisStats } from '../data/mock';

const iconMap = {
  AlertTriangle: AlertTriangle,
  Building: Building,
  Car: Car,
  Package: Package
};

const TrustCrisisSection = () => {
  return (
    <section id="problem" className="py-24 bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-full px-4 py-2">
            <AlertTriangle className="w-4 h-4 text-red-500" />
            <span className="text-red-400 text-sm font-medium">The Trust Crisis</span>
          </div>
        </div>

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            In 2024, You Can't Trust
          </h2>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
            <span className="text-red-500">What You See Online</span>
          </h2>
          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
            AI can generate fake apartment photos in seconds. Deepfake videos are indistinguishable from real. Scammers exploit the distance gap.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {crisisStats.map((stat, index) => {
            const IconComponent = iconMap[stat.icon];
            return (
              <div
                key={index}
                className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-all hover:transform hover:scale-[1.02] group"
              >
                <div className="mb-4">
                  <IconComponent className="w-8 h-8 text-red-500" />
                </div>
                <div className="text-4xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {stat.value}
                </div>
                <div className="text-white font-semibold mb-1">{stat.label}</div>
                <div className="text-gray-500 text-sm">{stat.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustCrisisSection;
