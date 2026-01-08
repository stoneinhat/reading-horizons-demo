'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const programs = [
  {
    title: 'Discover Intensive Phonics',
    description:
      'Complete foundational reading instruction for K-3 students, building essential decoding and encoding skills.',
    image: '/1.png',
    features: [
      'Systematic phonics instruction',
      'Multi-sensory activities',
      'Progress monitoring tools',
    ],
  },
  {
    title: 'Elevate Reading Intervention',
    description:
      'Targeted intervention for grades 4-12 struggling readers, closing gaps with accelerated instruction.',
    image: '/2.png',
    features: [
      'Age-appropriate content',
      'Accelerated learning paths',
      'Real-time data tracking',
    ],
  },
  {
    title: 'Ascend Adult Literacy',
    description:
      'Dignified, effective reading instruction for adult learners in workforce and correctional settings.',
    image: '/3.png',
    features: [
      'Adult-focused curriculum',
      'Self-paced learning',
      'Career readiness integration',
    ],
  },
]

export default function ProgramsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="programs" className="py-24 px-6 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <span className="inline-block px-5 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold uppercase tracking-wider">
            Our Programs
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold">
            Solutions for Every <span className="text-gradient">Learning Stage</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive reading programs designed for K-12 and adult learners
          </p>
        </motion.div>

        {/* Program Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                isInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-primary hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden group">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">{program.title}</h3>
                <p className="text-gray-600 leading-relaxed">{program.description}</p>

                {/* Features List */}
                <ul className="space-y-2">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-primary flex items-center justify-center">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          className="text-white"
                        >
                          <path
                            d="M2 6l3 3 5-6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block mt-4 px-6 py-3 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-colors"
                >
                  Learn More
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
