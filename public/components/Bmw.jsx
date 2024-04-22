
import React, { useRef } from 'react'
import { PresentationControls, useGLTF,useScroll } from '@react-three/drei'
import { useThree } from 'react-three-fiber'
import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { useFrame } from 'react-three-fiber';
import { Html } from 'next/document';

export function Car(props) {
  const { nodes, materials } = useGLTF('../models/bmw.glb')
  const { camera } = useThree();
  const data = useScroll();
  const carref=useRef()

  const tl=useRef()

  // position={[12, -1, 19]} 
  // rotation={[0,0.2,0]}

  useFrame((state, delta) => {
    tl.current.seek(data.offset*tl.current.duration());
    // console.log(data.offset)
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline({ defaults: { duration: 10, ease: "power1.out" } })
      .to(camera.position, { x: 12, y: -1, z: -4, duration: 8 }, 10) // Camera position change at t=0s
      .to(camera.rotation, { x: 0, y: 1.5, z: 0, duration: 8 }, 10) // Camera position change at t=0s

      .to(camera.position, { x: 5, y: -1, z: -20, duration: 10 }, 20) // Camera position change at t=0s
      .to(camera.rotation, { x: 0, y: 3, z: 0, duration: 10 }, 20) // Camera position change at t=0s

      .to(camera.position, { x: 5, y: 20, z: -10, duration: 10 }, 40) // Camera position change at t=0s
      .to(camera.rotation, { x: 1.5, y: 3.2, z: 0, duration: 10 },40) // Camera position change at t=0s

      
      .to(camera.position, { x: 5, y: 20, z: -10, duration: 10 }, 65) // Camera position change at t=0s
      .to(camera.rotation, { x: 1.5, y: 3.2, z: 0, duration: 10 },65) // Camera position change at t=0s
      
      .to(camera.position, { x: 5, y: 20, z: -10, duration: 10 }, 75) // Camera position change at t=0s
      .to(camera.rotation, { x: 1.5, y: 3.2, z: 0, duration: 10 },75) // Camera position change at t=0s

      .to(camera.position, { x: 5, y: 20, z: -10, duration: 10 }, 95) // Camera position change at t=0s
      .to(camera.rotation, { x: 1.5, y: 3.2, z: 0, duration: 10 },95) // Camera position change at t=0s
      

  }, [camera.position, camera.rotation]);

  

  return (
    <group {...props} rotation={[0,-1.6,0]} dispose={null} >
      <group rotation={[-Math.PI / 2, 0, 0]} ref={carref} position={[0,-4,18]}>


        <mesh castShadow   geometry={nodes.Object_2.geometry} material={materials['11Mtl'].clone()} ></mesh>
        {/* <mesh castShadow   geometry={nodes.Object_2.geometry} ><meshBasicMaterial color={"white"} wireframe/></mesh> */}

        <mesh castShadow   geometry={nodes.Object_3.geometry} material={materials.Brake1Mtl} />
        <mesh castShadow   geometry={nodes.Object_4.geometry} material={materials.Cylinder1Mtl} />
        <mesh castShadow   geometry={nodes.Object_5.geometry} material={materials.F1Mtl} />
        <mesh castShadow   geometry={nodes.Object_6.geometry} material={materials.F2Mtl} />
        <mesh castShadow   geometry={nodes.Object_7.geometry} material={materials.Fri2Mtl} />
        <mesh castShadow   geometry={nodes.Object_8.geometry} material={materials.Fuelmisc1Mtl} />
        <mesh castShadow   geometry={nodes.Object_9.geometry} material={materials.Glass1Mtl} />
        <mesh castShadow   geometry={nodes.Object_10.geometry} material={materials.Meshpart10Mtl} />
        <mesh castShadow   geometry={nodes.Object_11.geometry} material={materials.Meshpart11Mtl} />
        <mesh castShadow   geometry={nodes.Object_12.geometry} material={materials.Meshpart14Mtl} />
        <mesh castShadow   geometry={nodes.Object_13.geometry} material={materials.Meshpart15Mtl} />
        <mesh castShadow   geometry={nodes.Object_14.geometry} material={materials.Meshpart17Mtl} />
        <mesh castShadow   geometry={nodes.Object_15.geometry} material={materials.Meshpart18Mtl} />
        <mesh castShadow   geometry={nodes.Object_16.geometry} material={materials.Meshpart1Mtl} />
        <mesh castShadow   geometry={nodes.Object_17.geometry} material={materials.Meshpart23Mtl} />
        <mesh castShadow   geometry={nodes.Object_18.geometry} material={materials.Meshpart28Mtl} />
        <mesh castShadow   geometry={nodes.Object_19.geometry} material={materials.Meshpart31Mtl} />
        <mesh castShadow   geometry={nodes.Object_20.geometry} material={materials.Meshpart9Mtl} />
        <mesh castShadow   geometry={nodes.Object_21.geometry} material={materials.Part1Mtl} />
        <mesh castShadow   geometry={nodes.Object_22.geometry} material={materials.Part2Mtl} />
        <mesh castShadow   geometry={nodes.Object_23.geometry} material={materials.R1Mtl} />
        <mesh castShadow   geometry={nodes.Object_24.geometry} material={materials.Rear1Mtl} />
        <mesh castShadow   geometry={nodes.Object_25.geometry} material={materials.Rims1Mtl} />
        <mesh castShadow   geometry={nodes.Object_26.geometry} material={materials.Rims3Mtl} />
        <mesh castShadow   geometry={nodes.Object_27.geometry} material={materials.Rli1Mtl} />
        <mesh castShadow   geometry={nodes.Object_28.geometry} material={materials.Rv1Mtl} />
        <mesh castShadow   geometry={nodes.Object_29.geometry} material={materials.Wheeldecal1Mtl} />
        <mesh castShadow   geometry={nodes.Object_30.geometry} material={materials.Wheeldecal2Mtl} />
      </group>
    </group>
  )
}

useGLTF.preload('../models/bmw.glb')
