<template>
    <div>
        <account-section-a/>
        <account-section-b/>
    </div>
</template>

<script>
import AccountSectionA from '../components/account/AccountSectionA.vue'
import AccountSectionB from '../components/account/AccountSectionB.vue'
    export default {
  components: { AccountSectionA, AccountSectionB },
        name:"Account"
    }
</script>

<style lang="scss" scoped>

</style>