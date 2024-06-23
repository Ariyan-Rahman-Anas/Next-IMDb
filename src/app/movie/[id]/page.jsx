import Image from "next/image";
import { FaRegThumbsUp } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";

export default async function MoviePage({params}) {
  const movieId = params.id
  const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`)
  const movie = await res.json()

  const {
    id,
    adult,
    budget,
    genres,
    origin_country,
    backdrop_path,
    title,
    original_title,
    name,
    original_name,
    overview,
    release_date,
    first_air_date,
    vote_count,
    popularity,
    poster_path,
    belongs_to_collection,
    production_companies,
    original_language
  } = movie || {};


  return (
    <div className="flex flex-col items-center justify-center gap-y-20 min-h-screen h-full px-2 py-8 w-full md:w-[85vw] mx-auto ">
      <div className="top-section flex flex-col md:flex-row items-start gap-4 ">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            backdrop_path ? backdrop_path : poster_path
          }`}
          alt="Loading..."
          width={200}
          height={200}
          priority
          className="w-full rounded-t-lg "
        />
        <div className="p-2 text-sm  space-y-2 ">
          <h1 className="font-semibold text-4xl text-gray-300 ">
            {original_title
              ? original_title
              : title
              ? title
              : name
              ? name
              : original_name
              ? original_name
              : "There no any title"}
          </h1>
          <p className="mt-2 tracking-wider ">
            <strong>Origin: </strong>
            {origin_country}
          </p>
          <p className="tracking-wider ">
            <strong>Budget: </strong>
            {budget}
          </p>
          <ul className="tracking-wider list-disc  ">
            <strong>Genres: </strong>
            {genres?.map((genre, index) => (
              <li key={index} className="ml-12">
                {genre?.name}
              </li>
            ))}
          </ul>
          <p className="tracking-wider ">
            <strong>Popularity: </strong>
            {popularity}
          </p>
          <p className="tracking-wider ">
            <strong>Language: </strong>
            {original_language}
          </p>
          <p className="tracking-wider ">
            <strong>Adult: </strong>
            {adult === "true" ? "Yes" : "No"}
          </p>
          <p className="tracking-wider ">
            <strong>Overview: </strong>
            {overview}
          </p>

          <div className="flex items-center justify-between">
            <p> <strong>Release on: </strong> {release_date ? release_date : first_air_date} </p>
            <p className="flex items-center gap-2">
              <FaRegThumbsUp />
              <span>{vote_count}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="w-full ">
        {belongs_to_collection?.poster_path &&
          belongs_to_collection?.backdrop_path && (
            <div>
              <h1 className="text-2xl flex items-center underline underline-offset-4 ">
                <span>Belongs collections:</span>
                <IoIosArrowRoundForward className="text-3xl" />
                <p>{belongs_to_collection?.name}</p>{" "}
              </h1>
              <div className="flex flex-col md:flex-row gap-8 mt-4 ">
                <Image
                  src={`https://image.tmdb.org/t/p/original/${
                    belongs_to_collection?.backdrop_path ||
                    belongs_to_collection?.poster_path
                  }`}
                  alt="Loading..."
                  width={200}
                  height={200}
                  priority
                  className="w-full rounded-t-md "
                />
                <Image
                  src={`https://image.tmdb.org/t/p/original/${
                    belongs_to_collection?.backdrop_path ||
                    belongs_to_collection?.poster_path
                  }`}
                  alt="Loading..."
                  width={200}
                  height={200}
                  priority
                  className="w-full rounded-t-md "
                />
              </div>
            </div>
          )}
      </div>

      <div className="w-full  ">
        <h1 className="text-2xl underline underline-offset-4">
          {" "}
          Production Companies
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-2 mt-8 ">
          {production_companies?.map((company) => (
            <div
              key={company.id}
              className="rounded-md shadow-md bg-gray-700 p-4 text-center "
            >
              {company.logo_path && (
                <Image
                  src={`https://image.tmdb.org/t/p/original/${company.logo_path}`}
                  alt={company.name}
                  width={100}
                  height={100}
                  priority
                  className="w-16 h-16 mx-auto rounded-full bg-white "
                />
              )}
              <p className="text-lg mt-2 ">{company.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}