# Personal Portfolio Website

A clean, responsive, and accessible personal web development portfolio built with **Vue 3**, **Vite**, and **Tailwind CSS**.

🚀 **Live Demo:** [efrensuarez.com](https://efrensuarez.com) _(Replace with your live URL or Vercel/Netlify link)_

---

## 🛠️ Tech Stack

- **Framework:** [Vue 3](https://vuejs.org/) (Composition API with `<script setup lang="ts">`)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [@phosphor-icons/vue](https://phosphoricons.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)

---

## ✨ Features

- **Responsive Design:** Mobile-first layout featuring a custom off-canvas mobile drawer (`MobileDrawer.vue`) with smooth slide transitions and scroll-locking.
- **Resume Viewer & Direct Download:** Custom dropdown component allowing visitors to either view the PDF in-browser or fetch it directly as a binary blob download.
- **Custom UI Components:** Reusable button (`PBtn`) and dropdown (`PDropDown`) components built with flexible slot interfaces.
- **404 Routing:** Complete SPA fallback handling with Vue Router catch-all matching for clean navigation errors.

---

## 💻 Local Development Setup

To run this project locally:

**Clone the repository:**

````bash
git clone [https://github.com/your-username/portfolio.git](https://github.com/your-username/portfolio.git)
cd portfolio

## Install Dependencies

```bash
npm install
````

### Start the development server

```bash
npm run dev
```

### Build for production

```sh
npm run build
```
