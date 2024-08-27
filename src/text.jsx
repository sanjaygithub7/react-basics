import React from 'react'
import image from './assets/react.svg'

export default function text() {
  return (
    <div className='flex'>

      <div>
      <img
        src={image}
        alt='Main'
        className='size-32 animate-fade-down' />   

      </div>

      

       <div className='flex space-x-4 mt-3 animate-fade-down'>
          <p className='text-2xl md:text-4xl lg:text-4xl font-extrabold mt-1'>
            Frontend{' '}
            <span className='text-3xl md:text-4xl lg:text-4xl'>DEVELOPER</span>
          </p>

          <p className='mt-5 mr-6 flex justify-center lg:font-light md:font-normal md:text-xl lg:text-base lg:w-full md:mt-4 lg:pr-10 lg:text-left animate-fade-down'>
          Front-End Developer specializing in crafting interactive user experiences with HTML, CSS, and JavaScript. Passionate about modern frameworks and delivering visually stunning, highly functional websites.
        </p>
        </div>

    
    </div>
  )
}
