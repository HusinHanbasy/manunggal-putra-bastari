<script>

import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/Navbar.vue'

export default {
  components: {
    NavBar,
    RouterLink,
    RouterView
  }
}


</script>

<template>
  <NavBar />
  <RouterView />
</template>