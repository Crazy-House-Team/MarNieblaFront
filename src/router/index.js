import { createRouter, createWebHistory } from "vue-router";
import { checkIfUserIsAdmin, checkIfUserIsLoggedIn } from "@/services/auth";
import HomeView from "@/views/HomeView.vue";

const checkRole = () => {
  console.log(checkIfUserIsAdmin());
  if (!checkIfUserIsAdmin()) return { name: "homeuser" };
};

const checkLogin = () => {
  if (!checkIfUserIsLoggedIn()) return { name: "home" };
};

const blockAccessToLoggedUsers = () => {
  if (checkIfUserIsAdmin()) return { name: "admin" };
  if (checkIfUserIsLoggedIn()) return { name: "homeuser" };
  return true;
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      beforeEnter: [blockAccessToLoggedUsers],
      component: HomeView,
    },
    {
      path: "/homeuser",
      name: "homeuser",
      beforeEnter: [checkLogin],
      component: () => import("@/views/HomeUserView.vue"),
    },
    {
      path: "/examuser",
      name: "examuser",
      beforeEnter: [checkLogin],
      component: () => import("@/views/ExamUserView.vue"),
    },
    {
      path: "/resultuser",
      name: "resultuser",
      beforeEnter: [checkLogin],
      component: () => import("@/views/AlumnResultView.vue"),
    },
    {
      path: "/admin",
      name: "admin",
      beforeEnter: [checkLogin, checkRole],
      component: () => import("@/views/AdminView.vue"),
    },
    {
      path: "/admin/userlist/:role",
      name: "userlist",
      beforeEnter: [checkLogin, checkRole],
      component: () => import("@/views/UserListView.vue"),
      props: true,
    },
    {
      path: "/admin/questions",
      name: "questions",
      beforeEnter: [checkLogin, checkRole],
      component: () => import("@/views/QuestionsView.vue"),
    },
    {
      path: "/admin/newquestion",
      name: "newquestion",
      beforeEnter: [checkLogin, checkRole],
      component: () => import("@/components/questions/QuestionForm.vue"),
    },
    {
      path: "/admin/editquestion/:id",
      name: "editquestion",
      beforeEnter: [checkLogin, checkRole],
      component: () => import("@/components/questions/QuestionForm.vue"),
      props: true,
    },
    {
      path: "/admin/createuser",
      name: "createuser",
      beforeEnter: [checkLogin, checkRole],
      component: () => import("@/views/CreateUserView.vue"),
    },
    {
      path: "/admin/edituser/:id",
      name: "edituser",
      beforeEnter: [checkLogin, checkRole],
      component: () => import("@/views/EditUserView.vue"),
      props: true,
    },
    {
      path: "/admin/newtest",
      name: "newtest",
      beforeEnter: [checkLogin, checkRole],
      component: () => import("@/views/NewTestView.vue"),
    },
    {
      path: "/admin/stadistics/:id/:name",
      name: "stadistics",
      component: () => import("@/components/users/stadistics/HomeStadistic.vue"),
      props: true,
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
    {
      path: "/studentexaminclass",
      name: "admin/studentexaminclass",
      component: () => import("@/views/studentexaminclassview.vue"),
    },
    {
      path: "/resultuser",
      name: "resultuser",
      component: () => import("@/views/AlumnResultView.vue"),
    },
     {
      path: "/admin/examadmin",
      name: "examadmin",
      beforeEnter: [checkLogin, checkRole],
      component: () => import("@/views/ExamAdminView.vue"),
    },
    {
      path: "/admin/testlist",
      name: "testlist",
      beforeEnter: [checkLogin, checkRole],
      component: () => import("@/views/TestListView.vue"),
    },
  ],
});

export default router;
