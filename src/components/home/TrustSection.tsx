import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

const brands = [
  { name: 'SkinCeuticals', logo: 'SKINCEUTICALS' },
  { name: 'Vogue', logo: 'VOGUE' },
  { name: 'Elle', logo: 'ELLE' },
  { name: 'Bazaar', logo: 'BAZAAR' },
  { name: 'Allure', logo: 'allure' },
];

export function TrustSection() {
  const { t } = useTranslation();
  return (
    <section className="pt-5 pb-10 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-charcoal/30 mb-10">{t('trust.badge')}</p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale">
           {brands.map((brand) => (
             <span key={brand.name} className="text-2xl md:text-3xl font-serif font-black tracking-widest uppercase">
               {brand.logo}
             </span>
           ))}
        </div>
      </div>
    </section>
  );
}
