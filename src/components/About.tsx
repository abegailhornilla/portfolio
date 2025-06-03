
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-100 to-gray-100 rounded-2xl flex items-center justify-center">
                <div className="text-6xl">👩‍💻</div>
              </div>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                From Taysan, Batangas, Philippines, I am a passionate Computer Engineering graduate 
                driven by innovation, technology, and the power of creative solutions. My journey 
                is motivated by career passion and the desire for stability while making a positive 
                impact through technology.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Creative</h4>
                  <p className="text-sm text-gray-600">Innovative problem-solving approach</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">Flexible</h4>
                  <p className="text-sm text-gray-600">Adaptable to new technologies</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Hard-Working</h4>
                  <p className="text-sm text-gray-600">Dedicated to excellence</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">Competitive</h4>
                  <p className="text-sm text-gray-600">Striving for continuous improvement</p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Education</h3>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-800">B.S. in Computer Engineering</h4>
                  <p className="text-gray-600">STI College - Lipa</p>
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
