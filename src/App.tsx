import React, { useState } from 'react';
import { Beaker, Zap, Microscope, BookOpen } from 'lucide-react';
import Homepage from './components/Homepage';
import ChemistryLab from './components/ChemistryLab';
import PhysicsLab from './components/PhysicsLab';
import BiologyLab from './components/BiologyLab';

// Removed authentication UI and progress tracking for simplified version

// Firebase removed

function App() {
  const [currentView, setCurrentView] = useState('home');

  const navigationItems = [
    { id: 'home', label: 'Home', icon: BookOpen },
    { id: 'chemistry', label: 'Chemistry Lab', icon: Beaker },
    { id: 'physics', label: 'Physics Lab', icon: Zap },
    { id: 'biology', label: 'Biology Lab', icon: Microscope }
  ];

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <Homepage onNavigate={setCurrentView} />;
      case 'chemistry':
        return <ChemistryLab user={null} />;
      case 'physics':
        return <PhysicsLab user={null} />;
      case 'biology':
        return <BiologyLab user={null} />;
      default:
        return <Homepage onNavigate={setCurrentView} />;
    }
  };

  return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Navigation Header */}
        <header className="bg-black/20 backdrop-blur-lg border-b border-white/10 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-8">
                <div className="text-2xl font-bold text-white">
                  Virtual<span className="text-blue-400">Lab</span>
                </div>
                
                <nav className="hidden md:flex space-x-6">
                  {navigationItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setCurrentView(item.id)}
                        className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                          currentView === item.id
                            ? 'bg-blue-600 text-white'
                            : 'text-gray-300 hover:bg-white/10 hover:text-white'
                        }`}
                      >
                        <Icon size={18} />
                        <span>{item.label}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Auth UI removed */}
            </div>
          </div>
        </header>

        {/* Mobile Navigation */}
        <div className="md:hidden bg-black/20 backdrop-blur-lg border-b border-white/10 px-4 py-3">
          <div className="flex space-x-2 overflow-x-auto">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentView(item.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg whitespace-nowrap transition-all duration-200 ${
                    currentView === item.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <Icon size={16} />
                  <span className="text-sm">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Content */}
        <main>{renderView()}</main>
      </div>
  );
}

export default App;