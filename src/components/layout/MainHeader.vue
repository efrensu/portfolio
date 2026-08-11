<script setup lang="ts">
function navToHome() {
  window.location.href = '/'
}
</script>

<template>
  <div class="header-layout">
    <div class="main-header">
      <div class="flex-row-1 items-center cursor-pointer" @click="navToHome">
        <img src="@/assets/images/portfolio-logo.svg" alt="Logo" width="40" />
        <p class="header-5">Efren Suarez</p>
      </div>
      <div class="flex-row-1">
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  </div>
</template>
