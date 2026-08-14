<script setup lang="ts">
import { ref } from 'vue'
import { PhList } from '@phosphor-icons/vue'
import MobileDrawer from '@/components/layout/MobileDrawer.vue'

const currentPath = window.location.pathname
const isMenuOpen = ref(false)

function navToHome() {
  if (window.location.pathname === '/') {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  } else {
    window.location.href = '/'
  }
}
</script>

<template>
  <div class="header-layout">
    <div class="main-header">
      <div class="flex-row-1 items-center cursor-pointer" @click="navToHome">
        <img src="@/assets/images/portfolio-logo.svg" alt="Logo" width="40" />
        <p class="header-5">Efren Suarez</p>
      </div>
      <div v-if="currentPath === '/'">
        <nav class="hidden sm:flex flex-row gap-4">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <div class="block sm:hidden">
          <button @click="isMenuOpen = true">
            <PhList size="32" />
          </button>
        </div>
      </div>
    </div>
  </div>
  <MobileDrawer :isMenuOpen="isMenuOpen" @closeMenu="() => (isMenuOpen = false)" />
</template>
