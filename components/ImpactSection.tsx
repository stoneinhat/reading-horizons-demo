'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const impacts = [
  {
    title: 'Successful Students',
    description:
      'Our research-based approach helps students achieve reading proficiency faster, building confidence and opening doors to academic success across all subjects.',
    image: '/successful-students.png',
    align: 'left' as const,
  },
  {
    title: 'Empowered Educators',
    description:
      'We provide teachers with proven methods, comprehensive resources, and ongoing support to become confident literacy leaders in their schools.',
    image: '/empowered-educators.png',
    align: 'right' as const,
  },
  {
    title: 'Thriving Communities',
    description:
      'When students learn to read, entire communities benefit. We\'re proud to contribute to stronger, more literate communities nationwide.',
    image: '/thriving-communities.png',
    align: 'left' as const,
  },
]

export default function ImpactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="impact" className="py-24 px-6 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 space-y-4"
        >
          <span className="inline-block px-5 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold uppercase tracking-wider">
            Our Impact
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold">
            Transforming <span className="text-gradient">Lives Through Literacy</span>
          </h2>
        </motion.div>

        {/* Impact Items */}
        <div className="space-y-24">
          {impacts.map((impact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: impact.align === 'left' ? -50 : 50 }}
              animate={
                isInView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: impact.align === 'left' ? -50 : 50 }
              }
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                impact.align === 'right' ? 'lg:grid-flow-dense' : ''
              }`}
            >
              {/* Image */}
              <div
                className={`relative rounded-3xl overflow-hidden shadow-2xl ${
                  impact.align === 'right' ? 'lg:col-start-2' : ''
                }`}
              >
                <Image
                  src={impact.image}
                  alt={impact.title}
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>

              {/* Content */}
              <div
                className={`space-y-6 ${
                  impact.align === 'right' ? 'lg:col-start-1 lg:row-start-1' : ''
                }`}
              >
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  {impact.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {impact.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
