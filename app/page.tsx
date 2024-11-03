// "use client";
// import React from "react";
// import { WavyBackground } from "../components/ui/wavy-background";
// import Link from "next/link";

// export default function WavyBackgroundDemo() {
//   return (
//     <WavyBackground className="max-w-4xl mx-auto pb-40">
//       <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
//         No need of trust, just Paystream
//       </p>
//       <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
//         Leveraging the power of streams to create a trustless payment system.
//       </p>
//       <div className="flex justify-center mt-8"> {/* Flexbox wrapper for centering */}
//         <Link href="/Forms">
//           <button className="w-40 h-10 rounded-xl bg-black border border-white text-white text-sm hover:bg-white hover:text-black">
//             Pay
//           </button>
//         </Link>
//       </div>
//       <div className="text-red-600 flex  justify-center">under development - maushish :) </div>
//     </WavyBackground>
    
//   );
// }
'use client'

import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { CircleDollarSign, ArrowDown } from 'lucide-react'

export default function PaystreamLanding() {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const navbar = document.getElementById('navbar')
      if (navbar) {
        if (scrollPosition > 50) {
          navbar.classList.add('bg-purple-100', 'bg-opacity-90')
        } else {
          navbar.classList.remove('bg-purple-100', 'bg-opacity-90')
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white text-purple-900">
      <nav id="navbar" className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-purple-700 text-2xl font-bold">Paystream</div>
            <Link href="/whitepaper">
              <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-all duration-300">
                Whitepaper
              </button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        <div className="max-w-4xl mx-auto text-center py-20">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl text-purple-700 font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            No need for trust, just Paystream
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-purple-600 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Leveraging the power of streams to create a trustless payment system.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link href="/pay">
              <button className="bg-purple-600 text-white text-xl font-semibold px-8 py-4 rounded-full hover:bg-purple-700 transition-all duration-300">
                Pay Now
              </button>
            </Link>
          </motion.div>
        </div>

        <div ref={targetRef} className="py-20">
          <motion.div style={{ opacity, scale }} className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-5xl text-purple-700 font-bold mb-12 text-center">What is Paystream?</h2>
            <div className="relative h-96">
              <div className="absolute left-[15%] top-1/2 transform -translate-y-1/2 bg-purple-200 rounded-full p-4 z-10">
                <span className="text-purple-800 font-bold">Client</span>
              </div>
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-100 rounded-lg p-4 w-64 flex flex-col items-center z-10">
                <span className="text-purple-800 font-bold mb-2">Paystream</span>
                <ArrowDown className="text-purple-600 mb-2" size={24} />
                <div className="border-2 border-purple-300 rounded p-2">
                  <div className="flex flex-col items-start space-y-1 text-sm">
                    <span className="text-purple-700">Linear</span>
                    <span className="text-purple-700">Cliff</span>
                    <span className="text-purple-700">Step-wise</span>
                  </div>
                </div>
              </div>
              <div className="absolute right-[8%] top-1/2 transform -translate-y-1/2 bg-purple-200 rounded-full p-4 z-10">
                <span className="text-purple-800 font-bold">Service Provider</span>
              </div>
              <svg className="absolute top-1/2 left-0 right-0 -translate-y-1/2" width="100%" height="2">
                <line x1="15%" y1="0" x2="85%" y2="0" stroke="#9F7AEA" strokeWidth="2" strokeDasharray="5,5" />
              </svg>
              <motion.div
                className="absolute top-1/2 transform -translate-y-1/2 z-20"
                initial={{ left: '25%' }}
                animate={{ left: '31%' }}
                transition={{ duration: 3, repeat: Infinity, repeatType: 'loop' }}
              >
                
                <CircleDollarSign className="text-purple-500" size={24} />
              </motion.div>
              <motion.div
                className="absolute top-1/2 transform -translate-y-1/2  z-20"
                initial={{ left: '65%' }}
                animate={{ left: '70%' }}
                transition={{ duration: 3, repeat: Infinity, repeatType: 'loop' }}
              >
                
                <CircleDollarSign className="text-purple-500" size={24} />
              </motion.div>
            </div>
            <p className="text-purple-700 text-lg mt-12 text-center">
              Paystream revolutionizes payments by creating a trustless system where funds flow seamlessly from clients to
              service providers, ensuring fair and timely compensation for work completed.
            </p>
          </motion.div>
        </div>
      </main>

      <footer className="bg-purple-100 py-8 text-center">
        <p className="text-purple-700">&copy; 2024 Paystream. All rights reserved.</p>
        <p className="text-sm mt-2 text-purple-600">Under development - maushish :)</p>
      </footer>
    </div>
  )
}