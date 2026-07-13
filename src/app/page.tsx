import { config } from '@/content'
import NavBar from '@/components/NavBar'
import HeroSection from '@/components/HeroSection'

export default async function HomePage() {
  return (
    <>
      <NavBar config={config} />
      <main>
        <HeroSection config={config} />
      </main>
    </>
  )
}