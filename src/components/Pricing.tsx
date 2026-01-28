import { useLanguage } from '../i18n/LanguageContext';

export function Pricing() {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="py-20 md:py-32 bg-light-sand/30">
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-orchid mb-4">
            {t('pricing.title')}
          </h2>
          <p className="text-lg md:text-xl text-dark-orchid/70 max-w-2xl mx-auto font-figtree">
            {t('pricing.subtitle')}
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-high-blue to-purple-600 p-8 text-center">
              <div className="inline-block bg-white/20 rounded-full px-4 py-1 text-white text-sm font-semibold mb-4">
                {t('pricing.trial')}
              </div>
              <p className="text-white/90 font-figtree">
                {t('pricing.trialDesc')}
              </p>
            </div>
            
            {/* Features */}
            <div className="p-8">
              <ul className="space-y-4 mb-8">
                {[
                  'Svi moduli uključeni',
                  'Neograničen broj projekata',
                  'Neograničen broj zadataka',
                  'Mobilna aplikacija',
                  'Fiskalizacija 2.0',
                  'E-mail podrška',
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-dark-orchid">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="#contact" 
                className="block w-full btn-primary py-4 rounded-xl font-semibold text-lg text-center mb-4"
              >
                {t('pricing.cta')}
              </a>
              
              <p className="text-center text-dark-orchid/60 text-sm">
                {t('pricing.contact')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
