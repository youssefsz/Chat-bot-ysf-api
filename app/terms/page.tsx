"use client"

import { motion } from "framer-motion"
import { ScrollText, AlertTriangle, CheckCircle, XCircle, Scale, Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const TermsPage = () => {
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
            <ScrollText className="w-8 h-8 text-[#78fcd6]" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#78fcd6] to-[#00ffb6] bg-clip-text text-transparent">
              Terms of Service
            </h1>
          </div>
          <p className="text-xl text-[#e7eceb]/70 max-w-3xl mx-auto">
            Please read these terms carefully before using our AI Chat API service.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <Badge variant="secondary" className="bg-[#78fcd6]/20 text-[#78fcd6] border-[#78fcd6]/30">
              Effective Date: August 4, 2025
            </Badge>
          </div>
        </motion.div>

        {/* Key Terms Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <Card className="bg-[#27272a]/20 border-white/10 backdrop-blur-xl">
            <CardHeader>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <CardTitle className="text-[#e7eceb]">Fair Use Policy</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-[#e7eceb]/70 text-sm">
                Reasonable usage limits to ensure service quality for all users.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-[#27272a]/20 border-white/10 backdrop-blur-xl">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Scale className="w-5 h-5 text-[#78fcd6]" />
                <CardTitle className="text-[#e7eceb]">Legal Compliance</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-[#e7eceb]/70 text-sm">
                Users must comply with applicable laws and our acceptable use policy.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-[#27272a]/20 border-white/10 backdrop-blur-xl">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-400" />
                <CardTitle className="text-[#e7eceb]">Service Availability</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-[#e7eceb]/70 text-sm">
                99.9% uptime SLA with scheduled maintenance windows.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Terms Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          {/* Acceptance of Terms */}
          <Card className="bg-[#27272a]/20 border-white/10 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-[#e7eceb]">1. Acceptance of Terms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-[#e7eceb]/70">
                By accessing or using the Chat API service ("Service") provided by Youssef Dhibi ("we," "us," or "our"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, you may not access the Service.
              </p>
              <p className="text-[#e7eceb]/70">
                These Terms apply to all visitors, users, and others who access or use the Service. By using our Service, you represent that you are at least 18 years old or have reached the age of majority in your jurisdiction.
              </p>
            </CardContent>
          </Card>

          {/* Service Description */}
          <Card className="bg-[#27272a]/20 border-white/10 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-[#e7eceb]">2. Service Description</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-[#e7eceb]/70">
                Our Service provides an AI-powered chat API that enables developers to integrate conversational AI capabilities into their applications. The Service includes:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-[#78fcd6]/5 border border-[#78fcd6]/20 rounded-lg">
                  <h4 className="font-semibold text-[#e7eceb] mb-2">Chat Completions API</h4>
                  <p className="text-[#e7eceb]/70 text-sm">
                    OpenAI-compatible endpoint for full conversation management
                  </p>
                </div>
                <div className="p-4 bg-[#78fcd6]/5 border border-[#78fcd6]/20 rounded-lg">
                  <h4 className="font-semibold text-[#e7eceb] mb-2">Simple Chat API</h4>
                  <p className="text-[#e7eceb]/70 text-sm">
                    Streamlined endpoint for single-message interactions
                  </p>
                </div>
                <div className="p-4 bg-[#78fcd6]/5 border border-[#78fcd6]/20 rounded-lg">
                  <h4 className="font-semibold text-[#e7eceb] mb-2">Health Monitoring</h4>
                  <p className="text-[#e7eceb]/70 text-sm">
                    Real-time service status and health check endpoints
                  </p>
                </div>
                <div className="p-4 bg-[#78fcd6]/5 border border-[#78fcd6]/20 rounded-lg">
                  <h4 className="font-semibold text-[#e7eceb] mb-2">Documentation</h4>
                  <p className="text-[#e7eceb]/70 text-sm">
                    Comprehensive API documentation and code examples
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Acceptable Use Policy */}
          <Card className="bg-[#27272a]/20 border-white/10 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-[#e7eceb] flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-yellow-400" />
                3. Acceptable Use Policy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-[#e7eceb]/70">
                You agree to use our Service responsibly and in compliance with all applicable laws. The following activities are strictly prohibited:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[#e7eceb] text-sm">Illegal Activities</h4>
                    <p className="text-[#e7eceb]/70 text-sm">
                      Using the Service for any illegal purpose or to violate any local, state, national, or international law.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[#e7eceb] text-sm">Harmful Content</h4>
                    <p className="text-[#e7eceb]/70 text-sm">
                      Generating or distributing content that is harmful, abusive, harassing, defamatory, or promotes violence.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[#e7eceb] text-sm">System Abuse</h4>
                    <p className="text-[#e7eceb]/70 text-sm">
                      Attempting to disrupt, damage, or gain unauthorized access to our systems or networks.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[#e7eceb] text-sm">Spam and Abuse</h4>
                    <p className="text-[#e7eceb]/70 text-sm">
                      Sending spam, excessive requests, or using the Service to overwhelm our infrastructure.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Usage Limits and Fair Use */}
          <Card className="bg-[#27272a]/20 border-white/10 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-[#e7eceb]">4. Usage Limits and Fair Use</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-[#e7eceb]/70">
                To ensure optimal service quality for all users, we implement the following usage guidelines:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                  <h4 className="font-semibold text-blue-400 mb-2">Rate Limits</h4>
                  <ul className="text-[#e7eceb]/70 text-sm space-y-1">
                    <li>• 1000 requests per hour per IP</li>
                    <li>• 10,000 requests per day per user</li>
                    <li>• Maximum 4000 tokens per request</li>
                  </ul>
                </div>
                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <h4 className="font-semibold text-green-400 mb-2">Fair Use Guidelines</h4>
                  <ul className="text-[#e7eceb]/70 text-sm space-y-1">
                    <li>• Reasonable commercial usage allowed</li>
                    <li>• No excessive automated requests</li>
                    <li>• Respect for system resources</li>
                  </ul>
                </div>
              </div>
              <p className="text-[#e7eceb]/70 text-sm">
                We reserve the right to temporarily or permanently restrict access for users who exceed these limits or engage in abusive behavior.
              </p>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card className="bg-[#27272a]/20 border-white/10 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-[#e7eceb]">5. Intellectual Property Rights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-[#e7eceb] mb-2">Our Rights</h4>
                  <p className="text-[#e7eceb]/70 text-sm">
                    The Service and its original content, features, and functionality are and will remain the exclusive property of Youssef Dhibi and its licensors. The Service is protected by copyright, trademark, and other laws.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#e7eceb] mb-2">Your Content</h4>
                  <p className="text-[#e7eceb]/70 text-sm">
                    You retain ownership of any content you submit to our Service. By using our Service, you grant us a limited, non-exclusive license to process your content solely for the purpose of providing the Service.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#e7eceb] mb-2">AI-Generated Content</h4>
                  <p className="text-[#e7eceb]/70 text-sm">
                    You are responsible for the content generated through our AI Service. We do not claim ownership of AI-generated responses, but you acknowledge that similar responses may be generated for other users.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Service Availability */}
          <Card className="bg-[#27272a]/20 border-white/10 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-[#e7eceb] flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#78fcd6]" />
                6. Service Availability and Modifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-[#e7eceb] mb-2">Service Level Agreement</h4>
                  <ul className="text-[#e7eceb]/70 text-sm space-y-1">
                    <li>• 99.9% uptime target</li>
                    <li>• Scheduled maintenance windows</li>
                    <li>• Real-time status monitoring</li>
                    <li>• Incident response procedures</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[#e7eceb] mb-2">Service Modifications</h4>
                  <ul className="text-[#e7eceb]/70 text-sm space-y-1">
                    <li>• 30-day notice for major changes</li>
                    <li>• Backward compatibility efforts</li>
                    <li>• Migration assistance when needed</li>
                    <li>• API versioning support</li>
                  </ul>
                </div>
              </div>
              <p className="text-[#e7eceb]/70 text-sm">
                We reserve the right to modify, suspend, or discontinue the Service at any time. We will provide reasonable notice for planned changes that may affect your usage.
              </p>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card className="bg-[#27272a]/20 border-white/10 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-[#e7eceb]">7. Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-yellow-400 mb-2">Important Legal Notice</h4>
                    <p className="text-[#e7eceb]/70 text-sm">
                      The Service is provided "as is" without warranties of any kind. We shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the Service.
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-[#e7eceb]/70 text-sm">
                Our total liability to you for any claims arising from these Terms or your use of the Service shall not exceed the amount you paid us in the twelve months preceding the claim.
              </p>
            </CardContent>
          </Card>

          {/* Termination */}
          <Card className="bg-[#27272a]/20 border-white/10 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-[#e7eceb]">8. Termination</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-[#e7eceb] mb-2">Your Rights</h4>
                  <p className="text-[#e7eceb]/70 text-sm">
                    You may stop using our Service at any time. No formal termination notice is required for free usage.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#e7eceb] mb-2">Our Rights</h4>
                  <p className="text-[#e7eceb]/70 text-sm">
                    We may terminate or suspend your access immediately for violations of these Terms or illegal activities.
                  </p>
                </div>
              </div>
              <p className="text-[#e7eceb]/70 text-sm">
                Upon termination, your right to use the Service will cease immediately. Provisions that by their nature should survive termination will remain in effect.
              </p>
            </CardContent>
          </Card>

          {/* Governing Law */}
          <Card className="bg-[#27272a]/20 border-white/10 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-[#e7eceb] flex items-center gap-2">
                <Scale className="w-5 h-5 text-[#78fcd6]" />
                9. Governing Law and Dispute Resolution
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-[#e7eceb]/70">
                These Terms shall be governed by and construed in accordance with the laws of Tunisia, without regard to its conflict of law provisions. Any disputes arising from these Terms or your use of the Service will be resolved through:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#78fcd6] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-[#e7eceb] text-sm">Informal Resolution</h4>
                    <p className="text-[#e7eceb]/70 text-sm">
                      Good faith negotiations between the parties for a period of 30 days.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#78fcd6] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-[#e7eceb] text-sm">Binding Arbitration</h4>
                    <p className="text-[#e7eceb]/70 text-sm">
                      If informal resolution fails, disputes will be resolved through binding arbitration.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Changes to Terms */}
          <Card className="bg-[#27272a]/20 border-white/10 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-[#e7eceb]">10. Changes to Terms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-[#e7eceb]/70">
                We reserve the right to modify these Terms at any time. We will notify users of material changes by:
              </p>
              <ul className="list-disc list-inside text-[#e7eceb]/70 text-sm space-y-1 ml-4">
                <li>Posting the updated Terms on this page</li>
                <li>Updating the "Effective Date" at the top of this page</li>
                <li>Providing notice through our Service or via email for significant changes</li>
              </ul>
              <p className="text-[#e7eceb]/70 text-sm">
                Your continued use of the Service after any modifications constitutes acceptance of the updated Terms.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="bg-[#27272a]/20 border-white/10 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-[#e7eceb] text-xl">Contact Information</CardTitle>
              <CardDescription className="text-[#e7eceb]/70">
                Questions about these Terms of Service?
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-[#e7eceb] mb-2">Legal Inquiries</h4>
                  <p className="text-[#e7eceb]/70 text-sm">
                    Email: legal@chatapi.com<br />
                    Response time: Within 5 business days
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#e7eceb] mb-2">Service Provider</h4>
                  <p className="text-[#e7eceb]/70 text-sm">
                    Youssef Dhibi<br />
                    Website: <a href="https://youssef.tn" target="_blank" rel="noopener noreferrer" className="text-[#78fcd6] hover:text-[#00ffb6] transition-colors">youssef.tn</a>
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-white/10">
                <p className="text-[#e7eceb]/50 text-xs">
                  These Terms of Service are effective as of August 4, 2025. By using our Service, you acknowledge that you have read, understood, and agree to be bound by these Terms.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

export default TermsPage