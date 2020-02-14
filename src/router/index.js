import Vue from 'vue'


Vue.use(VueRouter)

const routes = [
  { path: "/", redirect: "/detail" },

  {
    path: "/", name: "home", component: () => import("@/views/home/index.vue"),
    children:[{
      path:"/detail",
      name:"detail",
      component:()=>import('@/views/detail/index.vue')
    },
    {
      path:"/art",
      name:"art",
      component:()=>import('@/views/art/index.vue')
    },
    {
      path:"/mine",
      name:"mine",
      component:()=>import('@/views/mine/index.vue')
    },
    {
      path:"/Wool",
      name:"Wool",
      component:()=>import('@/views/Wool/index.vue')
    },
    {
      path:"/board",
      name:"board",
      component:()=>import('@/views/board/index.vue')
    }
  ]

  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
