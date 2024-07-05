import Link from "next/link";

export default function Footer() {
  return (
    <div className="text-center text-gray-400 my-1 px-2 ">
        <p>Next-IMDb || All rights reserved || Developed by <Link target="_blank" href="https://ariyanrahmananas.netlify.app/" className="font-semibold" >Ariyan Rahman Anas</Link> </p>
    </div>
  )
}