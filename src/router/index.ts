import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

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

const smoothScrollToTop = (duration = 250) => {
  return new Promise<void>((resolve) => {
    const startY = window.scrollY

    if (startY <= 0) {
      resolve()
      return
    }

    const startTime = performance.now()

    const easeOutCubic = (progress: number) => 1 - Math.pow(1 - progress, 3)

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = easeOutCubic(progress)
      const nextY = Math.round(startY * (1 - easedProgress))

      window.scrollTo(0, nextY)

      if (progress < 1) {
        requestAnimationFrame(step)
      } else {
        window.scrollTo(0, 0)
        resolve()
      }
    }

    requestAnimationFrame(step)
  })
}

router.beforeEach(async () => {
  await smoothScrollToTop()
  return true
})

export default router
