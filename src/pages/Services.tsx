import { motion } from 'motion/react';
import { ServicesHero } from '../components/services/ServicesHero';
import { ServicesFeature } from '../components/services/ServicesFeature';
import { ServicesCategories } from '../components/services/ServicesCategories';
import { AfterCareNote } from '../components/services/AfterCareNote';

export function Services() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ServicesHero />
      <ServicesFeature />
      <ServicesCategories />
      <AfterCareNote />
    </motion.div>
  );
}
