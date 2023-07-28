import React from 'react'
import Image from 'next/image';
import useWindowDimensions from '../hooks/getWindowDimensions'

const Hero = () => {

// const { height, width } = useWindowDimensions();
  const width: number = 1000
  return (
    <>
      <section id="hero" className="max-h-full w-screen min-w-full max-w-full bg-transparent">
        <div className='container mx-auto px-4 py-8 text-slate-50 font-reem-kufi'>
          <div className="flex items-center justify-center space-x-4">
            <div className="flex justify-center md:mx-0 md:mr-4 ">
              <div className='h-full w-full relative'>
                <Image
                  src="https://user-images.githubusercontent.com/32769592/256317225-f3c7607f-e661-4d0a-96a1-83665e4918bc.png"
                  alt="Query IQ Logo"
                  width={132}
                  height={0}
                  className='w-[75px] sm:w-[96px] md:w-[112px] lg:w-[132px] min-w-[75px] max-w-[132px] filter drop-shadow'
                />
              </div>
            </div>
            <h1 className='text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold'>Query IQ</h1>
          </div>

        <div className='container mx-auto px-4 mt-8 text-slate-100 font-reem-kufi'>
          <div className='flex flex-col items-center justify-center font-reem-kufi'>
              <h2 className='mt-8 italic text-2xl sm:text-2xl md:text-4xl lg:text-5xl '>
                Your database will thank you!
              </h2>
              <Image
                src='https://user-images.githubusercontent.com/32769592/256666522-7781d527-9e34-449e-9a13-db06fc5390c9.png'
                alt='Query IQ Application Screenshot'
                width={width}
                height={0}
                className='mt-16 filter drop-shadow-lg bg-gradient-to-bl from-purple-800 to-teal-400 p-1 rounded-2xl'/>
          </div>
        </div>
        </div>
      </section>
    </>
  )
}

export default Hero
