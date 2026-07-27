import { getDeadlines } from "@/lib/fetchers";
import { FiCalendar, FiTarget, FiArchive } from "react-icons/fi";

export default async function DeadlinesPage() {
  const allDeadlines = await getDeadlines();

  // Filter deadlines based on the 'status' property from your mock data
  const activeDeadlines = allDeadlines.filter(d => d.status === "active");
  const expiredDeadlines = allDeadlines.filter(d => d.status === "expired");

  return (
    <main className="mx-auto mb-12 mt-28 flex w-[90%] flex-col gap-10 md:mt-32">
      
      {/* Page Header */}
      <div className="border-b border-gray-200 pb-4">
        <h1 className="mb-1 text-xl font-bold tracking-tight text-[#100774] md:text-2xl">
          Assignments & Projects
        </h1>
        <p className="text-xs font-medium text-gray-500">
          Track your upcoming submissions and review past deadlines.
        </p>
      </div>

      {/* ========================================= */}
      {/* SECTION 1: Upcoming (Active) Deadlines    */}
      {/* ========================================= */}
      <section>
        <div className="mb-4 flex items-center gap-2">
          <FiTarget className="text-green-600" size={18} />
          <h2 className="text-lg font-bold text-[#100774]">Upcoming</h2>
        </div>

        {activeDeadlines.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {activeDeadlines.map((deadline) => (
              <div 
                key={deadline.id}
                className="flex flex-col gap-2 rounded-xl border border-green-100 bg-white p-4 transition-transform duration-200 hover:scale-[1.02] hover:border-green-200"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-sm font-semibold leading-snug text-[#0e376f]">
                    {deadline.title}
                  </h3>
                  {/* Active Status Chip */}
                  <span className="flex shrink-0 items-center gap-1.5 rounded bg-green-50 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-green-600 border border-green-100">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    Active
                  </span>
                </div>

                <div className="flex items-center justify-between mt-1">
                   <p className="text-xs font-medium text-[#183a98]">
                    {deadline.course}
                  </p>
                  {deadline.type && (
                    <span className="text-[10px] font-semibold text-gray-400">
                      {deadline.type}
                    </span>
                  )}
                </div>

                <div className="mt-2 flex items-center gap-1.5 text-xs font-bold text-gray-600">
                  <FiCalendar size={14} className="text-green-500" />
                  <span>Due: {deadline.dueDate}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-gray-200 bg-gray-50 py-10 text-center">
            <p className="text-sm font-medium text-gray-500">No upcoming assignments.</p>
          </div>
        )}
      </section>

      {/* ========================================= */}
      {/* SECTION 2: Expired Deadlines              */}
      {/* ========================================= */}
      <section>
        <div className="mb-4 flex items-center gap-2">
          <FiArchive className="text-gray-400" size={18} />
          <h2 className="text-lg font-bold text-gray-500">Past Deadlines</h2>
        </div>

        {expiredDeadlines.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {expiredDeadlines.map((deadline) => (
              <div 
                key={deadline.id}
                // Applied dull styling: gray bg, lower opacity, slight grayscale
                className="flex flex-col gap-2 rounded-xl border border-gray-200 bg-gray-50 p-4 opacity-70 grayscale-[30%] transition-opacity duration-200 hover:opacity-100"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-sm font-semibold leading-snug text-gray-600">
                    {deadline.title}
                  </h3>
                  {/* Expired Status Chip with Red Dot */}
                  <span className="flex shrink-0 items-center gap-1.5 rounded bg-red-50 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-red-500 border border-red-100">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500"></span>
                    Expired
                  </span>
                </div>

                <div className="flex items-center justify-between mt-1">
                   <p className="text-xs font-medium text-gray-500">
                    {deadline.course}
                  </p>
                  {deadline.type && (
                    <span className="text-[10px] font-semibold text-gray-400">
                      {deadline.type}
                    </span>
                  )}
                </div>

                <div className="mt-2 flex items-center gap-1.5 text-xs font-bold text-gray-400">
                  <FiCalendar size={14} />
                  <span className="line-through">Due: {deadline.dueDate}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-gray-200 bg-gray-50 py-10 text-center">
            <p className="text-sm font-medium text-gray-400">No past deadlines to show.</p>
          </div>
        )}
      </section>

    </main>
  );
}