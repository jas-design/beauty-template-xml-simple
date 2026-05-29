import { motion } from 'motion/react';
import { Clock, Flower2 } from 'lucide-react';
import { cn } from '../../lib/utils';
import { useTranslation } from 'react-i18next';
import { useContent } from '../../lib/ContentContext';

export function AppointmentSection() {
  const { t } = useTranslation();
  const { home } = useContent();
  return (
    <section className="pt-6 pb-12 md:py-24 lg:py-32 px-4 md:px-8">
      <div className="max-w-[1440px] w-full mx-auto bg-mint-light rounded-[40px] p-8 md:p-16 lg:p-24 relative">
        {/* Background elements (Flowers) - Clipped to the rounded box */}
        <div className="absolute inset-0 overflow-hidden rounded-[40px] pointer-events-none select-none">
          <div className="absolute -bottom-10 -right-10 opacity-30">
            <Flower2 size={200} className="text-primary rotate-12" strokeWidth={0.5} />
          </div>
          <div className="absolute -bottom-16 -right-16 opacity-20">
            <Flower2 size={300} className="text-secondary -rotate-12" strokeWidth={0.5} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start relative z-10">
          {/* Left: Form Card */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[50px] shadow-2xl lg:translate-y-32 lg:-ml-20 overflow-hidden flex flex-col order-2 lg:order-1"
          >
            <div className="p-8 md:p-14 space-y-10 flex-grow">
              <div className="space-y-8">
                {/* Full Width Name */}
                <div className="space-y-2.5">
                  <label className="text-sm font-semibold text-charcoal/80 ml-4">{t('appointment.form.labels.name')}</label>
                  <input 
                    type="text" 
                    placeholder={t('appointment.form.placeholders.name')}
                    className="w-full bg-white border border-gray-100 rounded-full py-4.5 px-8 outline-none focus:border-primary/30 transition-colors text-sm" 
                  />
                </div>

                {/* Two Column Email & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2.5">
                    <label className="text-sm font-semibold text-charcoal/80 ml-4">{t('appointment.form.labels.email')}</label>
                    <input 
                      type="email" 
                      placeholder={t('appointment.form.placeholders.email')}
                      className="w-full bg-white border border-gray-100 rounded-full py-4.5 px-8 outline-none focus:border-primary/30 transition-colors text-sm" 
                    />
                  </div>
                  <div className="space-y-2.5">
                    <label className="text-sm font-semibold text-charcoal/80 ml-4">{t('appointment.form.labels.phone')}</label>
                    <input 
                      type="tel" 
                      placeholder={t('appointment.form.placeholders.phone')}
                      className="w-full bg-white border border-gray-100 rounded-full py-4.5 px-8 outline-none focus:border-primary/30 transition-colors text-sm" 
                    />
                  </div>
                </div>

                {/* Full Width Date */}
                <div className="space-y-2.5">
                  <label className="text-sm font-semibold text-charcoal/80 ml-4">{t('appointment.form.labels.date')}</label>
                  <input 
                    type="text" 
                    placeholder={t('appointment.form.placeholders.date')}
                    className="w-full bg-white border border-gray-100 rounded-full py-4.5 px-8 outline-none focus:border-primary/30 transition-colors text-sm" 
                  />
                </div>

                {/* Full Width Time */}
                <div className="space-y-2.5">
                  <label className="text-sm font-semibold text-charcoal/80 ml-4">{t('appointment.form.labels.time')}</label>
                  <input 
                    type="text" 
                    placeholder={t('appointment.form.placeholders.time')}
                    className="w-full bg-white border border-gray-100 rounded-full py-4.5 px-8 outline-none focus:border-primary/30 transition-colors text-sm" 
                  />
                </div>

                {/* Full Width Message */}
                <div className="space-y-2.5">
                  <label className="text-sm font-semibold text-charcoal/80 ml-4">{t('appointment.form.labels.message')}</label>
                  <textarea 
                    rows={5} 
                    placeholder={t('appointment.form.placeholders.message')}
                    className="w-full bg-white border border-gray-100 rounded-[35px] p-8 outline-none focus:border-primary/30 transition-colors text-sm resize-none" 
                  />
                </div>
              </div>

              <div className="pt-2">
                <button className="bg-[#D4E95F] text-charcoal px-12 py-5 rounded-full font-bold text-sm tracking-tight shadow-md hover:shadow-lg transition-all active:scale-95">
                  {t('appointment.form.submit')}
                </button>
              </div>
            </div>
            
            {/* Thick Teal Bottom Border */}
            <div className="h-[10px] w-full bg-[#209797]" />
          </motion.div>

          {/* Right: Info Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12 lg:pl-8 py-10 order-1 lg:order-2"
          >
            <div className="space-y-6">
              <span className="text-primary font-bold uppercase tracking-[0.2em] text-[12px]">{t('appointment.badge')}</span>
              <h2 className="text-[32px] md:text-[52px] font-serif text-charcoal leading-[1.1] font-medium">
                {home.appointment.title}
              </h2>
              <p className="text-charcoal/60 leading-relaxed max-w-lg">
                {home.appointment.description}
              </p>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-serif text-charcoal font-medium">{t('appointment.opening_hours')}</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center group">
                  <span className="text-charcoal/70">{t('appointment.days.mon_fri')}</span>
                  <div className="flex items-center gap-3">
                    <Clock size={18} className="text-primary" />
                    <span className="text-charcoal font-medium">{home.appointment.openingHours.monFri}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center group border-t border-primary/10 pt-6">
                  <span className="text-charcoal/70">{t('appointment.days.sat')}</span>
                  <div className="flex items-center gap-3">
                    <Clock size={18} className="text-primary" />
                    <span className="text-charcoal font-medium">{home.appointment.openingHours.sat}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center group border-t border-primary/10 pt-6">
                  <span className="text-charcoal/70">{t('appointment.days.sun')}</span>
                  <div className="flex items-center gap-3">
                    <Clock size={18} className="text-primary" />
                    <span className="text-charcoal font-medium">{t('appointment.days.closed')}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button className="bg-accent text-charcoal px-10 py-3.5 rounded-full font-bold text-sm tracking-tight shadow-md hover:shadow-lg transition-all active:scale-95">
                {t('appointment.cta_support')}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
