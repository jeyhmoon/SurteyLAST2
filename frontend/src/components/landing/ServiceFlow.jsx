import React from 'react';
import { FileText, CreditCard, MapPin, FileCheck } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    number: '01',
    title: 'Submit Request',
    description: 'Send us the listing URL or address you want verified. We respond within 2 hours.',
    color: '#059669'
  },
  {
    icon: CreditCard,
    number: '02',
    title: 'Secure Payment',
    description: 'Pay securely via PayPal. Your payment is protected until verification is complete.',
    color: '#0891b2'
  },
  {
    icon: MapPin,
    number: '03',
    title: 'Local Verification',
    description: 'Our verified local agent visits the location and documents everything with GPS proof.',
    color: '#7c3aed'
  },
  {
    icon: FileCheck,
    number: '04',
    title: 'Receive Report',
    description: 'Get your detailed verification report with photos, video, and our findings via email.',
    color: '#059669'
  }
];

const ServiceFlow = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2b4a] mb-4">
            How It Works
          </h2>
          <p className="text-lg text-[#64748b] max-w-xl mx-auto">
            Simple, transparent process from request to report
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative bg-[#FAFBFC] rounded-2xl p-6 border border-gray-100 hover:border-[#059669]/30 hover:shadow-lg transition-all group"
              >
                {/* Step Number */}
                <div 
                  className="absolute -top-3 -right-3 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white"
                  style={{ backgroundColor: step.color }}
                >
                  {step.number}
                </div>

                {/* Icon */}
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${step.color}15` }}
                >
                  <Icon className="w-7 h-7" style={{ color: step.color }} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-[#1a2b4a] mb-2">
                  {step.title}
                </h3>
                <p className="text-[#64748b] text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Connector Line (hidden on mobile) */}
                {index < steps.length - 1 && (
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
