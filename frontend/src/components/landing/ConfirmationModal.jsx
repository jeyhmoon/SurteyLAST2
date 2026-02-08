import React from 'react';
import { CheckCircle, Mail, Clock, ArrowRight } from 'lucide-react';

const ConfirmationModal = ({ orderDetails, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden">
        {/* Success Header */}
        <div className="bg-gradient-to-br from-[#059669] to-[#047857] text-white p-8 text-center">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-10 h-10" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Payment Successful!</h2>
          <p className="text-white/80">Your verification request has been submitted</p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Order Details */}
          <div className="bg-[#FAFBFC] rounded-xl p-4 space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-[#64748b]">Order ID</span>
              <span className="text-[#1a2b4a] font-mono">{orderDetails.orderId?.slice(0, 12)}...</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#64748b]">Package</span>
              <span className="text-[#1a2b4a] font-medium">{orderDetails.plan?.name}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#64748b]">Amount Paid</span>
              <span className="text-[#059669] font-bold">€{orderDetails.plan?.price}</span>
            </div>
          </div>

          {/* What's Next */}
          <div className="space-y-4">
            <h3 className="font-semibold text-[#1a2b4a]">What happens next?</h3>
            
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-[#E8F5F0] rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-4 h-4 text-[#059669]" />
              </div>
              <div>
                <p className="text-sm text-[#1a2b4a] font-medium">Check your email</p>
                <p className="text-xs text-[#64748b]">Confirmation sent to {orderDetails.customerEmail}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-[#E0F2FE] rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-4 h-4 text-[#0891b2]" />
              </div>
              <div>
                <p className="text-sm text-[#1a2b4a] font-medium">Agent assignment</p>
                <p className="text-xs text-[#64748b]">We'll assign a local agent within 2 hours</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-[#F3E8FF] rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-4 h-4 text-[#7c3aed]" />
              </div>
              <div>
                <p className="text-sm text-[#1a2b4a] font-medium">Verification & Report</p>
                <p className="text-xs text-[#64748b]">Full report delivered in {orderDetails.plan?.turnaround}</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={onClose}
            className="w-full bg-[#1a2b4a] text-white font-semibold py-4 rounded-xl hover:bg-[#0f172a] transition-all flex items-center justify-center gap-2 group"
            data-testid="confirmation-close-btn"
          >
            Done
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Support Note */}
          <p className="text-center text-xs text-[#64748b]">
            Questions? Contact us at{' '}
            <a href="mailto:getsurtey@gmail.com" className="text-[#059669] hover:underline">
              getsurtey@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
