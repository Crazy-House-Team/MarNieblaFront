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
      path: "/admin/userlist",
      name: "userlist",
      component: () => import("@/views/UserListView.vue"),
    },
    {
      path: "/admin/questions",
      name: "questions",
      component: () => import("@/views/QuestionsView.vue"),
    },
    {
      path: "/admin/newquestion",
      name: "newquestion",
      component: () => import("@/components/questions/QuestionForm.vue"),
    },
    {
      path: "/admin/createuser",
      name: "createuser",
      component: () => import("@/views/CreateUserView.vue"),
    },
    {
      path: "/admin/edituser",
      name: "edituser",
      component: () => import("@/views/EditUserView.vue"),
    },
  ],
});

export default router;
