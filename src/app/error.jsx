"use client"

import { useEffect } from "react"

export default function error({ error, reset }) {
    
    useEffect(() => {
        console.log(error)
    },[error])

  return (
    <div className="min-h-screen max-h-screen flex items-center justify-center text-center ">
          <div>
            <h1 className="font-semibold">Something went wrong. Please again later</h1>
          <button onClick={()=>reset()} className="px-5 py-1.5 mt-2 rounded-md font-semibold text-black bg-amber-500 hover:text-white hover:bg-amber-600 duration-500  " >Try Again</button>
          </div>
    </div>
  )
}