import { format } from "date-fns";
import { getRoutineByDay } from "../lib/fetchers";
import { FiClock, FiMapPin, FiUser } from "react-icons/fi";

export default async function TodaysClass() {
 
  const todayString = format(new Date(), "EEEE");
  
  
  const classes = await getRoutineByDay(todayString);
//   console.log("Today's Classes:", classes);
//   console.log("Today is:", todayString);

  return (
    <section className="mx-auto mt-8 w-[90%]">
      <div className="mb-4 flex items-end justify-between">
        <h2 className="text-lg font-bold text-[#100774] md:text-xl">
          Today&apos;s Classes
        </h2>
        <span className="rounded-full bg-[#183a98]/10 px-2.5 py-0.5 text-xs font-semibold text-[#183a98]">
          {todayString}
        </span>
      </div>

      {classes.length > 0 ? (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {classes.map((cls, index) => (
            <div 
              key={index}
              className="relative flex flex-col gap-2 overflow-hidden rounded-xl border border-[#b7d6ee]/40 bg-gradient-to-br from-[#fbffff] to-[#b7d6ee]/5 p-3 pl-4 transition-transform duration-200 hover:scale-[1.02]"
            >
              {/* Left Accent Color Bar - Thinner */}
              <div className="absolute bottom-0 left-0 top-0 w-1 bg-gradient-to-b from-[#183a98] to-[#100774]"></div>

              {/* Course Title - Less Bold, Smaller */}
              <h3 className="text-sm font-semibold leading-snug text-[#0e376f]">
                {cls.course}
              </h3>

              {/* Subtle Divider */}
              <hr className="my-0.5 border-[#b7d6ee]/30" />

              {/* Class Details - Minimal layout */}
              <div className="mt-auto flex flex-col gap-2 text-xs font-medium text-[#0e376f]">
                {/* Time */}
                <div className="flex items-center gap-2">
                  <FiClock className="text-[#183a98]" size={14} />
                  <span>{cls.time}</span>
                </div>
                
                {/* Room and Teacher */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <FiMapPin className="text-[#183a98]" size={14} />
                    <span>{cls.room}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#183a98]">
                    <FiUser size={14} />
                    <span className="font-semibold">{cls.teacher}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // Minimal Empty State
        <div className="flex flex-col items-center justify-center rounded-xl border border-[#b7d6ee]/30 bg-[#fbffff]/50 py-6 text-center">
          <FiClock className="mb-2 text-[#189832]" size={24} />
          <p className="text-sm font-semibold text-[#08af53]">No classes today!</p>
          <p className="text-xs font-medium text-[#565203]">Enjoy your day off....</p>
        </div>
      )}
    </section>
  );
}