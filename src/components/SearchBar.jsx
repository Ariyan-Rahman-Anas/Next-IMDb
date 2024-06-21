import { IoIosSearch } from "react-icons/io";

export default function SearchBar() {
  return (
    <div className="w-full">
      <form className="flex items-center relative  text-black text-sm border-white ">
        <select
          name=""
          id=""
          className="hidden md:inline py-2 px-2 rounded-l-md border-t-[.15rem] border-b-0 border-white border-r border-r-black outline-none "
        >
          <option value="all">All</option>
          <option value="Title">Title</option>
          <option value="tvEpisodes">TV Episodes</option>
        </select>
        <input
          type="text"
          required
          name="search"
          placeholder="Search IMDb"
          className="hidden md:inline py-2 px-2 w-full rounded-r-md focus:outline-none focus:bg-amber-100  duration-500 "
        />
        <IoIosSearch className="absolute right-2 text-xl text-white md:text-gray-500 " />
      </form>
    </div>
  );
}