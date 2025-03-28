// Top of every component file
import React from 'react'
import Navbar from './components/layout/Navbar'
import HeroSection from './components/sections/HeroSection'
import FeaturesSection from './components/sections/FeaturesSection'
import TestimonialsSection from './components/sections/TestimonialsSection'
import CTASection from './components/sections/CTASection'
import Footer from './components/layout/Footer'

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  )
}

export default App