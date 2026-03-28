import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { MapPin, Navigation, ArrowRight, UserPlus } from 'lucide-react';

// Import your existing components
import ResidentApp from './ResidentApp';
import DeliveryApp from './DeliveryApp';

// 1. UPDATED: Matching your filename 'signupPage.jsx' exactly
import SignupPage from './signupPage'; 

const DemoLanding = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-200 flex flex-col items-center justify-center p-6 font-sans relative overflow-hidden">
    
    {/* Decorative Background Blobs */}
    <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-[128px] opacity-40"></div>
    <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-[128px] opacity-40"></div>

    <div className="relative z-10 text-center mb-12">
      <div className="inline-flex items-center justify-center p-3 bg-white rounded-2xl shadow-xl shadow-gray-200/50 mb-6">
        <Navigation size={32} className="text-blue-600" />
      </div>
      <h1 className="text-5xl font-black text-slate-900 tracking-tight mb-4">NavBridge</h1>
      <p className="text-lg text-slate-500 font-medium max-w-md mx-auto">
        The reality-blending context layer for Bangalore's delivery infrastructure.
      </p>
      
      {/* Signup Link to test the Backend */}
      <Link to="/signup" className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-full font-bold shadow-lg hover:shadow-xl transition-all border border-blue-50">
        <UserPlus size={18} /> Create Account
      </Link>
    </div>

    <div className="flex flex-col sm:flex-row gap-6 w-full max-w-3xl relative z-10">
      {/* Resident Card */}
      <Link to="/resident" className="flex-1 group bg-white/70 backdrop-blur-xl p-8 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-white/80 hover:bg-white hover:-translate-y-1 transition-all duration-300">
        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
          <MapPin className="text-blue-600" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Resident Setup</h2>
        <p className="text-slate-500 mb-6 leading-relaxed">Map your exact micro-reality and generate a ContextPass for drivers.</p>
        <div className="flex items-center text-blue-600 font-bold group-hover:gap-2 transition-all">
          Launch App <ArrowRight size={18} className="ml-1" />
        </div>
      </Link>

      {/* Driver Card */}
      <Link to="/driver/blr-782" className="flex-1 group bg-slate-900 p-8 rounded-[2rem] shadow-2xl shadow-slate-900/20 border border-slate-800 hover:bg-black hover:-translate-y-1 transition-all duration-300">
        <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
          <Navigation className="text-purple-400" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Driver View</h2>
        <p className="text-slate-400 mb-6 leading-relaxed">Experience the frictionless, no-login smart route and voice guide.</p>
        <div className="flex items-center text-purple-400 font-bold group-hover:gap-2 transition-all">
          Simulate Delivery <ArrowRight size={18} className="ml-1" />
        </div>
      </Link>
    </div>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DemoLanding />} />
        
        {/* The Signup Route */}
        <Route path="/signup" element={<SignupPage />} /> 
        
        <Route path="/resident/*" element={<ResidentApp />} />
        <Route path="/driver/*" element={<DeliveryApp />} />
      </Routes>
    </BrowserRouter>
  );
}