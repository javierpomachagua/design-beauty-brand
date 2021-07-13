<template>
  <div class="relative py-16 mb-40 text-center bg-app-secondary">
    <background-reviews class="absolute inset-0" />
    <img
      src="./../assets/review1.png"
      class="absolute object-cover h-40 mt-10 ml-32"
      alt="review"
    />
    <img
      src="./../assets/review2.png"
      class="absolute object-cover mt-40 ml-4 h-60"
      alt="review"
    />
    <img
      src="./../assets/review3.png"
      class="absolute bottom-0 object-cover h-56 ml-24"
      alt="review"
    />
    <img
      src="./../assets/review4.png"
      class="absolute right-0 object-cover h-56 mt-2 mr-20"
      alt="review"
    />
    <img
      src="./../assets/review5.png"
      class="absolute bottom-0 right-0 object-cover h-64 mb-20"
      alt="review"
    />
    <img
      src="./../assets/review6.png"
      class="absolute bottom-0 right-0 object-cover h-40 mr-24"
      alt="review"
    />
    <h2 class="w-1/3 mx-auto mb-20 text-4xl">
      Trusted by Agencies & Store Owners
    </h2>
    <div class="relative">
      <div class="relative z-30 w-1/2 p-20 mx-auto bg-white">
        <quote-sign class="absolute inset-x-0 top-0 w-32 h-32 mx-auto mt-10" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum..
        </p>
      </div>
      <div class="w-2/5 h-6 mx-auto -mt-2 bg-white opacity-50">
      </div>
      <div class="w-1/3 h-8 mx-auto -mt-4 bg-white opacity-20">
      </div>
    </div>
  </div>
</template>

<script setup>
import backgroundReviews from './../assets/icons/background-reviews.svg'
import quoteSign from './../assets/icons/quote-sign.svg'

</script>

<style>

</style>