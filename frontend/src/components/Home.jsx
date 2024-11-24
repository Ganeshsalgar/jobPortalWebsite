import React, { useEffect } from 'react'
import Navbar from './shared/Navbar.jsx'
import HeroSection from './HeroSection.jsx'
import CategoryCarousel from './categoryCarousel.jsx'
import Latestjob from './Latestjob.jsx'
import Footer from './Footer.jsx'
import useGetAllJobs from '@/hooks/useGetAllJobs.jsx'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  useGetAllJobs();
  const {user} = useSelector(store => store.auth)
  const navigate = useNavigate();
  useEffect(() =>{
    if(user?.role === 'recruiter'){
      navigate("/admin/companies")
    }
  },[])
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