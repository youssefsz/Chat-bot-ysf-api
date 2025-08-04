"use client"

import { motion } from "framer-motion"
import { FileText, Shield, ScrollText, ExternalLink } from "lucide-react"
import Link from "next/link"

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const footerLinks = [
    { href: "/docs", label: "Docs", icon: FileText },
    { href: "/privacy", label: "Privacy", icon: Shield },
    { href: "/terms", label: "Terms", icon: ScrollText },
  ]

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="mt-auto border-t border-[#78fcd6]/10 bg-[#0f1211]/80 backdrop-blur-xl"
    >
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#78fcd6] to-[#00ffb6] rounded-lg flex items-center justify-center">
                <span className="text-[#0f1211] font-bold text-sm">AI</span>
              </div>
              <span className="text-[#e7eceb] font-semibold text-lg">Chat API</span>
            </div>
            <p className="text-[#e7eceb]/70 text-sm leading-relaxed">
              A powerful AI chat API built for developers. Integrate intelligent conversations into your applications with ease.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#e7eceb]/50">
              <span>Powered by</span>
              <Link 
                href="https://youssef.tn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#78fcd6] hover:text-[#00ffb6] transition-colors duration-200 flex items-center gap-1"
              >
                Youssef Dhibi
                <ExternalLink className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-[#e7eceb] font-semibold text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <div className="space-y-2">
              {footerLinks.map((link) => {
                const Icon = link.icon
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-2 text-[#e7eceb]/70 hover:text-[#78fcd6] transition-colors duration-200 text-sm group"
                  >
                    <Icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                    {link.label}
                  </Link>
                )
              })}
            </div>
          </div>

          {/* API Info */}
          <div className="space-y-4">
            <h3 className="text-[#e7eceb] font-semibold text-sm uppercase tracking-wider">
              API Status
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#78fcd6] rounded-full animate-pulse"></div>
                <span className="text-[#e7eceb]/70 text-sm">Service Online</span>
              </div>
              <div className="text-xs text-[#e7eceb]/50">
                <p>Base URL:</p>
                <code className="text-[#78fcd6] bg-[#0f1211]/60 border border-[#78fcd6]/20 px-2 py-1 rounded text-xs">
                  python-test-server-uld3.onrender.com
                </code>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-[#78fcd6]/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[#e7eceb]/50 text-sm">
            © {currentYear} Chat API. All rights reserved.
          </div>
          <div className="text-[#e7eceb]/50 text-xs">
            Built with Next.js
          </div>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer