import Link from "next/link";
import { FiUser, FiArrowRight, FiBookOpen } from "react-icons/fi";

export default function CourseCard({ course }) 
{
  return (

    <div className="group flex flex-col overflow-hidden rounded-xl border border-[#b7d6ee]/40 bg-[#fbffff] transition-transform duration-200 hover:scale-[1.02]">
      
     
      <div className="relative h-28 w-full bg-gradient-to-r from-[#183a98] to-[#0e376f]">
        {course.coverImage ? (
          <img 
            src={course.coverImage} 
            alt={course.title} 
            className="h-full w-full object-cover opacity-90 transition-opacity duration-200 group-hover:opacity-100"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center opacity-50">
            <FiBookOpen size={32} className="text-[#fbffff]" />
          </div>
        )}
      </div>

    
      <div className="flex flex-1 flex-col p-4">
        <h3 className="mb-2 text-sm font-bold leading-snug text-[#0e376f]">
          {course.title}
        </h3>
        
       
        <div className="mb-4 flex items-center gap-1.5 text-xs font-medium text-[#183a98]">
          <FiUser size={14} />
          <span>{course.instructor.name}</span>
        </div>

        
        <div className="mt-auto pt-2">
          <Link 
            href={`/courses/${course.id}`}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#183a98]/10 py-2 text-xs font-bold text-[#183a98] transition-colors duration-200 hover:bg-[#183a98] hover:text-[#fbffff]"
          >
            View Details
            <FiArrowRight size={14} />
          </Link>
        </div>
      </div>
      
    </div>
  );
}