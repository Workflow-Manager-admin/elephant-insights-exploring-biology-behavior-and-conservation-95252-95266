import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// Import components
import NavBar from './components/NavBar';

// Import pages
import Home from './pages/Home';
import BiologySubspecies from './pages/BiologySubspecies';
import BehaviorSocialStructure from './pages/BehaviorSocialStructure';
import HabitatRange from './pages/HabitatRange';
import Conservation from './pages/Conservation';
import CultureMythology from './pages/CultureMythology';
import Ecosystem from './pages/Ecosystem';
import InterestingFacts from './pages/InterestingFacts';

// PUBLIC_INTERFACE
function App() {
  return (
    <div className="app">
      <NavBar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/biology" element={<BiologySubspecies />} />
          <Route path="/behavior" element={<BehaviorSocialStructure />} />
          <Route path="/habitat" element={<HabitatRange />} />
          <Route path="/conservation" element={<Conservation />} />
          <Route path="/culture" element={<CultureMythology />} />
          <Route path="/ecosystem" element={<Ecosystem />} />
          <Route path="/facts" element={<InterestingFacts />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
