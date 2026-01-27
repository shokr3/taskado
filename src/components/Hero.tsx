import { useLanguage } from '../i18n/LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-b from-white to-light-sand/30">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-high-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-light-sand rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <span className="inline-block px-4 py-2 bg-high-blue/10 text-high-blue rounded-full text-sm font-semibold mb-6">
              {t('hero.tagline')}
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-orchid leading-tight mb-6">
              {t('hero.title')}
            </h1>
            
            <p className="text-lg md:text-xl text-dark-orchid/70 mb-8 max-w-xl mx-auto lg:mx-0 font-figtree">
              {t('hero.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
              <a 
                href="#contact" 
                className="btn-primary px-8 py-4 rounded-xl font-semibold text-lg inline-flex items-center justify-center gap-2"
              >
                {t('hero.cta')}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              
              <a 
                href="#contact" 
                className="px-8 py-4 rounded-xl font-semibold text-lg border-2 border-dark-orchid text-dark-orchid hover:bg-dark-orchid hover:text-white transition-all inline-flex items-center justify-center gap-2"
              >
                {t('hero.ctaSecondary')}
              </a>
            </div>
            
            <p className="text-sm text-dark-orchid/60 flex items-center justify-center lg:justify-start gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {t('hero.trialNote')}
            </p>
          </div>
          
          {/* Right content - Dashboard mockup */}
          <div className="relative">
            <div className="relative bg-dark-orchid rounded-2xl shadow-2xl overflow-hidden">
              {/* Browser bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-dark-orchid/90">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 bg-white/10 rounded-md px-4 py-1 text-white/60 text-sm ml-4">
                  taskado.app
                </div>
              </div>
              
              {/* Dashboard preview */}
              <div className="p-6 bg-gradient-to-br from-dark-orchid to-[#1a1a4a]">
                {/* Stats row */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-light-sand/60 text-xs mb-1">Projekti</div>
                    <div className="text-white text-2xl font-bold">24</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-light-sand/60 text-xs mb-1">Zadaci</div>
                    <div className="text-white text-2xl font-bold">156</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-light-sand/60 text-xs mb-1">Radnici</div>
                    <div className="text-white text-2xl font-bold">12</div>
                  </div>
                </div>
                
                {/* Calendar preview */}
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-white font-semibold">Raspored</span>
                    <span className="text-high-blue text-sm">Siječanj 2026</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 bg-high-blue/20 rounded-lg p-3">
                      <div className="w-1 h-10 bg-high-blue rounded-full"></div>
                      <div>
                        <div className="text-white text-sm font-medium">Servis klima uređaja</div>
                        <div className="text-white/60 text-xs">09:00 - 11:00</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-light-sand/20 rounded-lg p-3">
                      <div className="w-1 h-10 bg-light-sand rounded-full"></div>
                      <div>
                        <div className="text-white text-sm font-medium">Redoviti pregled</div>
                        <div className="text-white/60 text-xs">14:00 - 15:30</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating cards */}
            <div className="absolute -left-8 top-1/4 bg-white rounded-xl shadow-xl p-4 hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-dark-orchid">Račun fiskaliziran</div>
                  <div className="text-xs text-dark-orchid/60">JIR: 99887766...</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -right-4 bottom-1/4 bg-white rounded-xl shadow-xl p-4 hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-high-blue/10 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-high-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-dark-orchid">Novi radni nalog</div>
                  <div className="text-xs text-dark-orchid/60">Dodijeljen: Pero P.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
