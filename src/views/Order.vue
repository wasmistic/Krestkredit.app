<template>
    <div>
        <order-section-a/>
        <order-section-b/>
    </div>
</template>

<script>
import OrderSectionA from '../components/Order/OrderSectionA.vue'
import OrderSectionB from '../components/Order/OrderSectionB.vue'
    export default {
  components: { OrderSectionA, OrderSectionB },
        name:"Order"
    }
</script>

<style lang="scss" scoped>

</style>