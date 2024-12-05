'use client'

import React, { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, DollarSign, Zap, BarChart3, Twitter, MessageCircle, Send } from 'lucide-react'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import placeholderLogo from './placeholder.svg';
import pythlogo from './pyth.png'
import instandnodeslogo from './instantnodes.png'

export default function PaystreamLanding() {
  const [isMobile, setIsMobile] = useState(false)
  const { scrollYProgress } = useScroll()
  const [currentStage, setCurrentStage] = useState("Q1 2025")

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const navbar = document.getElementById('navbar')
      if (navbar) {
        if (scrollPosition > 50) {
          navbar.classList.add('bg-white', 'bg-opacity-90')
          navbar.classList.add('text-black')
        } else {
          navbar.classList.remove('bg-white', 'bg-opacity-90')
          navbar.classList.remove('text-black')
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="min-h-screen bg-white text-black">
      <nav id="navbar" className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
            <Image 
  src={placeholderLogo}
  alt="Paystream Logo" 
  width={40} 
  height={40} 
  className="w-auto h-8" 
/>              <span className="text-2xl font-bold">Paystream</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="https://paystream-whitepaper.vercel.app/" className="text-gray-600 hover:text-black transition-colors">Whitepaper</a>
              <a href="https://maushish-guide.notion.site/Paystream-14fe89e3279f80c883f5e12574e00922" className="text-gray-600 hover:text-black transition-colors">Docs</a>
              {/* <a href="#" className="text-gray-600 hover:text-black transition-colors">Blog</a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors">Jobs</a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors">FAQ</a> */}
              <a 
                href="https://t.me/khoo07878"
                className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-all duration-300"
              >
                Join us
              </a>
            </div>
            <button className="md:hidden text-current">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        <div className="relative max-w-4xl mx-auto text-center py-32 px-4">
          {/* Flowing wave effect */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute w-[200%] h-full"
              animate={{
                x: ['-50%', '0%'],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                background: 'radial-gradient(circle at center, rgba(0,0,0,0.05) 0%, transparent 70%)',
              }}
            />
          </div>
          
          <p className="text-gray-600 mb-4 relative">Earn, Stream and Build on Paystream</p>
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 relative"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            The Most Secure
            <br />
            Payment Protocol
          </motion.h1>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-8 relative">
            <a 
              href="https://calendly.com/maushishbusiness/30min"
              target="_blank"
              rel="noopener noreferrer" 
              className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-all duration-300 text-lg font-semibold"
            >
              Book a Demo
            </a>
            <a 
              href="https://www.loom.com/share/a7c76d0ab39a4a91a7a48386719169e9"
              target="_blank"
              rel="noopener noreferrer" 
              className="bg-transparent border-2 border-black text-black px-6 py-3 rounded-full hover:bg-black hover:text-white transition-all duration-300 text-lg font-semibold"
            >
              Watch Early Build Demo
            </a>
          </div>
        </div>

        <motion.div 
          className="max-w-6xl mx-auto px-4 py-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">What is Paystream?</h2>
          <p className="text-gray-600 text-lg mb-12 text-center max-w-3xl mx-auto">
            PayStream provides secure and flexible payment streaming and lending APY optimizer solutions on the market-deployed lending protocols .
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-50 border-gray-200 h-full relative overflow-hidden group transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl font-bold text-black">
                    <DollarSign className="w-6 h-6 mr-2" />
                    Lending APY Optimizer
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Zap className="w-5 h-5 mr-2 text-gray-600 flex-shrink-0 mt-0.5" />
                      <span>P2P Matching: Directly connects borrowers and lenders to optimize rates</span>
                    </li>
                    <li className="flex items-start">
                      <Zap className="w-5 h-5 mr-2 text-gray-600 flex-shrink-0 mt-0.5" />
                      <span>Fallback to Liquidity Pools: Uses platforms like Kamino for unmatched requests</span>
                    </li>
                    <li className="flex items-start">
                      <Zap className="w-5 h-5 mr-2 text-gray-600 flex-shrink-0 mt-0.5" />
                      <span>Stream-Based Repayments: Borrowers repay loans through customizable payment streams</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-50 border-gray-200 h-full relative overflow-hidden group transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl font-bold text-black">
                    <BarChart3 className="w-6 h-6 mr-2" />
                    Payment Streaming
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Distribute funds over time based on pre-defined mathematical curves:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <ArrowDown className="w-5 h-5 mr-2 text-gray-600 flex-shrink-0 mt-0.5" />
                      <span>Linear: Steady rate over set duration</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowDown className="w-5 h-5 mr-2 text-gray-600 flex-shrink-0 mt-0.5" />
                      <span>Cliff: Starts after predefined delay</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowDown className="w-5 h-5 mr-2 text-gray-600 flex-shrink-0 mt-0.5" />
                      <span>Step-Wise: Regular intervals (weekly/monthly)</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowDown className="w-5 h-5 mr-2 text-gray-600 flex-shrink-0 mt-0.5" />
                      <span>Custom curves (0.5% fees vs 0.15% standard)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
        <div className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Partnered With</h2>
            <div className="flex flex-wrap justify-center items-center gap-12">
              <a href="https://www.pyth.network/" target="_blank" rel="noopener noreferrer" className="block">
              <Image 
  src={pythlogo}
  alt="Pyth Logo" 
  width={200} 
  height={100} 
  className="opacity-100 h-26 w-28 rounded-xl"
/>                   </a>
              <a href="https://instantnodes.io/" target="_blank" rel="noopener noreferrer" className="block">
                <Image 
  src={instandnodeslogo}
  alt="nodes Logo" 
  width={200} 
  height={200} 
  className="opacity-100 h-26 rounded-xl"/>      
              </a>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Roadmap</h2>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300" />
              <div className="space-y-24">
                {[
                  { quarter: "Q1 2025", items: ["Launch Paystream on Solana mainnet", "Introduce Paystream official token"] },
                  { quarter: "Q2 2025", items: ["Introduce Stream-rewards feature", "Introduce Streamlined-loans feature"] },
                  { quarter: "Q3 2025", items: ["Expand to additional blockchain networks", "Launch mobile app"] },
                  { quarter: "Q4 2025", items: ["Implement cross-chain streaming", "Introduce advanced analytics dashboard"] }
                ].map((milestone, index) => (
                  <motion.div
                    key={index}
                    className="relative pl-12"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className={`absolute left-0 top-0 w-8 h-8 rounded-full bg-black flex items-center justify-center z-10 ${currentStage === milestone.quarter ? 'ring-4 ring-gray-300 ring-opacity-50' : ''}`}
                      animate={{
                        scale: currentStage === milestone.quarter ? [1, 1.1, 1] : 1,
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    >
                      <div className="w-3 h-3 rounded-full bg-white" />
                    </motion.div>
                    <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                      <h3 className="text-2xl font-bold text-black mb-4">{milestone.quarter}</h3>
                      <ul className="list-disc list-inside text-gray-600 space-y-2">
                        {milestone.items.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>



      </main>

      <footer className="bg-black text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
            <Image 
  src={placeholderLogo}
  alt="Paystream Logo" 
  width={40} 
  height={40} 
  className="w-auto h-8" 
/>              <p className="text-sm text-gray-400">Secure and flexible payment streaming and lending APY optimizer solutions.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect with us</h3>
              <div className="flex space-x-6">
                <a href="https://twitter.com/paystream_" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="w-8 h-8" />
                </a>
                <a href="https://t.me/paystreamv0" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <Send className="w-8 h-8" />
                </a>
                {/* <a href="https://discord.gg/paystream" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <MessageCircle className="w-8 h-8" />
                </a> */}
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-400">&copy; 2024 Paystream. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

