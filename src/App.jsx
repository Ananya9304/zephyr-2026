import React, { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import HeroSection from "./components/Hero";
import AboutSection from "./components/About";
import MerchandiseSection from "./components/Merchandise";
import GallerySection from "./components/Gallery";
import Footer from "./components/Footer";
import EventsSection from "./components/Events";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    // Wait for curtains to fully open (2.2s delay + 1.8s animation = 4s)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [isSidebarOpen]);

  const handleMenuToggle = () => setIsSidebarOpen(!isSidebarOpen);

  if (isLoading) return <Loader />;

  return (
    <div className="App">
      <Navbar onMenuToggle={handleMenuToggle} />
      <Sidebar isOpen={isSidebarOpen} onMenuToggle={handleMenuToggle} />
      <main>
        <HeroSection />
        <AboutSection />
        <MerchandiseSection />
        <GallerySection />
        <EventsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
