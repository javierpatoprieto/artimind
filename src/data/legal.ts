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
export const GA_ID = "";
