import React from 'react'

import {styles} from "../styles"; 
import {motion}  from "framer-motion"
const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'> 
   <img  src="" className="w-full h-full top-0 bg-cover object-cover  left-0 bg-purple-300  " /> 
     <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start  gap-8`} >

      <div className="flex flex-col justify-center items-center mt-5 "> 
      <div className='w-5 h-4 rounded-full bg-[#915eff]'/> 
      <div  className="w-[4px] sm:h-80  bg-gradient-to-r from-purple-500 to-purple-900 opacity-30"/>
         
        </div> 

        {/* bg-gradient-to-br from-purple-400 to-purple-600 hover:bg-purple-900 focus:ring-2 focus:outline-none focus:ring-fuchsia-500 dark:focus:ring-fuchsia-950 */}
      <div> 
        <p> start /</p>
        <h1 className={` font-Raleway text-5xl font-semibold text-white dark:text-gray-200`}> Hi, My name is  <span className=' text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-br font-Raleway from-pink-400 to-purple-600 '>Mukta Kumari </span> </h1> 
        <p  className={` `}> I develop web applications, designing interfaces, and possess familiarity with WordPress.
         </p>
     
       </div>
       <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-50 '>
        <a href='#about'>
          <div className='w-[32px] h-[62px] rounded-3xl border-4 border-secondary flex justify-center  items-start p-2 '> 
          
          <motion.div animate={{ y: [0, 24, 0]}} transition={{ duration: 1.5 , repeat: Infinity, repeatType: "loop"}} className='w-3 h-3 rounded-full bg-secondary mb-1'/>
          </div>
           </a>

         </div>

       
      </div> 
    
       
     </section>
  )
}

export default Hero ;