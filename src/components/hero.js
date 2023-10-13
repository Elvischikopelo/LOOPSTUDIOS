import React from 'react'

import image from '../images/desktop/image-interactive.jpg'


export default function Hero() {
  return (

    <div class="flex items-center justify-center  rounded-xl shadow-md mt--57">
    <img src={image} class="w-full h-full object-cover"/>
    <div class="flex flex-col items-center">
      <h1 class="text-white text-2xl font-bold">Loopstudios</h1>
      <p class="text-white text-lg mt-2">Immersive experiences that deliver</p>
    </div>
  </div>
  
  )
}
