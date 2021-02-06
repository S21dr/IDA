<template>
  <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
    <defs>
      <style>.cls-2{fill:#F2C94C;}</style>
      <linearGradient id="star1" x1="256" y1="21.33" x2="256" y2="490.66" gradientUnits="userSpaceOnUse">
        <stop stop-color="#FFE500" stop-opacity="0"/>
        <stop offset="0.71308" stop-color="#FFE500" stop-opacity="0"/>
        <stop offset="0.798308" stop-color="#FFE600"/>
        <stop offset="1" stop-color="#FFE500"/>
      </linearGradient>
      <linearGradient id="star2" x1="256.005" y1="21.3388" x2="256.005" y2="490.669" gradientUnits="userSpaceOnUse">
        <stop stop-color="#FFE500" stop-opacity="0"/>
        <stop offset="0.572436" stop-color="#FFE500" stop-opacity="0"/>
        <stop offset="0.659794" stop-color="#FFE600"/>
        <stop offset="1" stop-color="#FFE500"/>
      </linearGradient>
      <linearGradient id="star3" x1="256.005" y1="21.3388" x2="256.005" y2="490.669" gradientUnits="userSpaceOnUse">
        <stop stop-color="#FFE500" stop-opacity="0"/>
        <stop offset="0.408372" stop-color="#FFE500" stop-opacity="0"/>
        <stop offset="0.442708" stop-color="#FFE500" stop-opacity="0.29"/>
        <stop offset="0.520833" stop-color="#FFE600"/>
        <stop offset="1" stop-color="#FFE500"/>
      </linearGradient>
      <linearGradient id="star4" x1="256.005" y1="21.3388" x2="256.005" y2="490.669" gradientUnits="userSpaceOnUse">
        <stop stop-color="#FFE500" stop-opacity="0"/>
        <stop offset="0.276269" stop-color="#FFE500" stop-opacity="0"/>
        <stop offset="0.359366" stop-color="#FFE500" stop-opacity="0.81"/>
        <stop offset="0.520833" stop-color="#FFE600"/>
        <stop offset="1" stop-color="#FFE500"/>
      </linearGradient>
    </defs>
    <title>star-filled</title>
    <polygon
      :fill="rating==0?'#fff':rating==5?'#F2C94C':`url(#star${rating})`"
             points="256 21.33 320 192 490.67 192 362.67 320 405.33 490.66 256 383.99 106.67 490.66 149.33 320 21.33 192 192 192 256 21.33"/>
    <path class="cls-2"
          d="M405.33,512a21.32,21.32,0,0,1-12.4-4L256,410.21,119.07,508A21.34,21.34,0,0,1,86,485.48l39.74-158.95L6.25,207.08a21.33,21.33,0,0,1,15.08-36.42H177.21L236,13.84a21.33,21.33,0,0,1,39.95,0l58.81,156.82H490.67a21.33,21.33,0,0,1,15.08,36.42L386.29,326.54,426,485.48A21.33,21.33,0,0,1,405.33,512ZM256,362.66a21.33,21.33,0,0,1,12.4,4l102.18,73L342,325.17a21.33,21.33,0,0,1,5.61-20.26l91.58-91.58H320a21.34,21.34,0,0,1-20-13.84L256,82.09,212,199.49a21.34,21.34,0,0,1-20,13.84H72.84l91.58,91.58A21.33,21.33,0,0,1,170,325.17L141.42,439.62l102.18-73A21.33,21.33,0,0,1,256,362.66Z"/>
  </svg>
</template>

<script>
export default {
  name: "Star",
  props:["rating"]
}
</script>

<style scoped>

</style>
