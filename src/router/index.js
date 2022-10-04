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
      path: "/admin/userlist/:role",
      name: "userlist",
      component: () => import("@/views/UserListView.vue"),
      props: true,
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
      path: "/admin/editquestion/:id",
      name: "editquestion",
      component: () => import("@/components/questions/QuestionForm.vue"),
      props: true,
    },
    {
      path: "/admin/createuser",
      name: "createuser",
      component: () => import("@/views/CreateUserView.vue"),
    },
    {
      path: "/admin/edituser/:id",
      name: "edituser",
      component: () => import("@/views/EditUserView.vue"),
      props: true,
    },
    {
      path: "/admin/newtest",
      name: "newtest",
      component: () => import("@/views/NewTestView.vue"),
    },
    {
      path: "/homeuser",
      name: "homeuser",
      component: () => import("@/views/HomeUserView.vue"),
    },
    {
      path: "/examuser",
      name: "examuser",
      component: () => import("@/views/ExamUserView.vue"),
    },

  ],
});

export default router;
