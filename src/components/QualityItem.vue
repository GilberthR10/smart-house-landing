<template>
  <div class="grid gap-4 justify-items-center text-center md:flex-1">
    <div class="rounded-full border-8 border-amber-400 p-4">
      <slot name="icon"></slot>
    </div>
    <h3 class="text-3xl font-bold">{{ title }}</h3>
    <p>{{ text }}</p>
  </div>
</template>

<script setup>
import { toRefs } from "vue";
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

const { text, title } = toRefs(props);
</script>
