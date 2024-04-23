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
import { Engine } from './Engine';
import { Plane } from '@react-three/drei';


export default function Scene({handleScroll,scrollOffset}) {

  const grpref=useRef()
 // Check window width
 const windowWidth = window.innerWidth;
const [pgnumber,setPgNumber]=useState(6.8);
 // Define position based on window size
 let positionX = 12;
 let positionY = -1;



 if (windowWidth < 600) {
   positionX = 8;
   positionY = -4;
 }


 useFrame(()=>{
  console.log(scrollOffset)

 })



// 



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
     
      <ScrollControls  pages={pgnumber} damping={0.1}>
        
  {/* Canvas contents in here will *not* scroll, but receive useScroll! */}
<Cloud position={[2,0,-15]} opacity={0.2} speed={0.3}/>

  <Scroll html style={{width:'100%'}}>
    {/* DOM contents in here will scroll along */}
    
    
    <section style={{display:'flex', justifyContent:'end' ,height:'100vh'}} >
      <div className='flex container px-10 py-8 mx-auto items-end h-100 justify-end'> <div className='flex flex-col gap-8'  style={{width:'700px'}}>
        
        <div className='flex flex-col gap-4 lg:flex-row justify-between'>
        <p className='text-2xl lg:text-4xl'>The all new</p>
        <img className='w-40 lg:w-fit' src='./m3logo.png'></img>
        </div>
        <h1  >BMW M3 GTR
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
          <div className='flex flex-wrap	  py-2 px-2 h-fit bg-zinc-900 gap-2'>
            <img className='h-20 lg:h-40 w-54 lg:w-74 ' src='/images/engine1.png'></img>
            <img className='h-20 lg:h-40 w-54 lg:w-74' src='/images/engine2.png'></img>
            <img className='h-20 lg:h-40 w-54 lg:w-74' src='/images/engine3.png'></img>

            </div>
        </div>
      </div>

    </section>
    <section style={{height:'100vh'}} className='flex flex-col justify-end'>
      <div className='container flex flex-col items-start  mx-auto gap-8 px-8 py-8'>
        <div className='smallBMW '>
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
<div className='flex flex-wrap  py-2 px-2 h-fit bg-zinc-900 gap-2'>
            <img className='h-20 lg:h-40 w-54 lg:w-74 ' src='/images/body1.png'></img>
            <img className='h-20 lg:h-40 w-54 lg:w-74' src='/images/body2.png'></img>
            <img className='h-20 lg:h-40 w-54 lg:w-74' src='/images/body3.png'></img>

            </div></div>
          
        </div>
      </div>
      

    </section>
    <section style={{height:'100vh'}} className='flex justify-end items-center'>
    <div  className='container flex flex-col h-fit mx-auto px-8 lg:px-24 '>
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
    <section className='relative' style={{background:'#252C46',height:'160vh',width:"100%",bottom:'0%',zIndex:0}}>
        <img src='/images/enginewireframe.png' alt="wireframe engine" className='absolute w-120 lg:w-3/5 right-0'></img>
      
      <div style={{ width:'100%',position:'relative',bottom:0}} className='container flex flex-col lg:flex-row h-fit  lg:justify-between mx-auto px-8 lg:px-24 py-8 gap-8 '>
      
      <div className='flex flex-col h-fit w-100 gap-16 relative'> 
      <h2 className='text-white mt-16 flex flex-row gap-2'>THE<span className='text-red-500'>V8</span>  ENGINE</h2> 
      <div className='flex flex-col gap-6 '>
        <div className='flex-col flex '><p>Dispacement</p><h3 className='text-6xl uppercase' style={{fontFamily:'Tungsten-Bold'}}>244 cu in (3997cc)</h3></div>
        <div className='flex-col flex '><p>Power</p><h3 className='text-6xl uppercase' style={{fontFamily:'Tungsten-Bold'}}>444 bhp @ 7500 rpm</h3></div>
        <div className='flex-col flex '><p>Torque</p><h3 className='text-6xl uppercase' style={{fontFamily:'Tungsten-Bold'}}>354 lb-ft @ 5500 rpm</h3></div>
        <div className='flex-col flex '><p>Engine Type</p><h3 className='text-6xl uppercase' style={{fontFamily:'Tungsten-Bold'}}>DOHC 32-valve V-8</h3></div>
        <div className='flex-col flex '><p>Aluminum block and heads</p><h3 className='text-6xl uppercase' style={{fontFamily:'Tungsten-Bold'}}>Yes</h3></div>

      </div>
      </div>
      <div className='w-100 lg:w-3/5 mt-0 lg:mt-32  h-fit'>
      <Canvas  shadows style={{height:'500px'}}
      
      camera={{
        fov: 10,
        near: 0.5,
        far: 200,
        position: [0, 1, 24]
      }}>
        <group ref={grpref}>
      <Engine/>
      
      

      </group>
   <pointLight castShadow receiveShadow color={"grey"}  intensity={5000} position={[0, 6, -5]} />
   <pointLight castShadow receiveShadow color={"grey"}  intensity={1000} position={[0, -6, 5]} />

</Canvas>
</div>
      </div>

      </section>
      <section style={{height:'60vh',backgroundImage:'url(/images/carblueprint.png)',backgroundSize:'cover'}} className='flex flex-col w-100 gap-8 items-center px-12 justify-center' >
      <h3 style={{fontFamily:"Tungsten-Bold",textShadow:'1px 3px #000000',textAlign:'center'}} className='w-100 lg:w-2/5 text-4xl lg:text-6xl'>GAIN ACCESS TO ALL THE SPECS
OF THE NEW GTR</h3>
<button style={{padding:"4px 48px"}} className=" rounded-3xl h-fit w-fit  border-2 bg-white text-slate-900 border-slate-900">Download Blueprint</button>

      </section>

      <section style={{height:'60vh',width:"100%",bottom:'0%',zIndex:1}}>
      <div style={{background:'#161515', width:'100%',height:'100%',position:'relative',bottom:0}} className='container flex flex-col h-fit mx-auto px-8 lg:px-24 py-8 '>
        <div className='flex flex-col gap-10 justify-between h-full'>
        <div className='flex flex-col lg:flex-row gap-8 w-full justify-between'>
          <div className='flex flex-col gap-4'>
        <span className='text-5xl quicklinks'   >QUICK LINKS</span>

          <ul className='flex flex-col gap-2'  >
            <li  >Home</li>
            <li  >BMW in your country</li>
            <li  >Contact</li>
            <li  >Cookies</li>

          </ul>
          </div>
          <img className='h-fit  w-full lg:w-fit' src="/images/biglogo.png" alt="logo" />
        </div>

        <div style={{fontSize:'18px', }}><p style={{fontSize:'18px', }}>This is just  a concept website. The BMW logo is trademark of BMW motors.</p></div>
        </div>
      </div>
      
      </section>

  </Scroll>
  
  <Car  handleScroll={handleScroll}/>
  <Road />
  

</ScrollControls>


    </>
  )
}
