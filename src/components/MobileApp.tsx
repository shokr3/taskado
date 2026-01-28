import { useLanguage } from '../i18n/LanguageContext';

const mobileFeatures = ['tasks', 'photos', 'materials', 'location', 'offline', 'sync'] as const;

export function MobileApp() {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-32 bg-light-sand/30">
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Phone mockup */}
          <div className="relative order-2 lg:order-1">
            <div className="relative mx-auto w-64 md:w-80">
              {/* Phone frame */}
              <div className="bg-dark-orchid rounded-[3rem] p-3 shadow-2xl">
                <div className="bg-white rounded-[2.5rem] overflow-hidden">
                  {/* Status bar */}
                  <div className="bg-dark-orchid/5 px-6 py-3 flex justify-between items-center text-xs">
                    <span className="text-dark-orchid/70">9:41</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-2 bg-dark-orchid/30 rounded-sm"></div>
                      <div className="w-4 h-2 bg-dark-orchid/30 rounded-sm"></div>
                      <div className="w-6 h-3 bg-dark-orchid rounded-sm"></div>
                    </div>
                  </div>
                  
                  {/* App content */}
                  <div className="px-4 py-4">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-dark-orchid font-bold">Moji zadaci</h4>
                      <div className="w-8 h-8 bg-high-blue rounded-full flex items-center justify-center text-white text-xs font-bold">
                        3
                      </div>
                    </div>
                    
                    {/* Task cards */}
                    <div className="space-y-3">
                      <div className="bg-high-blue/10 rounded-xl p-4 border-l-4 border-high-blue">
                        <div className="flex justify-between items-start mb-2">
                          <span className="text-sm font-semibold text-dark-orchid">Servis klime</span>
                          <span className="text-xs bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full">Hitno</span>
                        </div>
                        <div className="text-xs text-dark-orchid/60 mb-2">Ul. Grada Vukovara 271</div>
                        <div className="flex gap-2">
                          <button className="flex-1 bg-high-blue text-white text-xs py-2 rounded-lg font-medium">
                            Započni
                          </button>
                          <button className="flex-1 bg-neutral-grey text-dark-orchid text-xs py-2 rounded-lg font-medium">
                            Detalji
                          </button>
                        </div>
                      </div>
                      
                      <div className="bg-neutral-grey rounded-xl p-4">
                        <div className="flex justify-between items-start mb-2">
                          <span className="text-sm font-semibold text-dark-orchid">Redovni pregled</span>
                          <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">14:00</span>
                        </div>
                        <div className="text-xs text-dark-orchid/60">Hotel Palace, soba 205</div>
                      </div>
                      
                      <div className="bg-neutral-grey rounded-xl p-4">
                        <div className="flex justify-between items-start mb-2">
                          <span className="text-sm font-semibold text-dark-orchid">Popravak</span>
                          <span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full">Sutra</span>
                        </div>
                        <div className="text-xs text-dark-orchid/60">Ilica 123</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom nav */}
                  <div className="flex justify-around py-4 border-t border-neutral-grey">
                    <div className="text-high-blue flex flex-col items-center">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs mt-1">Zadaci</span>
                    </div>
                    <div className="text-dark-orchid/40 flex flex-col items-center">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs mt-1">Kalendar</span>
                    </div>
                    <div className="text-dark-orchid/40 flex flex-col items-center">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs mt-1">Profil</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Home indicator */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-dark-orchid/30 rounded-full"></div>
            </div>
            
            {/* Floating notification */}
            <div className="absolute top-10 -right-4 bg-white rounded-xl shadow-xl p-3 hidden lg:flex items-center gap-2">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-xs text-dark-orchid font-medium">Slika dodana</span>
            </div>
          </div>
          
          {/* Right - Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block px-4 py-2 bg-high-blue/10 text-high-blue rounded-full text-sm font-semibold mb-6">
              {t('mobile.badge')}
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-orchid mb-6">
              {t('mobile.title')}
            </h2>
            
            <p className="text-lg md:text-xl text-dark-orchid/70 mb-10 font-figtree">
              {t('mobile.subtitle')}
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-10">
              {mobileFeatures.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-high-blue flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-dark-orchid font-medium">{t(`mobile.features.${feature}`)}</span>
                </div>
              ))}
            </div>
            
            {/* App store buttons */}
            <div className="flex flex-wrap gap-4">
              <a href="#" className="inline-flex items-center gap-3 bg-dark-orchid text-white px-6 py-3 rounded-xl hover:bg-dark-orchid/90 transition-colors">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-80">{t('mobile.stores.ios')}</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </a>
              
              <a href="#" className="inline-flex items-center gap-3 bg-dark-orchid text-white px-6 py-3 rounded-xl hover:bg-dark-orchid/90 transition-colors">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-80">{t('mobile.stores.android')}</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
