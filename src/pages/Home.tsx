import { motion } from 'motion/react';
import { Hero } from '../components/home/Hero';
import { ServiceShowcase } from '../components/home/ServiceShowcase';
import { TrustSection } from '../components/home/TrustSection';
import { AboutPreview } from '../components/home/AboutPreview';
import { PricingPreview } from '../components/home/PricingPreview';
import { Testimonials } from '../components/home/Testimonials';
import { FAQ } from '../components/home/FAQ';
import { ExpertBanner } from '../components/home/ExpertBanner';
import { CallToActionBanner } from '../components/home/CallToActionBanner';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { HowItWorks } from '../components/home/HowItWorks';
import { VideoSection } from '../components/home/VideoSection';
import { AppointmentSection } from '../components/home/AppointmentSection';

export function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <AboutPreview />
      <TrustSection />
      <ExpertBanner />
      <ServiceShowcase />
      <CallToActionBanner />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <VideoSection />
      <PricingPreview />
      <AppointmentSection />
      <FAQ />
    </motion.div>
  );
}
