import Login from "../pages/auth/Login.vue"
import Register from "../pages/auth/Register.vue"
import BaseIndex from "../layouts/BaseIndex.vue"
import BaseLayoutTab from "../layouts/BaseLayoutTab.vue"
import BaseLayoutPhoto from "../layouts/BaseLayoutPhoto.vue"
import HomePage from "../pages/HomePage.vue"
import CoursesPage from "../pages/courses/CoursesPage.vue"
import CourseSpecificPage from "../pages/courses/CourseSpecificPage.vue"
import DiagnovirPage from "../pages/diagnovir/DiagnovirPage.vue"
import TestResultsPage from "../pages/diagnovir/TestResultsPage.vue"
import HealthCenterPage from "../pages/health/HealthCenterPage.vue"
import HealthFormPage from "../pages/health/HealthFormPage.vue"
import SportsCenterPage from "../pages/sports/SportsCenterPage.vue"
import SportsReservationsPage from "../pages/sports/SportsReservationsPage.vue"
import CafeteriaPage from "../pages/cafeteria/CafeteriaPage.vue"
import CafeteriaStaffPage from "../pages/cafeteria/CafeteriaStaffPage.vue"
import CoursesPageInstructor from "../pages/courses/CoursesPageInstructor.vue"
import CoursesSpecificPageInstructor from "../pages/courses/CoursesSpecificPageInstructor.vue"
import SportsStaffPage from "../pages/sports/SportsStaffPage"

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
      },
      {
        path: 'courses/:course',
        name: 'CourseSpecificPage',
        component: CourseSpecificPage,
      },
      {
        path: 'diagnovir',
        name: 'DiagnovirPage',
        component: DiagnovirPage
      },
      {
        path: 'diagnovir/tests',
        name: 'TestResultsPage',
        component: TestResultsPage
      },
      {
        path: 'health',
        name: 'HealthCenterPage',
        component: HealthCenterPage
      },
      {
        path: 'health/form',
        name: 'HealthFormPage',
        component: HealthFormPage
      },
      {
        path: 'sports',
        name: 'SportsCenterPage',
        component: SportsCenterPage
      },
      {
        path: 'sports/reservations',
        name: 'SportsReservationsPage',
        component: SportsReservationsPage
      },
      {
        path: 'cafeteria',
        name: 'CafeteriaPage',
        component: CafeteriaPage
      },
    ]
  },
  {
    path: '/staff',
    component: BaseLayoutTab,
    children: [
      {
        path: 'courses',
        name: 'CoursesPageInstructor',
        component: CoursesPageInstructor,
      },
      {
        path: 'courses/:course',
        name: 'CourseSpecificPageInstructor',
        component: CoursesSpecificPageInstructor,
      },
      // {
      //   path: 'diagnovir',
      //   name: 'DiagnovirPage',
      //   component: DiagnovirPage
      // },
      // {
      //   path: 'diagnovir/tests',
      //   name: 'TestResultsPage',
      //   component: TestResultsPage
      // },
      // {
      //   path: 'health',
      //   name: 'HealthCenterPage',
      //   component: HealthCenterPage
      // },
      // {
      //   path: 'health/form',
      //   name: 'HealthFormPage',
      //   component: HealthFormPage
      // },
      {
        path: 'sports',
        name: 'SportsStaffPage',
        component: SportsStaffPage
      },
      {
        path: 'cafeteria',
        name: 'CafeteriaStaffPage',
        component: CafeteriaStaffPage
      },
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
