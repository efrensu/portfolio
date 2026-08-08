<script setup lang="ts">
defineProps<{
  type: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}>()
</script>

<template>
  <button :class="`btn btn-${type} btn-${size ?? 'md'}`"><slot /></button>
</template>
