import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Fiscalization } from './components/Fiscalization';
import { MobileApp } from './components/MobileApp';
import { AISection } from './components/AISection';
import { Pricing } from './components/Pricing';
// import { Testimonials } from './components/Testimonials';
import { TrustBadges } from './components/TrustBadges';
import { Contact } from './components/Contact';
import { EnterpriseBanner } from './components/EnterpriseBanner';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Fiscalization />
        <MobileApp />
        <AISection />
        {/* <Testimonials /> */}
        <Pricing />
        <TrustBadges />
        <Contact />
        <EnterpriseBanner />
      </main>
      <Footer />
    </div>
  );
}

export default App;
