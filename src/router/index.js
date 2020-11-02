import store from '../store'
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/', 
      meta: {
        auth: true
      },
      component: () => import('../views/Home')
    },
    {
      path: '/todos', 
      meta: {
        auth: true
      },
      component: () => import('../views/Todos')
    },
    {
      name: 'login',
      path: '/login',
      component: () => import('../views/Login')
    },
  ]
});

router.beforeEach((to, from, next) => {
  store.dispatch('getSession')

  const user = store.getters.getUser

  if (to.meta.auth && !user.auth) {
    next('/login')
  } else if (to.name === 'login' && user.auth) {
    next('/')
  } else {
    next();
  }
});

export default router