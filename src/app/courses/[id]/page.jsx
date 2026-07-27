import { notFound } from "next/navigation";
import Link from "next/link";
import { getCourseById } from "@/lib/fetchers";
import { 
  FiArrowLeft, FiUser, FiMail, FiPhone, FiMapPin, 
  FiMessageCircle, FiLink, FiFolder, FiFileText, FiDownload 
} from "react-icons/fi";

export default async function CourseDetailsPage({ params }) {
  const { id } = await params;
  const course = await getCourseById(id);

  if (!course) {
    notFound();
  }

  return (
    <main className="mx-auto mb-12 mt-28 flex w-[90%] flex-col md:mt-32">
      
   
      <Link 
        href="/courses" 
        className="group mb-5 flex w-fit items-center gap-1.5 text-xs font-semibold text-[#183a98] transition-colors hover:text-[#100774]"
      >
        <FiArrowLeft size={14} className="transition-transform duration-200 group-hover:-translate-x-1" />
        Back to Courses
      </Link>

    
      <div className="mb-6 border-b border-gray-200 pb-4">
        <span className="mb-1 block text-xs font-semibold tracking-wide text-gray-500">
          Course Code: {course.id}
        </span>
        <h1 className="bg-gradient-to-r from-[#183a98] to-[#100774] bg-clip-text text-xl font-bold text-transparent md:text-2xl">
          {course.title}
        </h1>
      </div>

     
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        
        
        <div className="flex flex-col gap-5">
          
          
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
            <h2 className="mb-3 flex items-center gap-2 text-sm font-semibold text-[#100774]">
              <FiUser /> Instructor Details
            </h2>
            <div className="flex flex-col gap-2.5 text-xs font-medium text-[#0e376f]">
              <p className="text-[13px] font-semibold text-[#183a98]">{course.instructor.name}</p>
              
              {course.instructor.email && (
                <div className="flex items-center gap-2 text-gray-600">
                  <FiMail className="text-gray-400" />
                  <a href={`mailto:${course.instructor.email}`} className="hover:text-[#183a98] hover:underline">
                    {course.instructor.email}
                  </a>
                </div>
              )}
              {course.instructor.phone && (
                <div className="flex items-center gap-2 text-gray-600">
                  <FiPhone className="text-gray-400" />
                  <span>{course.instructor.phone}</span>
                </div>
              )}
              {course.instructor.room && (
                <div className="flex items-center gap-2 text-gray-600">
                  <FiMapPin className="text-gray-400" />
                  <span>Room: {course.instructor.room}</span>
                </div>
              )}
            </div>
          </div>

          
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
            <h2 className="mb-3 flex items-center gap-2 text-sm font-semibold text-[#100774]">
              <FiLink /> Important Links
            </h2>
            <div className="flex flex-col gap-2">
              {course.links.whatsapp && (
                <a href={course.links.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white p-2 text-xs font-medium text-[#0e376f] transition-colors hover:border-[#183a98]/30 hover:bg-[#f0f7ff]">
                  <FiMessageCircle className="text-green-500" /> WhatsApp Group
                </a>
              )}
              {course.links.blc && (
                <a href={course.links.blc} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white p-2 text-xs font-medium text-[#0e376f] transition-colors hover:border-[#183a98]/30 hover:bg-[#f0f7ff]">
                  <FiLink className="text-[#183a98]" /> BLC Portal
                </a>
              )}
              {course.links.drive && (
                <a href={course.links.drive} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white p-2 text-xs font-medium text-[#0e376f] transition-colors hover:border-[#183a98]/30 hover:bg-[#f0f7ff]">
                  <FiFolder className="text-blue-500" /> Google Drive Folder
                </a>
              )}
              {(!course.links.whatsapp && !course.links.blc && !course.links.drive) && (
                <p className="text-xs text-gray-500">No links provided.</p>
              )}
            </div>
          </div>

        </div>

        
        <div className="flex flex-col gap-6 lg:col-span-2">
          
         
          <div>
            <h2 className="mb-3 text-base font-semibold text-[#100774]">Recorded Classes</h2>
            {course.recordedClasses.length > 0 ? (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {course.recordedClasses.map((record) => (
                  <div key={record.id} className="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                    {/* Embedded YouTube Iframe */}
                    <div className="aspect-video w-full bg-gray-100">
                      <iframe 
                        className="h-full w-full"
                        src={record.embedLink} 
                        title={record.classTitle} 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="p-3">
                      <h3 className="text-xs font-semibold text-[#0e376f]">{record.classTitle}</h3>
                      <p className="mt-1 text-[10px] text-gray-500">Date: {record.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-xl border border-dashed border-gray-300 bg-gray-50 p-6 text-center">
                <p className="text-xs font-medium text-gray-500">No recorded classes available yet.</p>
              </div>
            )}
          </div>

          
          <div>
            <h2 className="mb-3 text-base font-semibold text-[#100774]">Previous Questions</h2>
            {course.previousQuestions.length > 0 ? (
              <div className="flex flex-col gap-2">
                {course.previousQuestions.map((pq) => (
                  <a 
                    key={pq.id} 
                    href={pq.fileLink}
                    download
                    className="group flex items-center justify-between rounded-xl border border-gray-200 bg-white p-3 transition-colors hover:border-[#183a98]/30 hover:bg-[#f0f7ff]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="rounded bg-[#183a98]/10 p-1.5 text-[#183a98]">
                        <FiFileText size={16} />
                      </div>
                      <div>
                        <h3 className="text-xs font-semibold text-[#0e376f]">{pq.examType}</h3>
                        <p className="text-[11px] text-gray-500">Semester: {pq.semester}</p>
                      </div>
                    </div>
                    <span className="flex items-center gap-1.5 rounded-lg bg-[#183a98]/10 px-3 py-1.5 text-[11px] font-semibold text-[#183a98] transition-colors group-hover:bg-[#183a98] group-hover:text-white">
                      <FiDownload size={12} />
                      Download
                    </span>
                  </a>
                ))}
              </div>
            ) : (
              <div className="rounded-xl border border-dashed border-gray-300 bg-gray-50 p-6 text-center">
                <p className="text-xs font-medium text-gray-500">No previous questions uploaded yet.</p>
              </div>
            )}
          </div>

        </div>
        
      </div>
    </main>
  );
}