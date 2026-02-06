export const stats = {
  verifications: '50+',
  activeAgents: '5',
  rating: '4.9',
  city: 'Prague'
};

export const crisisStats = [
  {
    icon: 'AlertTriangle',
    value: '400%',
    label: 'Deepfakes',
    labelTr: 'Deepfake',
    description: 'increase in AI-generated fraud',
    descriptionTr: 'yapay zeka dolandırıcılığında artış',
    color: '#ef4444'
  },
  {
    icon: 'Building',
    value: '€2.1B',
    label: 'Rental Scams',
    labelTr: 'Kira Dolandırıcılığı',
    description: 'lost to fake listings in EU annually',
    descriptionTr: 'AB\'de sahte ilanlara yıllık kayıp',
    color: '#ef4444'
  },
  {
    icon: 'Car',
    value: '€890M',
    label: 'Auto Fraud',
    labelTr: 'Araç Dolandırıcılığı',
    description: 'lost to vehicle scams in EU yearly',
    descriptionTr: 'AB\'de araç dolandırıcılığına yıllık kayıp',
    color: '#ef4444'
  },
  {
    icon: 'Package',
    value: '34%',
    label: 'Expat Victims',
    labelTr: 'Expat Mağdurları',
    description: 'of expats experienced rental fraud',
    descriptionTr: 'expat\'ların kira dolandırıcılığına maruz kalma oranı',
    color: '#ef4444'
  }
];

export const solutionSteps = [
  {
    step: '01',
    title: 'Request',
    titleTr: 'Talep',
    description: 'Submit the Prague address or listing you want verified. We respond within 2 hours.',
    descriptionTr: 'Doğrulamak istediğiniz Prag adresini veya ilanı gönderin. 2 saat içinde yanıt veririz.'
  },
  {
    step: '02',
    title: 'Payment & Match',
    titleTr: 'Ödeme & Eşleşme',
    description: 'Pay securely via Stripe/PayPal. A verified local agent is assigned within 1 hour.',
    descriptionTr: 'Stripe/PayPal ile güvenli ödeme yapın. 1 saat içinde doğrulanmış yerel ajan atanır.'
  },
  {
    step: '03',
    title: 'Live Verification',
    titleTr: 'Canlı Doğrulama',
    description: 'Agent visits location. Real-time photos/video with GPS coordinates and timestamp.',
    descriptionTr: 'Ajan konumu ziyaret eder. GPS koordinatları ve zaman damgası ile gerçek zamanlı fotoğraf/video.'
  },
  {
    step: '04',
    title: 'Report Delivered',
    titleTr: 'Rapor Teslimi',
    description: 'Receive your verification report with media, findings, and Surtey Certificate via email.',
    descriptionTr: 'Medya, bulgular ve Surtey Sertifikası içeren doğrulama raporunuzu e-posta ile alın.'
  }
];

export const pricingPlans = [
  {
    name: 'Quick Check',
    nameTr: 'Hızlı Kontrol',
    turnaround: '2-3 hours',
    turnaroundTr: '2-3 saat',
    price: '€9',
    features: ['10-15 photos', 'Exterior + building entrance', 'GPS proof', 'Brief summary'],
    featuresTr: ['10-15 fotoğraf', 'Dış görünüş + bina girişi', 'GPS kanıtı', 'Kısa özet'],
    description: 'Does this place actually exist?',
    descriptionTr: 'Bu yer gerçekten var mı?',
    popular: false
  },
  {
    name: 'Live Walkthrough',
    nameTr: 'Canlı Tur',
    turnaround: '3-5 hours',
    turnaroundTr: '3-5 saat',
    price: '€19',
    features: ['25-40 photos', '5-10 min video', 'Full interior tour', 'Condition report', 'Listing comparison'],
    featuresTr: ['25-40 fotoğraf', '5-10 dk video', 'Tam iç mekan turu', 'Durum raporu', 'İlan karşılaştırması'],
    description: 'Full verification before I commit',
    descriptionTr: 'Karar vermeden önce tam doğrulama',
    popular: true
  },
  {
    name: 'Deep Verify',
    nameTr: 'Derin Doğrulama',
    turnaround: 'Same day',
    turnaroundTr: 'Aynı gün',
    price: '€39',
    features: ['50+ photos', '15-20 min video', 'Live video call option', 'Detailed inspection', 'Neighborhood check', 'Premium certificate'],
    featuresTr: ['50+ fotoğraf', '15-20 dk video', 'Canlı görüntülü görüşme', 'Detaylı inceleme', 'Mahalle kontrolü', 'Premium sertifika'],
    description: 'High-value decision, need everything',
    descriptionTr: 'Yüksek değerli karar, her şey lazım',
    popular: false
  }
];

export const agentBenefits = [
  {
    icon: 'Zap',
    title: 'Flexible Schedule',
    titleTr: 'Esnek Çalışma',
    description: 'Work when you want, accept jobs that fit your schedule',
    descriptionTr: 'İstediğiniz zaman çalışın, programınıza uygun işleri kabul edin'
  },
  {
    icon: 'DollarSign',
    title: 'Great Earnings',
    titleTr: 'Yüksek Kazanç',
    description: '€5-25 per verification, bonuses for quality',
    descriptionTr: 'Doğrulama başına €5-25, kalite bonusları'
  },
  {
    icon: 'Globe',
    title: 'Be Part of Something',
    titleTr: 'Bir Şeyin Parçası Ol',
    description: 'Help expats and remote buyers make safe decisions',
    descriptionTr: 'Expat\'ların ve uzaktan alıcıların güvenli kararlar vermesine yardım edin'
  }
];

export const investorStats = [
  { value: '€50B+', label: 'TAM', description: 'EU verification market', descriptionTr: 'AB doğrulama pazarı' },
  { value: '13:1', label: 'LTV:CAC', description: 'Unit economics', descriptionTr: 'Birim ekonomisi' },
  { value: '35%', label: 'Gross Margin', labelTr: 'Brüt Marj', description: 'And growing', descriptionTr: 'Ve büyüyor' },
  { value: 'Prague', label: 'Pilot City', labelTr: 'Pilot Şehir', description: 'First market', descriptionTr: 'İlk pazar' }
];

export const futureIntegrations = [
  { name: 'Airbnb', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg' },
  { name: 'Bezrealitky', logo: null },
  { name: 'Sreality', logo: null },
  { name: 'Facebook Marketplace', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/50px-2023_Facebook_icon.svg.png' }
];

export const verificationTypes = [
  { en: 'Apartment / Property', tr: 'Daire / Mülk' },
  { en: 'Vehicle', tr: 'Araç' },
  { en: 'Product / Item', tr: 'Ürün / Eşya' },
  { en: 'Other', tr: 'Diğer' }
];

export const pragueDistricts = [
  'Prague 1 (Staré Město)',
  'Prague 2 (Vinohrady)',
  'Prague 3 (Žižkov)',
  'Prague 4 (Nusle)',
  'Prague 5 (Smíchov)',
  'Prague 6 (Dejvice)',
  'Prague 7 (Holešovice)',
  'Prague 8 (Karlín)',
  'Prague 9',
  'Prague 10',
  'Other / Outside Prague'
];

export const translations = {
  en: {
    nav: {
      problem: 'Problem',
      solution: 'Solution',
      becomeAgent: 'Become Agent',
      investors: 'Investors',
      verifyNow: 'Verify Now'
    },
    hero: {
      badge: 'Human-Powered Verification • Prague Pilot',
      title1: "Don't Trust.",
      title2: 'Verify.',
      subtitle: 'Moving to Prague? Renting remotely? Get real proof before you commit. Our local agents visit and verify any apartment, car, or listing for you.',
      cta1: 'Get Verification',
      cta2: 'How It Works',
      verifications: 'Verifications',
      activeAgents: 'Prague Agents',
      rating: 'Rating',
      verificationComplete: 'Verification Complete',
      pragueOnly: '🇨🇿 Currently serving Prague only'
    },
    crisis: {
      badge: 'The Trust Crisis',
      title1: "Renting in Prague Remotely?",
      title2: "You Can't Trust Photos Alone",
      subtitle: 'Fake listings are everywhere. AI generates convincing apartment photos. Scammers target expats who can\'t visit in person. Don\'t become a victim.'
    },
    solution: {
      badge: 'The Solution',
      title1: 'Human-Powered',
      title2: 'Live Verification',
      subtitle: 'Real people. Real locations. Real-time proof. A local Prague agent visits, documents, and reports back to you.',
      proofTitle1: 'Unfakeable',
      proofTitle2: 'Digital Proof',
      proofDesc: 'Every verification includes GPS coordinates, timestamp, and live video. Photos with metadata. Detailed report with our findings.',
      gpsVerified: 'GPS Verified',
      timestamped: 'Timestamped',
      tamperProof: 'Tamper-Proof'
    },
    form: {
      badge: 'Request Verification',
      title1: 'Verify Before',
      title2: 'You Commit',
      subtitle: "Send us the listing or address. We'll visit, document, and report back. Simple.",
      email: 'Email Address',
      location: 'Address or Listing URL',
      district: 'Prague District',
      type: 'What are you verifying?',
      notes: 'What should we check? (Optional)',
      submit: 'Request Verification',
      startingAt: 'Starting at €9. We respond within 2 hours.',
      mostPopular: 'MOST POPULAR'
    },
    agent: {
      badge: 'Join Our Team',
      title1: 'Become a Prague',
      title2: 'Verification Agent',
      subtitle: 'Know Prague well? Have a smartphone? Earn money helping people make safe decisions.',
      avgEarnings: 'Per Month Potential',
      perVerification: 'Per Verification',
      applyBtn: 'Apply Now'
    },
    investors: {
      badge: 'For Partners & Investors',
      title1: 'Building Trust',
      title2: 'Infrastructure',
      subtitle: "We're starting in Prague, but the problem is global. Join us in building the trust layer for remote transactions.",
      quote1: '"Every remote rental, car purchase, and marketplace transaction',
      quote2: 'needs verification. We\'re building that."',
      description: 'Prague pilot launching now. Proving the model before scaling to other European cities.',
      futureIntegrations: 'TARGET PLATFORMS:',
      contactBtn: 'Get in Touch'
    },
    footer: {
      copyright: '© 2024 Surtey • Prague Pilot',
      madeWith: 'Made with Emergent'
    },
    thanks: {
      title: 'Request Received!',
      subtitle: 'Your verification request has been submitted.',
      agentAssigning: 'Processing Your Request',
      message: "We'll review your request and respond within 2 hours with a quote and timeline. Check your email!",
      backHome: 'Back to Home'
    },
    agentForm: {
      title: 'Apply to Become an Agent',
      subtitle: 'Join our Prague verification team.',
      fullName: 'Full Name',
      email: 'Email Address',
      phone: 'Phone (WhatsApp preferred)',
      city: 'Which Prague districts do you know well?',
      experience: 'Tell us about yourself (Optional)',
      submit: 'Submit Application',
      benefits: 'Why Join Surtey?'
    }
  },
  tr: {
    nav: {
      problem: 'Problem',
      solution: 'Çözüm',
      becomeAgent: 'Ajan Ol',
      investors: 'Yatırımcılar',
      verifyNow: 'Şimdi Doğrula'
    },
    hero: {
      badge: 'İnsan Destekli Doğrulama • Prag Pilot',
      title1: 'Güvenme.',
      title2: 'Doğrula.',
      subtitle: "Prag'a mı taşınıyorsunuz? Uzaktan mı kiralıyorsunuz? Karar vermeden önce gerçek kanıt alın. Yerel ajanlarımız sizin için her daireyi, arabayı veya ilanı ziyaret edip doğrular.",
      cta1: 'Doğrulama Al',
      cta2: 'Nasıl Çalışır',
      verifications: 'Doğrulama',
      activeAgents: 'Prag Ajanı',
      rating: 'Puan',
      verificationComplete: 'Doğrulama Tamamlandı',
      pragueOnly: '🇨🇿 Şu anda sadece Prag'
    },
    crisis: {
      badge: 'Güven Krizi',
      title1: "Prag'da Uzaktan mı Kiralıyorsunuz?",
      title2: 'Sadece Fotoğraflara Güvenmeyin',
      subtitle: 'Sahte ilanlar her yerde. Yapay zeka ikna edici daire fotoğrafları üretiyor. Dolandırıcılar yerinde ziyaret edemeyen expat\'ları hedef alıyor. Mağdur olmayın.'
    },
    solution: {
      badge: 'Çözüm',
      title1: 'İnsan Destekli',
      title2: 'Canlı Doğrulama',
      subtitle: 'Gerçek insanlar. Gerçek konumlar. Gerçek zamanlı kanıt. Yerel bir Prag ajanı ziyaret eder, belgeler ve size rapor verir.',
      proofTitle1: 'Sahte Olunamaz',
      proofTitle2: 'Dijital Kanıt',
      proofDesc: 'Her doğrulama GPS koordinatları, zaman damgası ve canlı video içerir. Metadata ile fotoğraflar. Bulgularımızla detaylı rapor.',
      gpsVerified: 'GPS Doğrulandı',
      timestamped: 'Zaman Damgalı',
      tamperProof: 'Değiştirilemez'
    },
    form: {
      badge: 'Doğrulama Talebi',
      title1: 'Karar Vermeden',
      title2: 'Önce Doğrulayın',
      subtitle: 'Bize ilanı veya adresi gönderin. Ziyaret eder, belgeler ve rapor veririz. Basit.',
      email: 'E-posta Adresi',
      location: 'Adres veya İlan URL',
      district: 'Prag Bölgesi',
      type: 'Ne doğruluyorsunuz?',
      notes: 'Ne kontrol edelim? (İsteğe bağlı)',
      submit: 'Doğrulama Talep Et',
      startingAt: '€9\'dan başlayan fiyatlar. 2 saat içinde yanıt veririz.',
      mostPopular: 'EN POPÜLER'
    },
    agent: {
      badge: 'Ekibimize Katıl',
      title1: 'Prag Doğrulama',
      title2: 'Ajanı Ol',
      subtitle: "Prag'ı iyi biliyor musunuz? Akıllı telefonunuz var mı? İnsanların güvenli kararlar vermesine yardım ederek para kazanın.",
      avgEarnings: 'Aylık Potansiyel',
      perVerification: 'Doğrulama Başına',
      applyBtn: 'Şimdi Başvur'
    },
    investors: {
      badge: 'Ortaklar ve Yatırımcılar İçin',
      title1: 'Güven Altyapısı',
      title2: 'İnşa Ediyoruz',
      subtitle: "Prag'dan başlıyoruz, ama sorun küresel. Uzaktan işlemler için güven katmanını inşa etmemize katılın.",
      quote1: '"Her uzaktan kiralama, araç satın alma ve pazar yeri işlemi',
      quote2: 'doğrulama gerektiriyor. Biz bunu inşa ediyoruz."',
      description: 'Prag pilotu şimdi başlıyor. Diğer Avrupa şehirlerine ölçeklendirmeden önce modeli kanıtlıyoruz.',
      futureIntegrations: 'HEDEF PLATFORMLAR:',
      contactBtn: 'İletişime Geç'
    },
    footer: {
      copyright: '© 2024 Surtey • Prag Pilot',
      madeWith: 'Emergent ile Yapıldı'
    },
    thanks: {
      title: 'Talep Alındı!',
      subtitle: 'Doğrulama talebiniz gönderildi.',
      agentAssigning: 'Talebiniz İşleniyor',
      message: 'Talebinizi inceleyip 2 saat içinde teklif ve zaman çizelgesi ile yanıt vereceğiz. E-postanızı kontrol edin!',
      backHome: 'Ana Sayfaya Dön'
    },
    agentForm: {
      title: 'Ajan Olmak İçin Başvur',
      subtitle: 'Prag doğrulama ekibimize katılın.',
      fullName: 'Ad Soyad',
      email: 'E-posta Adresi',
      phone: 'Telefon (WhatsApp tercih edilir)',
      city: 'Hangi Prag bölgelerini iyi biliyorsunuz?',
      experience: 'Kendinizden bahsedin (İsteğe bağlı)',
      submit: 'Başvuruyu Gönder',
      benefits: 'Neden Surtey?'
    }
  }
};
