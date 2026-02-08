import React from 'react';
import { Check, Zap } from 'lucide-react';

const plans = [
  {
    id: 'quick_check',
    name: 'Quick Check',
    price: 9,
    turnaround: '2-3 hours',
    description: 'Does this place actually exist?',
    features: [
      '10-15 exterior photos',
      'Building entrance check',
      'GPS verification',
      'Brief summary report'
    ],
    popular: false
  },
  {
    id: 'live_walkthrough',
    name: 'Live Walkthrough',
    price: 19,
    turnaround: '3-5 hours',
    description: 'Full verification before you commit',
    features: [
      '25-40 photos',
      '5-10 min video tour',
      'Full interior inspection',
      'Condition report',
      'Listing comparison'
    ],
    popular: true
  },
  {
    id: 'deep_verify',
    name: 'Deep Verify',
    price: 39,
    turnaround: 'Same day',
    description: 'Complete peace of mind',
    features: [
      '50+ photos',
      '15-20 min video',
      'Live video call option',
      'Detailed inspection',
      'Neighborhood check',
      'Premium certificate'
    ],
    popular: false
  }
];

const PricingSection = ({ onSelectPlan }) => {
  return (
    <section id="pricing" className="py-20 px-6 bg-[#FAFBFC]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2b4a] mb-4">
            Choose Your Package
          </h2>
          <p className="text-lg text-[#64748b] max-w-xl mx-auto">
            Select the verification level that fits your needs
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.id}
              data-testid={`pricing-card-${plan.id}`}
              className={`relative bg-white rounded-2xl p-6 border-2 transition-all hover:shadow-xl ${
                plan.popular 
                  ? 'border-[#059669] shadow-lg shadow-[#059669]/10' 
                  : 'border-gray-100 hover:border-[#059669]/30'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-[#059669] text-white text-xs font-bold px-4 py-1 rounded-full">
                    MOST POPULAR
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6 pt-2">
                <h3 className="text-xl font-bold text-[#1a2b4a] mb-2">
                  {plan.name}
                </h3>
                <p className="text-[#64748b] text-sm italic mb-4">
                  "{plan.description}"
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-[#059669]">€{plan.price}</span>
                </div>
                <div className="flex items-center justify-center gap-1 mt-2 text-[#64748b]">
                  <Zap className="w-4 h-4" />
                  <span className="text-sm">{plan.turnaround}</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-6">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
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
                data-testid={`select-plan-${plan.id}`}
                className={`w-full py-3 rounded-xl font-semibold transition-all ${
                  plan.popular
                    ? 'bg-[#059669] text-white hover:bg-[#047857]'
                    : 'bg-[#E8F5F0] text-[#059669] hover:bg-[#059669] hover:text-white'
                }`}
              >
                Select Package
              </button>
            </div>
          ))}
        </div>

        {/* Trust Note */}
        <p className="text-center text-[#64748b] text-sm mt-8">
          All packages include GPS verification and timestamped proof
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
