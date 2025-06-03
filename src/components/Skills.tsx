
import { Code, Shield, TestTube, Palette, Cpu } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Front-End Development",
      icon: Code,
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "Angular", level: 75 }
      ],
      color: "blue",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      title: "Cybersecurity",
      icon: Shield,
      skills: [
        { name: "Nmap", level: 85 },
        { name: "OWASP Zap", level: 80 },
        { name: "Burp Suite", level: 75 },
        { name: "VAPT", level: 80 }
      ],
      color: "red",
      gradient: "from-red-500 to-red-600"
    },
    {
      title: "Programming Languages",
      icon: Cpu,
      skills: [
        { name: "Python", level: 80 },
        { name: "Java", level: 75 },
        { name: "C++", level: 70 }
      ],
      color: "green",
      gradient: "from-green-500 to-green-600"
    },
    {
      title: "Quality Assurance",
      icon: TestTube,
      skills: [
        { name: "Test Cases", level: 85 },
        { name: "JIRA", level: 80 },
        { name: "Selenium", level: 75 }
      ],
      color: "purple",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      title: "Creative Tools",
      icon: Palette,
      skills: [
        { name: "Adobe Suite", level: 80 },
        { name: "AutoCAD", level: 75 },
        { name: "MS Office 365", level: 90 }
      ],
      color: "orange",
      gradient: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full blur-3xl opacity-40 -translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full blur-3xl opacity-40 translate-x-48 translate-y-48"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 text-gray-900 animate-fade-in">
              Skills & <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in delay-200">
              A comprehensive toolkit built through education, hands-on experience, and continuous learning
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div 
                  key={index} 
                  className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/20 animate-slide-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Header */}
                  <div className="flex items-center space-x-4 mb-8">
                    <div className={`w-12 h-12 bg-gradient-to-r ${category.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-900 transition-colors">
                      {category.title}
                    </h3>
                  </div>
                  
                  {/* Skills */}
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                          <span className="text-sm text-gray-500 font-medium">{skill.level}%</span>
                        </div>
                        <div className="relative">
                          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                            <div 
                              className={`h-3 bg-gradient-to-r ${category.gradient} rounded-full transition-all duration-1000 ease-out relative`}
                              style={{ 
                                width: `${skill.level}%`,
                                animationDelay: `${index * 150 + skillIndex * 100}ms`
                              }}
                            >
                              <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Hover effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300 pointer-events-none`}></div>
                </div>
              );
            })}
          </div>
          
          {/* Call to action */}
          <div className="text-center mt-16 animate-fade-in delay-600">
            <div className="glass-effect p-8 rounded-2xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Always Learning</h3>
              <p className="text-gray-600 mb-6">Technology evolves rapidly, and so do I. I'm constantly exploring new tools, frameworks, and methodologies to stay at the forefront of innovation.</p>
              <div className="flex justify-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-100"></div>
                <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse delay-200"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
