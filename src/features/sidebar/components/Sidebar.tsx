"use client";

import { Navbar } from "@/features/navigation";
import { Loggedin } from "./Loggedin";
import { AppLogo } from "@/components/AppLogo";
const Sidebar = () => {
  return (
    <aside className="md:pl-10 py-4 hidden lg:flex  sticky top-0 overflow-y-auto  flex-col xl:items-start  items-center pl-4 border-r min-h-screen max-h-screen border-r-primary-outline">
      <div className="pl-2 mb-4 w-full hidden xl:block pr-9">
        <Loggedin />
      </div>
      <div className="flex   w-full  flex-col">
       <Navbar/>
      </div>
    </aside>
  );
};

export default Sidebar;
