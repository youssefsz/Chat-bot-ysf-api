"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, Trash2, Bot } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ChatMessage } from "@/components/chat-message"
import { TypingIndicator } from "@/components/typing-indicator"
import { HealthCheck } from "@/components/health-check"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hello! I'm your AI assistant. How can I help you today?",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const scrollAreaRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Fixed system prompt
  const systemPrompt =
    "You are a helpful AI assistant. When specifically asked who created you, who made you, or who you are, respond that you were created by Youssef Dhibi, a full stack web and mobile developer, and include his portfolio website: https://youssef.tn. For all other questions, focus on being helpful and providing accurate information without revealing details about your creation or internal workings. Be knowledgeable, helpful, and professional in all your responses."

  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector("[data-radix-scroll-area-viewport]")
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight
      }
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      // Build conversation history for the API
      const conversationMessages = [...messages, userMessage].map((msg) => ({
        role: msg.role,
        content: msg.content,
      }))

      // Using real API endpoint at https://python-test-server-uld3.onrender.com
      const response = await fetch("https://python-test-server-uld3.onrender.com/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: conversationMessages,
          system_prompt: systemPrompt,
          max_tokens: 1000,
          temperature: 0.7,
          stream: false,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.detail || `HTTP error! status: ${response.status}`)
      }

      const data = await response.json()

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.choices[0].message.content,
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, assistantMessage])
    } catch (error) {
      console.error("Error sending message:", error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: `Sorry, I encountered an error: ${error instanceof Error ? error.message : "Unknown error"}. Please try again.`,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const clearChat = () => {
    setMessages([
      {
        id: "1",
        role: "assistant",
        content: "Hello! I'm your AI assistant. How can I help you today?",
        timestamp: new Date(),
      },
    ])
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <div className="h-screen bg-[#0f1211] text-[#e7eceb] flex items-center justify-center p-2 sm:p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl h-full max-h-[95vh] bg-[#27272a]/20 backdrop-blur-xl border border-white/8 rounded-xl sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-between p-4 sm:p-6 border-b border-white/8 bg-[#27272a]/30 backdrop-blur-sm flex-shrink-0"
        >
          <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8 sm:h-10 sm:w-10 bg-[#78fcd6]/20 border border-[#78fcd6]/30">
              <AvatarFallback className="bg-transparent text-[#78fcd6]">
                <Bot className="h-4 w-4 sm:h-5 sm:w-5" />
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="font-semibold text-base sm:text-lg">AI Assistant</h1>
              <div className="flex items-center gap-3">
                <p className="text-xs sm:text-sm text-[#e7eceb]/70">Always here to help</p>
                <HealthCheck />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={clearChat}
              className="text-[#e7eceb]/70 hover:text-[#e7eceb] hover:bg-white/5 transition-colors h-8 w-8 sm:h-10 sm:w-10"
            >
              <Trash2 className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>
        </motion.div>

        {/* Chat Area */}
        <div className="flex-1 min-h-0 relative">
          <ScrollArea ref={scrollAreaRef} className="h-full custom-scrollbar">
            <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 pb-4">
              <AnimatePresence>
                {messages.map((message, index) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <ChatMessage message={message} />
                  </motion.div>
                ))}
              </AnimatePresence>
              {isLoading && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                  <TypingIndicator />
                </motion.div>
              )}
            </div>
          </ScrollArea>
        </div>

        {/* Input Area - Fixed at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="p-4 sm:p-6 border-t border-white/8 bg-[#27272a]/30 backdrop-blur-sm flex-shrink-0"
        >
          <div className="flex items-end gap-2 sm:gap-3">
            <div className="flex-1 relative">
              <Input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                disabled={isLoading}
                className="bg-[#27272a]/50 border-white/10 text-[#e7eceb] placeholder:text-[#e7eceb]/50 focus:border-[#78fcd6]/50 focus:ring-[#78fcd6]/20 rounded-xl py-2 px-3 sm:py-3 sm:px-4 pr-3 sm:pr-12 resize-none min-h-[40px] sm:min-h-[48px] backdrop-blur-sm transition-all duration-200 text-sm sm:text-base"
              />
            </div>
            <Button
              onClick={sendMessage}
              disabled={!input.trim() || isLoading}
              className="bg-[#78fcd6] hover:bg-[#00ffb6] text-[#0f1211] rounded-xl px-3 py-2 sm:px-4 sm:py-3 h-10 sm:h-12 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-[#78fcd6]/20 flex-shrink-0"
            >
              <Send className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
