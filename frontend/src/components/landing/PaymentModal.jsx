import React, { useState } from 'react';
import { X, Shield, Lock, CreditCard, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const PaymentModal = ({ plan, onClose, onSuccess }) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    email: '',
    location: '',
    notes: ''
  });
  const [step, setStep] = useState(1); // 1: form, 2: payment
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleContinueToPayment = (e) => {
    e.preventDefault();
    if (formData.email && formData.location) {
      setStep(2);
    }
  };

  const handleStripePayment = async () => {
    setIsProcessing(true);
    setError(null);

    try {
      // Create order in backend
      const orderResponse = await axios.post(`${BACKEND_URL}/api/orders`, {
        customer_email: formData.email,
        customer_name: null,
        location: formData.location,
        district: 'Prague Center',
        verification_type: 'Property Verification',
        package_id: plan.id,
        notes: formData.notes || null,
        rush: false
      });

      const order = orderResponse.data;

      // Simulate successful payment for demo
      // In production, redirect to Stripe Checkout
      setTimeout(() => {
        onSuccess({
          orderId: order.id,
          payerEmail: formData.email,
          plan: plan,
          customerEmail: formData.email,
          location: formData.location,
          notes: formData.notes,
          status: 'COMPLETED',
          timestamp: new Date().toISOString()
        });
      }, 1500);

    } catch (err) {
      console.error('Order creation error:', err);
      setError(t.payment.error || 'Payment failed. Please try again.');
      setIsProcessing(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-[#059669] text-white p-5 sm:p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg sm:text-xl font-semibold">
              {step === 1 ? t.payment.detailsTitle : t.payment.paymentTitle}
            </h2>
            <button 
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
              data-testid="close-payment-modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {/* Plan Summary */}
          <div className="bg-white/10 rounded-xl p-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">{plan.name}</p>
                <p className="text-white/70 text-sm">{plan.turnaround} {t.payment.turnaround}</p>
              </div>
              <div className="text-2xl font-bold">€{plan.price}</div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6">
          {step === 1 ? (
            /* Step 1: Form */
            <form onSubmit={handleContinueToPayment} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#1a2b4a] mb-2">
                  {t.payment.email} *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={t.payment.emailPlaceholder}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#1a2b4a] placeholder-gray-400 focus:outline-none focus:border-[#059669] transition-colors"
                  required
                  data-testid="payment-email-input"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1a2b4a] mb-2">
                  {t.payment.address} *
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder={t.payment.addressPlaceholder}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#1a2b4a] placeholder-gray-400 focus:outline-none focus:border-[#059669] transition-colors"
                  required
                  data-testid="payment-location-input"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1a2b4a] mb-2">
                  {t.payment.notes}
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder={t.payment.notesPlaceholder}
                  rows={3}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#1a2b4a] placeholder-gray-400 focus:outline-none focus:border-[#059669] transition-colors resize-none"
                  data-testid="payment-notes-input"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#059669] text-white font-semibold py-4 rounded-xl hover:bg-[#047857] transition-all flex items-center justify-center gap-2"
                data-testid="continue-to-payment-btn"
              >
                {t.payment.continue}
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          ) : (
            /* Step 2: Stripe Payment */
            <div className="space-y-4">
              {/* Back button */}
              <button
                onClick={() => setStep(1)}
                className="text-[#64748b] text-sm hover:text-[#1a2b4a] transition-colors"
              >
                {t.payment.back}
              </button>

              {/* Order Summary */}
              <div className="bg-[#FAFBFC] rounded-xl p-4 text-sm">
                <p className="text-[#64748b]">{t.payment.verificationFor}</p>
                <p className="text-[#1a2b4a] font-medium truncate">{formData.location}</p>
              </div>

              {/* Error Message */}
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-red-600 text-sm">
                  {error}
                </div>
              )}

              {/* Stripe Payment Button */}
              {isProcessing ? (
                <div className="text-center py-8">
                  <div className="w-8 h-8 border-2 border-[#059669] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                  <p className="text-[#64748b]">{t.payment.processing}</p>
                </div>
              ) : (
                <button
                  onClick={handleStripePayment}
                  className="w-full bg-[#1a2b4a] text-white font-semibold py-4 rounded-xl hover:bg-[#0f172a] transition-all flex items-center justify-center gap-3"
                  data-testid="stripe-pay-btn"
                >
                  <CreditCard className="w-5 h-5" />
                  {t.payment.payWithCard} - €{plan.price}
                </button>
              )}

              {/* Trust Badges */}
              <div className="flex items-center justify-center gap-4 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-1 text-[#64748b] text-xs">
                  <Lock className="w-3 h-3" />
                  <span>{t.payment.securePayment}</span>
                </div>
                <div className="flex items-center gap-1 text-[#64748b] text-xs">
                  <Shield className="w-3 h-3" />
                  <span>{t.payment.buyerProtection}</span>
                </div>
              </div>

              {/* Stripe Badge */}
              <div className="text-center pt-2">
                <span className="text-xs text-[#64748b]">Powered by </span>
                <span className="text-xs font-semibold text-[#635bff]">Stripe</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
