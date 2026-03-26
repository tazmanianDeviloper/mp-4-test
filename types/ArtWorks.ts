export type ArtWork = {
    id: number;
    title: string;
    image: string;
};

export type ArtSearchResponse = {
    artworks: ArtWork[];
};