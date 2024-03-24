<template>
  <div class="h-full flex flex-col place-items-center gap-1">
    <div class="btn bg-success" @click="add">+</div>
    <input
      class="border-slate-600 border-2 bg-white text-center text-xl border-solid w-16 rounded-3xl"
      type="num"
      v-model="num"
    />
    <div class="btn bg-danger" @click="subtract">-</div>
  </div>
</template>
<script setup>
const emit = defineEmits(["changeValue"]);
const num = ref(100);
const add = function () {
  if (Number.isInteger(+num.value)) emit("changeValue", +num.value);
  else showError();
};
const subtract = function () {
  if (Number.isInteger(+num.value)) emit("changeValue", -+num.value);
  else showError();
};
const showError = function () {
  alert("You can only add or subtract integers!");
};
</script>
<style scoped>
.btn {
  @apply select-none text-white text-2xl grid place-items-center rounded-full cursor-pointer;
  height: 50px;
  width: 50px;
}
input {
  width: 60px;
  height: 50px;
}
</style>
