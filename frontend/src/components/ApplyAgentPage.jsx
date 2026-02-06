import React, { useState } from 'react';
import { Shield, ArrowRight, Zap, DollarSign, Globe, CheckCircle, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { agentBenefits } from '../data/mock';
import Navbar from './Navbar';
import Footer from './Footer';

const iconMap = {
  Zap: Zap,
  DollarSign: DollarSign,
  Globe: Globe
};

// Country codes for phone dropdown
const countryCodes = [
  { code: '+420', country: 'Czechia', flag: '🇨🇿' },
  { code: '+90', country: 'Turkey', flag: '🇹🇷' },
  { code: '+49', country: 'Germany', flag: '🇩🇪' },
  { code: '+43', country: 'Austria', flag: '🇦🇹' },
  { code: '+48', country: 'Poland', flag: '🇵🇱' },
  { code: '+421', country: 'Slovakia', flag: '🇸🇰' },
  { code: '+44', country: 'UK', flag: '🇬🇧' },
  { code: '+33', country: 'France', flag: '🇫🇷' },
  { code: '+31', country: 'Netherlands', flag: '🇳🇱' },
  { code: '+39', country: 'Italy', flag: '🇮🇹' },
  { code: '+34', country: 'Spain', flag: '🇪🇸' },
  { code: '+1', country: 'USA/Canada', flag: '🇺🇸' },
];

const ApplyAgentPage = () => {
  const { language, t } = useLanguage();
  const navigate = useNavigate();
  const [selectedCountryCode, setSelectedCountryCode] = useState(countryCodes[0]); // Default: Czechia +420
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    experience: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create mailto link with form data (phone includes country code)
    const fullPhone = `${selectedCountryCode.code} ${formData.phone}`;
    const subject = encodeURIComponent('New Agent Application - Surtey');
    const body = encodeURIComponent(
      `New Agent Application\n\n` +
      `Full Name: ${formData.fullName}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${fullPhone}\n` +
      `City/Location: ${formData.city}\n` +
      `Experience: ${formData.experience || 'Not provided'}\n\n` +
      `Submitted at: ${new Date().toLocaleString()}`
    );
    
    // Open email client
    window.location.href = `mailto:getsurtey@gmail.com?subject=${subject}&body=${body}`;
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#0a0a0a]">
        <Navbar />
        <div className="min-h-screen flex items-center justify-center px-6 pt-24">
          <div className="max-w-lg w-full text-center">
            <div className="w-24 h-24 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-12 h-12 text-emerald-500" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              {language === 'tr' ? 'Başvuru Alındı!' : 'Application Received!'}
            </h1>
            <p className="text-gray-400 text-lg mb-8">
              {language === 'tr' 
                ? 'Başvurunuz değerlendirilmek üzere alındı. Kısa sürede sizinle iletişime geçeceğiz.' 
                : 'Your application has been received. We will contact you shortly.'}
            </p>
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center gap-2 bg-emerald-500 text-black font-semibold px-8 py-4 rounded-full hover:bg-emerald-400 transition-all group"
            >
              {t.thanks.backHome}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Form Section */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-6">
                <Shield className="w-4 h-4 text-emerald-500" />
                <span className="text-emerald-400 text-sm font-medium">{t.agentForm.title}</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                {t.agentForm.title}
              </h1>
              <p className="text-gray-400 text-lg mb-8">
                {t.agentForm.subtitle}
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">{t.agentForm.fullName}</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder={language === 'tr' ? 'Adınız Soyadınız' : 'John Doe'}
                    className="w-full bg-gray-900/50 border border-gray-800 rounded-xl px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 transition-colors text-base"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">{t.agentForm.email}</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full bg-gray-900/50 border border-gray-800 rounded-xl px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 transition-colors text-base"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">{t.agentForm.phone}</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+90 555 123 4567"
                    className="w-full bg-gray-900/50 border border-gray-800 rounded-xl px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 transition-colors text-base"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">{t.agentForm.city}</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder={language === 'tr' ? 'İstanbul, Türkiye' : 'Istanbul, Turkey'}
                    className="w-full bg-gray-900/50 border border-gray-800 rounded-xl px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 transition-colors text-base"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">{t.agentForm.experience}</label>
                  <textarea
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    rows={4}
                    placeholder={language === 'tr' ? 'İlgili deneyimlerinizi kısaca anlatın...' : 'Briefly describe your relevant experience...'}
                    className="w-full bg-gray-900/50 border border-gray-800 rounded-xl px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 transition-colors resize-none text-base"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-emerald-500 text-black font-semibold py-4 rounded-full hover:bg-emerald-400 transition-all hover:shadow-lg hover:shadow-emerald-500/30 flex items-center justify-center gap-2 group text-lg disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>{language === 'tr' ? 'Gönderiliyor...' : 'Submitting...'}</span>
                  ) : (
                    <>
                      {t.agentForm.submit}
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Benefits Section */}
            <div className="order-1 lg:order-2 lg:sticky lg:top-32">
              <div className="bg-gray-900/30 border border-gray-800 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {t.agentForm.benefits}
                </h3>

                {/* Earnings Highlight */}
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6 mb-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-400 mb-2">$3,500+</div>
                    <div className="text-gray-400">{t.agent.avgEarnings}</div>
                  </div>
                </div>

                {/* Benefits List */}
                <div className="space-y-4">
                  {agentBenefits.map((benefit, index) => {
                    const IconComponent = iconMap[benefit.icon];
                    return (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-5 h-5 text-emerald-500" />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-1">
                            {language === 'tr' ? benefit.titleTr : benefit.title}
                          </h4>
                          <p className="text-gray-500 text-sm">
                            {language === 'tr' ? benefit.descriptionTr : benefit.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ApplyAgentPage;
