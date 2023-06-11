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
      path: '/edit-campaign',
      name: 'editCampaign',
      component: EditCampaign
    },
  ]
})

export default router
