"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiHome, FiBook, FiCalendar, FiEdit, FiClock, FiBell, FiMenu, FiX } from "react-icons/fi";

const NAV_ITEMS = [
  { name: "Home", Icon: FiHome, href: "/" },
  { name: "Courses", Icon: FiBook, href: "/courses" },
  { name: "Routine", Icon: FiCalendar, href: "/routine" },
  { name: "Exams", Icon: FiEdit, href: "/exams" },
  { name: "Deadlines", Icon: FiClock, href: "/deadlines" },
  { name: "Notices", Icon: FiBell, href: "/notices" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed left-1/2 top-5 z-50 w-[95%] -translate-x-1/2 md:w-[90%]">
      
     
      <div className="hidden items-center gap-6 rounded-full border border-[#0e376f]/10 bg-[#fbffff]/80 px-4 py-3 shadow-md backdrop-blur-md md:flex md:justify-between">
        
        <Link href="/"><h2 className="pl-2 pr-4 text-xl font-black text-[#100774]">43-B</h2></Link>
        
        <div className="flex items-center gap-2">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-2 rounded-full border border-white/40 px-4 py-2 transition-colors duration-200 ${
                  isActive ? "bg-linear-to-r from-[#183a98] to-[#0e376f]" : "bg-white/30 hover:bg-[#b7d6ee]/40"
                }`}
              >
                <span className={isActive ? "text-[#fbffff]" : "text-[#183a98]"}>
                  <item.Icon size={17} />
                </span>

                <span className={`text-sm font-medium ${isActive ? "text-[#fbffff]" : "text-[#0e376f]"}`}>
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      
      <div className="flex items-center justify-between rounded-full border border-[#0e376f]/10 bg-[#fbffff]/80 px-5 py-3 shadow-md backdrop-blur-md md:hidden">
        <Link href="/"><h2 className="text-xl font-black text-[#100774]">43-B</h2></Link>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#183a98] text-[#fbffff]"
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

     
      {open && (
        <div className="mt-2 flex flex-col gap-2 rounded-4xl border border-[#0e376f]/10 bg-[#fbffff]/90 p-4 shadow-lg backdrop-blur-md md:hidden">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-4 rounded-2xl border border-white/30 px-5 py-4 transition-colors duration-200 ${
                  isActive ? "bg-linear-to-r from-[#183a98] to-[#0e376f]" : "bg-white/30 hover:bg-[#b7d6ee]/40"
                }`}
              >
                <span className={isActive ? "text-[#fbffff]" : "text-[#183a98]"}>
                  <item.Icon size={17} />
                </span>

                <span className={`font-medium ${isActive ? "text-[#fbffff]" : "text-[#0e376f]"}`}>
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
      )}
      
    </nav>
  );
}