import Link from "next/link";

export default function HeroBanner() {
  return (
    <section className="relative mx-auto mt-28 flex min-h-[25vh] w-[90%] flex-col items-center justify-center overflow-hidden rounded-xl bg-[#100774] md:mt-25">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/herobg.png')" }}
      >
        <div className="absolute inset-0 bg-[#100774]/50"></div>
      </div>

      <div className="relative z-10 flex w-full flex-col items-center px-4 py-6 text-center">
        <h1 className="mb-2 text-xl font-black tracking-tight text-[#fbffff] sm:text-2xl md:text-3xl lg:text-4xl">
          Welcome to Section 43-B
        </h1>
        <p className="mb-5 max-w-[90%] text-xs font-medium text-[#b7d6ee] sm:text-sm md:text-base">
          Your centralized hub for routines, deadlines, and course materials.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/courses"
            className="rounded-full bg-[#fbffff] px-5 py-2 text-xs font-bold text-[#100774] transition-transform duration-200 hover:scale-105 sm:px-6 sm:py-2.5 sm:text-sm"
          >
            View Courses
          </Link>
          <Link
            href="/routine"
            className="rounded-full border border-[#fbffff]/60 bg-[#fbffff]/10 px-5 py-2 text-xs font-bold text-[#fbffff] backdrop-blur-sm transition-transform duration-200 hover:scale-105 hover:bg-[#fbffff]/20 sm:px-6 sm:py-2.5 sm:text-sm"
          >
            Full Routine
          </Link>
        </div>
      </div>
    </section>
  );
}
