"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"


export default function SearchBox() {

  const [search, setSearch] = useState('')
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    router.push(`/search/${search}`)
  }

  return (
    <div className="px-2 my-8 w-full md:w-[85vw] mx-auto ">
      <form onSubmit={handleSubmit} className="flex items-center">
        <input
          type="text"
          placeholder="Search keywords..."
          required
          onChange={(e) => setSearch(e.target.value)}
          onKeyUp={handleSubmit}
          className="p-2 w-full rounded-l-md text-white bg-gray-600 border-2 border-r-0 border-transparent focus:outline-none focus:border-primary duration-200 "
        />
        <input
          type="submit"
          value="Search"
          className="text-black bg-primary font-semibold py-2 px-5 rounded-r-md border-2 border-transparent cursor-pointer hover:text-white hover:bg-amber-500 duration-500 "
        />
      </form>
    </div>
  );
}