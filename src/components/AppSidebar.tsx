"use client";

import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Image from "next/image";
import { useSidebar } from "@/context/SidebarProvider";
import { useAppSettings } from "@/stores/app-settings-store";
import { LuLayoutDashboard, LuPlug, LuTableCellsSplit } from "react-icons/lu";
import { FaChevronDown, FaRegCopy, FaRegUser, FaWpforms } from "react-icons/fa";
import { IoCalendarClearOutline } from "react-icons/io5";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { FiPieChart } from "react-icons/fi";
import { TbCubePlus } from "react-icons/tb";
import { BiHorizontalCenter } from "react-icons/bi";
import { HiDotsHorizontal } from "react-icons/hi";
import SidebarWidget from "./SidebarWidget";
import Navigation from "./navigation/Navigation";
import { adminNavItems, adminOthersItems } from "@/constants/nav";




const AppSidebar = () => {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
  const { expandedSidebar } = useAppSettings();

  return (
    <aside
      className={`fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 bg-white 0 text-gray-900  h-screen transition-all duration-300 ease-in-out z-50 border-r border-gray-200 
        
        lg:translate-x-0`}
      onMouseEnter={() => !expandedSidebar && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`py-8 flex ${
          !isExpanded && !isHovered ? "lg:justify-center" : "justify-start"
        }`}
      >
        <Link href="/dashboard">
          {isExpanded || isHovered || isMobileOpen ? (
            <>
              <Image
                className="dark:hidden"
                src="/images/logo/logo.svg"
                alt="Logo"
                width={150}
                height={40}
                priority
              />
              <Image
                className="hidden dark:block"
                src="/images/logo/logo-dark.svg"
                alt="Logo"
                width={150}
                height={40}
                priority
              />
            </>
          ) : (
            <Image
              src="/images/logo/logo-icon.svg"
              alt="Logo"
              width={32}
              height={32}
              priority
            />
          )}
        </Link>
      </div>

      <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
        <nav className="mb-6">
          <div className="flex flex-col gap-4">
            <div>
              <h2
                className={`mb-4 text-xs uppercase flex leading-[20px] text-gray-400 ${
                  !isExpanded && !isHovered
                    ? "lg:justify-center"
                    : "justify-start"
                }`}
              >
                {isExpanded || isHovered || isMobileOpen ? (
                  "Menu"
                ) : (
                  <HiDotsHorizontal />
                )}
              </h2>
              <Navigation items={adminNavItems} menuType="main" />
            </div>

            {/* <div className="">
              <h2
                className={`mb-4 text-xs uppercase flex leading-[20px] text-gray-400 ${
                  !isExpanded && !isHovered
                    ? "lg:justify-center"
                    : "justify-start"
                }`}
              >
                {isExpanded || isHovered || isMobileOpen ? (
                  "Others"
                ) : (
                  <HiDotsHorizontal />
                )}
              </h2>

              <Navigation items={adminOthersItems} menuType="others" />
            </div> */}
          </div>
        </nav>
        {isExpanded || isHovered || isMobileOpen ? <SidebarWidget /> : null}
      </div>
    </aside>
  );
};

export default AppSidebar;
