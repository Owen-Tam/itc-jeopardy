<template>
  <div
    class="flex flex-col items-center justify-around font-poppins h-screen w-screen bg-gray-200"
  >
    <Cards-Container></Cards-Container>
    <CounterContainer></CounterContainer>
  </div>
</template>
<script setup>
import { useCounterStore } from "~/stores/counter";
const store = useCounterStore();

onMounted(() => {
  store.loadLocal();
});
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
