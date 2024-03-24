import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => {
    return {
      teams: [],
    };
  },
  getters: {
    teamInfo(state) {
      return state.teams;
    },
  },
  actions: {
    changeScore(score, teamName) {
      this.teams.find((team) => team.teamName === teamName).score += score;
      this.updateLocal();
    },
    updateLocal() {
      localStorage.setItem("teams", JSON.stringify(this.teams));
    },
    loadLocal() {
      console.log("Loading local...");
      if (localStorage.getItem("teams")) {
        this.teams = JSON.parse(localStorage.getItem("teams"));
      } else {
        this.teams = [
          {
            teamName: "Potato",
            score: 0,
          },
          {
            teamName: "Cohort",
            score: 0,
          },
          {
            teamName: "Dogi",
            score: 0,
          },
        ];
      }
    },
  },
});
