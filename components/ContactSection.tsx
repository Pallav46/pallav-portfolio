"use client"

import type React from "react"
import { useState } from "react"
import { useNotification } from "@/hooks/useNotification"

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const { showNotification } = useNotification()

  const contactMethods = [
    {
      icon: (
        <svg className="w-8 h-8 mx-auto mb-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Email",
      value: "pallavkumar6200@gmail.com",
      href: "mailto:pallavkumar6200@gmail.com",
    },
    {
      icon: (
        <svg className="w-8 h-8 mx-auto mb-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      title: "Phone",
      value: "+91-6200845646",
      href: "tel:+916200845646",
    },
    {
      icon: (
        <svg className="w-8 h-8 mx-auto mb-3 text-primary" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      title: "GitHub",
      value: "Pallav46",
      href: "https://github.com/Pallav46",
    },
    {
      icon: (
        <svg className="w-8 h-8 mx-auto mb-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      title: "LeetCode",
      value: "PallavKumar6200",
      href: "https://leetcode.com/PallavKumar6200",
    },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // For GitHub Pages deployment, use mailto link
      const mailtoLink = `mailto:pallavkumar6200@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`
      
      window.location.href = mailtoLink
      showNotification("Opening your email client to send the message...", "success")
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      console.error('Error:', error)
      showNotification("Please try again or contact directly via email.", "error")
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 px-4 bg-black/20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 gradient-text">Let's Connect</h2>
        <p className="text-xl text-gray-300 mb-12">
          I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactMethods.map((method) => (
            <a
              key={method.title}
              href={method.href}
              target={method.href.startsWith("http") ? "_blank" : undefined}
              rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="glass-effect p-6 rounded-lg hover:scale-105 transition-transform"
            >
              {method.icon}
              <p className="font-semibold">{method.title}</p>
              <p className="text-sm text-gray-400">{method.value}</p>
            </a>
          ))}
        </div>

        <div className="glass-effect p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-primary"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-primary"
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-primary"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-primary resize-none"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-primary hover:bg-blue-600 disabled:bg-gray-500 disabled:cursor-not-allowed text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 disabled:transform-none"
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
