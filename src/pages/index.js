import Image from "next/image";
import { Inter } from "next/font/google";
import Scene from "../../public/components/Scene";
import React, { useEffect, useRef,useState } from 'react';
import { Canvas } from 'react-three-fiber';
import Head from "next/head";
import Script from 'next/script'
import { useFrame } from "react-three-fiber"
import HEADER from "../../public/components/head";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const [scrollOffset,setScrollOffset]=useState(false)

  function handleScroll(){
    setScrollOffset(true)
  }

  
  return (
    <>
      <Head>
      <title>BMW M3 GTR</title>
      </Head>
      <Script src="https://cdn.tailwindcss.com"></Script>
      <HEADER/>

      <Canvas  shadows style={{ height: '100vh', zIndex: 1, position: 'relative' }} camera={{
        fov: 10,
        near: 0.5,
        far: 1000,
        position: [0, 1, 22]
      }}>
        <Scene scrollOffset={scrollOffset} handleScroll={handleScroll} />
      </Canvas>
      
    </>
  );
}
