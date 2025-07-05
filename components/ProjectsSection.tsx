"use client"

const ProjectsSection = () => {
  const projects = [
    {
      title: "Cryuze",
      description:
        "Full-stack hyperlocal service platform connecting customers with local professionals using geolocation and real-time chat.",
      technologies: ["Node.js", "MongoDB", "React", "Razorpay"],
      features: ["Real-time chat with WebSockets", "Geolocation-based notifications", "Secure payment integration"],
      link: "#",
    },
    {
      title: "ProxyServer",
      description:
        "High-performance reverse proxy built from scratch with clustering, load balancing, and caching mechanisms.",
      technologies: ["Node.js", "TypeScript"],
      features: ["Master-worker clustering model", "Round-robin load balancing", "In-memory caching & rate limiting"],
      link: "#",
    },
    {
      title: "MoodScape",
      description:
        "Microservices-driven application performing real-time facial analysis to detect emotions and deliver personalized music.",
      technologies: ["Node.js", "Flask", "Kafka", "Redis"],
      features: [
        "Real-time facial emotion detection",
        "Microservices architecture",
        "Personalized music recommendations",
      ],
      link: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Featured Projects</h2>
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass-effect p-6 rounded-lg hover:scale-105 transition-transform group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <a
                  href={project.link}
                  className="text-primary hover:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label={`View ${project.title} project`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span key={tech} className="bg-primary/20 text-primary px-2 py-1 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="text-sm text-gray-400 space-y-1">
                {project.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>• {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
