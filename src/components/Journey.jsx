import React from 'react'
import {Canvas} from "@react-three/fiber"
import { OrbitControls, ScrollControls,Environment } from '@react-three/drei'
import Experience2 from "./Experience2"

const Journey = () => {
  return (
    <div  style={{height:'100vh',width:'100%',border:"3px solid red"}}>
      <Canvas>
        <color attach="background" args={["black"]}/>
        <Environment preset="city" background={true}/>

        {/* <OrbitControls enableZoom={false}/> */}
        <ScrollControls pages={4} damping={.3}>
          <Experience2/>
        </ScrollControls>
      </Canvas>
    </div>
  )
}

export default Journey