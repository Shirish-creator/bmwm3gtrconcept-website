'use client'


import React, { useEffect, useRef,useState } from 'react';
import { Canvas, useFrame, useThree } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';
import { Environment } from '@react-three/drei';
import { PerspectiveCamera } from '@react-three/drei';
import { Bloom, ChromaticAberration, DepthOfField, EffectComposer, Noise, Vignette,LensFlareEffect } from '@react-three/postprocessing';
import { Car } from './Bmw';
import { Road } from './American_road';
import { ScrollControls, Scroll, useScroll,Cloud, Sky } from '@react-three/drei';
import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { OrthographicCamera } from '@react-three/drei';
import { Car2 } from './smallbmw';
import { motion  } from 'framer-motion';
import { useInView } from "react-intersection-observer";

export default function Scene() {
 // Check window width
 const windowWidth = window.innerWidth;
const [pgnumber,setPgNumber]=useState(6.5);
 // Define position based on window size
 let positionX = 12;
 let positionY = -1;

 if (windowWidth < 600) {
   positionX = 8;
   positionY = -4;
 }

//  useEffect(()=>{
//   if (windowWidth < 600) {
//     setPgNumber(4.55)
//   }else{
//     setPgNumber(4.4)

//   }
//  })




  const cameraRef = useRef();
  const { ref: firstRef, inView: firstInView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });
  const { ref: secondRef, inView: secondInView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });
  const { ref: thirdRef, inView: thirdInView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });


  return (
    <>
      <EffectComposer
      depthBuffer={true}
      >
        <Bloom luminanceThreshold={1.4} luminanceSmoothing={2.9} height={100} />
        <Noise premultiply />
        <Vignette eskil={false} offset={0.01} darkness={0.8} />
        <ChromaticAberration offset={[0.0020, 0.0016]} />
        <DepthOfField focusDistance={1} focalLength={0.02} bokehScale={1} height={480} />
      </EffectComposer>

      <PerspectiveCamera ref={cameraRef} makeDefault position={[positionX, positionY, 19]} rotation={[0,0.2,0]} resolution={3000} />
      <Environment  background={true} position={[0, 0, 0]} files={'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/hdris/moonless-golf/moonless_golf_1k.hdr'} />
      <pointLight castShadow receiveShadow color={"grey"} intensity={800} position={[-4, 10, 0]} />
     
      
      <ScrollControls  pages={pgnumber} damping={0.2}>
        
  {/* Canvas contents in here will *not* scroll, but receive useScroll! */}
<Cloud position={[2,0,-15]} opacity={0.2} speed={0.3}/>

  <Scroll html style={{width:'100%'}}>
    {/* DOM contents in here will scroll along */}
    
    
    <section style={{display:'flex', justifyContent:'end' ,height:'100vh'}} >
      <div className='flex container px-10 py-8 mx-auto items-end h-100 justify-end'> <div className='flex flex-col gap-8'  style={{width:'700px', overflow:"hidden"}}>
        
        <div className='flex flex-col gap-4 lg:flex-row justify-between'>
        <p className='text-2xl lg:text-4xl'>The all new</p>
        <img className='w-40 lg:w-fit' src='./m3logo.png'></img>
        </div>
        <h1 style={{overflow:'hidden'}}>BMW M3 GTR
REIMAGINED</h1>
<button style={{padding:"4px 48px"}} className=" rounded-3xl h-fit w-fit  border-2 border-slate-100">Read More</button>
</div></div>
    

    </section>
    <section style={{height:'100vh'}} className='flex justify-end items-end'>
    <div  className='container flex flex-col h-fit mx-auto px-8 py-4'>
        <div className='flex flex-col lg:flex-row justify-between items-start gap-10'>
          <div  className='flex flex-col gap-4'>
          <motion.h2
          ref={firstRef}
           initial={{ opacity: 0 }}
           animate={{ opacity: firstInView ? 1 : 0 }} // animate opacity to 1 when inView is true
           transition={{ duration: 1 }}
          >SAME OLD V8</motion.h2>
          <p>We have kept your loved v8 engine right where
it belongs</p>
<button style={{padding:"4px 48px"}} className=" rounded-3xl h-fit w-fit  border-2 border-slate-100">Read More</button>

          </div>
          <div className='flex flex-row  py-2 px-2 h-fit bg-zinc-900 gap-2'>
            <img className='h-20 lg:h-40 w-54 lg:w-74 ' src='/images/engine1.png'></img>
            <img className='h-20 lg:h-40 w-54 lg:w-74' src='/images/engine2.png'></img>
            <img className='h-20 lg:h-40 w-54 lg:w-74' src='/images/engine3.png'></img>

            </div>
        </div>
      </div>

    </section>
    <section style={{height:'100vh'}} className='flex flex-col justify-end'>
      <div className='container flex flex-col items-start  mx-auto gap-8 px-8 py-8'>
        <div className='smallBMW'>
        <Canvas shadows 
      
      >

   <pointLight castShadow receiveShadow color={"grey"} intensity={50} position={[-4, 10, 0]} />
<Car2/>

</Canvas>
        </div>
        <div  className='flex flex-col w-full  lg:flex-row justify-between h-fit items-start gap-10'>
          <div className='flex flex-col gap-4  justify-end'>
          <motion.h2
          ref={secondRef}
           initial={{ opacity: 0 }}
           animate={{ opacity: secondInView ? 1 : 0 }} // animate opacity to 1 when inView is true
           transition={{ duration: 1 }}
          >WIDE BODY KIT</motion.h2>          

          </div>
          <div className='flex flex-col gap-4'><p>We know you like it wide</p>
<div className='flex flex-row  py-2 px-2 h-fit bg-zinc-900 gap-2'>
            <img className='h-20 lg:h-40 w-54 lg:w-74 ' src='/images/body1.png'></img>
            <img className='h-20 lg:h-40 w-54 lg:w-74' src='/images/body2.png'></img>
            <img className='h-20 lg:h-40 w-54 lg:w-74' src='/images/body3.png'></img>

            </div></div>
          
        </div>
      </div>
      

    </section>
    <section style={{height:'100vh'}} className='flex justify-end items-end'>
    <div  className='container flex flex-col h-fit mx-auto px-8 lg:px-24 py-44'>
        <div className='flex flex-col lg:flex-row  items-start gap-10'>
          <div style={{width:'65%'}} className='flex flex-col gap-4 '>
          <motion.h2
          ref={thirdRef}
           initial={{ opacity: 0 }}
           animate={{ opacity: thirdInView ? 1 : 0 }} // animate opacity to 1 when inView is true
           transition={{ duration: 1 }}
           className='w-100'
          >READY TO RULE 
          THE STREETS AGAIN</motion.h2>
          <p>Just like the old days.</p>

          </div>
          
        </div>
      </div>

    </section>
    <section style={{height:'200vh',width:"100%",bottom:'0%',zIndex:0}}>
      <div style={{background:'white', width:'100%',height:'100%',position:'relative',bottom:0}} className='container flex flex-col h-fit mx-auto px-8 lg:px-24 py-8 '>
        
      </div>
      
      </section>
      <section style={{height:'50vh',width:"100%",bottom:'0%',zIndex:1}}>
      <div style={{background:'#161515', width:'100%',height:'100%',position:'relative',bottom:0}} className='container flex flex-col h-fit mx-auto px-8 lg:px-24 py-8 '>
        <div className='flex flex-col gap-10 justify-between h-full'>
        <div className='flex flex-col lg:flex-row gap-8 w-full justify-between'>
          <div className='flex flex-col gap-4'>
        <span className='text-5xl quicklinks' style={{overflow:'hidden'}} >QUICK LINKS</span>

          <ul className='flex flex-col gap-2'  >
            <li style={{overflow:'hidden'}}>Home</li>
            <li style={{overflow:'hidden'}}>BMW in your country</li>
            <li style={{overflow:'hidden'}}>Contact</li>
            <li style={{overflow:'hidden'}}>Cookies</li>

          </ul>
          </div>
          <img className='h-fit  w-full lg:w-fit' src="/images/biglogo.png" alt="logo" />
        </div>
        <div style={{fontSize:'18px',overflow:'hidden'}}><p style={{fontSize:'18px',overflow:'hidden'}}>This is just  a concept website. The BMW logo is trademark of BMW motors.</p></div>
        </div>
      </div>
      
      </section>

  </Scroll>
  
  <Car />
  <Road />
  

</ScrollControls>


    </>
  )
}
