import React, { useState } from 'react';
import { Shield, CheckCircle, ArrowRight } from 'lucide-react';
import { pricingPlans, verificationTypes } from '../data/mock';
import { useLanguage } from '../context/LanguageContext';
import { useNavigate } from 'react-router-dom';

const VerificationFormSection = () => {
  const { language, t } = useLanguage();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    location: '',
    verificationType: language === 'tr' ? 'Daire / Mülk' : 'Apartment / Property',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`New Verification Request - ${formData.verificationType}`);
    const body = encodeURIComponent(
      `New Verification Request\n\n` +
      `Email: ${formData.email}\n` +
      `Location/URL: ${formData.location}\n` +
      `Type: ${formData.verificationType}\n` +
      `Notes: ${formData.notes || 'None'}\n\n` +
      `Submitted at: ${new Date().toLocaleString()}`
    );
    
    // Open email client
    window.location.href = `mailto:getsurtey@gmail.com?subject=${subject}&body=${body}`;
    
    // Navigate to thank you page after short delay
    setTimeout(() => {
      navigate('/thank-you');
    }, 500);
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
            <span className="text-emerald-400 text-sm font-medium">{t.form.badge}</span>
          </div>
        </div>

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            {t.form.title1}
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-400" style={{ fontFamily: "'Playfair Display', serif" }}>
            {t.form.title2}
          </h2>
          <p className="text-gray-400 text-lg mt-6 max-w-xl mx-auto">
            {t.form.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="order-2 lg:order-1">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white text-sm font-medium mb-2">{t.form.email}</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full bg-gray-900/50 border border-gray-800 rounded-xl px-4 py-4 md:py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 transition-colors text-base"
                  required
                />
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">{t.form.location}</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder={language === 'tr' ? 'Adres veya ilan linki' : 'Address or listing link'}
                  className="w-full bg-gray-900/50 border border-gray-800 rounded-xl px-4 py-4 md:py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 transition-colors text-base"
                  required
                />
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">{t.form.type}</label>
                <select
                  name="verificationType"
                  value={formData.verificationType}
                  onChange={handleChange}
                  className="w-full bg-gray-900/50 border border-gray-800 rounded-xl px-4 py-4 md:py-3.5 text-white focus:outline-none focus:border-emerald-500/50 transition-colors appearance-none cursor-pointer text-base"
                >
                  {verificationTypes.map((type) => (
                    <option key={type.en} value={language === 'tr' ? type.tr : type.en} className="bg-gray-900">
                      {language === 'tr' ? type.tr : type.en}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">{t.form.notes}</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={4}
                  placeholder={language === 'tr' ? 'Doğrulanmasını istediğiniz özel detaylar?' : "Any specific things you'd like verified?"}
                  className="w-full bg-gray-900/50 border border-gray-800 rounded-xl px-4 py-4 md:py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 transition-colors resize-none text-base"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-emerald-500 text-black font-semibold py-4 md:py-4 rounded-full hover:bg-emerald-400 transition-all hover:shadow-lg hover:shadow-emerald-500/30 flex items-center justify-center gap-2 group text-base md:text-lg disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>{language === 'tr' ? 'Gönderiliyor...' : 'Submitting...'}</span>
                ) : (
                  <>
                    {t.form.submit}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              <p className="text-gray-500 text-center text-sm">
                {t.form.startingAt}
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
                      {t.form.mostPopular}
                    </span>
                  </div>
                )}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {language === 'tr' ? plan.nameTr : plan.name}
                    </h3>
                    <p className="text-gray-500 text-sm">{language === 'tr' ? plan.turnaroundTr : plan.turnaround}</p>
                  </div>
                  <div className="text-3xl font-bold text-emerald-400">{plan.price}</div>
                </div>
                <div className="flex flex-wrap gap-4">
                  {(language === 'tr' ? plan.featuresTr : plan.features).map((feature, i) => (
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
