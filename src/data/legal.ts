// =============================================================
//  DATOS DEL TITULAR Y CONFIGURACIÓN LEGAL / ANALÍTICA
//  Rellena los campos marcados con TODO. Solo se editan aquí:
//  las páginas legales y el aviso se actualizan solos.
// =============================================================

export const LEGAL = {
  // Titular (autónomo)
  owner: "Javier Pato Prieto",
  nif: "71449969D",
  address: "Calle Los Remedios 64F, 39527 Liandres, Cantabria",
  city: "Liandres (Cantabria)",
  country: "España",
  activity:
    "estudio creativo de IA: servicios de diseño y producción de imagen y vídeo",
  email: "hello@artimind.art",
  // Fecha de última actualización mostrada en cada documento
  updated: { es: "26 de junio de 2026", en: "June 26, 2026" },
} as const;

// Pega aquí tu ID de Google Analytics 4 para ACTIVAR la analítica.
// Ej.: "G-XXXXXXXXXX". Vacío = Analytics desactivado (el banner sigue funcionando).
export const GA_ID = "G-CRGWC2RZ64";

// Verificación de Google Search Console por ETIQUETA META (propiedad de prefijo de URL).
// Pega aquí SOLO el valor "content" del <meta name="google-site-verification">
// que te da Search Console (ej.: "abc123..."). Vacío = no se añade la etiqueta.
// (Para una "propiedad de dominio" no se usa esto: es un registro DNS TXT.)
export const GSC_VERIFICATION = "j75ruLmbJWAgu6nZ4TucHVURRfNUl75MgTUwEDl-0qM";
