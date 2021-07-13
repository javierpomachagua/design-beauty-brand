<template>
  <div class="mb-28">
    <header
      class="relative z-20 inline-flex items-center justify-between w-full"
    >
      <logo class="w-16 h-16" />
      <ul class="inline-flex space-x-12">
        <li><a class="text-gray-600 hover:text-gray-700" href="#">Home</a></li>
        <li><a class="text-gray-600 hover:text-gray-700" href="#">About</a></li>
        <li><a class="text-gray-600 hover:text-gray-700" href="#">Shop</a></li>
        <li><a class="text-gray-600 hover:text-gray-700" href="#">Blog</a></li>
        <li>
          <a class="text-gray-600 hover:text-gray-700" href="#">Contact</a>
        </li>
      </ul>
      <div class="flex items-center justify-center mr-4 space-x-6">
        <search class="w-6 h-6" />
        <cart class="w-10 h-10" />
        <img
          src="./../assets/profile.jpg"
          class="object-cover w-12 h-12 rounded-full"
          alt="profile image"
        />
      </div>
    </header>
    <main class="flex items-center py-4">
      <div class="w-1/2">
        <div>
          <div
            class="inline-flex items-center justify-center px-4 py-1 mb-6 space-x-2 bg-app-contrastPink rounded-xl"
          >
            <natural-product class="w-4 h-4" />
            <small class="text-xs font-light">Natural Products</small>
          </div>
          <h1 class="mb-1 text-5xl font-bold text-gray-700">
            Be good to your skin.
          </h1>
          <h2 class="mb-4 text-4xl font-bold text-gray-700">
            You will wear it everyday for you.
          </h2>
          <div class="inline-flex items-center justify-center mb-8 space-x-2">
            <star-rated class="w-4 h-4" />
            <star-rated class="w-4 h-4" />
            <star-rated class="w-4 h-4" />
            <star-rated class="w-4 h-4" />
            <!-- <start-unrated class="w-6 h-6" /> -->
            <small class="text-xs text-gray-700">29 reviews</small>
          </div>
          <p class="w-3/5 mb-10 font-light tracking-normal">
            Most dermatologists agree it is important to cleanse the face twice
            daily to get bacteria, dirt and pollutants off your skin
          </p>
          <div class="inline-flex items-center mb-16 space-x-10">
            <p class="text-2xl font-bold">$29.99</p>
            <div
              class="inline-flex items-center px-8 py-1 space-x-2 border border-gray-700 border-solid rounded-3xl"
            >
              <span class="text-2xl text-gray-600">-</span>
              <span class="font-semibold">1</span>
              <span class="text-2xl text-gray-600">+</span>
            </div>
            <app-button> Add to Cart </app-button>
          </div>
          <div class="inline-flex space-x-6">
            <div class="inline-flex items-center space-x-2">
              <span class="px-4 py-4 bg-red-100 rounded-full">
                <car class="w-4 h-4" />
              </span>
              <span class="text-sm font-bold">Free Shipping</span>
            </div>
            <div class="inline-flex items-center space-x-2">
              <span class="px-4 py-4 bg-red-100 rounded-full">
                <timer class="w-4 h-4" />
              </span>
              <span class="text-sm font-bold">24x7 Service</span>
            </div>
            <div class="inline-flex items-center space-x-2">
              <span class="px-4 py-4 bg-red-100 rounded-full">
                <repeat class="w-4 h-4" />
              </span>
              <span class="text-sm font-bold">Free Return</span>
            </div>
          </div>
        </div>
      </div>
      <div class="relative z-10 w-1/2 -mt-28">
        <img class="object-cover" src="./../assets/main2.png" alt="" />
      </div>
    </main>
  </div>
</template>

<script setup>
import logo from './../assets/icons/logo.svg'
import search from './../assets/icons/search.svg'
import cart from './../assets/icons/cart.svg'
import naturalProduct from './../assets/icons/natural-product.svg'
import starRated from './../assets/icons/star-rated.svg'
import starUnrated from './../assets/icons/star-unrated.svg'
import car from './../assets/icons/car.svg'
import timer from './../assets/icons/timer.svg'
import repeat from './../assets/icons/repeat.svg'
import AppButton from './AppButton.vue'

</script>

<style>

</style>