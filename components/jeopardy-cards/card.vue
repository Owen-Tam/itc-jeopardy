<template>
  <div
    :style="[getCardStyle()]"
    class="card p-2 w-16 select-none cursor-pointer text-center text-xl"
  >
    <slot></slot>
  </div>
</template>
<script setup>
const props = defineProps(["questionInfo", "used"]);
const { questionInfo, used } = toRefs(props);

const getCardStyle = function () {
  if (used.value) {
    return {
      textDecoration: "line-through",
      background: "rgba(255, 255, 255, 0.5)",
      cursor: "not-allowed",
    };
  }
  switch (questionInfo.value.points) {
    case 100:
      return {
        backgroundColor: "#B4E3C7",
      };
    case 200:
      return {
        backgroundColor: "#F4E17D",
      };
    case 300:
      return {
        backgroundColor: "#FEB045 ",
      };
    case 400:
      return {
        backgroundColor: "#FF820D",
      };
    case 500:
      return {
        backgroundColor: "#FF4A00",
      };
  }
};
</script>
