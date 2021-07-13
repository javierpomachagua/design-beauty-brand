<template>
  <div class="mb-72">
    <div class="flex">
      <div class="relative w-1/2">
        <background-arrival class="absolute top-0 z-10 h-[32rem]" />
        <img src="./../assets/arrival.png" class="relative z-20 h-[32rem] ml-36" alt="arrival image">
      </div>
      <div class="relative w-1/2 py-20">
        <h2 class="inline-flex items-center mb-4 text-4xl">New Arrival
          <flower class="w-8 h-8 ml-2" />
        </h2>
        <p class="relative z-20 mb-8 text-sm font-light">
          Lorem ipsum is placeholder text commonly used in the graphic, print, and
          publishing industries for previewing layouts and visual mockups.
        </p>
        <app-button>View More</app-button>        
        <flower-corner class="absolute top-0 right-0 z-10 w-32" />
      </div>
    </div>
    <div class="relative z-30 flex float-right mr-20 -mt-32 space-x-12">
      <div>
        <img class="w-52" src="./../assets/product1.png" alt="image product">
        <div class="flex justify-between px-4 py-5 shadow-xl rounded-2xl">
          <div>
            <span class="block font-medium">Night Cream</span>
            <small class="text-app-secondary">$23.99</small>
          </div>
          <button class="px-4 py-2 text-white rounded-2xl bg-app-primary">></button>
        </div>
      </div>
      <div>
        <img class="w-52" src="./../assets/product2.png" alt="image product">
        <div class="flex justify-between px-4 py-5 shadow-xl rounded-2xl">
          <div>
            <span class="block font-medium">Organic Cream</span>
            <small class="text-app-secondary">$43.99</small>
          </div>
          <button class="px-4 py-2 text-white rounded-2xl bg-app-primary">></button>
        </div>
      </div>
      <div>
        <img class="w-52" src="./../assets/product3.png" alt="image product">
        <div class="flex justify-between px-4 py-5 shadow-xl rounded-2xl">
          <div>
            <span class="block font-medium">Under Eye Gel</span>
            <small class="text-app-secondary">$26.99</small>
          </div>
          <button class="px-4 py-2 text-white rounded-2xl bg-app-primary">></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import logo from './../assets/icons/logo.svg'
import flower from './../assets/icons/flower.svg'
import backgroundArrival from './../assets/icons/background-arrival.svg'
import flowerCorner from './../assets/icons/flower-corner.svg'
import AppButton from './AppButton.vue'

</script>

<style>

</style>