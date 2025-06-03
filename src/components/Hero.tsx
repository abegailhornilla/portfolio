
import { ArrowDown, Sparkles, Code, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 animate-float delay-100">
        <Code className="w-8 h-8 text-blue-400 opacity-60" />
      </div>
      <div className="absolute top-40 right-20 animate-float delay-300">
        <Shield className="w-6 h-6 text-purple-400 opacity-60" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float delay-500">
        <Sparkles className="w-10 h-10 text-indigo-400 opacity-60" />
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Status badge */}
          <div className="inline-flex items-center glass-effect px-6 py-3 rounded-full text-sm font-medium mb-8 animate-fade-in shadow-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
            🎓 Available for new opportunities
          </div>
          
          {/* Main heading - made smaller and more minimal */}
          <h1 className="text-4xl md:text-6xl font-bold mb-8 animate-fade-in delay-200">
            <span className="block text-gradient">Abegail</span>
            <span className="block text-gray-800">Saldua Hornilla</span>
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-xl md:text-3xl text-gray-600 mb-8 animate-fade-in delay-300 font-light">
            Computer Engineering Graduate | Tech Enthusiast | Creative Thinker
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto animate-fade-in delay-400 leading-relaxed">
            Driven by innovation, powered by creativity.
          </p>
          
          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in delay-500">
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-glow text-lg"
            >
              Get In Touch
              <Sparkles className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              onClick={scrollToContact}
              variant="outline" 
              size="lg"
              className="glass-effect border-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600 px-10 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 text-lg"
            >
              Contact Me
            </Button>
          </div>
          
          {/* Tech stack indicators */}
          <div className="flex justify-center space-x-8 mt-16 animate-fade-in delay-600">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2 mx-auto hover:bg-blue-200 transition-colors">
                <span className="text-blue-600 font-bold text-sm">FE</span>
              </div>
              <p className="text-xs text-gray-500">Frontend</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-2 mx-auto hover:bg-red-200 transition-colors">
                <Shield className="w-6 h-6 text-red-600" />
              </div>
              <p className="text-xs text-gray-500">Security</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2 mx-auto hover:bg-green-200 transition-colors">
                <span className="text-green-600 font-bold text-sm">QA</span>
              </div>
              <p className="text-xs text-gray-500">Testing</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-2 mx-auto hover:bg-purple-200 transition-colors">
                <Sparkles className="w-6 h-6 text-purple-600" />
              </div>
              <p className="text-xs text-gray-500">Creative</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <ArrowDown className="w-6 h-6 text-gray-400" />
          <div className="w-1 h-8 bg-gradient-to-b from-gray-400 to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
