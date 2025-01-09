import React from 'react'
import NavBar from '../../components/Navbar'
import HeroSlider from '../../components/HeroSlider'
import BackgroundLayout from '../../layout/BackgroundLayout'
import MenuList from '../../components/MenuList'
import Footer from '../../components/Footer'
import Modal from '../../components/modal/ProductModal'

const LandingPage = () => {
  return (
    <BackgroundLayout>
          <NavBar />
      <HeroSlider />
      <MenuList />
      <Footer/>
      <Modal/>
   
    </BackgroundLayout>
  )
}

export default LandingPage