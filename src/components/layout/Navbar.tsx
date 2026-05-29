import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Mail, ChevronDown, Sparkle, Sparkles, Globe } from 'lucide-react';
import { cn } from '../../lib/utils';
import { useTranslation } from 'react-i18next';
import { useContent } from '../../lib/ContentContext';



export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const { globalSettings } = useContent();
  const navLinks = globalSettings.pages;

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'en' ? 'pt-BR' : 'en';
    i18n.changeLanguage(nextLang);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#E6F8F9] border-b border-[#ACE3E7]/20 h-24 flex items-center">
      <nav className="max-w-[1600px] mx-auto w-full px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="flex items-center justify-center">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <Sparkles size={32} className="text-secondary absolute opacity-20" />
              <Sparkle size={24} className="text-primary" fill="currentColor" />
            </div>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-3xl font-serif font-bold tracking-tight text-charcoal">
              Cutisure
            </span>
            <span className="text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-gray-400 mt-1">
              PURE DERMA CARE
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.url}
              className={cn(
                'text-sm font-bold flex items-center gap-1 transition-colors hover:text-primary',
                location.pathname === link.url ? 'text-primary' : 'text-charcoal'
              )}
            >
              {link.name}
              {(link.id === 'services' || link.id === 'blog') && <ChevronDown size={14} className="opacity-40" />}
            </Link>
          ))}

          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-full text-[11px] font-bold text-charcoal hover:bg-primary/10 hover:text-primary transition-all border border-gray-100"
          >
            <Globe size={14} />
            <span>{i18n.language === 'en' ? 'PT' : 'EN'}</span>
          </button>
        </div>

        {/* Contact Info Group */}
        <div className="hidden lg:flex items-center">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white shrink-0">
              <Phone size={20} />
            </div>
            <div className="flex flex-col whitespace-nowrap">
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider leading-tight">{t('nav.customer_support', 'Customer Support')}</span>
              <span className="text-sm font-bold text-charcoal leading-tight">+1 (234) 567-8910</span>
            </div>
          </div>

          <div className="h-10 w-px bg-gray-200 mx-8" />

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white shrink-0">
              <Mail size={20} />
            </div>
            <div className="flex flex-col whitespace-nowrap">
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider leading-tight">{t('nav.email_support', 'Email Support')}</span>
              <span className="text-sm font-bold text-charcoal leading-tight">hello@cutisure.com</span>
            </div>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 lg:hidden">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-full text-[11px] font-bold text-charcoal"
          >
            <Globe size={14} />
            <span>{i18n.language === 'en' ? 'EN' : 'PT'}</span>
          </button>
          <button
            className="p-2 text-charcoal"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl p-6 lg:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.url}
                className={cn(
                  'text-lg font-medium py-2',
                  location.pathname === link.url ? 'text-primary' : 'text-charcoal/80'
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
