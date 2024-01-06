import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView/HomeView.vue'
import PostListView from '@/views/PostListView/PostListView.vue'
import PostView from '@/views/PostView/PostView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView
    },
    {
      path: '/PostList',
      name: 'PostListView',
      component: PostListView
    },
    {
      path: '/post/:id',
      name: 'PostView',
      component: PostView
    }
  ]
})

export default router
