<template>
  <div
    class="shadow-md bg-white text-center p-6 rounded-3xl flex justify-around align-center flex-col"
  >
    <textarea
      class="text-2xl/[0.5] appearance-none bg-transparent w-40 h-9 resize-none text-center"
    >
Team {{ teamName }}</textarea
    >
    <p class="pt-2 text-5xl font-medium">{{ scoreComputed }}</p>
  </div>
</template>
<script setup>
import { useCounterStore } from "~/stores/counter";

const props = defineProps({
  score: {
    type: Number,
  },
  teamName: {
    type: String,
  },
});
const { score, teamName } = toRefs(props);
const scoreComputed = computed(() => String(score.value).padStart(3, "0"));
</script>
<style scoped></style>
