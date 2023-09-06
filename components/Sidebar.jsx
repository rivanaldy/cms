
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { RxSketchLogo, RxDashboard, RxPerson } from "react-icons/rx";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import AboutUs from "@/pages/dropwon/aboutus";
import Blog from "@/pages/dropwon/Blog";

const Sidebar = ({ children }) => {
  const router = useRouter();
  return (
    <div className="flex">
      <div className="fixed w-[200px] h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between z-10">
        <div className="flex flex-col items-start space-y-5">
          <div className="bg-purple-800 text-white p-3 rounded-lg inline-block">
            <RxSketchLogo size={20} />
          </div>
          <span className="border-b-[1px] border-gray-200 w-full p-2 my-3"></span>
          <div
            className="flex flex-row bg-purple-800 text-white p-3 rounded-lg space-x-4 hover:cursor-pointer"
            onClick={() => router.push("/")}
          >
            <RxSketchLogo size={20} />
            <p>home</p>
          </div>
          
          <AboutUs/>
          <div
            className="flex flex-row bg-purple-800 text-white p-3 rounded-lg space-x-4 hover:cursor-pointer"
            onClick={() => router.push("/service")}
          >
            <p>Service</p>
          </div>
          <div
            className="flex flex-row bg-purple-800 text-white p-3 rounded-lg space-x-4 hover:cursor-pointer"
            onClick={() => router.push("/")}
          >
            <p>Portofolio</p>
          </div>
         <Blog/>
         <div
            className="flex flex-row bg-purple-800 text-white p-3 rounded-lg space-x-4 hover:cursor-pointer"
            onClick={() => router.push("/")}
          >
            <p>Trash</p>
          </div>
          {/* <Link href="/">
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <RxDashboard size={20} />
            </div>
          </Link>
          <Link href="/customers">
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <RxPerson size={20} />
            </div>
          </Link>
          <Link href="/orders">
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <HiOutlineShoppingBag size={20} />
            </div>
          </Link>
          <Link href="/">
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <FiSettings size={20} />
            </div>
          </Link> */}
        </div>
      </div>
      <main className="ml-20 w-full">{children}</main>
    </div>
  );
};

export default Sidebar;