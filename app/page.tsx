"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/animated-section"
import {
  CheckCircle,
  ArrowRight,
  Zap,
  Palette,
  Upload,
  Eye,
  TrendingUp,
  FileText,
  User,
  Users,
  Play,
  Link,
  Flame,
  BarChart3,
} from "lucide-react"

export default function PitchFabricLanding() {
  // Dynamic hero text
  const [dynamicText, setDynamicText] = useState("qualify")
  const [textKey, setTextKey] = useState(0)

  // Demo carousel (placeholder state; animation via CSS elsewhere)
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = 5

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const words = ["qualify", "convert", "close"]
    let currentIndex = 0
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % words.length
      setDynamicText(words[currentIndex])
      setTextKey((prev) => prev + 1)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg overflow-hidden">
              <img src="/logo.svg" alt="PitchFabric" className="w-8 h-8" />
            </div>
            <span className="text-xl font-bold text-gray-900">PitchFabric</span>
          </div>
          <nav className="flex items-center space-x-4" aria-label="primary">
            <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
              Sign in
            </Button>
            <Button className="bg-gray-900 hover:bg-gray-800 text-white">Create My Pitch</Button>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="px-6 bg-white py-14">
        <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12 lg:mb-16">
            <AnimatedSection animation="fade-up">
                <h1 className="font-bold text-gray-900 tracking-tight leading-tight text-5xl md:text-6xl lg:text-7xl mb-6">
                  <span className="block mb-1.5 font-semibold">
                  Go to market with{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    a personalized pitch
                    </span>{" "}
                    and the ability to
                  </span>
                  <span
                  className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent transition-all duration-500 h-[1.2em] flex items-center justify-center"
                  style={{ fontVariantNumeric: "tabular-nums" }}
                >
                  <span
                    key={textKey}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-in fade-in-0 slide-in-from-bottom-4 duration-300 font-semibold"
                  >
                    {dynamicText}
                  </span>
                  </span>
              </h1>
            </AnimatedSection>

              

              <AnimatedSection animation="scale" delay={250}>
                <div className="mt-6 flex flex-col items-center gap-3">
                  <motion.div
                    whileHover={{ y: -2, scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    transition={{ type: "spring", stiffness: 350, damping: 24 }}
                  >
                        <Button
                      size="lg"
                      className="group bg-black hover:bg-gray-900 text-white rounded-xl px-8 py-6 text-base md:text-lg"
                        >
                      Generate Your First Winning Pitch
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1.5" />
                        </Button>
                  </motion.div>
                  <p className="text-sm text-gray-500">Free. AI-powered. Takes 60 seconds.</p>
                      </div>
              </AnimatedSection>
                              </div>
                            </div>
        </section>

        {/* Problem → Solution */}
        <AnimatedSection animation="fade-up">
          <section className="bg-white px-6 md:px-8 py-16 md:py-24 lg:py-28">
            <div className="container mx-auto max-w-7xl">
              <div className="relative text-center mb-8 md:mb-12">
                <h2 className="text-gray-900 font-semibold tracking-tight text-3xl md:text-4xl lg:text-5xl">
                  Your problem — Our solution
                </h2>
                <img
                  src="/svgs/curved-arrow-left.svg"
                  alt="arrow pointing to problem"
                  className="hidden lg:block absolute left-1/4 -translate-x-1/2 top-14 w-16 md:w-20"
                />
                <img
                  src="/svgs/curved-arrow-right.svg"
                  alt="arrow pointing to solution"
                  className="hidden lg:block absolute right-1/4 translate-x-1/2 top-14 w-16 md:w-20"
                          />
                        </div>

              <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-stretch">
                                {/* Problems */}
                <div className="h-full space-y-3 md:space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full border-4 border-gray-200 overflow-hidden flex-shrink-0">
                      <img 
                        src="/images/avatar-1.jpg" 
                        alt="User avatar" 
                        className="w-full h-full object-cover"
                          />
                        </div>
                    <div className="bg-white rounded-xl rounded-tl-none border border-[#E6EAF2] shadow-[0_1px_2px_rgba(16,24,40,0.06),_0_8px_24px_rgba(16,24,40,0.04)] p-4 md:p-5 text-left flex-1">
                      <p className="text-gray-700 text-base md:text-lg leading-snug">
                        Reps <span className="text-red-500">manually research Leads</span> to understand their pains, losing hours of selling time before the first email.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full border-4 border-gray-200 overflow-hidden flex-shrink-0">
                      <img 
                        src="/images/avatar-2.jpg" 
                        alt="User avatar" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="bg-white rounded-xl rounded-tl-none border border-[#E6EAF2] shadow-[0_1px_2px_rgba(16,24,40,0.06),_0_8px_24px_rgba(16,24,40,0.04)] p-4 md:p-5 text-left flex-1">
                      <p className="text-gray-700 text-base md:text-lg leading-snug">
                        <span className="text-red-500">Manually stitching decks</span> and logos turns into tedious busywork.
                      </p>
                    </div>
                  </div>
                  {/* Removed card: "Marketing content scattered across different tools, follow‑ups go off‑brand." */}
                  {/* Problem 4 */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full border-4 border-gray-200 overflow-hidden flex-shrink-0">
                      <img
                        src="/images/avatar-4.jpg"
                        alt="User avatar"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="bg-white rounded-xl rounded-tl-none border border-[#E6EAF2] shadow-[0_1px_2px_rgba(16,24,40,0.06),_0_8px_24px_rgba(16,24,40,0.04)] p-4 md:p-5 text-left flex-1">
                      <p className="text-gray-700 text-base md:text-lg leading-snug">
                        Static <span className="text-red-500">pitch lacks interactivity</span> and clear calls‑to‑action, so buyers <span className="text-red-500">bounce before they can engage</span>.
                      </p>
                    </div>
                  </div>
                        </div>

                {/* Solution */}
                        <div className="h-full">
                  <div className="h-full flex flex-col bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl border border-[#E6EAF2] shadow-[0_1px_2px_rgba(16,24,40,0.06),_0_8px_24px_rgba(16,24,40,0.04)] p-5 md:p-6">
                    <div className="flex items-center space-x-3 mb-3 md:mb-4">
                      <img src="/logo-mark.svg" alt="PitchFabric logo" className="w-9 h-9 md:w-10 md:h-10" />
                      <span className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        PitchFabric
                      </span>
                          </div>
                    <h4 className="text-gray-900 font-semibold text-xl md:text-2xl mb-3 md:mb-4">
                      Make Personalization Your #1 Revenue Channel
                    </h4>
                    <div className="space-y-3">
                      {[
                        "Lead and product research done for you.",
                        "Leads' pain points map to your solution.",
                        "On brand, responsive pitch built in seconds.",
                        "Scale personalization like never before!",
                      ].map((item, i) => (
                        <div key={i} className="flex items-center space-x-3">
                          <div className="w-5 h-5 bg-purple-600/10 rounded-full flex items-center justify-center">
                            <div className="w-2.5 h-2.5 bg-purple-600 rounded-full" />
                          </div>
                          <span className={`text-base md:text-lg ${i === 3 ? 'text-purple-700 font-semibold' : 'text-gray-800'}`}>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
          </div>
        </div>
      </section>
        </AnimatedSection>

        {/* Feature Section — Purple */}
      <AnimatedSection animation="fade-up">
          <section className="px-6 bg-white py-12 md:py-16">
          <div className="container mx-auto max-w-7xl">
            <Card className="border-transparent bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl overflow-hidden">
                <CardContent className="p-6 md:p-10 lg:p-12">
                  <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                  <AnimatedSection animation="fade-right" className="order-2 lg:order-1 relative">
                      <div className="bg-white rounded-2xl shadow-xl p-5 md:p-6 border border-gray-100">
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
                      <h2 className="text-gray-900 font-semibold tracking-tight text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6">
                      Unlock the Revenue in Your Existing Collateral
                    </h2>
                      <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                      Our AI mines your Website, PDFs, decks, and case studies, extracting the most relevant points to
                        build a compelling, personalized narrative for each lead.
                    </p>
                      <div className="space-y-3 md:space-y-4">
                      <AnimatedSection animation="fade-left" delay={100}>
                        <div className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                            <Palette className="w-4 h-4 text-white" />
                          </div>
                            <span className="text-gray-700 text-base md:text-lg">
                              Automatic brand color and font detection
                            </span>
                        </div>
                      </AnimatedSection>
                      <AnimatedSection animation="fade-left" delay={200}>
                        <div className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                            <Users className="w-4 h-4 text-white" />
                          </div>
                            <span className="text-gray-700 text-base md:text-lg">AI-powered lead enrichment</span>
                        </div>
                      </AnimatedSection>
                      <AnimatedSection animation="fade-left" delay={300}>
                        <div className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                            <Zap className="w-4 h-4 text-white" />
                          </div>
                            <span className="text-gray-700 text-base md:text-lg">
                              Winning message extraction and optimization
                            </span>
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

        {/* Feature Section — Blue */}
      <AnimatedSection animation="fade-up">
          <section className="px-6 bg-white py-12 md:py-px">
          <div className="container mx-auto max-w-7xl">
            <Card className="border-transparent bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl overflow-hidden">
                <CardContent className="p-6 md:p-10 lg:p-12">
                  <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                  <AnimatedSection animation="fade-right">
                      <h2 className="text-gray-900 font-semibold tracking-tight text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6">
                      Book 3× more demos with personalized pitches
                    </h2>
                      <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                        Our AI blends enriched lead with your content to create an on-brand responsive pitch — giving
                        you a better chance to convert.
                      </p>
                      <div className="space-y-3 md:space-y-4">
                      <AnimatedSection animation="fade-right" delay={100}>
                        <div className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                            <User className="w-4 h-4 text-white" />
                          </div>
                            <span className="text-gray-700 text-base md:text-lg">
                              Give every prospect a 1:1 experience
                            </span>
                        </div>
                      </AnimatedSection>
                      <AnimatedSection animation="fade-right" delay={200}>
                        <div className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                            <Play className="w-4 h-4 text-white" />
                          </div>
                            <span className="text-gray-700 text-base md:text-lg">
                              Let buyers engage with interactive content
                            </span>
                        </div>
                      </AnimatedSection>
                      <AnimatedSection animation="fade-right" delay={300}>
                        <div className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                            <Link className="w-4 h-4 text-white" />
                          </div>
                            <span className="text-gray-700 text-base md:text-lg">
                              Replace messy PDFs, decks with one smart link
                            </span>
                        </div>
                      </AnimatedSection>
                    </div>
                  </AnimatedSection>

                  <AnimatedSection animation="fade-left" className="relative">
                      <div className="bg-white rounded-2xl shadow-xl p-5 md:p-6 border border-gray-100 relative overflow-hidden">
                        <div className="bg-gray-50 rounded-lg p-3 md:p-4 mb-4 flex items-center space-x-3">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                          <span className="text-xs md:text-sm text-gray-500 font-mono ml-2 md:ml-4">
                            pitchfabric.app/acme-corp
                          </span>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-blue-600 rounded-lg" aria-hidden="true" />
                            <span className="font-semibold text-gray-900 text-base md:text-lg">Acme Corp</span>
                        </div>
                          <h3 className="text-gray-900 font-semibold text-xl md:text-2xl">
                          Hi Sarah, here's how we can help Acme Corp scale faster
                        </h3>
                          <p className="text-gray-600 text-sm md:text-base">
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
                          <div className="text-gray-500 text-xs md:text-sm">Continue reading to learn more...</div>
                        </div>
                      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
                    </div>
                  </AnimatedSection>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </AnimatedSection>

        {/* Feature Section — Green */}
      <AnimatedSection animation="fade-up">
          <section className="px-6 bg-white py-12 md:py-16">
          <div className="container mx-auto max-w-7xl">
            <Card className="border-transparent bg-gradient-to-br from-green-50 to-green-100 rounded-3xl overflow-hidden">
                <CardContent className="p-6 md:p-10 lg:p-12">
                  <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                  <AnimatedSection animation="fade-right" className="relative order-2 lg:order-1">
                      <div className="bg-white rounded-2xl shadow-xl p-5 md:p-6 border border-gray-100">
                      <div className="space-y-4">
                          <div className="flex items-center justify-between mb-2 md:mb-4">
                            <h3 className="text-gray-900 font-semibold text-lg md:text-xl">Engagement Analytics</h3>
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
                      <h2 className="text-gray-900 font-semibold tracking-tight text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6">
                        Stop Guessing. Start Closing
                      </h2>
                      <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                      Track every interaction. Know when prospects are ready to buy with engagement scoring and
                      real-time notifications.
                    </p>
                      <div className="space-y-3 md:space-y-4">
                      <AnimatedSection animation="fade-left" delay={100}>
                        <div className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                            <Eye className="w-4 h-4 text-white" />
                          </div>
                            <span className="text-gray-700 text-base md:text-lg">
                              Instantly see your most engaged leads
                            </span>
                        </div>
                      </AnimatedSection>
                      <AnimatedSection animation="fade-left" delay={200}>
                        <div className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                            <BarChart3 className="w-4 h-4 text-white" />
                          </div>
                            <span className="text-gray-700 text-base md:text-lg">Know which content closes deals</span>
                        </div>
                      </AnimatedSection>
                      <AnimatedSection animation="fade-left" delay={300}>
                        <div className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                            <Flame className="w-4 h-4 text-white" />
                          </div>
                            <span className="text-gray-700 text-base md:text-lg">
                              Focus your time on the hottest leads
                            </span>
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
          <section className="py-16 md:py-20 px-6 bg-transparent">
            <div className="container mx-auto max-w-7xl">
              <div className="text-center mb-10 md:mb-16">
              <AnimatedSection animation="fade-up">
                  <h2 className="text-gray-900 font-semibold tracking-tight text-3xl md:text-4xl lg:text-5xl">
                    See PitchFabric in Action
                  </h2>
              </AnimatedSection>
              </div>

              <AnimatedSection animation="fade-up" delay={200}>
                <div className="relative overflow-hidden carousel-container">
                  <div
                    className="flex space-x-6 carousel-track"
                    style={{ animation: "infiniteScroll 30s linear infinite" }}
                  >
                    {/* Wiser → Best Buy */}
                    <DemoCard
                      leftImg="/images/wiser-logo.png"
                      rightImg="/images/bestbuy-logo.png"
                      leftAlt="Wiser"
                      rightAlt="Best Buy"
                      href="/demo/wiser-bestbuy.html"
                    />
                    {/* Apollo → LaunchDarkly */}
                    <DemoCard
                      leftImg="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Apollo_logotype_OnWhite_Logo.jpg-RVG4jOVsM2WkulhYrq3noJLoHkFlhw.jpeg"
                      rightImg="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ld_logolockup-pGCumnXs8DyUX1Y1CPCvs6M3EETfe6.avif"
                      leftAlt="Apollo"
                      rightAlt="LaunchDarkly"
                      href="/demo/apollo-launchdarkly.html"
                    />
                    {/* Fathom → Zendesk */}
                    <DemoCard
                      customLeft={
                            <div className="flex items-center space-x-2">
                              <div className="w-5 h-5 bg-blue-500 rounded flex items-center justify-center">
                                <div className="w-0 h-0 border-l-[4px] border-l-transparent border-b-[6px] border-b-white border-r-[4px] border-r-transparent"></div>
                              </div>
                              <span className="font-bold text-gray-900 text-sm">FATHOM</span>
                            </div>
                      }
                      customRight={
                            <div className="w-14 h-6 bg-green-600 rounded flex items-center justify-center">
                              <span className="text-white font-bold text-xs">ZENDESK</span>
                            </div>
                      }
                      href="/demo/fathom-zendesk.html"
                    />
                    {/* Linear → GitLab */}
                    <DemoCard
                      customLeft={
                            <div className="flex items-center space-x-2">
                              <div className="w-5 h-5 bg-gray-900 rounded flex items-center justify-center">
                                <div className="w-2 h-2 border border-white transform rotate-45"></div>
                              </div>
                              <span className="font-bold text-gray-900 text-sm">Linear</span>
                            </div>
                      }
                      customRight={
                            <div className="flex items-center space-x-2">
                              <div className="w-5 h-5 bg-orange-500 rounded flex items-center justify-center">
                                <div
                                  className="w-2 h-2 bg-white"
                                  style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
                            />
                              </div>
                              <span className="font-bold text-gray-900 text-sm">GitLab</span>
                            </div>
                      }
                      href="/demo/linear-gitlab.html"
                    />
                    {/* Gong → Snowflake */}
                    <DemoCard
                      customLeft={
                            <div className="w-12 h-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded flex items-center justify-center">
                              <span className="text-white font-bold text-xs">GONG</span>
                            </div>
                      }
                      customRight={
                            <div className="flex items-center space-x-2">
                              <div className="w-5 h-5 bg-blue-500 rounded flex items-center justify-center">
                                <div className="text-white text-xs">❄</div>
                              </div>
                              <span className="font-bold text-gray-900 text-sm">Snowflake</span>
                            </div>
                      }
                      href="/demo/gong-snowflake.html"
                    />
                    {/* Duplicates for seamless loop */}
                    <DemoCard
                      leftImg="/images/wiser-logo.png"
                      rightImg="/images/bestbuy-logo.png"
                      leftAlt="Wiser"
                      rightAlt="Best Buy"
                      href="/demo/wiser-bestbuy.html"
                    />
                    <DemoCard
                      leftImg="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Apollo_logotype_OnWhite_Logo.jpg-RVG4jOVsM2WkulhYrq3noJLoHkFlhw.jpeg"
                      rightImg="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ld_logolockup-pGCumnXs8DyUX1Y1CPCvs6M3EETfe6.avif"
                      leftAlt="Apollo"
                      rightAlt="LaunchDarkly"
                      href="/demo/apollo-launchdarkly.html"
                    />
                    <DemoCard
                      customLeft={
                            <div className="flex items-center space-x-2">
                              <div className="w-5 h-5 bg-blue-500 rounded flex items-center justify-center">
                                <div className="w-0 h-0 border-l-[4px] border-l-transparent border-b-[6px] border-b-white border-r-[4px] border-r-transparent"></div>
                              </div>
                              <span className="font-bold text-gray-900 text-sm">FATHOM</span>
                            </div>
                      }
                      customRight={
                            <div className="w-14 h-6 bg-green-600 rounded flex items-center justify-center">
                              <span className="text-white font-bold text-xs">ZENDESK</span>
                            </div>
                      }
                      href="/demo/fathom-zendesk.html"
                    />
                  </div>
                </div>
              </AnimatedSection>
          </div>
        </section>
      </AnimatedSection>

        {/* Who This Is For */}
      <AnimatedSection animation="fade-up">
          <section id="customers" className="px-6 bg-white py-12 md:py-16">
            <div className="container mx-auto max-w-7xl">
              <div className="text-center mb-10 md:mb-16">
              <AnimatedSection animation="fade-up">
                  <h2 className="text-gray-900 font-semibold tracking-tight text-3xl md:text-4xl lg:text-5xl">
                  Turn every lead into pipeline fuel
                </h2>
              </AnimatedSection>
            </div>

              <div className="grid lg:grid-cols-3 gap-7 lg:gap-10">
                {[
                  {
                    title: "Founder-Sellers & Solo Marketers",
                    body: "Look enterprise-grade without the headcount. One click to help you sell while focusing on building the product.",
                    bullets: [
                      "Win deals without a design team",
                      "Go from pitch to live link in 60 seconds",
                      "Generate more pipeline, not busywork",
                    ],
                  },
                  {
                    title: "Demand-Generation Agencies",
                    body: "Prove your value deeper in the funnel and make yourself indispensable to your clients.",
                    bullets: [
                      "Move from lead-gen to revenue-gen",
                      "Showcase client results with tangible assets",
                      "Increase retention and command higher retainers",
                    ],
                  },
                  {
                    title: "Mid-Market Sales Leaders",
                    body: 'PitchFabric kills "personalization tax," auto‑building brand‑perfect pitches so the team works pipeline, not PowerPoint.',
                    bullets: [
                      "Maximize rep productivity and pipeline velocity",
                      "Eliminate off-brand messaging that kills deals",
                      "Out-run bigger competitors with sheer speed",
                    ],
                  },
                ].map((card, idx) => (
                  <AnimatedSection key={idx} animation="fade-up" delay={(idx + 1) * 100}>
                    <Card className="h-full bg-white rounded-xl border border-[#E6EAF2] shadow-[0_1px_2px_rgba(16,24,40,0.06),_0_8px_24px_rgba(16,24,40,0.04)] transition-all duration-300 transform-gpu hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(16,24,40,0.08)]">
                  <CardContent className="p-8">
                        <h3 className="text-gray-900 font-semibold text-2xl md:text-3xl mb-3">{card.title}</h3>
                        <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-5">{card.body}</p>
                        <div className="space-y-3">
                          {card.bullets.map((b, i) => (
                            <div key={i} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700 text-base">{b}</span>
                      </div>
                          ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
                ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

                 {/* Pricing */}
      <AnimatedSection animation="fade-up">
           <section id="pricing" className="py-12 md:py-16 px-6 bg-white">
          <div className="container mx-auto max-w-7xl">
               <div className="text-center mb-10 md:mb-16">
              <AnimatedSection animation="fade-up">
                   <h2 className="text-gray-900 font-semibold tracking-tight text-3xl md:text-4xl lg:text-5xl">
                     Make Personalization Your #1 Revenue Channel
                   </h2>
              </AnimatedSection>
            </div>
              <AnimatedSection animation="fade-up" delay={100}>
                <Card className="bg-white rounded-xl border border-[#E6EAF2] shadow-[0_1px_2px_rgba(16,24,40,0.06),_0_8px_24px_rgba(16,24,40,0.04)] transition-all duration-300 transform-gpu hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(16,24,40,0.08)]">
                  <CardContent className="p-6 lg:p-8">
                    <div className="grid lg:grid-cols-3 gap-7 lg:gap-10">
                      {/* Left: title + price + CTA */}
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-gray-900 font-bold text-2xl md:text-3xl whitespace-nowrap">All in One</h3>
            </div>
                                                 <div className="flex items-baseline space-x-3">
                           <div className="text-4xl font-bold text-gray-900">$29</div>
                           <div className="text-lg text-gray-400 line-through">$50 /monthly</div>
            </div>
                        <div className="pt-4 md:pt-6 pb-1 md:pb-3">
                          <motion.div
                            whileHover={{ y: -2, scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                            transition={{ type: "spring", stiffness: 350, damping: 24 }}
                          >
                            <Button className="group w-full bg-black hover:bg-gray-900 text-white py-4 text-base md:text-lg font-semibold rounded-lg">
                              Get Started for Free
                              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1.5" />
                            </Button>
                          </motion.div>
                          <p className="text-sm text-gray-700 mt-4">Cancel anytime. No questions asked!</p>
              </div>
            </div>

                      {/* Right: features */}
                      <div className="lg:col-span-2 flex flex-col justify-center">
                        <h4 className="text-gray-900 font-bold text-lg md:text-xl mb-3 md:mb-4">What's included:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 content-center">
                          {[
                            "Unlimited Personalized Pitches",
                            "Automated Lead Enrichment",
                            "Analytics",
                            "Intent Scoring",
                            "Priority Email Support",
                            "Custom Features requests",
                            "HubSpot Integration - coming soon",
                            "SalesForce Integration - coming soon",
                          ].map((feat, i) => (
                            <div key={i} className="flex items-center space-x-3">
                              <CheckCircle className="w-5 h-5 text-gray-600 flex-shrink-0" />
                              <span className="text-gray-700 text-base">{feat}</span>
            </div>
                      ))}
                    </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
          </div>
        </section>
      </AnimatedSection>

      {/* Final CTA */}
      <AnimatedSection animation="fade-up">
          <section className="py-16 md:py-20 px-6 bg-gradient-to-r from-gray-900 to-black text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <AnimatedSection animation="fade-up">
                <h2 className="font-semibold tracking-tight text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6">
                  Ready to turn every lead into pipeline fuel?
                </h2>
                <p className="text-gray-300 text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
                  Join teams who've ditched generic outreach for AI-powered personalization. Create your first pitch in
                  under 60 seconds.
              </p>
            </AnimatedSection>
            <AnimatedSection animation="scale" delay={200}>
              <Button
                size="lg"
                  className="bg-white text-gray-900 hover:bg-gray-100 text-base md:text-lg px-8 py-6 rounded-xl"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Create Personalized Pitch for free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </AnimatedSection>
          </div>
        </section>
      </AnimatedSection>
      </main>

      {/* Footer */}
      <AnimatedSection animation="fade-up">
        <footer className="bg-white border-t border-gray-200 py-12 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-6">
              <AnimatedSection animation="fade-up" delay={100}>
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <img src="/logo.svg" alt="PitchFabric" className="w-8 h-8 rounded-lg" />
                  <span className="text-xl font-bold text-gray-900">PitchFabric</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed max-w-md mx-auto">
                  Transform leads into personalized microsites in under seconds.
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
                <div className="text-sm text-gray-500">Copyright © 2025 PitchFabric. All rights reserved.</div>
              </AnimatedSection>
            </div>
          </div>
        </footer>
      </AnimatedSection>
    </div>
  )
}

/**
 * DemoCard - small helper to render consistent demo tiles
 */
function DemoCard({
  leftImg,
  rightImg,
  leftAlt = "Left",
  rightAlt = "Right",
  href,
  customLeft,
  customRight,
}: {
  leftImg?: string
  rightImg?: string
  leftAlt?: string
  rightAlt?: string
  href: string
  customLeft?: React.ReactNode
  customRight?: React.ReactNode
}) {
  return (
    <div
      className="group relative cursor-pointer transition-transform duration-300 hover:scale-[1.03] flex-shrink-0"
      onClick={() => window.open(href, "_blank")}
    >
      <Card className="w-80 h-32 rounded-lg border border-gray-200 shadow-sm">
        <CardContent className="h-full p-6 flex items-center justify-center">
          <div className="flex items-center space-x-4">
            {customLeft ? customLeft : <img src={leftImg || "/placeholder.svg"} alt={leftAlt} className="h-6 w-auto" />}
            <ArrowRight className="w-5 h-5 text-gray-400" />
            {customRight ? (
              customRight
            ) : (
              <img src={rightImg || "/placeholder.svg"} alt={rightAlt} className="h-6 w-auto" />
            )}
          </div>
        </CardContent>
      </Card>
      <div className="pointer-events-none absolute inset-0 rounded-lg bg-black/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <span className="text-white text-sm font-medium">View demo</span>
      </div>
    </div>
  )
}
