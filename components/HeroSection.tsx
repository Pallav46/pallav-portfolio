"use client"

import { useEffect, useState } from "react"
import { getAssetPath } from "@/lib/utils"

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("")
  const fullText = "Hi, I'm Pallav Kumar"

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  const socialLinks = [
    {
      href: "https://github.com/Pallav46",
      label: "GitHub",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      href: "https://leetcode.com/PallavKumar6200",
      label: "LeetCode",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
    },
    {
      href: "mailto:pallav.kumar22b@iiitg.ac.in",
      label: "Email",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      href: "tel:+916200845646",
      label: "Phone",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
    },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Hero Content - Left Side */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto lg:mx-0 mb-6 rounded-full bg-gradient-to-r from-primary to-purple-600 flex items-center justify-center text-4xl font-bold">
                PK
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              {displayText}
              <span className="gradient-text ml-2">{displayText.includes("Pallav Kumar") ? "" : ""}</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Full Stack Developer & Computer Science Engineering Student
            </p>

            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto lg:mx-0">
              Passionate about building scalable web applications and solving complex problems. Currently pursuing B.Tech at
              IIIT Guwahati with expertise in modern web technologies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button
                onClick={() => scrollToSection("#projects")}
                className="bg-primary hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection("#contact")}
                className="border border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg font-semibold transition-all"
              >
                Get In Touch
              </button>
              <a
                href={getAssetPath("/Pallav_Kumar_Resume.pdf")}
                download="Pallav_Kumar_Resume.pdf"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 text-center flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
            </div>

            <div className="flex justify-center lg:justify-start space-x-6">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* About Me Content - Right Side */}
          <div id="about" className="space-y-8">
            <h2 className="text-4xl font-bold text-center lg:text-left gradient-text mb-8">About Me</h2>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate Computer Science Engineering student at IIIT Guwahati with a strong foundation in
                full-stack development. Currently maintaining a CGPA of 8.13/10.0 and actively working as a Frontend
                Developer Intern.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My journey in tech has been driven by curiosity and a desire to solve real-world problems through code. I
                specialize in building scalable web applications using modern technologies like React, Node.js, and
                various databases.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 glass-effect rounded-lg">
                  <div className="text-2xl font-bold text-primary">8.13</div>
                  <div className="text-sm text-gray-400">CGPA</div>
                </div>
                <div className="text-center p-4 glass-effect rounded-lg">
                  <div className="text-2xl font-bold text-primary">3★</div>
                  <div className="text-sm text-gray-400">CodeChef</div>
                </div>
              </div>
            </div>

            <div className="space-y-6 mt-8">
              <div className="glass-effect p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                  </svg>
                  Education
                </h3>
                <div>
                  <h4 className="font-semibold">B.Tech in Computer Science and Engineering</h4>
                  <p className="text-gray-400">Indian Institute of Information Technology Guwahati</p>
                  <p className="text-sm text-gray-500">May 2026 • CGPA: 8.13/10.0</p>
                </div>
              </div>
              
              <div className="glass-effect p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"
                    />
                  </svg>
                  Current Role
                </h3>
                <div>
                  <h4 className="font-semibold">Frontend Developer Intern</h4>
                  <p className="text-gray-400">The Tann Mann Gaadi – Wellness on Wheels</p>
                  <p className="text-sm text-gray-500">April 2025 – Present • Remote</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
