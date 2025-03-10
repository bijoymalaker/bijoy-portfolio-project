<script setup>

import Navbar from './components/Navbar.vue';
import SideNav from './components/SideNav.vue';


</script>

<template>
  <main>
    <SideNav />
    <div class="main-content">
      <Navbar />
      <router-view />
    </div>
  </main>

</template>

<style scoped></style>
