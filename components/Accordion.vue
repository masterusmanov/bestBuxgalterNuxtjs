<template>
    <div class="mx-auto text-[16px] md:text-[20px] xl:w-[70%]">
    <div v-for="(item, index) in accordionItems" :key="index">
      <div
        @click="toggleAccordion(index)"
        class="flex items-center justify-between gap-6 text-[#F0EAD6] border-4 rounded-xl border-[#F0EAD6] cursor-pointer bg-[#073843] p-4"
      >
        {{ item.title }}
        <p>▼</p>
      </div>
      <div v-if="openIndex === index" class="p-4 bg-gray-100 text-justify">
        {{ item.content }}
      </div>
    </div>
  </div>
</template>

<script setup>
    const openIndex = ref(null);

    const accordionItems = [
    {
      title: "Buxgalteriya autsorsingi nima?",
      content:
        "Buxgalteriya autsorsingi bu korxonangizga masofadan turib buxgalteriya xizmatlari ko’rsatishdir. 2020-yildan buyon deyarli barcha buxgalteriyaga oid hujjatlar elektron tarzda yuborilishi va qabul qilinishi qonun bilan mustahkamlab qo’yilgach korxonangizda o’tirmasdan ham barcha ishni masofadan turib bajarish imkoni paydo bo’ldi. Zarur hollarda mutahassisimiz sizning korxonangizga borib masalalarni yechishga kirishadi.",
    },
    {
      title: "Korxonamiz qanday dastlabki hujjatlarni taqdim etishi lozim?",
      content:
        "Buxgalteriya xizmati ko’rsatishni boshlashimiz uchun korxonangizga tegishli quyidagilarni taqdim etishingiz lozim: -Guvohnoma, nizom, ta’sis shartnomasi; -Rahbar va hodimlar passport nusxalari; -Ijara shartnomasi; -Korxona va rahbar nomiga olingan elektron kalitlar; -Bank klyuchi. Korxona xususiyatlariga qarab boshqa tegishli hujjatlar ham so’ralishi mumkin.",
    },
    {
      title:
        "Korxonada buxgalter shtati saqlashim yoki buxgalteriyani autsorsinga berishimning qanday farqlari bor?",
      content:
        "Ikkovining ham o’ziga yarasha ijobiy va salbiy tomonlari bor. Shtatdagi buhgalterga ofisdan joy,komyuter, internet kabilar bilan ta’minlashingiz zarur.Buxgalteringiz kasallik yoki boshqa sabablar tufayli ishga chiqmay qolishi mumkin.Unga kasallik varaqasi,mehnat ta’tili,dekret puli kabi qo’shimcha xarajatlar qilishingiz lozim. Buxgalteriyani ishonchli buxgalteriya korxonasiga topshirish orqali esa bunday qo’shimcha xarajatlar bo’lmaydi.Oyiga kelishilgan summani to’lashingiz yetarli.Yana shunisi ahamiyatliki siz shartnoma tuzish orqali bank hisobingiz orqali buxgalteriya xizmati uchun to’laydigan summalaringizni foyda solig’i bazasidan chegirib soliqlarni kamaytirishingiz mumkin.Buxgalteriya korxonasi o’z ofisidan turib butun jamoasi bilan sizning xizmatingizda bo’ladi.Yuzaga kelishi mumkin bo’lgan vaziyatlarni tezkorlik bilan hal qilishga intilishadi.",
    },
    {
      title:
        "Buxgalterim bor, lekin uning ishi sifatini baholay olmayabman. Buni qanday bilsam bo’ladi?",
      content:
        "Sizning buxgalteringiz ishi sifatini tekshirish,xatolarini to’g’rilashga ko’maklashish,zarur tushuntirish va tavsiyalarni berish uchun ichki audit xizmatimizdan foydalanishingiz mumkin.",
    },
  ];

    const toggleAccordion = (index) => {
        openIndex.value = openIndex.value === index ? null : index;
    };
</script>

<style lang="scss" scoped>

</style>