<script setup lang="ts">
import { PhX } from '@phosphor-icons/vue'

defineProps<{
  isMenuOpen: boolean
}>()

const emit = defineEmits<{
  (e: 'closeMenu'): void
}>()

const closeMenu = () => {
  emit('closeMenu')
}
</script>

<template>
  <Teleport to="body">
    <Transition name="slide-fade">
      <div v-if="isMenuOpen" class="side-panel sm:hidden">
        <div class="overlay" @click="closeMenu"></div>
        <aside class="side-panel-content flex flex-col gap-6">
          <div class="flex justify-end">
            <button @click="closeMenu">
              <PhX size="32" />
            </button>
          </div>

          <nav class="flex flex-col gap-5 header-3">
            <a href="#projects" @click="closeMenu">Projects</a>
            <a href="#about" @click="closeMenu">About</a>
            <a href="#contact" @click="closeMenu">Contact</a>
          </nav>
        </aside>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
/* Smooth slide and fade animation for the drawer */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.slide-fade-enter-active .overlay,
.slide-fade-leave-active .overlay {
  transition: opacity 0.5s ease-in-out;
}

.slide-fade-enter-active aside,
.slide-fade-leave-active aside {
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-from .overlay,
.slide-fade-leave-to .overlay {
  opacity: 0;
}

.slide-fade-enter-from aside,
.slide-fade-leave-to aside {
  transform: translateX(100%);
}
</style>
