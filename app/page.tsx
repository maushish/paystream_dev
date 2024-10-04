// "use client";
// import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
// import Link from 'next/link';

// export default function TypewriterEffectSmoothDemo() {
//   const words = [
//     {
//       text: "No Need",
//       className: "text-white dark:text-white"
//     },
//     {
//       text: "for",
//       className: "text-white dark:text-white"
//     },
//     {
//       text: "Trust,",
//       className: "text-white dark:text-white"
//     },
//     {
//       text: "Just",
//       className: "text-white dark:text-white"
//     },
//     {
//       text: "PayStream.",
//       className: "text-blue-500 dark:text-blue-500",
//     },
//   ];

//   return (
//     <div className="flex flex-col bg-black items-center justify-center min-h-screen">
//       <p className="text-neutral-300 dark:text-neutral-200 text-xs sm:text-base">
//         Simplify Your Crypto Payments
//       </p>
//       <TypewriterEffectSmooth words={words} />
//       <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-8">
//         <Link href="/Forms">
//           <button className="w-40 h-10 rounded-xl bg-black border border-white text-white text-sm hover:bg-white hover:text-black">
//             Pay
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// }
"use client";
import React from "react";
import { WavyBackground } from "../components/ui/wavy-background";
import Link from "next/link";

export default function WavyBackgroundDemo() {
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40">
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        No need of trust, just Paystream
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
        Leveraging the power of streams to create a trustless payment system.
      </p>
      <div className="flex justify-center mt-8"> {/* Flexbox wrapper for centering */}
        <Link href="/Forms">
          <button className="w-40 h-10 rounded-xl bg-black border border-white text-white text-sm hover:bg-white hover:text-black">
            Pay
          </button>
        </Link>
      </div>
    </WavyBackground>
  );
}
