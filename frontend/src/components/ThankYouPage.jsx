import React from 'react';
import { CheckCircle, ArrowRight, Users, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const ThankYouPage = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <div className="min-h-screen flex items-center justify-center px-6 pt-24">
        <div className="max-w-lg w-full text-center">
          {/* Success Icon */}
          <div className="w-24 h-24 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-12 h-12 text-emerald-500" />
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            {t.thanks.title}
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            {t.thanks.subtitle}
          </p>

          {/* Status Card */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-emerald-400 font-semibold">{t.thanks.agentAssigning}</span>
            </div>
            <div className="flex justify-center gap-8">
              <div className="flex items-center gap-2 text-gray-400">
                <Users className="w-4 h-4" />
                <span className="text-sm">50+ Agents</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Clock className="w-4 h-4" />
                <span className="text-sm">~2 hours</span>
              </div>
            </div>
          </div>

          <p className="text-gray-500 mb-8">
            {t.thanks.message}
          </p>

          {/* Back Button */}
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 bg-emerald-500 text-black font-semibold px-8 py-4 rounded-full hover:bg-emerald-400 transition-all hover:shadow-lg hover:shadow-emerald-500/30 group"
          >
            {t.thanks.backHome}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ThankYouPage;
