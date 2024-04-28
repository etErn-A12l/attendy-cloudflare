import React from "react";
import Link from "next/link";
import { MobileNav } from "./MobileNav";

const Header = () => {
  return (
    <nav className="flex-wrap max-w-screen-lg mx-auto lg:flex items-center justify-between py-10">
      <div className="flex lg:hidden items-center justify-between mb-10 lg:mb-0">
        <MobileNav />
      </div>

      <ul className="hidden lg:flex flex-col lg:flex-row lg:items-center lg:space-x-20 mx-auto">
        <li className="font-medium text-green-500 text-lg hover:text-green-300 transition ease-in-out duration-300 mb-5 lg:mb-0">
          <Link href="/">Home</Link>
        </li>
        <li className="font-medium text-green-500 text-lg hover:text-green-300 transition ease-in-out duration-300 mb-5 lg:mb-0">
          <Link href="/classes">Classes</Link>
        </li>

        <li className="font-medium text-green-500 text-lg hover:text-green-300 transition ease-in-out duration-300 mb-5 lg:mb-0">
          <Link href="/dashboard">Dashboard</Link>
        </li>

        <li className="font-medium text-green-500 text-lg hover:text-green-300 transition ease-in-out duration-300 mb-5 lg:mb-0">
          <Link href="/profile">Profile</Link>
        </li>
      </ul>
      {/* <button className="px-8 py-3 font-medium text-green-500 text-lg text-center border-2 border-green-500 rounded-md hover:bg-green-500 hover:text-white transition ease-linear duration-300 hidden lg:block">
        <Link href="/login">Login</Link>
      </button> */}
    </nav>
  );
};

export default Header;
