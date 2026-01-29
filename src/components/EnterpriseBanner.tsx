import { useLanguage } from '../i18n/LanguageContext';

export function EnterpriseBanner() {
  const { language } = useLanguage();

  return (
    <section className="py-16 bg-gradient-to-r from-dark-orchid to-[#1a1a4a] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-high-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-light-sand/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left - Content */}
          <div className="text-center lg:text-left flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-high-blue/20 rounded-full text-high-blue text-xs font-semibold mb-4">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              {language === 'hr' ? 'ZA VELIKA PODUZEĆA' : 'FOR LARGE ENTERPRISES'}
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {language === 'hr' 
                ? 'Trebate rješenje za veće poduzeće?' 
                : 'Need a solution for larger enterprise?'}
            </h2>
            
            <p className="text-light-sand/80 text-lg max-w-xl font-figtree">
              {language === 'hr' 
                ? 'Task je naše cjelovito rješenje dizajnirano za velike organizacije s naprednim potrebama, kompleksnim workflow-ima i većim timovima.' 
                : 'Task is our complete solution designed for large organizations with advanced needs, complex workflows, and bigger teams.'}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
              <div className="flex items-start gap-2 text-light-sand/70 text-sm">
                <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {language === 'hr' ? 'Kompletno rješenje za upravljanje i održavanje mreže objekata' : 'Complete solution for managing and maintaining facility networks'}
              </div>
              <div className="flex items-start gap-2 text-light-sand/70 text-sm">
                <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {language === 'hr' ? 'Upravljanje imovinom kroz cijeli životni ciklus' : 'Asset management through the entire lifecycle'}
              </div>
              <div className="flex items-start gap-2 text-light-sand/70 text-sm">
                <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {language === 'hr' ? 'Senzorika i prediktivna analitika' : 'Sensors and predictive analytics'}
              </div>
              <div className="flex items-start gap-2 text-light-sand/70 text-sm">
                <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {language === 'hr' ? 'Optimizacija troškova i operativne učinkovitosti' : 'Cost optimization and operational efficiency'}
              </div>
            </div>
          </div>
          
          {/* Right - Logo and CTA */}
          <div className="flex flex-col items-center gap-6">
            <img src="/task-logo.png" alt="Task" className="h-24 md:h-32 w-auto" />
            
            <a 
              href="https://www.knowit.hr" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-dark-orchid px-6 py-3 rounded-xl font-semibold hover:bg-light-sand transition-colors"
            >
              {language === 'hr' ? 'Saznaj više' : 'Learn more'}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
