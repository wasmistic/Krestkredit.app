<template>
    <div>
        <product-section-a/>
        <product-section-b/>
        <product-section-c/>
        <product-section-d/>
    </div>
</template>

<script>
import ProductSectionA from '../components/Productdetail/ProductSectionA.vue'
import ProductSectionB from '../components/Productdetail/ProductSectionB.vue'
import ProductSectionC from '../components/Productdetail/ProductSectionC.vue'
import ProductSectionD from '../components/Productdetail/ProductSectionD.vue'
    export default {
  components: { ProductSectionA, ProductSectionB, ProductSectionC, ProductSectionD },
        name:"ProductDetail"
    }
</script>

<style lang="scss" scoped>

</style>