import { motion } from 'motion/react';
import { AboutHero } from '../components/about/AboutHero';
import { StorySection } from '../components/about/StorySection';
import { ValuesSection } from '../components/about/ValuesSection';
import { TeamSection } from '../components/about/TeamSection';

export function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AboutHero />
      <StorySection />
      <ValuesSection />
      <TeamSection />
    </motion.div>
  );
}
