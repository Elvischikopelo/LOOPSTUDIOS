import React from 'react'
import image1 from '../images/desktop/image-interactive.jpg'
import image2 from '../images/desktop/image-deep-earth.jpg'
import image3 from '../images/desktop/image-night-arcade.jpg'
import image4 from '../images/desktop/image-soccer-team.jpg'
import image5 from '../images/desktop/image-interactive.jpg'
import image6 from '../images/desktop/image-interactive.jpg'
import image7 from '../images/desktop/image-interactive.jpg'
import image8 from '../images/desktop/image-curiosity.jpg'
import image9 from '../images/desktop/image-fisheye.jpg'


export default function Grid() {
  return (
    <div class="container mx-auto mt-16 mb-5">
        <div className='flex-row flex justify-between align-center'>
            <h2 class="text-center text-4xl ">OUR CREATIONS</h2>
            <div className=''>
                <a className='text-2xl'>SEE ALL</a>
            </div>
        </div>
  <div class="grid grid-cols-4 gap-3 mt-16">

    <div class="relative">
      <a href="#">
        <img src={image2} alt="DEEP EARTH" class="w-full h-full object-cover rounded-lg"/>
      </a>
      <h3 class="text-center mt-4 font-bold absolute bottom-10 left-10 ">DEEP EARTH</h3>
    </div>
    <div class="col">
      <a href="#">
        <img src={image3} alt="NIGH ARCADE" class="w-full h-full object-cover rounded-lg"/>
      </a>
      <h3 class="text-center mt-4 font-bold">NIGH ARCADE</h3>
    </div>
    <div class="col">
      <a href="#">
        <img src={image4} alt="SOCCER EAM VR" class="w-full h-full object-cover rounded-lg"/>
      </a>
      <h3 class="text-center mt-4 font-bold">SOCCER EAM VR</h3>
    </div>
    <div class="col">
      <a href="#">
        <img src={image5} alt="THE GRID" class="w-full h-full object-cover rounded-lg"/>
      </a>
      <h3 class="text-center mt-4 font-bold">THE GRID</h3>
    </div>
    <div class="col">
      <a href="#">
        <img src={image6} alt="FROM IP ABOVE VR" class="w-full h-full object-cover rounded-lg"/>
      </a>
      <h3 class="text-center mt-4 font-bold">FROM IP ABOVE VR</h3>
    </div>
    <div class="col">
      <a href="#">
        <img src={image7} alt="POCKET BOREALIS" class="w-full h-full object-cover rounded-lg"/>
      </a>
      <h3 class="text-center mt-4 font-bold">POCKET BOREALIS</h3>
    </div>
    <div class="col">
      <a href="#">
        <img src={image8} alt="THE CURIOSITY" class="w-full h-full object-cover rounded-lg"/>
      </a>
      <h3 class="text-center mt-4 font-bold">THE CURIOSITY</h3>
    </div>
    <div class="col">
      <a href="#">
        <img src={image9}alt="MAKE IT FISHEYE" class="w-full h-full object-cover rounded-lg"/>
      </a>
      <h3 class="text-center mt-4 font-bold">MAKE IT FISHEYE</h3>
    </div>
  </div>
</div>

  )
}
