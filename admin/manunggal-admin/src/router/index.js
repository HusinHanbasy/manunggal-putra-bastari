import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import Dashboard from '../components/Dashboard.vue'
import Campaign from '../components/Campaign.vue'
import Categories from '../components/Categories.vue'
import Donatur from '../components/Donatur.vue'
import Histories from '../components/Histories.vue'
import AddCategory from '../components/AddCategory.vue'
import AddCampaign from '../components/AddCampaign.vue'
import EditCampaign from '../components/EditCampaign.vue'
import AddStatus from '../components/AddStatus.vue'
import Status from '../components/Status.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/campaign',
      name: 'campaign',
      component: Campaign
    },
    {
      path: '/categories',
      name: 'categories',
      component: Categories
    },
    {
      path: '/status',
      name: 'status',
      component: Status
    },
    {
      path: '/donatur',
      name: 'donatur',
      component: Donatur
    },
    {
      path: '/histories',
      name: 'histories',
      component: Histories
    },
    {
      path: '/add-category',
      name: 'addCategory',
      component: AddCategory
    },
    {
      path: '/add-campaign',
      name: 'addCampaign',
      component: AddCampaign
    },
    {
      path: '/add-status',
      name: 'addStatus',
      component: AddStatus
    },
    {
      path: '/edit-campaign',
      name: 'editCampaign',
      component: EditCampaign
    },
  ]
})
router.beforeEach((to, from, next) => {
  if (
    (!localStorage.access_token && to.name === "categories") ||
    (!localStorage.access_token && to.name === "home")
  ) {
    next({ name: "login" });
  } else if (!localStorage.access_token && to.name === "campaign") {
    next({ name: "login" });
  } else if (!localStorage.access_token && to.name === "histories") {
    next({ name: "login" });
  } else if (!localStorage.access_token && to.name === "donatur") {
    next({ name: "login" });
  } else if (!localStorage.access_token && to.name === "status") {
    next({ name: "login" });
  } else if (!localStorage.access_token && to.name === "dashboard") {
    next({ name: "login" });
  } else if (localStorage.access_token && to.name === "login") {
    next({ name: "dashboard" });
  } else {
    next();
  }
});

export default router
