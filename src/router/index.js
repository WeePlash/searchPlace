import Vue from 'vue'
import Axios from 'axios';
import Router from 'vue-router'
import VueResource from 'vue-resource'
import VueAxios from 'vue-axios';


import Connection from '@/components/Connection'
import CreateUser from '@/components/CreateUser'
import SearchParking from '@/components/SearchParking'


Vue.use(VueResource);
Vue.use(Router);
Vue.use(Axios);
Vue.use(VueAxios);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Connection',
      component: Connection
    },
    {
      path: '/createUser',
      name: 'CreateUser',
      component: CreateUser
    },
    {
      path: '/search',
      name: 'SearchParking',
      component: SearchParking
    },
  ]
})
