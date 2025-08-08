"use client"

import type React from "react"
import { Crown } from 'lucide-react' // Import Crown component

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/animated-section"
import { CheckCircle, ArrowRight, Zap, Palette, Upload, Eye, TrendingUp, FileText, User, Users, Play, Link, Flame, BarChart3, Target, Briefcase } from 'lucide-react'

export default function PitchHubLanding() {
  const [dynamicText, setDynamicText] = useState("qualify")
  const [textKey, setTextKey] = useState(0)

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
              <h2 className="text-2xl lg:text-3xl text-gray-900 font-semibold mb-2">
                Make Personalization Your #{'1'} Revenue Channel
              </h2>
            </AnimatedSection>

            {/* Lead Capture Form - Centered */}
            <AnimatedSection animation="scale" delay={300}>
              <div className="flex flex-col items-center gap-3">
                <Button
                  size="lg"
                  className="bg-black hover:bg-gray-900 text-white text-lg px-8 py-6 rounded-xl"
                >
                  Generate Your First Winning Pitch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <p className="text-sm text-gray-500">
                  Free. AI-powered. Takes 60 seconds.
                </p>
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
                      className="group relative cursor-pointer transition-transform duration-300 hover:scale-[1.03] flex-shrink-0"
                      onClick={() => window.open("/demo/wiser-bestbuy.html", "_blank")}
                    >
                      <Card className="w-80 h-32 rounded-lg border border-gray-200 shadow-sm">
                        <CardContent className="h-full p-6 flex items-center justify-center">
                          <div className="flex items-center space-x-4">
                            <img src="/images/wiser-logo.png" alt="Wiser" className="h-6 w-auto" />
                            <ArrowRight className="w-5 h-5 text-gray-400" />
                            <img src="/images/bestbuy-logo.png" alt="Best Buy" className="h-6 w-auto" />
                          </div>
                        </CardContent>
                      </Card>
                      <div className="pointer-events-none absolute inset-0 rounded-lg bg-black/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white text-sm font-medium">View demo</span>
                      </div>
                    </div>

                    {/* Apollo → LaunchDarkly Demo */}
                    <div
                      className="group relative cursor-pointer transition-transform duration-300 hover:scale-[1.03] flex-shrink-0"
                      onClick={() => window.open("/demo/apollo-launchdarkly.html", "_blank")}
                    >
                      <Card className="w-80 h-32 rounded-lg border border-gray-200 shadow-sm">
                        <CardContent className="h-full p-6 flex items-center justify-center">
                          <div className="flex items-center space-x-4">
                            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Apollo_logotype_OnWhite_Logo.jpg-RVG4jOVsM2WkulhYrq3noJLoHkFlhw.jpeg" alt="Apollo" className="h-6 w-auto" />
                            <ArrowRight className="w-5 h-5 text-gray-400" />
                            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ld_logolockup-pGCumnXs8DyUX1Y1CPCvs6M3EETfe6.avif" alt="LaunchDarkly" className="h-6 w-auto" />
                          </div>
                        </CardContent>
                      </Card>
                      <div className="pointer-events-none absolute inset-0 rounded-lg bg-black/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white text-sm font-medium">View demo</span>
                      </div>
                    </div>

                    {/* Fathom → Zendesk Demo */}
                    <div
                      className="group relative cursor-pointer transition-transform duration-300 hover:scale-[1.03] flex-shrink-0"
                      onClick={() => window.open("/demo/fathom-zendesk.html", "_blank")}
                    >
                      <Card className="w-80 h-32 rounded-lg border border-gray-200 shadow-sm">
                        <CardContent className="h-full p-6 flex items-center justify-center">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                              <div className="w-5 h-5 bg-blue-500 rounded flex items-center justify-center">
                                <div className="w-0 h-0 border-l-[4px] border-l-transparent border-b-[6px] border-b-white border-r-[4px] border-r-transparent"></div>
                              </div>
                              <span className="font-bold text-gray-900 text-sm">FATHOM</span>
                            </div>
                            <ArrowRight className="w-5 h-5 text-gray-400" />
                            <div className="w-14 h-6 bg-green-600 rounded flex items-center justify-center">
                              <span className="text-white font-bold text-xs">ZENDESK</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      <div className="pointer-events-none absolute inset-0 rounded-lg bg-black/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white text-sm font-medium">View demo</span>
                      </div>
                    </div>

                    {/* Linear → GitLab Demo */}
                    <div
                      className="group relative cursor-pointer transition-transform duration-300 hover:scale-[1.03] flex-shrink-0"
                      onClick={() => window.open("/demo/linear-gitlab.html", "_blank")}
                    >
                      <Card className="w-80 h-32 rounded-lg border border-gray-200 shadow-sm">
                        <CardContent className="h-full p-6 flex items-center justify-center">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                              <div className="w-5 h-5 bg-gray-900 rounded flex items-center justify-center">
                                <div className="w-2 h-2 border border-white transform rotate-45"></div>
                              </div>
                              <span className="font-bold text-gray-900 text-sm">Linear</span>
                            </div>
                            <ArrowRight className="w-5 h-5 text-gray-400" />
                            <div className="flex items-center space-x-2">
                              <div className="w-5 h-5 bg-orange-500 rounded flex items-center justify-center">
                                <div className="w-2 h-2 bg-white" style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}></div>
                              </div>
                              <span className="font-bold text-gray-900 text-sm">GitLab</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      <div className="pointer-events-none absolute inset-0 rounded-lg bg-black/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white text-sm font-medium">View demo</span>
                      </div>
                    </div>

                    {/* Gong → Snowflake Demo */}
                    <div
                      className="group relative cursor-pointer transition-transform duration-300 hover:scale-[1.03] flex-shrink-0"
                      onClick={() => window.open("/demo/gong-snowflake.html", "_blank")}
                    >
                      <Card className="w-80 h-32 rounded-lg border border-gray-200 shadow-sm">
                        <CardContent className="h-full p-6 flex items-center justify-center">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded flex items-center justify-center">
                              <span className="text-white font-bold text-xs">GONG</span>
                            </div>
                            <ArrowRight className="w-5 h-5 text-gray-400" />
                            <div className="flex items-center space-x-2">
                              <div className="w-5 h-5 bg-blue-500 rounded flex items-center justify-center">
                                <div className="text-white text-xs">❄</div>
                              </div>
                              <span className="font-bold text-gray-900 text-sm">Snowflake</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      <div className="pointer-events-none absolute inset-0 rounded-lg bg-black/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white text-sm font-medium">View demo</span>
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
        <section id="pricing" className="py-20 px-6 bg-white">
          <div className="container mx-auto max-w-7xl">
            {/* Pricing header removed per design */}

            <div className="max-w-4xl mx-auto">
              <AnimatedSection animation="fade-up" delay={100}>
                <Card className="border-0 bg-white">
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-2 gap-8">
                      {/* Left Section - Pricing and CTA */}
                      <div className="space-y-6">
                        <div className="flex items-start justify-between">
                          <h3 className="text-3xl font-bold text-gray-900">All in One</h3>
                          <Badge className="bg-gray-100 text-gray-700 px-3 py-1 text-sm font-medium">
                            to power you revenue ambitions
                          </Badge>
                        </div>
                        
                        <div className="flex items-baseline space-x-3">
                          <div className="text-4xl font-bold text-gray-900">$99</div>
                          <div className="text-lg text-gray-400 line-through">$200 /monthly</div>
                        </div>
                        
                        <Button className="w-full bg-black hover:bg-gray-900 text-white py-3 text-lg font-medium">
                          Get Started for Free
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                        
                        <p className="text-sm text-gray-700">Cancel anytime. No questions asked!</p>
                      </div>
                      
                      {/* Right Section - Features */}
                      <div className="space-y-4">
                        <h4 className="text-lg font-bold text-gray-900">What's included:</h4>
                        <div className="grid grid-cols-1 gap-3">
                          <div className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">30 Articles a month generated and published on auto-pilot</span>
                          </div>
                          <div className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Auto Keyword Research made for you hands-free</span>
                          </div>
                          <div className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">High DR Backlinks built for you on auto-pilot through our <span className="text-blue-600">Backlink Exchange</span></span>
                          </div>
                          <div className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Relevant YouTube videos integrated into articles</span>
                          </div>
                          <div className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Unlimited AI Rewrites</span>
                          </div>
                          <div className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Unlimited Users in your Organization</span>
                          </div>
                          <div className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Integrates with WordPress, Webflow, Shopify, Framer and many <span className="text-blue-600">other platforms</span></span>
                          </div>
                          <div className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">AI Images generated in different styles</span>
                          </div>
                          <div className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Articles generated in 150+ languages</span>
                          </div>
                          <div className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Custom Features requests</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>

            {/* Trial and contact text removed per design */}

            {/* FAQ removed per design */}
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
