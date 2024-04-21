import Image from "next/image";
import { Inter } from "next/font/google";
import Scene from "../../public/components/Scene";
import React, { useEffect, useRef } from 'react';
import { Canvas } from 'react-three-fiber';
import Head from "next/head";
import Script from 'next/script'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
      <title>BMW M3 GTR</title>
      </Head>
      <Script src="https://cdn.tailwindcss.com"></Script>
      <header className="head flex items-center " style={{ overflow: "hidden" }}>
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

      <Canvas shadows style={{ height: '100vh', zIndex: 1, position: 'relative' }} camera={{
        fov: 10,
        near: 0.5,
        far: 1000,
        position: [0, 1, 22]
      }}>
        <Scene />
      </Canvas>
    </>
  );
}
