import { Phone, MapPin, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useContent } from '../../lib/ContentContext';

export function ContactInfo() {
  const { t } = useTranslation();
  const { contact } = useContent();

  return (
    <section className="pb-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 - Phone */}
        <div className="bg-white p-12 rounded-[32px] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-50 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300">
          <div className="w-16 h-16 bg-[#209797] rounded-full flex items-center justify-center text-white mb-8 shadow-lg">
            <Phone size={24} />
          </div>
          <h4 className="text-2xl font-serif text-charcoal mb-4">{t('contact_page.info.contact.title')}</h4>
          <div className="space-y-1 text-charcoal/60 text-sm">
            <p>{t('contact_page.info.contact.phone_1')}: {contact.info.phone1}</p>
            <p>{t('contact_page.info.contact.phone_2')}: {contact.info.phone2}</p>
          </div>
        </div>

        {/* Card 2 - Location */}
        <div className="bg-white p-12 rounded-[32px] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-50 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300">
          <div className="w-16 h-16 bg-[#209797] rounded-full flex items-center justify-center text-white mb-8 shadow-lg">
            <MapPin size={24} />
          </div>
          <h4 className="text-2xl font-serif text-charcoal mb-4">{t('contact_page.info.location.title')}</h4>
          <div className="space-y-1 text-charcoal/60 text-sm">
            <p>{contact.info.address}</p>
          </div>
        </div>

        {/* Card 3 - Email */}
        <div className="bg-white p-12 rounded-[32px] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-50 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300">
          <div className="w-16 h-16 bg-[#209797] rounded-full flex items-center justify-center text-white mb-8 shadow-lg">
            <Mail size={24} />
          </div>
          <h4 className="text-2xl font-serif text-charcoal mb-4">{t('contact_page.info.mail.title')}</h4>
          <div className="space-y-1 text-charcoal/60 text-sm">
            <p>{contact.info.email1}</p>
            <p>{contact.info.email2}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
