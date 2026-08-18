<script setup lang="ts">
import PBtn from '@/components/ui/PBtn.vue'

function navToXochiCraft() {
  window.open('https://www.xochicraft.com/', '_blank')
}
</script>

<template>
  <div class="flex-col-3 py-12">
    <h1 class="header-1 bolden-2">
      Creativity meets code: <br />A showcase of my
      <span class="text-brand">personal projects</span>.
    </h1>
    <p class="text-1 text-secondary">
      Explore some of my personal projects, built with a focus on performance, maintainability, and
      usability. Each project showcases my skills in frontend development and my commitment to
      creating seamless user experiences.
    </p>
  </div>
  <section class="flex-col-3 line-top py-12">
    <div class="flex flex-row gap-6 flex-wrap justify-between px-4">
      <div class="flex-col-1 md:w-[45%]">
        <div class="flex-row-1">
          <img
            src="@/assets/images/xochicraft-mark.svg"
            alt="XochiCraft project screenshot"
            width="64"
            height="64"
          />
          <img
            src="@/assets/images/xochicraft-dark.svg"
            alt="XochiCraft project screenshot"
            width="175"
          />
        </div>
        <p class="text-1 text-secondary">
          A modern project management and team collaboration web application designed to help
          individuals and teams organize projects, manage tasks, assign responsibilities, and track
          progress in one centralized workspace.
        </p>
        <p class="text-1 text-secondary">
          A full-stack project management application inspired by platforms such as Monday.com and
          Asana, but is being built as a SaaS-style application to demonstrate real-world software
          development skills.
        </p>
      </div>
      <div class="flex-col-3 justify-end items-center grow">
        <img
          src="@/assets/images/xochicraft-dark.svg"
          alt="XochiCraft project screenshot"
          width="175"
          height="64"
        />
        <PBtn type="outline" class="w-full" centered @click="navToXochiCraft">Visit Website</PBtn>
      </div>
    </div>
  </section>
  <section class="flex-col-3 line-top py-12">
    <div class="flex flex-row justify-between p-5">
      <div class="flex-row-1">
        <img
          src="@/assets/images/xochicraft-mark.svg"
          alt="XochiCraft project screenshot"
          width="64"
          height="64"
        />
        <img
          src="@/assets/images/xochicraft-dark.svg"
          alt="XochiCraft project screenshot"
          width="175"
        />
      </div>
    </div>
  </section>
</template>
