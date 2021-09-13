<template>
    <div class="container-fluid box">
    <div class="container">
        <div class="row align-items-center justify-content-center justify-content-lg-around">
            <div class="col-12 col-lg-4">
                <div>
                    <h2>You can <span> download </span> <span> Krestpay </span>on your <span class="break_text"> mobile device app store</span></h2>
                </div>
            </div>
             <div class="col-12 col-lg-4">
                <div>
                    <!-- <div class="app" :style="{backgroundImage:'url('+require('@/assets/image/group.png')+')'}"></div> -->
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        name:"HomeSectionG",
    }
</script>

<style lang="scss" scoped>


.box{
    margin-bottom: 10rem;
    background: $primary;
    padding: 5rem 0rem;
}
.app{
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 280px;
    height: 90px;
}
h2{
    color: $plain;
    font-family:$extra;
    font-style: normal;
    font-weight: 800;
    font-size: 45px;
    line-height: 50px;
    letter-spacing: -0.04em;
}
h2 span{
    color: $secondary;
}
h2 span.break_text{
    display: block;
    color: $plain!important;
     font-size: 35px;
    // line-height: 48px;
}
</style>