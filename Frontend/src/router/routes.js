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
import HealthCenterStaffPage from "../pages/health/HealthCenterStaffPage.vue"
import DiagnovirStaffPage from "../pages/diagnovir/DiagnovirStaffPage.vue"

const routes = [
  {
    path: '/',
    component: BaseLayoutPhoto,
    redirect: '/auth/login',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: HomePage,
        meta: {
          haveAccess: ['Student', 'Instructor'] // TODO BURAYA INSTR GIREBILECEK MI?
        }
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
        meta: {
          haveAccess: ['Student']
        }
        
      },
      {
        path: 'courses/:id',
        name: 'CourseSpecificPage',
        component: CourseSpecificPage,
        props: true,
        meta: {
          haveAccess: ['Student']
        }
      },
      {
        path: 'diagnovir',
        name: 'DiagnovirPage',
        component: DiagnovirPage,
        meta: {
          haveAccess: ['Student', 'Instructor', 'SportsCenterStaff', 'CafeteriaStaff']
        }
      },
      {
        path: 'diagnovir/tests',
        name: 'TestResultsPage',
        component: TestResultsPage,
        meta: {
          haveAccess: ['Student', 'Instructor', 'SportsCenterStaff', 'CafeteriaStaff']
        }
      },
      {
        path: 'health',
        name: 'HealthCenterPage',
        component: HealthCenterPage,
        meta: {
          haveAccess: ['Student', 'Instructor', 'SportsCenterStaff', 'CafeteriaStaff']
        }
      },
      {
        path: 'health/form',
        name: 'HealthFormPage',
        component: HealthFormPage,
        meta: {
          haveAccess: ['Student', 'Instructor', 'SportsCenterStaff', 'CafeteriaStaff']
        }
      },
      {
        path: 'sports',
        name: 'SportsCenterPage',
        component: SportsCenterPage,
        meta: {
          haveAccess: ['Student']
        }
      },
      {
        path: 'sports/reservations',
        name: 'SportsReservationsPage',
        component: SportsReservationsPage,
        meta: {
          haveAccess: ['Student']
        }
      },
      {
        path: 'cafeteria',
        name: 'CafeteriaPage',
        component: CafeteriaPage,
        meta: {
          haveAccess: ['Student', 'Instructor']
        }
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
        meta: {
          haveAccess: ['Instructor']
        }
      },
      {
        path: 'courses/:id',
        name: 'CourseSpecificPageInstructor',
        component: CoursesSpecificPageInstructor,
        props: true,
        meta: {
          haveAccess: ['Instructor']
        }
      },
      {
        path: 'diagnovir',
        name: 'DiagnovirStaffPage',
        component: DiagnovirStaffPage,
        meta: {
          haveAccess: ['DiagnovirTester']
        }
      },
      {
        path: 'health',
        name: 'HealthCenterStaffPage',
        component: HealthCenterStaffPage,
        meta: {
          haveAccess: ['HealthCenterStaff']
        }
      },
      {
        path: 'sports',
        name: 'SportsStaffPage',
        component: SportsStaffPage,
        meta: {
          haveAccess: ['SportsCenterStaff']
        }
      },
      {
        path: 'cafeteria',
        name: 'CafeteriaStaffPage',
        component: CafeteriaStaffPage,
        meta: {
          haveAccess: ['CafeteriaStaff']
        }
      },
    ]
  },  
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
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]
export default routes
