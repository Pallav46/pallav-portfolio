"use client"

interface Project {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  link: string;
  deploymentLink?: string | null;
}

const ProjectsSection = () => {
  const projects = [
    {
      title: "Cryuze",
      description:
        "Full-stack hyperlocal service platform connecting customers with local professionals using geolocation, real-time chat, and integrated payments.",
      technologies: ["React", "Node.js", "MongoDB", "Socket.IO", "Razorpay", "Express"],
      features: ["Real-time chat with WebSockets", "Geolocation-based service matching", "Secure payment integration with Razorpay", "User & Provider dashboards"],
      link: "https://github.com/Pallav46/Cryuze",
      deploymentLink: "https://x-website.onrender.com", // Based on the code I saw
    },
    {
      title: "ProxyServer",
      description:
        "High-performance reverse proxy server built from scratch with clustering, load balancing, caching, and rate limiting capabilities.",
      technologies: ["Node.js", "TypeScript", "Zod", "YAML"],
      features: ["Master-worker clustering model", "Round-robin load balancing", "In-memory caching & rate limiting", "YAML-based configuration"],
      link: "https://github.com/Pallav46/ProxyServer",
      deploymentLink: null, // CLI tool, no web deployment
    },
    {
      title: "MicroserviceMoodScape",
      description:
        "Microservices-driven music application with real-time facial emotion detection that delivers personalized music recommendations.",
      technologies: ["React", "Node.js", "Flask", "Kafka", "Redis", "PostgreSQL", "Docker"],
      features: [
        "Real-time facial emotion detection",
        "Microservices architecture with Docker",
        "Personalized music recommendations",
        "Kafka-based event streaming",
      ],
      link: "https://github.com/Pallav46/MicroserviceMoodScape",
      deploymentLink: null, // Docker compose setup, needs deployment
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
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-blue-400 transition-colors"
                    aria-label={`View ${project.title} source code`}
                    title="View source code"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  {project.deploymentLink && (
                    <a
                      href={project.deploymentLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-500 hover:text-green-400 transition-colors"
                      aria-label={`View ${project.title} live demo`}
                      title="View live demo"
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
                  )}
                </div>
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
