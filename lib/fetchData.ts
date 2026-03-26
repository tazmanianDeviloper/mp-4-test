"use server"

import {ArtSearchResponse} from "@/types/ArtWorks";

const API_KEY= process.env.API_KEY;

export async function fetchData(): Promise<ArtSearchResponse> {
    const res=await fetch(`https://api.artsearch.io/artworks?api-key=${API_KEY}&query=paintings`);

    if (!res.ok) {
        throw new Error(`Request failed: ${res.status}`);
    }

    return res.json();
}











