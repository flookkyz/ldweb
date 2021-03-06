import { createWebHistory, createRouter } from "vue-router";
import Login from "@/components/Login.vue";
import Register from "@/components/Register.vue";
import Register2 from "@/components/Register2.vue";
import Forgotpassword from "@/components/Forgotpassword.vue";
import Dowloadprogram from "@/components/Dowloadprogram.vue";
import Dowloadlicense from "@/components/Dowloadlicense.vue";
import Dowloadmanual from "@/components/Dowloadmanual.vue";
import Video from "@/components/Video.vue";
import Dowloadmedia from "@/components/Dowloadmedia.vue";
import Testnav from "@/components/Testnav.vue";
import Admin from "@/components/Admin.vue";
import Navbar from "@/components/navbar.vue"
import Testregis from "@/components/testregis";

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
  {
    path: "/dowloadprogram",
    name: "dowloadprogram",
    component: Dowloadprogram,
  },
  {
    path: "/dowloadlicense",
    name: "dowloadlicense",
    component: Dowloadlicense,
  },
  {
    path: "/dowloadmanual",
    name: "dowloadmanual",
    component: Dowloadmanual,
  },
  {
    path: "/video",
    name: "video",
    component: Video,
  },
  {
    path: "/dowloadmedia",
    name: "dowloadmedia",
    component: Dowloadmedia,
  },
  {
    path: "/testnav",
    name: "testnav",
    component: Testnav,
  },
  {
    path: "/admin",
    name: "admin",
    component: Admin,
  },
  {
    path: "/navbar",
    name: "navbar",
    component: Navbar,
  },
  {
    path: "/tregis",
    name: "tregis",
    component: Testregis,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;