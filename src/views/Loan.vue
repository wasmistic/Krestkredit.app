<template>
   <div>
      <jumbotron/>
      <home-section-b/>
      <home-section-c/>
      <home-section-d/>
      <home-section-f/>
      <home-section-g/>
   </div>
</template>

<script>
import HomeSectionB from '../components/home/HomeSectionB.vue'
import HomeSectionC from '../components/home/HomeSectionC.vue'
import HomeSectionD from '../components/home/HomeSectionD.vue'
import HomeSectionF from '../components/home/HomeSectionF.vue'
import HomeSectionG from '../components/home/HomeSectionG.vue'
import Jumbotron from '../components/home/Jumbotron.vue'

    export default {
  components: {Jumbotron, HomeSectionB, HomeSectionC, HomeSectionD, HomeSectionF, HomeSectionG },
        name:"Home",
        data(){
            return{
                showAlert:true,
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>