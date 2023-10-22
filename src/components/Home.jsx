import React, { useState } from 'react'
import Footer from './Footer'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
  const [sentence, setSentence] = useState('')
  const [loading, setLoading] = useState(false)
  const nav = useNavigate()

  const handlePrediction = () => {
    fetch('https://sentiment-backend.onrender.com/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ sentence }),
    })
    .then((response) => response.json())
    .then((data) => {
      setLoading(true)
      nav(`/predict?prediction=${data.prediction}`)
    })
    .catch((error) => {
      console.error('Error:', error)
    })

  }



  return (
    <div className=' flex flex-col justify-center items-center'>
        {loading ? (
        <div>Loading...</div> // Render a loading indicator
      ) : (
        <div>
          <header className='ml-1 max-w-[100%] mr-1 absolute top-1 font-semibold  m-10 md:text-3xl text-xl text-[#75D175]'>
            <h2 className=' w-[100%]'>Welcome to the Sentiment Analysis</h2>
        </header>
        
        <div className='md:w-[70%] lg:w-[50%] w-[100%] h-[10rem]  absolute bottom-1/2 flex flex-col justify-center items-center'>
            <textarea className=' w-[90%] h-[60%] outline-none p-5 rounded-full' 
              placeholder="What's Up !" 
              value={sentence}
              onChange={(e) => setSentence(e.target.value)}
            />
            <Link className=' ml-[75%] mt-[2%] border-4-[#5DD45D] rounded-lg bg-[#5DD45D] hover:cursor-pointer' to='/predict'>
                <button className='font-extrabold text-[#F5E7E7] p-1 pl-3 pr-3'
                  onClick={handlePrediction}
                  disabled={sentence.trim() === ''}
                >Predict</button>
            </Link>
        </div>

        <Footer />
        </div>
      )}
    </div>
  )
}

export default Home