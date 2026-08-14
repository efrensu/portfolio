<script setup lang="ts">
import { ref } from 'vue'
import { PhCaretDown } from '@phosphor-icons/vue'

const isMenuOpen = ref(false)

withDefaults(
  defineProps<{
    type?: 'primary' | 'secondary' | 'outline' | 'underline' | 'text'
    size?: 'sm' | 'md' | 'lg'
  }>(),
  {
    type: 'primary',
    size: 'md',
  },
)
</script>

<template>
  <div class="dropdown-container">
    <button :class="`btn btn-${type} btn-${size ?? 'md'}`" @click="isMenuOpen = !isMenuOpen">
      <slot name="activator" />
      <PhCaretDown
        :size="14"
        :class="{ 'rotate-180': isMenuOpen }"
        class="transition-transform duration-200"
      />
    </button>
    <div v-if="isMenuOpen" class="dropdown-overlay" @click="isMenuOpen = false" />

    <Transition name="fade-slide">
      <div v-if="isMenuOpen" class="dropdown-menu" @click="isMenuOpen = false">
        <slot />
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.15s ease-out;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
