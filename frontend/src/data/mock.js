export const stats = {
  verifications: '500+',
  activeAgents: '50+',
  rating: '4.9'
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
    value: '$3.4B',
    label: 'Rental Scams',
    labelTr: 'Kira Dolandırıcılığı',
    description: 'lost to fake listings annually',
    descriptionTr: 'sahte ilanlara yıllık kayıp',
    color: '#ef4444'
  },
  {
    icon: 'Car',
    value: '$7.7B',
    label: 'Auto Fraud',
    labelTr: 'Araç Dolandırıcılığı',
    description: 'lost to vehicle scams yearly',
    descriptionTr: 'araç dolandırıcılığına yıllık kayıp',
    color: '#ef4444'
  },
  {
    icon: 'Package',
    value: '$48B',
    label: 'E-commerce',
    labelTr: 'E-ticaret',
    description: 'lost to online fraud globally',
    descriptionTr: 'küresel çevrimiçi dolandırıcılık kaybı',
    color: '#ef4444'
  }
];

export const solutionSteps = [
  {
    step: '01',
    title: 'Request',
    titleTr: 'Talep',
    description: 'Submit the address or listing you want verified. Pay securely via escrow.',
    descriptionTr: 'Doğrulamak istediğiniz adresi veya ilanı gönderin. Güvenli ödeme yapın.'
  },
  {
    step: '02',
    title: 'Agent Assigned',
    titleTr: 'Ajan Atandı',
    description: 'A verified local agent is matched and dispatched to the location.',
    descriptionTr: 'Doğrulanmış yerel bir ajan eşleştirilir ve konuma gönderilir.'
  },
  {
    step: '03',
    title: 'Live Verification',
    titleTr: 'Canlı Doğrulama',
    description: 'Real-time video with GPS coordinates and timestamp proof.',
    descriptionTr: 'GPS koordinatları ve zaman damgası ile gerçek zamanlı video.'
  },
  {
    step: '04',
    title: 'Verified Report',
    titleTr: 'Doğrulama Raporu',
    description: 'Receive your Surety Certificate with unfakeable digital proof.',
    descriptionTr: 'Sahte olunamaz dijital kanıtla Surtey Sertifikanızı alın.'
  }
];

export const pricingPlans = [
  {
    name: 'Quick Check',
    nameTr: 'Hızlı Kontrol',
    turnaround: '1 hour turnaround',
    turnaroundTr: '1 saat içinde',
    price: '$15',
    features: ['5 min video', 'Exterior view', 'Location proof'],
    featuresTr: ['5 dk video', 'Dış görünüş', 'Konum kanıtı'],
    popular: false
  },
  {
    name: 'Standard',
    nameTr: 'Standart',
    turnaround: '2-4 hours turnaround',
    turnaroundTr: '2-4 saat içinde',
    price: '$35',
    features: ['15 min video', 'Full interior/exterior', 'Detailed checklist'],
    featuresTr: ['15 dk video', 'İç/dış kontrol', 'Detaylı kontrol listesi'],
    popular: true
  },
  {
    name: 'Deep Verify',
    nameTr: 'Derin Doğrulama',
    turnaround: '24 hours turnaround',
    turnaroundTr: '24 saat içinde',
    price: '$75',
    features: ['Live stream inspection', 'Complete technical review', 'Direct agent call'],
    featuresTr: ['Canlı yayın incelemesi', 'Tam teknik inceleme', 'Doğrudan ajan görüşmesi'],
    popular: false
  }
];

export const agentBenefits = [
  {
    icon: 'Zap',
    title: 'Flexible Schedule',
    titleTr: 'Esnek Çalışma',
    description: 'Work when you want, accept jobs that fit',
    descriptionTr: 'İstediğiniz zaman çalışın, size uygun işleri kabul edin'
  },
  {
    icon: 'DollarSign',
    title: 'Great Earnings',
    titleTr: 'Yüksek Kazanç',
    description: '$35+ per verification, bonuses for quality',
    descriptionTr: 'Doğrulama başına $35+, kalite bonusları'
  },
  {
    icon: 'Globe',
    title: 'Be Part of Something',
    titleTr: 'Bir Şeyin Parçası Ol',
    description: 'Help build trust in the digital economy',
    descriptionTr: 'Dijital ekonomide güven inşa etmeye yardım edin'
  }
];

export const investorStats = [
  { value: '$50B+', label: 'TAM', description: 'Global verification market', descriptionTr: 'Küresel doğrulama pazarı' },
  { value: '13:1', label: 'LTV:CAC', description: 'Unit economics', descriptionTr: 'Birim ekonomisi' },
  { value: '30%', label: 'Gross Margin', labelTr: 'Brüt Marj', description: 'And growing', descriptionTr: 'Ve büyüyor' },
  { value: '$150M', label: 'Year 5 Target', labelTr: '5. Yıl Hedefi', description: 'Revenue projection', descriptionTr: 'Gelir projeksiyonu' }
];

export const futureIntegrations = [
  { name: 'Airbnb', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg' },
  { name: 'eBay', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/EBay_logo.svg' },
  { name: 'Facebook Marketplace', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/50px-2023_Facebook_icon.svg.png' },
  { name: 'AutoTrader', logo: null }
];

export const verificationTypes = [
  { en: 'Apartment / Property', tr: 'Daire / Mülk' },
  { en: 'Vehicle', tr: 'Araç' },
  { en: 'Product / Item', tr: 'Ürün / Eşya' },
  { en: 'Other', tr: 'Diğer' }
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
      badge: 'Human-Powered Verification',
      title1: "Don't Trust.",
      title2: 'Verify.',
      subtitle: 'The first live verification protocol. Real people, real locations, real-time proof. Stop scams before they happen.',
      cta1: 'Verify Something Now',
      cta2: 'How It Works',
      verifications: 'Verifications',
      activeAgents: 'Active Agents',
      rating: 'Rating',
      verificationComplete: 'Verification Complete'
    },
    crisis: {
      badge: 'The Trust Crisis',
      title1: "In 2024, You Can't Trust",
      title2: 'What You See Online',
      subtitle: 'AI can generate fake apartment photos in seconds. Deepfake videos are indistinguishable from real. Scammers exploit the distance gap.'
    },
    solution: {
      badge: 'The Solution',
      title1: 'Human-Powered',
      title2: 'Live Verification',
      subtitle: 'Real people. Real locations. Real-time proof. GPS + Timestamp + Live Video = Unfakeable Truth.',
      proofTitle1: 'Unfakeable',
      proofTitle2: 'Digital Proof',
      proofDesc: 'Every verification includes GPS coordinates, timestamp, and live video. AI-checked for manipulation. Blockchain-ready for immutable records.',
      gpsVerified: 'GPS Verified',
      timestamped: 'Timestamped',
      tamperProof: 'Tamper-Proof'
    },
    form: {
      badge: 'Request Verification',
      title1: 'Verify an Apartment,',
      title2: 'Product, or Vehicle',
      subtitle: "Get real proof before you commit. Our verified agents will visit and document everything you need to know.",
      email: 'Email Address',
      location: 'Location / Listing URL',
      type: 'Verification Type',
      notes: 'Additional Notes (Optional)',
      submit: 'Request Verification',
      startingAt: "Starting at $15. We'll contact you with a quote within 2 hours.",
      mostPopular: 'MOST POPULAR'
    },
    agent: {
      badge: 'Become an Agent',
      title1: 'Earn by',
      title2: 'Verifying Truth',
      subtitle: 'Join our network of trusted local agents. Flexible hours, great earnings, meaningful work fighting fraud.',
      avgEarnings: 'Average Monthly Earnings',
      perVerification: 'Per Verification',
      applyBtn: 'Apply to Become an Agent'
    },
    investors: {
      badge: 'For Investors',
      title1: 'Join the Future of',
      title2: 'Digital Trust',
      subtitle: "We're building the trust layer of the internet. A $50B+ market opportunity waiting to be disrupted.",
      quote1: '"We\'re not just building a service.',
      quote2: 'We\'re building the TRUST LAYER of the internet."',
      description: 'Scalable. AI-augmented. Global API. The infrastructure for verified truth in the age of digital deception.',
      futureIntegrations: 'FUTURE INTEGRATIONS:',
      contactBtn: 'Contact for Investment Deck'
    },
    footer: {
      copyright: '© 2026 Surtey | The Future of Digital Trust',
      madeWith: 'Made with Emergent'
    },
    thanks: {
      title: 'Request Received!',
      subtitle: 'Your verification request has been submitted successfully.',
      agentAssigning: 'Agent Being Assigned',
      message: 'Our team will contact you within 2 hours with a verified agent assignment and quote.',
      backHome: 'Back to Home'
    },
    agentForm: {
      title: 'Apply to Become an Agent',
      subtitle: 'Join our network and start earning by verifying truth.',
      fullName: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number',
      city: 'City / Location',
      experience: 'Relevant Experience (Optional)',
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
      badge: 'İnsan Destekli Doğrulama',
      title1: 'Güvenme.',
      title2: 'Doğrula.',
      subtitle: 'İlk canlı doğrulama protokolü. Gerçek insanlar, gerçek konumlar, gerçek zamanlı kanıt. Dolandırıcılığı olmadan önce durdurun.',
      cta1: 'Şimdi Doğrula',
      cta2: 'Nasıl Çalışır',
      verifications: 'Doğrulama',
      activeAgents: 'Aktif Ajan',
      rating: 'Puan',
      verificationComplete: 'Doğrulama Tamamlandı'
    },
    crisis: {
      badge: 'Güven Krizi',
      title1: '2024\'te Çevrimiçi',
      title2: 'Gördüklerinize Güvenemezsiniz',
      subtitle: 'Yapay zeka saniyeler içinde sahte daire fotoğrafları oluşturabilir. Deepfake videoları gerçeklerden ayırt edilemez. Dolandırıcılar mesafe açığını kullanıyor.'
    },
    solution: {
      badge: 'Çözüm',
      title1: 'İnsan Destekli',
      title2: 'Canlı Doğrulama',
      subtitle: 'Gerçek insanlar. Gerçek konumlar. Gerçek zamanlı kanıt. GPS + Zaman Damgası + Canlı Video = Sahte Olunamaz Gerçek.',
      proofTitle1: 'Sahte Olunamaz',
      proofTitle2: 'Dijital Kanıt',
      proofDesc: 'Her doğrulama GPS koordinatları, zaman damgası ve canlı video içerir. Manipülasyon için yapay zeka ile kontrol edilir. Değiştirilemez kayıtlar için blockchain hazır.',
      gpsVerified: 'GPS Doğrulandı',
      timestamped: 'Zaman Damgalı',
      tamperProof: 'Değiştirilemez'
    },
    form: {
      badge: 'Doğrulama Talebi',
      title1: 'Bir Daire, Ürün',
      title2: 'veya Araç Doğrulayın',
      subtitle: 'Karar vermeden önce gerçek kanıt alın. Doğrulanmış ajanlarımız ziyaret edip bilmeniz gereken her şeyi belgeleyecek.',
      email: 'E-posta Adresi',
      location: 'Konum / İlan URL',
      type: 'Doğrulama Türü',
      notes: 'Ek Notlar (İsteğe Bağlı)',
      submit: 'Doğrulama Talep Et',
      startingAt: '$15\'den başlayan fiyatlar. 2 saat içinde teklif ile iletişime geçeceğiz.',
      mostPopular: 'EN POPÜLER'
    },
    agent: {
      badge: 'Ajan Ol',
      title1: 'Gerçeği Doğrulayarak',
      title2: 'Para Kazan',
      subtitle: 'Güvenilir yerel ajanlar ağımıza katılın. Esnek saatler, yüksek kazanç, dolandırıcılıkla mücadelede anlamlı iş.',
      avgEarnings: 'Ortalama Aylık Kazanç',
      perVerification: 'Doğrulama Başına',
      applyBtn: 'Ajan Olmak İçin Başvur'
    },
    investors: {
      badge: 'Yatırımcılar İçin',
      title1: 'Dijital Güvenin',
      title2: 'Geleceğine Katılın',
      subtitle: 'İnternetin güven katmanını inşa ediyoruz. $50B+ pazar fırsatı sizi bekliyor.',
      quote1: '"Sadece bir hizmet inşa etmiyoruz.',
      quote2: 'İnternetin GÜVEN KATMANINI inşa ediyoruz."',
      description: 'Ölçeklenebilir. Yapay zeka destekli. Global API. Dijital aldatma çağında doğrulanmış gerçeklik altyapısı.',
      futureIntegrations: 'GELECEK ENTEGRASYONLAR:',
      contactBtn: 'Yatırım Dosyası İçin İletişim'
    },
    footer: {
      copyright: '© 2026 Surtey | Dijital Güvenin Geleceği',
      madeWith: 'Emergent ile Yapıldı'
    },
    thanks: {
      title: 'Talep Alındı!',
      subtitle: 'Doğrulama talebiniz başarıyla gönderildi.',
      agentAssigning: 'Ajan Atanıyor',
      message: 'Ekibimiz 2 saat içinde doğrulanmış ajan ataması ve teklif ile sizinle iletişime geçecek.',
      backHome: 'Ana Sayfaya Dön'
    },
    agentForm: {
      title: 'Ajan Olmak İçin Başvur',
      subtitle: 'Ağımıza katılın ve gerçeği doğrulayarak kazanmaya başlayın.',
      fullName: 'Ad Soyad',
      email: 'E-posta Adresi',
      phone: 'Telefon Numarası',
      city: 'Şehir / Konum',
      experience: 'İlgili Deneyim (İsteğe Bağlı)',
      submit: 'Başvuruyu Gönder',
      benefits: 'Neden Surtey?'
    }
  }
};
