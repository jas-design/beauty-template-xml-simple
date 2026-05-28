import { Microscope, Target, Heart, Award, LucideIcon } from 'lucide-react';
import { useContent } from '../../lib/ContentContext';

const iconMap: Record<string, LucideIcon> = {
  microscope: Microscope,
  target: Target,
  heart: Heart,
  award: Award,
};

export function ValuesSection() {
  const { about } = useContent();

  return (
    <section className="py-24 bg-mint-light">
      <div className="max-w-7xl mx-auto px-6">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {about.values.map((value) => {
              const Icon = iconMap[value.icon] || Microscope;
              return (
                <div key={value.title} className="bg-white p-10 rounded-[40px] space-y-6 shadow-sm hover:shadow-xl transition-all duration-500">
                   <div className="w-14 h-14 bg-mint-light rounded-2xl flex items-center justify-center text-primary">
                      <Icon size={28} />
                   </div>
                   <h3 className="text-2xl font-serif">{value.title}</h3>
                   <p className="text-charcoal/60 text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
         </div>
      </div>
    </section>
  );
}
