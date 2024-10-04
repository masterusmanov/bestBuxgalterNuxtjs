<template>
     <div class="container mx-auto px-2 lg:px-0 xl:px-2 2xl:px-0 flex items-center justify-between">
      <img
        src="../assets/images/logo2.svg"
        alt=""
        class="w-[120px] md:w-[150px] xl:w-[200px]"
      />
      <div class="lg:flex items-center gap-6">
        <div class="hidden lg:flex items-center gap-10 font-bold text-[13px] xl:text-[16px] mr-14">
          <a href="/">BOSH SAHIFA</a>
          <a href="#about">BIZ HAQIMIZDA</a>
          <div class="dropdown">
            <button class="dropbtn font-bold text-[13px] xl:text-[16px]">
              XIZMATLAR
            </button>
            <div class="dropdown-content text-[16px] font-[500]">
              <a href="/all_service">Barcha turdagi buxgalteriya xizmatlari</a>
              <a href="/recovery">Buxgalteriya hisobini tiklash</a>
              <a href="/audit">
                Buxgalteriya hujjatlarini audit qilish,korxonangiz uchun ichki
                audit xizmatini tashkil qilish
              </a>
              <a href="/financ">
                Moliyaviy, soliq va statistik hisobotlarni tuzish
              </a>
              <a href="/policy"> Hisob siyosatini tuzish</a>
              <a href="/business">
                Biznesni ro`yhatdan o`tkazish, o`zgarishlarni rasmiylashtirish
                va tugatish
              </a>
            </div>
          </div>
          <a href="#">YANGILIKLAR</a>
        </div>
        <div class="flex items-center gap-6">
          <div>
            <div class="flex gap-3 items-center font-[700]">
              <i class="bx bxs-phone text-red-500 text-[14px] lg:text-[20px] 2xl:text-[20px]"></i>
              <h1 class="text-[14px] lg:text-[18px] 2xl:text-[20px]">
                +998999098015
              </h1>
            </div>
            <div class="flex gap-3 items-center text-[18px] font-[700] mt-3">
              <i class="bx bxl-telegram text-blue-500 text-[14px] lg:text-[20px] 2xl:text-[20px]"></i>
              <a
                href="https://t.me/best_buxgalter"
                class="text-[14px] lg:text-[18px] 2xl:text-[20px]"
              >
                @best_buxgalter
              </a>
            </div>
          </div>
          <div>
            <div class="flex items-center gap-2 font-[700]">
              <img src="../assets/images/lang/uzb.png" alt="" class="w-[15px] lg:w-[25px]" />
              <span class="text-[14px] lg:text-[18px] 2xl:text-[20px]">
                UZB
              </span>
            </div>
            <div class="flex items-center gap-2 font-[700]">
              <img src="../assets/images/lang/rus.png" alt="" class="w-[15px] lg:w-[25px]" />
              <span class="text-[14px] lg:text-[18px] 2xl:text-[20px]">
                RUS
              </span>
            </div>
            <div class="flex items-center gap-2 font-[700]">
              <img src="../assets/images/lang/eng.png" alt="" class="w-[15px] lg:w-[25px]" />
              <span class="text-[14px] lg:text-[18px] 2xl:text-[20px]">
                ENG
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.dropbtn {
    font-size: 16px;
    border: none;
    border-radius: 12px;
}

.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-content {
    background-color: #d7bcbc;
    display: none;
    position: absolute;
    min-width: 300px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
}

.dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

.dropdown-content a:hover {
    background-color: #ddd;
}

.dropdown:hover .dropdown-content {
    display: block;
}
</style>