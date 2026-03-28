import React, { useState } from 'react';
import { Navigation, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ResidentApp = () => {
  return (
    <div className="min-h-screen bg-slate-50 p-6 flex flex-col items-center anim-fade">
      
      {/* Header with your custom colors */}
      <div className="w-full max-w-2xl flex items-center justify-between mb-12">
        <Link to="/" className="text-lushGreen hover:scale-110 transition-transform">
          <ArrowLeft size={28} />
        </Link>
        <h1 className="text-2xl font-bold text-darkTeal font-sans">Resident Portal</h1>
        <div className="w-8"></div>
      </div>

      {/* Your Styled Card */}
      <div className="bg-white/70 backdrop-blur-xl p-10 rounded-[2.5rem] shadow-2xl anim-slide-up border border-mintLight/40 text-center max-w-md w-full">
        <div className="w-16 h-16 bg-accentOrange/10 rounded-2xl flex items-center justify-center mx-auto mb-6 pulse-dot">
          <Navigation className="text-accentOrange" size={32} />
        </div>
        
        <h2 className="text-3xl font-bold text-darkTeal mb-2 font-sans">Resident Setup</h2>
        <p className="text-lushGreen font-mono text-sm mb-8 tracking-widest">#BLR-782-CONTEXT</p>
        
        <div className="flex justify-center gap-3 mb-8">
           <div className="step-circle current">1</div>
           <div className="step-circle pending">2</div>
           <div className="step-circle pending">3</div>
        </div>

        <button className="w-full bg-accentOrange hover:bg-darkTeal text-white py-4 rounded-2xl font-bold shadow-lg shadow-accentOrange/20 transition-all-300 transform hover:-translate-y-1">
          Launch Reality Map
        </button>
      </div>
    </div>
  );
};

export default ResidentApp;