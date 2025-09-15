import React from 'react';
import { Beaker, FlaskConical, Atom, Dna, ArrowRight } from 'lucide-react';

interface HomepageProps {
  onNavigate: (view: string) => void;
}

const Homepage: React.FC<HomepageProps> = ({ onNavigate }) => {
  // Removed labFeatures config (lab chooser section deleted)

  // Stats & large feature chooser removed per request

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="flex space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center animate-pulse">
                <Beaker className="text-white" size={32} />
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-pulse delay-300">
                <Atom className="text-white" size={32} />
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center animate-pulse delay-700">
                <Dna className="text-white" size={32} />
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Experience Science
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Anytime, Anywhere
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Conduct real-life science experiments through immersive virtual simulations. 
            Learn Chemistry, Physics, and Biology with interactive 3D models and authentic lab experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => onNavigate('chemistry')}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>Start Experimenting</span>
              <ArrowRight size={20} />
            </button>
            <a
              href="https://team1-landing.vercel.app/"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full border border-white/20 transition-all duration-300 backdrop-blur-sm text-center"
            >
              Home
            </a>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 opacity-30 animate-bounce">
          <FlaskConical size={40} className="text-green-400" />
        </div>
        <div className="absolute top-40 right-10 opacity-30 animate-bounce delay-1000">
          <Atom size={50} className="text-yellow-400" />
        </div>
        {/* Removed additional floating icon */}
      </section>

      {/* Removed statistics & lab chooser sections */}

      {/* Removed features marketing section */}
    </div>
  );
};

export default Homepage;