
const Skills = () => {
  const skillCategories = [
    {
      title: "Front-End Development",
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "Angular", level: 75 }
      ],
      color: "blue"
    },
    {
      title: "Cybersecurity",
      skills: [
        { name: "Nmap", level: 85 },
        { name: "OWASP Zap", level: 80 },
        { name: "Burp Suite", level: 75 },
        { name: "VAPT", level: 80 }
      ],
      color: "red"
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 80 },
        { name: "Java", level: 75 },
        { name: "C++", level: 70 }
      ],
      color: "green"
    },
    {
      title: "Quality Assurance",
      skills: [
        { name: "Test Cases", level: 85 },
        { name: "JIRA", level: 80 },
        { name: "Selenium", level: 75 }
      ],
      color: "purple"
    },
    {
      title: "Creative Tools",
      skills: [
        { name: "Adobe Suite", level: 80 },
        { name: "AutoCAD", level: 75 },
        { name: "MS Office 365", level: 90 }
      ],
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-500",
      red: "bg-red-500",
      green: "bg-green-500",
      purple: "bg-purple-500",
      orange: "bg-orange-500"
    };
    return colors[color as keyof typeof colors] || "bg-blue-500";
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Skills & Expertise</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-6 text-gray-800">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-1000 ${getColorClasses(category.color)}`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
