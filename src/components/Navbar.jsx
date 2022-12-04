import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div style={{display:'flex',justifyContent:'space-evenly',
    backgroundColor:'silver',fontSize:'25px',padding:'20px'}}>
        <Link to="/">ALL</Link>
        <Link to="/html">HTML</Link>
        <Link to="/css">CSS</Link>
        <Link to="/javascript">JAVASCRIPT</Link>
    </div>
  )
}

export default Navbar