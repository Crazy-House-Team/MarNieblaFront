import { defineStore } from "pinia";
import router from "../router";
import { getAction,  } from "../services/apiRequests";

export const examInClassStudent = defineStore({
  id: "questionsTest",
  state: () => ({
    questionsInTest: [],
    exam_id: Number,
  }),
  getters: {},
  actions: {
    testInClass(id) {

      getAction("checkExamIsTrue/", id)
        .then((result) => {
          this.questionsInTest.push(result);
        })
        .catch((err) => {
          console.error(err);
        });
      this.exam_id = id;
          
        router.push("/studentexaminclass");
    },
  },
});
