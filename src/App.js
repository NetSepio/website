import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async"; 
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
import "./App.css";

function RedirectHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    const path = window.location.search.replace("?", "");
    if (path) navigate(path);
  }, [navigate]);

  return null;
}

function Home() {
  return (
    <div>
      <Helmet>
        <title>NetSepio - Home</title>
        <meta
          name="description"
          content="NetSepio delivers private, secure, and censorship-free internet with decentralized infrastructure and an AI coordination layer, shaping an empowered, agentic future."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://netsepio.com" />
        <meta property="og:title" content="NetSepio" />
        <meta
          property="og:description"
          content="NetSepio delivers private, secure, and censorship-free internet with decentralized infrastructure and an AI coordination layer, shaping an empowered, agentic future."
        />
        <meta
          property="og:image"
          content="/assets/NetSepio_metadata_image.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="NetSepio" />
        <meta
          property="twitter:description"
          content="NetSepio delivers private, secure, and censorship-free internet with decentralized infrastructure and an AI coordination layer, shaping an empowered, agentic future."
        />
        <meta
          property="twitter:image"
          content="/assets/NetSepio_metadata_image.png"
        />
      </Helmet>
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
    <HelmetProvider>
      <Router>
        <RedirectHandler />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;