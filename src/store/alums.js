import { defineStore } from "pinia";
import { getAction } from "../services/apiRequests";
export const alumnsInTest = defineStore({
    id: "AlumnsTest",
    state: () => ({
      alumns: [],
      exam_id: Number,
  
    }),
    getters: {},
    actions: {
      alumnsInClass() {
        getAction("users")
                  .then((result) => {
            this.alumns.push(result);
          })
          .catch((err) => {
            console.error(err);
          });
       
      }},
  });
  