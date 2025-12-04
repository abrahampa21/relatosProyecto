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
En la quietud de una noche tormentosa, un golpeteo inquietante interrumpió mi desesperada soledad. Creí que era solo el viento, o quizá un recuerdo que se negaba a morir. Pero cuando abrí la puerta, el destino me envió un mensajero de alas negras.
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
Desde el día en que aquel gato negro cruzó mi camino, una sensación de fatalidad comenzó a perseguirme. No era miedo lo que sentía, sino un presagio lúgubre, como si el destino hubiera marcado mi caída. Y pronto descubrí que la verdadera amenaza no estaba en el animal… sino en mí mismo.
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
París despertó estremecido por un crimen tan brutal que desafiaba toda explicación humana. Las puertas cerradas, los gritos imposibles y la violencia desmedida parecían contradecir la razón. Solo un hombre, Auguste Dupin, se atrevió a mirar donde nadie más quería mirar.
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
        book: "src/El Diablo En El Campanario.pdf",
        fullText: `
Al mediodía, un personaje pequeño, grotesco y de sonrisa inquietante apareció por el camino principal.
Su violín lanzaba un sonido tan agudo que parecía burlarse de todo el pueblo. Desde su llegada, los habitantes sintieron que algo —algo terrible o absurdo— estaba a punto de suceder.
... [Continuará] ...
`
    }
];
