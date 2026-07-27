import HeroBanner from "@/components/HeroBanner";
import TodaysClass from "@/components/TodaysClass";
import DeadlineTracker from "@/components/DeadLineTracker";
import NoticeBoard from "@/components/NoticeBoard";

export default function Home() {
  return (
    <main className="mb-12 flex flex-col gap-8">
        <HeroBanner />
        <TodaysClass />
        
        {/* CSS Grid ensures they are exactly equal width and height on PC */}
        <div className="mx-auto grid w-[90%] grid-cols-1 gap-4 md:grid-cols-2">
            <DeadlineTracker />
            <NoticeBoard />
        </div>
    </main>
  );
}