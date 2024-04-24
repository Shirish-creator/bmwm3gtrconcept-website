/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 engine2.glb 
*/

import React, { useRef,useState,useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from 'react-three-fiber'
import * as THREE from 'three';
import gsap from "gsap";
import { useThree } from 'react-three-fiber';
import {  useTexture, Html ,shaderMaterial, MeshTransmissionMaterial} from '@react-three/drei';
import { useLayoutEffect } from 'react';


export function Engine2({props,percentage,scrollY}) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('../models/engine2.glb')
  const { actions } = useAnimations(animations, group)
  const windowWidth = window.innerWidth;
const [scale,setScale]=useState(0.7)

const { camera } = useThree();
const tl=gsap.timeline();
const discref=useRef()



useFrame(()=>{
  if (windowWidth < 600) {
    setScale(0.5)
  }

  discref.current.rotation.z+=0.1
})

// position={[-1,-2,0]}
useLayoutEffect(()=>{
  // position={[-1,-2.5,0]} rotation={[0.15,0.2,-0.03]}
 

    

  tl
  .to(group.current.position,{
    x:1,
    y:-0.5,
    z:-2,
  scrollTrigger:{
    trigger:'.second-section',
    start:"top bottom",
    end:" top top",
    scrub:true,
    immediateRender:false,
    // markers:true,

  }
  })
  .to(group.current.rotation,{
    x:-0.2,
    y:-0.9,
    z:0,
  scrollTrigger:{
    trigger:'.second-section',
    start:"top bottom",
    end:"top top",
    scrub:true,
    immediateRender:false,
  }
  })
  .to(group.current.position,{
    x:10,
    y:-0.5,
    z:-2,
  scrollTrigger:{
    trigger:'.forth-section',
    start:"top bottom",
    end:" top top",
    scrub:true,
    immediateRender:false,
    // markers:true,

  }
  })

  
  
  
    
  
},[])
  
  return (
    <group ref={group} {...props} dispose={null} position={[-1,-2.5,0]} rotation={[0.15,0.2,-0.03]}>
            <pointLight castShadow receiveShadow color={"grey"} intensity={1000} position={[6, 2, 3]} />

      <group name="Scene">
        <group name="Sketchfab_model" scale={scale} rotation={[0, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[0, 0, 0]}>
              <group name="Cylinder017_32">
                <mesh name="Object_71" geometry={nodes.Object_71.geometry} material={materials['Material.009']} position={[2.96, 0.857, 0.629]} />
              </group>
              <group name="Cylinder018_33">
                <mesh name="Object_73" geometry={nodes.Object_73.geometry} material={materials['Material.009']} position={[-3.225, 0.868, 0.569]} />
              </group>
              <group name="Circle001_31">
                <mesh name="Object_69" ref={discref} geometry={nodes.Object_69.geometry} material={materials['Material.003']} position={[-0.149, -0.174, 3.447]} />
              </group>
              <group name="Cylinder003_0">
                <mesh name="Object_4" geometry={nodes.Object_4.geometry} material={materials['Material.001']} position={[-0.167, -0.346, 0.257]} />
                <mesh name="Object_5" geometry={nodes.Object_5.geometry} material={materials['Material.001']} position={[0.616, -0.347, 0.356]} />
              </group>
              <group name="Cylinder005_2">
                <mesh name="Object_10" geometry={nodes.Object_10.geometry} material={materials['Material.005']} position={[-2.261, 2.556, 0.235]} />
              </group>
              <group name="Cylinder006_3">
                <mesh name="Object_12" geometry={nodes.Object_12.geometry} material={materials['Material.006']} position={[-0.868, 1.59, 0.267]} />
              </group>
              <group name="Cylinder007_4">
                <mesh name="Object_14" geometry={nodes.Object_14.geometry} material={materials['Material.010']} position={[-1.054, 0.536, 2.361]} />
              </group>
              <group name="Cylinder008_7">
                <mesh name="Object_20" geometry={nodes.Object_20.geometry} material={materials['Material.010']} position={[1.08, 0.699, 2.391]} />
              </group>
              <group name="Cylinder009_10">
                <mesh name="Object_26" geometry={nodes.Object_26.geometry} material={materials['Material.010']} position={[-1.389, 0.753, -1.661]} />
              </group>
              <group name="Cylinder010_12">
                <mesh name="Object_30" geometry={nodes.Object_30.geometry} material={materials['Material.010']} position={[1.259, 0.831, -1.644]} />
              </group>
              <group name="Cylinder011_14">
                <mesh name="Object_34" geometry={nodes.Object_34.geometry} material={materials['Material.010']} position={[-1.539, 0.876, -0.325]} />
              </group>
              <group name="Cylinder012_18">
                <mesh name="Object_42" geometry={nodes.Object_42.geometry} material={materials['Material.010']} position={[1.285, 0.893, -0.306]} />
              </group>
              <group name="Cylinder013_19">
                <mesh name="Object_44" geometry={nodes.Object_44.geometry} material={materials['Material.010']} position={[-1.397, 0.801, 0.984]} />
              </group>
              <group name="Cylinder014_21">
                <mesh name="Object_48" geometry={nodes.Object_48.geometry} material={materials['Material.010']} position={[0.911, 0.685, 1.022]} />
              </group>
              <group name="Cylinder015_25">
                <mesh name="Object_57" geometry={nodes.Object_57.geometry} material={materials['Material.005']} position={[1.98, 2.557, 0.323]} />
              </group>
              <group name="Cylinder016_26">
                <mesh name="Object_59" geometry={nodes.Object_59.geometry} material={materials['Material.006']} position={[0.636, 1.586, 0.301]} />
              </group>
              <group name="Cylinder019_40">
                <mesh name="Object_97" geometry={nodes.Object_97.geometry} material={materials['Material.021']} position={[1.666, 1.715, 0.345]} />
                <mesh name="Object_98" geometry={nodes.Object_98.geometry} material={materials['Material.020']} position={[1.847, 1.629, 0.229]} />
                <mesh name="Object_99" geometry={nodes.Object_99.geometry} material={materials['Material.019']} position={[1.859, 1.471, 0.341]} />
              </group>
              <group name="Cylinder020_41">
                <mesh name="Object_101" geometry={nodes.Object_101.geometry} material={materials['Material.026']} position={[-0.969, 2.628, -0.998]} />
                <mesh name="Object_102" geometry={nodes.Object_102.geometry} material={materials['Material.025']} position={[-0.186, 2.611, -2.655]} />
                <mesh name="Object_103" geometry={nodes.Object_103.geometry} material={materials['Material.024']} position={[-0.275, 2.28, 0.368]} />
                <mesh name="Object_104" geometry={nodes.Object_104.geometry} material={materials['Material.023']} position={[-0.109, 2.864, 0.363]} />
                <mesh name="Object_105" geometry={nodes.Object_105.geometry} material={materials['Material.022']} position={[-0.19, 2.36, -0.443]} />
              </group>
              <group name="Cylinder022_42">
                <mesh name="Object_107" geometry={nodes.Object_107.geometry} material={materials['Material.021']} position={[-1.937, 1.715, 0.264]} />
                <mesh name="Object_108" geometry={nodes.Object_108.geometry} material={materials['Material.020']} position={[-2.118, 1.629, 0.148]} />
                <mesh name="Object_109" geometry={nodes.Object_109.geometry} material={materials['Material.019']} position={[-1.986, 1.346, 0.387]} />
              </group>
              <group name="Dir��as001_30">
                <mesh name="Object_67" geometry={nodes.Object_67.geometry} material={materials['Material.001']} position={[-0.145, 0.474, -2.755]} />
              </group>
              <group name="Galvos_dangtelis001_29">
                <mesh name="Object_65" geometry={nodes.Object_65.geometry} material={materials['Material.001']} position={[2.171, 2.623, 0.324]} />
              </group>
              <group name="galvos_tangtelis001_28">
                <mesh name="Object_63" geometry={nodes.Object_63.geometry} material={materials['Material.001']} position={[-2.455, 2.621, 0.276]} />
              </group>
              <group name="Plane001_43">
                <mesh name="Object_111" geometry={nodes.Object_111.geometry} material={materials['Material.002']} position={[-0.131, 1.079, -2.586]} />
              </group>
              <group name="Plane002_63" position={[8.412, 5.612, 0]}>
                <mesh name="Object_151" geometry={nodes.Object_151.geometry} material={materials['Material.016']} position={[-8.594, -6.517, 1.601]} />
              </group>
              <group name="Plane003_64" position={[8.412, 5.612, 0]}>
                <mesh name="Object_153" geometry={nodes.Object_153.geometry} material={materials['Material.016']} position={[-8.543, -6.235, -0.98]} />
              </group>
              <group name="Plane004_65" position={[8.412, 5.612, 0]}>
                <mesh name="Object_155" geometry={nodes.Object_155.geometry} material={materials['Material.016']} position={[-8.593, -6.517, -2.625]} />
              </group>
              <group name="Plane005_66" position={[8.412, 5.612, 0]}>
                <mesh name="Object_157" geometry={nodes.Object_157.geometry} material={materials['Material.016']} position={[-8.547, -6.234, 2.982]} />
              </group>
              <group name="Priekin��_detal��002_39">
                <mesh name="Object_90" geometry={nodes.Object_90.geometry} material={materials['Material.018']} position={[-0.832, 0.803, -0.333]} />
                <mesh name="Object_91" geometry={nodes.Object_91.geometry} material={materials['Material.018']} position={[1.151, 0.931, -0.105]} />
                <mesh name="Object_92" geometry={nodes.Object_92.geometry} material={materials['Material.018']} position={[-0.25, 0.523, 0.409]} />
                <mesh name="Object_93" geometry={nodes.Object_93.geometry} material={materials['Material.018']} position={[-0.163, 1.296, 1.156]} />
                <mesh name="Object_94" geometry={nodes.Object_94.geometry} material={materials['Material.017']} position={[-0.153, 0.609, 0.37]} />
                <mesh name="Object_95" geometry={nodes.Object_95.geometry} material={materials.material_0} position={[-0.78, 1.862, -2.294]} />
              </group>
              <group name="Skriejiko_dantratis001_34">
                <mesh name="Object_75" geometry={nodes.Object_75.geometry} material={materials['Material.003']} position={[-0.133, 0.966, -0.333]} />
                <mesh name="Object_76" geometry={nodes.Object_76.geometry} material={materials['Material.002']} position={[-0.135, 0.969, 0.185]} />
              </group>
              <group name="spiruklytes001_24">
                <mesh name="Object_54" geometry={nodes.Object_54.geometry} material={materials['Material.007']} position={[2.282, 2.279, 0.197]} />
                <mesh name="Object_55" geometry={nodes.Object_55.geometry} material={materials['Material.007']} position={[2.32, 2.364, 2.012]} />
              </group>
              <group name="spiruoklytes001_1">
                <mesh name="Object_7" geometry={nodes.Object_7.geometry} material={materials['Material.007']} position={[-2.543, 2.288, 0.364]} />
                <mesh name="Object_8" geometry={nodes.Object_8.geometry} material={materials['Material.007']} position={[-2.581, 2.374, -1.451]} />
              </group>
              <group name="TEPALO_FILTRAS001_27">
                <mesh name="Object_61" geometry={nodes.Object_61.geometry} material={materials['Material.014']} position={[-1.432, -2.198, 2.436]} />
              </group>
              <group name="tepalo_filtro_sudukas002_37">
                <mesh name="Object_86" geometry={nodes.Object_86.geometry} material={materials['Material.008']} position={[-0.196, -1.445, 0.863]} />
              </group>
              <group name="UZ_SITO_VISOS_PLOKSTELES_VAZINES001_38">
                <mesh name="Object_88" geometry={nodes.Object_88.geometry} material={materials['Material.016']} position={[-0.182, -0.905, 0.356]} />
              </group>
              <group name="VARZTAS001_44">
                <mesh name="Object_113" geometry={nodes.Object_113.geometry} material={materials['Material.001']} position={[-0.125, -1.042, 0.26]} />
              </group>
              <group name="VARZTAS002_45">
                <mesh name="Object_115" geometry={nodes.Object_115.geometry} material={materials['Material.002']} position={[-0.144, -0.601, 0.198]} />
              </group>
              <group name="VARZTAS004_46">
                <mesh name="Object_117" geometry={nodes.Object_117.geometry} material={materials['Material.002']} position={[-0.146, -0.596, 0.43]} />
              </group>
              <group name="VARZTAS005_47">
                <mesh name="Object_119" geometry={nodes.Object_119.geometry} material={materials['Material.002']} position={[-0.22, 0.197, 0.424]} />
              </group>
              <group name="VARZTAS006_48">
                <mesh name="Object_121" geometry={nodes.Object_121.geometry} material={materials['Material.002']} position={[-0.176, 0.159, 0.192]} />
              </group>
              <group name="VARZTAS007_49">
                <mesh name="Object_123" geometry={nodes.Object_123.geometry} material={materials['Material.002']} position={[1.918, 0.172, 2.976]} />
              </group>
              <group name="VARZTAS008_50">
                <mesh name="Object_125" geometry={nodes.Object_125.geometry} material={materials['Material.001']} position={[1.916, 2.583, 0.326]} />
              </group>
              <group name="VARZTAS009_51">
                <mesh name="Object_127" geometry={nodes.Object_127.geometry} material={materials['Material.002']} position={[-1.689, -0.699, 2.481]} />
              </group>
              <group name="VARZTAS010_52">
                <mesh name="Object_129" geometry={nodes.Object_129.geometry} material={materials['Material.002']} position={[-1.689, -0.699, -0.842]} />
              </group>
              <group name="VARZTAS011_53">
                <mesh name="Object_131" geometry={nodes.Object_131.geometry} material={materials['Material.002']} position={[-0.163, -0.922, 0.11]} />
              </group>
              <group name="VARZTAS012_54">
                <mesh name="Object_133" geometry={nodes.Object_133.geometry} material={materials['Material.002']} position={[-1.689, -0.782, -1.727]} />
              </group>
              <group name="VARZTAS013_55">
                <mesh name="Object_135" geometry={nodes.Object_135.geometry} material={materials['Material.002']} position={[1.388, -0.782, -1.733]} />
              </group>
              <group name="VARZTAS014_56">
                <mesh name="Object_137" geometry={nodes.Object_137.geometry} material={materials['Material.002']} position={[1.369, -0.699, -0.854]} />
              </group>
              <group name="VARZTAS015_57">
                <mesh name="Object_139" geometry={nodes.Object_139.geometry} material={materials['Material.002']} position={[1.369, -0.699, 2.484]} />
              </group>
              <group name="VARZTAS016_58">
                <mesh name="Object_141" geometry={nodes.Object_141.geometry} material={materials['Material.002']} position={[-2.323, 2.344, 0.274]} />
              </group>
              <group name="VARZTAS017_59">
                <mesh name="Object_143" geometry={nodes.Object_143.geometry} material={materials['Material.002']} position={[2.049, 2.347, 0.363]} />
              </group>
              <group name="VARZTAS018_60">
                <mesh name="Object_145" geometry={nodes.Object_145.geometry} material={materials['Material.002']} position={[2.525, 1.387, 0.314]} />
              </group>
              <group name="VARZTAS019_61">
                <mesh name="Object_147" geometry={nodes.Object_147.geometry} material={materials['Material.002']} position={[-2.783, 1.396, 0.25]} />
              </group>
              <group name="VARZTAS020_62">
                <mesh name="Object_149" geometry={nodes.Object_149.geometry} material={materials['Material.001']} position={[-2.209, 2.611, 0.237]} />
              </group>
              <group name="voztuvas007_8">
                <mesh name="Object_22" geometry={nodes.Object_22.geometry} material={materials['Material.002']} position={[0.501, 0.07, 2.223]} />
              </group>
              <group name="voztuvas008_11">
                <mesh name="Object_28" geometry={nodes.Object_28.geometry} material={materials['Material.002']} position={[-0.748, 0.029, -1.596]} />
              </group>
              <group name="voztuvas009_13">
                <mesh name="Object_32" geometry={nodes.Object_32.geometry} material={materials['Material.002']} position={[0.589, 0.154, -1.792]} />
              </group>
              <group name="voztuvas010_15">
                <mesh name="Object_36" geometry={nodes.Object_36.geometry} material={materials['Material.002']} position={[-0.889, 0.522, -0.245]} />
              </group>
              <group name="voztuvas011_17">
                <mesh name="Object_40" geometry={nodes.Object_40.geometry} material={materials['Material.002']} position={[0.584, 0.529, -0.479]} />
              </group>
              <group name="voztuvas012_20">
                <mesh name="Object_46" geometry={nodes.Object_46.geometry} material={materials['Material.002']} position={[-0.823, 0.498, 1.068]} />
              </group>
              <group name="voztuvas013_22">
                <mesh name="Object_50" geometry={nodes.Object_50.geometry} material={materials['Material.002']} position={[0.341, 0.433, 0.836]} />
              </group>
              <group name="voztuvo_koja002_6">
                <mesh name="Object_18" geometry={nodes.Object_18.geometry} material={materials['Material.002']} position={[-0.025, -0.761, 0.428]} />
              </group>
              <group name="voztuvo_koja003_9">
                <mesh name="Object_24" geometry={nodes.Object_24.geometry} material={materials['Material.002']} position={[-0.292, -0.734, 0.205]} />
              </group>
              <group name="voztuvo_koja005_16">
                <mesh name="Object_38" geometry={nodes.Object_38.geometry} material={materials['Material.002']} position={[-0.047, 0.086, 0.422]} />
              </group>
              <group name="voztuvo_koja006_23">
                <mesh name="Object_52" geometry={nodes.Object_52.geometry} material={materials['Material.002']} position={[-0.369, 0.089, 0.19]} />
              </group>
              <group name="vo��tuvas001_5">
                <mesh name="Object_16" geometry={nodes.Object_16.geometry} material={materials['Material.002']} position={[-0.633, -0.012, 2.426]} />
              </group>
              <group name="ZVAKES001_35">
                <mesh name="Object_78" geometry={nodes.Object_78.geometry} material={materials['Material.004']} position={[-2.707, 0.726, 0.196]} />
                <mesh name="Object_79" geometry={nodes.Object_79.geometry} material={materials['Material.006']} position={[-2.382, 0.675, 0.197]} />
                <mesh name="Object_80" geometry={nodes.Object_80.geometry} material={materials['Material.011']} position={[-2.593, 0.708, 0.197]} />
              </group>
              <group name="��VAKES001_36">
                <mesh name="Object_82" geometry={nodes.Object_82.geometry} material={materials['Material.004']} position={[2.529, 0.728, 0.283]} />
                <mesh name="Object_83" geometry={nodes.Object_83.geometry} material={materials['Material.006']} position={[2.17, 0.676, 0.284]} />
                <mesh name="Object_84" geometry={nodes.Object_84.geometry} material={materials['Material.011']} position={[2.403, 0.709, 0.284]} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('../models/engine2.glb')
