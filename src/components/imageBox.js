import React from 'react'
import image from '../images/desktop/image-interactive.jpg'

export default function ImageBox({text,src}) {
  return (
    <div class="div mb-5 flex items-center justify-center bg-black rounded-xl shadow-md">
    <img src={image} alt="Man wearing a virtual reality headset" class="w-full h-full object-cover"/>
    <div class="flex flex-col items-center">
      <h1 class="text-white text-2xl font-bold">LOOPSTUDIOS</h1>
      <p class="text-white text-lg mt-2">Interactive VR</p>
    </div>
  </div>
  
  )
}
