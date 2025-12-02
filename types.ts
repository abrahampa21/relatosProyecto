export enum AnimationType {
    Raven = 'RAVEN',
    BlackCat = 'BLACK_CAT',
    Morgue = 'MORGUE',
    Belfry = 'BELFRY',
}

export interface Story {
    id: number;
    title: string;
    tagline: string;
    fullText: string;
    animationType: AnimationType,
    characterImage: string; 
    cardImage: string; 
    book: string
}
