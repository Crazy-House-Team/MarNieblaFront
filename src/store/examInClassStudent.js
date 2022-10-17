import { defineStore } from "pinia";
import router from "../router";
import { getAction, postAction } from "../services/apiRequests";
import { getUserId } from "../services/auth";

export const examInClassStudent = defineStore({
  id: "questionsTest",
  state: () => ({
    questionsInTest: [],
    exam_id: Number,
    hits: Number,
    results: "",
  }),
  getters: {},
  actions: {
    testInClass(id) {

      getAction("checkExamIsTrue/", id)

        .then((result) => {
   
          if (!result.data) { 
            alert('No existe ningún examen activo con el ID solicitado'); return; };
          this.questionsInTest.push(result);
          this.exam_id = id;

          router.push("/studentexaminclass");
        })
        .catch((err) => {
          console.error(err);
        });

    },
    finishExam(hits, results) {
      this.hits = hits;
      this.results = results;
      let examDate = new Date();

      let form = {
        user_id: getUserId(),
        date: examDate.getFullYear()+'-'+(examDate.getMonth()+1)+'-'+examDate.getDate(),
        right_answer: this.hits,
        id_exam: this.exam_id,
      };

      postAction('saveUserResults', form);

    }
  },
});
