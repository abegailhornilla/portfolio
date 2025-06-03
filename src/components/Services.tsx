
const Services = () => {
  const services = [
    {
      title: "Front-End Web Development",
      description: "Creating responsive and interactive web applications using modern technologies like HTML, CSS, JavaScript, and Angular.",
      icon: "🌐",
      features: ["Responsive Design", "Modern Frameworks", "User Experience", "Performance Optimization"]
    },
    {
      title: "Vulnerability Assessment & Penetration Testing",
      description: "Comprehensive security testing to identify and assess vulnerabilities in web applications and systems.",
      icon: "🔒",
      features: ["OWASP Zap", "Burp Suite", "Nmap Scanning", "Security Reports"]
    },
    {
      title: "Software Quality Assurance & Testing",
      description: "Ensuring software quality through comprehensive testing strategies and automated testing solutions.",
      icon: "🧪",
      features: ["Test Cases", "Automation", "JIRA Integration", "Quality Metrics"]
    },
    {
      title: "Creative Design",
      description: "Graphic design and creative solutions for digital and print media, including photography and visual content creation.",
      icon: "🎨",
      features: ["Adobe Suite", "Visual Design", "Photography", "Brand Identity"]
    },
    {
      title: "Robotics & Automation Projects",
      description: "Developing innovative robotics solutions and automation systems for various applications.",
      icon: "🤖",
      features: ["Automation", "IoT Integration", "System Design", "Programming"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Services</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:bg-blue-50 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Ready to collaborate?</h3>
            <p className="text-gray-600 mb-6">Let's work together to bring your ideas to life.</p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
            >
              Let's work together
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
