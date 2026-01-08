'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="contact" className="py-24 px-6 bg-gradient-primary text-white" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold">
            Ready to Transform Reading in Your School?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Join thousands of educators who trust Reading Horizons to deliver proven results
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl hover:bg-accent-green hover:text-white transition-all"
            >
              Request a Demo
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary transition-all"
            >
              Talk to an Expert
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
