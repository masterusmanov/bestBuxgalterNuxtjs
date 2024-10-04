<template>
    <div class="bg-[#073843] p-5 lg:p-10">
    <div class="container mx-auto">
      <div class="bg-[#B6B4B2] lg:flex gap-6 lg:p-5 rounded-2xl">
        <div class="lg:w-1/2 border-8 rounded-2xl p-5">
          <h1 class="text-[#073843] text-[24px] lg:text-[32px] py-6 font-[700]">Savollar bormi?</h1>
          <p class="font-[600] text-[14px] md:text-[16px]">Agar sizda buxgalteriyaga oid muammolar bo'lsa, biz bilan bog'laning!</p>
          <div class="py-2 lg:py-5">
            <form @submit.prevent="handleSubmit" class="mx-auto p-5 bg-[#B6B4B2]">
              <h1 class="font-[700] lg:text-[22px]">Ma'lumotlaringizni kiriting!</h1>
              <div class="my-[15px] lg:my-[50px]">
                <input
                  type="text"
                  v-model="formData.name"
                  class="w-full lg:w-[90%] p-2 border border-gray-300 rounded-lg"
                  placeholder="Ismingiz! *"
                />
              </div>
              <div class="my-[15px] lg:my-[50px]">
                <input
                  type="tel"
                  v-model="formData.phone"
                  class="w-full lg:w-[90%] p-2 border border-gray-300 rounded-lg"
                  placeholder="Telefon raqamingiz! *"
                />
              </div>
              <button
                type="submit"
                class="w-full md:w-[150px] float-right font-[600] bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
              >
                Yuborish
              </button>
            </form>
          </div>
        </div>
        <div class="w-1/2 hidden lg:flex">
          <img src="../assets/images/operators/operator.png" alt="" class="w-[450px] mx-auto object-cover" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

    import axios from 'axios';
    const formData = ref({
    name: '',
    phone: '',
    });

    const handleSubmit = () => {
    const telegramBotToken = 'YOUR_TELEGRAM_BOT_TOKEN';
    const chatId = 'YOUR_CHAT_ID';
    const telegramApiUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;

    const message = `Yangi ariza:\n\nIsm: ${formData.value.name}\nTelefon: ${formData.value.phone}`;

    axios.post(telegramApiUrl, {
        chat_id: chatId,
        text: message,
    })
    .then(response => {
        console.log('Ma\'lumot jo\'natildi:', response.data);
    })
    .catch(error => {
        console.error('Xatolik yuz berdi:', error);
    });
    };
</script>

<style lang="scss" scoped>

</style>