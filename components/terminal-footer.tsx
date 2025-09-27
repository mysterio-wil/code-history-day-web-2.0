"use client"

import type React from "react"

import { useState, useEffect } from "react"

export function TerminalFooter() {
  const [command, setCommand] = useState("")
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const cursorInterval = setInterval(() => setShowCursor((prev) => !prev), 500)
    return () => clearInterval(cursorInterval)
  }, [])

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      // Simular comandos de terminal
      if (command.toLowerCase() === "help") {
        alert(
          "Comandos disponibles:\n- help: Mostrar ayuda\n- clear: Limpiar pantalla\n- history: Ver historial\n- exit: Salir",
        )
      } else if (command.toLowerCase() === "clear") {
        window.location.reload()
      } else if (command.toLowerCase() === "history") {
        alert("Historial de comandos:\n1. consulta_efemeride.py\n2. " + command)
      }
      setCommand("")
    }
  }

  return (
    <footer className="border-t border-primary/30 pt-4 glass-terminal rounded-lg p-6 pulse-glow">
      <div className="modern-terminal-glow">
        <div className="text-sm text-muted-foreground mb-4">{"=".repeat(60)}</div>
        <div className="text-sm mb-2">{"Sistema: Programming Ephemeris Terminal v1.0"}</div>
        <div className="text-sm mb-2">{"Desarrollado con ❤️ para la comunidad de programadores"}</div>
        <div className="text-sm mb-4">{"Próxima actualización: Mañana a las 00:00 GMT"}</div>

        <div className="flex items-center text-sm">
          <span className="text-primary mr-2">developer@ephemeris:~$</span>
          <input
            type="text"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            onKeyPress={handleKeyPress}
            className="bg-transparent border-none outline-none text-foreground flex-1"
            placeholder="Escribe 'help' para ver comandos disponibles"
          />
          {showCursor && <span className="terminal-cursor"></span>}
        </div>

        <div className="text-xs text-muted-foreground mt-4">
          {"Tip: Usa CTRL+C para interrumpir procesos | CTRL+L para limpiar pantalla"}
        </div>
      </div>
    </footer>
  )
}
