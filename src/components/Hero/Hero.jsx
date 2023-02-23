import React from "react";
import heroimg from '../../assets/hero.jpg'
import {useNavigate} from 'react-router-dom'


function Hero() {
  const navigate = useNavigate()

  return (
    <div className='h-[100vh] flex items-center' 
    style={{backgroundImage:`url('${heroimg}')`,backgroundSize: 'cover'}}>
        <div className='max-w-[80%] md:max-w-2xl m-4 md:m-52 '>
                <p className='text-4xl lg:text-5xl text-gray-100 font-bold drop-shadow-md'>
                Hire the best Candidate for any job, online.
                </p>
                <div className='flex gap-6 my-5'>
                 <button className='py-2 px-3 lg:px-5 font-bold  rounded bg-gray-100 hover:bg-gray-50  text-gray-900' onClick={()=>navigate('/empolyeeList')}>Get started</button>
                </div>
            </div>
    </div>
  )
}

export default Hero