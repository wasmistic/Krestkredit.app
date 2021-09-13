<template>
<div>
  <v-app>
   <div>
     <div v-if="this.$route.path=='/'">
     <home-header/>
     </div>
      <div v-else>
        <pages-header/>
     </div>
   </div>
    <v-main>
    <router-view></router-view>
    </v-main>
    <Footer/>
  </v-app>
  </div>
</template>

<script>
import Footer from './views/Footer.vue';
import HomeHeader from './components/HomeHeader.vue';
import PagesHeader from './components/PagesHeader.vue';

export default {
  components: {Footer, HomeHeader, PagesHeader },
  name: 'App',

   data() {
    return {
      navbarColors: {
        '/': 'red',
        '/price': 'white',
      },
    }
  },
  
  // mounted:{
  //         classMonitor(){
  //               if(this.$route.path=='/'){
  //                   return this.shown==true;
  //               }
  //               return this.shown==false;
  //           },
           
  //       }
};
</script>
<style lang="scss">
.alert{
    background-color: #fff;
}
.blue{
  background-color: $primary;
}
.light{
  background-color: $plain;
}
</style>
