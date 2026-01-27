import { useLanguage } from '../i18n/LanguageContext';

const aiFeatures = ['automation', 'insights', 'optimization'] as const;

export function AISection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-high-blue/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-high-blue to-purple-600 text-white rounded-full text-sm font-semibold mb-6">
            {t('ai.badge')}
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-orchid mb-6">
            {t('ai.title')}
          </h2>
          
          <p className="text-lg md:text-xl text-dark-orchid/70 mb-12 font-figtree">
            {t('ai.subtitle')}
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {aiFeatures.map((feature) => (
              <div 
                key={feature} 
                className="flex items-center gap-3 bg-white shadow-lg rounded-full px-6 py-3"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-high-blue to-purple-600 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                </div>
                <span className="text-dark-orchid font-semibold">{t(`ai.features.${feature}`)}</span>
              </div>
            ))}
          </div>
          
          {/* AI Visual */}
          <div className="relative inline-block">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-r from-high-blue to-purple-600 opacity-20 blur-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="relative bg-gradient-to-r from-high-blue to-purple-600 rounded-3xl p-8 text-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-white/80 text-sm">AI Asistent</div>
                  <div className="font-semibold">Taskado AI</div>
                </div>
              </div>
              
              <div className="bg-white/10 rounded-xl p-4 text-left mb-4">
                <p className="text-sm">
                  "Analiziram vaš raspored... Predlažem preraspodjelu 3 radna naloga za bolju efikasnost."
                </p>
              </div>
              
              <div className="flex gap-3">
                <button className="flex-1 bg-white text-high-blue py-2 rounded-lg text-sm font-semibold">
                  Primijeni
                </button>
                <button className="flex-1 bg-white/20 text-white py-2 rounded-lg text-sm font-semibold">
                  Prikaži detalje
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
