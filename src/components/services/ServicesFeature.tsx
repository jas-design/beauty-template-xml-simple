import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import treatmentImg from '../../assets/images/treatment_skincare_1779219956804.png';
import { useContent } from '../../lib/ContentContext';

export function ServicesFeature() {
  const { t } = useTranslation();
  const { services } = useContent();

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="text-primary font-bold uppercase tracking-widest text-sm">Advanced Skincare</div>
          <h2 className="text-3xl md:text-4xl font-serif leading-tight text-charcoal animate-fade-in-up">
            {services.feature.title}
          </h2>
          <p className="text-base text-charcoal/60 leading-relaxed max-w-xl animate-fade-in-up">
            {services.feature.description}
          </p>
          <div className="flex gap-4 animate-fade-in-up">
             <Link to="/contact" className="px-8 py-4 bg-primary text-white rounded-full font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-all">
               {t('services_page.hero.cta')}
             </Link>
          </div>
        </div>
        <div className="relative rounded-[40px] overflow-hidden aspect-[4/3] shadow-xl">
           <img
             src={treatmentImg}
             alt="Cutisure Treatment"
             className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
        </div>
      </div>
    </section>
  );
}
