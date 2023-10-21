import React from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className=' flex flex-col justify-center items-center'>
        <header className='ml-1 max-w-[100%] mr-1 absolute top-1 font-semibold  m-10 md:text-3xl text-xl text-[#75D175]'>
            <h2 className=' w-[100%]'>Welcome to the Sentiment Analysis</h2>
        </header>
        
        <div className='md:w-[70%] lg:w-[50%] w-[100%] h-[10rem]  absolute bottom-1/2 flex flex-col justify-center items-center'>
            <textarea className=' w-[90%] h-[60%] outline-none p-5 rounded-full' placeholder="What's Up !" />
            <Link className=' ml-[75%] mt-[2%] border-4-[#5DD45D] rounded-lg bg-[#5DD45D] hover:cursor-pointer' to='/predict'>
                <button className='font-extrabold text-[#F5E7E7] p-1 pl-3 pr-3'>Predict</button>
            </Link>
        </div>

        <Footer />
    </div>
  )
}

export default Home