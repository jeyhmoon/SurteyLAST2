import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TrustCrisisSection from './components/TrustCrisisSection';
import SolutionSection from './components/SolutionSection';
import VerificationFormSection from './components/VerificationFormSection';
import BecomeAgentSection from './components/BecomeAgentSection';
import InvestorsSection from './components/InvestorsSection';
import Footer from './components/Footer';
import ThankYouPage from './components/ThankYouPage';
import ApplyAgentPage from './components/ApplyAgentPage';
import BlueprintPage from './components/BlueprintPage';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TrustCrisisSection />
      <SolutionSection />
      <VerificationFormSection />
      <BecomeAgentSection />
      <InvestorsSection />
      <Footer />
    </>
  );
};

function App() {
  return (
    <LanguageProvider>
      <div className="App bg-[#0a0a0a] min-h-screen">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
            <Route path="/apply-agent" element={<ApplyAgentPage />} />
            <Route path="/blueprint" element={<BlueprintPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </LanguageProvider>
  );
}

export default App;
