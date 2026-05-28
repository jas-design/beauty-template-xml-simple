
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { useContent } from '../../lib/ContentContext';
import documentSearchIcon from '../../assets/icons/document-search.svg?react';
import chatIcon from '../../assets/icons/chat.svg?react';
import medicineIcon from '../../assets/icons/medicine.svg?react';
import clipboardIcon from '../../assets/icons/clipboard.svg?react';


export function HowItWorks() {
  const { t } = useTranslation();
  const { home } = useContent();

  const iconList = [chatIcon, documentSearchIcon, medicineIcon, clipboardIcon];
  const steps = home.howItWorks.steps.map((s, i) => ({
    step: String(i + 1).padStart(2, '0'),
    title: s.title,
    icon: iconList[i] || chatIcon,
    desc: s.description,
    highlight: i === 2,
  }));

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-6 mb-24">
          <div className="text-[#2D999B] font-bold uppercase tracking-[0.3em] text-[10px]">{t('how_it_works.badge')}</div>
          <h2 className="text-[52px] font-serif text-[#1A1A1A] leading-tight">{home.howItWorks.title}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-[16px] leading-relaxed">
            {home.howItWorks.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: parseInt(s.step) * 0.1 }}
              className={`group rounded-[20px] p-10 shadow-sm relative overflow-hidden flex flex-col justify-between min-h-[420px] transition-all hover:shadow-xl ${s.highlight ? 'bg-[#E3F5F5]' : 'bg-white border border-gray-50'}`}
            >
              {/* Step Badge */}
              <div className="absolute top-0 right-0 bg-[#2D999B] text-white px-4 py-2 text-[11px] font-bold rounded-bl-[10px] tracking-wider z-10">
                {t('how_it_works.steps.step_label')} {s.step}
              </div>

              {/* Icon Section */}
              <div className="mb-12">
                <div className="text-[#2D999B] w-14 h-14">
                  <s.icon className="w-full h-full" style={{ color: '#2D999B' }} />
                </div>
              </div>

              {/* Content Section with Left Border */}
              <div className="space-y-6 border-l-2 border-[#2D999B] pl-6 py-1">
                <h3 className="text-3xl font-serif font-medium text-[#1A1A1A] leading-tight">{s.title}</h3>
                <p className="text-[14px] text-gray-500 leading-relaxed font-sans max-w-[200px]">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
