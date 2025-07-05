"use client"

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
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
          <div className="space-y-6">
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
    </section>
  )
}

export default AboutSection
