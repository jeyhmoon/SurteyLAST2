import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TrustCrisisSection from './components/TrustCrisisSection';
import SolutionSection from './components/SolutionSection';
import VerificationFormSection from './components/VerificationFormSection';
import BecomeAgentSection from './components/BecomeAgentSection';
import InvestorsSection from './components/InvestorsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App bg-[#0a0a0a] min-h-screen">
      <Navbar />
      <HeroSection />
      <TrustCrisisSection />
      <SolutionSection />
      <VerificationFormSection />
      <BecomeAgentSection />
      <InvestorsSection />
      <Footer />
    </div>
  );
}

export default App;
