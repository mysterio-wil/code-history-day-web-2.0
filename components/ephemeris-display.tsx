"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"

interface Ephemeris {
  date: string
  year: number
  title: string
  description: string
  category: string
  impact: "low" | "medium" | "high"
}

// Base de datos de efemérides de programación
const ephemerisDatabase: Ephemeris[] = [
  {
    date: "1945-02-14",
    year: 1945,
    title: "ENIAC - Primera computadora electrónica",
    description:
      "Se presenta públicamente ENIAC (Electronic Numerical Integrator and Computer), considerada la primera computadora electrónica de propósito general. Pesaba 30 toneladas y ocupaba 167 m².",
    category: "HARDWARE",
    impact: "high",
  },
  {
    date: "1957-10-04",
    year: 1957,
    title: "Lanzamiento del Sputnik 1",
    description:
      "La Unión Soviética lanza el primer satélite artificial, marcando el inicio de la era espacial y acelerando el desarrollo de tecnologías de computación.",
    category: "SPACE_TECH",
    impact: "high",
  },
  {
    date: "1969-10-29",
    year: 1969,
    title: "Primer mensaje ARPANET",
    description:
      'Se envía el primer mensaje a través de ARPANET entre UCLA y Stanford. El mensaje era "LO" (intento fallido de escribir "LOGIN"). Nacimiento de Internet.',
    category: "NETWORKING",
    impact: "high",
  },
  {
    date: "1971-03-15",
    year: 1971,
    title: "Primer microprocesador Intel 4004",
    description:
      "Intel lanza el 4004, el primer microprocesador comercial del mundo. Contenía 2,300 transistores y operaba a 740 kHz.",
    category: "HARDWARE",
    impact: "high",
  },
  {
    date: "1972-01-01",
    year: 1972,
    title: "Lenguaje C - Dennis Ritchie",
    description:
      "Dennis Ritchie en Bell Labs completa el desarrollo del lenguaje de programación C, que se convertiría en uno de los más influyentes de la historia.",
    category: "LANGUAGES",
    impact: "high",
  },
  {
    date: "1975-04-04",
    year: 1975,
    title: "Fundación de Microsoft",
    description:
      "Bill Gates y Paul Allen fundan Microsoft. Su primer producto fue un intérprete de BASIC para el Altair 8800.",
    category: "COMPANIES",
    impact: "high",
  },
  {
    date: "1976-04-01",
    year: 1976,
    title: "Fundación de Apple",
    description:
      "Steve Jobs, Steve Wozniak y Ronald Wayne fundan Apple Computer Company en el garaje de Jobs en Los Altos, California.",
    category: "COMPANIES",
    impact: "high",
  },
  {
    date: "1981-08-12",
    year: 1981,
    title: "IBM PC - Revolución personal",
    description:
      "IBM lanza su primera computadora personal, estableciendo el estándar para PCs compatibles y democratizando la computación.",
    category: "HARDWARE",
    impact: "high",
  },
  {
    date: "1989-03-12",
    year: 1989,
    title: "World Wide Web - Tim Berners-Lee",
    description:
      "Tim Berners-Lee propone el sistema World Wide Web en el CERN, revolucionando la forma en que compartimos información.",
    category: "WEB",
    impact: "high",
  },
  {
    date: "1991-08-25",
    year: 1991,
    title: "Linus Torvalds anuncia Linux",
    description:
      "Linus Torvalds anuncia en comp.os.minix el desarrollo de un sistema operativo libre que cambiaría el mundo del software.",
    category: "OS",
    impact: "high",
  },
  {
    date: "1995-05-23",
    year: 1995,
    title: "JavaScript - Brendan Eich",
    description:
      "Brendan Eich crea JavaScript en solo 10 días en Netscape. Se convertiría en el lenguaje de programación más usado del mundo.",
    category: "LANGUAGES",
    impact: "high",
  },
  {
    date: "1998-09-04",
    year: 1998,
    title: "Fundación de Google",
    description:
      "Larry Page y Sergey Brin fundan Google, revolucionando la búsqueda en Internet y el procesamiento de big data.",
    category: "COMPANIES",
    impact: "high",
  },
  {
    date: "2004-02-04",
    year: 2004,
    title: "Lanzamiento de Facebook",
    description:
      'Mark Zuckerberg lanza "The Facebook" desde su dormitorio en Harvard, iniciando la era de las redes sociales modernas.',
    category: "SOCIAL",
    impact: "high",
  },
  {
    date: "2007-01-09",
    year: 2007,
    title: "Steve Jobs presenta el iPhone",
    description:
      "Apple presenta el iPhone, redefiniendo los smartphones y creando el ecosistema de apps móviles que conocemos hoy.",
    category: "MOBILE",
    impact: "high",
  },
  {
    date: "2008-09-02",
    year: 2008,
    title: "Google Chrome - Navegador web",
    description:
      "Google lanza Chrome, que se convertiría en el navegador web más usado del mundo gracias a su velocidad y simplicidad.",
    category: "WEB",
    impact: "medium",
  },
]

export function EphemerisDisplay() {
  const [todayEphemeris, setTodayEphemeris] = useState<Ephemeris | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [displayText, setDisplayText] = useState("")
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    // Simular carga de datos
    setTimeout(() => {
      const today = new Date()
      const todayMonthDay = `${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`

      // Busca la efeméride comparando solo el mes y el día (MM-DD)
      let ephemeris = ephemerisDatabase.find((e) => e.date.substring(5) === todayMonthDay)

      // Si no hay efeméride para hoy, usar una aleatoria
      if (!ephemeris) {
        const randomIndex = Math.floor(Math.random() * ephemerisDatabase.length)
        ephemeris = ephemerisDatabase[randomIndex]
      }

      setTodayEphemeris(ephemeris)
      setIsLoading(false)
    }, 1500)

    // Cursor blinking
    const cursorInterval = setInterval(() => setShowCursor((prev) => !prev), 500)
    return () => clearInterval(cursorInterval)
  }, [])

  useEffect(() => {
    if (!todayEphemeris || isLoading) return

    const fullText = `> Ejecutando consulta_efemeride.py...\n> Conectando a base_datos_historia_programacion...\n> [OK] Conexión establecida\n> Buscando eventos para ${new Date().toLocaleDateString("es-ES")}...\n> [ENCONTRADO] Evento histórico relevante\n\n=== EFEMÉRIDE DE PROGRAMACIÓN ===\n\nFECHA: ${new Date(todayEphemeris.date).toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}\nCATEGORÍA: ${todayEphemeris.category}\nIMPACTO: ${todayEphemeris.impact.toUpperCase()}\n\nTÍTULO: ${todayEphemeris.title}\n\nDESCRIPCIÓN:\n${todayEphemeris.description}\n\n> Consulta completada exitosamente\n> Presiona CTRL+C para salir`

    let index = 0
    const typeInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(typeInterval)
      }
    }, 30)

    return () => clearInterval(typeInterval)
  }, [todayEphemeris, isLoading])

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "high":
        return "text-red-400"
      case "medium":
        return "text-yellow-400"
      case "low":
        return "text-green-400"
      default:
        return "text-foreground"
    }
  }

  const getCategoryIcon = (category: string) => {
    const icons: Record<string, string> = {
      HARDWARE: "🔧",
      SOFTWARE: "💾",
      LANGUAGES: "📝",
      WEB: "🌐",
      MOBILE: "📱",
      COMPANIES: "🏢",
      OS: "⚙️",
      NETWORKING: "🔗",
      SOCIAL: "👥",
      SPACE_TECH: "🚀",
    }
    return icons[category] || "💻"
  }

  if (isLoading) {
    return (
      <div className="mb-8">
        <Card className="glass-terminal border-primary/30 p-6 pulse-glow">
          <div className="modern-terminal-glow">
            <div className="text-sm mb-4">
              {"> Inicializando sistema..."}
              <span className="terminal-cursor"></span>
            </div>
            <div className="text-sm mb-2">{"> Cargando módulos de historia..."}</div>
            <div className="text-sm mb-2">{"> Sincronizando base de datos..."}</div>
            <div className="text-sm text-accent">{"> [████████████████████████████████] 100%"}</div>
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div className="mb-8">
      <Card className="glass-terminal border-primary/30 p-6 pulse-glow">
        <div className="modern-terminal-glow">
          <pre className="text-sm whitespace-pre-wrap font-mono leading-relaxed">
            {displayText}
            {showCursor && <span className="terminal-cursor"></span>}
          </pre>
        </div>
      </Card>

      {todayEphemeris && !isLoading && (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="glass-terminal border-accent/30 p-4">
            <div className="text-center modern-terminal-glow">
              <div className="text-2xl mb-2">{getCategoryIcon(todayEphemeris.category)}</div>
              <div className="text-sm text-muted-foreground">CATEGORÍA</div>
              <div className="text-accent font-bold">{todayEphemeris.category}</div>
            </div>
          </Card>

          <Card className="glass-terminal border-accent/30 p-4">
            <div className="text-center modern-terminal-glow">
              <div className="text-2xl mb-2">📅</div>
              <div className="text-sm text-muted-foreground">AÑO</div>
              <div className="text-primary font-bold">{todayEphemeris.year}</div>
            </div>
          </Card>

          <Card className="glass-terminal border-accent/30 p-4">
            <div className="text-center modern-terminal-glow">
              <div className="text-2xl mb-2">⚡</div>
              <div className="text-sm text-muted-foreground">IMPACTO</div>
              <div className={`font-bold ${getImpactColor(todayEphemeris.impact)}`}>
                {todayEphemeris.impact.toUpperCase()}
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}
