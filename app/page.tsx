"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import {
  CheckCircle,
  ArrowRight,
  Zap,
  Target,
  Palette,
  Star,
  Upload,
  Eye,
  Sparkles,
  TrendingUp,
  MousePointer,
  FileText,
} from "lucide-react"

interface LeadData {
  name: string
  email: string
  company: string
}

export default function PitchHubLanding() {
  const [leadData, setLeadData] = useState<LeadData>({
    name: "",
    email: "",
    company: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [dynamicText, setDynamicText] = useState("qualify")
  const [textKey, setTextKey] = useState(0)

  useEffect(() => {
    const words = ["qualify", "convert", "close"]
    let currentIndex = 0

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % words.length
      setDynamicText(words[currentIndex])
      setTextKey((prev) => prev + 1) // Force re-render of TextRoll
    }, 2000) // Change every 2 seconds

    return () => clearInterval(interval)
  }, [])

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!leadData.name || !leadData.email || !leadData.company) return

    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setShowSuccess(true)

    setTimeout(() => {
      setShowSuccess(false)
      setLeadData({ name: "", email: "", company: "" })
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <span className="text-xl font-bold text-gray-900">PitchHub</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 font-medium">
              Features
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 font-medium">
              Pricing
            </a>
            <a href="#customers" className="text-gray-600 hover:text-gray-900 font-medium">
              Customers
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
              Sign in
            </Button>
            <Button className="bg-gray-900 hover:bg-gray-800 text-white">Get started</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
              <div className="mb-2">
                Go to market with{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  personalized microsites
                </span>
                —and the ability to
              </div>
              <div
                className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent transition-all duration-500 h-[1.2em] flex items-center justify-center"
                style={{ fontVariantNumeric: "tabular-nums" }}
              >
                <span
                  key={textKey}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-in fade-in-0 slide-in-from-bottom-4 duration-300"
                >
                  {dynamicText}
                </span>
              </div>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
              Drop your lead's details and marketing collateral. Watch AI create custom, on-brand microsites that speak
              directly to your prospects and track every interaction.
            </p>
            {/* Lead Capture Form - Centered */}
            <div className="max-w-md mx-auto mb-12">
              <Card className="border-0 shadow-2xl bg-white">
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl font-bold text-gray-900">Create your first microsite</CardTitle>
                  <p className="text-gray-600">Enter your prospect's details to get started</p>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  {showSuccess ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Microsite created!</h3>
                      <p className="text-gray-600 mb-6">Check your email for the link and sharing instructions.</p>
                      <Button
                        onClick={() => setShowSuccess(false)}
                        className="bg-black hover:bg-gray-900 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                      >
                        Create another
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleLeadSubmit} className="space-y-6">
                      <div>
                        <Label htmlFor="name" className="text-gray-700 font-medium">
                          Lead's name
                        </Label>
                        <Input
                          id="name"
                          value={leadData.name}
                          onChange={(e) => setLeadData({ ...leadData, name: e.target.value })}
                          className="mt-2 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                          placeholder="Sarah Johnson"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-gray-700 font-medium">
                          Email address
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={leadData.email}
                          onChange={(e) => setLeadData({ ...leadData, email: e.target.value })}
                          className="mt-2 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                          placeholder="sarah@acmecorp.com"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="company" className="text-gray-700 font-medium">
                          Company
                        </Label>
                        <Input
                          id="company"
                          value={leadData.company}
                          onChange={(e) => setLeadData({ ...leadData, company: e.target.value })}
                          className="mt-2 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                          placeholder="Acme Corp"
                          required
                        />
                      </div>
                      <Button
                        type="submit"
                        disabled={isSubmitting || !leadData.name || !leadData.email || !leadData.company}
                        className="w-full bg-black hover:bg-black text-white py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] border-2 border-black hover:border-black disabled:opacity-80 disabled:bg-black disabled:text-white disabled:border-black"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                            Creating microsite...
                          </>
                        ) : (
                          <>
                            Create microsite
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 2 - Purple */}
      <section className="px-6 bg-gradient-to-br from-purple-600 to-purple-700 text-white rounded-3xl mx-4 my-5 py-10">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Upload Progress</span>
                    <span className="text-sm text-gray-500">3 of 5 files</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                      <FileText className="w-5 h-5 text-green-600" />
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-900">Product-Overview.pdf</div>
                        <div className="text-xs text-gray-500">2.4 MB • Brand colors extracted</div>
                      </div>
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                      <FileText className="w-5 h-5 text-green-600" />
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-900">Case-Study-SaaS.pdf</div>
                        <div className="text-xs text-gray-500">1.8 MB • Content analyzed</div>
                      </div>
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                      <Upload className="w-5 h-5 text-blue-600" />
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-900">Pricing-Deck.pptx</div>
                        <div className="text-xs text-gray-500">Processing...</div>
                      </div>
                      <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Get AI-powered content extraction from your existing materials
              </h2>
              <p className="text-xl mb-8 leading-relaxed">
                Upload your PDFs, decks, and case studies. Our AI extracts brand elements, key messaging, and relevant
                content automatically.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-purple-400 rounded-full flex items-center justify-center">
                    <Palette className="w-4 h-4 text-purple-800" />
                  </div>
                  <span className="">Automatic brand color and font detection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-purple-400 rounded-full flex items-center justify-center">
                    <Target className="w-4 h-4 text-purple-800" />
                  </div>
                  <span className="">Smart case study matching by industry</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-purple-400 rounded-full flex items-center justify-center">
                    <Zap className="w-4 h-4 text-purple-800" />
                  </div>
                  <span className="">Key messaging extraction and optimization</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 1 - Blue */}
      <section className="px-6 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-3xl mx-2.5 my-5 py-10">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Generate personalized microsites that convert 3x better than generic outreach
              </h2>
              <p className="text-xl mb-8 leading-relaxed">
                Our AI analyzes your prospect's company, role, and industry to create personalized content that
                resonates. No more one-size-fits-all presentations.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-blue-800" />
                  </div>
                  <span className="">Automatic brand extraction from your collateral</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-blue-800" />
                  </div>
                  <span className="">Industry-specific messaging and case studies</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-blue-800" />
                  </div>
                  <span className="">Mobile-responsive design with tracking pixels</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6">
                <div className="bg-gray-50 rounded-lg p-4 mb-4 flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-sm text-gray-500 font-mono ml-4">pitch.hub/acme-corp</span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg"></div>
                    <span className="font-semibold text-gray-900">Acme Corp</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Hi Sarah, here's how we can help Acme Corp scale faster
                  </h3>
                  <p className="text-gray-600">
                    Based on your role as VP of Growth, we've tailored this presentation for your challenges.
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <div className="text-sm font-medium text-blue-900">Your Challenge</div>
                      <div className="text-xs text-blue-700">Scaling personalized outreach</div>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <div className="text-sm font-medium text-green-900">Our Solution</div>
                      <div className="text-xs text-green-700">AI-powered microsites</div>
                    </div>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Schedule a Demo</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 3 - Green */}
      <section className="px-6 bg-gradient-to-br from-green-600 to-green-700 text-white mx-1.5 my-5 rounded-3xl py-10">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Get real-time insights on prospect engagement and buying intent
              </h2>
              <p className="text-xl mb-8 leading-relaxed">
                Track every interaction with detailed analytics. Know when prospects are ready to buy with engagement
                scoring and real-time notifications.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                    <Eye className="w-4 h-4 text-green-800" />
                  </div>
                  <span className="">Page views, time spent, and scroll depth</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                    <MousePointer className="w-4 h-4 text-green-800" />
                  </div>
                  <span className="">CTA clicks and form submissions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-green-800" />
                  </div>
                  <span className="">Engagement scoring and buying intent signals</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-900">Engagement Analytics</h3>
                    <Badge className="bg-green-100 text-green-800">Live</Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">47</div>
                      <div className="text-sm text-blue-700">Page Views</div>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">3:42</div>
                      <div className="text-sm text-purple-700">Avg. Time</div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">89%</div>
                      <div className="text-sm text-green-700">Scroll Depth</div>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-orange-600">12</div>
                      <div className="text-sm text-orange-700">CTA Clicks</div>
                    </div>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center space-x-2 text-green-700">
                      <TrendingUp className="w-5 h-5" />
                      <span className="font-medium">High Buying Intent</span>
                    </div>
                    <p className="text-sm text-green-600 mt-1">Sarah viewed pricing 3x and downloaded case study</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Turn data into action with flexible, iterative workflows
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From lead capture to conversion tracking, PitchHub streamlines your entire sales process
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-purple-100">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <Upload className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Automated lead enrichment</h3>
                <p className="text-gray-600 mb-6">
                  Import leads from your CRM or CSV. We automatically enrich with company data, industry insights, and
                  pain points.
                </p>
                <div className="bg-white rounded-lg p-4">
                  <div className="text-sm text-gray-500 mb-2">Lead: Sarah Johnson → Acme Corp</div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">Industry: SaaS</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">Size: 50-200 employees</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">Pain point: Scaling challenges</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">AI content personalization</h3>
                <p className="text-gray-600 mb-6">
                  Our AI creates personalized headlines, case studies, and CTAs based on prospect data and your
                  collateral.
                </p>
                <div className="bg-white rounded-lg p-4">
                  <div className="text-sm text-gray-500 mb-2">Generated for Sarah @ Acme Corp:</div>
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-gray-900">
                      "How SaaS companies like Acme Corp scale 3x faster"
                    </div>
                    <div className="text-xs text-gray-600">
                      ✓ Relevant case study: TechCorp (similar size)
                      <br />✓ Industry-specific pain points
                      <br />✓ Role-based messaging for VP of Growth
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Consolidate your GTM stack to save time & cut costs—securely
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Replace multiple tools with one platform. Pay for microsites created, not seats occupied.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-2 border-gray-200 relative">
              <CardHeader className="text-center pb-8">
                <Badge className="bg-gray-100 text-gray-700 mb-4">Starter</Badge>
                <div className="text-4xl font-bold text-gray-900 mb-2">Free</div>
                <div className="text-gray-500">Forever</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    25 microsites per month
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    Basic analytics
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    PitchHub branding
                  </li>
                </ul>
                <Button className="w-full mt-8 bg-gray-900 hover:bg-gray-800">Get started</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-500 text-white px-4 py-1">Most popular</Badge>
              </div>
              <CardHeader className="text-center pb-8">
                <Badge className="bg-blue-100 text-blue-700 mb-4">Growth</Badge>
                <div className="text-4xl font-bold text-gray-900 mb-2">$99</div>
                <div className="text-gray-500">per month</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    500 microsites per month
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    Advanced analytics
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    Custom domain
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    CRM integration
                  </li>
                </ul>
                <Button className="w-full mt-8 bg-blue-600 hover:bg-blue-700">Start free trial</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 relative">
              <CardHeader className="text-center pb-8">
                <Badge className="bg-gray-100 text-gray-700 mb-4">Scale</Badge>
                <div className="text-4xl font-bold text-gray-900 mb-2">$0.15</div>
                <div className="text-gray-500">per microsite</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    Unlimited microsites
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    White-label option
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    SSO integration
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    Dedicated support
                  </li>
                </ul>
                <Button className="w-full mt-8 bg-gray-900 hover:bg-gray-800">Contact sales</Button>
              </CardContent>
            </Card>
          </div>

          {/* Security badges */}
          <div className="flex items-center justify-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <span className="text-sm text-gray-600">SOC 2 Type II</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-blue-600" />
              </div>
              <span className="text-sm text-gray-600">GDPR Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-purple-600" />
              </div>
              <span className="text-sm text-gray-600">256-bit SSL</span>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section id="customers" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">What our customers say about us...</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 bg-gradient-to-br from-purple-600 to-purple-700 text-white">
              <CardContent className="p-8">
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-lg leading-relaxed mb-6">
                  "We built three tailored pages before our weekly stand-up and booked two demos the same afternoon. The
                  personalization is incredible and our prospects actually engage now."
                </blockquote>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white font-bold">
                    M
                  </div>
                  <div>
                    <div className="font-semibold">Marissa K.</div>
                    <div className="text-purple-200">Head of Growth, DevSecOps SaaS</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-green-600 to-green-700 text-white">
              <CardContent className="p-8">
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-lg leading-relaxed mb-6">
                  "The brand extraction nailed our palette on the first try. Design didn't have to touch a thing. Our
                  sales team can now create professional microsites without any design resources."
                </blockquote>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white font-bold">
                    O
                  </div>
                  <div>
                    <div className="font-semibold">Owen R.</div>
                    <div className="text-green-200">Creative Director, B2B Agency</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Turn your growth ideas into reality today</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of sales teams already creating personalized microsites that convert. Start your first
            microsite in the next 3 minutes.
          </p>
          <Button
            size="lg"
            className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-6 rounded-xl"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Start building for free
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <div className="mt-8 text-sm text-gray-400">
            No credit card required • Free forever plan • Setup in 60 seconds
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">P</span>
                </div>
                <span className="text-xl font-bold text-gray-900">PitchHub</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Transform leads into personalized microsites in under 3 minutes.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="mb-8" />

          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
            <div>© 2024 PitchHub. All rights reserved.</div>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-gray-900">
                Privacy
              </a>
              <a href="#" className="hover:text-gray-900">
                Terms
              </a>
              <a href="#" className="hover:text-gray-900">
                Security
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
