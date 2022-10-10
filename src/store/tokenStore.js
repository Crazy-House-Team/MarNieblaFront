import { defineStore } from "pinia";
import { ref } from "vue";

export const useTokenStore = defineStore("tokenStore", () => {
  const authToken = ref("");

  return { authToken };
});
