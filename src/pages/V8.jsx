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


export default function V8() {


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
      <EngineScene/>

      <section  >
        <div className="first flex flex-col items-center justify-center lg:justify-start mt-0 lg:mt-32" style={{height:'100vh'}}><h1 className="w-4/5 lg:w-2/5 text-center" >THE POWER OF V8</h1></div>
        <div className="second-section " style={{height:'100vh',background:"white"}}><h2 >hello</h2></div>
        <div className="third-section" style={{height:'100vh'}}><h2 >hello</h2></div>

      </section>

    </>
  )
}
