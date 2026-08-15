<script setup lang="ts">
withDefaults(
  defineProps<{
    type?: 'primary' | 'secondary' | 'outline' | 'underline' | 'text'
    size?: 'sm' | 'md' | 'lg'
    centered?: boolean
  }>(),
  {
    type: 'primary',
    size: 'md',
    centered: false,
  },
)
</script>

<template>
  <button :class="`btn btn-${type} btn-${size ?? 'md'} ${centered ? 'justify-center' : ''}`">
    <slot />
  </button>
</template>
