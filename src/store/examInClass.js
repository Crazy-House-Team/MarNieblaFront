import { defineStore } from "pinia";
import router from "../router";
import { getAction } from "../services/apiRequests";

export const testQuestions = defineStore({
  id: "questionsTest",
  state: () => ({
    questionsInTest: [],
    exam_id: Number,
  }),
  getters: {},
  actions: {
    testInClass(id) {
      getAction("showQuestionsInExam/1")
        .then((result) => {
          this.questionsInTest.push(result);
        })
        .catch((err) => {
          console.error(err);
        });
      this.exam_id = id;
      router.push("/admin/examadmin");
    },
  },
});
