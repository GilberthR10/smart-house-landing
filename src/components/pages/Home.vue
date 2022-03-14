<template>
  <NavBar />
  <Header />
  <main class="grid gap-12 sm:gap-16 md:gap-24 lg:gap-32 px-8 overflow-hidden">
    <Button
      text="Download the App"
      class="py-2 bg-amber-400 mx-auto my-12 flex gap-2 rounded-md shadow-lg hover:shadow-none"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
        />
      </svg>
      <span>Download the App</span>
    </Button>

    <section aria-labelledby="qualities" class="relative">
      <img
        src="@/assets/dots.svg"
        class="hidden lg:block absolute top-1/2 -translate-y-1/2 -left-24 xl:-left-7"
        alt="dots"
        aria-hidden="true"
      />
      <img
        src="@/assets/dots.svg"
        class="hidden lg:block absolute top-1/2 -translate-y-1/2 -right-24 xl:-right-7"
        alt="dots"
        aria-hidden="true"
      />
      <h2 id="qualities" class="sr-only">Our Qualities</h2>

      <div
        class="container mx-auto max-w-5xl flex gap-12 flex-wrap items-start justify-center md:justify-between"
      >
        <quality-item
          text="Our products are secure and private out-of-the-box"
          title="Safe"
        >
          <template #icon>
            <icon-lock />
          </template>
        </quality-item>
        <quality-item
          text="Feel good about your wallet and the environment"
          title="Efficient"
        >
          <template #icon>
            <icon-bolt />
          </template>
        </quality-item>
        <quality-item
          text="Leading the Smart Home world for 10 years"
          title="Proven"
        >
          <template #icon>
            <icon-check />
          </template>
        </quality-item>
      </div>
    </section>

    <!-- partners section -->
    <section
      aria-labelledby="partners"
      class="text-center grid gap-8 place-items-center"
    >
      <div class="grid gap-4">
        <h2 id="partners" class="text-4xl font-bold text-amber-400">
          Our Partners
        </h2>
        <p class="w-full max-w-lg">
          We’ve partnered with hundreds of smart home brands to help you create
          a smart home that fits your needs and doesn’t lock you in.
        </p>
      </div>
      <!-- icons partners -->
      <div
        class="flex flex-wrap justify-center gap-8 md:gap-x-16 max-w-2xl mx-auto"
      >
        <div class="icon-partners">
          <img src="@/assets/partner1.svg" alt="Partner" class="h-16 w-16" />
        </div>
        <div class="icon-partners">
          <img src="@/assets/partner2.svg" alt="Partner" class="h-16 w-16" />
        </div>
        <div class="icon-partners">
          <img src="@/assets/partner3.svg" alt="Partner" class="h-16 w-16" />
        </div>
        <div class="icon-partners">
          <img src="@/assets/partner4.svg" alt="Partner" class="h-16 w-16" />
        </div>
        <div class="icon-partners">
          <img src="@/assets/partner5.svg" alt="Partner" class="h-16 w-16" />
        </div>
        <div class="icon-partners">
          <img src="@/assets/partner6.svg" alt="Partner" class="h-16 w-16" />
        </div>
        <div class="icon-partners">
          <img src="@/assets/partner7.svg" alt="Partner" class="h-16 w-16" />
        </div>
      </div>
    </section>

    <!-- in home section -->
    <section aria-labelledby="home" class="relative">
      <div
        class="grid gap-8 place-items-center md:gap-x-16 md:px-7 md:grid-cols-2 md:grid-rows-1"
      >
        <div class="">
          <img src="@/assets/table.png" alt="" />
        </div>
        <div class="flex flex-col justify-between gap-3 md:order-first">
          <h1 class="text-4xl font-bold">Relax, you’re home!</h1>
          <p class="max-w-md">
            All our supported hardware includes traditional inputs so you can
            integrate our products into your house in a way that’s best for
            everyone.
          </p>
          <a href="#" class="btn self-start">Sign up</a>
        </div>
      </div>
      <div
        class="absolute -bottom-6 -right-32 -z-10 aspect-square md:border-8 border-amber-400 rounded-full md:w-64 lg:w-96 xl:max-w-lg"
      ></div>
      <!-- div pattern -->
      <div
        class="bg-circuit-pattern bg-teal-900 h-24 xl:h-48 -mx-8 mt-12 xl:mt-0 xl:absolute w-screen -bottom-8 -z-10"
      ></div>
      <!-- div circle -->
    </section>
  </main>
  <!-- form section -->
  <section
    aria-labelledby="contact"
    class="container mx-auto px-8 overflow-hidden grid md:grid-cols-2"
  >
    <!-- lamp container -->
    <div class="relative flex flex-col">
      <div class="mx-auto">
        <img src="@/assets/lamp.png" alt="" />
      </div>
      <Button
        text="Download the App"
        class="py-2 bg-amber-400 mx-auto my-12 flex gap-2 rounded-md shadow-lg hover:shadow-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
        <span>Download the App</span>
      </Button>
      <div class="relative">
        <img
          src="@/assets/app.svg"
          width="240"
          class="hidden md:block drop-shadow-xl absolute left-1/2 -translate-x-1/2 max-w-16 xl:max-w-xs"
          alt="App"
        />
        <div
          class="absolute -bottom-18 left-1/2 -translate-x-1/2 -z-10 aspect-square md:border-8 border-amber-400 rounded-full md:w-72 lg:w-96"
        ></div>
      </div>
    </div>

    <!-- form container -->
    <form
      class="relative border-8 border-neutral-900 p-6 rounded-lg grid gap-8 md:flex-1 md:max-w-lg my-4 md:my-12 lg:my-16 bg-white dark:bg-neutral-800 w-full"
    >
      <h2 id="contact" class="text-3xl font-bold">Let’s Connect</h2>
      <div class="relative">
        <input
          type="text"
          id="name"
          class="peer form-input w-full border-4 border-amber-400 rounded-md focus:ring-4 dark:focus:ring-offset-2 focus:ring-amber-400 focus:border-amber-400 focus:outline-none dark:bg-amber-400 dark:text-neutral-900 placeholder-transparent"
          placeholder="Your Name"
        />
        <label
          for="name"
          class="text-neutral-500 text-sm font-bold uppercase absolute -top-4 left-2 -translate-y-1/2 transition-all peer-placeholder-shown:left-4 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-neutral-900 peer-focus:-top-4 peer-focus:left-2 peer-focus:text-neutral-600 dark:peer-focus:text-neutral-300"
        >
          Your Name
        </label>
      </div>
      <div class="relative">
        <input
          type="email"
          id="email"
          class="peer form-input w-full border-4 border-amber-400 rounded-md focus:ring-4 dark:focus:ring-offset-2 focus:ring-amber-400 focus:border-amber-400 focus:outline-none dark:bg-amber-400 dark:text-neutral-900 placeholder-transparent"
          placeholder="Your Email"
        />
        <label
          for="email"
          class="text-neutral-500 text-sm font-bold uppercase absolute -top-4 left-2 -translate-y-1/2 transition-all peer-placeholder-shown:left-4 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-neutral-900 peer-focus:-top-4 peer-focus:left-2 peer-focus:text-neutral-600 dark:peer-focus:text-neutral-300"
        >
          Your Email
        </label>
      </div>
      <div class="relative">
        <textarea
          name="content"
          id="content"
          cols="20"
          rows="5"
          class="peer form-textarea resize-none w-full border-4 border-amber-400 rounded-md focus:ring-4 dark:focus:ring-offset-2 focus:ring-amber-400 focus:border-amber-400 focus:outline-none dark:bg-amber-400 dark:text-neutral-900 placeholder-transparent"
          placeholder="How can we help?"
        ></textarea>
        <label
          for="content"
          class="text-neutral-500 text-sm font-bold uppercase absolute -top-3 left-2 -translate-y-1/2 transition-all peer-placeholder-shown:left-4 peer-placeholder-shown:top-6 peer-placeholder-shown:text-neutral-900 peer-focus:-top-4 peer-focus:left-2 peer-focus:text-neutral-600 dark:peer-focus:text-neutral-300"
        >
          How can we help?
        </label>
      </div>
      <a
        role="menuitem"
        class="py-2 px-6 bg-neutral-900 text-white w-max shadow-xl hover:shadow-none transition-shadow focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-md ring-offset-4 ring-offset-white dark:ring-offset-amber-400"
        href="/"
      >
        Sign Up
      </a>
    </form>
  </section>
</template>
<script setup>
import Header from "@/components/Header.vue";
import NavBar from "@/components/NavBar.vue";
import Button from "@/components/Button.vue";
import QualityItem from "@/components/QualityItem.vue";
import IconLock from "@/components/icons/IconLock.vue";
import IconBolt from "@/components/icons/IconBolt.vue";
import IconCheck from "@/components/icons/IconCheck.vue";
</script>
<style lang="postcss" scoped>
.icon-partners {
  @apply p-4 bg-white shadow-md dark:shadow-xl dark:bg-gradient-to-b dark:from-amber-400 dark:to-amber-600 rounded-md;
}

.btn {
  @apply py-2 px-6 bg-amber-400 dark:text-neutral-900 flex gap-2 shadow-xl hover:shadow-none transition-shadow focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-md ring-offset-4 ring-offset-white dark:ring-amber-400 dark:ring-offset-neutral-800;
}
</style>
