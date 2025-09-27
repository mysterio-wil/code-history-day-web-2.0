import { TerminalHeader } from "@/components/terminal-header"
import { EphemerisDisplay } from "@/components/ephemeris-display"
import { TerminalFooter } from "@/components/terminal-footer"

export default function HomePage() {
  return (
    <main className="min-h-screen animated-gradient-bg text-foreground p-4 md:p-8 relative overflow-hidden">
      {/* Floating blur orbs for modern effect */}
      <div className="blur-orb blur-orb-1"></div>
      <div className="blur-orb blur-orb-2"></div>
      <div className="blur-orb blur-orb-3"></div>

      {/* Main content with glass morphism */}
      <div className="max-w-4xl mx-auto relative z-10">
        <TerminalHeader />
        <EphemerisDisplay />
        <TerminalFooter />
      </div>
    </main>
  )
}
