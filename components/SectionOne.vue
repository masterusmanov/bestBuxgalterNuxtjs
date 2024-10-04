<template>
     <div id="home" class="main lg:h-[700]">
        <div class="container mx-auto">
          <Menu class="" />
          <div class="text-[#073843] font-[700] text-[48px] lg:w-[60%] 2xl:w-1/2 grid gap-14 py-[100px] xl:py-[150px] 2xl:py-[200px] xl:px-2 2xl:px-0">
            <div>
              <h1 class="text-[40px] lg:text-[48px] text-center lg:text-start w-full ">
                "Hisob-kitob aniq bo`lsa, biznes muvaffaqiyatli bo`ladi."
              </h1>
              <p class="text-[24px] lg:text-[38px] text-end lg:float-right  mr-[100px]">Genry Ford</p>
            </div>

            <button class="mx-auto lg:mx-[150px] text-[18px] border-4 border-[#D35E25] text-[#D35E25] py-2 px-4 w-[200px] rounded-lg hover:bg-[#2f3b3d] hover:text-white hover:border-[#2f3b3d]">
              Bog`lanish
            </button>
          </div>
        </div>
      </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    .main {
    background-image: url(../assets/images/bg/bg3.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

}
</style>