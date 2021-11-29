import App from "../App.vue"
import { createWebHistory, createRouter } from "vue-router";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'root',
      component: App,
      path: ''
    }
  ]
})