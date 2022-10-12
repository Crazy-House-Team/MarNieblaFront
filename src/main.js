import "bootstrap/dist/css/bootstrap.min.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import "@/assets/css/main.css";

const axiosInstance = axios.create({
  withCredentials: true,
});

const app = createApp(App);

app.config.globalProperties.$axios = { ...axiosInstance };
app.use(createPinia());
app.use(router);

app.mount("#app");

import "bootstrap/dist/js/bootstrap.js";
