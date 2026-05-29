import { motion } from 'motion/react';
import { Droplet, Zap, Sparkles, Waves, Microscope, ShieldCheck, ArrowRight, LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useContent } from '../../lib/ContentContext';

const iconMap: Record<string, LucideIcon> = {
  droplet: Droplet,
  zap: Zap,
  sparkles: Sparkles,
  waves: Waves,
  microscope: Microscope,
  'shield-check': ShieldCheck,
};

export function ServicesCategories() {
  const { t } = useTranslation();
  const { services } = useContent();

  return (
    <section className=" px-4 sm:px-6 max-w-7xl mx-auto w-full">
      {services.categories.map((category) => (
        <div key={category.id} className="mb-24">
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-3xl font-serif whitespace-nowrap">{category.name}</h2>
            <div className="h-[1px] bg-charcoal/10 w-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {category.items.map((item, idx) => {
              const Icon = iconMap[item.icon] || Droplet;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 md:p-8 rounded-[40px] bg-mint-light/50 border border-charcoal/5 hover:bg-white hover:shadow-2xl transition-all duration-500 flex flex-col md:flex-row gap-4 md:gap-6"
                >
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                    <Icon className="text-primary" size={28} />
                  </div>
                  <div className="space-y-4 flex-grow">
                    <div className="flex justify-between items-start">
                      <h3 className="text-2xl font-serif">{item.title}</h3>
                      <div className="text-sm font-bold text-primary whitespace-nowrap ml-4">{item.price}</div>
                    </div>
                    <p className="text-charcoal/60 leading-relaxed">{item.description}</p>
                    <div className="flex items-center justify-between pt-4">
                      <span className="text-xs font-bold uppercase tracking-widest text-charcoal/40">{item.duration}</span>
                      <Link to="/contact" className="flex items-center gap-2 text-sm font-bold text-primary group underline underline-offset-4">
                        {t('services_page.actions.book_now')} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
}
