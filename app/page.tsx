import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import WhySection from '@/components/WhySection'
import ProgramsSection from '@/components/ProgramsSection'
import ImpactSection from '@/components/ImpactSection'
import ResourcesSection from '@/components/ResourcesSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <WhySection />
        <ProgramsSection />
        <ImpactSection />
        <ResourcesSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
