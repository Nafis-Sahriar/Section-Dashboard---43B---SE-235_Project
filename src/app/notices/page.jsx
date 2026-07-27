import { getAllNotices } from "@/lib/fetchers";
import { FiBell, FiArchive, FiCalendar, FiAlertCircle } from "react-icons/fi";

export default async function NoticesPage() {
  const allNotices = await getAllNotices();


  const activeNotices = allNotices.filter(n => n.status === "active");
  const expiredNotices = allNotices.filter(n => n.status === "expired");

  return (
    <main className="mx-auto mb-12 mt-28 flex w-[90%] flex-col gap-10 md:mt-32">
      
      
      <div className="border-b border-gray-200 pb-4">
        <h1 className="mb-1 text-xl font-bold tracking-tight text-[#100774] md:text-2xl">
          Notice Board
        </h1>
        <p className="text-xs font-medium text-gray-500">
          Official announcements, lab updates, and general information.
        </p>
      </div>

      
      <section>
        <div className="mb-4 flex items-center gap-2">
          <FiBell className="text-blue-600" size={18} />
          <h2 className="text-lg font-bold text-[#100774]">Active Announcements</h2>
        </div>

        {activeNotices.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {activeNotices.map((notice) => (
              <div 
                key={notice.id}
                className="flex flex-col gap-3 rounded-xl border border-blue-100 bg-white p-5 transition-transform duration-200 hover:scale-[1.02] hover:border-blue-200"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-sm font-bold leading-snug text-[#0e376f]">
                    {notice.title}
                  </h3>
                  {/* Active Status Chip */}
                  <span className="flex shrink-0 items-center gap-1.5 rounded bg-blue-50 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-600 border border-blue-100">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                    Active
                  </span>
                </div>

                <p className="text-xs font-medium leading-relaxed text-gray-600">
                  {notice.description}
                </p>

                <div className="mt-auto flex items-center justify-between pt-2">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-500">
                    <FiCalendar size={14} className="text-blue-400" />
                    <span>{notice.date}</span>
                  </div>
                  
                  {/* High Priority Indicator */}
                  {notice.priority === "high" && (
                    <div className="flex items-center gap-1 text-[10px] font-bold text-rose-500">
                      <FiAlertCircle size={12} />
                      <span className="uppercase tracking-wide">High Priority</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-gray-200 bg-gray-50 py-10 text-center">
            <p className="text-sm font-medium text-gray-500">No active announcements right now.</p>
          </div>
        )}
      </section>

      {/* ========================================= */}
      {/* SECTION 2: Expired / Past Notices         */}
      {/* ========================================= */}
      <section>
        <div className="mb-4 flex items-center gap-2">
          <FiArchive className="text-gray-400" size={18} />
          <h2 className="text-lg font-bold text-gray-500">Past Announcements</h2>
        </div>

        {expiredNotices.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {expiredNotices.map((notice) => (
              <div 
                key={notice.id}
                // Applied dull styling: gray bg, lower opacity, slight grayscale
                className="flex flex-col gap-3 rounded-xl border border-gray-200 bg-gray-50 p-5 opacity-70 grayscale-[30%] transition-opacity duration-200 hover:opacity-100"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-sm font-bold leading-snug text-gray-600">
                    {notice.title}
                  </h3>
                  {/* Expired Status Chip */}
                  <span className="flex shrink-0 items-center gap-1.5 rounded bg-gray-200 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-500 border border-gray-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-gray-400"></span>
                    Expired
                  </span>
                </div>

                <p className="text-xs font-medium leading-relaxed text-gray-500">
                  {notice.description}
                </p>

                <div className="mt-auto flex items-center justify-between pt-2 text-gray-400">
                  <div className="flex items-center gap-1.5 text-xs font-semibold">
                    <FiCalendar size={14} />
                    <span>{notice.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-gray-200 bg-gray-50 py-10 text-center">
            <p className="text-sm font-medium text-gray-400">No past announcements to show.</p>
          </div>
        )}
      </section>

    </main>
  );
}