import { motion } from 'motion/react';
import { User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useContent } from '../../lib/ContentContext';

export function BlogPosts() {
  const { t } = useTranslation();
  const { blog } = useContent();

  return (
    <div className="flex-1 py-12 px-6 max-w-7xl mx-auto w-full">
      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">
         {[t('blog_page.tabs.all'), t('blog_page.tabs.skincare'), t('blog_page.tabs.treatments'), t('blog_page.tabs.wellness')].map(tab => (
           <button key={tab} className="px-6 py-3 rounded-full border border-gray-100 font-bold text-sm text-charcoal hover:border-[#1F8D92] hover:text-[#1F8D92] transition-colors bg-gray-50/50">
             {tab}
           </button>
         ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {blog.posts.map((post, idx) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group cursor-pointer"
          >
             <div className="rounded-[40px] overflow-hidden aspect-[16/10] mb-8 shadow-lg group-hover:shadow-2xl transition-all duration-500">
                <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
             </div>
             <div className="space-y-4 px-2">
                <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-primary">
                  <span>{post.tag}</span>
                  <span className="w-1 h-1 bg-charcoal/20 rounded-full" />
                  <span className="text-charcoal/40">{post.date}</span>
                </div>
                <h3 className="text-2xl font-serif leading-tight group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-charcoal/60 leading-relaxed line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between pt-4">
                   <div className="flex items-center gap-2 text-xs font-bold">
                      <User size={14} className="text-primary" /> {t('blog_page.actions.by')} {post.author}
                   </div>
                   <Link to="#" className="text-sm font-bold underline underline-offset-4 flex items-center gap-2 group/link">
                      {t('blog_page.actions.read_more')} <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                   </Link>
                </div>
             </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
