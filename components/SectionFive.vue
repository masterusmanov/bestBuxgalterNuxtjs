<template>
    <div class="bg-[#D35E25]">
    <div class="container mx-auto">
      <div class="py-[70px]">
        <h1 class="text-center text-[#F0EAD6] font-[700] text-[50px] lg:text-[56px]">
          Bizning ustunlik jihatlarimiz
        </h1>
        <img :src="line" alt="line" class="h-[10px] lg:h-[15px] mx-[170px] md:mx-[580px] lg:mx-[650px] xl:mx-[800px] 2xl:mx-[950px]" />
      </div>
      <div class="grid grid-cols-2 lg:grid-cols-4 items-center pb-[50px]">
        <div v-for="(el, index) in datas" :key="index" class="h-[210px] border-[#073843] rounded-2xl p-5">
          <div class="flex gap-3 justify-center">
            <i :class="`${el.icon} text-[80px] text-[#F0EAD6]`"></i>
          </div>
          <div class="my-[20px]">
            <h1 class="text-center font-[700] text-[18px] md:text-[24px] text-[#F0EAD6]">
              {{ el.title }}
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
    import line from "../../assets/images/icons/line.svg";
    
    const datas = [
        {
            title: "Har bir mijozga alohida yondashuv",
            icon: "bx bx-user",
        },
        {
            title: "Yuqori sifatli xizmatlar",
            icon: "bx bx-cog",
        },
        {
            title: "Biz o'z ishimizni bilamiz",
            icon: "bx bx-briefcase",
        },
        {
            title: "Bizda faqat mutaxassislar",
            icon: "bx bxs-user-check",
        },
    ];
</script>

<style lang="scss" scoped>

</style>