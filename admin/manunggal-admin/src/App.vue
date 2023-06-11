<script>
import { RouterLink, RouterView } from 'vue-router'
import Sidebar from './components/SideBar.vue'

export default {
  components: {
    RouterLink,
    RouterView,
    Sidebar
  }
}


</script>

<template>
  <Sidebar />
  <RouterView />
</template>