"use client"

import type React from "react"
import { Crown } from 'lucide-react' // Import Crown component

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { AnimatedSection } from "@/components/animated-section"
import { CheckCircle, ArrowRight, Zap, Palette, Upload, Eye, TrendingUp, FileText, User, Users, Play, Link, Flame, BarChart3, Target, Briefcase } from 'lucide-react'
import { StarBorder } from "@/components/ui/star-border"

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
  const [formError, setFormError] = useState("")

  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = 5

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 3000) // Change slide every 3 seconds

    return () => clearInterval(interval)
  }, [])

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
    setFormError("")

    // Validation: Company is required, and either name or email must be provided
    if (!leadData.company.trim()) {
      setFormError("Company name is required")
      return
    }

    if (!leadData.name.trim() && !leadData.email.trim()) {
      setFormError("Please provide either a name or email address")
      return
    }

    // Email validation if provided
    if (leadData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(leadData.email)) {
      setFormError("Please enter a valid email address")
      return
    }

    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setShowSuccess(true)

    setTimeout(() => {
      setShowSuccess(false)
      setLeadData({ name: "", email: "", company: "" })
      setFormError("")
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
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
              Sign in
            </Button>
            <Button className="bg-gray-900 hover:bg-gray-800 text-white">Create My Pitch</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 bg-white py-10">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <AnimatedSection animation="fade-up">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
                <div className="mb-2 font-semibold">
                  Go to market with{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    a personalized pitch
                  </span>
                  —and the ability to
                </div>
                <div
                  className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent transition-all duration-500 h-[1.2em] flex items-center justify-center"
                  style={{ fontVariantNumeric: "tabular-nums" }}
                >
                  <span
                    key={textKey}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-in fade-in-0 slide-in-from-bottom-4 duration-300 font-semibold"
                  >
                    {dynamicText}
                  </span>
                </div>
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-3.5">
                <span className="block font-semibold text-gray-900 mb-2">
                  Make Personalization Your #1 Revenue Channel.
                </span>
                We'll do automated lead enrichment and pull winning proof points from your decks, case studies, and blog
                posts to build a compelling narrative for each lead.
              </p>
            </AnimatedSection>

            {/* Lead Capture Form - Centered */}
            <AnimatedSection animation="scale" delay={400}>
              <div className="max-w-md mx-auto mb-12">
                <Card className="border-0 shadow-2xl bg-white">
                  <CardHeader className="text-center pb-6">
                    <CardTitle className="text-2xl text-gray-900 font-semibold">Create your first pitch</CardTitle>
                    <p className="text-gray-600">Enter your prospect's details to get started</p>
                  </CardHeader>
                  <CardContent className="px-8 pb-8">
                    {showSuccess ? (
                      <div className="text-center py-8">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                          <CheckCircle className="w-8 h-8 text-green-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Pitch created!</h3>
                        <p className="text-gray-600 mb-6">Check your email for the link and sharing instructions.</p>
                        <Button
                          onClick={() => setShowSuccess(false)}
                          className="bg-black hover:bg-gray-900 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                        >
                          Create another
                        </Button>
                      </div>
                    ) : (
                      <form onSubmit={handleLeadSubmit} className="space-y-5">
                        {/* Error message display */}
                        {formError && (
                          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                            <div className="flex items-center space-x-2">
                              <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                                <span className="text-white text-xs">!</span>
                              </div>
                              <p className="text-red-700 text-sm font-medium">{formError}</p>
                            </div>
                          </div>
                        )}

                        <div>
                          <Input
                            id="name"
                            value={leadData.name}
                            onChange={(e) => setLeadData({ ...leadData, name: e.target.value })}
                            className="border-gray-200 focus:border-blue-500 focus:ring-blue-500 h-12"
                            placeholder="Lead's name (optional)"
                          />
                        </div>

                        <div>
                          <Input
                            id="email"
                            type="email"
                            value={leadData.email}
                            onChange={(e) => setLeadData({ ...leadData, email: e.target.value })}
                            className="border-gray-200 focus:border-blue-500 focus:ring-blue-500 h-12"
                            placeholder="Lead's email address (optional)"
                          />
                        </div>

                        <div>
                          <Input
                            id="company"
                            value={leadData.company}
                            onChange={(e) => setLeadData({ ...leadData, company: e.target.value })}
                            className="border-gray-200 focus:border-blue-500 focus:ring-blue-500 h-12"
                            placeholder="Lead's company name"
                          />
                        </div>

                        <StarBorder
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] disabled:opacity-80"
                          color="hsl(220, 100%, 50%)"
                          speed="4s"
                        >
                          <div className="bg-black text-white py-4 px-6 rounded-lg font-semibold text-lg w-full flex items-center justify-center">
                            {isSubmitting ? (
                              <>
                                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                                Creating pitch...
                              </>
                            ) : (
                              <>
                                Create My Pitch for Free
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </>
                            )}
                          </div>
                        </StarBorder>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Feature Section 2 - Purple Card */}
      <AnimatedSection animation="fade-up">
        <section className="px-6 bg-white py-6">
          <div className="container mx-auto max-w-7xl">
            <Card className="border-transparent bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl overflow-hidden">
              <CardContent className="p-12 py-12 px-12">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <AnimatedSection animation="fade-right" className="order-2 lg:order-1 relative">
                    <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
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
                  </AnimatedSection>

                  <AnimatedSection animation="fade-left" className="order-1 lg:order-2">
                    <h2 className="text-4xl lg:text-5xl mb-6 text-gray-900 font-semibold">
                      Unlock the Revenue in Your Existing Collateral
                    </h2>
                    <p className="text-xl mb-8 leading-relaxed text-gray-700">
                      Our AI mines your Website, PDFs, decks, and case studies, extracting the most relevant points to
                      build a compelling, personalized narrative for each lead
                    </p>
                    <div className="space-y-4">
                      <AnimatedSection animation="fade-left" delay={100}>
                        <div className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                            <Palette className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-gray-700">Automatic brand color and font detection</span>
                        </div>
                      </AnimatedSection>
                      <AnimatedSection animation="fade-left" delay={200}>
                        <div className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                            <Users className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-gray-700">AI-powered lead enrichment</span>
                        </div>
                      </AnimatedSection>
                      <AnimatedSection animation="fade-left" delay={300}>
                        <div className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                            <Zap className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-gray-700">Winning message extraction and optimization</span>
                        </div>
                      </AnimatedSection>
                    </div>
                  </AnimatedSection>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </AnimatedSection>

      {/* Feature Section 1 - Blue Card */}
      <AnimatedSection animation="fade-up">
        <section className="px-6 bg-white py-6">
          <div className="container mx-auto max-w-7xl">
            <Card className="border-transparent bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl overflow-hidden">
              <CardContent className="p-12 py-12 px-12">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <AnimatedSection animation="fade-right">
                    <h2 className="text-4xl lg:text-5xl mb-6 text-gray-900 font-semibold">
                      Book 3× more demos with personalized pitches
                    </h2>
                    <p className="text-xl mb-8 leading-relaxed text-gray-700">
                      Our AI blends enriched lead with your content to create a an on-brand responsive pitch giving you
                      a better chance to convert
                    </p>
                    <div className="space-y-4">
                      <AnimatedSection animation="fade-right" delay={100}>
                        <div className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                            <User className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-gray-700">Give every prospect a 1:1 experience</span>
                        </div>
                      </AnimatedSection>
                      <AnimatedSection animation="fade-right" delay={200}>
                        <div className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                            <Play className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-gray-700">Let buyers engage with interactive content</span>
                        </div>
                      </AnimatedSection>
                      <AnimatedSection animation="fade-right" delay={300}>
                        <div className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                            <Link className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-gray-700">Replace messy PDFs, Decks with one smart link</span>
                        </div>
                      </AnimatedSection>
                    </div>
                  </AnimatedSection>

                  <AnimatedSection animation="fade-left" className="relative">
                    <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 relative overflow-hidden">
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
                        <div className="space-y-3">
                          <div>
                            <div className="text-sm font-medium text-blue-900 mb-1">Your Challenge</div>
                            <div className="text-sm text-gray-700">
                              Scaling personalized outreach without losing the human touch
                            </div>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-green-900 mb-1">Our Solution</div>
                            <div className="text-sm text-gray-700">
                              AI-powered microsites that feel personally crafted for each prospect
                            </div>
                          </div>
                        </div>
                        <div className="text-gray-500 text-sm">
                          Continue reading to learn more about our approach...
                        </div>
                      </div>
                      {/* Subtle fade effect at bottom */}
                      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
                    </div>
                  </AnimatedSection>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </AnimatedSection>

      {/* Feature Section 3 - Green Card */}
      <AnimatedSection animation="fade-up">
        <section className="px-6 bg-white py-6">
          <div className="container mx-auto max-w-7xl">
            <Card className="border-transparent bg-gradient-to-br from-green-50 to-green-100 rounded-3xl overflow-hidden">
              <CardContent className="p-12">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <AnimatedSection animation="fade-right" className="relative order-2 lg:order-1">
                    <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
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
                          <p className="text-sm text-green-600 mt-1">
                            Sarah viewed pricing 3x and downloaded case study
                          </p>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>

                  <AnimatedSection animation="fade-left" className="order-1 lg:order-2">
                    <h2 className="text-4xl lg:text-5xl mb-6 text-gray-900 font-semibold">Stop Guessing. Start Closing</h2>
                    <p className="text-xl mb-8 leading-relaxed text-gray-700">
                      Track every interaction. Know when prospects are ready to buy with engagement scoring and
                      real-time notifications.
                    </p>
                    <div className="space-y-4">
                      <AnimatedSection animation="fade-left" delay={100}>
                        <div className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                            <Eye className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-gray-700">Instantly see your most engaged leads</span>
                        </div>
                      </AnimatedSection>
                      <AnimatedSection animation="fade-left" delay={200}>
                        <div className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                            <BarChart3 className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-gray-700">Know which content closes deals</span>
                        </div>
                      </AnimatedSection>
                      <AnimatedSection animation="fade-left" delay={300}>
                        <div className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                            <Flame className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-gray-700">Focus your time on the hottest leads</span>
                        </div>
                      </AnimatedSection>
                    </div>
                  </AnimatedSection>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </AnimatedSection>

      {/* Demo Section */}
      <AnimatedSection animation="fade-up">
        <section className="py-20 px-6 bg-transparent">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <AnimatedSection animation="fade-up">
                <h2 className="text-4xl lg:text-5xl text-gray-900 mb-6 font-semibold">See PitchHub in Action</h2>
              </AnimatedSection>

              {/* Horizontal Scrolling Logo Demo */}
              <AnimatedSection animation="fade-up" delay={200}>
                <div className="relative overflow-hidden carousel-container">
                  <div
                    className="flex space-x-6 carousel-track"
                    style={{
                      animation: "infiniteScroll 30s linear infinite",
                    }}
                  >
                    {/* Wiser → Best Buy Demo */}
                    <div
                      className="group relative cursor-pointer transition-all duration-300 hover:scale-105 flex-shrink-0"
                      onClick={() => window.open("/demo/wiser-bestbuy.html", "_blank")}
                    >
                      <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 w-80 h-32 flex items-center justify-center">
                        <div className="flex items-center space-x-4">
                          <div className="relative">
                            <img
                              src="/images/wiser-logo.png"
                              alt="Wiser"
                              className="h-6 w-auto transition-all duration-300 group-hover:brightness-110"
                            />
                          </div>
                          <div className="text-gray-400 group-hover:text-blue-500 transition-colors duration-300">
                            <ArrowRight className="w-5 h-5" />
                          </div>
                          <div className="relative">
                            <img
                              src="/images/bestbuy-logo.png"
                              alt="Best Buy"
                              className="h-6 w-auto transition-all duration-300 group-hover:brightness-110"
                            />
                          </div>
                        </div>
                        <div className="absolute inset-0 bg-blue-500 bg-opacity-0 group-hover:bg-opacity-5 rounded-xl transition-all duration-300"></div>
                      </div>
                      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-900 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap z-10">
                        Pricing Intelligence Platform Demo
                        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                      </div>
                    </div>

                    {/* Apollo → LaunchDarkly Demo */}
                    <div
                      className="group relative cursor-pointer transition-all duration-300 hover:scale-105 flex-shrink-0"
                      onClick={() => window.open("/demo/apollo-launchdarkly.html", "_blank")}
                    >
                      <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200 w-80 h-32 flex items-center justify-center">
                        <div className="flex items-center space-x-4">
                          <div className="relative">
                            <img
                              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Apollo_logotype_OnWhite_Logo.jpg-RVG4jOVsM2WkulhYrq3noJLoHkFlhw.jpeg"
                              alt="Apollo"
                              className="h-6 w-auto transition-all duration-300 group-hover:brightness-110"
                            />
                          </div>
                          <div className="text-gray-400 group-hover:text-purple-500 transition-colors duration-300">
                            <ArrowRight className="w-5 h-5" />
                          </div>
                          <div className="relative">
                            <img
                              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ld_logolockup-pGCumnXs8DyUX1Y1CPCvs6M3EETfe6.avif"
                              alt="LaunchDarkly"
                              className="h-6 w-auto transition-all duration-300 group-hover:brightness-110"
                            />
                          </div>
                        </div>
                        <div className="absolute inset-0 bg-purple-500 bg-opacity-0 group-hover:bg-opacity-5 rounded-xl transition-all duration-300"></div>
                      </div>
                      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-900 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap z-10">
                        Feature Flag Management Demo
                        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                      </div>
                    </div>

                    {/* Fathom → Zendesk Demo */}
                    <div
                      className="group relative cursor-pointer transition-all duration-300 hover:scale-105 flex-shrink-0"
                      onClick={() => window.open("/demo/fathom-zendesk.html", "_blank")}
                    >
                      <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 w-80 h-32 flex items-center justify-center">
                        <div className="flex items-center space-x-4">
                          <div className="relative">
                            <div className="flex items-center space-x-2">
                              <div className="w-5 h-5 bg-blue-500 rounded flex items-center justify-center">
                                <div className="w-0 h-0 border-l-[4px] border-l-transparent border-b-[6px] border-b-white border-r-[4px] border-r-transparent"></div>
                              </div>
                              <span className="font-bold text-gray-900 text-sm">FATHOM</span>
                            </div>
                          </div>
                          <div className="text-gray-400 group-hover:text-blue-500 transition-colors duration-300">
                            <ArrowRight className="w-5 h-5" />
                          </div>
                          <div className="relative">
                            <div className="w-14 h-6 bg-green-600 rounded flex items-center justify-center">
                              <span className="text-white font-bold text-xs">ZENDESK</span>
                            </div>
                          </div>
                        </div>
                        <div className="absolute inset-0 bg-blue-500 bg-opacity-0 group-hover:bg-opacity-5 rounded-xl transition-all duration-300"></div>
                      </div>
                      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-900 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap z-10">
                        AI Meeting Notes for Support Demo
                        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                      </div>
                    </div>

                    {/* Linear → GitLab Demo */}
                    <div
                      className="group relative cursor-pointer transition-all duration-300 hover:scale-105 flex-shrink-0"
                      onClick={() => window.open("/demo/linear-gitlab.html", "_blank")}
                    >
                      <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200 w-80 h-32 flex items-center justify-center">
                        <div className="flex items-center space-x-4">
                          <div className="relative">
                            <div className="flex items-center space-x-2">
                              <div className="w-5 h-5 bg-gray-900 rounded flex items-center justify-center">
                                <div className="w-2 h-2 border border-white transform rotate-45"></div>
                              </div>
                              <span className="font-bold text-gray-900 text-sm">Linear</span>
                            </div>
                          </div>
                          <div className="text-gray-400 group-hover:text-purple-500 transition-colors duration-300">
                            <ArrowRight className="w-5 h-5" />
                          </div>
                          <div className="relative">
                            <div className="flex items-center space-x-2">
                              <div className="w-5 h-5 bg-orange-500 rounded flex items-center justify-center">
                                <div
                                  className="w-2 h-2 bg-white"
                                  style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
                                ></div>
                              </div>
                              <span className="font-bold text-gray-900 text-sm">GitLab</span>
                            </div>
                          </div>
                        </div>
                        <div className="absolute inset-0 bg-purple-500 bg-opacity-0 group-hover:bg-opacity-5 rounded-xl transition-all duration-300"></div>
                      </div>
                      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-900 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap z-10">
                        Issue Tracking Integration Demo
                        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                      </div>
                    </div>

                    {/* Gong → Snowflake Demo */}
                    <div
                      className="group relative cursor-pointer transition-all duration-300 hover:scale-105 flex-shrink-0"
                      onClick={() => window.open("/demo/gong-snowflake.html", "_blank")}
                    >
                      <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 w-80 h-32 flex items-center justify-center">
                        <div className="flex items-center space-x-4">
                          <div className="relative">
                            <div className="w-12 h-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded flex items-center justify-center">
                              <span className="text-white font-bold text-xs">GONG</span>
                            </div>
                          </div>
                          <div className="text-gray-400 group-hover:text-blue-500 transition-colors duration-300">
                            <ArrowRight className="w-5 h-5" />
                          </div>
                          <div className="relative">
                            <div className="flex items-center space-x-2">
                              <div className="w-5 h-5 bg-blue-500 rounded flex items-center justify-center">
                                <div className="text-white text-xs">❄</div>
                              </div>
                              <span className="font-bold text-gray-900 text-sm">Snowflake</span>
                            </div>
                          </div>
                        </div>
                        <div className="absolute inset-0 bg-blue-500 bg-opacity-0 group-hover:bg-opacity-5 rounded-xl transition-all duration-300"></div>
                      </div>
                      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-900 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap z-10">
                        Sales Analytics Platform Demo
                        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                      </div>
                    </div>

                    {/* Duplicate cards for seamless loop */}
                    <div
                      className="group relative cursor-pointer transition-all duration-300 hover:scale-105 flex-shrink-0"
                      onClick={() => window.open("/demo/wiser-bestbuy.html", "_blank")}
                    >
                      <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 w-80 h-32 flex items-center justify-center">
                        <div className="flex items-center space-x-4">
                          <div className="relative">
                            <img
                              src="/images/wiser-logo.png"
                              alt="Wiser"
                              className="h-6 w-auto transition-all duration-300 group-hover:brightness-110"
                            />
                          </div>
                          <div className="text-gray-400 group-hover:text-blue-500 transition-colors duration-300">
                            <ArrowRight className="w-5 h-5" />
                          </div>
                          <div className="relative">
                            <img
                              src="/images/bestbuy-logo.png"
                              alt="Best Buy"
                              className="h-6 w-auto transition-all duration-300 group-hover:brightness-110"
                            />
                          </div>
                        </div>
                        <div className="absolute inset-0 bg-blue-500 bg-opacity-0 group-hover:bg-opacity-5 rounded-xl transition-all duration-300"></div>
                      </div>
                    </div>

                    <div
                      className="group relative cursor-pointer transition-all duration-300 hover:scale-105 flex-shrink-0"
                      onClick={() => window.open("/demo/apollo-launchdarkly.html", "_blank")}
                    >
                      <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200 w-80 h-32 flex items-center justify-center">
                        <div className="flex items-center space-x-4">
                          <div className="relative">
                            <img
                              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Apollo_logotype_OnWhite_Logo.jpg-RVG4jOVsM2WkulhYrq3noJLoHkFlhw.jpeg"
                              alt="Apollo"
                              className="h-6 w-auto transition-all duration-300 group-hover:brightness-110"
                            />
                          </div>
                          <div className="text-gray-400 group-hover:text-purple-500 transition-colors duration-300">
                            <ArrowRight className="w-5 h-5" />
                          </div>
                          <div className="relative">
                            <img
                              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ld_logolockup-pGCumnXs8DyUX1Y1CPCvs6M3EETfe6.avif"
                              alt="LaunchDarkly"
                              className="h-6 w-auto transition-all duration-300 group-hover:brightness-110"
                            />
                          </div>
                        </div>
                        <div className="absolute inset-0 bg-purple-500 bg-opacity-0 group-hover:bg-opacity-5 rounded-xl transition-all duration-300"></div>
                      </div>
                    </div>

                    <div
                      className="group relative cursor-pointer transition-all duration-300 hover:scale-105 flex-shrink-0"
                      onClick={() => window.open("/demo/fathom-zendesk.html", "_blank")}
                    >
                      <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 w-80 h-32 flex items-center justify-center">
                        <div className="flex items-center space-x-4">
                          <div className="relative">
                            <div className="flex items-center space-x-2">
                              <div className="w-5 h-5 bg-blue-500 rounded flex items-center justify-center">
                                <div className="w-0 h-0 border-l-[4px] border-l-transparent border-b-[6px] border-b-white border-r-[4px] border-r-transparent"></div>
                              </div>
                              <span className="font-bold text-gray-900 text-sm">FATHOM</span>
                            </div>
                          </div>
                          <div className="text-gray-400 group-hover:text-blue-500 transition-colors duration-300">
                            <ArrowRight className="w-5 h-5" />
                          </div>
                          <div className="relative">
                            <div className="w-14 h-6 bg-green-600 rounded flex items-center justify-center">
                              <span className="text-white font-bold text-xs">ZENDESK</span>
                            </div>
                          </div>
                        </div>
                        <div className="absolute inset-0 bg-blue-500 bg-opacity-0 group-hover:bg-opacity-5 rounded-xl transition-all duration-300"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Who This Is For Section */}
      <AnimatedSection animation="fade-up">
        <section id="customers" className="py-20 px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <AnimatedSection animation="fade-up">
                <h2 className="text-4xl lg:text-5xl text-gray-900 mb-6 font-semibold">
                  Turn every lead into pipeline fuel
                </h2>
              </AnimatedSection>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Card 1 - Founders & Solo Marketers */}
              <AnimatedSection animation="fade-up" delay={100}>
                <Card className="border-0 transition-all duration-300 h-full bg-white">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                      <Crown className="w-8 h-8 text-gray-600" />
                    </div>
                    <h3 className="text-2xl text-gray-900 mb-4 font-semibold">Founder-Sellers & Solo Marketers</h3>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      Look enterprise-grade without the headcount. One click to help you sell while focus on building
                      the product.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Win deals without a design team</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Go from pitch to live link in 60 seconds</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Generate more pipeline, not busywork</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* Card 2 - Agencies */}
              <AnimatedSection animation="fade-up" delay={200}>
                <Card className="border-0 transition-all duration-300 h-full bg-white">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                      <Briefcase className="w-8 h-8 text-gray-600" />
                    </div>
                    <h3 className="text-2xl text-gray-900 mb-4 font-semibold">Demand-Generation Agencies</h3>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      Prove your value deeper in the funnel and make yourself indispensable to your clients.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Move from lead-gen to revenue-gen</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Showcase client results with tangible assets</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Increase retention and command higher retainers</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* Card 3 - Sales Leaders */}
              <AnimatedSection animation="fade-up" delay={300}>
                <Card className="border-0 transition-all duration-300 h-full bg-white">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                      <Target className="w-8 h-8 text-gray-600" />
                    </div>
                    <h3 className="text-2xl text-gray-900 mb-4 font-semibold">Mid-Market Sales Leaders</h3>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      PitchHub kills "personalization tax," auto-building brand-perfect pitches so the team works
                      pipeline, not PowerPoint.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Maximize rep productivity and pipeline velocity</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Eliminate off-brand messaging that kills deals</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Out-run bigger competitors with sheer speed</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Pricing Section */}
<AnimatedSection animation="fade-up">
  <section id="pricing" className="py-20 px-6 bg-gray-50">
    <div className="container mx-auto max-w-6xl">
      <div className="text-center mb-16">
        <AnimatedSection animation="fade-up">
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-6 font-semibold">Simple, transparent pricing</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to turn leads into pipeline. No hidden fees, no seat limits.
          </p>
        </AnimatedSection>
      </div>

      <div className="flex justify-center mb-16">
        <AnimatedSection animation="scale" delay={100}>
          <Card className="border-2 border-blue-500 relative max-w-5xl w-full bg-white rounded-2xl overflow-hidden">
            <div className="absolute -top-4 left-8">
              <Badge className="bg-blue-500 text-white px-6 py-2 text-sm font-semibold">Limited Time</Badge>
            </div>
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-3 gap-0">
                {/* Left Column - Pricing */}
                <div className="p-8 lg:p-12 bg-gradient-to-br from-blue-50 to-purple-50">
                  <div className="text-center lg:text-left">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">All in One</h3>
                    <p className="text-gray-600 mb-8">For ambitious sales teams</p>
                    
                    <div className="mb-8">
                      <div className="flex items-baseline justify-center lg:justify-start space-x-2">
                        <span className="text-6xl font-bold text-gray-900">$20</span>
                        <span className="text-2xl text-gray-400 line-through">$50</span>
                        <span className="text-gray-600">/monthly</span>
                      </div>
                    </div>

                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg font-semibold rounded-xl mb-6">
                      Get Started for Free →
                    </Button>
                    
                    <div className="text-center lg:text-left">
                      <span className="font-semibold text-gray-900">Cancel anytime.</span>
                      <span className="text-gray-600"> No questions asked!</span>
                    </div>
                  </div>
                </div>

                {/* Middle Column - Core Features */}
                <div className="p-8 lg:p-12 border-l border-r border-gray-100">
                  <h4 className="text-xl font-bold text-gray-900 mb-6">What's included:</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                        <CheckCircle className="w-3 h-3 text-blue-600" />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900">Unlimited Personalized Pitches</span>
                        <span className="text-gray-600"> generated and published on auto-pilot</span>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                        <CheckCircle className="w-3 h-3 text-blue-600" />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900">Auto Lead Enrichment</span>
                        <span className="text-gray-600"> made for you hands-free</span>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                        <CheckCircle className="w-3 h-3 text-blue-600" />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900">Smart Analytics</span>
                        <span className="text-gray-600"> built for you on auto-pilot through our </span> 
                        <span className="text-blue-600 underline">Intent Scoring</span>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                        <CheckCircle className="w-3 h-3 text-blue-600" />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900">Real-time Notifications</span>
                        <span className="text-gray-600"> integrated into your workflow</span>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                        <CheckCircle className="w-3 h-3 text-blue-600" />
                      </div>
                      <span className="text-gray-900">Unlimited AI Content Generation</span>
                    </li>
                  </ul>
                </div>

                {/* Right Column - Advanced Features */}
                <div className="p-8 lg:p-12">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center mt-0.5">
                        <CheckCircle className="w-3 h-3 text-purple-600" />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900">Unlimited Users</span>
                        <span className="text-gray-600"> in your Organization</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center mt-0.5">
                        <CheckCircle className="w-3 h-3 text-purple-600" />
                      </div>
                      <div>
                        <span className="text-gray-900">Integrates with HubSpot, Salesforce, Slack and many </span> 
                        <span className="text-purple-600 underline">other platforms</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center mt-0.5">
                        <CheckCircle className="w-3 h-3 text-purple-600" />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900">AI Brand Assets</span>
                        <span className="text-gray-600"> generated in different styles</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center mt-0.5">
                        <CheckCircle className="w-3 h-3 text-purple-600" />
                      </div>
                      <span className="text-gray-900">Pitches generated for 150+ industries</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center mt-0.5">
                        <CheckCircle className="w-3 h-3 text-purple-600" />
                      </div>
                      <span className="text-gray-900">Custom Features requests</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </div>
  </section>
</AnimatedSection>

      {/* Customer Testimonials */}
      {/*
      <AnimatedSection animation="fade-up">
        <section id="customers" className="py-20 px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <AnimatedSection animation="fade-up">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  What our customers say about us...
                </h2>
              </AnimatedSection>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <AnimatedSection animation="fade-right">
                <Card className="border-0 bg-gradient-to-br from-purple-600 to-purple-700 text-white">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <blockquote className="text-lg leading-relaxed mb-6">
                      "We built three tailored pages before our weekly stand-up and booked two demos the same afternoon.
                      The personalization is incredible and our prospects actually engage now."
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
              </AnimatedSection>

              <AnimatedSection animation="fade-left">
                <Card className="border-0 bg-gradient-to-br from-green-600 to-green-700 text-white">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <blockquote className="text-lg leading-relaxed mb-6">
                      "The brand extraction nailed our palette on the first try. Design didn't have to touch a thing.
                      Our sales team can now create professional microsites without any design resources."
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
              </AnimatedSection>
            </div>
          </div>
        </section>
      </AnimatedSection>
      */}

      {/* Final CTA */}
      <AnimatedSection animation="fade-up">
        <section className="py-20 px-6 bg-gradient-to-r from-gray-900 to-black text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <AnimatedSection animation="fade-up">
              <h2 className="text-4xl lg:text-5xl mb-6 font-semibold">Ready to turn every lead into pipeline fuel?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join sales teams who've ditched generic outreach for AI-powered personalization. Create your first pitch
                in under 60 seconds.
              </p>
            </AnimatedSection>
            <AnimatedSection animation="scale" delay={200}>
              <Button
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-6 rounded-xl"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Create Personalized Pitch for free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </AnimatedSection>
          </div>
        </section>
      </AnimatedSection>

      {/* Footer */}
      <AnimatedSection animation="fade-up">
        <footer className="bg-white border-t border-gray-200 py-12 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-6">
              <AnimatedSection animation="fade-up" delay={100}>
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">P</span>
                  </div>
                  <span className="text-xl font-bold text-gray-900">PitchHub</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed max-w-md mx-auto">
                  Transform leads into personalized microsites in under 3 minutes.
                </p>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={200}>
                <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
                  <a href="#" className="hover:text-gray-900">
                    Terms of Service
                  </a>
                  <a href="#" className="hover:text-gray-900">
                    Privacy Policy
                  </a>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={300}>
                <div className="text-sm text-gray-500">Copyright © 2025 PitchHub. All rights reserved.</div>
              </AnimatedSection>
            </div>
          </div>
        </footer>
      </AnimatedSection>
    </div>
  )
}
