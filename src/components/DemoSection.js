import React from 'react';
import { Plus } from 'lucide-react';

const DemoSection = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Demo Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 mb-12">
          <div className="mb-6">
            <p className="text-gray-700 text-lg leading-relaxed">
              Build a bright coffee shop website. I've uploaded our menu and cozy photos to set the vibe.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center space-x-3 bg-gray-50 rounded-lg p-3">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Cafe Menu</h4>
                <p className="text-sm text-gray-500">Beverages & sweet treats</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 bg-gray-50 rounded-lg p-3">
              <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-amber-600 rounded-sm"></div>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Shop Photos</h4>
                <p className="text-sm text-gray-500">Inviting atmosphere shots</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex space-x-3">
              <button className="btn-secondary flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span>Clone</span>
              </button>
              
              <button className="btn-secondary flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <span>Plan</span>
              </button>
            </div>
            
            <div className="flex items-center space-x-2">
              <button className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors">
                <Plus className="w-5 h-5 text-gray-600" />
              </button>
              
              <button className="w-10 h-10 bg-primary-500 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="text-center mb-16">
          <button className="btn-primary text-lg px-8 py-4">
            Get Early Access
          </button>
        </div>
        
        {/* Watch Showreel */}
        <div className="text-center">
          <button className="inline-flex items-center space-x-3 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-full transition-colors group">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-gray-900 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
            <span className="font-medium">Watch Showreel</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;