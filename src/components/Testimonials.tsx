import { useLanguage } from '../i18n/LanguageContext';

export function Testimonials() {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-orchid mb-4">
            {t('testimonials.title')}
          </h2>
        </div>

        {/* Placeholder testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((index) => (
            <div 
              key={index} 
              className="bg-neutral-grey/30 rounded-2xl p-8 border-2 border-dashed border-neutral-grey"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-neutral-grey animate-pulse"></div>
                <div>
                  <div className="h-4 w-24 bg-neutral-grey rounded animate-pulse mb-2"></div>
                  <div className="h-3 w-32 bg-neutral-grey/70 rounded animate-pulse"></div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="h-3 w-full bg-neutral-grey rounded animate-pulse"></div>
                <div className="h-3 w-full bg-neutral-grey rounded animate-pulse"></div>
                <div className="h-3 w-3/4 bg-neutral-grey rounded animate-pulse"></div>
              </div>
              
              <div className="flex gap-1 mt-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-neutral-grey" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-center text-dark-orchid/60 mt-12 font-figtree">
          {t('testimonials.comingSoon')}
        </p>
      </div>
    </section>
  );
}
