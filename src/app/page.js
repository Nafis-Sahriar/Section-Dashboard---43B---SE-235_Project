import HeroBanner from "@/components/HeroBanner";
import TodaysClass from "@/components/TodaysClass";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
        <HeroBanner></HeroBanner>
        <TodaysClass></TodaysClass>
    </div>
  );
}
