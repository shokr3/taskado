import { useLanguage } from '../i18n/LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-b from-white to-light-sand/30">
      {/* Decorative elements - hidden on mobile, positioned safely on larger screens */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-high-blue/5 rounded-full blur-3xl pointer-events-none" style={{ WebkitBackfaceVisibility: 'hidden' }}></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-light-sand/50 rounded-full blur-3xl pointer-events-none hidden sm:block" style={{ WebkitBackfaceVisibility: 'hidden' }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
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
              <div className="flex items-center gap-2 px-4 py-3 bg-dark-orchid/90 border-b border-white/10">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 bg-white/10 rounded-md px-4 py-1.5 text-white/60 text-sm ml-4 flex items-center gap-2">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  taskado.app/dashboard
                </div>
              </div>
              
              {/* App layout with sidebar */}
              <div className="flex">
                {/* Sidebar */}
                <div className="w-14 bg-[#080820] flex flex-col items-center py-4 gap-4 border-r border-white/5">
                  {/* Logo */}
                  <div className="w-8 h-8 bg-high-blue rounded-lg flex items-center justify-center mb-2">
                    <span className="text-white font-bold text-xs">T</span>
                  </div>
                  {/* Nav icons */}
                  <div className="w-9 h-9 bg-high-blue/20 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-high-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <div className="w-9 h-9 hover:bg-white/5 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div className="w-9 h-9 hover:bg-white/5 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="w-9 h-9 hover:bg-white/5 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="w-9 h-9 hover:bg-white/5 rounded-lg flex items-center justify-center relative">
                    <svg className="w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="flex-1"></div>
                  <div className="w-9 h-9 hover:bg-white/5 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                
                {/* Main content */}
                <div className="flex-1 bg-gradient-to-br from-dark-orchid to-[#1a1a4a] p-4">
                  {/* Top bar with search and profile */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2 flex-1 max-w-[180px]">
                      <svg className="w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      <span className="text-white/40 text-xs">Pretraži...</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
                      </div>
                      <div className="w-7 h-7 bg-gradient-to-br from-high-blue to-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-medium">MP</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="bg-white/10 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-1">
                        <div className="text-light-sand/60 text-[10px]">Projekti</div>
                        <div className="w-5 h-5 bg-high-blue/20 rounded flex items-center justify-center">
                          <svg className="w-3 h-3 text-high-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                          </svg>
                        </div>
                      </div>
                      <div className="text-white text-xl font-bold">24</div>
                      <div className="flex items-center gap-1 mt-1">
                        <svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                        <span className="text-green-400 text-[10px]">+3 ovaj tjedan</span>
                      </div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-1">
                        <div className="text-light-sand/60 text-[10px]">Zadaci</div>
                        <div className="w-5 h-5 bg-light-sand/20 rounded flex items-center justify-center">
                          <svg className="w-3 h-3 text-light-sand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                          </svg>
                        </div>
                      </div>
                      <div className="text-white text-xl font-bold">156</div>
                      <div className="w-full bg-white/10 rounded-full h-1 mt-2">
                        <div className="bg-light-sand h-1 rounded-full" style={{ width: '68%' }}></div>
                      </div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-1">
                        <div className="text-light-sand/60 text-[10px]">Radnici</div>
                        <div className="w-5 h-5 bg-green-500/20 rounded flex items-center justify-center">
                          <svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        </div>
                      </div>
                      <div className="text-white text-xl font-bold">12</div>
                      <div className="flex -space-x-1 mt-1">
                        <div className="w-4 h-4 bg-blue-400 rounded-full border border-dark-orchid"></div>
                        <div className="w-4 h-4 bg-green-400 rounded-full border border-dark-orchid"></div>
                        <div className="w-4 h-4 bg-yellow-400 rounded-full border border-dark-orchid"></div>
                        <div className="w-4 h-4 bg-white/20 rounded-full border border-dark-orchid flex items-center justify-center">
                          <span className="text-[8px] text-white">+9</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Two column layout */}
                  <div className="grid grid-cols-5 gap-3">
                    {/* Schedule - takes 3 cols */}
                    <div className="col-span-3 bg-white/5 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-white font-semibold text-sm">Raspored</span>
                        <div className="flex items-center gap-2">
                          <button className="text-white/40 hover:text-white">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                          </button>
                          <span className="text-high-blue text-xs font-medium">Siječanj 2026</span>
                          <button className="text-white/40 hover:text-white">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 bg-high-blue/20 rounded-lg p-2">
                          <div className="w-1 h-8 bg-high-blue rounded-full"></div>
                          <div className="flex-1">
                            <div className="text-white text-xs font-medium">Servis klima uređaja</div>
                            <div className="text-white/50 text-[10px]">09:00 - 11:00 • Marko P.</div>
                          </div>
                          <div className="px-2 py-0.5 bg-high-blue/30 rounded text-[9px] text-high-blue font-medium">U tijeku</div>
                        </div>
                        <div className="flex items-center gap-2 bg-light-sand/10 rounded-lg p-2">
                          <div className="w-1 h-8 bg-light-sand rounded-full"></div>
                          <div className="flex-1">
                            <div className="text-white text-xs font-medium">Redoviti pregled</div>
                            <div className="text-white/50 text-[10px]">14:00 - 15:30 • Ivan K.</div>
                          </div>
                          <div className="px-2 py-0.5 bg-white/10 rounded text-[9px] text-white/60 font-medium">Zakazano</div>
                        </div>
                        <div className="flex items-center gap-2 bg-green-500/10 rounded-lg p-2">
                          <div className="w-1 h-8 bg-green-500 rounded-full"></div>
                          <div className="flex-1">
                            <div className="text-white text-xs font-medium">Instalacija sustava</div>
                            <div className="text-white/50 text-[10px]">16:00 - 18:00 • Ana M.</div>
                          </div>
                          <div className="px-2 py-0.5 bg-green-500/20 rounded text-[9px] text-green-400 font-medium">Završeno</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Revenue chart - takes 2 cols */}
                    <div className="col-span-2 bg-white/5 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-semibold text-sm">Prihod</span>
                        <span className="text-green-400 text-[10px] flex items-center gap-1">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                          </svg>
                          +12.5%
                        </span>
                      </div>
                      <div className="text-white text-lg font-bold mb-2">€24,580</div>
                      {/* Mini bar chart */}
                      <div className="flex items-end gap-1 h-12">
                        <div className="flex-1 bg-white/20 rounded-t" style={{ height: '40%' }}></div>
                        <div className="flex-1 bg-white/20 rounded-t" style={{ height: '60%' }}></div>
                        <div className="flex-1 bg-white/20 rounded-t" style={{ height: '45%' }}></div>
                        <div className="flex-1 bg-white/20 rounded-t" style={{ height: '80%' }}></div>
                        <div className="flex-1 bg-white/20 rounded-t" style={{ height: '65%' }}></div>
                        <div className="flex-1 bg-high-blue rounded-t" style={{ height: '100%' }}></div>
                        <div className="flex-1 bg-white/10 rounded-t" style={{ height: '30%' }}></div>
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="text-[8px] text-white/40">Pon</span>
                        <span className="text-[8px] text-white/40">Uto</span>
                        <span className="text-[8px] text-white/40">Sri</span>
                        <span className="text-[8px] text-white/40">Čet</span>
                        <span className="text-[8px] text-white/40">Pet</span>
                        <span className="text-[8px] text-high-blue">Sub</span>
                        <span className="text-[8px] text-white/40">Ned</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating cards */}
            <div className="absolute -left-8 top-1/4 bg-white rounded-xl shadow-xl p-4 hidden lg:block animate-float">
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
            
            <div className="absolute -right-4 bottom-1/4 bg-white rounded-xl shadow-xl p-4 hidden lg:block animate-float-delayed">
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
