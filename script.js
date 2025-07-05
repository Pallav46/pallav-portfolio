// Import Lucide icons library
import lucide from "lucide"

// Initialize Lucide icons
lucide.createIcons()

// Mobile menu toggle
const mobileMenuBtn = document.getElementById("mobile-menu-btn")
const mobileMenu = document.getElementById("mobile-menu")

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden")
})

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
      // Close mobile menu if open
      mobileMenu.classList.add("hidden")
    }
  })
})

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-slide-up")
    }
  })
}, observerOptions)

// Observe all sections for animations
document.querySelectorAll("section").forEach((section) => {
  observer.observe(section)
})

// Navbar background on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector("nav")
  if (window.scrollY > 100) {
    navbar.classList.add("backdrop-blur-md", "bg-black/20")
  } else {
    navbar.classList.remove("backdrop-blur-md", "bg-black/20")
  }
})

// Contact form handling
const contactForm = document.getElementById("contact-form")
contactForm.addEventListener("submit", function (e) {
  e.preventDefault()

  // Get form data
  const formData = new FormData(this)
  const name = formData.get("name") || this.querySelector('input[placeholder="Your Name"]').value
  const email = formData.get("email") || this.querySelector('input[placeholder="Your Email"]').value
  const subject = formData.get("subject") || this.querySelector('input[placeholder="Subject"]').value
  const message = formData.get("message") || this.querySelector("textarea").value

  // Create mailto link
  const mailtoLink = `mailto:pallav.kumar22b@iiitg.ac.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`

  // Open email client
  window.location.href = mailtoLink

  // Show success message
  showNotification("Thank you! Your email client should open now.", "success")

  // Reset form
  this.reset()
})

// Notification system
function showNotification(message, type = "info") {
  const notification = document.createElement("div")
  notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg text-white transform translate-x-full transition-transform duration-300 ${
    type === "success" ? "bg-green-500" : type === "error" ? "bg-red-500" : "bg-blue-500"
  }`
  notification.textContent = message

  document.body.appendChild(notification)

  // Slide in
  setTimeout(() => {
    notification.classList.remove("translate-x-full")
  }, 100)

  // Slide out and remove
  setTimeout(() => {
    notification.classList.add("translate-x-full")
    setTimeout(() => {
      document.body.removeChild(notification)
    }, 300)
  }, 3000)
}

// Typing animation for hero section
function typeWriter(element, text, speed = 100) {
  let i = 0
  element.innerHTML = ""

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i)
      i++
      setTimeout(type, speed)
    }
  }

  type()
}

// Initialize typing animation when page loads
window.addEventListener("load", () => {
  const heroTitle = document.querySelector("#home h1")
  if (heroTitle) {
    const originalText = heroTitle.innerHTML
    typeWriter(heroTitle, originalText, 50)
  }
})

// Parallax effect for hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const hero = document.querySelector("#home")
  if (hero) {
    hero.style.transform = `translateY(${scrolled * 0.5}px)`
  }
})

// Skills animation on scroll
const skillsSection = document.querySelector("#skills")
const skillCards = document.querySelectorAll("#skills .glass-effect")

const skillsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        skillCards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add("animate-slide-up")
          }, index * 100)
        })
      }
    })
  },
  { threshold: 0.3 },
)

if (skillsSection) {
  skillsObserver.observe(skillsSection)
}

// Project cards hover effect
document.querySelectorAll("#projects .glass-effect").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "scale(1.05) rotateY(5deg)"
    this.style.transition = "all 0.3s ease"
  })

  card.addEventListener("mouseleave", function () {
    this.style.transform = "scale(1) rotateY(0deg)"
  })
})

// Add loading animation
window.addEventListener("load", () => {
  document.body.classList.add("loaded")
})

// Preloader
const preloader = document.createElement("div")
preloader.className = "fixed inset-0 bg-slate-900 flex items-center justify-center z-50"
preloader.innerHTML = `
    <div class="text-center">
        <div class="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p class="text-white text-lg">Loading...</p>
    </div>
`

document.body.appendChild(preloader)

window.addEventListener("load", () => {
  setTimeout(() => {
    preloader.style.opacity = "0"
    preloader.style.transition = "opacity 0.5s ease"
    setTimeout(() => {
      document.body.removeChild(preloader)
    }, 500)
  }, 1000)
})

// Add scroll progress indicator
const progressBar = document.createElement("div")
progressBar.className = "fixed top-0 left-0 h-1 bg-primary z-50 transition-all duration-300"
progressBar.style.width = "0%"
document.body.appendChild(progressBar)

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset
  const docHeight = document.body.scrollHeight - window.innerHeight
  const scrollPercent = (scrollTop / docHeight) * 100
  progressBar.style.width = scrollPercent + "%"
})

// Easter egg - Konami code
const konamiCode = []
const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65] // Up Up Down Down Left Right Left Right B A

document.addEventListener("keydown", (e) => {
  konamiCode.push(e.keyCode)
  if (konamiCode.length > konamiSequence.length) {
    konamiCode.shift()
  }

  if (
    konamiCode.length === konamiSequence.length &&
    konamiCode.every((code, index) => code === konamiSequence[index])
  ) {
    showNotification("🎉 Konami Code activated! You found the easter egg!", "success")
    document.body.style.animation = "rainbow 2s infinite"
    setTimeout(() => {
      document.body.style.animation = ""
    }, 5000)
  }
})

// Add rainbow animation for easter egg
const style = document.createElement("style")
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`
document.head.appendChild(style)
