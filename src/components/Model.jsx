import { useGLTF, useScroll } from '@react-three/drei'
import React, {useLayoutEffect, useRef} from 'react'
import gsap from "gsap"
import { useFrame } from '@react-three/fiber';


const Model = () => {
    const img = useGLTF("birthday_cake.glb");
    const tl = useRef();
    const cakeRef = useRef();
    const scroll = useScroll();

    useFrame((state,delta)=>{
        tl.current.seek(scroll.offset * tl.current.duration())
        // console.log(scroll.offset * tl.current.duration())
    })

    useLayoutEffect(()=>{
        tl.current = gsap.timeline();

        tl.current.to(cakeRef.current.position,{x:-2},.1)
        tl.current.to(cakeRef.current.rotation,{y:-2},.1)
        tl.current.to(cakeRef.current.position,{x:1},2)
        tl.current.to(cakeRef.current.rotation,{x:1},2)

        tl.current.to(cakeRef.current.position,{x:-1},3)
        tl.current.to(cakeRef.current.rotation,{x:0},3)
        tl.current.to(cakeRef.current.rotation,{z:2},3)
        tl.current.to(cakeRef.current.position,{z:0},3)

        tl.current.to(cakeRef.current.position,{x:0},4)
        tl.current.to(cakeRef.current.position,{z:3},4)
        tl.current.to(cakeRef.current.rotation,{z:0},4)
    })
  return (
    <group ref={cakeRef}>
        <primitive scale={.005} object={img.scene}/>
    </group>
  )
}

export default Model