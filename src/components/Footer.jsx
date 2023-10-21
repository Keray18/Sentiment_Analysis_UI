import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <div className=' absolute bottom-3 flex flex-col justify-center font-semibold items-center'>
        <h4>Created by - Keshav Bahoray</h4>
        <p>@ 2020 - {year}</p>
    </div>
  )
}

export default Footer