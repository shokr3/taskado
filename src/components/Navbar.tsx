import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const loginUrl = '/login'

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-grey">
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img src="./logo.png" alt="Taskado" className="h-8 md:h-10" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-dark-orchid hover:text-high-blue transition-colors font-medium">
              {t('nav.features')}
            </a>
            <a href="#pricing" className="text-dark-orchid hover:text-high-blue transition-colors font-medium">
              {t('nav.pricing')}
            </a>
            <a href="#contact" className="text-dark-orchid hover:text-high-blue transition-colors font-medium">
              {t('nav.contact')}
            </a>
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="flex items-center gap-1 border border-neutral-grey rounded-lg p-1">
              <button
                onClick={() => setLanguage('hr')}
                className={`px-2 py-1 text-sm rounded transition-colors ${
                  language === 'hr' 
                    ? 'bg-dark-orchid text-white' 
                    : 'text-dark-orchid hover:bg-neutral-grey'
                }`}
              >
                HR
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 text-sm rounded transition-colors ${
                  language === 'en' 
                    ? 'bg-dark-orchid text-white' 
                    : 'text-dark-orchid hover:bg-neutral-grey'
                }`}
              >
                EN
              </button>
            </div>
            
            <a 
              href={loginUrl}
              className="text-dark-orchid hover:text-high-blue transition-colors font-medium"
            >
              {t('nav.login')}
            </a>
            
            <a 
              href="#contact" 
              className="btn-primary px-5 py-2.5 rounded-lg font-semibold"
            >
              {t('nav.tryFree')}
            </a>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-neutral-grey">
            <div className="flex flex-col gap-4">
              <a href="#features" className="text-dark-orchid font-medium" onClick={() => setIsMenuOpen(false)}>
                {t('nav.features')}
              </a>
              <a href="#pricing" className="text-dark-orchid font-medium" onClick={() => setIsMenuOpen(false)}>
                {t('nav.pricing')}
              </a>
              <a href="#contact" className="text-dark-orchid font-medium" onClick={() => setIsMenuOpen(false)}>
                {t('nav.contact')}
              </a>
              
              {/* Language Switcher Mobile */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setLanguage('hr')}
                  className={`px-3 py-1.5 text-sm rounded ${
                    language === 'hr' ? 'bg-dark-orchid text-white' : 'border border-dark-orchid'
                  }`}
                >
                  Hrvatski
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1.5 text-sm rounded ${
                    language === 'en' ? 'bg-dark-orchid text-white' : 'border border-dark-orchid'
                  }`}
                >
                  English
                </button>
              </div>
              
              <a 
                href={loginUrl}
                className="text-dark-orchid font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.login')}
              </a>
              
              <a 
                href="#contact" 
                className="btn-primary px-5 py-2.5 rounded-lg font-semibold text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.tryFree')}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
