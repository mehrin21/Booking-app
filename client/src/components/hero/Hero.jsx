import React from 'react'

import './Hero.css'
import CountUp from 'react-countup';
import {motion} from 'framer-motion'
import Search from '../Search/Search';

const Hero = () => {
  return (
  
    <section className="hero-wrapper">
        <div className="flexCenter paddings innerWidth  hero-container">
            {/* left-side */}
            <div className="flexColStart hero-left">
              <div className="hero-title">
                <div className='orange-circle'/>
                <motion.h1
                 initial={{y:"2rem",opacity:0}}
                 animate={{y:0,opacity:1}}
                 transition={{
                  duration:2,
                  typr:"spring"
                 }}
                 >
                  Discover <br/> 
                  Most Suitable <br/> Property
                  </motion.h1>
              </div>
              <div className='flexColStart hero-des'>
                  <span className='secondaryText'>Find a Variety of Properties that suit you very Easilty</span>
                  <span className='secondaryText'>Forget All Difficulties in Finding a Residence Fot you</span>
              </div>
             <Search />
              <div className="flexCenter stats">
                <div className="flexColCenter stat">
                 
                    <span>
                      <CountUp start={8000} end={9000} duration={4} />
                      <span>+</span>
                    </span>
                 
                    <span className='secondaryText'>Premium Product</span>
                </div>
                <div className="flexColCenter stat">
                  
                    <span>
                      <CountUp start={1950} end={2000} duration={4} />
                      <span>+</span>
                    </span>
                    
                    <span className='secondaryText'>Happy Customers</span>
                </div>
                <div className="flexColCenter stat">
                   <span>
                      <CountUp  end={28}/>
                      <span>+</span>
                    </span>
                    
                    <span className='secondaryText'>Award Winnings</span>
                </div>
              </div>

            </div>
            
            {/* right-side */}
            <div className="flexCenter hero-right">
               <motion.div 
               initial={{x:"7rem",opacity:0}}
               animate={{x:0,opacity:1}}
               transition={{
                duration:2,
                type:"spring"
               }}
               className="image-container">
                <img src="hero-image.png" alt="" />
               </motion.div>
            </div>
        </div>
    </section>
   
  )
}

export default Hero

