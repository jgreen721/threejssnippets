import { useState } from 'react'
import {Journey, About,Navbar} from "./components"
import {Routes, Route} from "react-router-dom";
import './App.css'

function App() {

  return (
    <>
<Navbar/>
      <Routes>
        <Route path="/journey" element={<Journey/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </>
  )
}

export default App
