# ArtiMindArt

Landing + bio + contacto para **ArtiMindArt**, estudio creativo de IA para marcas de **moda y producto** (imágenes, vídeo, spots). Construida en **Astro**, bilingüe **ES/EN**, estilo inspirado en theunknown.tv/the-studio con identidad propia.

## Stack
- [Astro](https://astro.build) (output estático)
- i18n nativo de Astro: `/es` (por defecto) y `/en`, raíz redirige a `/es/`
- Tipografías: Anton (display), Yeseva One (serif decorativa), Space Grotesk (texto) — Google Fonts
- Sin dependencias de backend. Contacto vía **WhatsApp** + widget de **chat-bot** que deriva a WhatsApp.

## Desarrollo
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera /dist (estático, listo para subir a cualquier hosting/CDN)
npm run preview
```

## Estructura
```
src/
  i18n/ui.ts            ← TODOS los textos ES/EN + datos de CONTACTO (edítalo aquí)
  layouts/Layout.astro  ← head, fuentes, scroll-reveal
  components/           ← Header, Hero, Marquee, Services, Magnific, Bio, Contact, ChatWidget, Footer
  pages/
    index.astro         ← redirección → /es/
    es/index.astro
    en/index.astro
public/img/             ← visuales generados (moda, producto, vídeo, hero)
```

## ⚠️ PENDIENTE — datos que tienes que darme / cambiar
Todo está en `src/i18n/ui.ts`, objeto `CONTACT`:

1. **WhatsApp** → ahora hay un placeholder `34600000000`. Pon tu número real con prefijo internacional, **sin `+` ni espacios** (ej. `34611223344`).
2. **Email** → `hola@artimindart.com` (cámbialo por el tuyo si es otro).
3. **X** → ya apunta a `https://x.com/artimindArt`.
4. **Magnific** → enlace de afiliado/partner si tienes uno específico (ahora `https://magnific.ai`).

### Bot de contacto
El widget de chat (esquina inferior derecha) usa respuestas guiadas y te deriva a WhatsApp.
Si más adelante quieres un bot con IA real, se conecta a un endpoint en `src/components/ChatWidget.astro`
(la función del `form submit`). Avísame y lo cableo.

### Visuales
Las imágenes de `public/img/` están generadas con IA como muestra. Sustitúyelas por tus piezas
reales manteniendo los mismos nombres (`hero.jpg`, `fashion.jpg`, `product.jpg`, `video.jpg`, `hero-2.jpg`).
