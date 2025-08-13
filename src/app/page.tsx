"use client"

import { Header } from "@/components/page/Header"
import { HeroSection } from "@/components/page/HeroSection"
import { AboutSection } from "@/components/page/AboutSection"
import { WritingSection } from "@/components/page/WritingSection"
import { ContactSection } from "@/components/page/ContactSection"
import { Footer } from "@/components/page/Footer"

export default function Home() {
  // Placeholder retained for future use (e.g., gallery). Remove if not needed.
  // const photos = ["/photo_1.jpg", "/photo_2.jpg", "/photo_3.jpg"]

  return (
    <div className="min-h-screen bg-white text-gray-900">

      <Header />

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <WritingSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}
