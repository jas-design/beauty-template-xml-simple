import { motion } from 'motion/react';
import { Flower2 } from 'lucide-react';
import { useContent } from '../../lib/ContentContext';
const skincareProfessionalImg = import.meta.env.BASE_URL + 'images/skincare-professional.jpg';

export function ExpertBanner() {
  const { home } = useContent();
  return (
    <section className="relative py-16 md:py-40 overflow-hidden flex items-center justify-center min-h-[500px]">
      <div className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${skincareProfessionalImg})` }}
      >
        <div className="absolute inset-0 bg-[#209797]/70 mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white space-y-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Flower2 size={64} className="text-[#A5E1E1]" strokeWidth={1} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1] font-medium"
        >
          {home.expertBanner.title}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-1"
        >
          <p className="text-sm md:text-base font-light tracking-wide text-white/90">
            {home.expertBanner.desc1}
          </p>
          <p className="text-sm md:text-base font-light tracking-wide text-white/90">
            {home.expertBanner.desc2}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="w-16 h-[2.5px] bg-[#D4E95F] mx-auto mt-12"
        />
      </div>
    </section>
  );
}
