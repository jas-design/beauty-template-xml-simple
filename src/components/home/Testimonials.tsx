import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { useContent } from '../../lib/ContentContext';
import DoubleQuoteIcon from '../../assets/icons/double-quote.svg?react';
const beautySkinlImg = import.meta.env.BASE_URL + 'images/beauty-skin.jpg';

export function Testimonials() {
  const { t } = useTranslation();
  const { home } = useContent();
  const [index, setIndex] = useState(0);

  const testimonials = home.testimonials.length > 0 ? home.testimonials : [
    {
      name: 'Paula J. Perri',
      role: 'Model / Artist',
      quote: 'The specialists at Cutisure provided exceptional skincare service with real results.',
      img: beautySkinlImg
    }
  ];

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-12 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#E3F5F5] rounded-[30px] p-10 md:p-14 relative overflow-hidden flex flex-col lg:flex-row gap-12 lg:gap-20 items-center"
        >
          {/* Subtle Floral Background Pattern */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.08] pointer-events-none z-0">
            <svg viewBox="0 0 500 500" className="w-full h-full text-[#2D999B]" fill="none" stroke="currentColor" strokeWidth="0.5">
              <path d="M250,50 Q280,150 200,250 T250,450" />
              <path d="M200,80 Q250,180 150,280 S250,380 200,420" />
              <path d="M300,100 c50,50 50,150 0,200" />
              <path d="M350,150 c30,30 30,100 0,130" />
              <path d="M400,200 c20,20 20,80 0,100" />
              {/* Petals */}
              <path d="M300,250 c20,-20 40,-20 60,0 c-20,20 -40,20 -60,0" />
              <path d="M320,300 c20,-20 40,-20 60,0 c-20,20 -40,20 -60,0" />
            </svg>
          </div>

          <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-bl-[40px] flex items-center justify-center z-10 shadow-sm">
            <DoubleQuoteIcon className="w-16 h-16" style={{ color: '#A2E5E9' }} />
          </div>

          {/* Left: Image Container */}
          <div className="w-full lg:w-[45%] shrink-0 relative z-10 order-2 lg:order-1">
            <div className="rounded-[20px] overflow-hidden aspect-[4/3] lg:min-h-[400px] shadow-sm bg-white">
              <AnimatePresence mode="wait">
                <motion.img
                  key={index}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6 }}
                  src={testimonials[index].img}
                  className="w-full h-full object-cover"
                  alt={testimonials[index].name}
                />
              </AnimatePresence>
            </div>
          </div>

          {/* Right: Content Container */}
          <div className="flex-1 space-y-10 relative z-10 order-1 lg:order-2">
            <h2 className="text-[35px] font-serif text-[#1A1A1A] leading-tight">{t('testimonials.title')}</h2>

            <div className="space-y-10">
              <div className="min-h-[120px] relative">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="text-[17px] text-gray-500 leading-relaxed max-w-[550px] font-sans"
                  >
                    {testimonials[index].quote}
                  </motion.p>
                </AnimatePresence>
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-6"
                  >
                    <div className="w-20 h-20 rounded-full overflow-hidden border-[4px] border-white shadow-xl bg-white">
                      <img
                        src={testimonials[index].img}
                        className="w-full h-full object-cover"
                        alt={testimonials[index].name}
                      />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-[20px] font-serif font-bold text-[#1A1A1A]">{testimonials[index].name}</h4>
                      <p className="text-[13px] text-gray-400 font-medium tracking-wide uppercase">{testimonials[index].role}</p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Controls */}
                <div className="flex gap-4">
                  <button
                    onClick={prev}
                    className="w-12 h-12 rounded-full border border-[#2D999B]/20 flex items-center justify-center text-[#2D999B] hover:bg-[#2D999B] hover:text-white transition-all shadow-sm"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={next}
                    className="w-12 h-12 rounded-full border border-[#2D999B]/20 flex items-center justify-center text-[#2D999B] hover:bg-[#2D999B] hover:text-white transition-all shadow-sm"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

