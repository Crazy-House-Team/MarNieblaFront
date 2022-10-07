import { defineStore } from "pinia";
import router from "../router";
import { getAction } from "../services/apiRequests";

export const testRandom = defineStore({
  id: "testRandom",
  state: () => ({
    questionsInTestRandom: [],
  }),
  getters: {},
  actions: {
    testRandomCreate() {
      getAction("randomTest/0")
        .then((result) => {
          this.questionsInTestRandom.push(result);
        })
        .catch((err) => {
          console.error(err);
        });
      router.push("/examuser");
    },
  },
});
