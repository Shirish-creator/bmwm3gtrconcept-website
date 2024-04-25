import Image from "next/image";
import { Inter } from "next/font/google";
import Scene from "../../public/components/Scene";
import React, { useEffect, useRef,useState } from 'react';
import { Canvas } from 'react-three-fiber';
import Head from "next/head";
import Script from 'next/script'
import { useFrame } from "react-three-fiber";
import EngineScene from "../../public/components/EnginePage";
import { useLayoutEffect } from 'react';
import { useInView } from 'framer-motion';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import gsap from "gsap";
import HEADER from "../../public/components/head";

export default function V8() {
  const forthref=useRef()
  const [isSectionInView, setIsSectionInView] = useState(false);
  const isInView = useInView(forthref)
  const tl=gsap.timeline();
  const ringsref=useRef();

  useLayoutEffect(()=>{
    tl
    .to(ringsref.current.style,{
      opacity:1,
    ease: "power1.in",
    scrollTrigger:{
      trigger:'.second-section',
      start:"top bottom",
      end:" top top",
      scrub:true,
      immediateRender:false,
      
  
    }
    },[])
    .to(ringsref.current.style,{
      opacity:0,
    ease: "power1.out",
    scrollTrigger:{
      trigger:'.third-section',
      start:"top bottom",
      end:" top top",
      scrub:true,
      immediateRender:false,
      
  
    }
    },[])
    
  })

  useEffect(() => {
    if (isInView) {
      console.log('Element is in view!');
      setIsSectionInView(true)
    }else{
      setIsSectionInView(false)

      }
  });

  return (
    <>
          <Head>
      <title>Engine</title>
      </Head>
      <Script src="https://cdn.tailwindcss.com"></Script>
     <HEADER/>
      <EngineScene isInView={isInView}/>

      <section  style={{position:'relative'}}>

        <div className="first flex flex-col items-center justify-center lg:justify-start " style={{height:'100vh'}}><h1 className="w-4/5 lg:w-2/5 text-center mt-0 lg:mt-40" >THE POWER OF V8</h1></div>
        <div className="second-section " style={{height:'100vh'}}>
        <div className="container relative mx-auto h-full px-12 py-16 flex flex-col gap-16   ">

          <h2  className="h-fit w-5/6 lg:w-2/5" >HOW WE BUILT THE NEW V8 ...</h2>
          <div className="flex flex-col gap-4 opacity-100">
          <div className="flex  px-12 text-white rounded-full bg-indigo-800 w-fit"><p className="text-xl lg:text-4xl">Galvanized Steel</p></div>
          <div className="flex  px-12 text-white rounded-full bg-red-500 w-fit"><p className="text-xl lg:text-4xl">Over 250 parts</p></div>
          <div className="flex  px-12 text-white rounded-full bg-orange-500 w-fit"><p className="text-xl lg:text-4xl">Simulated Spark</p></div>

         
          </div>
          
          <div style={{width:'700px', height:"700px%"}} ref={ringsref} className=" absolute hidden lg:block items-center justify-center hidden lg:flex  top-0 right-36">
            <div style={{width:'700px',height:'700px'}} className="border-2 border-gray-700 rounded-full flex-col items-center justify-center flex py-4 px-4	"> 
            <div style={{width:'600px',height:'600px'}} className="border-2 border-white rounded-full 	"> </div>

            </div>
          </div>

          </div>
          </div>
        <div className="third-section " >
        <div className="container relative mx-auto h-full px-12 py-16 flex flex-col gap-16  ">
        <div className="flex flex-col gap-4">
        <h2 className="" style={{width:'60%'}} >JUST THE BEST COMPONENTS</h2>
        <p className="w-64">Breaking apart all the components for you</p>
        <button style={{ padding: "4px 48px" }} className=" rounded-3xl h-fit w-fit  border-2 border-slate-100 ">See all Components</button>
        </div>

        <div style={{mixBlendMode:'color-dodge'}} className="flex flex-wrap gap-0">
          <img src="/images/enginesm1.png"></img>
          <img src="/images/enginesm2.png"></img>
          <img src="/images/enginesm3.png"></img>

        </div>
        </div>
        </div>
        <div className="forth-section bg-white" style={{height:'100vh'}}><h2 ></h2></div>

      </section>
      


    </>
  )
}
