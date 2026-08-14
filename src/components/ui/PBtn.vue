<script setup lang="ts">
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
  <button :class="`btn btn-${type} btn-${size ?? 'md'}`"><slot /></button>
</template>
