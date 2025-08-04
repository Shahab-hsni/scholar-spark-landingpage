import React from 'react';
import AnimatedGeometricBackground from './AnimatedGeometricBackground';
import GeometricBackground from './GeometricBackground';

const BackgroundDemo: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Geometric Background Patterns
        </h1>

        {/* Static Version */}
        <div className="relative h-96 bg-gray-800 rounded-lg overflow-hidden">
          <GeometricBackground opacity={0.15} />
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-white mb-2">Static Pattern</h2>
              <p className="text-gray-300">Clean, subtle geometric background</p>
            </div>
          </div>
        </div>

        {/* Animated Version */}
        <div className="relative h-96 bg-gray-800 rounded-lg overflow-hidden">
          <AnimatedGeometricBackground opacity={0.15} />
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-white mb-2">Animated Pattern</h2>
              <p className="text-gray-300">Subtle animations with pulsing dots and flowing lines</p>
            </div>
          </div>
        </div>

        {/* Different Opacity Levels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[0.05, 0.1, 0.15].map(opacity => (
            <div key={opacity} className="relative h-64 bg-gray-800 rounded-lg overflow-hidden">
              <AnimatedGeometricBackground opacity={opacity} />
              <div className="relative z-10 flex items-center justify-center h-full">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-white mb-1">Opacity {opacity}</h3>
                  <p className="text-sm text-gray-300">Subtle background effect</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Color Palette */}
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-white mb-4">Color Palette Used</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8B5CF6] rounded-lg mx-auto mb-2"></div>
              <p className="text-white text-sm">#8B5CF6</p>
              <p className="text-gray-400 text-xs">Primary Purple</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#A78BFA] rounded-lg mx-auto mb-2"></div>
              <p className="text-white text-sm">#A78BFA</p>
              <p className="text-gray-400 text-xs">Secondary Purple</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#C4B5FD] rounded-lg mx-auto mb-2"></div>
              <p className="text-white text-sm">#C4B5FD</p>
              <p className="text-gray-400 text-xs">Light Purple</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#DDD6FE] rounded-lg mx-auto mb-2"></div>
              <p className="text-white text-sm">#DDD6FE</p>
              <p className="text-gray-400 text-xs">Very Light Purple</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundDemo;
