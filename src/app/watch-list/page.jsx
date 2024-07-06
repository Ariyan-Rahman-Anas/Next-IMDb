import Image from "next/image";
import Link from "next/link";

export default async function WatchList() {

  const res = await fetch("http://localhost:9001/watch-list")
  const movies = await res.json()

  return (
    <div  className="px-2 my-6">
      <h1 className="font-semibold text-xl text-center" >Watch List Page</h1>
      <div  className="mt-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 place-items-center gap-4 ">
        {movies?.data?.map(movie=> <div key={movie._id}>
          <Link
            href={`/movie/${movie._id}`}>
            <Image
              src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path ? movie.backdrop_path : movie.poster_path
          }`}
          alt="Loading..."
          width={200}
          height={200}
          priority
          className="w-full rounded-t-md "
        />
      </Link>
            <h1>
              {movie?.title ? movie.title : movie.original_title ? movie.original_title : movie?.name }
            </h1>
          </div> )}
      </div>
    </div>
  )
}