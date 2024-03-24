<template>
  <div class="fixed inset-0 flex items-center justify-center z-10">
    <teleport to="body">
      <div class="overlay fixed inset-0 bg-black bg-opacity-30"></div>
    </teleport>
    <div
      :style="cardStyle"
      class="modal rounded-lg p-16 w-70vw h-60vh flex justify-center flex-col"
    >
      <div class="grid items-center">
        <h2 class="text-4xl font-bold mb-10">{{ questionInfo.question }}</h2>
        <ul class="list-none grid grid-cols-2 gap-5 grid-rows-2 text-2xl">
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
          @click="closeModal(true, questionInfo.question)"
        >
          Close
        </button>
        <button
          class="px-4 py-2 text-black bg-white border border-white rounded-md"
          @click="closeModal(false, questionInfo.question)"
          v-if="!answerFound"
        >
          Close without Used
        </button>
        <button
          class="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          @click="revealAnswer"
          v-if="!answerFound"
        >
          Reveal Answer
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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

const revealAnswer = function () {
  showCorrect();
  answerFound.value = true;
};

const closeModal = function (markAsUsed: boolean, question: string) {
  emit("close");
  if (markAsUsed) emit("markQ", question);
};
</script>

<style>
.w-70vw {
  width: 70vw;
}

.h-60vh {
  height: 60vh;
}
</style>
