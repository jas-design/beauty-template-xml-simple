import { useState } from 'react';
import { Play, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { useContent } from '../../lib/ContentContext';
const asianWomanImg = import.meta.env.BASE_URL + 'images/asian-woman.jpg';

export function VideoSection() {
  const { t } = useTranslation();
  const { home } = useContent();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="w-full px-[3%]">
        <div className="relative rounded-[32px] overflow-hidden min-h-[550px] flex items-center shadow-2xl">
          {/* Background Image & Overlay */}
          <div className="absolute inset-0">
            <img
              src={asianWomanImg}
              className="w-full h-full object-cover"
              alt="Beauty Skincare"
            />
            {/* Teal Gradient Overlay - matches the mockup's atmospheric feel */}
            <div className="absolute inset-0 bg-[#209797]/75 md:bg-[unset] md:bg-gradient-to-r md:from-transparent md:via-[#209797]/60 md:to-[#156B6D]/95" />
          </div>

          <div className="relative z-10 w-full flex flex-col items-center justify-center p-8 md:p-20 text-center h-full">
            {/* Top Divider Line (Always at the top) */}
            <div className="w-full h-[1px] bg-white/20 mb-8" />

            <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-16 items-center justify-center">
              {/* Play Button */}
              <div className="flex justify-center lg:w-[40%] shrink-0">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsOpen(true)}
                  className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center text-[#209797] shadow-[0_0_50px_rgba(255,255,255,0.3)] transition-all group"
                >
                  <div className="ml-1.5 md:ml-2 group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 md:w-11 md:h-11" fill="currentColor" strokeWidth={0} />
                  </div>
                </motion.button>
              </div>

              {/* Content Area */}
              <div className="text-white space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl">
                <h2 className="text-[28px] md:text-[52px] font-serif font-medium leading-[1.2] tracking-tight">
                  {home.videoSection.title1} <br /> {home.videoSection.title2}
                </h2>
                <p className="text-[14px] md:text-[15px] opacity-90 leading-relaxed max-w-xl font-sans font-light">
                  {home.videoSection.description}
                </p>
                <div className="pt-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-3.5 md:px-10 md:py-4 bg-[#D4E964] text-[#1A1A1A] rounded-full font-bold text-[13px] md:text-[14px] transition-all shadow-xl hover:brightness-105"
                  >
                    {t('video_section.cta')}
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Bottom Divider Line (Always at the bottom) */}
            <div className="w-full h-[1px] bg-white/20 mt-8" />
          </div>
        </div>
      </div>

      {/* Video Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/85 z-[100] flex items-center justify-center p-4 md:p-8 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-black rounded-3xl overflow-hidden shadow-2xl aspect-video cursor-default"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-2.5 transition-colors z-50 outline-none backdrop-blur-sm"
              >
                <X size={20} />
              </button>

              {/* YouTube Embed Iframe */}
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/f56g1qfzh6c?si=cxoPAc5Y6bJKEV-h&autoplay=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
