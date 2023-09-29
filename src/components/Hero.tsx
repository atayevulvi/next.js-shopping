import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <div className='container relative pt-16'>
        <Image
        className="w-[100%] h-[400px]  object-initial"
        src="/img1.jpg"
        width={1500}
        height={400}
        alt='Hero Image'
        />

        <div className="hidden  text-center sm:block absolute top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%] bg-white w-[250px] h-[200px] space-y-6 lg:w-[300px] lg:h-[270px]">
            <h2 className='text-[22px] lg:text-[30px] xl:text-[30px] leading-tight'>New Lipsticks for your girl</h2>
            <p className='text-gray-600 text-[14px] xl:text-[16px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button className='bg-[#333]  uppercase text-white text-[12px] lg:text-[16px] py-2 xl:py-4 px-8 rounded-md hover:bg-red-500'>Shop now</button>
        </div>

<div>
    
</div>
        
    </div>
  )
}

export default Hero