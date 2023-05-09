import React from 'react';
import hoodie from '../logo/hoodie.png';
import main from '../logo/main.png';
import moonshine from '../logo/moonshine.png';
import bmw from '../logo/bmw.png';
import aiesec from '../logo/aiesec.png';
import roguecode from '../logo/roguecode.png';


const Banner = () => {
  return (
    <div>
      <div className='bg-gradient-to-r from-indigo-400 to-purple-500 w-full h-full'>
          {/* LEFT-SIDE HEAD */}
        <div className='text-white text-center font-bold text-sm md:text-6xl pt-10'>
          <h1 className='md:ml-20 md:pt-10 md:text-left'>"Create your style, wear it</h1>
          <h1 className='pt-5 md:ml-20 md:pt-10 md:text-left'>loud and proud with</h1>
          <h1 className='pt-5 md:ml-20 md:pt-10 md:text-left'>The Wave Shop."</h1>
        </div>
        
        {/* LEFT-SIDE TEXT */}
        <div>
            <p className='hidden sm:flex text-white ml-20 pt-10 text-xl'>Welcome to The Wave Shop, your go-to source for</p>
            <p className='hidden sm:flex text-white ml-20 pt-4 text-xl'>custom merchandise. From t-shirts, hoodies to tote</p>
            <p className='hidden sm:flex text-white ml-20 pt-4 text-xl'>bags and more, we offer high-quality products and a</p>
            <p className='hidden sm:flex text-white ml-20 pt-4 text-xl'>simple online design process. Let us help you create</p>
            <p className='hidden sm:flex text-white ml-20 pt-4 text-xl'>something unique for your business, group or personal</p>
            <p className='hidden sm:flex text-white ml-20 pt-4 text-xl'>style. Thank you for choosing us!</p>
        </div>

        {/* SHOP NOW */}
        <div>
            <button className='hover:text-black bg-white text-purple-500 place-content-center font-bold text-sm mx-auto flex w-72 rounded-md p-2 mt-5 mb-5 md:text-xl md:w-auto md:ml-20 md:mt-10'>Shop Now</button>
        </div>

        {/* RIGHT-SIDE IMAGES */}
        <div className='flex justify-evenly'>
            <img src={main} alt="" className='h-40 rounded-lg'/>
            <img src={hoodie} alt="" className='h-44 rounded-lg'/>
        </div>
      </div>

      {/*LOGO STRIP*/}
      <div className='bg-gray-100'>
        <div className='flex place-content-center p-2 font-bold'>
          <h2>OUR PARTNERS</h2>
        </div>
        <div className='flex justify-evenly p-2 h-16 md:h-auto md:p-5'>
            <img src={moonshine} alt="" />
            <img src={bmw} alt="" />
            <img src={aiesec} alt="" />
            <img src={roguecode} alt="" />
        </div>
      </div>


    </div>
  )
}

export default Banner