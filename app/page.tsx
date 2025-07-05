"use client"

import { useEffect, useState } from "react"
import Navigation from "@/components/Navigation"
import HeroSection from "@/components/HeroSection"
import SkillsSection from "@/components/SkillsSection"
import ExperienceSection from "@/components/ExperienceSection"
import ProjectsSection from "@/components/ProjectsSection"
import AchievementsSection from "@/components/AchievementsSection"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"
import Preloader from "@/components/Preloader"
import ScrollProgress from "@/components/ScrollProgress"
import { useScrollAnimations } from "@/hooks/useScrollAnimations"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  useScrollAnimations()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <Preloader />
  }

  return (
    <div className="font-inter bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white min-h-screen">
      <ScrollProgress />
      <Navigation />
      <main>
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
