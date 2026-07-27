import { getCourses } from "@/lib/fetchers";
import CourseCard from "@/components/CourseCard";

export default async function CoursesPage() {
  const courses = await getCourses();

  return (
    <main className="mx-auto mb-12 mt-28 flex w-[90%] flex-col md:mt-32">
      
      {/* Simple Header */}
      <h1 className="mb-6 text-2xl font-black tracking-tight text-[#100774] md:text-3xl">
        Courses
      </h1>

      {/* 4-Column Course Grid */}
      {courses.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        /* Minimal Empty State */
        <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-[#b7d6ee]/50 bg-[#fbffff]/50 py-16 text-center">
          <p className="text-lg font-bold text-[#100774]">No courses found.</p>
        </div>
      )}
      
    </main>
  );
}