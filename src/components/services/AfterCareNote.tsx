import { CheckCircle2 } from 'lucide-react';
import { useContent } from '../../lib/ContentContext';

export function AfterCareNote() {
  const { services } = useContent();

  return (
    <section className="px-6 max-w-7xl mx-auto mb-20">
       <div className="glass p-12 rounded-[40px] text-center space-y-6">
          <h3 className="text-3xl font-serif">{services.afterCare.title}</h3>
          <p className="text-charcoal/60 max-w-2xl mx-auto">
            {services.afterCare.description}
          </p>
          <div className="flex flex-wrap justify-center gap-8 pt-4">
             {services.afterCare.items.map(item => (
               <div key={item} className="flex items-center gap-2 text-sm font-bold">
                 <CheckCircle2 size={18} className="text-primary" />
                 {item}
               </div>
             ))}
          </div>
       </div>
    </section>
  );
}
