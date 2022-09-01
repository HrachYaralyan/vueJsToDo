import { createRouter, createWebHistory } from 'vue-router'
import PostMain from '../components/PostMain.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'PostMain',
      component: PostMain
    },
    {
      path: '/:id',
      name: 'PostItemView',
      component: () => import('../components/PostItemView.vue')
    },
  ],
})

export default router
