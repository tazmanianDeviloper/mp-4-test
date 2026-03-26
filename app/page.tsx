import {fetchData} from "@/lib/fetchData";
import {ArtWork} from "@/types/ArtWorks";

export default async function Home() {

    const data = await fetchData();

    return (
        <>
            {
                data.artworks.map((art:ArtWork) =>
                    (
                        <div key={art.id}>
                            <h2>{art.title}</h2>
                            <img src={art.image} alt={art.title}/>
                        </div>
                    )
                )
            }
        </>
    );
}