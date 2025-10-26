import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import DemoSection from './components/DemoSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Header />
      <main>
        <Hero />
        <DemoSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;