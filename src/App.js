import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Connectivity from "./components/Connectivity";
import Cyrene from "./components/Cyrene";
import Erebrus from "./components/Erebrus";
import Cypherpunk from "./components/Cypherpunk";
import Winners from "./components/Winner";
import Technology from "./components/Technology";
import Success from "./components/Success";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";
import Mission from "./pages/Mission";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsofUse";
import FAQ from "./pages/Faq";

function Home() {
  return (
    <div>
      <Hero />
      <Connectivity />
      <Cyrene />
      <Erebrus />
      <Cypherpunk />
      <Winners />
      <Technology />
      <Success />
      <Subscribe />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </Router>
  );
}

export default App;
