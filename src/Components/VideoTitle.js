import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-[18%] pl-8 md:px-24 absolute w-screen aspect-video text-white bg-gradient-to-r from-black'>
        <h1 className=' text-lg md:text-3xl font-bold'>{title}</h1>
        <p className='py-3 md:py-6 text-xs md:text-lg w-full md:w-1/4'>{overview}</p>
        <div>
            <button className='bg-white  text-black p-2 px-10 text-sm md:text-xl rounded-lg hover:bg-opacity-50'>
              Play
            </button>
            <button className='bg-gray-500 mx-2 text-black p-2 px-10 text-sm md:text-xl  rounded-lg'>
              More Info
            </button>
        </div>
    </div>
  )
}

export default VideoTitle