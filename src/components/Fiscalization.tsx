import { useLanguage } from '../i18n/LanguageContext';

const fiscalFeatures = ['invoices', 'payments', 'vat', 'qr', 'offline', 'fina'] as const;

export function Fiscalization() {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-32 bg-dark-orchid relative overflow-hidden">
      {/* Decorative ribbon elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-high-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-light-sand/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-high-blue text-white rounded-full text-sm font-semibold mb-6">
              {t('fiscal.badge')}
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {t('fiscal.title')}
            </h2>
            
            <p className="text-lg md:text-xl text-light-sand/80 mb-10 font-figtree">
              {t('fiscal.subtitle')}
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {fiscalFeatures.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-high-blue/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-high-blue" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-white font-medium">{t(`fiscal.features.${feature}`)}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right - Visual */}
          <div className="relative">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              {/* Invoice mockup */}
              <div className="bg-white rounded-xl p-6 shadow-xl">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <img src="/logo.png" alt="Taskado" className="h-6 mb-2" />
                    <div className="text-xs text-dark-orchid/60">Fiskalni račun br. R1-123/1/1</div>
                  </div>
                  <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                    FISKALIZIRANO
                  </div>
                </div>
                
                <div className="border-t border-b border-neutral-grey py-4 mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-dark-orchid/70">Usluga servisa</span>
                    <span className="text-dark-orchid font-medium">€150.00</span>
                  </div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-dark-orchid/70">Materijal</span>
                    <span className="text-dark-orchid font-medium">€75.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-dark-orchid/70">PDV (25%)</span>
                    <span className="text-dark-orchid font-medium">€56.25</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mb-6">
                  <span className="text-dark-orchid font-bold text-lg">Ukupno:</span>
                  <span className="text-high-blue font-bold text-2xl">€281.25</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-xs text-dark-orchid/60">
                    <div>JIR: 99887766-5544-3322...</div>
                    <div>ZKI: abcd1234567890...</div>
                  </div>
                  {/* QR Code placeholder */}
                  <div className="w-16 h-16 bg-dark-orchid rounded-lg flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* FINA badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-xl px-4 py-3 flex items-center gap-2">
                <div className="w-8 h-8 bg-high-blue rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-dark-orchid font-semibold text-sm">Račun fiskaliziran</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
