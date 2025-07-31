import { Bell, BookOpen } from "lucide-react";
import Link from "next/link";
import React from "react";

const NonDashboardNavbar = () => {
  return (
    <nav className="w-full flex justify-center bg-[#1b1c22]">
      <div className="flex justify-between items-center w-3/4 py-8">
        <div className="flex justify-between items-center gap-14">
          <Link
            href="/"
            className="font-bold text-lg sm:text-[1.25rem] hover:text-[#6e6e6e]"
          >
            Veda Janani
          </Link>
          <div className="flex items-center gap-4">
            <div className="relative group">
              <Link
                href="/search"
                className=" bg-[#25262f] pl-10 sm:pl-14 pr-6 sm:pr-20 py-3 sm:py-4 rounded-xl text-[#6e6e6e] hover:text-white-50 hover:bg-[#3d3d3d] transition-all duration-300 text-sm sm:text-base;"
              >
                <span className="hidden sm:inline">Search Courses</span>
                <span className="sm:hidden">Search</span>
              </Link>
              <BookOpen
                className="absolute left-3 sm:left-5 top-1/2 transform -translate-y-1/2 text-[#6e6e6e] transition-all duration-300;"
                size={18}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 sm:gap-4">
        <button className="relative w-7 h-7 sm:w-8 sm:h-8 bg-gray-800 rounded-full flex items-center justify-center">
          <span className="absolute top-0 right-0 bg-blue-500 h-1.5 sm:h-2 w-1.5 sm:w-2 rounded-full"></span>
          <Bell className="text-gray-400 w-4   h-4   sm:w-5 sm:h-5" />
        </button>

        {/* Sign in buttons */}

      </div>
    </nav>
  );
};

export default NonDashboardNavbar;
