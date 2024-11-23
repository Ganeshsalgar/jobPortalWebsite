import React from 'react'
import Navbar from './shared/Navbar.jsx'
import HeroSection from './HeroSection.jsx'
import CategoryCarousel from './categoryCarousel.jsx'
import Latestjob from './Latestjob.jsx'
import Footer from './Footer.jsx'
import useGetAllJobs from '@/hooks/useGetAllJobs.jsx'

const Home = () => {
  useGetAllJobs();
  return (
    <div>
        <Navbar />
        <HeroSection />
        <CategoryCarousel />
        <Latestjob />
        <Footer />
    </div>
  )
}

export default Home