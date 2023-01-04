import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Detail from "@/components/Detail.vue";
import Edit from "@/components/Edit.vue";
import Add from "@/components/Add.vue";
import Class from "@/components/Class.vue";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },

    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: Edit
    },
    {
      path: '/add',
      name: 'add',
      component: Add
    },
    {
      path: '/class',
      name: 'class',
      component: Class
    },
  ]
})
