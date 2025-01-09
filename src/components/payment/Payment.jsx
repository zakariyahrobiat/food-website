import React from 'react'
import PaymentForm from './PaymentForm'
import PaymentCart from './PaymentCart'
import { useNavigate } from 'react-router-dom'

const Payment = () => {
  const  navigate = useNavigate()
  const handleSuccess=()=>{
    
    alert("Thanks for doing business with us! Come back soon!!");
    navigate("/")
      
  } 
 const handleClose=()=>{
alert("Wait! Don't leave :(")
  }
  
  return (

         <div className=" mt-20 flex justify-between items-start gap-5 w-full px-3 md:px-10 lg:px-20 h-full mb-5">
   
     <PaymentForm onSuccess={handleSuccess} onClose={handleClose}/>
     <PaymentCart onSuccess={handleSuccess} onClose={handleClose}/>

    </div>
  )
}

export default Payment