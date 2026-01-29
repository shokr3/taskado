import { useLanguage } from '../i18n/LanguageContext';

export function Footer() {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-dark-orchid pt-16 pb-8">
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo and description */}
          <div className="lg:col-span-1">
            <img src="/logo-white.png" alt="Taskado" className="h-8 mb-4" />
            <p className="text-light-sand/70 text-sm font-figtree">
              {t('footer.description')}
            </p>
          </div>
          
          {/* Product links */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.product')}</h4>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-light-sand/70 hover:text-white transition-colors text-sm">
                  {t('footer.features')}
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-light-sand/70 hover:text-white transition-colors text-sm">
                  {t('nav.pricing')}
                </a>
              </li>
              <li>
                <a href="#" className="text-light-sand/70 hover:text-white transition-colors text-sm">
                  {t('footer.mobileApp')}
                </a>
              </li>
              <li>
                <a href="#" className="text-light-sand/70 hover:text-white transition-colors text-sm">
                  {t('footer.integrations')}
                </a>
              </li>
            </ul>
          </div>
          
          {/* Company links */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.company')}</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-light-sand/70 hover:text-white transition-colors text-sm">
                  {t('footer.aboutUs')}
                </a>
              </li>
              <li>
                <a href="#" className="text-light-sand/70 hover:text-white transition-colors text-sm">
                  {t('footer.careers')}
                </a>
              </li>
              <li>
                <a href="#" className="text-light-sand/70 hover:text-white transition-colors text-sm">
                  {t('footer.blog')}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-light-sand/70 hover:text-white transition-colors text-sm">
                  {t('nav.contact')}
                </a>
              </li>
            </ul>
          </div>
          
          {/* Legal links */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.legal')}</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-light-sand/70 hover:text-white transition-colors text-sm">
                  {t('footer.privacy')}
                </a>
              </li>
              <li>
                <a href="#" className="text-light-sand/70 hover:text-white transition-colors text-sm">
                  {t('footer.terms')}
                </a>
              </li>
              <li>
                <a href="#" className="text-light-sand/70 hover:text-white transition-colors text-sm">
                  {t('footer.cookies')}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Certifications */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <span className="text-light-sand/60 text-sm">{language === 'hr' ? 'Certificirani po standardima:' : 'Certified by standards:'}</span>
            <div className="flex items-center gap-6">
              <img src="/iso-27001.png" alt="ISO 27001 Certification" className="h-16 md:h-20 object-contain" />
              <img src="/iso-20000.webp" alt="ISO 20000 Certification" className="h-16 md:h-20 object-contain" />
            </div>
          </div>
        </div>
        
        {/* Developer company info */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left - Developed by */}
            <div className="text-center md:text-left">
              <p className="text-light-sand/40 text-xs uppercase tracking-wider mb-3">{language === 'hr' ? 'Razvio' : 'Developed by'}</p>
              <a 
                href="https://www.knowit.hr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block hover:opacity-80 transition-opacity"
              >
                <img src="/knowit-logo.png" alt="KnowIT" className="h-12 md:h-14" />
              </a>
              <p className="text-light-sand/60 text-sm mt-3">
                KNOW INFORMACIJSKE TEHNOLOGIJE d.o.o.
              </p>
            </div>
            
            {/* Right - Company details */}
            <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-3 text-sm">
              <div className="flex items-center gap-2 text-light-sand/70">
                <svg className="w-4 h-4 text-light-sand/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Radnička cesta 1A, 10000 Zagreb</span>
              </div>
              <div className="flex items-center gap-2 text-light-sand/70">
                <svg className="w-4 h-4 text-light-sand/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>OIB: 82703315852</span>
              </div>
              <a href="tel:+385953873879" className="flex items-center gap-2 text-light-sand/70 hover:text-white transition-colors">
                <svg className="w-4 h-4 text-light-sand/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+385 95 387 3879</span>
              </a>
              <a href="mailto:info@knowit.hr" className="flex items-center gap-2 text-light-sand/70 hover:text-white transition-colors">
                <svg className="w-4 h-4 text-light-sand/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@knowit.hr</span>
              </a>
              <a href="https://www.knowit.hr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-light-sand/70 hover:text-white transition-colors">
                <svg className="w-4 h-4 text-light-sand/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <span>www.knowit.hr</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-light-sand/60 text-sm">
            {t('footer.copyright')}
          </p>
          
          {/* Social links */}
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-high-blue transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-high-blue transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-high-blue transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
