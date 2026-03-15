import HeroSection from '@/components/home/HeroSection'
import FeaturedProperties from '@/components/home/FeaturedProperties'
import ServicesOverview from '@/components/home/ServicesOverview'
import Statistics from '@/components/home/Statistics'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProperties />
      <ServicesOverview />
      <Statistics />
    </>
  )
}
