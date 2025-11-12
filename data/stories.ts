import { AnimationType } from '../types';
import type { Story } from '../types';

const svgToDataUri = (svg: string) => `data:image/svg+xml;base64,${btoa(svg)}`;

export const stories: Story[] = [
    {
        id: 1,
        title: "El Cuervo",
        tagline: "Dijo el cuervo, 'Nunca más.' ",
        animationType: AnimationType.Raven,
        characterImage: svgToDataUri(`
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="raven-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#2d0000;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#000;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="100" height="100" fill="url(#raven-grad)" />
  <path d="M30 20 C 40 10, 60 10, 70 20 L 80 40 L 50 80 L 20 40 Z" fill="#111"/>
  <path d="M45 40 L 55 40 L 50 80 Z" fill="#222"/>
  <circle cx="50" cy="25" r="3" fill="red"/>
</svg>
`),
        cardImage: svgToDataUri(`
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="raven-card-grad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" style="stop-color:#4a0e0e;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#000;stop-opacity:1" />
    </radialGradient>
  </defs>
  <rect width="100" height="100" fill="url(#raven-card-grad)" />
  <path d="M20 80 L 50 50 L 80 80 Z" fill="#1a1a1a"/>
  <path d="M30 70 L 50 50 L 70 70 Z" fill="#2a2a2a"/>
</svg>
`),
        fullText: `
En una noche oscura y lúgubre, mientras meditaba, débil y cansado,
sobre muchos volúmenes extraños y curiosos de sabiduría olvidada—
mientras cabeceaba, casi dormido, de repente oí un golpeteo,
como si alguien llamara suavemente a la puerta de mi habitación.
«Es algún visitante», murmuré, «que llama a la puerta de mi habitación—
Solo eso y nada más».
... [Continuará] ...
`
    },
    {
        id: 2,
        title: "El Gato Negro",
        tagline: "Una bestia de infinita maldad.",
        animationType: AnimationType.BlackCat,
        characterImage: "../src/gn.jpg",
        cardImage: svgToDataUri(`
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" fill="#111" />
  <path d="M0 0 L 100 100 M 0 100 L 100 0" stroke="red" stroke-width="5" opacity="0.3"/>
</svg>
`),
        fullText: `
Para la narración más salvaje y a la vez más sencilla que estoy a punto de escribir, no espero ni solicito que me crean. Sería una locura esperarlo, en un caso donde mis propios sentidos rechazan su propia evidencia. Sin embargo, no estoy loco, y ciertamente no sueño. Pero mañana muero, y hoy quisiera desahogar mi alma.
... [Continuará] ...
`
    },
    {
        id: 3,
        title: "Los Crímenes de la Calle Morgue",
        tagline: "Un crimen extraordinario e incomprensible",
        animationType: AnimationType.Morgue,
        characterImage: svgToDataUri(`
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" fill="#1a1a1a" />
    <circle cx="50" cy="50" r="40" fill="none" stroke="#666" stroke-width="4" />
    <circle cx="50" cy="50" r="30" fill="none" stroke="#444" stroke-width="2" />
    <path d="M50 50 L 75 75" stroke="#888" stroke-width="3" />
    <text x="50" y="55" font-family="serif" font-size="20" fill="#900" text-anchor="middle">?</text>
</svg>
`),
        cardImage: svgToDataUri(`
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" fill="#000" />
    <path d="M 0 50 C 25 25, 75 75, 100 50" stroke="#4b0000" stroke-width="8" fill="none" opacity="0.5" />
    <path d="M 50 0 C 75 25, 25 75, 50 100" stroke="#4b0000" stroke-width="8" fill="none" opacity="0.5" />
</svg>
`),
        fullText: `
Las características mentales que se consideran analíticas, en sí mismas, son poco susceptibles de análisis. Las apreciamos únicamente por sus efectos. Sabemos de ellas, entre otras cosas, que cuando se poseen en exceso, constituyen para quien las posee una fuente de vívido disfrute.
... [Continuará] ...
`
    },
    {
        id: 4,
        title: "El Diablo En El Campanario",
        tagline: "¿Qué hora es?.",
        animationType: AnimationType.Belfry,
        characterImage: svgToDataUri(`
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" fill="#220000" />
  <circle cx="50" cy="50" r="40" fill="#111" stroke="#ff8c00" stroke-width="2" />
  <line x1="50" y1="50" x2="50" y2="20" stroke="#ff8c00" stroke-width="3" />
  <line x1="50" y1="50" x2="70" y2="50" stroke="#ff8c00" stroke-width="2" />
  <text x="50" y="60" font-family="serif" font-size="10" fill="#ff8c00" text-anchor="middle">13</text>
</svg>
`),
        cardImage: svgToDataUri(`
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" fill="#111" />
  <path d="M 20 80 A 40 40 0 0 1 80 80" fill="#444" />
  <path d="M 45 80 A 5 5 0 0 1 55 80" fill="#666" />
</svg>
`),
        fullText: `
Todo el mundo sabe, en términos generales, que el lugar más hermoso del mundo es —o, por desgracia, era— el municipio holandés de Vondervotteimittiss. Sin embargo, como se encuentra algo alejado de las carreteras principales, en una ubicación un tanto apartada, quizá muy pocos de mis lectores lo hayan visitado alguna vez.
... [Continuará] ...
`
    }
];
