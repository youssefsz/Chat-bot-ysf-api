"use client"

import { motion } from "framer-motion"
import { Shield, Eye, Lock, Database, Globe, UserCheck } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-[#0f1211] text-[#e7eceb] pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="w-8 h-8 text-[#78fcd6]" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#78fcd6] to-[#00ffb6] bg-clip-text text-transparent">
              Privacy Policy
            </h1>
          </div>
          <p className="text-xl text-[#e7eceb]/70 max-w-3xl mx-auto">
            Your privacy is our priority. Learn how we collect, use, and protect your data.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <Badge variant="secondary" className="bg-[#78fcd6]/20 text-[#78fcd6] border-[#78fcd6]/30">
              Last Updated: August 4, 2025
            </Badge>
          </div>
        </motion.div>

        {/* Privacy Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <Card className="bg-[#27272a]/20 border-white/10 backdrop-blur-xl">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-[#78fcd6]" />
                <CardTitle className="text-[#e7eceb]">Data Encryption</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-[#e7eceb]/70 text-sm">
                All data is encrypted in transit and at rest using industry-standard AES-256 encryption.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-[#27272a]/20 border-white/10 backdrop-blur-xl">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Eye className="w-5 h-5 text-[#78fcd6]" />
                <CardTitle className="text-[#e7eceb]">No Data Selling</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-[#e7eceb]/70 text-sm">
                We never sell, rent, or share your personal data with third parties for marketing purposes.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-[#27272a]/20 border-white/10 backdrop-blur-xl">
            <CardHeader>
              <div className="flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-[#78fcd6]" />
                <CardTitle className="text-[#e7eceb]">User Control</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-[#e7eceb]/70 text-sm">
                You have full control over your data with options to access, modify, or delete it anytime.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Privacy Policy Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          {/* Information We Collect */}
          <Card className="bg-[#27272a]/20 border-white/10 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-[#e7eceb] flex items-center gap-2">
                <Database className="w-5 h-5 text-[#78fcd6]" />
                Information We Collect
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-[#e7eceb] mb-2">API Usage Data</h4>
                <p className="text-[#e7eceb]/70 text-sm mb-2">
                  When you use our Chat API, we collect:
                </p>
                <ul className="list-disc list-inside text-[#e7eceb]/70 text-sm space-y-1 ml-4">
                  <li>API requests and responses for service improvement</li>
                  <li>Usage patterns and frequency for optimization</li>
                  <li>Error logs for debugging and system reliability</li>
                  <li>IP addresses for security and rate limiting</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-[#e7eceb] mb-2">Chat Messages</h4>
                <p className="text-[#e7eceb]/70 text-sm">
                  Messages sent through our API are processed to generate responses but are not permanently stored unless explicitly configured for conversation history. All messages are encrypted and processed securely.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-[#e7eceb] mb-2">Technical Information</h4>
                <p className="text-[#e7eceb]/70 text-sm">
                  We automatically collect technical information including browser type, device information, and operating system to ensure compatibility and optimal performance.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* How We Use Information */}
          <Card className="bg-[#27272a]/20 border-white/10 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-[#e7eceb]">How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-[#78fcd6]/5 border border-[#78fcd6]/20 rounded-lg">
                  <h4 className="font-semibold text-[#e7eceb] mb-2">Service Provision</h4>
                  <p className="text-[#e7eceb]/70 text-sm">
                    To provide, maintain, and improve our AI chat services and respond to your queries.
                  </p>
                </div>
                <div className="p-4 bg-[#78fcd6]/5 border border-[#78fcd6]/20 rounded-lg">
                  <h4 className="font-semibold text-[#e7eceb] mb-2">Security & Safety</h4>
                  <p className="text-[#e7eceb]/70 text-sm">
                    To detect, prevent, and address technical issues, fraud, and abuse of our services.
                  </p>
                </div>
                <div className="p-4 bg-[#78fcd6]/5 border border-[#78fcd6]/20 rounded-lg">
                  <h4 className="font-semibold text-[#e7eceb] mb-2">Analytics & Improvement</h4>
                  <p className="text-[#e7eceb]/70 text-sm">
                    To analyze usage patterns and improve our AI models and service quality.
                  </p>
                </div>
                <div className="p-4 bg-[#78fcd6]/5 border border-[#78fcd6]/20 rounded-lg">
                  <h4 className="font-semibold text-[#e7eceb] mb-2">Legal Compliance</h4>
                  <p className="text-[#e7eceb]/70 text-sm">
                    To comply with applicable laws, regulations, and legal processes.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Sharing */}
          <Card className="bg-[#27272a]/20 border-white/10 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-[#e7eceb]">Data Sharing and Disclosure</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-[#e7eceb]/70">
                We do not sell, rent, or share your personal information with third parties except in the following limited circumstances:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#78fcd6] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-[#e7eceb] text-sm">Service Providers</h4>
                    <p className="text-[#e7eceb]/70 text-sm">
                      With trusted third-party service providers who assist in operating our services, subject to strict confidentiality agreements.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#78fcd6] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-[#e7eceb] text-sm">Legal Requirements</h4>
                    <p className="text-[#e7eceb]/70 text-sm">
                      When required by law, court order, or government regulation, or to protect our rights and safety.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#78fcd6] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-[#e7eceb] text-sm">Business Transfers</h4>
                    <p className="text-[#e7eceb]/70 text-sm">
                      In connection with a merger, acquisition, or sale of assets, with appropriate data protection measures.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Security */}
          <Card className="bg-[#27272a]/20 border-white/10 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-[#e7eceb] flex items-center gap-2">
                <Lock className="w-5 h-5 text-[#78fcd6]" />
                Data Security
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-[#e7eceb]/70">
                We implement comprehensive security measures to protect your data:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-[#e7eceb] text-sm">Technical Safeguards</h4>
                  <ul className="list-disc list-inside text-[#e7eceb]/70 text-sm space-y-1 ml-4">
                    <li>End-to-end encryption (TLS 1.3)</li>
                    <li>AES-256 data encryption at rest</li>
                    <li>Regular security audits and penetration testing</li>
                    <li>Multi-factor authentication for admin access</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-[#e7eceb] text-sm">Operational Safeguards</h4>
                  <ul className="list-disc list-inside text-[#e7eceb]/70 text-sm space-y-1 ml-4">
                    <li>Access controls and role-based permissions</li>
                    <li>Regular employee security training</li>
                    <li>Incident response and breach notification procedures</li>
                    <li>Secure data centers with 24/7 monitoring</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card className="bg-[#27272a]/20 border-white/10 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-[#e7eceb] flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-[#78fcd6]" />
                Your Rights and Choices
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-[#e7eceb]/70">
                You have the following rights regarding your personal data:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                  <h4 className="font-semibold text-blue-400 mb-2">Access & Portability</h4>
                  <p className="text-[#e7eceb]/70 text-sm">
                    Request access to your personal data and receive a copy in a portable format.
                  </p>
                </div>
                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <h4 className="font-semibold text-green-400 mb-2">Correction & Update</h4>
                  <p className="text-[#e7eceb]/70 text-sm">
                    Request correction of inaccurate or incomplete personal data.
                  </p>
                </div>
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <h4 className="font-semibold text-red-400 mb-2">Deletion</h4>
                  <p className="text-[#e7eceb]/70 text-sm">
                    Request deletion of your personal data, subject to legal and operational requirements.
                  </p>
                </div>
                <div className="p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                  <h4 className="font-semibold text-purple-400 mb-2">Opt-out</h4>
                  <p className="text-[#e7eceb]/70 text-sm">
                    Opt-out of certain data processing activities and marketing communications.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* International Transfers */}
          <Card className="bg-[#27272a]/20 border-white/10 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-[#e7eceb] flex items-center gap-2">
                <Globe className="w-5 h-5 text-[#78fcd6]" />
                International Data Transfers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#e7eceb]/70 mb-4">
                Our services are hosted globally to provide optimal performance. When we transfer your data internationally, we ensure appropriate safeguards are in place:
              </p>
              <ul className="list-disc list-inside text-[#e7eceb]/70 text-sm space-y-1 ml-4">
                <li>Standard Contractual Clauses (SCCs) approved by the European Commission</li>
                <li>Adequacy decisions for transfers to countries with adequate data protection</li>
                <li>Additional technical and organizational measures for enhanced protection</li>
                <li>Regular compliance monitoring and audits</li>
              </ul>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="bg-[#27272a]/20 border-white/10 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-[#e7eceb] text-xl">Contact Us</CardTitle>
              <CardDescription className="text-[#e7eceb]/70">
                Questions about this Privacy Policy or your data?
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-[#e7eceb] mb-2">Data Protection Officer</h4>
                  <p className="text-[#e7eceb]/70 text-sm">
                    Email: privacy@chatapi.com<br />
                    Response time: Within 30 days
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#e7eceb] mb-2">Developer Contact</h4>
                  <p className="text-[#e7eceb]/70 text-sm">
                    Youssef Dhibi<br />
                    Website: <a href="https://youssef.tn" target="_blank" rel="noopener noreferrer" className="text-[#78fcd6] hover:text-[#00ffb6] transition-colors">youssef.tn</a>
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-white/10">
                <p className="text-[#e7eceb]/50 text-xs">
                  This Privacy Policy is effective as of August 4, 2025, and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

export default PrivacyPage