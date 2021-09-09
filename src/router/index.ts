import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: '发现音乐',
      id:'Home',
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
    children: [
      {
        path: '/',
        name: 'Recommend',
        meta: {
          title: '推荐',
          id:'Recommend',
        },
        component: () => import(/* webpackChunkName: "about" */ '../views/recommend/recommend.vue'),
      },
    ]
  },
  {
    path: '/about',
    name: 'About1',
    meta: {
      title: '我的音乐',
      id:'About1',
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/about',
    name: 'About2',
    meta: {
      title: '朋友',
      id:'About2',
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/about',
    name: 'About3',
    meta: {
      title: '商城',
      id:'About3',
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/about',
    name: 'About4',
    meta: {
      title: '音乐人',
      id:'About4',
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/about',
    name: 'downLoadApp',
    meta: {
      title: '下载客户端',
      id:'downLoadApp',
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
