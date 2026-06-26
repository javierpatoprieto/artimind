export const languages = {
  es: "ES",
  en: "EN",
} as const;

export type Lang = keyof typeof languages;

export const ui = {
  es: {
    "nav.services": "Servicios",
    "nav.work": "Proyectos",
    "nav.blog": "Blog",
    "nav.bio": "Estudio",
    "nav.contact": "Contacto",
    "nav.cta": "Empezar",

    "hero.eyebrow": "Estudio creativo de IA",
    "hero.title": "Imágenes que venden,",
    "hero.title.accent": "marcas que se recuerdan",
    "hero.sub": "Estudio creativo de IA para moda y producto. Campañas, editoriales y vídeo con calidad de gran producción. En días, sin rodaje y sin límites.",
    "hero.cta": "Empieza tu proyecto",
    "hero.cta2": "Ver proyectos",

    "proof": "El nivel de una gran productora. La agilidad de la IA.",

    "stats.title": "Crea más rápido. Lanza más fuerte.",
    "stats.sub": "Producción visual con IA que recorta costes, acorta plazos y escala tus campañas sin bajar el listón.",
    "stats.cta": "Calcula lo que ahorras",
    "stats.1.k": "Flujo creativo sin fricción",
    "stats.1.b": "De la idea al visual final en una sola conversación, sin sesiones ni logística.",
    "stats.1.n": "70%",
    "stats.1.f": "Menos tiempo de producción",
    "stats.2.k": "Llega antes al mercado",
    "stats.2.b": "Conecta concepto y campaña en un flujo continuo para aprovechar cada tendencia.",
    "stats.2.n": "5X",
    "stats.2.f": "Ciclos de concepto a campaña más rápidos",
    "stats.3.k": "Reduce el coste de campaña",
    "stats.3.b": "Visuales de IA que sustituyen al rodaje y dan piezas premium para cada canal.",
    "stats.3.n": "90%",
    "stats.3.f": "Ahorro frente a producción tradicional",

    "services.eyebrow": "Servicios",
    "services.title": "Todo lo que tu marca necesita para vender",
    "services.sub": "Si vendes algo, tiene que verse extraordinario. Moda, producto y vídeo con acabado de estudio. Tú pones la visión; yo, las piezas.",
    "svc.more": "Ver servicio",

    "uses.eyebrow": "Casos de uso",
    "uses.title": "Pensado para marcas y ecommerce",
    "use.1.t": "Catálogo ecommerce",
    "use.1.b": "Fichas de producto consistentes y a escala.",
    "use.2.t": "Lookbook y campaña",
    "use.2.b": "Editoriales completas con una sola dirección de arte.",
    "use.3.t": "Redes sociales",
    "use.3.b": "Formatos verticales y carruseles que detienen el scroll.",
    "use.4.t": "Try-on virtual",
    "use.4.b": "Tu producto sobre distintos modelos y escenas.",

    "work.eyebrow": "Proyectos",
    "work.title": "Proyectos seleccionados",
    "work.sub": "Moda y producto para marcas que no se conforman. Todo creado con IA.",
    "work.all": "Ver todos los proyectos",
    "work.view": "Ver proyecto",
    "work.client": "Cliente",
    "work.year": "Año",
    "work.category": "Categoría",
    "work.next": "Siguiente proyecto",

    "blog.eyebrow": "Blog",
    "blog.title": "Workflows, prompts y trucos",
    "blog.sub": "Cómo trabajo por dentro: flujos de IA, prompts que de verdad funcionan y trucos para exprimir la imagen generativa.",
    "blog.all": "Ver todos los artículos",
    "blog.read": "Leer artículo",
    "blog.featured": "Lo último del blog",
    "blog.back": "Volver al blog",
    "blog.min": "min de lectura",

    "magnific.eyebrow": "Alianza",
    "magnific.title": "Partner oficial de Magnific",
    "magnific.body": "Trabajo con Magnific, el referente mundial en mejora de imagen con IA. Para ti se traduce en calidad de impresión, nitidez extrema y piezas que aguantan cualquier tamaño.",
    "magnific.cta": "Conocer Magnific",

    "bio.eyebrow": "El estudio",
    "bio.title": "Soy ArtiMindArt",
    "bio.p1": "Detrás de ArtiMindArt está Javier Pato, diseñador de marca y web desde Cantabria. Llevo años ayudando a negocios a parecer lo que valen, trabajando como un estudio: una sola mano para todo, del concepto al detalle.",
    "bio.p2": "ArtiMindArt es mi faceta de IA. Dirijo los modelos generativos con el criterio de un director de arte para crear imagen y vídeo de moda y producto. La IA como herramienta, nunca como estilo: por eso entrego en días, sin renunciar al acabado.",
    "bio.cta": "Hablar conmigo",
    "bio.web": "Conóceme en javierpato.es",

    "cta.title": "Tu próxima campaña empieza aquí",
    "cta.sub": "Cuéntame tu idea por WhatsApp y te respondo el mismo día. Sin compromiso.",
    "cta.wa": "Escríbeme por WhatsApp",
    "cta.chat": "Hablar con el asistente",

    "contact.title": "Hablemos de tu marca",
    "contact.body": "Cuéntame tu idea por WhatsApp y te respondo el mismo día. Si lo prefieres, mi asistente te da una primera idea de plazos y presupuesto.",
    "contact.wa": "Escríbeme por WhatsApp",
    "contact.chat": "Hablar con el asistente",

    "chat.title": "Asistente ArtiMindArt",
    "chat.sub": "Te oriento y te paso con Javier",
    "chat.placeholder": "Escribe tu mensaje",
    "chat.greeting": "Hola. Soy el asistente de ArtiMindArt. ¿Qué necesitas: moda, producto o un spot de vídeo?",
    "chat.toWa": "Continuar en WhatsApp",

    "menu.title": "Menú",

    "footer.tagline": "Estudio creativo de IA. Imágenes y vídeos que venden, para cualquier marca. Especialista en moda y producto.",
    "footer.nav": "Navegación",
    "footer.social": "Social",
    "footer.cta": "¿Listo para crear?",
    "footer.rights": "Todos los derechos reservados.",

    "svc.fashion.title": "Moda con modelos de IA",
    "svc.product.title": "Fotografía de producto",
    "svc.video.title": "Spots de vídeo",
  },
  en: {
    "nav.services": "Services",
    "nav.work": "Work",
    "nav.blog": "Blog",
    "nav.bio": "Studio",
    "nav.contact": "Contact",
    "nav.cta": "Get started",

    "hero.eyebrow": "AI Creative Studio",
    "hero.title": "Images that sell,",
    "hero.title.accent": "brands that stick",
    "hero.sub": "AI creative studio for fashion and product. Campaigns, editorials and video with major-production quality. In days, with no shoot and no limits.",
    "hero.cta": "Start your project",
    "hero.cta2": "View work",

    "proof": "The level of a major production house. The speed of AI.",

    "stats.title": "Create faster. Launch stronger.",
    "stats.sub": "AI visual production that cuts costs, shortens timelines and scales your campaigns without lowering the bar.",
    "stats.cta": "See what you save",
    "stats.1.k": "Frictionless creative flow",
    "stats.1.b": "From idea to final visual in a single conversation, with no shoots or logistics.",
    "stats.1.n": "70%",
    "stats.1.f": "Less production time",
    "stats.2.k": "Get to market sooner",
    "stats.2.b": "Connect concept and campaign in one continuous flow to seize every trend.",
    "stats.2.n": "5X",
    "stats.2.f": "Faster concept-to-campaign cycles",
    "stats.3.k": "Cut campaign costs",
    "stats.3.b": "AI visuals that replace the shoot and deliver premium assets for every channel.",
    "stats.3.n": "90%",
    "stats.3.f": "Savings vs. traditional production",

    "services.eyebrow": "Services",
    "services.title": "Everything your brand needs to sell",
    "services.sub": "If you sell something, it has to look extraordinary. Fashion, product and video with studio finish. You bring the vision; I bring the pieces.",
    "svc.more": "View service",

    "uses.eyebrow": "Use cases",
    "uses.title": "Built for brands and ecommerce",
    "use.1.t": "Ecommerce catalog",
    "use.1.b": "Consistent product shots, at scale.",
    "use.2.t": "Lookbook & campaign",
    "use.2.b": "Full editorials from a single art direction.",
    "use.3.t": "Social media",
    "use.3.b": "Vertical formats and carousels that stop the scroll.",
    "use.4.t": "Virtual try-on",
    "use.4.b": "Your product on different models and scenes.",

    "work.eyebrow": "Work",
    "work.title": "Selected projects",
    "work.sub": "Fashion and product for brands that don't settle. All created with AI.",
    "work.all": "View all projects",
    "work.view": "View project",
    "work.client": "Client",
    "work.year": "Year",
    "work.category": "Category",
    "work.next": "Next project",

    "blog.eyebrow": "Blog",
    "blog.title": "Workflows, prompts and tips",
    "blog.sub": "How I actually work: AI workflows, prompts that truly deliver and tips to squeeze the most out of generative imagery.",
    "blog.all": "View all articles",
    "blog.read": "Read article",
    "blog.featured": "Latest from the blog",
    "blog.back": "Back to blog",
    "blog.min": "min read",

    "magnific.eyebrow": "Partnership",
    "magnific.title": "Official Magnific Partner",
    "magnific.body": "I work with Magnific, the world's leading AI image enhancement tool. For you, that means print quality, extreme sharpness and pieces that hold up at any size.",
    "magnific.cta": "Discover Magnific",

    "bio.eyebrow": "The studio",
    "bio.title": "I am ArtiMindArt",
    "bio.p1": "Behind ArtiMindArt is Javier Pato, a brand and web designer based in Cantabria, Spain. For years I've helped businesses look as good as they really are, working like a studio: one hand for everything, from concept to detail.",
    "bio.p2": "ArtiMindArt is my AI side. I direct generative models with an art director's eye to create fashion and product imagery and video. AI as a tool, never as a style: that's why I deliver in days without compromising the finish.",
    "bio.cta": "Talk to me",
    "bio.web": "More about me at javierpato.es",

    "cta.title": "Your next campaign starts here",
    "cta.sub": "Tell me your idea on WhatsApp and I'll reply the same day. No strings attached.",
    "cta.wa": "Message me on WhatsApp",
    "cta.chat": "Chat with the assistant",

    "contact.title": "Let's talk about your brand",
    "contact.body": "Tell me your idea on WhatsApp and I'll reply the same day. If you prefer, my assistant gives you a first idea of timing and budget.",
    "contact.wa": "Message me on WhatsApp",
    "contact.chat": "Chat with the assistant",

    "chat.title": "ArtiMindArt Assistant",
    "chat.sub": "I'll guide you and connect you with Javier",
    "chat.placeholder": "Type your message",
    "chat.greeting": "Hi. I'm the ArtiMindArt assistant. What do you need: fashion, product or a video spot?",
    "chat.toWa": "Continue on WhatsApp",

    "menu.title": "Menu",

    "footer.tagline": "AI creative studio. Images and videos that sell, for any brand. Fashion and product specialist.",
    "footer.nav": "Navigation",
    "footer.social": "Social",
    "footer.cta": "Ready to create?",
    "footer.rights": "All rights reserved.",

    "svc.fashion.title": "Fashion with AI models",
    "svc.product.title": "Product photography",
    "svc.video.title": "Video spots",
  },
} as const;

export type PageKey = "home" | "services" | "work" | "blog" | "about" | "contact";

export const routes: Record<Lang, Record<PageKey, string>> = {
  es: {
    home: "/es/",
    services: "/es/servicios/",
    work: "/es/proyectos/",
    blog: "/es/blog/",
    about: "/es/estudio/",
    contact: "/es/contacto/",
  },
  en: {
    home: "/",
    services: "/services/",
    work: "/work/",
    blog: "/blog/",
    about: "/studio/",
    contact: "/contact/",
  },
};

export function useTranslations(lang: Lang) {
  return function t<K extends keyof (typeof ui)["es"]>(key: K): (typeof ui)["es"][K] {
    return (ui[lang] as any)[key] ?? (ui.es as any)[key];
  };
}

export const CONTACT = {
  // TODO Javier: tu número real con prefijo internacional, sin + ni espacios.
  whatsapp: "34600000000",
  x: "https://x.com/artimindArt",
  xHandle: "@artimindArt",
  email: "hola@artimindart.com",
  magnific: "https://magnific.ai",
  web: "https://javierpato.es",
};

export const SITE = "https://www.artimind.art";
