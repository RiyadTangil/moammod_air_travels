import type { Metadata } from 'next';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import ProfileHero from '@/components/profile/ProfileHero';
import BusinessDetails from '@/components/profile/BusinessDetails';
import FounderBio from '@/components/profile/FounderBio';
import MapSection from '@/components/profile/MapSection';

export const metadata: Metadata = {
  title: 'About Us — Mohammad Air International Travels Bangladesh',
  description: 'Learn about Mohammad Air International Travels — Bangladesh\'s trusted travel and visa agency. Meet our team, explore our history, and find our office location in Dhaka.',
};

export default function ProfilePage() {
  return (
    <>
      <Navbar />
      <ProfileHero />
      <BusinessDetails />
      <FounderBio />
      <MapSection />
      <Footer />
    </>
  );
}
