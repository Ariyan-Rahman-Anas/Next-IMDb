import { BsFillBookmarkPlusFill } from "react-icons/bs";
import MenuItems from "./MenuItems";
import SearchBar from "./SearchBar";
import Link from "next/link";

export default function Header() {


  return (
    <div className="text-white bg-black p-3 w-full">
      <div className="flex items-center gap-4 w-full ">
        <div className="flex flex-row-reverse items-center lg:flex-row gap-4  ">
          <Link
            href="/"
            className="font-extrabold text-2xl text-black bg-primary px-2 py-1 rounded-md "
          >
            IMDb
          </Link>
          <MenuItems />
        </div>
        <SearchBar></SearchBar>
        <button className="hidden lg:inline font-extrabold text-2xl px-3 py-1 hover:bg-gray-800 duration-500 rounded-md ">
          IMDb<span className="text-[#16b3d6] ">Pro</span>
        </button>
        <button className="hidden lg:flex items-center gap-1 px-3 py-2 font-semibold hover:bg-gray-800 duration-500 rounded-md ">
          <BsFillBookmarkPlusFill />
          <span>Watchlist</span>
        </button>

        <Link href="/log-in" className="font-semibold min-w-fit ">
          Sign in
        </Link>
        
        <Link
          href="/"
          className="lg:hidden font-semibold min-w-fit text-black bg-primary px-2 py-1 rounded-md "
        >
          Use app
        </Link>
      </div>
    </div>
  );
}