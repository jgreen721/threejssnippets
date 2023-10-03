import React from 'react'
import {Canvas} from "@react-three/fiber"
import Experience1 from "./Experience1"
import { Environment,ScrollControls } from '@react-three/drei'

const About = () => {
  return (
    <div style={{height:'100vh',width:'100%',border:"3px solid red"}}>
        <Canvas>
            <color attach="background" args={["black"]}/>
            <Environment preset="city" background={true}/>
            <ScrollControls pages={4} damping={.2}>
                <Experience1/>
            </ScrollControls>
        </Canvas>
    </div>
  )
}

export default About