import React from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom'

import image from '../images/Capture2.JPG'

const Predict = () => {
  const title = true
  return (
    <div className='flex flex-col justify-center items-center'>
      {title 
      ? <div className=' flex flex-col justify-center items-center absolute top-6'>
          <h2 className='text-3xl mt-4 text-[#75D175] font-medium' >"That's a nice sentiment..."</h2>
          <h2 className='text-6xl mt-5 pt-5'>😀</h2>
        </div>
      : <div className=' flex flex-col justify-center items-center absolute top-6'>
          <img src={image} alt='image' />
        </div> }


      <Link className='absolute bottom-1/2 text-xl mt-[2%] border-4-[#5DD45D] rounded-lg bg-[#5DD45D] hover:cursor-pointer' to='/'>
        <button className='font-extrabold text-[#F5E7E7] md:pr-8 md: pl-8  p-2'>Again !</button>
      </Link>
=

      <Footer />
    </div>
  )
}

export default Predict