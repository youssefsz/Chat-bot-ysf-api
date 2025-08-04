"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { CheckCircle, XCircle, Loader2 } from "lucide-react"

interface HealthStatus {
  status: "healthy" | "unhealthy" | "checking"
  timestamp?: string
  environment?: string
  version?: string
}

export function HealthCheck() {
  const [health, setHealth] = useState<HealthStatus>({ status: "checking" })

  useEffect(() => {
    const checkHealth = async () => {
      try {
        const response = await fetch("https://python-test-server-uld3.onrender.com/health")
        if (response.ok) {
          const data = await response.json()
          setHealth({
            status: "healthy",
            timestamp: data.timestamp,
            environment: data.environment,
            version: data.version,
          })
        } else {
          setHealth({ status: "unhealthy" })
        }
      } catch (error) {
        console.error("Health check failed:", error)
        setHealth({ status: "unhealthy" })
      }
    }

    checkHealth()
    const interval = setInterval(checkHealth, 30000) // Check every 30 seconds

    return () => clearInterval(interval)
  }, [])

  const getStatusIcon = () => {
    switch (health.status) {
      case "healthy":
        return <CheckCircle className="h-4 w-4 text-[#78fcd6]" />
      case "unhealthy":
        return <XCircle className="h-4 w-4 text-red-400" />
      case "checking":
        return <Loader2 className="h-4 w-4 text-[#e7eceb]/50 animate-spin" />
    }
  }

  const getStatusText = () => {
    switch (health.status) {
      case "healthy":
        return "API Online"
      case "unhealthy":
        return "API Offline"
      case "checking":
        return "Checking..."
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex items-center gap-2 text-xs text-[#e7eceb]/70"
    >
      {getStatusIcon()}
      <span>{getStatusText()}</span>
      {health.version && <span className="text-[#e7eceb]/50">v{health.version}</span>}
    </motion.div>
  )
}
