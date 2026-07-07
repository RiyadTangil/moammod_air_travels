import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import Hero from '@/components/home/Hero';
import ProfileHero from '@/components/profile/ProfileHero';
import AnnouncementTicker from '@/components/home/AnnouncementTicker';
import Services from '@/components/home/Services';
import WhyUs from '@/components/home/WhyUs';
import ProcessSteps from '@/components/home/ProcessSteps';
import Testimonials from '@/components/home/Testimonials';
import CTABanner from '@/components/home/CTABanner';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <AnnouncementTicker />
      <Services />
      <ProfileHero />
      <WhyUs />
      <ProcessSteps />
      <Testimonials />
      <CTABanner />
      <Footer />
    </>
  );
}
