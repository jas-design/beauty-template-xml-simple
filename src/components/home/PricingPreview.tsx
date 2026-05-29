import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../../lib/utils';
import { useTranslation } from 'react-i18next';
import { useContent } from '../../lib/ContentContext';

export function PricingPreview() {
  const { t } = useTranslation();
  const { home } = useContent();

  const plans = home.pricingPreview.plans.map((p, i) => ({
    name: p.name,
    price: p.price,
    period: t('pricing_preview.period'),
    desc: home.pricingPreview.planDesc,
    features: p.features,
    highlight: i === 1
  }));

  return (
    <section className="pt-8 pb-16 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-2 md:gap-12 mb-20">
          <div className="space-y-4">
            <div className="text-[#2D999B] font-bold uppercase tracking-[0.3em] text-[10px]">{t('pricing_preview.badge')}</div>
            <h2 className="text-[32px] md:text-[52px] font-serif text-[#1A1A1A] leading-tight max-w-xl">{home.pricingPreview.title}</h2>
          </div>
          <div className="max-w-sm space-y-6 lg:text-left pt-2 md:pt-10">
            <p className="text-gray-400 text-[15px] leading-relaxed">
              {home.pricingPreview.description}
            </p>
            <Link to="/pricing" className="text-[#1A1A1A] font-bold text-[15px] hover:text-[#2D999B] transition-colors inline-flex items-center gap-2 border-b-2 border-[#1A1A1A] pb-0.5">
              {t('pricing_preview.cta')} <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-[35px] overflow-hidden shadow-sm border border-gray-100 flex flex-col group hover:shadow-xl transition-all duration-500"
            >
              {/* Top Colored Section */}
              <div className={cn(
                "p-6 md:p-12 text-center flex flex-col items-center",
                plan.highlight ? "bg-gradient-to-b from-[#156B6D] to-[#2D999B] text-white" : "bg-[#E3F5F5] text-[#1A1A1A]"
              )}>
                <h3 className="text-3xl font-serif font-bold mb-2 md:mb-6">{plan.name}</h3>
                <p className={cn("text-[13px] leading-relaxed max-w-[220px] mb-2 md:mb-8", plan.highlight ? "text-white/80" : "text-gray-400")}>
                  {plan.desc}
                </p>
                <div className="flex items-baseline justify-center gap-1 mb-8">
                  <span className="text-[40px] md:text-[64px] font-serif font-medium leading-none">{plan.price}</span>
                  <span className={cn("text-[14px] font-serif", plan.highlight ? "text-white/80" : "text-gray-400")}>{plan.period}</span>
                </div>
                <Link
                  to="/book"
                  className="w-full py-4 bg-[#D4E964] text-[#1A1A1A] rounded-full font-bold text-[14px] transition-all hover:brightness-105 shadow-md"
                >
                  {t('pricing_preview.purchase')}
                </Link>
              </div>

              {/* Bottom Feature List Section */}
              <div className="p-6 md:p-12 pb-10 md:pb-16 flex-1 bg-white">
                <h4 className="text-[14px] font-bold text-[#1A1A1A] mb-8">{t('pricing_preview.include')}</h4>
                <ul className="space-y-0 text-gray-500">
                  {plan.features.map((feature, fIdx) => (
                    <li
                      key={feature}
                      className={cn(
                        "flex items-center gap-3 py-1 md:py-4 text-[15px] font-medium transition-colors",
                        fIdx !== plan.features.length - 1 && "border-b border-dotted border-gray-200"
                      )}
                    >
                      <div className="w-5 h-5 rounded-full flex items-center justify-center text-[#2D999B] shrink-0">
                        <Check size={20} strokeWidth={3} />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Thick Teal Bottom Border */}
              <div className="h-[6px] w-full bg-[#209797] rounded-b-[35px]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
