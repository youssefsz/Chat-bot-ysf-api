"use client"

import { motion } from "framer-motion"
import { Copy, Check, ExternalLink, Code, Zap, Shield, Globe } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const DocsPage = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const CodeBlock = ({ code, language, id }: { code: string; language: string; id: string }) => (
    <div className="relative group">
      <pre className="bg-[#1a1a1a] border border-white/10 rounded-xl p-4 overflow-x-auto text-sm">
        <code className={`language-${language} text-[#e7eceb]`}>{code}</code>
      </pre>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => copyToClipboard(code, id)}
        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[#e7eceb]/70 hover:text-[#78fcd6] hover:bg-white/5"
      >
        {copiedCode === id ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
      </Button>
    </div>
  )

  return (
    <div className="min-h-screen bg-[#0f1211] text-[#e7eceb] pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#78fcd6] to-[#00ffb6] bg-clip-text text-transparent">
            API Documentation
          </h1>
          <p className="text-xl text-[#e7eceb]/70 max-w-3xl mx-auto">
            Complete guide to integrate with our AI-powered chat API. Build intelligent conversations into your applications.
          </p>
        </motion.div>

        {/* Quick Start Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <Card className="bg-[#27272a]/20 border-white/10 backdrop-blur-xl">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-[#78fcd6]" />
                <CardTitle className="text-[#e7eceb]">Quick Start</CardTitle>
              </div>
              <CardDescription className="text-[#e7eceb]/70">
                Get started in minutes with our simple API
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Badge variant="secondary" className="bg-[#78fcd6]/20 text-[#78fcd6] border-[#78fcd6]/30">
                No Auth Required
              </Badge>
            </CardContent>
          </Card>

          <Card className="bg-[#27272a]/20 border-white/10 backdrop-blur-xl">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#78fcd6]" />
                <CardTitle className="text-[#e7eceb]">Secure & Reliable</CardTitle>
              </div>
              <CardDescription className="text-[#e7eceb]/70">
                Enterprise-grade security and 99.9% uptime
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
                Production Ready
              </Badge>
            </CardContent>
          </Card>

          <Card className="bg-[#27272a]/20 border-white/10 backdrop-blur-xl">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-[#78fcd6]" />
                <CardTitle className="text-[#e7eceb]">Global CDN</CardTitle>
              </div>
              <CardDescription className="text-[#e7eceb]/70">
                Low latency worldwide with edge deployment
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Badge variant="secondary" className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                Global Scale
              </Badge>
            </CardContent>
          </Card>
        </motion.div>

        {/* Base URL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <Card className="bg-[#27272a]/20 border-white/10 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-[#e7eceb] flex items-center gap-2">
                <Code className="w-5 h-5 text-[#78fcd6]" />
                Base URL
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code="https://python-test-server-uld3.onrender.com"
                language="text"
                id="base-url"
              />
            </CardContent>
          </Card>
        </motion.div>

        {/* API Endpoints */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-6 text-[#e7eceb]">API Endpoints</h2>
          
          <Tabs defaultValue="health" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 bg-[#27272a]/30 border border-white/10">
              <TabsTrigger value="health" className="text-[#e7eceb]/70 data-[state=active]:bg-[#78fcd6]/20 data-[state=active]:text-[#78fcd6] hover:text-[#e7eceb]">Health</TabsTrigger>
              <TabsTrigger value="info" className="text-[#e7eceb]/70 data-[state=active]:bg-[#78fcd6]/20 data-[state=active]:text-[#78fcd6] hover:text-[#e7eceb]">Info</TabsTrigger>
              <TabsTrigger value="completions" className="text-[#e7eceb]/70 data-[state=active]:bg-[#78fcd6]/20 data-[state=active]:text-[#78fcd6] hover:text-[#e7eceb]">Completions</TabsTrigger>
              <TabsTrigger value="simple" className="text-[#e7eceb]/70 data-[state=active]:bg-[#78fcd6]/20 data-[state=active]:text-[#78fcd6] hover:text-[#e7eceb]">Simple Chat</TabsTrigger>
            </TabsList>

            <TabsContent value="health">
              <Card className="bg-[#27272a]/20 border-white/10 backdrop-blur-xl">
                <CardHeader>
                  <CardTitle className="text-[#e7eceb]">GET /health</CardTitle>
                  <CardDescription className="text-[#e7eceb]/70">
                    Check if the API is running and healthy
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-[#e7eceb] mb-2">Response:</h4>
                    <CodeBlock
                      code={`{
  "status": "healthy",
  "timestamp": "2025-01-27T10:30:00",
  "environment": "production",
  "version": "1.0.0"
}`}
                      language="json"
                      id="health-response"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="info">
              <Card className="bg-[#27272a]/20 border-white/10 backdrop-blur-xl">
                <CardHeader>
                  <CardTitle className="text-[#e7eceb]">GET /</CardTitle>
                  <CardDescription className="text-[#e7eceb]/70">
                    Get basic information about the API and available endpoints
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-[#e7eceb] mb-2">Response:</h4>
                    <CodeBlock
                      code={`{
  "message": "Production Chat API Backend",
  "version": "1.0.0",
  "environment": "production",
  "endpoints": {
    "health": "/health",
    "chat_completions": "/chat/completions",
    "simple_chat": "/chat/simple"
  }
}`}
                      language="json"
                      id="info-response"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="completions">
              <Card className="bg-[#27272a]/20 border-white/10 backdrop-blur-xl">
                <CardHeader>
                  <CardTitle className="text-[#e7eceb]">POST /chat/completions</CardTitle>
                  <CardDescription className="text-[#e7eceb]/70">
                    OpenAI-compatible chat completions endpoint with full control over conversation flow
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold text-[#e7eceb] mb-2">Request Body:</h4>
                    <CodeBlock
                      code={`{
  "messages": [
    {
      "role": "system",
      "content": "You are a helpful assistant."
    },
    {
      "role": "user",
      "content": "Hello, how are you?"
    }
  ],
  "system_prompt": "You are a helpful assistant specialized in technical support.",
  "max_tokens": 1000,
  "temperature": 0.7,
  "stream": false
}`}
                      language="json"
                      id="completions-request"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#e7eceb] mb-2">Response:</h4>
                    <CodeBlock
                      code={`{
  "id": "chatcmpl-123",
  "object": "chat.completion",
  "created": 1677652288,
  "model": "mistral-tiny",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "Hello! I'm doing well, thank you for asking. How can I help you today?"
      },
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 20,
    "completion_tokens": 15,
    "total_tokens": 35
  }
}`}
                      language="json"
                      id="completions-response"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="simple">
              <Card className="bg-[#27272a]/20 border-white/10 backdrop-blur-xl">
                <CardHeader>
                  <CardTitle className="text-[#e7eceb]">POST /chat/simple</CardTitle>
                  <CardDescription className="text-[#e7eceb]/70">
                    Simplified endpoint for quick single-message interactions
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold text-[#e7eceb] mb-2">Request Body:</h4>
                    <CodeBlock
                      code={`{
  "message": "What is the weather like today?",
  "system_prompt": "You are a weather assistant."
}`}
                      language="json"
                      id="simple-request"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#e7eceb] mb-2">Response:</h4>
                    <CodeBlock
                      code={`{
  "response": "I don't have access to real-time weather data. Please check a weather service like weather.com or your local weather app for current conditions."
}`}
                      language="json"
                      id="simple-response"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Code Examples */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-6 text-[#e7eceb]">Code Examples</h2>
          
          <Tabs defaultValue="javascript" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3 bg-[#27272a]/30 border border-white/10">
              <TabsTrigger value="javascript" className="text-[#e7eceb]/70 data-[state=active]:bg-[#78fcd6]/20 data-[state=active]:text-[#78fcd6] hover:text-[#e7eceb]">JavaScript</TabsTrigger>
              <TabsTrigger value="python" className="text-[#e7eceb]/70 data-[state=active]:bg-[#78fcd6]/20 data-[state=active]:text-[#78fcd6] hover:text-[#e7eceb]">Python</TabsTrigger>
              <TabsTrigger value="curl" className="text-[#e7eceb]/70 data-[state=active]:bg-[#78fcd6]/20 data-[state=active]:text-[#78fcd6] hover:text-[#e7eceb]">cURL</TabsTrigger>
            </TabsList>

            <TabsContent value="javascript">
              <Card className="bg-[#27272a]/20 border-white/10 backdrop-blur-xl">
                <CardHeader>
                  <CardTitle className="text-[#e7eceb]">JavaScript/Node.js Example</CardTitle>
                </CardHeader>
                <CardContent>
                  <CodeBlock
                    code={`// Simple chat example
async function sendMessage(message, systemPrompt = null) {
  const response = await fetch('https://python-test-server-uld3.onrender.com/chat/simple', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: message,
      system_prompt: systemPrompt
    })
  });
  
  const data = await response.json();
  return data.response;
}

// Full chat completions example
async function chatCompletion(messages, options = {}) {
  const response = await fetch('https://python-test-server-uld3.onrender.com/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      messages: messages,
      system_prompt: options.systemPrompt,
      max_tokens: options.maxTokens || 1000,
      temperature: options.temperature || 0.7
    })
  });
  
  return await response.json();
}`}
                    language="javascript"
                    id="js-example"
                  />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="python">
              <Card className="bg-[#27272a]/20 border-white/10 backdrop-blur-xl">
                <CardHeader>
                  <CardTitle className="text-[#e7eceb]">Python Example</CardTitle>
                </CardHeader>
                <CardContent>
                  <CodeBlock
                    code={`import requests
import json

def send_simple_message(message, system_prompt=None):
    url = "https://python-test-server-uld3.onrender.com/chat/simple"
    payload = {
        "message": message,
        "system_prompt": system_prompt
    }
    
    response = requests.post(url, json=payload)
    return response.json()["response"]

def chat_completion(messages, system_prompt=None, max_tokens=1000, temperature=0.7):
    url = "https://python-test-server-uld3.onrender.com/chat/completions"
    payload = {
        "messages": messages,
        "system_prompt": system_prompt,
        "max_tokens": max_tokens,
        "temperature": temperature
    }
    
    response = requests.post(url, json=payload)
    return response.json()`}
                    language="python"
                    id="python-example"
                  />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="curl">
              <Card className="bg-[#27272a]/20 border-white/10 backdrop-blur-xl">
                <CardHeader>
                  <CardTitle className="text-[#e7eceb]">cURL Examples</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold text-[#e7eceb] mb-2">Simple Chat:</h4>
                    <CodeBlock
                      code={`curl -X POST "https://python-test-server-uld3.onrender.com/chat/simple" \
  -H "Content-Type: application/json" \
  -d '{
    "message": "Hello, how are you?",
    "system_prompt": "You are a friendly assistant."
  }'`}
                      language="bash"
                      id="curl-simple"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#e7eceb] mb-2">Chat Completions:</h4>
                    <CodeBlock
                      code={`curl -X POST "https://python-test-server-uld3.onrender.com/chat/completions" \
  -H "Content-Type: application/json" \
  -d '{
    "messages": [
      {"role": "system", "content": "You are a helpful assistant."},
      {"role": "user", "content": "What is the capital of France?"}
    ],
    "max_tokens": 100,
    "temperature": 0.7
  }'`}
                      language="bash"
                      id="curl-completions"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Error Handling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <Card className="bg-[#27272a]/20 border-white/10 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-[#e7eceb]">Error Handling</CardTitle>
              <CardDescription className="text-[#e7eceb]/70">
                The API returns standard HTTP status codes
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <div className="text-green-400 font-semibold">200 - Success</div>
                  <div className="text-sm text-[#e7eceb]/70">Request completed successfully</div>
                </div>
                <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                  <div className="text-yellow-400 font-semibold">400 - Bad Request</div>
                  <div className="text-sm text-[#e7eceb]/70">Invalid parameters</div>
                </div>
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <div className="text-red-400 font-semibold">500 - Server Error</div>
                  <div className="text-sm text-[#e7eceb]/70">Internal server error</div>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#e7eceb] mb-2">Error Response Format:</h4>
                <CodeBlock
                  code={`{
  "error": "Validation Error",
  "detail": "Invalid temperature value. Must be between 0.0 and 2.0",
  "timestamp": "2025-01-27T10:30:00"
}`}
                  language="json"
                  id="error-format"
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="bg-[#27272a]/20 border-white/10 backdrop-blur-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-[#e7eceb] text-2xl">Need Help?</CardTitle>
              <CardDescription className="text-[#e7eceb]/70">
                Check our support resources or get in touch
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="outline" 
                  className="bg-transparent border-[#78fcd6]/30 text-[#78fcd6] hover:bg-[#78fcd6]/10 hover:border-[#78fcd6]/50"
                  onClick={() => window.open('https://youssef.tn', '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Contact Developer
                </Button>
                <Button 
                  variant="outline" 
                  className="bg-transparent border-[#78fcd6]/30 text-[#78fcd6] hover:bg-[#78fcd6]/10 hover:border-[#78fcd6]/50"
                  onClick={() => window.open('https://python-test-server-uld3.onrender.com/health', '_blank')}
                >
                  <Globe className="w-4 h-4 mr-2" />
                  Check API Status
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

export default DocsPage