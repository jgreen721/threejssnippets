import React, {useState} from 'react'
import { Scroll, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const Section = ({className,children})=>{


    return (
        <div className={`section ${className}`}>
            {children}
        </div>
    )
}

const Overlay = () => {
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
  return (
    <Scroll html>
        <Section className="start">
            <div style={{opacity:opacityOne}} className="section-card">
            <h1>Section 1</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit quibusdam fugiat odio quisquam magni. Voluptates totam quas laudantium alias at. Autem fugiat consectetur odio excepturi quaerat qui, sit at voluptatibus.</p>
            <button>Enter</button>
            </div>
        </Section>
        <Section className="end">
        <div style={{opacity:opacityTwo}} className="section-card">
            <h1>Section 2</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit quibusdam fugiat odio quisquam magni. Voluptates totam quas laudantium alias at. Autem fugiat consectetur odio excepturi quaerat qui, sit at voluptatibus.</p>
            <button>Enter</button>
            </div>
        </Section>
        <Section className="start">
        <div style={{opacity:opacityThree}} className="section-card">
            <h1>Section 3</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit quibusdam fugiat odio quisquam magni. Voluptates totam quas laudantium alias at. Autem fugiat consectetur odio excepturi quaerat qui, sit at voluptatibus.</p>
            <button>Enter</button>
            </div>
        </Section>
        <Section className="end">
        <div style={{opacity:opacityFour}} className="section-card">
            <h1>Section 4</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit quibusdam fugiat odio quisquam magni. Voluptates totam quas laudantium alias at. Autem fugiat consectetur odio excepturi quaerat qui, sit at voluptatibus.</p>
            <button>Enter</button>
            </div>
        </Section>
    </Scroll>
  )
}

export default Overlay