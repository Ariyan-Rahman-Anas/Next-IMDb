"use client"

import { FaRegThumbsUp } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";


export default function Card({result}) {
  const {
    id,
    backdrop_path, 
    title,
    original_title,
    name,
    overview,
    release_date,
    first_air_date,
    vote_count, poster_path,
  } = result || {};

  const handlePostAMovie=async()=>{
try{
const res= await fetch(`https://next-imdb-back-end.vercel.app/watch-list`, {
      method: "POST",
      body: JSON.stringify(result),
      headers:{"content-Type": "application/json"}
    } )
    const data = await res.json()
    console.log(data)
}catch(error){
      console.log("error is :", error);
}
  }



  return (
    <div className="rounded-md bg-gray-600 w-full hover:shadow-md hover:shadow-gray-200 duration-500 ">
      <Link onClick={handlePostAMovie} href={`/movie/${id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            backdrop_path || poster_path
          }`}
          alt="Loading..."
          width={200}
          height={200}
          priority
          className="w-full rounded-t-md "
        />
      </Link>
      <div className="p-2 text-sm ">
        <h1 className="font-semibold text-lg text-gray-300 ">
          {original_title
            ? original_title
            : title
            ? title
            : name
            ? name
            : "There no any title"}
        </h1>
        <p className="my-2">{overview.slice(0, 70)}...</p>

        <div className="flex items-center justify-between">
          <p>{release_date ? release_date : first_air_date} </p>
          <p className="flex items-center gap-2">
            <FaRegThumbsUp />
            <span>{vote_count}</span>
          </p>
        </div>
      </div>
    </div>
  );
}