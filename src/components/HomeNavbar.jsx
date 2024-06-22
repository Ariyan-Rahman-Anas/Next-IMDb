"use client"

import Link from "next/link";
import { useSearchParams } from "next/navigation"

export default function HomeNavbar({param, title}){

    const searchParams= useSearchParams()
    const genre = searchParams.get("genre")

    return (
      <Link
        param="fetchTrending"
        href={`/?genre=${param}`}
        className={`${
          genre === param ? "underline underline-offset-4 text-gray-100 " : ""
        }  hover:text-gray-100 font-semibold duration-500 `}
      >
        {title}
      </Link>
    );
}