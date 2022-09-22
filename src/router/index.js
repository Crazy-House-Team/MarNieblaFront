import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/admin",
      name: "admin",
      component: () => import("@/views/AdminView.vue"),
    },
    {
      path: "/admin/user-list",
      name: "user-list",
      component: () => import("@/views/UserListView.vue"),
    },
    {
      path: "/questions",
      name: "questions",
      component: () => import("@/views/QuestionsView.vue"),
    },
    {
      path: "/newquestion",
      name: "newquestion",
      component: () => import("@/components/questions/QuestionForm.vue"),
    },
  ],
});

export default router;
