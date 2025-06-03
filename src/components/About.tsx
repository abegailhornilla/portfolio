
import { GraduationCap, MapPin, Heart, Lightbulb } from "lucide-react";

const About = () => {
  const traits = [
    { name: "Creative", icon: "🎨", color: "blue", description: "Innovative problem-solving approach" },
    { name: "Flexible", icon: "🔄", color: "purple", description: "Adaptable to new technologies" },
    { name: "Hard-Working", icon: "💪", color: "green", description: "Dedicated to excellence" },
    { name: "Competitive", icon: "🏆", color: "orange", description: "Striving for continuous improvement" }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-50 border-blue-200 text-blue-800",
      purple: "bg-purple-50 border-purple-200 text-purple-800",
      green: "bg-green-50 border-green-200 text-green-800",
      orange: "bg-orange-50 border-orange-200 text-orange-800"
    };
    return colors[color as keyof typeof colors] || "bg-blue-50 border-blue-200 text-blue-800";
  };

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full blur-3xl opacity-30 -translate-y-48 translate-x-48"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-20 text-gray-900 animate-fade-in">
            About <span className="text-gradient">Me</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Profile section */}
            <div className="space-y-8 animate-slide-up">
              <div className="relative">
                <div className="w-96 h-96 mx-auto bg-gradient-to-br from-blue-100 via-purple-50 to-indigo-100 rounded-3xl flex items-center justify-center shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="text-9xl animate-float">👩‍💻</div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg animate-glow">
                  <Heart className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
            
            {/* Content section */}
            <div className="space-y-8 animate-slide-up delay-200">
              {/* Location */}
              <div className="flex items-center space-x-3 text-gray-600 mb-6">
                <MapPin className="w-5 h-5 text-blue-500" />
                <span className="text-lg">Taysan, Batangas, Philippines</span>
              </div>
              
              {/* Description */}
              <div className="space-y-6">
                <p className="text-xl text-gray-700 leading-relaxed">
                  I am a passionate Computer Engineering graduate driven by innovation, technology, 
                  and the power of creative solutions. My journey is motivated by career passion 
                  and the desire for stability while making a positive impact through technology.
                </p>
                
                <div className="flex items-start space-x-3 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100">
                  <Lightbulb className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">My Philosophy</h4>
                    <p className="text-gray-600">Technology should not just solve problems—it should inspire possibilities and create meaningful change in people's lives.</p>
                  </div>
                </div>
              </div>
              
              {/* Traits */}
              <div className="grid grid-cols-2 gap-4">
                {traits.map((trait, index) => (
                  <div 
                    key={trait.name} 
                    className={`p-6 rounded-xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg animate-fade-in ${getColorClasses(trait.color)}`}
                    style={{ animationDelay: `${400 + index * 100}ms` }}
                  >
                    <div className="text-2xl mb-2">{trait.icon}</div>
                    <h4 className="font-semibold mb-2">{trait.name}</h4>
                    <p className="text-sm opacity-80">{trait.description}</p>
                  </div>
                ))}
              </div>
              
              {/* Education */}
              <div className="glass-effect p-8 rounded-2xl shadow-xl animate-fade-in delay-600">
                <div className="flex items-center space-x-3 mb-4">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                  <h3 className="text-2xl font-semibold text-gray-900">Education</h3>
                </div>
                <div className="border-l-4 border-gradient-to-b from-blue-500 to-purple-500 pl-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">B.S. in Computer Engineering</h4>
                  <p className="text-blue-600 font-medium mb-1">STI College - Lipa</p>
                  <p className="text-gray-500">2021 – 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
