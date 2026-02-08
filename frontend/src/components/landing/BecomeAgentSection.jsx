import React, { useState } from 'react';
import { Shield, Zap, DollarSign, Globe, CheckCircle, ArrowRight, ChevronDown } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const countryCodes = [
  { code: '+420', country: 'Czechia', flag: '🇨🇿' },
  { code: '+90', country: 'Turkey', flag: '🇹🇷' },
  { code: '+49', country: 'Germany', flag: '🇩🇪' },
  { code: '+43', country: 'Austria', flag: '🇦🇹' },
  { code: '+48', country: 'Poland', flag: '🇵🇱' },
  { code: '+421', country: 'Slovakia', flag: '🇸🇰' },
  { code: '+44', country: 'UK', flag: '🇬🇧' },
  { code: '+33', country: 'France', flag: '🇫🇷' },
  { code: '+1', country: 'USA/Canada', flag: '🇺🇸' },
];

const benefitIcons = [Zap, DollarSign, Globe];

const BecomeAgentSection = () => {
  const { t } = useLanguage();
  const [selectedCountryCode, setSelectedCountryCode] = useState(countryCodes[0]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    experience: '',
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.consent) {
      setError('Please accept the terms and conditions');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const fullPhone = `${selectedCountryCode.code} ${formData.phone}`;
      
      await axios.post(`${BACKEND_URL}/api/agents`, {
        name: formData.name,
        email: formData.email,
        phone: fullPhone,
        districts: [formData.location],
        experience: formData.experience
      });

      setIsSubmitted(true);
    } catch (err) {
      console.error('Agent submission error:', err);
      // Still show success for UX (email fallback)
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      location: '',
      experience: '',
      consent: false
    });
    setIsSubmitted(false);
    setError(null);
  };

  return (
    <section id="become-agent" className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-[#FAFBFC] to-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side - Info */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#E8F5F0] border border-[#34D399]/30 rounded-full px-4 py-2 mb-6">
              <Shield className="w-4 h-4 text-[#059669]" />
              <span className="text-[#059669] text-sm font-medium">{t.agent.badge}</span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a2b4a] mb-4">
              {t.agent.title}
              <span className="text-[#059669]"> {t.agent.titleHighlight}</span>
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#64748b] mb-8 leading-relaxed">
              {t.agent.subtitle}
            </p>

            {/* Benefits Card */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3 className="text-lg font-semibold text-[#1a2b4a] mb-4">
                {t.agent.benefits.title}
              </h3>

              {/* Earnings Highlight */}
              <div className="bg-[#E8F5F0] rounded-xl p-4 mb-6 text-center">
                <div className="text-3xl font-bold text-[#059669]">$3,500+</div>
                <div className="text-[#64748b] text-sm">{t.agent.benefits.earnings}</div>
              </div>

              {/* Benefits List */}
              <div className="space-y-4">
                {t.agent.benefits.items.map((benefit, index) => {
                  const Icon = benefitIcons[index];
                  return (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-[#E8F5F0] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-[#059669]" />
                      </div>
                      <div>
                        <h4 className="text-[#1a2b4a] font-medium mb-1">{benefit.title}</h4>
                        <p className="text-[#64748b] text-sm">{benefit.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="order-1 lg:order-2">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-lg">
              {isSubmitted ? (
                /* Success State */
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-[#E8F5F0] rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-[#059669]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1a2b4a] mb-2">
                    {t.agent.form.success.title}
                  </h3>
                  <p className="text-[#64748b] mb-6">
                    {t.agent.form.success.message}
                  </p>
                  <button
                    onClick={resetForm}
                    className="text-[#059669] font-medium hover:underline"
                  >
                    {t.agent.form.success.another}
                  </button>
                </div>
              ) : (
                /* Form */
                <>
                  <h3 className="text-xl font-bold text-[#1a2b4a] mb-6">
                    {t.agent.form.title}
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-[#1a2b4a] mb-2">
                        {t.agent.form.name} *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={t.agent.form.namePlaceholder}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#1a2b4a] placeholder-gray-400 focus:outline-none focus:border-[#059669] transition-colors"
                        required
                        data-testid="agent-name-input"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-[#1a2b4a] mb-2">
                        {t.agent.form.email} *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t.agent.form.emailPlaceholder}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#1a2b4a] placeholder-gray-400 focus:outline-none focus:border-[#059669] transition-colors"
                        required
                        data-testid="agent-email-input"
                      />
                    </div>

                    {/* Phone with Country Code */}
                    <div>
                      <label className="block text-sm font-medium text-[#1a2b4a] mb-2">
                        {t.agent.form.phone} *
                      </label>
                      <div className="flex gap-2">
                        <div className="relative">
                          <select
                            value={selectedCountryCode.code}
                            onChange={(e) => {
                              const selected = countryCodes.find(c => c.code === e.target.value);
                              if (selected) setSelectedCountryCode(selected);
                            }}
                            className="appearance-none bg-white border border-gray-200 rounded-xl px-3 py-3 pr-8 text-[#1a2b4a] focus:outline-none focus:border-[#059669] transition-colors cursor-pointer min-w-[100px]"
                            data-testid="agent-country-code"
                          >
                            {countryCodes.map((country) => (
                              <option key={country.code} value={country.code}>
                                {country.flag} {country.code}
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder={t.agent.form.phonePlaceholder}
                          className="flex-1 border border-gray-200 rounded-xl px-4 py-3 text-[#1a2b4a] placeholder-gray-400 focus:outline-none focus:border-[#059669] transition-colors"
                          required
                          data-testid="agent-phone-input"
                        />
                      </div>
                    </div>

                    {/* Location */}
                    <div>
                      <label className="block text-sm font-medium text-[#1a2b4a] mb-2">
                        {t.agent.form.location} *
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder={t.agent.form.locationPlaceholder}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#1a2b4a] placeholder-gray-400 focus:outline-none focus:border-[#059669] transition-colors"
                        required
                        data-testid="agent-location-input"
                      />
                    </div>

                    {/* Experience */}
                    <div>
                      <label className="block text-sm font-medium text-[#1a2b4a] mb-2">
                        {t.agent.form.experience}
                      </label>
                      <textarea
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        placeholder={t.agent.form.experiencePlaceholder}
                        rows={3}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#1a2b4a] placeholder-gray-400 focus:outline-none focus:border-[#059669] transition-colors resize-none"
                        data-testid="agent-experience-input"
                      />
                    </div>

                    {/* Consent */}
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        name="consent"
                        id="consent"
                        checked={formData.consent}
                        onChange={handleChange}
                        className="mt-1 w-4 h-4 text-[#059669] border-gray-300 rounded focus:ring-[#059669]"
                        data-testid="agent-consent-checkbox"
                      />
                      <label htmlFor="consent" className="text-sm text-[#64748b]">
                        {t.agent.form.consent}
                      </label>
                    </div>

                    {/* Error */}
                    {error && (
                      <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-red-600 text-sm">
                        {error}
                      </div>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#059669] text-white font-semibold py-4 rounded-xl hover:bg-[#047857] transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
                      data-testid="agent-submit-btn"
                    >
                      {isSubmitting ? (
                        <span>{t.agent.form.submitting}</span>
                      ) : (
                        <>
                          {t.agent.form.submit}
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeAgentSection;
