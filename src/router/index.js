import VueResource from 'vue-resource'
import axios from 'axios';
import VueAxios from 'vue-axios';
import Vue from 'vue'
import Router from 'vue-router'

import Connection from '@/components/Connection'
import CreateUser from '@/components/CreateUser'
import SearchParking from '@/components/SearchParking'


Vue.use(VueResource);
Vue.use(Router);
// Vue.use(VueAxios);
// Vue.use(axios);

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
