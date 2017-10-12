import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/Login'
import SignUpForm from '@/components/SignUpForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: SignUpForm
    }
    ,{
      path: '/hello',
      name: 'Hello',
      component: Hello
    }
  ]
})
