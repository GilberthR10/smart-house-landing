<template>
  <!-- Navbar items -->
  <a
    :href="link"
    role="menuitem"
    class="py-1 px-6 dark:text-neutral-900 focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-sm ring-offset-4 ring-offset-amber-400 text-neutral-900 hover:text-neutral-600 transition-colors"
  >
    <slot>
      {{ text }}
    </slot>
  </a>
</template>

<script setup>
import { toRefs } from "vue";
const props = defineProps({
  link: {
    type: String,
    default: "#",
  },
  text: {
    type: String,
    required: true,
  },
});

const { link, text } = toRefs(props);
</script>
