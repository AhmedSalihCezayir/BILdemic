import { route } from 'quasar/wrappers'
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory } from 'vue-router'
import { onAuthStateChanged, getAuth } from 'firebase/auth'
import routes from './routes'
import { Store } from 'src/store'

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

// const db = getDatabase();
// let role = (await get(ref(db, `Users/${currentUser}/_role`))).val();

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory)

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.MODE === 'ssr' ? void 0 : process.env.VUE_ROUTER_BASE)
  })

  Router.beforeEach((to, from, next) => {
    onAuthStateChanged(getAuth(), (user) => {
      if (to.name === "Login" || to.name === "Register") {
        next();
      }
      else if (user && (to.meta.haveAccess.includes(Store.state.settings.currentUserRole))) {
        next();
      }
      else if (user && !(to.meta.haveAccess.includes(Store.state.settings.currentUserRole))) {
        if (Store.state.settings.currentUserRole == "Student") {
          next('/home');
        }
        else if (Store.state.settings.currentUserRole == "Instructor") {
          next('/staff/courses');
        }
        else if (Store.state.settings.currentUserRole == "DiagnovirTester") {
          next('/staff/diagnovir');
        }
        else if (Store.state.settings.currentUserRole == "HealthCenterStaff") {
          next('/staff/health');
        }
        else if (Store.state.settings.currentUserRole == "SportsCenterStaff") {
          next('/staff/sports');
        }
        else if (Store.state.settings.currentUserRole == "CafeteriaStaff") {
          next('/staff/cafeteria');
        }
      }
      else {
        next('/auth/login');
      }
    })
  });

  return Router
})
