import { AnimationType } from '../types';
import type { Story } from '../types';

const svgToDataUri = (svg: string) => `data:image/svg+xml;base64,${btoa(svg)}`;

export const stories: Story[] = [
    {
        id: 1,
        title: "El Cuervo",
        tagline: "Dijo el cuervo, 'Nunca más.' ",
        animationType: AnimationType.Raven,
        characterImage: "img/cuervo.jpg",
        cardImage: "img/raven2.webp",
        book: "src/Antología - Edgar Allan Poe.pdf",
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
        characterImage: "img/gn.jpg",
        cardImage: "img/bc.jpg",
        book: "src/Antología - Edgar Allan Poe.pdf",
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
        characterImage: "img/lcdlcm.jpg",
        cardImage: "img/orangutan.jpg",
        book: "src/Los Crímenes De La Calle Morgue.pdf",
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
        characterImage: "img/belfry.jpg",
        cardImage: "img/tdib.jpg",
        book: "src/Antología - Edgar Allan Poe.pdf",
        fullText: `
Todo el mundo sabe, en términos generales, que el lugar más hermoso del mundo es —o, por desgracia, era— el municipio holandés de Vondervotteimittiss. Sin embargo, como se encuentra algo alejado de las carreteras principales, en una ubicación un tanto apartada, quizá muy pocos de mis lectores lo hayan visitado alguna vez.
... [Continuará] ...
`
    }
];
