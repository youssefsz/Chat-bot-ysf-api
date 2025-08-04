"use client"

import { motion } from "framer-motion"
import { Bot, User } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import ReactMarkdown from "react-markdown"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

interface ChatMessageProps {
  message: Message
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user"

  return (
    <motion.div
      initial={{ opacity: 0, x: isUser ? 20 : -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex gap-4 ${isUser ? "flex-row-reverse" : "flex-row"}`}
    >
      <Avatar
        className={`h-8 w-8 ${isUser ? "bg-[#00ffb6]/20 border border-[#00ffb6]/30" : "bg-[#78fcd6]/20 border border-[#78fcd6]/30"}`}
      >
        <AvatarFallback className={`bg-transparent ${isUser ? "text-[#00ffb6]" : "text-[#78fcd6]"}`}>
          {isUser ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
        </AvatarFallback>
      </Avatar>

      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.1 }}
        className={`max-w-[80%] ${isUser ? "text-right" : "text-left"}`}
      >
        <div
          className={`inline-block p-4 rounded-2xl backdrop-blur-sm transition-all duration-200 hover:shadow-lg ${
            isUser
              ? "bg-[#00ffb6]/10 border border-[#00ffb6]/20 text-[#e7eceb] rounded-br-md"
              : "bg-[#27272a]/40 border border-white/10 text-[#e7eceb] rounded-bl-md"
          }`}
        >
          {isUser ? (
            <p className="text-sm leading-relaxed">{message.content}</p>
          ) : (
            <div className="prose prose-invert prose-sm max-w-none">
              <ReactMarkdown
                components={{
                  p: ({ children }) => <p className="text-sm leading-relaxed mb-2 last:mb-0">{children}</p>,
                  code: ({ children }) => (
                    <code className="bg-[#0f1211]/50 text-[#78fcd6] px-1.5 py-0.5 rounded text-xs font-mono">
                      {children}
                    </code>
                  ),
                  pre: ({ children }) => (
                    <pre className="bg-[#0f1211]/50 p-3 rounded-lg overflow-x-auto text-xs font-mono border border-white/10">
                      {children}
                    </pre>
                  ),
                  ul: ({ children }) => <ul className="list-disc list-inside space-y-1 text-sm">{children}</ul>,
                  ol: ({ children }) => <ol className="list-decimal list-inside space-y-1 text-sm">{children}</ol>,
                  li: ({ children }) => <li className="text-sm">{children}</li>,
                  strong: ({ children }) => <strong className="text-[#78fcd6] font-semibold">{children}</strong>,
                  em: ({ children }) => <em className="text-[#00ffb6] italic">{children}</em>,
                }}
              >
                {message.content}
              </ReactMarkdown>
            </div>
          )}
        </div>
        <p className={`text-xs text-[#e7eceb]/50 mt-2 ${isUser ? "text-right" : "text-left"}`}>
          {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </p>
      </motion.div>
    </motion.div>
  )
}
