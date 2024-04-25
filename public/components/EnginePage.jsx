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
import { Engine2 } from './Engine2';
import { Plane } from '@react-three/drei';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

export default function EngineScene({isInView}) {
const canvasref=useRef()
const cameraRef=useRef()
const tl=gsap.timeline();

useLayoutEffect(()=>{
  tl
  .to(canvasref.current.style,{
    transform: "translateY(-100%)",
  ease: "power1.in",
  scrollTrigger:{
    trigger:'.forth-section',
    start:"top +=650",
    end:" top top",
    scrub:true,
    immediateRender:false,
    

  }
  },[])
  
})

  return (
    <>
    <Canvas ref={canvasref}  shadows style={{ height: '100vh',width:'100%',position:'fixed',top:0, zIndex: 1, pointerEvents:'none' }} camera={{
        fov: 10,
        near: 0.5,
        far: 1000,
        position: [0, 1, 22]
      }}>
        
        

      <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 0, 5]} rotation={[0,0.2,0]} resolution={3000} />
     
     <Engine2/>
      </Canvas>
     

    </>
  )
}
