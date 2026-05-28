import { HeartPulse, Stethoscope, MessageSquareMore, CheckCircle2, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { useContent } from '../../lib/ContentContext';
import applyingMoisturiserImg from '../../assets/images/applying-moisturiser.jpg';

export function WhyChooseUs() {
  const { t } = useTranslation();
  const { home } = useContent();

  const iconList = [HeartPulse, Stethoscope, MessageSquareMore];
  const benefits = home.whyChooseUs.benefits.map((title, i) => ({
    title,
    icon: iconList[i] || HeartPulse,
    desc: home.whyChooseUs.benefitDesc,
  }));

  return (
    <section className="pt-40 pb-24 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-12">
          <div className="space-y-4 text-center lg:text-left">
            <div className="text-[#2D999B] font-bold uppercase tracking-[0.3em] text-[10px]">{t('why_choose_us.badge')}</div>
            <h2 className="text-[52px] font-serif text-[#1A1A1A] leading-tight">{home.whyChooseUs.title}</h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xl">
              {home.whyChooseUs.description}
            </p>
          </div>

          <div className="space-y-10">
            {benefits.map((b) => (
              <div key={b.title} className="flex gap-8 items-start group">
                <div className="w-20 h-20 bg-[#2D999B] rounded-full flex items-center justify-center text-white shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                  <b.icon size={36} strokeWidth={1.5} />
                </div>
                <div className="space-y-2 pt-1">
                  <h3 className="text-2xl font-serif font-bold text-[#1A1A1A]">{b.title}</h3>
                  <p className="text-[15px] text-gray-400 leading-relaxed font-sans">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[30px] overflow-hidden aspect-square shadow-2xl relative bg-[#BEE3E4]">
            <img
              src={applyingMoisturiserImg}
              className="w-full h-full object-cover"
              alt="Woman applying skincare"
            />
          </div>

          {/* Satisfied badge - Moved to Right and Restyled */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute bottom-12 right-[8%] bg-white rounded-[25px] p-6 shadow-2xl z-20 w-[220px] flex flex-col items-center border border-gray-50"
          >
            {/* Floating Icon Cicle */}
            <div className="absolute -top-10 w-20 h-20 bg-[#2D999B] rounded-full border-[6px] border-white flex items-center justify-center text-[#D4E964] shadow-xl">
              <Sparkles size={32} strokeWidth={1.5} />
            </div>

            {/* Stats Box */}
            <div className="mt-6 bg-[#E3F5F5] rounded-[20px] p-6 w-full text-center">
              <div className="text-[48px] font-serif font-medium text-[#2D999B] leading-none mb-3">97%</div>
              <div className="text-[13px] font-bold text-gray-500 font-sans tracking-tight">{t('why_choose_us.stats')}</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
