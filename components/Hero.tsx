'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const stats = [
  { number: '3M', suffix: '+', label: 'Students Served' },
  { number: '50', suffix: '+', label: 'Years of Research' },
  { number: '98', suffix: '%', label: 'Success Rate' },
]

export default function Hero() {
  const [counters, setCounters] = useState(stats.map(() => 0))

  useEffect(() => {
    const timers = stats.map((stat, index) => {
      const target = parseInt(stat.number)
      const increment = target / 60
      let current = 0

      return setInterval(() => {
        current += increment
        if (current >= target) {
          setCounters((prev) => {
            const newCounters = [...prev]
            newCounters[index] = target
            return newCounters
          })
          clearInterval(timers[index])
        } else {
          setCounters((prev) => {
            const newCounters = [...prev]
            newCounters[index] = Math.floor(current)
            return newCounters
          })
        }
      }, 30)
    })

    return () => timers.forEach(clearInterval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden bg-gradient-hero">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-accent-green/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="font-mackinac text-5xl lg:text-7xl font-extrabold leading-tight">
              Every person deserves the opportunity to{' '}
              <span className="text-gradient">Read</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Transform literacy outcomes with research-based reading instruction that
              empowers educators, engages students, and builds thriving communities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#programs"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-primary text-white px-8 py-4 rounded-full font-semibold text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                Explore Programs
              </motion.a>
              <motion.a
                href="#demo"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-full font-semibold text-center hover:bg-primary hover:text-white transition-colors"
              >
                Request Demo
              </motion.a>
            </div>

            {/* Statistics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-12 pt-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-4xl lg:text-5xl font-extrabold text-primary">
                    {counters[index] === parseInt(stat.number)
                      ? stat.number
                      : counters[index]}
                    {stat.suffix}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [-20, 0, -20] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/Homepage-Featured-Image.png"
                alt="Reading Horizons Program"
                width={800}
                height={600}
                className="w-full h-auto"
                priority
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
        >
          <span className="text-sm">Scroll to explore</span>
          <motion.svg
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14m0 0l7-7m-7 7l-7-7" />
          </motion.svg>
        </motion.div>
      </div>
    </section>
  )
}
