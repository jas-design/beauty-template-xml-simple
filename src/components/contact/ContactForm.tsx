import { Wind } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useContent } from '../../lib/ContentContext';
const womanApplyingProductImg = import.meta.env.BASE_URL + 'images/woman-applying-product.jpg';

export function ContactForm() {
  const { t } = useTranslation();
  const { contact } = useContent();

  return (
    <section className="py-24 px-6 relative -mt-12 z-20">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#F0F9F9] rounded-[40px] overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.05)] grid grid-cols-1 lg:grid-cols-2">
          {/* Left Image */}
          <div className="relative h-[400px] lg:h-auto p-4 lg:p-16">
            <div className="relative h-full w-full rounded-[32px] overflow-hidden">
              <img
                src={womanApplyingProductImg}
                className="w-full h-full object-cover"
                alt="Contact Us"
              />
              {/* Circular Badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/90 backdrop-blur-md rounded-full flex flex-col items-center justify-center border border-white/40 shadow-xl text-center p-4">
                <div className="text-secondary mb-1">
                  <Wind size={24} />
                </div>
                <span className="text-[7px] font-bold uppercase tracking-widest text-charcoal/40 mb-0.5">{t('contact_page.form.badge')}</span>
                <span className="text-[8px] font-bold uppercase tracking-wider text-primary">{t('contact_page.form.sub_badge')}</span>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="p-4 lg:p-20 flex flex-col justify-center">
            <div className="space-y-2 mb-10">
              <h2 className="text-4xl md:text-5xl font-serif text-charcoal leading-tight">
                {contact.form.title}
              </h2>
              <p className="text-charcoal/60 leading-relaxed text-sm">
                {contact.form.description}
              </p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[13px] font-serif text-charcoal font-medium ml-1">{t('contact_page.form.labels.first_name')}</label>
                  <input
                    type="text"
                    placeholder={t('contact_page.form.placeholders.first_name')}
                    className="w-full bg-white rounded-xl py-4 px-6 outline-none shadow-[0_5px_15px_rgba(0,0,0,0.02)] focus:ring-2 focus:ring-primary/10 transition-all text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[13px] font-serif text-charcoal font-medium ml-1">{t('contact_page.form.labels.last_name')}</label>
                  <input
                    type="text"
                    placeholder={t('contact_page.form.placeholders.last_name')}
                    className="w-full bg-white rounded-xl py-4 px-6 outline-none shadow-[0_5px_15px_rgba(0,0,0,0.02)] focus:ring-2 focus:ring-primary/10 transition-all text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[13px] font-serif text-charcoal font-medium ml-1">{t('contact_page.form.labels.email')}</label>
                  <input
                    type="email"
                    placeholder={t('contact_page.form.placeholders.email')}
                    className="w-full bg-white rounded-xl py-4 px-6 outline-none shadow-[0_5px_15px_rgba(0,0,0,0.02)] focus:ring-2 focus:ring-primary/10 transition-all text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[13px] font-serif text-charcoal font-medium ml-1">{t('contact_page.form.labels.phone')}</label>
                  <input
                    type="text"
                    placeholder={t('contact_page.form.placeholders.phone')}
                    className="w-full bg-white rounded-xl py-4 px-6 outline-none shadow-[0_5px_15px_rgba(0,0,0,0.02)] focus:ring-2 focus:ring-primary/10 transition-all text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[13px] font-serif text-charcoal font-medium ml-1">{t('contact_page.form.labels.message')}</label>
                <textarea
                  placeholder={t('contact_page.form.placeholders.message')}
                  rows={4}
                  className="w-full bg-white rounded-xl py-4 px-6 outline-none shadow-[0_5px_15px_rgba(0,0,0,0.02)] focus:ring-2 focus:ring-primary/10 transition-all text-sm resize-none"
                />
              </div>

              <button className="px-10 py-4 bg-[#D4E95F] text-charcoal rounded-full font-bold text-sm shadow-md hover:brightness-105 active:scale-95 transition-all">
                {t('contact_page.form.submit')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
