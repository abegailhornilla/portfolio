
const Portfolio = () => {
  const projects = [
    {
      title: "VAPT Internship Project",
      description: "Conducted comprehensive vulnerability assessment and penetration testing at SitesPhil, Inc. Used OWASP Zap & Burp Suite to identify vulnerabilities in client websites and strengthen their cybersecurity posture.",
      image: "🔐",
      technologies: ["OWASP Zap", "Burp Suite", "Security Analysis", "Report Generation"],
      status: "completed"
    }
  ];

  const comingSoonProjects = [
    { title: "E-Commerce Web Application", category: "Web Development" },
    { title: "IoT Security Scanner", category: "Cybersecurity" },
    { title: "Mobile App UI/UX Design", category: "Creative Design" },
    { title: "Automated Testing Framework", category: "Quality Assurance" }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Portfolio</h2>
          
          {/* Featured Project */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-gray-800">Featured Project</h3>
            {projects.map((project, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <h4 className="text-2xl font-bold text-gray-800">{project.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-64 h-64 bg-gradient-to-br from-blue-100 to-gray-100 rounded-2xl flex items-center justify-center text-8xl">
                      {project.image}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Coming Soon Projects */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-gray-800">Coming Soon</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {comingSoonProjects.map((project, index) => (
                <div key={index} className="bg-white p-6 rounded-xl border-2 border-dashed border-gray-300 hover:border-blue-400 transition-colors duration-300">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-gray-200 rounded-lg mx-auto flex items-center justify-center">
                      <span className="text-2xl text-gray-400">⏳</span>
                    </div>
                    <h4 className="font-semibold text-gray-800">{project.title}</h4>
                    <span className="inline-block bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                      {project.category}
                    </span>
                    <p className="text-sm text-gray-500">Coming Soon</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
