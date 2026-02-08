import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { LandingPage } from './components/landing';
import ThankYouPage from './components/ThankYouPage';
import ApplyAgentPage from './components/ApplyAgentPage';
import BlueprintPage from './components/BlueprintPage';

function App() {
  return (
    <LanguageProvider>
      <div className="App min-h-screen">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
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
