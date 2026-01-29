import { useLanguage } from '../i18n/LanguageContext';

export function TrustBadges() {
  const { language } = useLanguage();

  return (
    <section className="py-12 bg-neutral-grey/50">
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Text */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-dark-orchid mb-1">
              {language === 'hr' ? 'Sigurnost i kvaliteta' : 'Security & Quality'}
            </h3>
            <p className="text-sm text-dark-orchid/60">
              {language === 'hr' 
                ? 'Certificirani prema međunarodnim standardima' 
                : 'Certified according to international standards'}
            </p>
          </div>
          
          {/* Certification badges */}
          <div className="flex items-center gap-6 md:gap-8">
            <div className="flex flex-col items-center">
              <img 
                src="/iso-27001.png" 
                alt="ISO 27001 - Information Security" 
                className="h-20 md:h-24 object-contain"
              />
              <span className="text-xs text-dark-orchid/60 mt-2">ISO 27001</span>
            </div>
            <div className="flex flex-col items-center">
              <img 
                src="/iso-20000.webp" 
                alt="ISO 20000 - IT Service Management" 
                className="h-20 md:h-24 object-contain"
              />
              <span className="text-xs text-dark-orchid/60 mt-2">ISO 20000</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
