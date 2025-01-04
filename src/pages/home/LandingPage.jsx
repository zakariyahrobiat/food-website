import React from 'react'
import NavBar from '../../components/Navbar'
import HeroSlider from '../../components/HeroSlider'
import BackgroundLayout from '../../layout/BackgroundLayout'
import MenuList from '../../components/MenuList'
const LandingPage = () => {
  return (
    <BackgroundLayout>
          <NavBar />
      <HeroSlider />
      <MenuList />
    </BackgroundLayout>
  )
}

export default LandingPage