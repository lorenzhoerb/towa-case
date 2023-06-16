import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Product from '../pages/Product.vue'
import AboutUs from '../pages/AboutUs.vue'
import Team from '../pages/Team.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: Home },
    { path: "/product", component: Product },
    { path: "/about-us", component: AboutUs },
    { path: "/team", component: Team },
  ]
})

export default router
