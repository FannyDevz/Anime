import Image from 'next/image'
import Link from "next/link";
const AnimeList  = ({api}) => {
    return (
        <>
            <div className="grid md:grid-cols-3  lg:grid-cols-6  sm:grid-cols-2  grid-cols-2 gap-4 px-4">
                {api.data.map(anime => {
                    return(
                        <div key={anime.mal_id} className="shadow-xl bg-color-darksecondary">
                            <Link href={`/anime/${anime.mal_id}`} className="cursor-pointer text-color-primary hover:text-color-accent transition-all" id={anime.mal_id}>
                                <Image
                                    width={400}
                                    height={600}
                                    className="w-full max-h-64 object-cover"
                                    alt="..." src={anime.images.webp.image_url}
                                />
                                <h3 className="font-bold lg:text-md md:text-md text-sm p-4 text-center ">{anime.title}</h3>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </>

    )
}

export default AnimeList