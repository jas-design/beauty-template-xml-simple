import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useContent } from '../../lib/ContentContext';

export function TeamSection() {
  const { about } = useContent();

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
         <div className="text-center space-y-4 mb-20">
            <div className="text-primary font-bold uppercase tracking-widest text-sm">Expertise You Can Trust</div>
            <h2 className="text-4xl md:text-5xl font-serif">{about.team.title}</h2>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {about.team.members.map((member) => (
              <motion.div
                key={member.name}
                whileHover={{ y: -10 }}
                className="space-y-6 group"
              >
                <div className="rounded-[40px] overflow-hidden aspect-[4/5] shadow-xl">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                </div>
                <div className="text-center">
                  <h4 className="text-2xl font-serif">{member.name}</h4>
                  <p className="text-sm font-bold uppercase tracking-widest text-primary mt-1">{member.role}</p>
                </div>
              </motion.div>
            ))}
         </div>

         <div className="mt-24 text-center">
            <Link to="/contact" className="inline-flex items-center gap-3 text-lg font-bold group">
              Join our skin community
              <span className="p-3 rounded-full border border-charcoal/10 group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all">
                <ArrowRight size={20} />
              </span>
            </Link>
         </div>
      </div>
    </section>
  );
}
