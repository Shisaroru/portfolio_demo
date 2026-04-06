import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: readonly RouteRecordRaw[] = [
  { path: '/', name: 'About', component: () => import('../views/AboutView.vue') },
  { path: '/achieve', name: 'Achieve', component: () => import('../views/AchieveView.vue') },
  { path: '/skill', name: 'Skill', component: () => import('../views/SkillView.vue') },
  { path: '/works/:id', name: 'Works', component: () => import('../views/ProjectView.vue') },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
