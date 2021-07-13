<template>
  <div class="relative z-10 px-20 pt-40 -mt-20 bg-app-primaryLight">
    <div class="flex justify-between mb-20">
      <div>
        <h4 class="mb-6 font-semibold text-white text-md">Newsletter</h4>
        <p class="mb-6 text-xs leading-8 text-white w-80">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
        </p>
        <div class="inline-flex">
          <input class="h-10 px-4 py-2 text-xs" placeholder="Enter Email ID" type="email" name="email" id="email" />
          <button class="h-10 px-6 text-xs text-white bg-app-secondary">Submit</button>
        </div>
      </div>
      <div>
        <h4 class="mb-6 font-semibold text-white text-md">Quick Contact</h4>
        <p class="mb-6 text-xs leading-8 text-white w-80">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
        </p>
        <div class="inline-flex items-center space-x-4">                
          <button class="h-10 px-4 text-white bg-app-secondary">
            <keyboard-pad class="w-4 h-4" />
          </button>
          <span class="font-medium text-white text-md">+1 1800-366-6666</span>
        </div>
      </div>
      <div>
        <h4 class="mb-6 font-semibold text-white text-md">Follow Us</h4>
        <div class="inline-flex space-x-3">          
            <instagram class="w-10 h-10" />
            <facebook class="w-10 h-10" />
            <twitter class="w-10 h-10" />          
        </div>
      </div>      
    </div>
    <hr class="border-gray-700">
    <p class="py-6 text-xs font-thin text-center text-white">Copyright 2021 Beauty. | All Rights Reserved.</p>
  </div>
</template>

<script setup>
import KeyboardPad from './../assets/icons/keyboard-pad.svg'
import Facebook from './../assets/icons/facebook.svg'
import Instagram from './../assets/icons/instagram.svg'
import Twitter from './../assets/icons/twitter.svg'

</script>

<style>

</style>