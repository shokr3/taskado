import type { Language } from './types';

export type { Language };

export const translations = {
  // Navigation
  nav: {
    features: { hr: 'Značajke', en: 'Features' },
    pricing: { hr: 'Cijene', en: 'Pricing' },
    about: { hr: 'O nama', en: 'About' },
    contact: { hr: 'Kontakt', en: 'Contact' },
    login: { hr: 'Prijava', en: 'Login' },
    tryFree: { hr: 'Isprobaj besplatno', en: 'Try for Free' },
  },
  
  // Hero Section
  hero: {
    tagline: { 
      hr: 'Sve na jednom mjestu', 
      en: 'Everything in One Place' 
    },
    title: { 
      hr: 'UPRAVLJANJE POSLOM JEDNOSTAVNIJE NEGO IKAD', 
      en: 'BUSINESS MANAGEMENT SIMPLER THAN EVER' 
    },
    subtitle: { 
      hr: 'Projekti, zadaci, radni nalozi i fiskalizacija - sve u jednoj aplikaciji. Dizajnirano za male i srednje poduzetnike u Hrvatskoj.', 
      en: 'Projects, tasks, work orders, and fiscalization - all in one app. Designed for small and medium businesses in Croatia.' 
    },
    cta: { hr: 'Započni besplatno', en: 'Start for Free' },
    ctaSecondary: { hr: 'Zatraži demo', en: 'Request Demo' },
    trialNote: { hr: '30 dana besplatno • Bez kreditne kartice', en: '30 days free • No credit card required' },
  },
  
  // Features Section
  features: {
    sectionTitle: { hr: 'ZAŠTO TASKADO?', en: 'WHY TASKADO?' },
    sectionSubtitle: { 
      hr: 'Sve što vam treba za uspješno vođenje poslovanja', 
      en: 'Everything you need to run your business successfully' 
    },
    
    projectManagement: {
      title: { hr: 'Upravljanje projektima', en: 'Project Management' },
      description: { 
        hr: 'Kreirajte projekte s budžetima, dodijeljujte zadatke i pratite napredak u stvarnom vremenu.', 
        en: 'Create projects with budgets, assign tasks, and track progress in real-time.' 
      },
    },
    
    workOrders: {
      title: { hr: 'Radni nalozi', en: 'Work Orders' },
      description: { 
        hr: 'Generirajte radne naloge iz zadataka, dodijelite radnike i pratite izvršenje na terenu.', 
        en: 'Generate work orders from tasks, assign workers, and track field execution.' 
      },
    },
    
    scheduling: {
      title: { hr: 'Vizualni kalendar', en: 'Visual Calendar' },
      description: { 
        hr: 'Drag-and-drop raspored s dnevnim, tjednim i mjesečnim prikazom. Jednostavno planiranje.', 
        en: 'Drag-and-drop scheduling with day, week, and month views. Easy planning.' 
      },
    },
    
    fiscalization: {
      title: { hr: 'Fiskalizacija 2.0', en: 'Fiscalization 2.0' },
      description: { 
        hr: 'Automatizirano izdavanje računa u skladu s hrvatskim propisima putem odabranog posrednika.', 
        en: 'Full integration with FINA system. Automated invoicing compliant with Croatian regulations.' 
      },
    },
    
    teams: {
      title: { hr: 'Upravljanje timovima', en: 'Team Management' },
      description: { 
        hr: 'Organizirajte radnike u timove, pratite dostupnost i optimizirajte resurse.', 
        en: 'Organize workers into teams, track availability, and optimize resources.' 
      },
    },
    
    invoicing: {
      title: { hr: 'Ponude i računi', en: 'Quotes & Invoices' },
      description: { 
        hr: 'Kreirajte profesionalne ponude i račune. Upravljajte cijenama i katalogom usluga.', 
        en: 'Create professional quotes and invoices. Manage pricing and service catalog.' 
      },
    },
  },
  
  // Fiscalization Highlight
  fiscal: {
    badge: { hr: 'POSEBNO ZA HRVATSKO TRŽIŠTE', en: 'SPECIAL FOR CROATIAN MARKET' },
    title: { hr: 'INTEGRIRANA 2.0 FISKALIZACIJA', en: 'INTEGRATED 2.0 FISCALIZATION' },
    subtitle: { 
      hr: 'Jedino rješenje koje vam treba za potpunu usklađenost s hrvatskim fiskalnim propisima.', 
      en: 'The only solution you need for full compliance with Croatian fiscal regulations.' 
    },
    features: {
      invoices: { hr: 'B2B i B2C računi', en: 'B2B and B2C invoices' },
      payments: { hr: 'Svi načini plaćanja', en: 'All payment methods' },
      vat: { hr: 'Svi PDV razredi', en: 'All VAT rates' },
      qr: { hr: 'Automatsko generiranje QR kodova', en: 'Automatic QR code generation' },
      offline: { hr: 'Offline podrška', en: 'Offline support' },
      fina: { hr: 'Integracija odabranog posrednika', en: 'Integration with chosen provider' },
    },
  },
  
  // Mobile App Section
  mobile: {
    badge: { hr: 'MOBILNA APLIKACIJA', en: 'MOBILE APP' },
    title: { hr: 'KONTROLA RADNIKA NA TERENU', en: 'FIELD WORKER CONTROL' },
    subtitle: { 
      hr: 'Vaši radnici dobivaju zadatke na mobitel. Počinju radni nalog, dodaju slike, materijale i sve potrebne informacije - direktno s terena.', 
      en: 'Your workers receive tasks on mobile. They start work orders, add photos, materials, and all necessary information - directly from the field.' 
    },
    features: {
      tasks: { hr: 'Primanje zadataka', en: 'Receive tasks' },
      photos: { hr: 'Dodavanje slika', en: 'Add photos' },
      materials: { hr: 'Evidencija materijala', en: 'Material tracking' },
      location: { hr: 'GPS praćenje', en: 'GPS tracking' },
      offline: { hr: 'Podrška za offline mod', en: 'Offline mode support' },
      sync: { hr: 'Automatska sinkronizacija', en: 'Auto sync' },
    },
    stores: {
      ios: { hr: 'Preuzmi za iOS', en: 'Download for iOS' },
      android: { hr: 'Preuzmi za Android', en: 'Download for Android' },
    },
  },
  
  // AI Section
  ai: {
    badge: { hr: 'USKORO', en: 'COMING SOON' },
    title: { hr: 'AI ASISTENTI ZA VAŠ POSAO', en: 'AI ASSISTANTS FOR YOUR BUSINESS' },
    subtitle: { 
      hr: 'Implementiramo napredne AI agente koji će pojednostaviti sve operacije u sustavu. Automatizacija na potpuno novoj razini.', 
      en: 'We are implementing advanced AI agents that will simplify all operations in the system. Automation on a whole new level.' 
    },
    features: {
      automation: { hr: 'Automatsko planiranje', en: 'Automatic planning' },
      insights: { hr: 'Pametni uvidi', en: 'Smart insights' },
      optimization: { hr: 'Optimizacija resursa', en: 'Resource optimization' },
    },
  },
  
  // Testimonials
  testimonials: {
    title: { hr: 'ŠTO KAŽU NAŠI KORISNICI', en: 'WHAT OUR CLIENTS SAY' },
    comingSoon: { hr: 'Uskoro dodajemo recenzije naših zadovoljnih korisnika.', en: 'We will be adding reviews from our satisfied customers soon.' },
  },
  
  // Pricing
  pricing: {
    title: { hr: 'JEDNOSTAVNE CIJENE', en: 'SIMPLE PRICING' },
    subtitle: { 
      hr: 'Prilagođavamo cijene vašim potrebama - ovisno o veličini tvrtke, broju radnika i računa.', 
      en: 'We tailor prices to your needs - depending on company size, number of workers, and invoices.' 
    },
    trial: { hr: '30 dana besplatno', en: '30 days free' },
    trialDesc: { 
      hr: 'Isprobajte sve funkcionalnosti bez obaveza. Otkažite bilo kada.', 
      en: 'Try all features without commitment. Cancel anytime.' 
    },
    cta: { hr: 'Započni besplatni probni period', en: 'Start free trial' },
    contact: { hr: 'Kontaktirajte nas za prilagođenu ponudu', en: 'Contact us for a custom quote' },
  },
  
  // Contact Form
  contact: {
    title: { hr: 'ZATRAŽITE DEMO', en: 'REQUEST A DEMO' },
    subtitle: { 
      hr: 'Pokažite nam svoje izazove, a mi ćemo vam pokazati kako ih Taskado rješava.', 
      en: "Show us your challenges, and we'll show you how Taskado solves them." 
    },
    form: {
      name: { hr: 'Ime i prezime', en: 'Full name' },
      email: { hr: 'E-mail adresa', en: 'Email address' },
      company: { hr: 'Naziv tvrtke', en: 'Company name' },
      phone: { hr: 'Telefon (opcionalno)', en: 'Phone (optional)' },
      message: { hr: 'Poruka', en: 'Message' },
      messagePlaceholder: { 
        hr: 'Opišite ukratko vaše potrebe...', 
        en: 'Briefly describe your needs...' 
      },
      submit: { hr: 'Pošalji zahtjev', en: 'Send request' },
      submitting: { hr: 'Šaljem...', en: 'Sending...' },
      success: { hr: 'Hvala! Javit ćemo vam se uskoro.', en: 'Thank you! We will contact you soon.' },
    },
  },
  
  // Footer
  footer: {
    description: { 
      hr: 'Taskado je sveobuhvatna platforma za upravljanje poslovanjem, posebno dizajnirana za hrvatska mala i srednja poduzeća.', 
      en: 'Taskado is a comprehensive business management platform specially designed for Croatian small and medium businesses.' 
    },
    product: { hr: 'Proizvod', en: 'Product' },
    company: { hr: 'Tvrtka', en: 'Company' },
    legal: { hr: 'Pravno', en: 'Legal' },
    features: { hr: 'Značajke', en: 'Features' },
    mobileApp: { hr: 'Mobilna aplikacija', en: 'Mobile App' },
    integrations: { hr: 'Integracije', en: 'Integrations' },
    aboutUs: { hr: 'O nama', en: 'About Us' },
    careers: { hr: 'Karijere', en: 'Careers' },
    blog: { hr: 'Blog', en: 'Blog' },
    privacy: { hr: 'Privatnost', en: 'Privacy' },
    terms: { hr: 'Uvjeti korištenja', en: 'Terms of Use' },
    cookies: { hr: 'Kolačići', en: 'Cookies' },
    copyright: { hr: '© 2026 Taskado. Sva prava pridržana.', en: '© 2026 Taskado. All rights reserved.' },
  },
};

export function t(key: string, lang: Language): string {
  const keys = key.split('.');
  let value: any = translations;
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return key;
    }
  }
  
  if (value && typeof value === 'object' && lang in value) {
    return value[lang];
  }
  
  return key;
}
