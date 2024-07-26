"use client";

import { BsFillBookmarkPlusFill } from "react-icons/bs";
import MenuItems from "./MenuItems";
import SearchBar from "./SearchBar";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import apiUtils from "@/utils/apiUtils";

export default function Header() {
  const router = useRouter();
  const [userData, setUserData] = useState(null);

    // Fetch user data from local storage and update state
  useEffect(() => {
    const fetchUserData = () => {
      const gettingDataFromLS = localStorage.getItem("userData");
      if (gettingDataFromLS) {
        setUserData(JSON.parse(gettingDataFromLS));
      } else {
        setUserData(null);
      }
    };
    fetchUserData();

    // Optional: Set up an interval to check for changes
    const interval = setInterval(() => {
      fetchUserData();
    }, 2000); 
    return () => clearInterval(interval);
  }, []);

  const handleLogOut = async () => {
    try {
      await apiUtils.get("logout");
      localStorage.removeItem("userData");
      setUserData(null);
      router.push("/log-in"); 
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div className="text-white bg-black p-3 w-full">
      <div className="flex items-center gap-4 w-full">
        <div className="flex flex-row-reverse items-center lg:flex-row gap-4">
          <Link
            href="/"
            className="font-extrabold text-2xl text-black bg-primary px-2 py-1 rounded-md"
          >
            IMDb
          </Link>
          <MenuItems />
        </div>
        <SearchBar />
        <button className="hidden lg:inline font-extrabold text-2xl px-3 py-1 hover:bg-gray-800 duration-500 rounded-md">
          IMDb<span className="text-[#16b3d6]">Pro</span>
        </button>
        <Link
          href="/watch-list"
          className="hidden lg:flex items-center gap-1 px-3 py-2 font-semibold hover:bg-gray-800 duration-500 rounded-md"
        >
          <BsFillBookmarkPlusFill />
          <span>Watchlist</span>
        </Link>

        {userData ? (
          <button onClick={handleLogOut} className="font-semibold min-w-fit">
            Sign out
          </button>
        ) : (
          <Link href="/log-in" className="font-semibold min-w-fit">
            Sign in
          </Link>
        )}

        <Link
          href="/"
          className="lg:hidden font-semibold min-w-fit text-black bg-primary px-2 py-1 rounded-md"
        >
          Use app
        </Link>
      </div>
    </div>
  );
}