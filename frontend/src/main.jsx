import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Connect your design architecture
import './styles/tailwind.css';
import './styles/animations.css';
import './styles/components.css';

// Base Leaflet styles for the map
import 'leaflet/dist/leaflet.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);