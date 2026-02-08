import React, { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { X, Shield, Lock } from 'lucide-react';

// PayPal Sandbox Client ID for testing
const PAYPAL_CLIENT_ID = 'sb'; // 'sb' is the sandbox test mode

const PaymentModal = ({ plan, onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    email: '',
    location: '',
    notes: ''
  });
  const [step, setStep] = useState(1); // 1: form, 2: payment
  const [isProcessing, setIsProcessing] = useState(false);

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

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          description: `Surtey ${plan.name} - Property Verification`,
          amount: {
            currency_code: 'EUR',
            value: plan.price.toString()
          }
        }
      ],
      application_context: {
        shipping_preference: 'NO_SHIPPING'
      }
    });
  };

  const onApprove = async (data, actions) => {
    setIsProcessing(true);
    try {
      const details = await actions.order.capture();
      
      // Call success callback with order details
      onSuccess({
        orderId: details.id,
        payerEmail: details.payer.email_address,
        payerName: details.payer.name.given_name,
        plan: plan,
        customerEmail: formData.email,
        location: formData.location,
        notes: formData.notes,
        status: 'COMPLETED',
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      console.error('Payment capture error:', error);
      alert('Payment failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-[#059669] text-white p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">
              {step === 1 ? 'Verification Details' : 'Secure Payment'}
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
                <p className="text-white/70 text-sm">{plan.turnaround} turnaround</p>
              </div>
              <div className="text-2xl font-bold">€{plan.price}</div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {step === 1 ? (
            /* Step 1: Form */
            <form onSubmit={handleContinueToPayment} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#1a2b4a] mb-2">
                  Your Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#1a2b4a] placeholder-gray-400 focus:outline-none focus:border-[#059669] transition-colors"
                  required
                  data-testid="payment-email-input"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1a2b4a] mb-2">
                  Property Address or Listing URL *
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="Full address or listing link"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#1a2b4a] placeholder-gray-400 focus:outline-none focus:border-[#059669] transition-colors"
                  required
                  data-testid="payment-location-input"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1a2b4a] mb-2">
                  Special Requests (Optional)
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="Anything specific to check?"
                  rows={3}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#1a2b4a] placeholder-gray-400 focus:outline-none focus:border-[#059669] transition-colors resize-none"
                  data-testid="payment-notes-input"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#059669] text-white font-semibold py-4 rounded-xl hover:bg-[#047857] transition-all"
                data-testid="continue-to-payment-btn"
              >
                Continue to Payment
              </button>
            </form>
          ) : (
            /* Step 2: PayPal Payment */
            <div className="space-y-4">
              {/* Back button */}
              <button
                onClick={() => setStep(1)}
                className="text-[#64748b] text-sm hover:text-[#1a2b4a] transition-colors"
              >
                ← Back to details
              </button>

              {/* Order Summary */}
              <div className="bg-[#FAFBFC] rounded-xl p-4 text-sm">
                <p className="text-[#64748b]">Verification for:</p>
                <p className="text-[#1a2b4a] font-medium truncate">{formData.location}</p>
              </div>

              {/* PayPal Buttons */}
              {isProcessing ? (
                <div className="text-center py-8">
                  <div className="w-8 h-8 border-2 border-[#059669] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                  <p className="text-[#64748b]">Processing payment...</p>
                </div>
              ) : (
                <PayPalScriptProvider options={{ 
                  clientId: PAYPAL_CLIENT_ID,
                  currency: 'EUR'
                }}>
                  <PayPalButtons
                    style={{ 
                      layout: 'vertical',
                      color: 'gold',
                      shape: 'rect',
                      label: 'paypal'
                    }}
                    createOrder={createOrder}
                    onApprove={onApprove}
                    onError={(err) => {
                      console.error('PayPal error:', err);
                      alert('Payment error. Please try again.');
                    }}
                  />
                </PayPalScriptProvider>
              )}

              {/* Trust Badges */}
              <div className="flex items-center justify-center gap-4 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-1 text-[#64748b] text-xs">
                  <Lock className="w-3 h-3" />
                  <span>Secure Payment</span>
                </div>
                <div className="flex items-center gap-1 text-[#64748b] text-xs">
                  <Shield className="w-3 h-3" />
                  <span>Buyer Protection</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
