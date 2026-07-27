import { getFullRoutine, getRoutine } from "@/lib/fetchers";
import { FiClock, FiMapPin, FiUser, FiCalendar } from "react-icons/fi";

// Helper array to guarantee chronological order
const WEEK_DAYS = [
  "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"
];

// Map a unique, ultra-light background color to each day for visual separation
const DAY_COLORS = {
  Saturday: "bg-slate-50",
  Sunday: "bg-sky-100",
  Monday: "bg-slate-50",
  Tuesday: "bg-sky-100",
  Wednesday: "bg-sky-100",
  Thursday: "bg-slate-50",
  Friday: "bg-emerald-50",
};

export default async function RoutinePage() {
  const fullRoutine = await getFullRoutine();

  // Group classes by day
  const groupedRoutine = fullRoutine.reduce((acc, curr) => {
    if (!acc[curr.day]) acc[curr.day] = [];
    acc[curr.day].push(curr);
    return acc;
  }, {});

  return (
    <main className="mx-auto mb-12 mt-28 flex w-[90%] flex-col md:mt-32">
      
     
      <div className="mb-6 border-b border-gray-200 pb-4">
        <h1 className="mb-1 text-xl font-bold tracking-tight text-[#100774] md:text-2xl">
          Weekly Routine
        </h1>
        <p className="text-xs font-medium text-gray-500">
          Your complete class schedule for Section 43-B.
        </p>
      </div>

    
      <div className="hidden overflow-hidden rounded-xl border border-gray-200 bg-white md:block">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-gray-200 bg-gray-100 text-[#0e376f]">
            <tr>
              <th className="px-4 py-3 font-semibold uppercase tracking-wider">Day</th>
              <th className="px-4 py-3 font-semibold uppercase tracking-wider">Time</th>
              <th className="px-4 py-3 font-semibold uppercase tracking-wider">Course</th>
              <th className="px-4 py-3 font-semibold uppercase tracking-wider">Room</th>
              <th className="px-4 py-3 font-semibold uppercase tracking-wider">Instructor</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/40">
            {WEEK_DAYS.map((day) => {
              const dayClasses = groupedRoutine[day];
              if (!dayClasses || dayClasses.length === 0) return null;

              return dayClasses.map((cls, index) => (
                <tr 
                  key={`${day}-${index}`} 
                  // Apply the specific day's light background color to the entire row
                  className={`transition-colors hover:brightness-95 ${DAY_COLORS[day]}`}
                >
                  {index === 0 && (
                    <td 
                      rowSpan={dayClasses.length} 
                      className="border-r border-white/60 px-4 py-3 align-top font-bold text-[#100774]"
                    >
                      {day}
                    </td>
                  )}
                  <td className="whitespace-nowrap px-4 py-3 font-semibold text-[#183a98]">
                    {cls.time}
                  </td>
                  <td className="px-4 py-3 font-medium text-[#0e376f]">
                    {cls.course}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-gray-600">
                    {cls.room}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 font-semibold text-gray-600">
                    {cls.teacher}
                  </td>
                </tr>
              ));
            })}
          </tbody>
        </table>
      </div>

      {/* ========================================= */}
      {/* MOBILE VIEW: Tiny, Compact Cards            */}
      {/* ========================================= */}
      <div className="flex flex-col gap-6 md:hidden">
        {WEEK_DAYS.map((day) => {
          const dayClasses = groupedRoutine[day];
          if (!dayClasses || dayClasses.length === 0) return null;

          return (
            <section key={day} className="flex flex-col gap-3">
              {/* Day Header */}
              <div className="flex items-center gap-1.5 border-b border-gray-200 pb-1">
                <FiCalendar className="text-[#183a98]" size={14} />
                <h2 className="text-sm font-bold text-[#100774]">{day}</h2>
              </div>

              {/* Little Cards Container */}
              <div className="flex flex-col gap-2">
                {dayClasses.map((cls, index) => (
                  <div 
                    key={index}
                    // Apply the matching day color to the card background
                    className={`flex flex-col rounded-lg border border-gray-200/60 p-2.5 ${DAY_COLORS[day]}`}
                  >
                    <h3 className="mb-1.5 text-xs font-semibold leading-snug text-[#0e376f]">
                      {cls.course}
                    </h3>
                    
                    {/* Compact Details Row */}
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[10px] font-medium text-gray-600">
                      <div className="flex items-center gap-1 text-[#183a98]">
                        <FiClock size={10} />
                        <span className="font-bold">{cls.time}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FiMapPin size={10} />
                        <span>{cls.room}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FiUser size={10} />
                        <span className="font-semibold text-[#100774]">{cls.teacher}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>

    </main>
  );
}