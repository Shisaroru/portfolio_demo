import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { scrollToTop } from '@/lib/lenis'

const routes: readonly RouteRecordRaw[] = [
  { path: '/', name: 'About', component: () => import('../views/AboutView.vue') },
  { path: '/achieve', name: 'Achieve', component: () => import('../views/AchieveView.vue') },
  { path: '/skill', name: 'Skill', component: () => import('../views/SkillView.vue') },
  {
    path: '/works', children: [
      {
        path: '1',
        component: () => import('../views/LongVanView.vue'),
        name: "LongVan"
      },
      {
        path: '2',
        component: () => import('../views/PoniaView.vue'),
        name: "Ponia"
      },
      {
        path: '3',
        component: () => import('../views/SaiGonTVView.vue'),
        name: "SaiGonTV"
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFoundView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach(async (_, from) => {
  if (from.name) {
    await scrollToTop()
  }

  return true
})

export default router
