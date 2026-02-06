import React, { useState } from 'react';
import { FileText, Download, ChevronRight, BookOpen, Users, DollarSign, Shield, Calendar, AlertTriangle, TrendingUp, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Navbar from './Navbar';
import Footer from './Footer';

const sections = [
  {
    id: 1,
    icon: Users,
    title: 'Customer Journey Architecture',
    titleTr: 'Müşteri Yolculuğu Mimarisi',
    description: 'Full customer lifecycle from discovery to retention',
    descriptionTr: 'Keşiften elde tutmaya kadar tam müşteri yaşam döngüsü'
  },
  {
    id: 2,
    icon: CheckCircle,
    title: 'Verification Service Workflow',
    titleTr: 'Doğrulama Hizmeti İş Akışı',
    description: 'Standardized operational protocols and SOPs',
    descriptionTr: 'Standartlaştırılmış operasyonel protokoller ve prosedürler'
  },
  {
    id: 3,
    icon: Users,
    title: 'Surtey Agent System',
    titleTr: 'Surtey Ajan Sistemi',
    description: 'Agent marketplace framework and management',
    descriptionTr: 'Ajan pazaryeri çerçevesi ve yönetimi'
  },
  {
    id: 4,
    icon: BookOpen,
    title: 'MVP Operations Infrastructure',
    titleTr: 'MVP Operasyon Altyapısı',
    description: 'Zero-code stack and manual workflows',
    descriptionTr: 'Kodsuz yığın ve manuel iş akışları'
  },
  {
    id: 5,
    icon: FileText,
    title: 'Verification Report Framework',
    titleTr: 'Doğrulama Raporu Çerçevesi',
    description: 'Standardized report format and templates',
    descriptionTr: 'Standartlaştırılmış rapor formatı ve şablonlar'
  },
  {
    id: 6,
    icon: DollarSign,
    title: 'Pricing & Unit Economics',
    titleTr: 'Fiyatlandırma ve Birim Ekonomisi',
    description: 'Tiered packages and margin strategy',
    descriptionTr: 'Kademeli paketler ve marj stratejisi'
  },
  {
    id: 7,
    icon: Shield,
    title: 'Trust & Legal Foundations',
    titleTr: 'Güven ve Hukuki Temeller',
    description: 'Terms, disclaimers, and privacy handling',
    descriptionTr: 'Şartlar, sorumluluk reddi ve gizlilik'
  },
  {
    id: 8,
    icon: Calendar,
    title: 'First 30-Day Execution Plan',
    titleTr: 'İlk 30 Günlük Uygulama Planı',
    description: 'Daily milestones and validation metrics',
    descriptionTr: 'Günlük hedefler ve doğrulama metrikleri'
  },
  {
    id: 9,
    icon: AlertTriangle,
    title: 'Risk & Failure Prevention',
    titleTr: 'Risk ve Başarısızlık Önleme',
    description: 'Operational risks and mitigation strategies',
    descriptionTr: 'Operasyonel riskler ve azaltma stratejileri'
  },
  {
    id: 10,
    icon: TrendingUp,
    title: 'Growth Path Blueprint',
    titleTr: 'Büyüme Yolu Planı',
    description: 'Early traction channels and scaling strategy',
    descriptionTr: 'Erken çekiş kanalları ve ölçeklendirme stratejisi'
  }
];

const BlueprintPage = () => {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState(null);

  const handleDownload = () => {
    window.open('/docs/SURTEY_OPERATIONAL_BLUEPRINT.md', '_blank');
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-6">
              <BookOpen className="w-4 h-4 text-emerald-500" />
              <span className="text-emerald-400 text-sm font-medium">
                {language === 'tr' ? 'Operasyonel Kılavuz' : 'Operational Manual'}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              {language === 'tr' ? 'Surtey Operasyonel' : 'Surtey Operational'}
            </h1>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-400 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Blueprint
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              {language === 'tr' 
                ? 'Kavramdan gerçek dünya pazaryerine geçiş için eksiksiz bir erken aşama operasyonel sistem kılavuzu.'
                : 'Complete early-stage operational system guide for moving from concept to real-world functioning marketplace.'}
            </p>

            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 bg-emerald-500 text-black font-semibold px-8 py-4 rounded-full hover:bg-emerald-400 transition-all hover:shadow-lg hover:shadow-emerald-500/30 group"
            >
              <Download className="w-5 h-5" />
              {language === 'tr' ? 'Blueprint İndir' : 'Download Blueprint'}
            </button>
          </div>

          {/* Sections Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {sections.map((section) => {
              const IconComponent = section.icon;
              return (
                <div
                  key={section.id}
                  className={`bg-gray-900/50 border rounded-2xl p-6 cursor-pointer transition-all hover:transform hover:scale-[1.02] ${
                    activeSection === section.id 
                      ? 'border-emerald-500/50' 
                      : 'border-gray-800 hover:border-gray-700'
                  }`}
                  onClick={() => setActiveSection(activeSection === section.id ? null : section.id)}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-emerald-500" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold text-white">
                          <span className="text-emerald-500/50 mr-2">0{section.id}</span>
                          {language === 'tr' ? section.titleTr : section.title}
                        </h3>
                        <ChevronRight className={`w-5 h-5 text-gray-500 transition-transform ${
                          activeSection === section.id ? 'rotate-90' : ''
                        }`} />
                      </div>
                      <p className="text-gray-500 text-sm mt-2">
                        {language === 'tr' ? section.descriptionTr : section.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Key Highlights */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-white text-center mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
              {language === 'tr' ? 'Önemli Noktalar' : 'Key Highlights'}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">30</div>
                <div className="text-white font-semibold">{language === 'tr' ? 'Günlük Plan' : 'Day Plan'}</div>
                <div className="text-gray-500 text-sm">{language === 'tr' ? 'Detaylı uygulama takvimi' : 'Detailed execution timeline'}</div>
              </div>
              <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">10</div>
                <div className="text-white font-semibold">{language === 'tr' ? 'Bölüm' : 'Sections'}</div>
                <div className="text-gray-500 text-sm">{language === 'tr' ? 'Kapsamlı operasyon kılavuzu' : 'Comprehensive operations guide'}</div>
              </div>
              <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">50+</div>
                <div className="text-white font-semibold">{language === 'tr' ? 'Şablon' : 'Templates'}</div>
                <div className="text-gray-500 text-sm">{language === 'tr' ? 'Hazır kullanım dökümanları' : 'Ready-to-use documents'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlueprintPage;
