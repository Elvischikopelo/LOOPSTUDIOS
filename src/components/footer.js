import React from 'react'
import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'
import pinterest from '../images/icon-pinterest.svg'
import instagram from '../images/icon-instagram.svg'


export default function Footer() {
  return (
<div class="footer bg-gray-800 text-gray-300 ">
  <div class="container mx-auto py-8 flex flex-col justify-between items-center">
    <div class="flex flex-row justify-between items-center">
      <a href="#" class="text-2xl font-bold">loopstudios</a>
      <ul class="flex flex-row space-x-4">
        <li><a href="#">Twitter</a></li>
        <li><a href="#">Facebook</a></li>
        <li><a href="#">Instagram</a></li>
      </ul>
    </div>
    <p class="text-center mt-4">© 2021 Loopstudios. All rights reserved.</p>
  </div>
</div>

  

  )
}
