import { defineStore } from "pinia";
import { ref } from "vue";

export const useSessionStatus = defineStore("sessionStatus", () => {
  const sessionStatus = ref();
  return { sessionStatus };
});
