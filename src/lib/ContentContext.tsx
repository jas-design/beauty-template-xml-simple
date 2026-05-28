import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

// ─── Types ────────────────────────────────────────────────
export interface SiteColors {
  primary: string;
  secondary: string;
  background: string;
  text: string;
}

export interface PageMeta {
  id: string;
  name: string;
  url: string;
}

export interface GlobalSettings {
  colors: SiteColors;
  pages: PageMeta[];
}

export interface ImageData {
  src: string;
  alt: string;
}

export interface TeamMember {
  name: string;
  role: string;
  img: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  icon: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  items: ServiceItem[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  tag: string;
  date: string;
  author: string;
  img: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  features: string[];
}

export interface ContactDetails {
  phone1: string;
  phone2: string;
  email1: string;
  email2: string;
  address: string;
  mapUrl: string;
}

export interface OpeningHours {
  monFri: string;
  sat: string;
  sunClosed: boolean;
}

export interface TestimonialItem {
  name: string;
  role: string;
  quote: string;
  img: string;
  rating: number;
}

export interface HowItWorksStep {
  title: string;
  description: string;
}

// ─── Page Content Types ────────────────────────────────────
export interface HomeContent {
  hero: {
    title1: string;
    title2: string;
    description: string;
    videoTitle: string;
    statsCount: string;
  };
  features: {
    modernTech: { title: string; description: string };
    expert: { title: string; description: string };
    consultation: { title: string; description: string; phone: string };
  };
  expertBanner: { title: string; desc1: string; desc2: string };
  aboutPreview: {
    title: string;
    quote: string;
    desc1: string;
    desc2: string;
    yearsCount: string;
  };
  servicesPreview: {
    title: string;
    description: string;
    serviceDesc: string;
    services: { id: string; name: string }[];
  };
  whyChooseUs: {
    title: string;
    description: string;
    benefitDesc: string;
    benefits: string[];
    statsCount: string;
  };
  ctaBanner: {
    title: string;
    description: string;
    titleLarge: string;
    descriptionLarge: string;
  };
  howItWorks: {
    title: string;
    description: string;
    steps: HowItWorksStep[];
  };
  testimonials: TestimonialItem[];
  videoSection: {
    title1: string;
    title2: string;
    description: string;
  };
  pricingPreview: {
    title: string;
    description: string;
    plans: PricingPlan[];
    planDesc: string;
  };
  appointment: {
    title: string;
    description: string;
    openingHours: OpeningHours;
  };
  faq: {
    title: string;
    description: string;
    stillQuestionsTitle: string;
    stillQuestionsDesc: string;
    items: FAQItem[];
  };
}

export interface AboutContent {
  hero: {
    title1: string;
    title2: string;
    title3: string;
    description: string;
  };
  story: {
    title: string;
    description: string;
    yearsCount: string;
  };
  values: { title: string; description: string; icon: string }[];
  team: {
    title: string;
    members: TeamMember[];
  };
}

export interface ServicesContent {
  hero: {
    title1: string;
    title2: string;
    description: string;
  };
  feature: {
    title: string;
    description: string;
  };
  categories: ServiceCategory[];
  afterCare: {
    title: string;
    description: string;
    items: string[];
  };
}

export interface BlogContent {
  hero: {
    title1: string;
    title2: string;
    description: string;
  };
  posts: BlogPost[];
  newsletter: {
    title: string;
    description: string;
  };
}

export interface ContactContent {
  hero: {
    title: string;
    description: string;
  };
  form: {
    title: string;
    description: string;
    img: string;
  };
  info: ContactDetails;
  mapUrl: string;
}

export interface SiteContent {
  globalSettings: GlobalSettings;
  home: HomeContent;
  about: AboutContent;
  services: ServicesContent;
  blog: BlogContent;
  contact: ContactContent;
}

// ─── XML Parser ────────────────────────────────────────────

const BASE = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : import.meta.env.BASE_URL + '/';

/** Prefix relative image paths with Vite's base URL so they work on GitHub Pages sub-paths. */
function resolveImg(src: string): string {
  if (!src) return src;
  // Already absolute (http/https/data) → leave untouched
  if (/^(https?:|data:|\/\/)/.test(src)) return src;
  // Strip any accidental leading slash to avoid double-slash
  return BASE + src.replace(/^\//, '');
}

function getText(parent: Element, tag: string): string {
  return parent.querySelector(tag)?.textContent?.trim() ?? '';
}

function getAttr(el: Element, attr: string): string {
  return el.getAttribute(attr) ?? '';
}

function getAllElements(parent: Element, tag: string): Element[] {
  return Array.from(parent.querySelectorAll(`:scope > ${tag}`));
}

function parseXML(xml: string): SiteContent {
  const parser = new DOMParser();
  const doc = parser.parseFromString(xml, 'text/xml');
  const root = doc.documentElement;

  // ─ Global Settings ─
  const gs = root.querySelector('global_settings')!;
  const colorsEl = gs.querySelector('colors')!;
  const globalSettings: GlobalSettings = {
    colors: {
      primary: getText(colorsEl, 'primary'),
      secondary: getText(colorsEl, 'secondary'),
      background: getText(colorsEl, 'background'),
      text: getText(colorsEl, 'text'),
    },
    pages: getAllElements(gs.querySelector('pages')!, 'page').map(p => ({
      id: getAttr(p, 'id'),
      name: getAttr(p, 'name'),
      url: getAttr(p, 'url'),
    })),
  };

  // ─ Pages ─
  const pagesContent = root.querySelector('pages_content')!;
  const getPage = (id: string) => pagesContent.querySelector(`page[id="${id}"]`)!;

  // Home
  const homePage = getPage('home');
  const home: HomeContent = {
    hero: {
      title1: getText(homePage.querySelector('section[name="hero"]')!, 'title1'),
      title2: getText(homePage.querySelector('section[name="hero"]')!, 'title2'),
      description: getText(homePage.querySelector('section[name="hero"]')!, 'description'),
      videoTitle: getText(homePage.querySelector('section[name="hero"]')!, 'video_title'),
      statsCount: getText(homePage.querySelector('section[name="hero"]')!, 'stats_count'),
    },
    features: {
      modernTech: {
        title: getText(homePage.querySelector('feature[id="modern_tech"]')!, 'title'),
        description: getText(homePage.querySelector('feature[id="modern_tech"]')!, 'description'),
      },
      expert: {
        title: getText(homePage.querySelector('feature[id="expert"]')!, 'title'),
        description: getText(homePage.querySelector('feature[id="expert"]')!, 'description'),
      },
      consultation: {
        title: getText(homePage.querySelector('feature[id="consultation"]')!, 'title'),
        description: getText(homePage.querySelector('feature[id="consultation"]')!, 'description'),
        phone: getText(homePage.querySelector('feature[id="consultation"]')!, 'phone'),
      },
    },
    expertBanner: {
      title: getText(homePage.querySelector('section[name="expert_banner"]')!, 'title'),
      desc1: getText(homePage.querySelector('section[name="expert_banner"]')!, 'desc1'),
      desc2: getText(homePage.querySelector('section[name="expert_banner"]')!, 'desc2'),
    },
    aboutPreview: {
      title: getText(homePage.querySelector('section[name="about_preview"]')!, 'title'),
      quote: getText(homePage.querySelector('section[name="about_preview"]')!, 'quote'),
      desc1: getText(homePage.querySelector('section[name="about_preview"]')!, 'desc1'),
      desc2: getText(homePage.querySelector('section[name="about_preview"]')!, 'desc2'),
      yearsCount: getText(homePage.querySelector('section[name="about_preview"]')!, 'years_count'),
    },
    servicesPreview: {
      title: getText(homePage.querySelector('section[name="services_preview"]')!, 'title'),
      description: getText(homePage.querySelector('section[name="services_preview"]')!, 'description'),
      serviceDesc: getText(homePage.querySelector('section[name="services_preview"]')!, 'service_desc'),
      services: getAllElements(homePage.querySelector('section[name="services_preview"]')!, 'service').map(s => ({
        id: getAttr(s, 'id'),
        name: getText(s, 'name') || s.textContent?.trim() || '',
      })),
    },
    whyChooseUs: {
      title: getText(homePage.querySelector('section[name="why_choose_us"]')!, 'title'),
      description: getText(homePage.querySelector('section[name="why_choose_us"]')!, 'description'),
      benefitDesc: getText(homePage.querySelector('section[name="why_choose_us"]')!, 'benefit_desc'),
      benefits: getAllElements(homePage.querySelector('section[name="why_choose_us"]')!, 'benefit').map(b => b.textContent?.trim() ?? ''),
      statsCount: getText(homePage.querySelector('section[name="why_choose_us"]')!, 'stats_count'),
    },
    ctaBanner: {
      title: getText(homePage.querySelector('section[name="cta_banner"]')!, 'title'),
      description: getText(homePage.querySelector('section[name="cta_banner"]')!, 'description'),
      titleLarge: getText(homePage.querySelector('section[name="cta_banner"]')!, 'title_large'),
      descriptionLarge: getText(homePage.querySelector('section[name="cta_banner"]')!, 'description_large'),
    },
    howItWorks: {
      title: getText(homePage.querySelector('section[name="how_it_works"]')!, 'title'),
      description: getText(homePage.querySelector('section[name="how_it_works"]')!, 'description'),
      steps: getAllElements(homePage.querySelector('section[name="how_it_works"]')!, 'step').map(s => ({
        title: getText(s, 'title'),
        description: getText(s, 'description'),
      })),
    },
    testimonials: getAllElements(homePage.querySelector('section[name="testimonials"]')!, 'testimonial').map(t => ({
      name: getText(t, 'name'),
      role: getText(t, 'role'),
      quote: getText(t, 'quote'),
      img: resolveImg(getText(t, 'img')),
      rating: parseInt(getText(t, 'rating') || '5'),
    })),
    videoSection: {
      title1: getText(homePage.querySelector('section[name="video_section"]')!, 'title1'),
      title2: getText(homePage.querySelector('section[name="video_section"]')!, 'title2'),
      description: getText(homePage.querySelector('section[name="video_section"]')!, 'description'),
    },
    pricingPreview: {
      title: getText(homePage.querySelector('section[name="pricing_preview"]')!, 'title'),
      description: getText(homePage.querySelector('section[name="pricing_preview"]')!, 'description'),
      planDesc: getText(homePage.querySelector('section[name="pricing_preview"]')!, 'plan_desc'),
      plans: getAllElements(homePage.querySelector('section[name="pricing_preview"]')!, 'plan').map(p => ({
        id: getAttr(p, 'id'),
        name: getText(p, 'name'),
        price: getText(p, 'price'),
        features: getAllElements(p, 'feature').map(f => f.textContent?.trim() ?? ''),
      })),
    },
    appointment: {
      title: getText(homePage.querySelector('section[name="appointment"]')!, 'title'),
      description: getText(homePage.querySelector('section[name="appointment"]')!, 'description'),
      openingHours: {
        monFri: getText(homePage.querySelector('section[name="appointment"] > opening_hours')!, 'mon_fri'),
        sat: getText(homePage.querySelector('section[name="appointment"] > opening_hours')!, 'sat'),
        sunClosed: true,
      },
    },
    faq: {
      title: getText(homePage.querySelector('section[name="faq"]')!, 'title'),
      description: getText(homePage.querySelector('section[name="faq"]')!, 'description'),
      stillQuestionsTitle: getText(homePage.querySelector('section[name="faq"]')!, 'still_questions_title'),
      stillQuestionsDesc: getText(homePage.querySelector('section[name="faq"]')!, 'still_questions_desc'),
      items: getAllElements(homePage.querySelector('section[name="faq"]')!, 'item').map(i => ({
        question: getText(i, 'question'),
        answer: getText(i, 'answer'),
      })),
    },
  };

  // About
  const aboutPage = getPage('about');
  const about: AboutContent = {
    hero: {
      title1: getText(aboutPage.querySelector('section[name="hero"]')!, 'title1'),
      title2: getText(aboutPage.querySelector('section[name="hero"]')!, 'title2'),
      title3: getText(aboutPage.querySelector('section[name="hero"]')!, 'title3'),
      description: getText(aboutPage.querySelector('section[name="hero"]')!, 'description'),
    },
    story: {
      title: getText(aboutPage.querySelector('section[name="story"]')!, 'title'),
      description: getText(aboutPage.querySelector('section[name="story"]')!, 'description'),
      yearsCount: getText(aboutPage.querySelector('section[name="story"]')!, 'years_count'),
    },
    values: getAllElements(aboutPage.querySelector('section[name="values"]')!, 'value').map(v => ({
      title: getText(v, 'title'),
      description: getText(v, 'description'),
      icon: getAttr(v, 'icon'),
    })),
    team: {
      title: getText(aboutPage.querySelector('section[name="team"]')!, 'title'),
      members: getAllElements(aboutPage.querySelector('section[name="team"]')!, 'member').map(m => ({
        name: getText(m, 'name'),
        role: getText(m, 'role'),
        img: resolveImg(getText(m, 'img')),
      })),
    },
  };

  // Services
  const servicesPage = getPage('services');
  const services: ServicesContent = {
    hero: {
      title1: getText(servicesPage.querySelector('section[name="hero"]')!, 'title1'),
      title2: getText(servicesPage.querySelector('section[name="hero"]')!, 'title2'),
      description: getText(servicesPage.querySelector('section[name="hero"]')!, 'description'),
    },
    feature: {
      title: getText(servicesPage.querySelector('section[name="feature"]')!, 'title'),
      description: getText(servicesPage.querySelector('section[name="feature"]')!, 'description'),
    },
    categories: getAllElements(servicesPage.querySelector('section[name="categories"]')!, 'category').map(c => ({
      id: getAttr(c, 'id'),
      name: getText(c, 'name'),
      items: getAllElements(c, 'service').map(s => ({
        id: getAttr(s, 'id'),
        title: getText(s, 'title'),
        description: getText(s, 'description'),
        price: getText(s, 'price'),
        duration: getText(s, 'duration'),
        icon: getAttr(s, 'icon'),
      })),
    })),
    afterCare: {
      title: getText(servicesPage.querySelector('section[name="after_care"]')!, 'title'),
      description: getText(servicesPage.querySelector('section[name="after_care"]')!, 'description'),
      items: getAllElements(servicesPage.querySelector('section[name="after_care"]')!, 'item').map(i => i.textContent?.trim() ?? ''),
    },
  };

  // Blog
  const blogPage = getPage('blog');
  const blog: BlogContent = {
    hero: {
      title1: getText(blogPage.querySelector('section[name="hero"]')!, 'title1'),
      title2: getText(blogPage.querySelector('section[name="hero"]')!, 'title2'),
      description: getText(blogPage.querySelector('section[name="hero"]')!, 'description'),
    },
    posts: getAllElements(blogPage.querySelector('section[name="posts"]')!, 'post').map(p => ({
      id: getAttr(p, 'id'),
      title: getText(p, 'title'),
      excerpt: getText(p, 'excerpt'),
      tag: getText(p, 'tag'),
      date: getText(p, 'date'),
      author: getText(p, 'author'),
      img: resolveImg(getText(p, 'img')),
    })),
    newsletter: {
      title: getText(blogPage.querySelector('section[name="newsletter"]')!, 'title'),
      description: getText(blogPage.querySelector('section[name="newsletter"]')!, 'description'),
    },
  };

  // Contact
  const contactPage = getPage('contact');
  const contact: ContactContent = {
    hero: {
      title: getText(contactPage.querySelector('section[name="hero"]')!, 'title'),
      description: getText(contactPage.querySelector('section[name="hero"]')!, 'description'),
    },
    form: {
      title: getText(contactPage.querySelector('section[name="form"]')!, 'title'),
      description: getText(contactPage.querySelector('section[name="form"]')!, 'description'),
      img: resolveImg(getText(contactPage.querySelector('section[name="form"]')!, 'img')),
    },
    info: {
      phone1: getText(contactPage.querySelector('section[name="info"]')!, 'phone1'),
      phone2: getText(contactPage.querySelector('section[name="info"]')!, 'phone2'),
      email1: getText(contactPage.querySelector('section[name="info"]')!, 'email1'),
      email2: getText(contactPage.querySelector('section[name="info"]')!, 'email2'),
      address: getText(contactPage.querySelector('section[name="info"]')!, 'address'),
      mapUrl: getText(contactPage.querySelector('section[name="info"]')!, 'map_url'),
    },
    mapUrl: getText(contactPage.querySelector('section[name="map"]') || contactPage.querySelector('section[name="info"]')!, 'map_url'),
  };

  return { globalSettings, home, about, services, blog, contact };
}

// ─── Context ────────────────────────────────────────────────

interface ContentContextValue {
  content: SiteContent | null;
  loading: boolean;
  error: string | null;
}

const ContentContext = createContext<ContentContextValue>({
  content: null,
  loading: true,
  error: null,
});

export function ContentProvider({ children }: { children: ReactNode }) {
  const { i18n } = useTranslation();
  const [content, setContent] = useState<SiteContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    // Map language to filename
    const filename = i18n.language === 'pt-BR' || i18n.language === 'pt' ? 'content_pt-BR.xml' : 'content_en.xml';

    fetch(`/${filename}`)
      .then(res => {
        if (!res.ok) throw new Error(`Failed to load ${filename}: ${res.status}`);
        return res.text();
      })
      .then(xml => {
        setContent(parseXML(xml));
        setLoading(false);
      })
      .catch(err => {
        console.error('Content loading error:', err);
        setError(err.message);
        setLoading(false);
      });
  }, [i18n.language]);

  return (
    <ContentContext.Provider value={{ content, loading, error }}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContent(): SiteContent {
  const { content, loading, error } = useContext(ContentContext);
  if (loading || !content) {
    // Return safe defaults while loading
    return getDefaultContent();
  }
  return content;
}

export function useContentLoading() {
  const { loading, error } = useContext(ContentContext);
  return { loading, error };
}

// ─── Default Content (fallback while loading) ──────────────
function getDefaultContent(): SiteContent {
  return {
    globalSettings: {
      colors: { primary: '#FFB6C1', secondary: '#FF69B4', background: '#FFFFFF', text: '#333333' },
      pages: [],
    },
    home: {
      hero: { title1: '', title2: '', description: '', videoTitle: '', statsCount: '23K+' },
      features: {
        modernTech: { title: '', description: '' },
        expert: { title: '', description: '' },
        consultation: { title: '', description: '', phone: '' },
      },
      expertBanner: { title: '', desc1: '', desc2: '' },
      aboutPreview: { title: '', quote: '', desc1: '', desc2: '', yearsCount: '' },
      servicesPreview: { title: '', description: '', serviceDesc: '', services: [] },
      whyChooseUs: { title: '', description: '', benefitDesc: '', benefits: [], statsCount: '' },
      ctaBanner: { title: '', description: '', titleLarge: '', descriptionLarge: '' },
      howItWorks: { title: '', description: '', steps: [] },
      testimonials: [],
      videoSection: { title1: '', title2: '', description: '' },
      pricingPreview: { title: '', description: '', plans: [], planDesc: '' },
      appointment: { title: '', description: '', openingHours: { monFri: '', sat: '', sunClosed: true } },
      faq: { title: '', description: '', stillQuestionsTitle: '', stillQuestionsDesc: '', items: [] },
    },
    about: {
      hero: { title1: '', title2: '', title3: '', description: '' },
      story: { title: '', description: '', yearsCount: '' },
      values: [],
      team: { title: '', members: [] },
    },
    services: {
      hero: { title1: '', title2: '', description: '' },
      feature: { title: '', description: '' },
      categories: [],
      afterCare: { title: '', description: '', items: [] },
    },
    blog: {
      hero: { title1: '', title2: '', description: '' },
      posts: [],
      newsletter: { title: '', description: '' },
    },
    contact: {
      hero: { title: '', description: '' },
      form: { title: '', description: '', img: '' },
      info: { phone1: '', phone2: '', email1: '', email2: '', address: '', mapUrl: '' },
      mapUrl: '',
    },
  };
}
