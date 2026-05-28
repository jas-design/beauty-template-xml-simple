import { useContent } from '../../lib/ContentContext';

export function MapSection() {
  const { contact } = useContent();

  return (
    <section className="h-[600px] w-full">
      <iframe
        src={contact.mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
}
