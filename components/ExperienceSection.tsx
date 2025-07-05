"use client"

const ExperienceSection = () => {
  const workExperience = {
    title: "Frontend Developer Intern",
    company: "The Tann Mann Gaadi – Wellness on Wheels",
    period: "April 2025 – Present",
    responsibilities: [
      "Developed responsive and accessible UI for company's main landing page using React.js and Tailwind CSS",
      "Integrated frontend with RESTful APIs via Axios for dynamic content rendering",
      "Collaborated in agile team environment using Git for version control",
    ],
  }

  const leadership = [
    {
      title: "Programming Club Coordinator",
      organization: "IIIT Guwahati",
      period: "January 2024 – July 2024",
      description: "Mentored 200+ students through 8 coding workshops and 2 hackathons",
    },
    {
      title: "Team Head, Entropy Technical Fest",
      organization: "IIIT Guwahati",
      period: "June 2024 – October 2024",
      description: "Led a 10-member team to design, develop, and launch the official festival website",
    },
  ]

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Experience & Leadership</h2>
        <div className="space-y-8">
          <div className="glass-effect p-8 rounded-lg">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-semibold">{workExperience.title}</h3>
                <p className="text-primary font-medium">{workExperience.company}</p>
              </div>
              <div className="text-gray-400 mt-2 md:mt-0">
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">
                  {workExperience.period}
                </span>
              </div>
            </div>
            <ul className="space-y-2 text-gray-300">
              {workExperience.responsibilities.map((responsibility, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="w-5 h-5 mr-2 text-primary mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {responsibility}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {leadership.map((role, index) => (
              <div key={index} className="glass-effect p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">{role.title}</h3>
                <p className="text-primary font-medium mb-2">{role.organization}</p>
                <p className="text-sm text-gray-400 mb-4">{role.period}</p>
                <p className="text-gray-300">{role.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
