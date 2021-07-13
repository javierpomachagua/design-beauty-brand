<template>
  <div class="mb-40 text-center">
    <p class="text-sm font-light">Popular Product</p>
    <h2 class="inline-flex items-center text-4xl">
      <flower-inverted class="w-8 h-8 mr-2" />
      Meet Out Bestsellers
      <flower class="w-8 h-8 ml-2" />
    </h2>
    <div class="flex my-20">
      <div class="w-1/3">
        <div class="relative flex items-center justify-center">
          <elipse class="my-16 w-52 h-52" />
          <img
            src="./../assets/shop1.png"
            class="absolute top-0 object-cover h-80"
            alt="shop image"
          />
        </div>
        <h3 class="mb-2 text-lg font-bold">Face Care</h3>
        <p class="px-12 mb-2 font-thin">
          Lorem ipsum is placeholder text commonly used.
        </p>
        <p class="mb-6 text-xl font-bold">$129.00</p>
        <app-button>Buy Now</app-button>
      </div>
      <div class="w-1/3">
        <div class="relative flex items-center justify-center">
          <elipse class="my-16 w-52 h-52" />
          <img
            src="./../assets/shop2.png"
            class="absolute top-0 object-cover h-80"
            alt="shop image"
          />
        </div>
        <h3 class="mb-2 text-lg font-bold">Bath & Body</h3>
        <p class="px-12 mb-2 font-thin">
          Lorem ipsum is placeholder text commonly used.
        </p>
        <p class="mb-6 text-xl font-bold">$199.00</p>
        <app-button>Buy Now</app-button>
      </div>
      <div class="w-1/3">
        <div class="relative flex items-center justify-center">
          <elipse class="my-16 w-52 h-52" />
          <img
            src="./../assets/shop3.png"
            class="absolute top-0 object-cover h-80"
            alt="shop image"
          />
        </div>
        <h3 class="mb-2 text-lg font-bold">Skin Care</h3>
        <p class="px-12 mb-2 font-thin">
          Lorem ipsum is placeholder text commonly used.
        </p>
        <p class="mb-6 text-xl font-bold">$219.00</p>
        <app-button>Buy Now</app-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import flower from './../assets/icons/flower.svg'
import flowerInverted from './../assets/icons/flower-inverted.svg'
import elipse from './../assets/icons/elipse.svg'
import AppButton from './AppButton.vue'
</script>

<style>

</style>