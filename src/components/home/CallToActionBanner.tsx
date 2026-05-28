import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useContent } from '../../lib/ContentContext';
import nutritionistConsultationImg from '../../assets/images/nutritionist-consultation.jpg';

export function CallToActionBanner() {
   const { t } = useTranslation();
   const { home } = useContent();
   return (
      <section className="relative h-[650px] flex items-center bg-[#E3F5F5] z-20">
         <div className="bg-cover bg-center absolute inset-0 overflow-hidden"
            style={{ backgroundImage: `url(${nutritionistConsultationImg})` }}
         >

            {/* Teal Gradient Overlay matching the mockup */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#209797]/90 via-[#209797]/40 to-transparent" />
         </div>

         <div className="relative z-10 max-w-7xl mx-auto px-6 w-full h-full flex flex-col justify-center">
            <div className="max-w-2xl space-y-8 text-white">
               <div className="space-y-4">
                  <h2 className="text-[64px] font-serif font-medium leading-[1.1] tracking-tight">{home.ctaBanner.titleLarge}</h2>
                  <div className="w-16 h-0.5 bg-[#D4E964]" />
               </div>

               <p className="text-lg opacity-90 max-w-lg leading-relaxed">
                  {home.ctaBanner.descriptionLarge}
               </p>
            </div>

            {/* Consultation Card - Absolute positioned at bottom right, stepped out */}
            <div className="absolute -bottom-24 lg:-bottom-28 right-6 lg:right-12 z-30">
               <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-[40px] shadow-[0_30px_60px_rgba(0,0,0,0.15)] flex flex-col overflow-hidden min-w-full md:min-w-[650px]"
               >
                  <div className="p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-16">
                     <div className="flex-1 space-y-2">
                        <h4 className="text-3xl font-serif font-bold text-charcoal">{home.ctaBanner.title}</h4>
                        <p className="text-gray-400 text-[14px] leading-relaxed max-w-[300px]">
                           {home.ctaBanner.description}
                        </p>
                     </div>

                     {/* Vertical Divider */}
                     <div className="hidden md:block w-px h-16 bg-gray-100" />

                     <div className="shrink-0">
                        <Link
                           to="/contact"
                           className="inline-block px-10 py-5 bg-[#D4E964] text-charcoal rounded-full font-bold text-sm uppercase tracking-widest hover:brightness-105 transition-all shadow-md"
                        >
                           {t('common.contact')}
                        </Link>
                     </div>
                  </div>

                  {/* Thick Teal Bottom Border */}
                  <div className="h-[10px] w-full bg-[#209797]" />
               </motion.div>
            </div>
         </div>
      </section>
   );
}
