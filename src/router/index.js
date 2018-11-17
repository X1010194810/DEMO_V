import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Index from '@/components/Index'
import About from '@/components/About'
import Contact from '@/components/Contact'
import HelloWorld from '@/components/HelloWorld'
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },{
      path: '/Index',
      name: 'Index',
      component: Index,
      children: [
        {
          path: '/about',
          name: 'About',
          component: About
        },
        {
          path: '/contact',
          name: 'Contact',
          component: Contact,
          children: [{
              path: '/HelloWorld',
              name: 'HelloWorld',
              component: HelloWorld
            },{
              path: '/about',
              name: 'About',
              component: About
            }
          ]
        },
      ]
    },
  ]
})
