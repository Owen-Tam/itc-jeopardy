<template>
  <div class="flex gap-28 mt-10 w-8/12 justify-center">
    <div class="flex flex-col gap-5 items-center w-16" v-for="category in data">
      <h5 class="text-2xl font-semibold">{{ category.categoryName }}</h5>
      <card
        v-for="question in category.questions"
        @click="openQuestion(question)"
        :questionInfo="question"
        :used="used.includes(question.question)"
        >{{ question.points }}</card
      >
    </div>
  </div>
  <questionModal
    @close="openedQuestion = false"
    @markQ="markQuestion"
    :questionInfo="curQuestionInfo"
    v-if="openedQuestion"
  ></questionModal>
</template>
<script setup>
const used = ref([]);
onMounted(() => {
  if (localStorage.getItem("used")) {
    used.value = JSON.parse(localStorage.getItem("used"));
  }
});
const data = [
  {
    categoryName: "Web",
    questions: [
      {
        points: 500,
        question: "What is the full name of HTML",
        options: [
          "HWIAHDOAW",
          "AWFWAFAWF",
          "Hypertext Markup Language",
          "bruh",
        ],
        answer: "C",
      },
      {
        points: 400,
        question: "What is the full name of HTML",
        options: [
          "HWIAHDOAW",
          "AWFWAFAWF",
          "Hypertext Markup Language",
          "bruh",
        ],
        answer: "C",
      },
      {
        points: 300,
        question: "What is the full name of HTML",
        options: [
          "HWIAHDOAW",
          "AWFWAFAWF",
          "Hypertext Markup Language",
          "bruh",
        ],
        answer: "C",
      },
      {
        points: 200,
        question: "What is the full name of HTML",
        options: [
          "HWIAHDOAW",
          "AWFWAFAWF",
          "Hypertext Markup Language",
          "bruh",
        ],
        answer: "C",
      },
      {
        points: 100,
        question: "What is the full name of HTML",
        options: [
          "HWIAHDOAW",
          "AWFWAFAWF",
          "Hypertext Markup Language",
          "bruh",
        ],
        answer: "C",
      },
    ],
  },
  {
    categoryName: "Trivia",
    questions: [
      {
        points: 500,
        question: "What is the full name of HTML",
        options: [
          "HWIAHDOAW",
          "AWFWAFAWF",
          "Hypertext Markup Language",
          "bruh",
        ],
        answer: "C",
      },
      {
        points: 400,
        question: "What is the full name of HTML",
        options: [
          "HWIAHDOAW",
          "AWFWAFAWF",
          "Hypertext Markup Language",
          "bruh",
        ],
        answer: "C",
      },
      {
        points: 300,
        question: "What is the full name of HTML",
        options: [
          "HWIAHDOAW",
          "AWFWAFAWF",
          "Hypertext Markup Language",
          "bruh",
        ],
        answer: "C",
      },
      {
        points: 200,
        question: "What is the full name of HTML",
        options: [
          "HWIAHDOAW",
          "AWFWAFAWF",
          "Hypertext Markup Language",
          "bruh",
        ],
        answer: "C",
      },
      {
        points: 100,
        question: "What is the full name of HTML",
        options: [
          "HWIAHDOAW",
          "AWFWAFAWF",
          "Hypertext Markup Language",
          "bruh",
        ],
        answer: "C",
      },
    ],
  },
  {
    categoryName: "Programming",
    questions: [
      {
        points: 500,
        question: "What is the full name of HTML",
        options: [
          "HWIAHDOAW",
          "AWFWAFAWF",
          "Hypertext Markup Language",
          "bruh",
        ],
        answer: "C",
      },
      {
        points: 400,
        question: "What is the full name of HTML",
        options: [
          "HWIAHDOAW",
          "AWFWAFAWF",
          "Hypertext Markup Language",
          "bruh",
        ],
        answer: "C",
      },
      {
        points: 300,
        question: "What is the full name of HTML",
        options: [
          "HWIAHDOAW",
          "AWFWAFAWF",
          "Hypertext Markup Language",
          "bruh",
        ],
        answer: "C",
      },
      {
        points: 200,
        question: "What is the full name of HTML",
        options: [
          "HWIAHDOAW",
          "AWFWAFAWF",
          "Hypertext Markup Language",
          "bruh",
        ],
        answer: "C",
      },
      {
        points: 100,
        question: "What is the full name of HTML",
        options: [
          "HWIAHDOAW",
          "AWFWAFAWF",
          "Hypertext Markup Language",
          "bruh",
        ],
        answer: "C",
      },
    ],
  },
  {
    categoryName: "Security",
    questions: [
      {
        points: 500,
        question: "What is the full name of HTML",
        options: [
          "HWIAHDOAW",
          "AWFWAFAWF",
          "Hypertext Markup Language",
          "bruh",
        ],
        answer: "C",
      },
      {
        points: 400,
        question: "What is the full name of HTML",
        options: [
          "HWIAHDOAW",
          "AWFWAFAWF",
          "Hypertext Markup Language",
          "bruh",
        ],
        answer: "C",
      },
      {
        points: 300,
        question: "What is the full name of HTML",
        options: [
          "HWIAHDOAW",
          "AWFWAFAWF",
          "Hypertext Markup Language",
          "bruh",
        ],
        answer: "C",
      },
      {
        points: 200,
        question: "What is the full name of HTML",
        options: [
          "HWIAHDOAW",
          "AWFWAFAWF",
          "Hypertext Markup Language",
          "bruh",
        ],
        answer: "C",
      },
      {
        points: 100,
        question: "What is the full name of HTML",
        options: [
          "HWIAHDOAW",
          "AWFWAFAWF",
          "Hypertext Markup Language",
          "bruh",
        ],
        answer: "C",
      },
    ],
  },
  {
    categoryName: "Hardware",
    questions: [
      {
        points: 500,
        question: "What is the full name of HTML",
        options: [
          "HWIAHDOAW",
          "AWFWAFAWF",
          "Hypertext Markup Language",
          "bruh",
        ],
        answer: "C",
      },
      {
        points: 400,
        question: "What is the full name of HTML",
        options: [
          "HWIAHDOAW",
          "AWFWAFAWF",
          "Hypertext Markup Language",
          "bruh",
        ],
        answer: "C",
      },
      {
        points: 300,
        question: "What is the full name of HTML",
        options: [
          "HWIAHDOAW",
          "AWFWAFAWF",
          "Hypertext Markup Language",
          "bruh",
        ],
        answer: "C",
      },
      {
        points: 200,
        question: "What is the full name of HTML",
        options: [
          "HWIAHDOAW",
          "AWFWAFAWF",
          "Hypertext Markup Language",
          "bruh",
        ],
        answer: "C",
      },
      {
        points: 100,
        question: "What is the full name of HTML",
        options: [
          "HWIAHDOAW",
          "AWFWAFAWF",
          "Hypertext Markup Language",
          "bruh",
        ],
        answer: "C",
      },
    ],
  },
  {
    categoryName: "AI",
    questions: [
      {
        points: 500,
        question: "What is the full name of HTML",
        options: [
          "HWIAHDOAW",
          "AWFWAFAWF",
          "Hypertext Markup Language",
          "bruh",
        ],
        answer: "C",
      },
      {
        points: 400,
        question: "What is the full name of HTML",
        options: [
          "HWIAHDOAW",
          "AWFWAFAWF",
          "Hypertext Markup Language",
          "bruh",
        ],
        answer: "C",
      },
      {
        points: 300,
        question: "What is the full name of HTML",
        options: [
          "HWIAHDOAW",
          "AWFWAFAWF",
          "Hypertext Markup Language",
          "bruh",
        ],
        answer: "C",
      },
      {
        points: 200,
        question: "What is the full name of HTML",
        options: [
          "HWIAHDOAW",
          "AWFWAFAWF",
          "Hypertext Markup Language",
          "bruh",
        ],
        answer: "C",
      },
      {
        points: 100,
        question: "What is the full name of HTML",
        options: [
          "HWIAHDOAW",
          "AWFWAFAWF",
          "Hypertext Markup Language",
          "bruh",
        ],
        answer: "C",
      },
    ],
  },
];
const openedQuestion = ref(false);
const curQuestionInfo = ref(null);
const openQuestion = function (questionInfo) {
  curQuestionInfo.value = questionInfo;
  openedQuestion.value = true;
};
const markQuestion = function (q) {
  used.value.push(q);
  localStorage.setItem("used", JSON.stringify(used.value));
};
</script>
