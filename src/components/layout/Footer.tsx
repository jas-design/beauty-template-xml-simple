import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Youtube, Wind } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useContent } from '../../lib/ContentContext';

export function Footer() {
  const { t } = useTranslation();
  const { globalSettings } = useContent();
  return (
    <footer className="bg-[#0D403D] bg-[radial-gradient(circle_at_center,_#125754_0%,_#0D403D_100%)] pt-24 pb-12 px-6 md:px-12 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20 mb-20">
          {/* Logo Column */}
          <div className="flex flex-col items-start gap-8">
            <Link to="/" className="flex items-center gap-3">
              <div className="text-[#D4E95F]">
                <Wind size={32} strokeWidth={1.5} className="rotate-45" />
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-serif font-medium tracking-tight text-white leading-none">
                  Cutisure
                </span>
                <span className="text-[9px] font-sans font-bold tracking-[0.2em] uppercase text-white/50 mt-1">
                  Pure Derma Care
                </span>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed font-light">
              {t('footer.description')}
            </p>
            <div className="flex items-center gap-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, idx) => (
                <a 
                  key={idx}
                  href="#" 
                  className="w-10 h-10 flex items-center justify-center border border-white/10 rounded-full text-white/80 hover:bg-[#D4E95F] hover:text-[#0D403D] hover:border-transparent transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
             <h4 className="text-xl font-medium font-serif mb-4 flex flex-col">
               {t('footer.contact_title')}
               <span className="w-10 h-[2px] bg-[#D4E95F] mt-3" />
             </h4>
             <ul className="space-y-6 text-sm text-white/70 font-light mt-8">
                <li>
                   Golden Tower – 789 Oak St,<br />Smalltown, TX 23456, US
                </li>
                <li>
                   <strong className="text-white font-semibold block mb-1">{t('footer.email_label')}</strong>
                   <span className="hover:text-[#D4E95F] transition-colors cursor-pointer">hello@cutisure.com</span>
                </li>
                <li>
                   <strong className="text-white font-semibold block mb-1">{t('footer.phone_label')}</strong>
                   <span className="hover:text-[#D4E95F] transition-colors cursor-pointer">+1 (234) 567–8910</span>
                </li>
             </ul>
          </div>

          {/* Our Services */}
          <div>
             <h4 className="text-xl font-medium font-serif mb-4 flex flex-col">
               {t('footer.services_title')}
               <span className="w-10 h-[2px] bg-[#D4E95F] mt-3" />
             </h4>
             <ul className="space-y-4 text-sm text-white/70 font-light mt-8">
                {(t('footer.services_list', { returnObjects: true }) as string[]).map(item => (
                  <li key={item} className="hover:text-[#D4E95F] transition-colors cursor-pointer">{item}</li>
                ))}
             </ul>
          </div>

          {/* Quick Links */}
          <div>
             <h4 className="text-xl font-medium font-serif mb-4 flex flex-col">
               {t('footer.links_title')}
               <span className="w-10 h-[2px] bg-[#D4E95F] mt-3" />
             </h4>
             <ul className="space-y-4 text-sm text-white/70 font-light mt-8">
                {globalSettings.pages.map(page => (
                  <li key={page.id} className="hover:text-[#D4E95F] transition-colors cursor-pointer">
                    <Link to={page.url}>{page.name}</Link>
                  </li>
                ))}
             </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-10 border-t border-white/10 text-center">
          <p className="text-[11px] font-medium text-white/40 tracking-wide">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
