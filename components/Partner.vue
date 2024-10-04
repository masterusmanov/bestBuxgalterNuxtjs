<template>
   <div class="gallery-container">
    <div class="gallery">
      <img v-for="(src, index) in images" :key="index" :src="src" alt="" />
    </div>
  </div>
</template>

<script setup>
    import Hischool from "../assets/images/partner/HiSchool.png";
    import Supermiya_logo from "../assets/images/partner/Supermiya_logo.png";
    import supermiya_color from "../assets/images/partner/supermiya_color.png";
    import Spetion from "../assets/images/partner/Spetion.png";
    import GL from "../assets/images/partner/GL.png";
    import Target from "../assets/images/partner/Target.png";
    import Basaltkom from "../assets/images/partner/Basaltkom.png";
    import masshtab from "../assets/images/partner/masshtab.png";
    import modern from "../assets/images/partner/modern.png";
    import medical from "../assets/images/partner/medical.png";
    import tuyxona from "../assets/images/partner/tuyxona.png";
    import sinfxona from "../assets/images/partner/sinfxona.png";
    import zulxumor from "../assets/images/partner/zulxumor.png";

    const images = [
        Hischool,
        medical,
        Supermiya_logo,
        Target,
        Spetion,
        supermiya_color,
        GL,
        Basaltkom,
        masshtab,
        modern,
        tuyxona,
        sinfxona,
        zulxumor,
        // Duplicate images to create the seamless scroll effect
        Hischool,
        medical,
        Supermiya_logo,
        Target,
        Spetion,
        supermiya_color,
        GL,
        Basaltkom,
        masshtab,
        modern,
        tuyxona,
        sinfxona,
        zulxumor,
    ];
</script>


<style lang="scss" scoped>
    .gallery-container {
        /* width: 100%; */
        overflow: hidden;
        position: relative;
    }

    .gallery {
        display: flex;
        animation: scroll 25s linear infinite;
        gap: 20px;
        width: max-content;
    }

    .gallery img {
        /* width: 200px; */
        height: 100px;
        margin-right: 10px;
    }

    @keyframes scroll {
        0% {
            transform: translateX(0);
        }

        100% {
            transform: translateX(-50%);
        }
    }
</style>