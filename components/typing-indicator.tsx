"use client"

import { motion } from "framer-motion"
import { Bot } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function TypingIndicator() {
  return (
    <div className="flex gap-4">
      <Avatar className="h-8 w-8 bg-[#78fcd6]/20 border border-[#78fcd6]/30">
        <AvatarFallback className="bg-transparent text-[#78fcd6]">
          <Bot className="h-4 w-4" />
        </AvatarFallback>
      </Avatar>

      <div className="bg-[#27272a]/40 border border-white/10 rounded-2xl rounded-bl-md p-4 backdrop-blur-sm">
        <div className="flex items-center gap-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-[#78fcd6] rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
