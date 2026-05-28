import { useTranslation } from 'react-i18next';
import { useContent } from '../../lib/ContentContext';

export function NewsletterSection() {
  const { t } = useTranslation();
  const { blog } = useContent();

  return (
    <div className="py-12 px-6 max-w-7xl mx-auto w-full">
      <div className="border-t border-gray-100 pt-20">
         <div className="max-w-3xl mx-auto glass p-12 rounded-[40px] text-center space-y-8">
            <h2 className="text-4xl font-serif">{blog.newsletter.title}</h2>
            <p className="text-charcoal/60">{blog.newsletter.description}</p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={e => e.preventDefault()}>
               <input type="email" placeholder={t('blog_page.newsletter.placeholder')} className="flex-grow bg-white border-2 border-transparent focus:border-primary/20 bg-mint-light/50 rounded-full py-4 px-8 outline-none transition-all" />
               <button className="bg-charcoal text-white px-10 py-4 rounded-full font-bold hover:bg-primary transition-all">
                  {t('blog_page.newsletter.button')}
               </button>
            </form>
            <p className="text-[10px] text-charcoal/30 font-bold uppercase tracking-widest">{t('blog_page.newsletter.disclaimer')}</p>
         </div>
      </div>
    </div>
  );
}
