import { motion } from 'motion/react';
import { BlogHero } from '../components/blog/BlogHero';
import { BlogPosts } from '../components/blog/BlogPosts';
import { NewsletterSection } from '../components/blog/NewsletterSection';

export function Blog() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <BlogHero />
      <BlogPosts />
      <NewsletterSection />
    </motion.div>
  );
}
