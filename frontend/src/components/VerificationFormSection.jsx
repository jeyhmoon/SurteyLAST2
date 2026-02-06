import React, { useState } from 'react';
import { Shield, CheckCircle, ArrowRight, MapPin, Clock, Check, Zap } from 'lucide-react';
import { pricingPlans, verificationTypes, pragueDistricts } from '../data/mock';
import { useLanguage } from '../context/LanguageContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const VerificationFormSection = () => {
  const { language, t } = useLanguage();
  const navigate = useNavigate();
  const [selectedPackage, setSelectedPackage] = useState('live_walkthrough');
  const [rushDelivery, setRushDelivery] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    location: '',
    district: pragueDistricts[0],
    verificationType: language === 'tr' ? 'Daire / Mülk' : 'Apartment / Property',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const packageIds = {
    'Quick Check': 'quick_check',
    'Hızlı Kontrol': 'quick_check',
    'Live Walkthrough': 'live_walkthrough',
    'Canlı Tur': 'live_walkthrough',
    'Deep Verify': 'deep_verify',
    'Derin Doğrulama': 'deep_verify'
  };

  const getSelectedPackageDetails = () => {
    return pricingPlans.find(p => 
      packageIds[p.name] === selectedPackage || packageIds[p.nameTr] === selectedPackage
    );
  };

  const calculateTotalPrice = () => {
    const pkg = getSelectedPackageDetails();
    if (!pkg) return 0;
    const basePrice = parseFloat(pkg.price.replace('€', ''));
    return rushDelivery ? basePrice + 5 : basePrice;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      // Submit to backend API
      const orderData = {
        customer_email: formData.email,
        customer_name: formData.name || null,
        location: formData.location,
        district: formData.district,
        verification_type: formData.verificationType,
        package_id: selectedPackage,
        notes: formData.notes || null,
        rush: rushDelivery
      };

      const response = await axios.post(`${API}/orders`, orderData);
      
      if (response.data && response.data.id) {
        // Store order ID for thank you page
        sessionStorage.setItem('lastOrderId', response.data.id);
        sessionStorage.setItem('lastOrderPackage', getSelectedPackageDetails()?.name || selectedPackage);
        sessionStorage.setItem('lastOrderPrice', calculateTotalPrice().toString());
        
        // Navigate to thank you page
        navigate('/thank-you');
      }
    } catch (error) {
      console.error('Order submission error:', error);
      setSubmitError(
        language === 'tr' 
          ? 'Sipariş gönderilemedi. Lütfen tekrar deneyin.' 
          : 'Failed to submit order. Please try again.'
      );
      
      // Fallback to email if API fails
      const pkg = getSelectedPackageDetails();
      const subject = encodeURIComponent(`Surtey Order - ${pkg?.name} - €${calculateTotalPrice()}`);
      const body = encodeURIComponent(
        `NEW VERIFICATION ORDER\n` +
        `========================\n\n` +
        `Package: ${pkg?.name} (€${calculateTotalPrice()})\n` +
        `Rush Delivery: ${rushDelivery ? 'Yes (+€5)' : 'No'}\n\n` +
        `Customer: ${formData.name || 'Not provided'}\n` +
        `Email: ${formData.email}\n` +
        `Location: ${formData.location}\n` +
        `District: ${formData.district}\n` +
        `Type: ${formData.verificationType}\n` +
        `Notes: ${formData.notes || 'None'}\n\n` +
        `Submitted: ${new Date().toLocaleString()}`
      );
      
      window.location.href = `mailto:getsurtey@gmail.com?subject=${subject}&body=${body}`;
    } finally {
      setIsSubmitting(false);
    }
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
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            {t.form.title1}
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-400" style={{ fontFamily: "'Playfair Display', serif" }}>
            {t.form.title2}
          </h2>
          <p className="text-gray-400 text-lg mt-6 max-w-xl mx-auto">
            {t.form.subtitle}
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-cyan-400">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">🇨🇿 Prague, Czech Republic</span>
          </div>
        </div>

        {/* Package Selection */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-white text-center mb-6">
            {language === 'tr' ? '1. Paket Seçin' : '1. Select Your Package'}
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {pricingPlans.map((plan, index) => {
              const pkgId = packageIds[plan.name];
              const isSelected = selectedPackage === pkgId;
              
              return (
                <div
                  key={index}
                  onClick={() => setSelectedPackage(pkgId)}
                  className={`relative bg-gray-900/50 border-2 rounded-2xl p-6 cursor-pointer transition-all hover:transform hover:scale-[1.02] ${
                    isSelected 
                      ? 'border-emerald-500 shadow-lg shadow-emerald-500/20' 
                      : 'border-gray-800 hover:border-gray-700'
                  }`}
                >
                  {/* Selection indicator */}
                  <div className={`absolute top-4 right-4 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                    isSelected 
                      ? 'border-emerald-500 bg-emerald-500' 
                      : 'border-gray-600'
                  }`}>
                    {isSelected && <Check className="w-4 h-4 text-black" />}
                  </div>

                  {plan.popular && (
                    <div className="absolute -top-3 left-6">
                      <span className="bg-emerald-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                        {t.form.mostPopular}
                      </span>
                    </div>
                  )}

                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {language === 'tr' ? plan.nameTr : plan.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-500 text-sm">{language === 'tr' ? plan.turnaroundTr : plan.turnaround}</span>
                    </div>
                  </div>

                  <div className="text-3xl font-bold text-emerald-400 mb-4">{plan.price}</div>

                  <p className="text-gray-400 text-sm mb-4 italic">
                    "{language === 'tr' ? plan.descriptionTr : plan.description}"
                  </p>

                  <div className="space-y-2">
                    {(language === 'tr' ? plan.featuresTr : plan.features).slice(0, 4).map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Rush Delivery Option */}
          <div className="mt-6 flex justify-center">
            <label 
              className={`flex items-center gap-3 bg-gray-900/50 border-2 rounded-xl px-6 py-4 cursor-pointer transition-all ${
                rushDelivery ? 'border-amber-500' : 'border-gray-800 hover:border-gray-700'
              }`}
              onClick={() => setRushDelivery(!rushDelivery)}
            >
              <div className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-all ${
                rushDelivery ? 'border-amber-500 bg-amber-500' : 'border-gray-600'
              }`}>
                {rushDelivery && <Check className="w-4 h-4 text-black" />}
              </div>
              <Zap className={`w-5 h-5 ${rushDelivery ? 'text-amber-500' : 'text-gray-500'}`} />
              <div>
                <span className={`font-semibold ${rushDelivery ? 'text-amber-400' : 'text-white'}`}>
                  {language === 'tr' ? 'Acil Teslimat' : 'Rush Delivery'}
                </span>
                <span className="text-gray-500 text-sm ml-2">+€5</span>
              </div>
              <span className="text-gray-500 text-sm">
                ({language === 'tr' ? 'Süreyi yarıya indirir' : 'Cuts turnaround in half'})
              </span>
            </label>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="order-2 lg:order-1">
            <h3 className="text-xl font-semibold text-white mb-6">
              {language === 'tr' ? '2. Detayları Doldurun' : '2. Fill in Details'}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    {language === 'tr' ? 'Adınız (İsteğe bağlı)' : 'Your Name (Optional)'}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={language === 'tr' ? 'Adınız' : 'Your name'}
                    className="w-full bg-gray-900/50 border border-gray-800 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">{t.form.email} *</label>
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
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">{t.form.location} *</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder={language === 'tr' ? 'Tam adres veya ilan linki (Bezrealitky, Sreality, vb.)' : 'Full address or listing URL (Bezrealitky, Sreality, etc.)'}
                  className="w-full bg-gray-900/50 border border-gray-800 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 transition-colors"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">{t.form.district || 'District'} *</label>
                  <select
                    name="district"
                    value={formData.district}
                    onChange={handleChange}
                    className="w-full bg-gray-900/50 border border-gray-800 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-emerald-500/50 transition-colors appearance-none cursor-pointer"
                  >
                    {pragueDistricts.map((district) => (
                      <option key={district} value={district} className="bg-gray-900">
                        {district}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">{t.form.type} *</label>
                  <select
                    name="verificationType"
                    value={formData.verificationType}
                    onChange={handleChange}
                    className="w-full bg-gray-900/50 border border-gray-800 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-emerald-500/50 transition-colors appearance-none cursor-pointer"
                  >
                    {verificationTypes.map((type) => (
                      <option key={type.en} value={language === 'tr' ? type.tr : type.en} className="bg-gray-900">
                        {language === 'tr' ? type.tr : type.en}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">{t.form.notes}</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={3}
                  placeholder={language === 'tr' ? 'Özellikle kontrol etmemizi istediğiniz şeyler (örn. mutfak aletleri, banyo durumu, vb.)' : 'Anything specific to check (e.g., kitchen appliances, bathroom condition, etc.)'}
                  className="w-full bg-gray-900/50 border border-gray-800 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 transition-colors resize-none"
                />
              </div>

              {submitError && (
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 text-red-400 text-sm">
                  {submitError}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-emerald-500 text-black font-semibold py-4 rounded-full hover:bg-emerald-400 transition-all hover:shadow-lg hover:shadow-emerald-500/30 flex items-center justify-center gap-2 group text-lg disabled:opacity-50"
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
                {language === 'tr' 
                  ? '2 saat içinde teklif ile yanıt vereceğiz.' 
                  : "We'll respond with a quote within 2 hours."}
              </p>
            </form>
          </div>

          {/* Order Summary */}
          <div className="order-1 lg:order-2">
            <h3 className="text-xl font-semibold text-white mb-6">
              {language === 'tr' ? 'Sipariş Özeti' : 'Order Summary'}
            </h3>
            
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 sticky top-32">
              {/* Selected Package */}
              <div className="border-b border-gray-800 pb-4 mb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-bold text-white">
                      {getSelectedPackageDetails()?.name || selectedPackage}
                    </h4>
                    <div className="flex items-center gap-2 mt-1">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-500 text-sm">
                        {getSelectedPackageDetails()?.turnaround}
                        {rushDelivery && <span className="text-amber-400"> → {language === 'tr' ? 'Yarı süre' : 'Half time'}</span>}
                      </span>
                    </div>
                  </div>
                  <div className="text-xl font-bold text-white">
                    {getSelectedPackageDetails()?.price}
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-2 mb-4">
                {getSelectedPackageDetails()?.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Rush Delivery */}
              {rushDelivery && (
                <div className="flex justify-between items-center border-t border-gray-800 pt-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-amber-500" />
                    <span className="text-amber-400">{language === 'tr' ? 'Acil Teslimat' : 'Rush Delivery'}</span>
                  </div>
                  <span className="text-white">+€5</span>
                </div>
              )}

              {/* Total */}
              <div className="border-t border-gray-800 pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-white">
                    {language === 'tr' ? 'Toplam' : 'Total'}
                  </span>
                  <span className="text-2xl font-bold text-emerald-400">€{calculateTotalPrice()}</span>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="mt-6 pt-4 border-t border-gray-800">
                <div className="flex flex-wrap gap-3 justify-center">
                  <div className="flex items-center gap-1 text-gray-500 text-xs">
                    <Shield className="w-3 h-3" />
                    <span>GPS Verified</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500 text-xs">
                    <CheckCircle className="w-3 h-3" />
                    <span>Timestamped</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500 text-xs">
                    <MapPin className="w-3 h-3" />
                    <span>Prague Local</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerificationFormSection;
