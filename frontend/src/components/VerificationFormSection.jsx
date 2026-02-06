import React, { useState } from 'react';
import { Shield, CheckCircle, ArrowRight } from 'lucide-react';
import { pricingPlans, verificationTypes } from '../data/mock';

const VerificationFormSection = () => {
  const [formData, setFormData] = useState({
    email: '',
    location: '',
    verificationType: 'Apartment / Property',
    notes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Verification request submitted! We\'ll contact you within 2 hours.');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="verify" className="py-24 bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2">
            <Shield className="w-4 h-4 text-emerald-500" />
            <span className="text-emerald-400 text-sm font-medium">Request Verification</span>
          </div>
        </div>

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Verify an Apartment,
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-400" style={{ fontFamily: "'Playfair Display', serif" }}>
            Product, or Vehicle
          </h2>
          <p className="text-gray-400 text-lg mt-6 max-w-xl mx-auto">
            Get real proof before you commit. Our verified agents will visit and document everything you need to know.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="order-2 lg:order-1">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white text-sm font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full bg-gray-900/50 border border-gray-800 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">Location / Listing URL</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Address or listing link"
                  className="w-full bg-gray-900/50 border border-gray-800 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">Verification Type</label>
                <select
                  name="verificationType"
                  value={formData.verificationType}
                  onChange={handleChange}
                  className="w-full bg-gray-900/50 border border-gray-800 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-emerald-500/50 transition-colors appearance-none cursor-pointer"
                >
                  {verificationTypes.map((type) => (
                    <option key={type} value={type} className="bg-gray-900">
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">Additional Notes (Optional)</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Any specific things you'd like verified?"
                  className="w-full bg-gray-900/50 border border-gray-800 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-500 text-black font-semibold py-4 rounded-full hover:bg-emerald-400 transition-all hover:shadow-lg hover:shadow-emerald-500/30 flex items-center justify-center gap-2 group"
              >
                Request Verification
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-gray-500 text-center text-sm">
                Starting at $25. We'll contact you with a quote within 2 hours.
              </p>
            </form>
          </div>

          {/* Pricing Cards */}
          <div className="order-1 lg:order-2 space-y-4">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-gray-900/50 border rounded-2xl p-6 transition-all hover:transform hover:scale-[1.01] ${
                  plan.popular ? 'border-emerald-500/50' : 'border-gray-800'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-6">
                    <span className="bg-emerald-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {plan.name}
                    </h3>
                    <p className="text-gray-500 text-sm">{plan.turnaround}</p>
                  </div>
                  <div className="text-3xl font-bold text-emerald-400">{plan.price}</div>
                </div>
                <div className="flex flex-wrap gap-4">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerificationFormSection;
