import Vue from 'vue'


Vue.use(VueRouter)

const routes = [
     {path:"/",redirect:"/login" },
    {path:"/login",name:"login",component:()=>import("@/views/login/index.vue")   },
    {path:"/",name:"home",component:()=>import("@/views/home/index.vue"), 

    children:[
      {path:"/system",name:"system",component:()=>import("@/views/system/index.vue") },
      {path:"/echart",name:"echart",component:()=>import("@/views/echart/index.vue") },
    ]
  
  
  
   
    }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
