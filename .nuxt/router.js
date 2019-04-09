import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _0e455580 = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages_cart" */))
const _31e457db = () => interopDefault(import('..\\pages\\changeCity.vue' /* webpackChunkName: "pages_changeCity" */))
const _7a35a01e = () => interopDefault(import('..\\pages\\detail.vue' /* webpackChunkName: "pages_detail" */))
const _79f3643e = () => interopDefault(import('..\\pages\\exit.vue' /* webpackChunkName: "pages_exit" */))
const _9b7e020e = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */))
const _097234f8 = () => interopDefault(import('..\\pages\\products.vue' /* webpackChunkName: "pages_products" */))
const _57f88b43 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages_register" */))
const _2ecd483c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/cart",
      component: _0e455580,
      name: "cart"
    }, {
      path: "/changeCity",
      component: _31e457db,
      name: "changeCity"
    }, {
      path: "/detail",
      component: _7a35a01e,
      name: "detail"
    }, {
      path: "/exit",
      component: _79f3643e,
      name: "exit"
    }, {
      path: "/login",
      component: _9b7e020e,
      name: "login"
    }, {
      path: "/products",
      component: _097234f8,
      name: "products"
    }, {
      path: "/register",
      component: _57f88b43,
      name: "register"
    }, {
      path: "/",
      component: _2ecd483c,
      name: "index"
    }],

    fallback: false
  })
}
