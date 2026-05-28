import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

export function WhatsAppButton() {
  const { t } = useTranslation();

  return (
    <motion.a
      href="https://wa.me/15551234567"
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl shadow-[#25D366]/40 flex items-center justify-center group"
    >
      <div className="absolute right-full mr-4 bg-white text-charcoal px-4 py-2 rounded-xl text-sm font-bold shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity translate-y-[-2px] pointer-events-none">
        {t('whatsapp_hover')}
      </div>
      <svg 
        viewBox="0 0 24 24" 
        className="w-6 h-6 fill-current" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12.031 2C6.49 2 2 6.48 2 12.018a10.04 10.04 0 0 0 1.346 4.965L2 22l5.132-1.346A10.016 10.016 0 0 0 12.031 22c5.541 0 10.03-4.48 10.03-10.018C22.062 6.48 17.572 2 12.031 2zm6.273 14.19c-.274.776-1.341 1.41-1.85 1.488-.475.074-.98.113-2.834-.652-2.378-.978-3.911-3.393-4.03-3.551-.12-.158-.962-1.282-.962-2.438 0-1.156.602-1.723.818-1.95.215-.226.474-.282.632-.282.158 0 .315-.002.453.006.143.008.337-.054.526.4.195.467.667 1.621.724 1.737.058.117.098.25.018.406-.078.156-.118.256-.236.393-.118.136-.247.306-.353.41-.118.115-.24.24-.104.475.137.233.606.994 1.302 1.613.896.797 1.65 1.042 1.884 1.158.236.115.372.098.513-.06.14-.158.601-.701.761-.937.16-.237.32-.198.537-.119.215.08 1.367.643 1.602.76.236.117.391.176.45.277.058.1.058.577-.216 1.353z" />
      </svg>
    </motion.a>
  );
}
