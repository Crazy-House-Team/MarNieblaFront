import { defineStore } from "pinia";
import router from "../router";
import { getAction, postAction } from "../services/apiRequests";
import { getUserId } from "../services/auth";

export const testRandom = defineStore({
  id: "testRandom",
  state: () => ({
    questionsInTestRandom: [],
    
    hits: Number,
    results: "",
    date:"",
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
    finishExam(hits, results) {
      this.hits = hits;
      this.results = results;
      let examDate = new Date();
      this.date=examDate.getFullYear()+'-'+(examDate.getMonth()+1)+'-'+examDate.getDate();
      let form = {
        user_id: getUserId(),
        date: examDate.getFullYear()+'-'+(examDate.getMonth()+1)+'-'+examDate.getDate(),
        right_answer: this.hits,
        id_exam: 0
      };

      postAction('saveUserResults', form);

    }
  },
});
