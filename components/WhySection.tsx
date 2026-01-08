'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const features = [
  {
    title: 'Data-Driven Direct Instruction',
    description:
      'Explicit, systematic phonics instruction backed by decades of research and proven results in diverse learning environments.',
    image: '/data-driven-direct-instruction.png',
  },
  {
    title: 'Interactive & Engaging Software',
    description:
      'Award-winning digital platform that makes learning to read fun and accessible for students of all ages and abilities.',
    image: '/interactive-engaging-software-300x169.png',
  },
  {
    title: 'Ongoing Professional Learning',
    description:
      'Comprehensive training and continuous support to ensure educators have the tools and confidence to succeed.',
    image: '/ongoing-professional-learning.png',
  },
]

export default function WhySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="why" className="py-24 px-6 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <span className="inline-block px-5 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold">
            The Reading Horizons <span className="text-gradient">Difference</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Research-backed methodology that delivers measurable results
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-primary hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all"
                >
                  Learn more
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    <path
                      d="M3 8h10m0 0L9 4m4 4l-4 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
