import Link from "next/link";
import { FaPerson } from "react-icons/fa6";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { IoIosPerson } from "react-icons/io";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto w-full bg-linear-to-br from-[#04021f] via-[#0a053f] to-[#100774] pb-6 pt-12 shadow-[0_-4px_25px_rgba(0,0,0,0.1)]">
      <div className="mx-auto flex w-[90%] flex-col gap-10 md:flex-row md:justify-between md:gap-8">
        
        <div className="flex flex-col gap-3 md:max-w-sm">
          <h2 className="text-xl font-black tracking-tight text-[#fbffff]">
            Academic Hub
          </h2>
          <p className="text-xs font-medium leading-relaxed text-[#b7d6ee]/80">
            Your centralized academic dashboard. Effortlessly manage your courses, track assignments, and stay up-to-date with your daily routine and university notices.
          </p>
        </div>

       
        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-bold text-[#fbffff]">Navigation</h3>
          <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-xs font-medium text-[#b7d6ee] sm:grid-cols-3 md:grid-cols-2">
            <li>
              <Link href="/" className="transition-colors duration-200 hover:text-[#fbffff] hover:underline">
                Dashboard Home
              </Link>
            </li>
            <li>
              <Link href="/courses" className="transition-colors duration-200 hover:text-[#fbffff] hover:underline">
                Course Directory
              </Link>
            </li>
            <li>
              <Link href="/routine" className="transition-colors duration-200 hover:text-[#fbffff] hover:underline">
                Weekly Routine
              </Link>
            </li>
            <li>
              <Link href="/exams" className="transition-colors duration-200 hover:text-[#fbffff] hover:underline">
                Exam Schedule
              </Link>
            </li>
            <li>
              <Link href="/deadlines" className="transition-colors duration-200 hover:text-[#fbffff] hover:underline">
                Deadlines
              </Link>
            </li>
            <li>
              <Link href="/notices" className="transition-colors duration-200 hover:text-[#fbffff] hover:underline">
                Notice Board
              </Link>
            </li>
          </ul>
        </div>
      </div>

    
      <div className="mx-auto mt-10 flex w-[90%] flex-col items-center justify-between gap-4 border-t border-[#b7d6ee]/20 pt-6 md:flex-row">
        <p className="text-[11px] font-medium text-[#b7d6ee]/60">
          &copy; {currentYear} Designed & Built by Nafis . All rights reserved.
        </p>
        
  
        <div className="flex items-center gap-4 text-[#b7d6ee]/60">
          <a href="#" rel="noopener noreferrer" target="_blank" className="transition-colors hover:text-[#fbffff]">
            <FiGithub size={16} />
          </a>
          <a href="https://www.linkedin.com/in/nafis-sahriar-redwan/" rel="noopener noreferrer" target="_blank" className="transition-colors hover:text-[#fbffff]">
            <FiLinkedin size={16} />
          </a>
          <a href="https://nafis-sahriar.vercel.app/" rel="noopener noreferrer" target="_blank" className="transition-colors hover:text-[#fbffff]">
            <IoIosPerson size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}