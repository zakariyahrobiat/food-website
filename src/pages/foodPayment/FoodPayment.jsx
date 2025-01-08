import React from 'react'
import BackgroundLayout from '../../layout/BackgroundLayout'
import NavBar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Payment from '../../components/payment/Payment'

const FoodPayment = () => {
  return (
    <BackgroundLayout>
        <NavBar/>
        <Payment/>
        <Footer/>

    </BackgroundLayout>
  )
}

export default FoodPayment