import interiorImg from '../../assets/images/clinic_interior_1779219942247.png';
import { useContent } from '../../lib/ContentContext';

export function StorySection() {
  const { about } = useContent();

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="text-primary font-bold uppercase tracking-widest text-sm">Our Story</div>
          <h2 className="text-3xl md:text-4xl font-serif leading-tight text-charcoal">
            {about.story.title}
          </h2>
          <p className="text-base text-charcoal/60 leading-relaxed max-w-xl">
            {about.story.description}
          </p>
          <div className="flex -space-x-3">
             {about.team.members.slice(0, 4).map((member, i) => (
               <img
                 key={i}
                 src={member.img}
                 className="w-14 h-14 rounded-full border-4 border-white object-cover"
                 alt={member.name}
               />
             ))}
             <div className="w-14 h-14 rounded-full border-4 border-white bg-mint-light flex items-center justify-center text-xs font-bold text-primary">
               +12
             </div>
          </div>
          <p className="text-sm font-bold text-charcoal/40 uppercase tracking-widest">Meet our award-winning team</p>
        </div>
        <div className="relative">
           <div className="relative rounded-[40px] overflow-hidden aspect-square shadow-xl z-10">
             <img
               src={interiorImg}
               alt="Cutisure Clinic"
               className="w-full h-full object-cover"
             />
           </div>

           <div className="absolute -bottom-6 -left-6 glass p-8 rounded-[32px] shadow-xl z-20">
              <div className="text-4xl font-serif text-primary font-bold">{about.story.yearsCount}</div>
              <p className="text-sm font-bold uppercase tracking-widest text-[#1F8D92]">Years of History</p>
           </div>
        </div>
      </div>
    </section>
  );
}
