import React from 'react';

const Hero = () => {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
          You Dream, <span className="text-primary-500">We Bild</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Generate Websites Instantly, Customize to Perfection.
        </p>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-200 rounded-full opacity-20 animate-pulse delay-500"></div>
    </section>
  );
};

export default Hero;