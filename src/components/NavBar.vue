<template>
  <nav class="mx-auto p-4 bg-amber-400">
    <div class="container mx-auto flex items-center justify-between">
      <a
        aria-label="Go to home page"
        href="#"
        class="focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-sm ring-offset-4 ring-offset-amber-400 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-9 z-50 hover:opacity-75 transition-opacity"
      >
        <img
          width="200"
          src="@/assets/logo.svg"
          class="w-48 md:w-64 lg:72"
          alt="logo"
        />
      </a>
      <button
        @click="toggleNav"
        id="menu"
        class="focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-sm ring-offset-4 ring-offset-amber-400 text-neutral-900 hover:text-neutral-600 transition-colors lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <!-- Mobile Navbar -->
      <div
        class="opacity-0 flex-col flex gap-4 absolute inset-x-0 top-16 bg-amber-400 shadow-xl text-center text-lg p-6 items-center lg:flex lg:flex-row lg:static lg:shadow-none lg:justify-between lg:w-full transition duration-500 ease-in-out z-30"
        role="menubar"
        ref="menubar"
      >
        <!-- Navbar items -->
        <Button link="/" text="Home"></Button>
        <Button link="/" text="Contact" class="lg:mr-auto"></Button>
        <Button link="/" text="Login" class="py-2"></Button>
        <Button
          link="/"
          text="Sign Up"
          class="py-2 bg-teal-900 text-white rounded-md shadow-lg hover:shadow-none hover:text-white dark:text-white transition-shadow"
        ></Button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import Button from "@/components/Button.vue";
import { ref } from "vue";
const isExpanded = ref(false);
const menubar = ref(false);

const toggleNav = () => {
  isExpanded.value = !isExpanded.value;
  menubar.value.classList.toggle("opacity-0");
  menubar.value.setAttribute("aria-expanded", isExpanded.value);
};
</script>
