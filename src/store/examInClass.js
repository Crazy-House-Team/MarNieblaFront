import { defineStore } from "pinia";
import router from "../router";
import { getAction, putAction } from "../services/apiRequests";

export const testQuestions = defineStore({
  id: "questionsTest",
  state: () => ({
    questionsInTest: [],
    exam_id: Number,

  }),
  getters: {},
  actions: {
    testInClass(id) {
      getAction("showQuestionsInExam/", id)
        .then((result) => {
          this.questionsInTest.push(result);
        })
        .catch((err) => {
          console.error(err);
        });
      this.exam_id = id;
      const data = {
        status : 1
    }
      putAction("updateExam", id, data)
      
      
        router.push("/admin/examadmin");
    },
    
  },
});
