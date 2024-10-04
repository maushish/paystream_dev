"use client";
import Link from "next/link";
import { HoverEffect } from "../../components/ui/card-hover-effect";

export default function CardHoverEffectDemo() {
  return (

    <div className="min-h-screen w-full bg-black flex flex-col justify-center items-center">
<h1 className="text-white text-4xl font-bold">
  Choose a <span className="text-blue-500">Stream</span>
</h1>
      <div className="max-w-5xl px-8">
        <HoverEffect items={projects}  /> 
      </div>
    </div>
  );
}

export const projects = [
  {
    title: "Linear Stream",
    description:
      "Stream suitable for every client and every project. It is a stream that is linear and has a constant flow.",
    link: "/Linear", // Store link as a string
  },
  {
    title: "Cliff Stream",
    description: "Stream suitable for clients that dont wanna take risk in early stages but are willing to give constant payouts after cliff period.",
    link: "/",
  },
  {
    title: "Step-wise Stream",
    description:"Stream suitable for contractors that will be paid on weekly/monthly basis for some duration",
    link: "/Stepwise",
  },
];
