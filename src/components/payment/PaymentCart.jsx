import React from 'react'
import { useAppContext } from '../../context/AuthContext'

import PayStack from '../../payStack'
const PaymentCart = ({onClose, onSuccess}) => {
 

    const {cart, cartTotal, paymentMethod} = useAppContext()
  return (
    <div className='hidden md:block md:w-1/3  bg-white p-5 self-start'>
{cart.length && (
  <>
  {cart.map((item)=>{
    const {image, title,price,total, id} = item
    return(
      <div key={id}>
      <div className="grid grid-cols-3 gap-5 justify-between items-start text-center w-full mb-2 ">
        <div className="w-full">
        <img
          src={image}
          alt=""
          srcSet=""
          className="w-full rounded"
          />
         </div> 
        
        <div className='text-left'>
        <p className="pb-2 font-semibold text-base">{title}</p>
        <p className=" font-medium text-sm">#{price}</p>
        </div>
          
      <div className=" text-right">
        <p className="text-xl font-bold"> #{total}</p>
      </div>
    </div>
    <hr />
  
    </div>      
    )
 
})}
<div className='flex justify-between items-center '>
<p className='text-neutral-400 font-bold text-lg'>Subtotal:</p>
<p className='font-bold text-xl'>#{cartTotal}</p>
</div>
<div className='flex justify-between items-center font-bold text-xl'>
<p className='text-neutral-400 font-bold text-lg'>Discount:</p>
<p>#0</p>
</div>
<hr />
<div className='flex justify-between items-center font-bold text-xl'>
<p className='text-neutral-400 font-bold text-lg'>Total:</p>
<p>#{cartTotal}</p>
</div>

{paymentMethod === "paystack"&&
<button className='mt-2 w-full'><PayStack onSuccess={onSuccess} onClose={onClose}/></button>}
</>
)||(
  <p className="text-red-500 text-center font-semibold">
  Your cart is empty.
</p>
)}
 
   </div>
  )
}

export default PaymentCart