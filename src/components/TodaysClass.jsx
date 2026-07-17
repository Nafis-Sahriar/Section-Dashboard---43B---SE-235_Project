import { format } from "date-fns";
import { getRoutineByDay } from "../lib/fetchers";
import { FiClock, FiMapPin, FiUser } from "react-icons/fi";

export default async function TodaysClass() 
{
 
  const todayString = format(new Date(), "EEEE");
//   const todayString = 'Wednesday';
//   console.log(`Fetching classes for: ${todayString}`); 
  
  
  const classes = await getRoutineByDay(todayString);

  return (
    <section className="mx-auto mt-8 w-[90%]">
      <div className="mb-4 flex items-end justify-between">
        <h2 className="text-xl font-bold text-[#100774] md:text-2xl">
          Today&apos;s Classes
        </h2>
        <span className="text-sm font-semibold text-[#183a98]">
          {todayString}
        </span>
      </div>

      {classes.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {classes.map((cls, index) => (
            <div 
              key={index}
              className="flex flex-col gap-3 rounded-2xl border border-[#b7d6ee]/50 bg-[#fbffff] p-5 transition-transform duration-200 hover:scale-[1.02] hover:border-[#183a98]/30"
            >
              
              <h3 className="font-bold leading-snug text-[#0e376f]">
                {cls.course}
              </h3>

          
              <div className="mt-auto flex flex-col gap-2 text-sm font-medium text-[#183a98]">
                <div className="flex items-center gap-2">
                  <FiClock className="text-[#b7d6ee]" size={16} />
                  <span>{cls.time}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FiMapPin className="text-[#b7d6ee]" size={16} />
                    <span>Room: {cls.room}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiUser className="text-[#b7d6ee]" size={16} />
                    <span>{cls.teacher}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        
        <div className="flex flex-col items-center justify-center rounded-2xl border border-[#b7d6ee]/30 bg-[#fbffff]/50 p-8 text-center">
          <p className="text-lg font-semibold text-[#183a98]">No classes today!</p>
          <p className="text-sm text-[#0e376f]">Enjoy your day off !</p>
        </div>
      )}
      
    </section>
  );
}