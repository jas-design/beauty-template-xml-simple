import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronsRight, ChevronDown } from 'lucide-react';
import { cn } from '../../lib/utils';
import { useTranslation } from 'react-i18next';
import { useContent } from '../../lib/ContentContext';
import manSeniorImg from '../../assets/images/man-senior.jpg';

export function FAQ() {
  const { t } = useTranslation();
  const { home } = useContent();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = home.faq.items.map(item => ({
    q: item.question,
    a: item.answer,
  }));

  return (
    <section className="py-24 bg-white px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left: Image with Offset Background */}
        <div className="relative max-w-xl mx-auto lg:mx-0">
          {/* Offset Shadow Layer (Teal Border) */}
          <div className="absolute top-4 left-0 right-4 bottom-0 bg-[#209797] rounded-[35px] lg:rounded-[45px]" />

          <div className="relative ml-4 -mt-4 rounded-[35px] lg:rounded-[45px] overflow-hidden aspect-[4/5] shadow-xl z-10">
            <img
              src={manSeniorImg}
              className="w-full h-full object-cover"
              alt="Treatment session"
            />

            {/* Float Box Card */}
            <div className="absolute bottom-6 left-6 right-6 bg-[#E6F5F5]/95 backdrop-blur-sm p-6 lg:p-8 rounded-[25px] border border-white/20 shadow-lg z-20">
              <h4 className="font-serif text-xl font-medium text-charcoal mb-2">{home.faq.stillQuestionsTitle}</h4>
              <p className="text-sm text-charcoal/60 leading-relaxed">
                {home.faq.stillQuestionsDesc}
              </p>
            </div>
          </div>
        </div>

        {/* Right: FAQ Content */}
        <div className="space-y-12">
          <div className="space-y-6">
            <span className="text-[#3CB3AB] font-bold uppercase tracking-[0.2em] text-[12px]">{t('faq.badge')}</span>
            <h2 className="text-5xl md:text-6xl font-serif text-charcoal leading-[1.1] font-medium">
              {home.faq.title}
            </h2>
            <p className="text-charcoal/60 leading-relaxed max-w-xl">
              {home.faq.description}
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="border-b border-dotted border-gray-300">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full py-6 flex items-start gap-4 text-left transition-colors group"
                  >
                    <span className="mt-1 flex-shrink-0">
                      {isOpen ? (
                        <ChevronDown className="text-[#3CB3AB] w-5 h-5" />
                      ) : (
                        <ChevronsRight className="text-charcoal/30 w-5 h-5 group-hover:text-charcoal/50" />
                      )}
                    </span>
                    <span className={cn(
                      "text-xl md:text-2xl font-serif transition-colors",
                      isOpen ? "text-[#3CB3AB]" : "text-charcoal/80 group-hover:text-charcoal"
                    )}>
                      {faq.q}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pb-8 pl-9 pr-4 text-charcoal/60 leading-relaxed text-sm md:text-base">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
