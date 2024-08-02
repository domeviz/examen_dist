import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/books',
    component: () => import('../modules/examen/pages/BooksPage.vue')
  },
  {
    path: '/authors',
    component: () => import('../modules/examen/pages/AuthorsPage.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
