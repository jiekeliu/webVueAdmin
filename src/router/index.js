import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'dashboard' }
    }]
  },
  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: '主页管理',
    meta: { title: '主页管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'catalogueList',
        name: '导航管理',
        component: () => import('@/views/table/mateList'),
        meta: { title: '导航管理', icon: 'table' }
      }
    ]
  },

  {
    path: '/upload',
    component: Layout,
    children: [
      {
        path: '/imageManage',
        name: '图片管理',
        component: () => import('@/views/imageManage/ImageManage'),
        meta: { title: '图片管理', icon: 'form' }
      }
    ]
  },

  {
    path: '/article',
    component: Layout,
    name: '文章管理',
    meta: {
      title: '文章管理',
      icon: 'el-icon-s-help'
    },
    children: [
      {
        path: '/articleList',
        name: '文章列表',
        component: () => import('@/views/Article/list'),
        meta: { title: '文章列表', icon: 'form' }
      },
      {
        path: 'create',
        component: () => import('@/views/Article/create'),
        name: '创建文章',
        meta: { title: '创建文章', icon: 'form' }
      },
      {
        path: 'edit/:id(\\d+)',
        component: () => import('@/views/Article/edit'),
        name: '文章编辑',
        meta: { title: '文章编辑', noCache: true, activeMenu: '/article/list' },
        hidden: true
      },
    ]
  },


  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: 'External Link', icon: 'link' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
