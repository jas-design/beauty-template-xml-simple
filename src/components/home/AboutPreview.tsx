import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useContent } from '../../lib/ContentContext';

const interiorImg = import.meta.env.BASE_URL + 'images/clinic_interior_1779219942247.png';
const treatmentImg = import.meta.env.BASE_URL + 'images/treatment_skincare_1779219956804.png';
const about1Img = import.meta.env.BASE_URL + 'images/about1.jpg';
const about2Img = import.meta.env.BASE_URL + 'images/about2.jpg';

export function AboutPreview() {
  const { t } = useTranslation();
  const { home } = useContent();
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="space-y-8 order-2 lg:order-1">
          <div className="text-secondary font-bold uppercase tracking-widest text-xs">{t('about_preview.badge')}</div>
          <h2 className="text-5xl font-serif leading-tight text-primary">
            {home.aboutPreview.title}
          </h2>
          <p className="text-sm font-bold border-l-2 border-secondary pl-6 italic text-charcoal/60">
            {home.aboutPreview.quote}
          </p>
          <p className="text-sm text-charcoal/50 leading-relaxed">
            {home.aboutPreview.desc1}
          </p>
          <p className="text-sm text-charcoal/50 leading-relaxed">
            {home.aboutPreview.desc2}
          </p>

          <div className="pt-4">
            <Link
              to="/about"
              className="px-8 py-3 bg-accent text-charcoal rounded-full font-bold text-xs uppercase tracking-widest hover:shadow-lg transition-all inline-block"
            >
              {t('about_preview.cta')}
            </Link>
          </div>
        </div>

        <div className="relative order-1 lg:order-2 flex justify-end">
          {/* Main Large Image (Right) */}
          <div className="bg-cover bg-right relative w-[85%] rounded-[30px] overflow-hidden shadow-2xl z-10 aspect-[4/5]"
            style={{ backgroundImage: `url(${about1Img})` }}
          >
          </div>

          {/* Secondary Smaller Image (Left Overlapping) */}
          <div className="bg-cover bg-center absolute left-[-5%] bottom-[10%] w-[50%] z-20 rounded-[20px] overflow-hidden border-[10px] border-white shadow-2xl aspect-[3/4]"
            style={{ backgroundImage: `url(${about2Img})` }}
          >
          </div>

          {/* Floating badge */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute -top-10 left-[10%] bg-[#2D999B] rounded-full w-44 h-44 flex flex-col items-center justify-center text-white shadow-2xl z-30 text-center border-[8px] border-white"
          >
            <div className="text-[52px] font-serif font-medium text-[#D4E964] leading-none mb-1">{home.aboutPreview.yearsCount}</div>
            <div className="text-[12px] font-bold uppercase tracking-widest leading-tight">
              {t('about_preview.stats.label')}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
