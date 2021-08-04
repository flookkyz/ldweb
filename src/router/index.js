import { createWebHistory, createRouter } from "vue-router";
import Login from "@/components/Login.vue";
import Register from "@/components/Register.vue";
import Register2 from "@/components/Register2.vue";
import Forgotpassword from "@/components/Forgotpassword.vue";

const routes = [
  {
    path: "/",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/register2",
    name: "register2",
    component: Register2,
  },
  {
    path: "/forgotpassword",
    name: "forgotpassword",
    component: Forgotpassword,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;