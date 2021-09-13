<template>
    <div class="container-fluid">
        <div class="container">
            <div class="d-flex align-items-center justify-content-center flex-column box">
                 <v-icon size="75px" class="mx-auto" color="#06F2DB">mdi-check-circle-outline</v-icon>
                 <h3>Your Order Is Completed! </h3>
                 <p>Thank you for your order! Your order is being processed and will be completed within 3-6 <span>hours. You will receive an email confirmation when your order is completed.</span></p>
                 <router-link to="/account" >
                 <div class="btn">Continue Shopping</div>
                    </router-link>
                 <div class="band" :style="{backgroundImage:'url('+require('@/assets/image/bandimage.png')+')'}"></div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name:"OrderSectionB"
    }
</script>

<style lang="scss" scoped>

.box{
    margin: 4rem 0rem;
    margin-bottom: 14rem;
}
.band{
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 80%;
    height: 70px;
    margin: 5rem auto;
}
a{
    text-decoration: none;
}
h3{
font-family:$bold;
font-style: normal;
font-weight: bold;
font-size: 36px;
line-height: 36px;
color: $primary;
text-align: center;
}
p{
font-family: Lato;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 30px;
color: #8D92A7;
text-align: center;
}
p span{
    display: block;
}
.btn{
font-family:$regular;
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 30px;
color: $primary;
text-align: center;
padding:0.75rem 1rem;
background: $secondary;
margin-inline: auto;
}
.v-icon{
    margin-bottom: 1.5rem;
}
</style>