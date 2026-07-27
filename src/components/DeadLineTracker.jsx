import Link from "next/link";
import { getDeadlines } from "../lib/fetchers";
import { FiCalendar, FiTarget, FiArrowRight } from "react-icons/fi";

export default async function DeadlineTracker() {
  const allDeadlines = await getDeadlines();
  
  // Filter for active deadlines only, THEN slice the top 4
  const activeDeadlines = allDeadlines.filter(deadline => deadline.status === "active");
  const topDeadlines = activeDeadlines.slice(0, 4);

  return (
    <section className="flex h-full flex-col rounded-2xl border border-[#b7d6ee]/30 bg-gray-50 p-4 md:p-5">
      
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FiTarget className="text-[#100774]" size={20} />
          <h2 className="text-lg font-bold text-[#100774]">
            Upcoming Deadlines
          </h2>
        </div>
        <Link 
          href="/deadlines" 
          className="group flex items-center gap-1 text-xs font-semibold text-[#183a98] transition-colors hover:text-[#100774]"
        >
          View All 
          <FiArrowRight className="transition-transform duration-200 group-hover:translate-x-0.5" />
        </Link>
      </div>
      
      <div className="flex flex-col gap-3">
        {topDeadlines.length > 0 ? (
          topDeadlines.map((deadline) => (
            <div 
              key={deadline.id}
              className="group flex flex-col gap-1.5 rounded-xl border border-green-100 bg-[#fbffff] p-3 transition-transform duration-200 hover:scale-[1.02] hover:border-green-200"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-sm font-semibold leading-snug text-[#0e376f]">
                  {deadline.title}
                </h3>
                {/* Active Status Chip with pulsing dot */}
                <span className="flex shrink-0 items-center gap-1.5 rounded bg-green-50 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-green-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></span>
                  Active
                </span>
              </div>

              <div className="mt-0.5 flex items-center justify-between">
                <p className="text-xs font-medium text-[#183a98]">
                  {deadline.course}
                </p>
                {deadline.type && (
                  <span className="text-[10px] font-semibold text-gray-400">
                    {deadline.type}
                  </span>
                )}
              </div>

              <div className="mt-1 flex items-center gap-1.5 text-xs font-bold text-green-600">
                <FiCalendar size={14} className="text-green-500" />
                <span>Due: {deadline.dueDate}</span>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-[#b7d6ee] py-8 text-center">
            <p className="text-sm font-semibold text-[#0e376f]">No active deadlines!</p>
            <p className="text-xs text-[#183a98]">You&apos;re all caught up.</p>
          </div>
        )}
      </div>
    </section>
  );
}