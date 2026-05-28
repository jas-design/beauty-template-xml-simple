import { ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useContent } from '../../lib/ContentContext';

export function BlogHero() {
  const { t } = useTranslation();
  const { blog } = useContent();

  return (
    <div className="bg-[#E6F8F9] pt-24 pb-4">
      <section className="relative mx-4 sm:mx-6 md:mx-8 mt-4 mb-4 rounded-[32px] bg-[#A5E3E6] overflow-hidden py-16 md:py-20 px-8 md:px-16 lg:px-24 border border-[#ACE3E7]/40 shadow-sm">
        <div className="absolute inset-0 opacity-[0.55] pointer-events-none select-none">
          <img 
            src="https://images.unsplash.com/photo-1516238840914-94dfc0c3a5e8?auto=format&fit=crop&q=80&w=1800" 
            className="w-full h-full object-cover"
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#A5E3E6] via-[#A5E3E6]/60 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 w-full">
          <div className="space-y-4 max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-[56px] font-serif font-medium text-charcoal tracking-tight leading-tight">
              {blog.hero.title1} <span className="italic text-[#1F8D92]">{blog.hero.title2}</span>
            </h1>
            <p className="text-charcoal/70 font-sans text-sm md:text-base leading-relaxed max-w-xl">
              {blog.hero.description}
            </p>
          </div>
          
          <div className="bg-[#1F8D92] rounded-full px-6 py-3 md:px-8 md:py-4 flex items-center gap-3 text-white text-[11px] sm:text-[12px] font-sans font-bold uppercase tracking-[0.15em] shadow-[0_4px_20px_rgba(31,141,146,0.15)] select-none shrink-0">
            <span className="opacity-80 hover:opacity-100 transition-opacity cursor-pointer">{t('nav.home')}</span>
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#D4E95F] text-[#1F8D92] shrink-0">
              <ChevronRight size={11} className="stroke-[3.5]" />
            </span>
            <span className="text-[#D4E95F]">{t('nav.blog')}</span>
          </div>
        </div>
      </section>
    </div>
  );
}
