import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useStagesStore = defineStore("stages", {
  state: () => ({
    stages: [
      {
        name: "Этап нулевой",
        id: 0,
        thresholdPoints: 0,
				games:[]
      },
      {
        name: "Этап первый",
        id: 1,
        thresholdPoints: 25,
        games: [
          {
            name: "Игра 1.1",
            bestResult: 0,
            isPlayed: false,
          },
        ],
      },
      {
        name: "Этап второй",
        id: 2,
        thresholdPoints: 50,
        games: [
          {
            name: "Игра 2.1",
            bestResult: 0,
            isPlayed: false,
          },
        ],
      },
      {
        id: 3,
        name: "Этап третий",
        thresholdPoints: 100,
        games: [
          {
            name: "Игра 3.1",
            bestResult: 0,
            isPlayed: false,
          },
        ],
      },
      {
        id: 4,
        name: "Этап четвертый",
        thresholdPoints: 200,
        games: [
          {
            name: "Игра 4.1",
            bestResult: 0,
            isPlayed: false,
          },
        ],
      },
      {
        id: 5,
        name: "Этап пятый",
        thresholdPoints: 500,
        games: [
          {
            name: "Игра 5.1",
            bestResult: 0,
            isPlayed: false,
          },
        ],
      },
      {
        id: 6,
        name: "Этап шестой",
        thresholdPoints: 1000,
        games: [
          {
            name: "Игра 6.1",
            bestResult: 0,
            isPlayed: false,
          },
          {
            name: "Игра 6.2",
            bestResult: 0,
            isPlayed: false,
          },
        ],
      },
    ],
		sum: 0
  }),
  getters: {
    allStages: (state) => {
      return state.stages;
    },
    allGamesResult: (state) => {
      let mas = [];
      state.stages.map((el) => el?.games.map((el) => mas.push(el.bestResult)));
			state.sum = mas.reduce((sum, cur)=> sum + cur, 0) 
      return mas.reduce((sum, cur)=> sum + cur, 0) 
    },
  },
  actions: {
    onIncrease(num) {
			if(this.sum >= 1000 || this.sum + num > 1000) return
      this.sum += num;
    },
    onDecrease(num) {
			if(this.sum <= 0 || num > this.sum) return
			this.sum -= num;
    },
    percentAtAllgamesRes() {
      let pecent;
      if (this.sum <= 25) {
        pecent = (this.sum * 17) / 25;
        return pecent;
      }
      if (this.sum <= 50) {
        pecent = (this.sum * 33.5) / 50;
        return pecent;
      }
      if (this.sum <= 100) {
        pecent = (this.sum * 50) / 100;
        return pecent;
      }
      if (this.sum <= 200) {
        pecent = 50 + (this.sum * 17) / 200;
        return pecent;
      }
      if (this.sum <= 500) {
        pecent = 67 + (this.sum * 16.5) / 500;
        return pecent;
      }
      if (this.sum <= 1000) {
        pecent = 83.5 + (this.sum * 16.5) / 1000;
        return pecent;
      }
    },
  },
});
