import React, { useEffect, useRef } from 'react';
import { Canvas, useFrame, useThree } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';
import { Environment } from '@react-three/drei';
import { PerspectiveCamera } from '@react-three/drei';
import { Bloom, ChromaticAberration, DepthOfField, EffectComposer, Noise, Vignette } from '@react-three/postprocessing';
import { Car } from './Bmw';
import { Road } from './American_road';
import { ScrollControls, Scroll, useScroll } from '@react-three/drei';
import { useLayoutEffect } from 'react';
import gsap from 'gsap';

function Foo(props) {
  const ref = useRef()
  const data = useScroll()

  console.log(data)
  useFrame(() => {
    // data.offset = current scroll position, between 0 and 1, dampened
    // data.delta = current delta, between 0 and 1, dampened

    // Will be 0 when the scrollbar is at the starting position,
    // then increase to 1 until 1 / 3 of the scroll distance is reached
    const a = data.range(0, 1 / 3)
    // Will start increasing when 1 / 3 of the scroll distance is reached,
    // and reach 1 when it reaches 2 / 3rds.
    const b = data.range(1 / 3, 1 / 3)
    // Same as above but with a margin of 0.1 on both ends
    const c = data.range(1 / 3, 1 / 3, 0.1)
    // Will move between 0-1-0 for the selected range
    const d = data.curve(1 / 3, 1 / 3)
    // Same as above, but with a margin of 0.1 on both ends
    const e = data.curve(1 / 3, 1 / 3, 0.1)
    // Returns true if the offset is in range and false if it isn't
    const f = data.visible(2 / 3, 1 / 3)
    // The visible function can also receive a margin
    const g = data.visible(2 / 3, 1 / 3, 0.1)
  })
  return <mesh ref={ref} {...props} />
}

export default function Scene() {
  const cameraRef = useRef();
  const { camera } = useThree();
  const tl=useRef()

  console.log(scroll)
 

  useFrame((state,delta)=>{
    // tl.current.seek(scroll.offset * tl.current.duration())
  })

  useLayoutEffect(()=>{
    tl.current=gsap.timeline({defaults:{duration:2, ease:"power1.out"}})
  })

  return (
    <>
      <EffectComposer>
        <Bloom luminanceThreshold={0.4} luminanceSmoothing={1.9} height={100} />
        <Noise premultiply />
        <Vignette />
        <ChromaticAberration offset={[0.0010, 0.0016]} />
        <DepthOfField focusDistance={0} focalLength={800} bokehScale={5.02} height={180} />
      </EffectComposer>

      <PerspectiveCamera ref={cameraRef} makeDefault position={[12, -1, 19]} rotation={[0,0.2,0]} resolution={3000} />
      <Environment background={true} position={[0, 0, 0]} files={'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/hdris/dikhololo/dikhololo_night_1k.hdr'} />
      <pointLight castShadow receiveShadow color={"grey"} intensity={800} position={[-4, 10, 0]} />
      {/* <OrbitControls
        minPolarAngle={-Math.PI / 12}
        maxPolarAngle={Math.PI / 2}
        zoom0={false}
        enableZoom={false}
      /> */}
      
      <ScrollControls  pages={3} damping={0.2}>
  {/* Canvas contents in here will *not* scroll, but receive useScroll! */}
  <Scroll>
    {/* Canvas contents in here will scroll along */}
    <Foo position={[0, 0, 0]} />
    <Foo position={[0, 100, 0]} />
    <Foo position={[0, 100 * 1, 0]} />
  </Scroll>
  <Scroll html style={{width:'100%'}}>
    {/* DOM contents in here will scroll along */}
    <section style={{display:'flex', justifyContent:'end' ,height:'100vh'}} >
    <h1>html in here (optional)</h1>

    </section>
    <section style={{height:'100vh'}}>
    <h1 >second page</h1>

    </section>
    <section style={{height:'100vh'}}>
    <h1>third page</h1>

    </section>
  </Scroll>
  <Car />
  <Road />
  {useScroll()}
</ScrollControls>
    </>
  )
}
