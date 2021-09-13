<template>
    <div>
        <cart-section-a/>
        <cart-section-b/>
    </div>
</template>

<script>
import CartSectionA from '../components/shoppingcart/CartSectionA.vue'
import CartSectionB from '../components/shoppingcart/CartSectionB.vue'
    export default {
  components: { CartSectionA, CartSectionB },
        name:"Pricing"
    }
</script>

<style lang="scss" scoped>

</style>