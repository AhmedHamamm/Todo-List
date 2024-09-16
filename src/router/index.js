import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AddTask from "../views/AddTask.vue";
import EditTask from "../components/EditTask.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/add",
    name: "add-task",
    component: AddTask,
  },
  {
    path: "/tasks/:id",
    name: "EditTask",
    component: EditTask,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
