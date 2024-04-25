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


export default function V8() {
  const forthref=useRef()
  const [isSectionInView, setIsSectionInView] = useState(false);
  const isInView = useInView(forthref)


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
      <header className="head flex items-center " style={{ overflow: "hidden",position:'fixed',top:0 }}>
        <div className="container mx-auto px-12 flex flex-row items-center justify-between ">
          <div className="flex flex-row gap-8 items-center w-fit">
            <img src="/bmwlogo.png" alt="logo"></img>
            <ul className="flex flex-row gap-4 hidden lg:flex" style={{ listStyle: "none", width: 'fit-content' }}>
              <li>Home</li>
              <li>Models</li>
              <li >Electric Future</li>
              <li >Circular World</li>
            </ul>
          </div>
          <button style={{ padding: "4px 48px" }} className=" rounded-3xl h-fit  border-2 border-slate-100 hidden lg:block">Book Test Drive</button>
          <div className="block lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            </svg>
          </div>
        </div>
      </header>
      <EngineScene isInView={isInView}/>

      <section  style={{position:'relative'}}>

        <div className="first flex flex-col items-center justify-center lg:justify-start " style={{height:'100vh'}}><h1 className="w-4/5 lg:w-2/5 text-center mt-0 lg:mt-40" >THE POWER OF V8</h1></div>
        <div className="second-section " style={{height:'100vh'}}>
        <div className="container relative mx-auto h-full px-12 py-16 flex flex-row  justify-between ">

          <h2 className="w-96 " >HOW WE BUILT THE NEW V8</h2>

          {/* <div style={{width:'700px', height:"700px%"}} className="absolute  items-center justify-center hidden lg:flex  top-0 right-36">
            <div style={{width:'700px',height:'700px'}} className="border-2 border-gray-700 rounded-full flex-col items-center justify-center flex py-4 px-4	"> 
            <div style={{width:'600px',height:'600px'}} className="border-2 border-white rounded-full 	"> </div>

            </div>
          </div> */}

          </div>
          </div>
        <div className="third-section " >
        <div className="container relative mx-auto h-full px-12 py-16 flex flex-col gap-16  ">
        <div className="flex flex-col gap-4">
        <h2 className="" style={{width:'40%'}} >JUST THE BEST COMPONENTS</h2>
        <p className="w-64">Breaking apart all the components for you</p>
        <button style={{ padding: "4px 48px" }} className=" rounded-3xl h-fit w-fit  border-2 border-slate-100 ">Book Test Drive</button>
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
