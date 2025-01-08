import React, { useState } from 'react'
import PaymentForm from './PaymentForm'
import PaymentCart from './PaymentCart'
const Payment = () => {
  return (

         <div className=" mt-20 flex justify-between items-start gap-5 w-full px-3 md:px-10 lg:px-20 h-full mb-5">
   
     <PaymentForm/>
     <PaymentCart/>

    </div>
  )
}

export default Payment