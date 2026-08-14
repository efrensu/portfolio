<script setup lang="ts">
import { PhFileText } from '@phosphor-icons/vue'
import PBtn from '@/components/ui/PBtn.vue'
import PDropDown from '@/components/ui/PDropDown.vue'

const resturantCRMList = [
  'Initiated the project from zero: chose the core stack, configured tooling, and built the design system — type, color, base styles, and the shared component library the team built on',
  'Led the initial build before handing it off to prioritize higher-priority work elsewhere',
  "Worked primarily on the frontend, regularly adjusting API payloads and validation when data contracts didn't match what the UI needed",
]
const resturantCRMStack = ['Vue', 'Vuetify', 'PHP', 'MySQL']

const memberAppList = [
  'Owned key parts of the onboarding and dashboard experience',
  'Audited existing flows to identify and remove redundant screens, simplifying the path members took to get where they needed to go',
  'Designed micro-interactions to smooth transitions and make state changes — updates, loading states — more visible and legible',
]
const memberAppStack = ['React Native', 'PHP', 'MySQL']

const stackList = [
  'Next.js',
  'TypeScript',
  'React',
  'Prisma',
  'Tailwind',
  'Vue.js',
  'Node.js',
  'REST APIs',
  'Git & GitHub',
]

function navToWorkPage() {
  window.location.href = '/work'
}

function viewResume() {
  window.open('/Efren_Suarez_Gonzalez_Resume.pdf', '_blank')
}

function downloadResume() {
  console.log('Downloading resume...')
}

function openEmailApp() {
  window.location.href = 'mailto:efrensuarezgonzalez@gmail.com'
}

function navToGithub() {
  window.open('https://github.com/efrensu?tab=repositories', '_blank')
}
</script>

<template>
  <div class="flex-col-3 py-12">
    <p class="text-1 text-brand">// frontend-focused engineer</p>
    <h1 class="header-1 bolden-2">
      Builds interfaces that hold up <br />under <span class="text-brand">real usage</span>.
    </h1>
    <p class="text-1 text-secondary">
      I work across the stack — Next.js, TypeScript, React, Prisma, Tailwind — but the frontend is
      where I dig in: component architecture, state, and the small interaction details most people
      never notice until they're missing.
    </p>
    <div class="flex-row-1 items-center">
      <PBtn type="primary" @click="navToWorkPage">View My Work</PBtn>
      <PDropDown type="outline" size="md">
        <template #activator><PhFileText size="18" /> Resume </template>
        <div class="flex-col-1">
          <PBtn type="text" size="md" @click="viewResume">View</PBtn>
          <PBtn type="text" size="md" @click="downloadResume">Download</PBtn>
        </div>
      </PDropDown>
    </div>
  </div>

  <section id="projects" class="flex-col-3 py-12 line-top">
    <div class="flex-row-1 flex-wrap justify-between items-end">
      <h2 class="header-2 bolden-2">Projects</h2>
      <p class="text-1 text-secondary">git log --experience</p>
    </div>
    <div class="flex-col-3 py-12">
      <div class="flex-col-1 card-brand">
        <p class="text-1">Role: Frontend Developer &bullet; Contributor</p>
        <div>
          <h3 class="header-3 bolden-1">Restaurant CRM Platform</h3>
          <p class="text-1">Reservations, Memberships & ops CRM</p>
        </div>
        <p class="text-1 text-brand">
          Founded and architected the frontend for a restaurant CRM handling reservations, guest and
          paid memberships, business metrics, and a guided member onboarding flow.
        </p>
        <div class="px-2">
          <div v-for="item in resturantCRMList" :key="item" class="flex flex-row gap-2 text-1">
            <p class="text-brand">&bullet;</p>
            <p>{{ item }}</p>
          </div>
        </div>
        <div class="flex-row-1">
          <div v-for="stack in resturantCRMStack" :key="stack" class="chip">
            <p>{{ stack }}</p>
          </div>
        </div>
      </div>

      <div class="flex-col-1 card-grey">
        <p class="text-1">Role: Frontend Developer &bullet; Contributor</p>
        <div>
          <h3 class="header-3 bolden-1">Member Companion App</h3>
          <p class="text-1">Member-facing mobile app</p>
        </div>
        <p class="text-1 text-secondary">
          Built the member-facing counterpart to the CRM above — a React Native app members use
          after purchasing a paid membership to manage their account and access perks.
        </p>
        <div class="px-2">
          <div v-for="item in memberAppList" :key="item" class="flex flex-row gap-2 text-1">
            <p class="text-secondary">&bullet;</p>
            <p>{{ item }}</p>
          </div>
        </div>
        <div class="flex-row-1">
          <div v-for="stack in memberAppStack" :key="stack" class="chip">
            <p>{{ stack }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="about" class="flex-col-3 py-12 line-top">
    <div class="flex-row-1 flex-wrap justify-between items-end">
      <h2 class="header-2 bolden-2">About</h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-16 py-12 px-4">
      <div class="flex-col-1">
        <p>
          I'm a frontend-focused engineer who's comfortable owning a UI from a blank config file to
          a production codebase — and just as comfortable being handed someone else's mess and
          making it make sense again.
        </p>

        <p>
          Outside of client work, I'm building a full-stack project management app end-to-end —
          auth, role-based permissions, real-time collaboration — as a space to make my own
          architecture calls without a deadline attached.
        </p>
      </div>

      <div class="flex-col-1">
        <p class="text-1 text-brand">// stack</p>
        <div class="flex-row-1 flex-wrap">
          <div v-for="stack in stackList" :key="stack" class="chip">
            {{ stack }}
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="contact" class="flex-col-3 py-12 line-top">
    <div class="flex-row-2 flex-wrap justify-between">
      <h2 class="header-2 bolden-2">Contact</h2>
      <div class="flex-col-1">
        <PBtn type="underline" size="sm" @click="openEmailApp"
          >email &RightArrow; efrensuarezgonzalez@gmail.com</PBtn
        >
        <PBtn type="underline" size="sm" @click="navToGithub">
          github &RightArrow; github.com/efrensu
        </PBtn>
        <!-- <PBtn type="underline" size="sm">
            linkedin &RightArrow; efrensuarezgonzalez@gmail.com
          </PBtn> -->
      </div>
    </div>
  </section>
</template>
