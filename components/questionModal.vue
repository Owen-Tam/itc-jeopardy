<template>
  <div class="fixed inset-0 flex items-center justify-center z-10">
    <teleport to="body">
      <div class="overlay fixed inset-0 bg-black bg-opacity-30"></div>
    </teleport>
    <div
      :style="cardStyle"
      class="modal rounded-lg p-16 w-70vw mh-60vh flex justify-center flex-col"
    >
      <div class="grid items-center">
        <h2 class="text-4xl font-bold mb-10">{{ questionInfo.question }}</h2>
        <div class="flex mb-5" v-if="questionInfo.images?.length > 0">
          <img
            v-for="(image, index) in questionInfo.images"
            :key="index"
            :src="images[image]"
            class="max-w-50p max-h-300px"
          />
        </div>
        <ul
          :style="{ opacity: optionsRevealed ? 1 : 0 }"
          class="list-none grid grid-cols-2 gap-5 grid-rows-2 text-2xl"
        >
          <li
            v-for="(option, index) in questionInfo.options"
            :key="index"
            :style="getOptionStyle(index)"
            class="bg-slate-50 p-5 rounded-xl cursor-pointer select-none"
            @click="checkOption(index)"
          >
            {{ String.fromCharCode(65 + index) }}. {{ option }}
          </li>
        </ul>
      </div>

      <div class="flex mt-10 space-x-4">
        <button
          class="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600"
          @click="closeModal(true, questionInfo.qid)"
        >
          Close
        </button>
        <button
          class="px-4 py-2 text-black bg-white border border-white rounded-md"
          @click="closeModal(false, questionInfo.qid)"
          v-if="!answerFound"
        >
          Close without Used
        </button>
        <button
          class="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          @click="revealOptions"
          v-if="!optionsRevealed"
        >
          Reveal Options
        </button>
        <button
          class="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600"
          @click="revealAnswer"
          v-if="!answerFound && optionsRevealed"
        >
          Reveal Answer
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { filename } from "pathe/utils";

const glob = import.meta.glob("~/assets/code/*.png", { eager: true });
const images = Object.fromEntries(
  Object.entries(glob).map(([key, value]: [string, any]) => [
    filename(key),
    value.default,
  ])
);
const emit = defineEmits(["markQ", "close"]);
const props = defineProps({
  questionInfo: {
    type: Object,
    required: true,
  },
});
const { questionInfo } = toRefs(props);

const cardStyle = computed(() => {
  switch (questionInfo.value.points) {
    case 100:
      return {
        background:
          "linear-gradient(140deg, rgba(180,227,199,1) 0%, rgba(205,230,215,1) 100%)",
      };
    case 200:
      return {
        background:
          "linear-gradient(140deg, rgba(244,225,125,1) 0%, rgba(244,225,135,1) 100%)",
      };
    case 300:
      return {
        background:
          "linear-gradient(140deg, rgba(254,176,69,1) 0%, rgba(254,176,120,1) 100%) ",
      };
    case 400:
      return {
        background:
          "linear-gradient(140deg, rgba(255,130,13,1) 0%, rgba(255,185,120,1) 100%)",
      };
    case 500:
      return {
        background:
          "linear-gradient(140deg, rgba(255,113,55,1) 0%, rgba(242,176,148,1) 100%)",
      };
  }
});
const checkedOptions: Ref<number[]> = ref([]);

const checkOption = function (index: number) {
  const selectedOption = String.fromCharCode(65 + index);
  if (selectedOption === questionInfo.value.answer) {
    // Handle correct answer
    showCorrect();
    answerFound.value = true;
  } else {
    checkedOptions.value.push(index);
  }
};
const showCorrect = function () {
  questionInfo.value.options.forEach((option: any, index: number) => {
    if (String.fromCharCode(65 + index) !== questionInfo.value.answer)
      checkedOptions.value.push(index);
  });
};
const getOptionStyle = function (index: number) {
  if (checkedOptions.value.includes(index)) {
    return {
      textDecoration: "line-through",
      opacity: 0.6,
    };
  }
  return {};
};

const answerFound = ref(false);
const optionsRevealed = ref(false);
const revealOptions = function () {
  optionsRevealed.value = true;
};

const revealAnswer = function () {
  showCorrect();
  answerFound.value = true;
};

const closeModal = function (markAsUsed: boolean, qid: number) {
  emit("close");
  if (markAsUsed) emit("markQ", qid);
};
</script>

<style>
.w-70vw {
  width: 70vw;
}

.h-60vh {
  height: 60vh;
}
.max-w-50p {
  max-width: 50%;
}
.max-h-300px {
  max-height: 200px;
}
</style>
