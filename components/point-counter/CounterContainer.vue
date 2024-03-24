<template>
  <div class="flex flex-wrap w-screen justify-around">
    <TeamCounter v-for="team in teams" :teamInfo="team"></TeamCounter>
  </div>
</template>
<script setup>
import { useCounterStore } from "~/stores/counter";

const store = useCounterStore();
const teams = computed(() => store.teamInfo);
</script>
