import React, { useState, useEffect } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Polyline } from 'react-leaflet';
import { CloudRain, AlertCircle, Volume2, Map as MapIcon, Navigation2 } from 'lucide-react';
import 'leaflet/dist/leaflet.css';

const DriverDashboard = () => {
  const { shortId } = useParams();
  const [profile, setProfile] = useState(null);
  const [activeLang, setActiveLang] = useState('en-IN'); 

  useEffect(() => {
    const mockData = {
      waypoints: { dropoff: [12.9716, 77.5946], gate: [12.9720, 77.5950], door: [12.9725, 77.5955] },
      notes: { guard: "Tell guard delivery for Flat 704. Do not use service lift.", floor: "7" },
      alerts: [{ message: "BBMP digging near main approach. Park 20m early.", type: "roadblock" }]
    };
    setTimeout(() => setProfile(mockData), 600); // Fake load time for effect
  }, [shortId]);

  if (!profile) {
    return (
      <div className="flex h-screen items-center justify-center bg-slate-900">
        <div className="animate-pulse flex flex-col items-center">
          <Navigation2 size={48} className="text-blue-500 mb-4 animate-bounce" />
          <p className="font-bold text-white text-xl tracking-widest uppercase">Loading Route...</p>
        </div>
      </div>
    );
  }

  const polylineCoords = [profile.waypoints.dropoff, profile.waypoints.gate, profile.waypoints.door];

  return (
    <div className="w-full min-h-screen relative overflow-hidden bg-slate-100 font-sans">
      
      {/* Floating Notifications (iOS Style) */}
      <div className="absolute top-4 left-4 right-4 md:left-8 md:right-auto md:w-[400px] z-20 flex flex-col gap-3 pointer-events-none">
        
        {/* Weather Alert */}
        <div className="bg-white/80 backdrop-blur-xl p-4 rounded-3xl shadow-2xl border border-white/50 flex items-start gap-4 pointer-events-auto">
          <div className="bg-blue-500 p-2.5 rounded-2xl shadow-inner"><CloudRain size={24} className="text-white" /></div>
          <div>
            <h3 className="font-bold text-slate-900">Heavy Rain Warning</h3>
            <p className="text-sm font-medium text-slate-600 mt-0.5 leading-snug">Roads near destination may be flooded.</p>
          </div>
        </div>
        
        {/* User Alerts */}
        {profile.alerts.map((alert, idx) => (
          <div key={idx} className="bg-white/80 backdrop-blur-xl p-4 rounded-3xl shadow-2xl border border-white/50 flex items-start gap-4 pointer-events-auto">
            <div className="bg-red-500 p-2.5 rounded-2xl shadow-inner"><AlertCircle size={24} className="text-white" /></div>
            <div>
              <h3 className="font-bold text-slate-900">Resident Alert</h3>
              <p className="text-sm font-medium text-slate-600 mt-0.5 leading-snug">{alert.message}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Map Area */}
      <div className="absolute inset-0 z-0">
        <MapContainer center={profile.waypoints.dropoff} zoom={16} className="h-full w-full" zoomControl={false}>
          <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
          <Marker position={profile.waypoints.dropoff} />
          <Marker position={profile.waypoints.gate} />
          <Marker position={profile.waypoints.door} />
          <Polyline positions={polylineCoords} color="#3b82f6" weight={6} opacity={0.9} />
        </MapContainer>
      </div>

      {/* Driver Bottom Sheet */}
      <div className="absolute bottom-0 md:bottom-8 md:right-8 w-full md:w-[420px] bg-white rounded-t-[2.5rem] md:rounded-[2.5rem] shadow-[0_-20px_60px_rgba(0,0,0,0.15)] p-8 z-20 border border-slate-100">
        <div className="w-12 h-1.5 bg-slate-200 rounded-full mx-auto mb-6 md:hidden"></div>

        <div className="flex justify-between items-end mb-8">
          <div>
            <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-1">Destination</p>
            <h2 className="text-3xl font-black text-slate-900">Floor {profile.notes.floor}</h2>
          </div>
          <div className="bg-slate-100 rounded-2xl p-1.5 flex shadow-inner">
            {['en-IN', 'hi-IN', 'kn-IN'].map((lang) => (
              <button key={lang} onClick={() => setActiveLang(lang)} className={`text-xs font-bold px-3 py-2 rounded-xl transition-all ${activeLang === lang ? 'bg-white shadow-md text-slate-900 scale-105' : 'text-slate-500 hover:text-slate-800'}`}>
                {lang.split('-')[0].toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-amber-50 p-6 rounded-[2rem] border border-amber-100/50 mb-8 shadow-inner relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-amber-400"></div>
          <p className="text-amber-900 font-bold text-lg leading-relaxed">"{profile.notes.guard}"</p>
        </div>

        <div className="flex gap-4">
          <a 
  href={`https://www.google.com/maps/dir/?api=1&destination=${profile.waypoints.dropoff[0]},${profile.waypoints.dropoff[1]}`}
  target="_blank" 
  rel="noopener noreferrer"
  className="flex-1 bg-slate-900 text-white py-5 rounded-2xl font-bold flex justify-center items-center gap-2 hover:bg-black active:scale-[0.98] transition-all shadow-xl shadow-slate-900/20 text-lg"
>
  <MapIcon size={22} /> Navigate
</a>
          <button className="bg-blue-100 text-blue-600 px-6 py-5 rounded-2xl flex items-center justify-center hover:bg-blue-200 active:scale-[0.98] transition-all shadow-lg shadow-blue-100" title="Read instructions aloud">
            <Volume2 size={26} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default function DeliveryApp() {
  return (
    <Routes>
      <Route path="/:shortId" element={<DriverDashboard />} />
    </Routes>
  );
}