import React, {useMemo,useRef, useState} from 'react'
import {Sphere, Line, useGLTF, PerspectiveCamera,Float, useScroll,Text} from "@react-three/drei"
import { LayerMaterial,Gradient } from 'lamina'
import * as THREE from "three"
import { useFrame } from '@react-three/fiber';


const COUNT = 400;

const BgSphere = ()=>{



    return (
        <group>
            <Sphere scale={1025}>
                <LayerMaterial side={THREE.BackSide}>
                    <Gradient colorA="lightblue" colorB="white" axes="y" start={0} end={.5}/>
                </LayerMaterial>
            </Sphere>
        </group>
    )
}

const Experience2 = () => {
    const img = useGLTF("./Airplane.glb")
    const cameraRef = useRef();
    const lPoints =[
        new THREE.Vector3(0,0,0),
        new THREE.Vector3(0,-2,-100),
        new THREE.Vector3(20,3,-200),
        new THREE.Vector3(0,0,-300),
        new THREE.Vector3(-10,0,-400),
        new THREE.Vector3(0,10,-500),
        new THREE.Vector3(4,0,-600),
        new THREE.Vector3(0,15,-700),
        new THREE.Vector3(0,3,-800),
        new THREE.Vector3(17,0,-900),
        new THREE.Vector3(0,0,-1000),
    ]

    const line = useMemo(()=>{
        return new THREE.CatmullRomCurve3(lPoints,false,"catmullrom",.5);
    })

    const linePoints = useMemo(()=>{
        return line.getPoints(COUNT)
    })

    const shape = useMemo(()=>{
        const shape = new THREE.Shape();
        shape.moveTo(0,0);
        shape.lineTo(0.5,0);
        return shape;
    })



    useFrame(()=>{
        const idx = Math.min(Math.round(linePoints.length * scroll.offset),linePoints.length-1)
        const currLocation = linePoints[idx];

        cameraRef.current.position.lerp(currLocation,.011 * 24)
    })


    const [opacityOne,setOpacityOne] = useState(1)
    const [opacityTwo,setOpacityTwo] = useState(1)
    const [opacityThree,setOpacityThree] = useState(1)
    const [opacityFour,setOpacityFour] = useState(1)
    const scroll = useScroll();

    let counter = 0;

    useFrame((state,delta)=>{
        counter += delta; 
        setOpacityOne(scroll.range(0/4,1/4))
        setOpacityTwo(scroll.range(1/4,1/4))
        setOpacityThree(scroll.range(2/4,1/4))
        setOpacityFour(scroll.range(3/4,1/4))
    })


    let signs =[
        {id:1,title:"Welcome",blurb:"Enjoy your ride!",position:[10,0,-100],opacity:opacityOne},
        {id:2,title:"Chapter 2",blurb:"Now we're moving!",position:[-30,0,-300],opacity:opacityOne},
        {id:3,title:"Half way!",blurb:"OOOO, time is zipping by!",position:[30,0,-450],opacity:opacityTwo},
        {id:4,title:"Almost there",blurb:"Not much longer now!",position:[-30,0,-600],opacity:opacityThree},
        {id:5,title:"Closing in!",blurb:"Here we come!",position:[30,0,-800],opacity:opacityThree},
        {id:6,title:"Thanks!",blurb:"We appreciated having you!",position:[-30,0,-985],opacity:opacityFour},
    ]
  return (
    <>
    <BgSphere/>
    <group ref={cameraRef}>
        <PerspectiveCamera makeDefault fov={50} position={[0,0,10]}/>
        <Float>
        <primitive scale={.5} rotation={[0,1.5,0]} object={img.scene}/>
        </Float>
    </group>
    <group position={[0,-2,0]}>
        <mesh>
        <extrudeGeometry args={[shape,{
            shape,
            steps:COUNT,
            extrudePath:line
        }]}/>
        </mesh>
    </group>
    {signs.map(s=>(
        <group  position={s.position}>
        <Text strokeOpacity={s.opacity} fillOpacity={s.opacity} fontSize={10} color="red">
            {s.title}
        </Text> 
        <Text strokeOpacity={s.opacity} fillOpacity={s.opacity} position={[0,-8,0]} fontSize={5} color="red">
            {s.blurb}
        </Text>
        </group>
    ))}
    </>
  )
}

export default Experience2