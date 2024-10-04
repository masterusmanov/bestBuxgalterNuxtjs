<template>
   <div class="bg-[#073843] border-t-4">
    <div class="md:flex items-center gap-6 justify-center text-[#F0EAD6] text-[24px]">
      <div class="md:w-1/3">
        <div class="flex gap-6 items-center">
          <img :src="logo2" alt="logo" class="w-[200px] mx-auto md:mx-0 md:w-[250px]" />
        </div>
      </div>
      <div class="md:w-1/3">
        <div class="w-1/2 mx-auto md:w-full md:mx-0 flex items-center md:justify-end gap-4">
          <i class="bx bx-phone text-center"></i>
          <h1>+998999098015</h1>
        </div>
        <div class="w-1/2 mx-auto md:w-full md:mx-0 flex items-center md:justify-end gap-4">
          <i class="bx bxl-telegram text-blue-500"></i>
          <a href="https://t.me/best_buxgalter">@best_buxgalter</a>
        </div>
      </div>
    </div>
    <div class="mt-[30px] md:mt-0 md:flex items-center justify-between md:px-5">
      <h1 class="text-center text-[20px] text-[#F0EAD6]">©{{ new Date().getFullYear() }}. Barcha huqular himoyanlangan</h1>
      <div class="mt-[20px] md:mt-0 mr-6 md:mr-0">
        <h1 class="text-end text-[#F0EAD6]">Powered by</h1>
        <p class="text-end w-full text-[#F0EAD6]">
          <a href="https://t.me/masterusmanov">
            <span><i class="bx bxl-telegram text-blue-500"></i></span> @masterusmanov
          </a>
          <br />
          <span><i class="bx bx-phone"></i></span> +998972179900
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
    import logo2 from '../assets/images/Logo24.svg';
</script>

<style lang="scss" scoped>

</style>