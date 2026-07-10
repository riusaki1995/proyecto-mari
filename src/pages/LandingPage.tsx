import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { AppShowcase } from '../components/AppShowcase';
import { GamesGrid } from '../components/GamesGrid';
import { OverlaysShowcase } from '../components/OverlaysShowcase';
import { Features } from '../components/Features';
import { Pricing } from '../components/Pricing';
import { CtaBanner } from '../components/CtaBanner';
import { Footer } from '../components/Footer';

export function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AppShowcase />
        <GamesGrid />
        <OverlaysShowcase />
        <Features />
        <Pricing />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
