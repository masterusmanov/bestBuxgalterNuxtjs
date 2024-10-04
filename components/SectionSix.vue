<template>
    <div>
        <div class="container mx-auto ">
          <div class="py-[70px]">
            <h1 class="text-center text-[#073843] font-[700] text-[56px]">
              Hamkor mijozlarimiz
            </h1>
            <img :src="line" alt="line" class="h-[10px] lg:h-[15px] mx-[170px] md:mx-[530px] lg:mx-[600px] xl:mx-[720px] 2xl:mx-[850px]" />
          </div>
        </div>
        <Partner/>
      </div>
</template>

<script setup>
    import Partner from "../components/Partner.vue";
    import line from "../assets/images/icons/line.svg";

</script>

<style lang="scss" scoped>

</style>