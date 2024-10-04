<template>
     <div class="lg:hidden">
      <button class="fixed-menu" @click="toggleMenu">
        &#9776;
      </button>
        <nav v-if="isOpen" class="menu">
          <ul>
            <li>
              <a href="#home">Bosh sahifa</a>
            </li>
            <li>
              <a href="#about">Biz haqimizda</a>
            </li>
            <li>
              <a href="#services">Xizmatlar</a>
            </li>
            <li>
              <a href="#paket">Ta`riflar</a>
            </li>
          </ul>
        </nav>
    </div>
</template>

<script setup>
    const isOpen = ref(false);

    const toggleMenu = () => {
    isOpen.value = !isOpen.value;
    };

</script>

<style lang="scss" scoped>
.fixed-menu {
    position: fixed;
    top: 120px !important;
    right: 10px;
    z-index: 1000;
    background-color: #D35E25;
    color: white;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
}

.menu {
    background-color: #D35E25;
    position: fixed;
    top: 165px !important;
    right: 10px;
    width: 200px;
    border-radius: 5px;
    padding: 10px;
    z-index: 1000;
}

.menu ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.menu ul li {
    margin: 10px 0;
}

.menu ul li a {
    color: white;
    text-decoration: none;
}

.fixed-menu {
    position: fixed;
    top: 10px;
    right: 10px;
    z-index: 1000;
    background-color: #D35E25;
    color: white;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
}
</style>