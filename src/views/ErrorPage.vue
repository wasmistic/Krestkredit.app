<template>
<div>
    <pages-header/>
 <div class="d-flex align-items-center justify-content-center flex-column mx-auto box">
         <h1>404 - Page Not Found</h1>
        <p>This page no longer exists or was moved to another location.</p>
        <router-link to="/">Back to Home Page</router-link>
    </div>
</div>
</template>

<script>
import PagesHeader from '../components/PagesHeader.vue'
    export default {
  components: { PagesHeader },
        name:"ErrorPage"
    }
</script>

<style lang="scss" scoped>

h1{
    font-size: 4.5rem;
    line-height: 72px;
    font-weight: bold;
    color: $primary;
    font-family: $bold;
}
p{
    font-size: 1.5rem;
    line-height: 42px;
    font-weight: bold;
    color: $primary;
    font-family: $regular;
}
.v-application a{
    font-size: 2rem;
    line-height: 28px;
    font-weight: bold;
}
.box{
    width: 70%;
    margin: 18rem auto;
}
</style>