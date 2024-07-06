"use client"; // Add this directive at the top

import { useState } from 'react';
import Link from "next/link";
import { IoIosMenu } from "react-icons/io";

export default function MenuItems() {

  const [menus, setMenus] = useState(false)
  const [hideMenu, setHidemenu] = useState(false)

  const hidingMenu=()=>{
    setMenus(!menus)
  }

  return (
    <div>
      <div className="relative ">
        <button
          onClick={() => setMenus(!menus)}
          className="flex items-center gap-1 hover:bg-gray-800 px-3 py-1 rounded-md duration-500 cursor-pointer "
        >
          <IoIosMenu className="text-3xl " />
          <span className="hidden lg:inline text-base ">Menu</span>
        </button>
        <div className="relative ">
          {menus && (
            <div className="menu-items w-[93vw] md:w-[30vw] min-h-20 absolute top-[.8rem] left-0  bg-gray-700 rounded-b-md px-4 py-2 duration-500 ">
              <ul>
                <li onClick={hidingMenu} className="hover:underline ">
                  <Link href="/">Home</Link>
                </li>
                <li onClick={hidingMenu} className="hover:underline ">
                  <Link href="/about">About</Link>
                </li>
                <li onClick={hidingMenu} className="lg:hidden hover:underline ">
                  <Link href="/watch-list">Watch List</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}