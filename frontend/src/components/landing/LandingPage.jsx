import React, { useState } from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import ServiceFlow from './ServiceFlow';
import PricingSection from './PricingSection';
import TrustSection from './TrustSection';
import BecomeAgentSection from './BecomeAgentSection';
import LandingFooter from './LandingFooter';
import PaymentModal from './PaymentModal';
import ConfirmationModal from './ConfirmationModal';

const LandingPage = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);

  const handleStartVerification = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
    setShowPaymentModal(true);
  };

  const handlePaymentSuccess = (details) => {
    setOrderDetails(details);
    setShowPaymentModal(false);
    setShowConfirmation(true);
  };

  const handleCloseConfirmation = () => {
    setShowConfirmation(false);
    setOrderDetails(null);
    setSelectedPlan(null);
  };

  return (
    <div className="min-h-screen bg-[#FAFBFC]">
      <Header />
      <HeroSection onStartVerification={handleStartVerification} />
      <ServiceFlow />
      <PricingSection onSelectPlan={handleSelectPlan} />
      <TrustSection />
      <BecomeAgentSection />
      <LandingFooter />

      {showPaymentModal && selectedPlan && (
        <PaymentModal
          plan={selectedPlan}
          onClose={() => setShowPaymentModal(false)}
          onSuccess={handlePaymentSuccess}
        />
      )}

      {showConfirmation && orderDetails && (
        <ConfirmationModal
          orderDetails={orderDetails}
          onClose={handleCloseConfirmation}
        />
      )}
    </div>
  );
};

export default LandingPage;
