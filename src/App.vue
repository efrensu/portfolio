<script setup lang="ts">
import MainHeader from '@/components/layout/MainHeader.vue'
import MainFooter from '@/components/layout/MainFooter.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <MainHeader />
  <RouterView />
  <MainFooter />
</template>
