"use client"

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: (
        <svg className="w-12 h-12 mx-auto mb-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      skills: ["Java", "JavaScript"],
    },
    {
      title: "Frontend",
      icon: (
        <svg className="w-12 h-12 mx-auto mb-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      skills: ["React", "HTML/CSS", "Tailwind CSS"],
    },
    {
      title: "Backend",
      icon: (
        <svg className="w-12 h-12 mx-auto mb-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
          />
        </svg>
      ),
      skills: ["Node.js", "Express", "REST APIs", "Apache Kafka"],
    },
    {
      title: "Databases",
      icon: (
        <svg className="w-12 h-12 mx-auto mb-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
          />
        </svg>
      ),
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
    },
  ]

  const tools = ["Git", "Docker", "AWS Lambda", "VS Code", "Nginx"]

  return (
    <section id="skills" className="py-20 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Technical Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="glass-effect p-6 rounded-lg text-center hover:scale-105 transition-transform"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {category.icon}
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <div className="space-y-2 text-gray-300">
                {category.skills.map((skill) => (
                  <div key={skill}>{skill}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-6">Tools & Platforms</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool) => (
              <span key={tool} className="bg-primary/20 text-primary px-4 py-2 rounded-full">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
