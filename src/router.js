import Vue from 'vue'
import VueRouter from 'vue-router'
import { Events } from 'quasar-framework'

Vue.use(VueRouter)

import buildVars from './lib/build-vars'
import routes from './components/routes'
import store from './lib/store'
// import services from './lib/services'

/*
function load (component) {
  // '@' is aliased to src/components
  return () => import(`@/${component}.vue`)
}
*/

const router = new VueRouter({
  /*
   * NOTE! VueRouter "history" mode DOESN'T work for Cordova builds,
   * it is only to be used only for websites.
   *
   * If you decide to go with "history" mode, please also open /config/index.js
   * and set "build.publicPath" to something other than an empty string.
   * Example: '/' instead of current ''
   *
   * If switching back to default "hash" mode, don't forget to set the
   * build publicPath back to '' so Cordova builds work again.
   */

  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),

  routes: [
    //
    // Site content
    //
    { path: '/', component: routes.site.welcome, name: 'site.welcome', meta: { animatedBackground: true } },
    //
    // User management
    //
    { path: '/users/create', component: routes.users.create, name: 'users.create', meta: { anonymous: true } },
    { path: '/users/login', component: routes.users.login, name: 'users.login', meta: { anonymous: true } },
    { path: '/users/forgot', component: routes.users.forgot, name: 'users.forgot', meta: { anonymous: true } },
    { path: '/users/:id/edit', component: routes.users.manage, name: 'users.edit', meta: { private: true } },

    // Catchall
    { path: '*', component: routes.errors.notFound, name: 'errors.notFound' }
  ]
})

router.beforeEach((to, from, next) => {
  const vars = buildVars()
  Events.$emit('show-animated-background', to.matched.some(route => route.meta.animatedBackground))
  if (store.state.auth.user) {
    if (to.matched.some(route => route.meta.anonymous)) {
      return next(`/users/${store.state.auth.user[vars.idField]}/edit`)
    }
  }
  else {
    if (to.matched.some(route => route.meta.private)) {
      return next({ name: 'users.login', query: { redirect: to.fullPath } })
    }
  }
  next()
})

export default router
