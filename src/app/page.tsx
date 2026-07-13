import { config } from '@/content'
import NavBar from '@/components/NavBar'

export default async function HomePage() {
  return (
    <>
      <NavBar config={config} />
      <main className="pt-20 px-8">
        <p className="font-mono text-sm text-ink-3">Building in progress…</p>
      </main>
    </>
  )
}