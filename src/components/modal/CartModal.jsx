import React from 'react'
import { FaCartPlus, FaRegistered,FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'
import { useAppContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
const CartModal = () => {
    const navigate= useNavigate()
    const {show, dropdownRef, setShow, setAuthStatus} = useAppContext()
    const logout = () => {
       
        setShow(false)
        setAuthStatus(null); 
      navigate("/")
      };
    if (!show) return null;
  return (
    <div ref={dropdownRef} className='absolute bg-white top-14 z-20 right-5 w-1/2 md:w-1/6 p-4 shadow-shadow rounded'>
    
    <ul>
       <li ><a href="/cart" className='flex items-center gap-4 text-base font-semibold pb-4'><FaCartPlus className='text-blue-500'/>Cart</a></li> 
       <li ><a href="/register" className='flex items-center gap-4 text-base font-semibold pb-4'><FaRegistered className='text-blue-500'/>Register</a></li>
       <li ><a href="/login" className='flex items-center gap-4 text-base font-semibold pb-4'><FaSignInAlt className='text-blue-500'/>LogIn</a></li>
        <button onClick={logout} className='w-full bg-blue-500 text-white font-bold text-lg rounded mt-2 flex items-center justify-center gap-4'><FaSignOutAlt/>Log Out</button>
    </ul>

</div>
  )
}

export default CartModal