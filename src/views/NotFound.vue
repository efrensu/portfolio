<script setup lang="ts">
import PBtn from '@/components/ui/PBtn.vue'

function goBack() {
  window.history.back()
}

function goToMainPage() {
  window.location.href = '/'
}
</script>

<template>
  <div class="flex-col-3 w-full min-h-[50dvh] justify-center items-center">
    <div>
      <h1 class="header-1 bolden-1">Page Not Found</h1>
    </div>
    <div class="flex-col-1">
      <PBtn type="outline" size="lg" centered @click="goBack">Go Back</PBtn>
      <PBtn size="lg" centered @click="goToMainPage">Main Page</PBtn>
    </div>
  </div>
</template>
