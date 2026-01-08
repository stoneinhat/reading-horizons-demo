'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const resources = [
  {
    title: 'Research & Whitepapers',
    description: 'Dive into the science behind our methodology',
    icon: 'book',
  },
  {
    title: 'Webinars & Events',
    description: 'Join us for live training and Q&A sessions',
    icon: 'video',
  },
  {
    title: "Buyer's Guide",
    description: 'Everything you need to choose the right program',
    image: '/Buyer-Guide-Image.png',
  },
  {
    title: 'Success Stories',
    description: 'Real results from educators and students',
    icon: 'document',
  },
]

export default function ResourcesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const renderIcon = (type: string) => {
    switch (type) {
      case 'book':
        return (
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )
      case 'video':
        return (
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )
      case 'document':
        return (
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )
    }
  }

  return (
    <section id="resources" className="py-24 px-6 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <span className="inline-block px-5 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold uppercase tracking-wider">
            Resources
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold">
            Explore Our <span className="text-gradient">Learning Library</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Free resources to support your literacy journey
          </p>
        </motion.div>

        {/* Resource Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, rotateY: -20 }}
              animate={
                isInView
                  ? { opacity: 1, rotateY: 0 }
                  : { opacity: 0, rotateY: -20 }
              }
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white p-8 rounded-2xl text-center border border-gray-200 hover:border-primary hover:shadow-xl transition-all duration-300 space-y-4"
            >
              {/* Icon or Image */}
              <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-hero flex items-center justify-center text-primary">
                {resource.image ? (
                  <Image
                    src={resource.image}
                    alt={resource.title}
                    width={80}
                    height={80}
                    className="rounded-2xl object-cover"
                  />
                ) : (
                  renderIcon(resource.icon!)
                )}
              </div>

              <h3 className="text-xl font-bold text-gray-900">{resource.title}</h3>
              <p className="text-gray-600">{resource.description}</p>

              <a
                href="#"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all"
              >
                Learn More
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8h10m0 0L9 4m4 4l-4 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
