import { getUpcomingExams } from "@/lib/fetchers";
import { FiCalendar, FiClock, FiBookOpen, FiEdit3, FiFileText, FiMonitor, FiFlag } from "react-icons/fi";

export default async function ExamsPage() {
  const allExams = await getUpcomingExams();

  // Define the 4 sections as a simple array to keep the return statement clean and flat
  const sections = [
    {
      id: "midterms",
      title: "Midterms",
      icon: FiEdit3,
      exams: allExams.filter(e => e.type.toLowerCase().includes("mid")),
      theme: { text: "text-amber-600", bg: "bg-amber-50", border: "border-amber-100", icon: "text-amber-500", hover: "hover:border-amber-200" },
      emptyMessage: "No midterms scheduled right now."
    },
    {
      id: "quizzes",
      title: "Quizzes & Class Tests",
      icon: FiFileText,
      exams: allExams.filter(e => e.type.toLowerCase().includes("quiz") || e.type.toLowerCase().includes("test")),
      theme: { text: "text-sky-600", bg: "bg-sky-50", border: "border-sky-100", icon: "text-sky-500", hover: "hover:border-sky-200" },
      emptyMessage: "No quizzes or class tests coming up."
    },
    {
      id: "labs",
      title: "Lab Evaluations",
      icon: FiMonitor,
      exams: allExams.filter(e => e.type.toLowerCase().includes("lab")),
      theme: { text: "text-indigo-600", bg: "bg-indigo-50", border: "border-indigo-100", icon: "text-indigo-500", hover: "hover:border-indigo-200" },
      emptyMessage: "No lab evaluations scheduled."
    },
    {
      id: "finals",
      title: "Final Exams",
      icon: FiFlag,
      exams: allExams.filter(e => e.type.toLowerCase().includes("final")),
      theme: { text: "text-rose-600", bg: "bg-rose-50", border: "border-rose-100", icon: "text-rose-500", hover: "hover:border-rose-200" },
      emptyMessage: "No final exams scheduled yet."
    }
  ];

  return (
    <main className="mx-auto mb-12 mt-28 flex w-[90%] flex-col gap-10 md:mt-32">
      
      {/* Page Header */}
      <div className="border-b border-gray-200 pb-4">
        <h1 className="mb-1 text-xl font-bold tracking-tight text-[#100774] md:text-2xl">
          Exam Schedule
        </h1>
        <p className="text-xs font-medium text-gray-500">
          Track all your upcoming assessments sorted by category.
        </p>
      </div>

      {/* Map through the 4 sections directly in the single return statement */}
      {sections.map((section) => {
        const Icon = section.icon;
        
        return (
          <section key={section.id} className="flex flex-col gap-4">
            {/* Section Header */}
            <div className="flex items-center gap-2 border-b border-gray-100 pb-2">
              <Icon className={section.theme.icon} size={18} />
              <h2 className="text-lg font-bold text-[#100774]">{section.title}</h2>
            </div>

            {/* Exams Grid or Empty State */}
            {section.exams.length > 0 ? (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {section.exams.map((exam) => (
                  <div 
                    key={exam.id}
                    className={`flex flex-col gap-3 rounded-xl border ${section.theme.border} bg-white p-4 transition-transform duration-200 hover:scale-[1.02] ${section.theme.hover}`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-sm font-semibold leading-snug text-[#0e376f]">
                        {exam.course}
                      </h3>
                      <span className={`shrink-0 rounded px-2 py-1 text-[10px] font-bold uppercase tracking-wider ${section.theme.bg} ${section.theme.text} border ${section.theme.border}`}>
                        {exam.type}
                      </span>
                    </div>

                    <div className={`mt-1 flex flex-wrap items-center gap-4 text-xs font-bold ${section.theme.text}`}>
                      <div className="flex items-center gap-1.5">
                        <FiCalendar size={14} className={section.theme.icon} />
                        <span>{exam.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <FiClock size={14} className={section.theme.icon} />
                        <span>{exam.time}</span>
                      </div>
                    </div>

                    {exam.syllabus ? (
                      <div className="mt-2 flex items-start gap-2 rounded-lg border border-gray-100 bg-gray-50 p-2.5 text-xs font-medium text-gray-600">
                        <FiBookOpen className="mt-0.5 shrink-0 text-gray-400" size={12} />
                        <span><span className="font-semibold text-gray-500">Syllabus:</span> {exam.syllabus}</span>
                      </div>
                    ) : (
                      <div className="mt-2 flex items-start gap-2 rounded-lg border border-dashed border-gray-200 bg-gray-50 p-2.5 text-xs font-medium text-gray-400">
                        <FiBookOpen className="mt-0.5 shrink-0 text-gray-300" size={12} />
                        <span className="italic">Syllabus not provided yet.</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex items-center justify-center rounded-xl border border-dashed border-gray-200 bg-gray-50 py-8 text-center">
                <p className="text-sm font-medium text-gray-400">{section.emptyMessage}</p>
              </div>
            )}
          </section>
        );
      })}

    </main>
  );
}