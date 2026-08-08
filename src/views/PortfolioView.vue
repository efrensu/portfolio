<script setup lang="ts">
import PBtn from '@/components/ui/PBtn.vue'
</script>

<template>
  <main>
    <div class="flex-col-3 py-12">
      <p class="text-1 text-brand">// frontend-focused engineer</p>
      <h1 class="header-1 bolden-2">
        Builds interfaces that hold up under <span class="text-brand">real usage</span>.
      </h1>
      <p class="text-1 text-secondary">
        I work across the stack — Next.js, TypeScript, React, Prisma, Tailwind — but the frontend is
        where I dig in: component architecture, state, and the small interaction details most people
        never notice until they're missing.
      </p>
      <div class="flex-row-1 items-center">
        <PBtn type="primary">View My Work</PBtn>
        <PBtn type="outline">Download Resume</PBtn>
      </div>
    </div>

    <section id="experience" class="flex-col-3 py-12 line-top">
      <div class="flex-row-1 justify-between items-end">
        <h2 class="header-2 bolden-2">Experience</h2>
        <p class="text-1 text-secondary">git log --experience</p>
      </div>
    </section>
  </main>
</template>
