import type { Lang } from "../i18n/ui";

export interface Service {
  slug: string;
  title: string;
  tagline: string;
  intro: string;
  includes: string[];
  images: string[];
  metaTitle: string;
  metaDesc: string;
}

export const services: Record<Lang, Service[]> = {
  es: [
    {
      slug: "moda",
      title: "Moda con modelos de IA",
      tagline: "Editoriales, lookbooks y campañas sin castings ni localizaciones.",
      intro:
        "Tu prenda merece una campaña a la altura. Genero modelos, estilismo y dirección de arte con IA para crear editoriales completas y coherentes, en cualquier cuerpo y cualquier escena, sin la logística de un rodaje.",
      includes: [
        "Dirección de arte y referencias de estilo",
        "Modelos de IA con consistencia entre looks",
        "Editorial, lookbook y formatos para redes",
        "Variaciones de fondo, pose y encuadre",
        "Acabado de impresión con Magnific",
      ],
      images: ["/img/model-1.jpg", "/img/portrait.jpg", "/img/portrait-2.jpg", "/img/hero.jpg"],
      metaTitle: "Moda con modelos de IA — ArtiMindArt",
      metaDesc:
        "Editoriales, lookbooks y campañas de moda con modelos y estilismo de IA. Sin castings ni localizaciones. Calidad de estudio en días.",
    },
    {
      slug: "producto",
      title: "Fotografía de producto",
      tagline: "Bodegones y packshots con calidad de estudio de lujo.",
      intro:
        "Cosmética, perfume, bebida, tech o joyería. Creo bodegones y packshots que parecen un set de fotografía de alto nivel, con cada textura y cada reflejo cuidados al milímetro, listos para tu ecommerce y tus campañas.",
      includes: [
        "Packshot sobre fondo neutro para ecommerce",
        "Escenas de ambiente y lifestyle",
        "Control de materiales, reflejos y sombras",
        "Adaptaciones para banner, ficha y redes",
        "Acabado de impresión con Magnific",
      ],
      images: ["/img/perfume.jpg", "/img/cosmetic.jpg", "/img/perfume-2.jpg", "/img/cosmetic-2.jpg"],
      metaTitle: "Fotografía de producto con IA — ArtiMindArt",
      metaDesc:
        "Bodegones y packshots de producto con calidad de estudio de lujo. Cosmética, perfume, tech y más. Listo para ecommerce y campaña.",
    },
    {
      slug: "video",
      title: "Spots de vídeo",
      tagline: "Anuncios y piezas en movimiento con alma de cine.",
      intro:
        "Del concepto al clip final para redes, web y campañas. Produzco spots con calidad de productora a una fracción del coste y del tiempo, en los formatos que cada canal necesita.",
      includes: [
        "Concepto y guion visual",
        "Spots para redes, web y campaña",
        "Formatos vertical, cuadrado y horizontal",
        "Ritmo y montaje cinematográfico",
        "Versiones por canal y duración",
      ],
      images: ["/img/portrait-2.jpg", "/img/model-1.jpg", "/img/bag.jpg", "/img/sneakers.jpg"],
      metaTitle: "Spots de vídeo con IA — ArtiMindArt",
      metaDesc:
        "Anuncios y piezas de vídeo con IA y ritmo cinematográfico para redes, web y campañas. El impacto de una productora a una fracción del coste.",
    },
  ],
  en: [
    {
      slug: "fashion",
      title: "Fashion with AI models",
      tagline: "Editorials, lookbooks and campaigns with no castings or locations.",
      intro:
        "Your garment deserves a campaign to match. I generate models, styling and art direction with AI to create full, consistent editorials, on any body and any scene, without the logistics of a shoot.",
      includes: [
        "Art direction and style references",
        "AI models with consistency across looks",
        "Editorial, lookbook and social formats",
        "Background, pose and framing variations",
        "Print-grade finishing with Magnific",
      ],
      images: ["/img/model-1.jpg", "/img/portrait.jpg", "/img/portrait-2.jpg", "/img/hero.jpg"],
      metaTitle: "Fashion with AI models — ArtiMindArt",
      metaDesc:
        "Editorials, lookbooks and fashion campaigns with AI models and styling. No castings or locations. Studio quality in days.",
    },
    {
      slug: "product",
      title: "Product photography",
      tagline: "Still life and packshots with luxury studio quality.",
      intro:
        "Cosmetics, perfume, drinks, tech or jewelry. I create still life and packshots that look like a high-end photo set, with every texture and reflection perfected, ready for your ecommerce and campaigns.",
      includes: [
        "Packshot on a neutral background for ecommerce",
        "Atmosphere and lifestyle scenes",
        "Control of materials, reflections and shadows",
        "Adaptations for banner, product page and social",
        "Print-grade finishing with Magnific",
      ],
      images: ["/img/perfume.jpg", "/img/cosmetic.jpg", "/img/perfume-2.jpg", "/img/cosmetic-2.jpg"],
      metaTitle: "AI product photography — ArtiMindArt",
      metaDesc:
        "Product still life and packshots with luxury studio quality. Cosmetics, perfume, tech and more. Ready for ecommerce and campaign.",
    },
    {
      slug: "video",
      title: "Video spots",
      tagline: "Ads and moving pieces with the soul of cinema.",
      intro:
        "From concept to final clip for social, web and campaigns. I produce spots with production-house quality at a fraction of the cost and time, in the formats each channel needs.",
      includes: [
        "Concept and visual script",
        "Spots for social, web and campaign",
        "Vertical, square and horizontal formats",
        "Cinematic rhythm and editing",
        "Versions per channel and duration",
      ],
      images: ["/img/portrait-2.jpg", "/img/model-1.jpg", "/img/bag.jpg", "/img/sneakers.jpg"],
      metaTitle: "AI video spots — ArtiMindArt",
      metaDesc:
        "AI ads and video pieces with cinematic rhythm for social, web and campaigns. Production-house impact at a fraction of the cost.",
    },
  ],
};

export function serviceTeasers(lang: Lang) {
  return services[lang].map((s, i) => ({ ...s, n: String(i + 1).padStart(2, "0") }));
}
