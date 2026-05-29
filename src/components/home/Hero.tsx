import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Play, Stethoscope, Award, Phone, MessageSquare, Sparkle, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useContent } from '../../lib/ContentContext';

const heroHomeImg = import.meta.env.BASE_URL + 'images/hero-home.png';
const decorationImg = import.meta.env.BASE_URL + 'images/Decoration-1.png';
const treatmentImg = import.meta.env.BASE_URL + 'images/treatment_skincare_1779219956804.png';

export function Hero() {
  const { t } = useTranslation();
  const { home } = useContent();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="bg-mint-light min-h-screen pt-12 pb-6 px-6 md:pt-32 md:pb-10">
      <div className="max-w-[1600px] mx-auto space-y-6">
        {/* Main Hero Row */}
        <div className="flex flex-col xl:flex-row gap-6">
          {/* Main Content Box */}
          <div className="flex-1 bg-[#A1DBDB] rounded-[20px] overflow-hidden relative min-h-[560px] flex">
            {/* Floral Illustration Background */}
            <div className="absolute inset-y-0 right-[15%] left-0 opacity-40 pointer-events-none z-0 overflow-hidden">
              <svg viewBox="0 0 500 500" className="w-full h-full text-white/50" fill="none" stroke="currentColor" strokeWidth="0.5">
                <path d="M50,450 Q100,300 250,250 T400,50" />
                <path d="M30,480 Q120,350 200,300 S350,150 420,30" />
                <path d="M150,420 Q200,380 280,350 S380,250 410,180" />
                {/* Leaves */}
                <path d="M250,250 Q230,220 200,210 Q230,200 250,230" fill="currentColor" fillOpacity="0.1" />
                <path d="M280,350 Q300,320 330,310 Q300,300 280,330" fill="currentColor" fillOpacity="0.1" />
                <path d="M350,150 Q370,120 400,110 Q370,100 350,130" fill="currentColor" fillOpacity="0.1" />
                <path d="M200,300 Q180,270 150,260 Q180,250 200,280" fill="currentColor" fillOpacity="0.1" />
                <path d="M100,380 Q80,350 50,340 Q80,330 100,360" fill="currentColor" fillOpacity="0.1" />
              </svg>
            </div>

            <div className="overflow-hidden relative z-10 w-full flex flex-col lg:flex-row items-center">
              {/* Left Text Side */}
              <div className="z-1 lg:w-3/5 p-10 md:p-16 space-y-6">
                <h1 className="text-[36px] sm:text-5xl md:text-6xl lg:text-[67px] font-serif font-bold text-[#1E4D4E] leading-[1.1] tracking-tight">
                  {home.hero.title1}<br />
                  {home.hero.title2}
                </h1>
                <p className="text-sm md:text-base text-[#1E4D4E]/70 max-w-md leading-relaxed">
                  {home.hero.description}
                </p>
                <div className="pt-4">
                  <Link
                    to="/book"
                    className="inline-block px-8 py-4 bg-[#D4E964] text-charcoal rounded-full font-bold text-sm tracking-wide hover:brightness-105 transition-all shadow-sm"
                  >
                    {t('hero.cta')}
                  </Link>
                </div>
              </div>

              {/* Right Image Side */}
              <div
                className="z-0 bg-contain md:bg-cover bg-center bg-no-repeat absolute  -bottom-8 md:bottom-[-50px] -right-40 md:right-[2%] h-[600px] w-[400px] md:w-[600px] flex items-end md:items-center  "
                style={{ backgroundImage: `url(${decorationImg})` }}
              >
                <img
                  src={heroHomeImg}
                  alt="Cutisure Beauty"
                  className="h-[400px] md:h-[700px] w-[600px] object-contain md:object-cover select-none pointer-events-none translate-y-2"
                />
              </div>
            </div>
          </div>

          {/* Right Floating Card Group */}
          <div className="xl:w-[420px]">
            <div className="bg-white rounded-[20px] p-4 shadow-sm border border-gray-50 flex flex-col h-full gap-4">
              <div onClick={() => setIsModalOpen(true)} className="relative rounded-[15px] overflow-hidden aspect-[16/10] group cursor-pointer bg-gray-100">
                <img
                  src={treatmentImg}
                  alt="Clinical Treatment"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-primary shadow-xl group-hover:scale-110 transition-transform">
                    <div className="translate-x-0.5">
                      <Play size={20} fill="currentColor" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-1 border-l-2 border-[#2D999B] pl-4 py-1">
                <h3 className="text-[22px] font-serif font-bold text-charcoal leading-tight">
                  {home.hero.videoTitle}
                </h3>
              </div>

              {/* Stats / User Glow Badge */}
              <div className="mt-auto bg-[#2D999B] rounded-[15px] p-4 flex items-center">
                <div className="flex items-center gap-4 w-full">
                  <div className="flex -space-x-3 items-center">
                    {[
                      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=64&h=64',
                      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=64&h=64',
                      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=64&h=64'
                    ].map((url, i) => (
                      <img
                        key={i}
                        src={url}
                        className="w-11 h-11 rounded-full border-2 border-[#2D999B] object-cover bg-white"
                        alt="User"
                      />
                    ))}
                    <div className="w-11 h-11 rounded-full border-2 border-[#2D999B] bg-[#D4E964] flex items-center justify-center text-charcoal font-bold text-xl relative z-10 shadow-sm">
                      <span className="mb-0.5">+</span>
                    </div>
                  </div>
                  <div className="flex flex-col ml-1">
                    <div className="text-white text-[13px] leading-tight">
                      <span className="font-bold">{home.hero.statsCount}</span> <span className="opacity-80">{t('hero.stats.text')}</span>
                    </div>
                    <div className="text-white/80 text-[11px] font-medium">{t('hero.stats.labels')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Feature Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Card 1: Modern Technology */}
          <div className="bg-[#D4E964] rounded-[32px] p-6 md:p-10 flex flex-col justify-start relative group overflow-hidden min-h-0 md:min-h-[300px]">
            {/* Notch Icon */}
            <div className="absolute top-0 right-0 w-20 md:w-28 h-20 md:h-28 pointer-events-none">
              {/* The "wave" background - matches the section bg */}
              <div className="absolute top-[-1px] right-[-1px] w-full h-full bg-mint-light rounded-bl-[48px]" />
              {/* The Icon Circle */}
              <div className="absolute top-2 right-2 w-12 md:w-20 h-12 md:h-20 bg-[#2D999B] rounded-full flex items-center justify-center text-[#D4E964] shadow-sm pointer-events-auto">
                <Stethoscope size={36} strokeWidth={1.5} />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-[24px] md:text-[32px] font-serif font-medium text-charcoal leading-tight">{home.features.modernTech.title}</h3>
              <div className="w-12 h-0.5 bg-[#2D999B]/30" />
            </div>

            <p className="mt-10 text-charcoal/60 text-sm leading-relaxed max-w-[340px]">
              {home.features.modernTech.description}
            </p>
          </div>

          {/* Card 2: Certified Expert */}
          <div className="bg-[#2D999B] rounded-[32px] p-6 md:p-10 flex flex-col justify-start relative group overflow-hidden min-h-0 md:min-h-[300px]">
            {/* Notch Icon */}
            <div className="absolute top-0 right-0 w-20 md:w-28 h-20 md:h-28 pointer-events-none">
              <div className="absolute top-[-1px] right-[-1px] w-full h-full bg-mint-light rounded-bl-[48px]" />
              <div className="absolute top-2 right-2 w-12 md:w-20 h-12 md:h-20 bg-[#D4E964] rounded-full flex items-center justify-center text-[#2D999B] shadow-sm pointer-events-auto">
                <Sparkles size={36} strokeWidth={1.5} />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-[24px] md:text-[32px] font-serif font-medium text-white leading-tight">{home.features.expert.title}</h3>
              <div className="w-12 h-0.5 bg-white/20" />
            </div>

            <p className="mt-10 text-white/70 text-sm leading-relaxed max-w-[340px]">
              {home.features.expert.description}
            </p>
          </div>

          {/* Card 3: Consultation */}
          <div className="bg-dark-teal rounded-[40px] p-6 md:p-12 flex flex-col justify-between relative overflow-hidden min-h-[300px]">
            <div className="space-y-4 relative z-10">
              <h3 className="text-[24px] md:text-[30px] font-serif font-bold text-white leading-tight">{home.features.consultation.title}</h3>
              <p className="text-white/60 text-sm max-w-sm leading-relaxed">
                {home.features.consultation.description}
              </p>
            </div>

            <div className="mt-8 flex items-center gap-6 relative z-10">
              <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center text-charcoal shadow-xl">
                <Phone size={20} fill="currentColor" />
              </div>
              <div className="text-1xl font-bold text-white tracking-widest">{home.features.consultation.phone}</div>
            </div>

            {/* Background Chat Bubble Illustration */}
            <div className="absolute -bottom-8 -right-8 text-white opacity-5 pointer-events-none">
              <MessageSquare size={180} strokeWidth={1} />
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal Overlay */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
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
                onClick={() => setIsModalOpen(false)}
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
