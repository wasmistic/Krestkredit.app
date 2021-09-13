<template>
    <div>
       <shop-section-a/>
       <shop-section-b/>
       <shop-section-c/>
    </div>
</template>

<script>
import ShopSectionA from '../components/shop/ShopSectionA.vue'
import ShopSectionB from '../components/shop/ShopSectionB.vue'
import ShopSectionC from '../components/shop/ShopSectionC.vue'
    export default {
  components: { ShopSectionA, ShopSectionB, ShopSectionC },
        name:"Shop"
    }
</script>

<style lang="scss" scoped>

</style>