import React from 'react'
import {Canvas} from "@react-three/fiber"
import {Html} from "@react-three/drei"
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
 <nav style={{display:"flex",alignItems:'center',justifyContent:'space-between',padding:'3rem'}}>
     <h3>ThreeJS.Practice</h3>
     <ul style={{display:"flex",gap:'2rem'}} className="nav-links">
         <li style={{listStyle:"none"}} className="nav-item">
             <Link to="/about">About</Link>
         </li>
         <li style={{listStyle:"none"}} className="nav-item">
             <Link to="/journey">Journey</Link>
         </li>
     </ul>
 </nav>
  )
}

export default Navbar