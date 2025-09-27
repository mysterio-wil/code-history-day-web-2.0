"use client"

import { useEffect, useState } from "react"

export function TerminalHeader() {
  const [currentTime, setCurrentTime] = useState("")
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(
        now.toLocaleString("es-ES", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      )
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    const cursorInterval = setInterval(() => setShowCursor((prev) => !prev), 500)

    return () => {
      clearInterval(interval)
      clearInterval(cursorInterval)
    }
  }, [])

  return (
    <header className="mb-8 border-b border-primary/30 pb-4 glass-terminal rounded-lg p-6 pulse-glow">
      <div className="modern-terminal-glow">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 typewriter">
          {"> PROGRAMMING_EPHEMERIS.SH"}
          {showCursor && <span className="terminal-cursor"></span>}
        </h1>
        <div className="text-sm text-muted-foreground mb-2">
          {"System: Terminal v2.1.0 | User: developer@localhost"}
        </div>
        <div className="text-sm text-accent">
          {"Current time: "}
          {currentTime}
        </div>
      </div>
    </header>
  )
}
