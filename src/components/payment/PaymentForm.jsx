import {useState} from 'react'
import verve from '../../assets/verve.svg'
import visa from '../../assets/visa.svg'
import paypal from "../../assets/paypal.svg"
import PayStack from '../../payStack'
import { useAppContext } from '../../context/AuthContext'
const PaymentForm = () => {
    const [input, setInput] = useState(false)
        const {handleSubmit, data , paymentMethod, handlePaymentMethod} = useAppContext()
  return (
    <div className="bg-white w-full md:w-2/3 p-5">
        <form className="w-full" onSubmit={(e) => {
    e.preventDefault();}}>
          <div className="w-full mb-4 ">
            <label className="text-left text-lg mb-2">Name</label>
            <input
              className="bg-transparent border border-neutral-200 w-full py-1 px-5 rounded bg-slate-50"
              type="text"
              id="name"
              name='name'
              value={data.name}
              onChange={handleSubmit}
              placeholder='Enter Your Full Name'
              required
            />
          </div>
          <div className='grid grid-cols-2 gap-5'>
          <div className="w-full mb-4 ">
            <label>Email</label>
            <input
              className="bg-transparent border border-neutral-200 w-full py-1 px-5 rounded bg-slate-50"
              type="email"
              id="email"
              name='email'
              value={data.email}
              onChange={handleSubmit}
              placeholder='Enter Your Email Address'
              required
            />
          </div>
          <div className="w-full mb-4 ">
            <label>Phone</label>
            <input
              type="text"
              className="bg-transparent border border-neutral-200 w-full py-1 px-5 rounded bg-slate-50"
              id="phone"
              name='phone'
              value={data.phone}
              onChange={handleSubmit}
              placeholder='Enter Your Phone Number'
              maxLength="11"
              inputMode='numeric'
              required
            />
          </div>
          </div>
          <div className='border border-neutral-300 rounded px-5 py-2 mb-2'>
            <p className='text-lg font-bold pb-2'>Select Payment Methods</p>
          
          <div className='border border-neutral-300 rounded'>
            <div className='flex py-2 px-5 gap-2 md:gap-5' onClick={()=>{handlePaymentMethod("paystack"); setInput(!input)}}>
              <input type="radio" name="" id="payment-method" checked={paymentMethod === "paystack"} />
              <label htmlFor="payment-method" className='flex'>
              <img src={visa} alt="" srcset="" />
                <img src={verve} alt="" srcset="" />
              </label>
            </div>
            <hr />
            {input && (
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 px-5 py-2'>
            <input
              type="text"
              className="bg-transparent border border-neutral-200 w-full py-1 px-5 rounded bg-slate-50"
              id="card-number"
              name='cardNumber'
              value={data.cardNumber}
              onChange={handleSubmit}
              placeholder='Enter Your card Number'
              maxLength="19"
              inputMode='numeric'
              required
            />
              <input
              type="text"
              className="bg-transparent border border-neutral-200 w-full py-1 px-5 rounded bg-slate-50"
              id="card-name"
              name='cardName'
              value={data.cardName}
              onChange={handleSubmit}
              placeholder='Enter Your Card Name'
              required
            />
              <input
              type="date"
              name='date'
              className="bg-transparent border border-neutral-200 w-full py-1 px-5 rounded bg-slate-50"
              id="expiration-date"
              value={data.date}
              onChange={handleSubmit}
              placeholder='Enter Your card Expiration Date'
              required
            />
              <input
              type="text"
              className="bg-transparent border border-neutral-200 w-full py-1 px-5 rounded bg-slate-50"
              id="cvv"
              name='cvv'
              value={data.cvv}
              onChange={handleSubmit}
              placeholder='Enter Your CVV'
              inputMode='numeric'
              maxLength={3}
              required
            />
            </div>
            )}
          </div>
          <div className='border border-neutral-300 rounded mt-2'>
            <div className='flex py-2 px-5 gap-2 md:gap-5'>
              <input type="radio" name="" id="" />
              <label htmlFor="" className='flex'>
              <img src={paypal} alt="" srcset="" />
                           </label>
            </div>
            </div>
          </div>
        </form>
        <button className=' w-full md:hidden'>  <PayStack/></button>
      
</div>
  )
}

export default PaymentForm