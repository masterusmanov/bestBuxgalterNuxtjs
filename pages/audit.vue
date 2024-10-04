<template>
    <div>
    <div class="container mx-auto mt-[30px]">
      <div class="my-[50px]">
        <h1 class="text-center lg:text-start text-[#073843] font-[700] text-[28px] lg:text-[56px]">
          Buxgalteriya hujjatlarini audit qilish, korxonangiz uchun ichki audit xizmatini tashkil qilish
        </h1>
      </div>
      <div>
        <div class="grid md:grid-cols-2 gap-6">
            <p class="text-justify px-2 lg:text-[18px]">
              Bu xizmat orqali siz o’z buxgalteringiz ishi sifatiga,hujjatlar
              to’liq va to’g’ri yuritilishiga yordam beruvchi tekshiruvchi
              nazari bilan qaray olasiz.Malakali auditorlarimiz yordamida
              korxonangizda ichki audit xizmatini tashkil etish orqali doimiy
              maslahat va amaliy yordamga ega bo’lasiz.Bundan tashqari
              faoliyatingizga doir soliq imtiyozlari,ulardan
              foydalanish,soliqlarni optimallashtirish orqali moliyaviy
              imkoniyatlaringizni barqarorligini ta’minlaysiz.
            </p>
          <img
            :src="audit"
            alt="audit"
            class="px-2 my-[25px] md:my-0 md:w-[400px] md:h-[210px] lg:w-[520px] lg:h-[200px] xl:w-[625px] 2xl:w-[800px] object-cover"
          />
        </div>
      </div>
      <button @click="back.go(-1)" class="px-4 py-2 bg-[#073843] text-white rounded-lg float-right my-[15px] mr-2">
        Orqaga
      </button>
    </div>
    <div class="bg-[#D35E25] p-5 mt-[70px]">
      <h1 class="text-center text-[#073843] font-[700] text-[34px] lg:text-[56px]">
        Bizning xizmatdan foydalnmoqchimisiz?
      </h1>
      <div class="flex justify-center items-center">
        <button class="mt-[30px] lg:mx-[150px] text-[18px] border-4 border-[#073843] text-[#073843] font-[700] py-2 px-4 w-[250px] rounded-lg hover:bg-[#2f3b3d] hover:text-white hover:border-[#2f3b3d]">
          Biz bilan bog`laning
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
    import audit from '../assets/images/detail/audit.jpg';
    const back = useRouter();
</script>

<style lang="scss" scoped>

</style>