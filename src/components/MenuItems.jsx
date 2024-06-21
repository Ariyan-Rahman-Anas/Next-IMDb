import { IoIosMenu } from "react-icons/io";

export default function MenuItems() {
  return (
    <div>
      <div className="flex items-center gap-1 cursor-pointer ">
        <button className="text-3xl">
          <IoIosMenu />
        </button>
        <p className="hidden lg:inline ">Menu</p>
      </div>
    </div>
  );
}