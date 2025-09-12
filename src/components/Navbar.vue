<template>
    <nav class="navbar justify-content-around" data-navbar>

        <ul class="navbar-list">

            <li class="navbar-item">
                <router-link to="/" class="navbar-link">About</router-link>
            </li>

            <li class="navbar-item">
                <router-link to="/resume" class="navbar-link">Resume</router-link>
            </li>

            <li class="navbar-item">
                <router-link to="/portfolio" class="navbar-link">Portfolio</router-link>
            </li>

            <!-- <li class="navbar-item">
    <button class="navbar-link" data-nav-link>Blog</button>
  </li> -->

            <li class="navbar-item">
                <router-link to="/contact" class="navbar-link">Contact</router-link>
            </li>

        </ul>

    </nav>
</template>
<script>
export default {

}
</script>
<style scoped>

</style>