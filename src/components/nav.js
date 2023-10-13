import React from 'react'
import { useState } from 'react'

export default function Nav() {
    const [toggle,setToggle] = useState()
  return (
  <div class="navbar  ">
  <div class="container mx-auto flex flex-row justify-between items-center z-4">
    <a href="#" class="text-3xl font-bold">loopstudios</a>
    <nav>
      <a  className='mx-2' href="#" class="nav-link">OUR CREATIONS</a>
      <a className='mx-2' href="#" class="nav-link">ABOUT</a>
      <a className='mx-2' href="#" class="nav-link">CONTACT</a>
    </nav>
  </div>
</div>

  
  )
}
