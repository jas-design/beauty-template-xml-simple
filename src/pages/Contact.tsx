import { motion } from 'motion/react';
import { ContactHero } from '../components/contact/ContactHero';
import { ContactForm } from '../components/contact/ContactForm';
import { ContactInfo } from '../components/contact/ContactInfo';
import { MapSection } from '../components/contact/MapSection';

export function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ContactHero />
      <ContactForm />
      <ContactInfo />
      <MapSection />
    </motion.div>
  );
}
