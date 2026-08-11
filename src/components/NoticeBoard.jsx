import Link from "next/link";
import { getActiveNotices } from "../lib/fetchers";
import { FiBell, FiArrowRight, FiCalendar } from "react-icons/fi";

export default async function NoticeBoard() {
  const notices = await getActiveNotices();
  
  
  const displayNotices = notices.slice(0, 4);

  return (
    <section className="flex h-full  flex-col rounded-2xl border border-gray-200 bg-gray-50 p-4 md:p-5">
     
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FiBell className="text-[#100774]" size={20} />
          <h2 className="text-lg font-bold text-[#100774]">
            Notice Board
          </h2>
        </div>
        <Link 
          href="/notices" 
          className="group flex items-center gap-1 text-xs font-semibold text-[#183a98] transition-colors hover:text-[#100774]"
        >
          View All 
          <FiArrowRight className="transition-transform duration-200 group-hover:translate-x-0.5" />
        </Link>
      </div>

   
      <div className="flex flex-col gap-3">
        {displayNotices.length > 0 ? (
          displayNotices.map((notice) => (
            <div 
              key={notice.id}
              className="group flex flex-col gap-1.5 rounded-xl border border-gray-200 bg-white p-3 transition-transform duration-200 hover:scale-[1.02] hover:border-gray-300"
            >
            
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-sm font-semibold leading-snug text-[#0e376f]">
                  {notice.title}
                </h3>
                {notice.priority === 'high' && (
                  <span className="shrink-0 rounded bg-green-50 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-green-500">
                    Active
                  </span>
                )}
              </div>

         
              <p className="line-clamp-2 text-xs font-medium text-gray-500">
                {notice.description}
              </p>

              <div className="mt-1 flex items-center gap-1.5 text-xs font-semibold text-gray-400">
                <FiCalendar size={14} />
                <span>{notice.date}</span>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-gray-300 py-8 text-center">
            <p className="text-sm font-semibold text-gray-500">No active notices right now.</p>
          </div>
        )}
      </div>
    </section>
  );
}