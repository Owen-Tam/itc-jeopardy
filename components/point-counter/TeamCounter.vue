<template>
  <div class="counter flex gap-5">
    <ScoreButtons @changeValue="changeScore"></ScoreButtons>

    <ScoreCounter :teamName="teamInfo.teamName" :score="score"></ScoreCounter>
  </div>
</template>
<script setup lang="ts">
const props = defineProps(["teamInfo"]);
const teamInfo = toRef(props.teamInfo);
import { useCounterStore } from "~/stores/counter";
const store = useCounterStore();

const score = ref(teamInfo.value.score);
const changeScore = function (numToChange: number) {
  score.value += numToChange;
  store.changeScore(numToChange, teamInfo.value.teamName);
};
</script>
