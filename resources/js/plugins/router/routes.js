export const routes = [
  { path: '/', redirect: '/dashboard' },
  {
    path: '/',
    component: () => import('@/layouts/default.vue'),
    children: [
      {
        path: 'dashboard',
        component: () => import('@/pages/dashboard.vue'),
      },
      {
        path: 'account-settings',
        component: () => import('@/pages/account-settings.vue'),
      },
      {
        path: 'typography',
        component: () => import('@/pages/typography.vue'),
      },
      {
        path: 'icons',
        component: () => import('@/pages/icons.vue'),
      },
      {
        path: 'cards',
        component: () => import('@/pages/cards.vue'),
      },
      {
        path: 'tables',
        component: () => import('@/pages/tables.vue'),
      },
      {
        path: 'form-layouts',
        component: () => import('@/pages/form-layouts.vue'),
      },
      {
        path: 'facility-management',
        component: () => import('@/pages/facility/facility-management.vue'),
      },
      {
        path: 'facility-request',
        component: () => import('@/pages/facility/facility-request.vue'),
      },
      {
        path: 'facility-calendar',
        component: () => import('@/pages/facility/facility-calendar.vue'),
      },
      {
        path: 'facility-analytics',
        component: () => import('@/pages/facility/facility-analytics.vue'),
      },
      {
        path: 'facility-audit',
        component: () => import('@/pages/facility/facility-audit.vue'),
      },
      {
        path: 'visitor-registration',
        component: () => import('@/pages/visitor/visitor-registration.vue'),
      },
      {
        path: 'visitor-approval',
        component: () => import('@/pages/visitor/visitor-approval.vue'),
      },
      {
        path: 'visitor-log',
        component: () => import('@/pages/visitor/visitor-log.vue'),
      },
      {
        path: 'visitor-analytics',
        component: () => import('@/pages/visitor/visitor-analytics.vue'),
      },
    ],
  },
  {
    path: '/',
    component: () => import('@/layouts/blank.vue'),
    children: [
      {
        path: 'login',
        component: () => import('@/pages/login.vue'),
      },
      {
        path: 'register',
        component: () => import('@/pages/register.vue'),
      },
      {
        path: '/:pathMatch(.*)*',
        component: () => import('@/pages/[...error].vue'),
      },
    ],
  },
]
