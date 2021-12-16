import Login from "../pages/auth/Login.vue"
import Register from "../pages/auth/Register.vue"
import BaseIndex from "../layouts/BaseIndex.vue"
import BaseLayoutTab from "../layouts/BaseLayoutTab.vue"
import BaseLayoutPhoto from "../layouts/BaseLayoutPhoto.vue"
import HomePage from "../pages/HomePage.vue"
import CoursesPage from "../pages/courses/CoursesPage.vue"

const routes = [
  {
    path: '/auth',
    component: BaseIndex,
    children: [
      {
        path: 'login',
        name: 'Login',
        component: Login
      },
      {
        path: 'register',
        name: 'Register',
        component: Register
      }
    ]
  },
  {
    path: '/',
    component: BaseLayoutPhoto,
    children: [
      {
        path: 'home',
        name: 'Home',
        component: HomePage
      }
    ]
  },
  {
    path: '/~',
    component: BaseLayoutTab,
    children: [
      {
        path: 'courses',
        name: 'Courses',
        component: CoursesPage,
      }
    ]
  },
  {
    path: '/~/courses/:course',
    name: 'CourseSpecificPage',
    component: Login,
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
