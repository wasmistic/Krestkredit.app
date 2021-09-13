<template>
    <div class="container-fluid">
        <div class="wrapper">
            <div class="container">
            <div>
                <h2>How It Work</h2>
                <p>Cart/ Information/ Shipping/ Payment</p>
                <div>
                    <div class="row">
                        <div class="col-12 col-lg-8">
                            <div class="card">
                    <div class="card-body">
                          <div class="row align-items-center justify-content-center">
                        <div class="col-12 col-lg-5">
                            <div>
                                <h3>Contact Information</h3>
                            </div>
                        </div>
                        <div class="col-12 col-lg-5">
                            <div>
                                <a href="">Already have an account?</a>
                                <a href="">Log in</a>
                            </div>
                        </div>
                        <div class="col-12 col-lg-10">
                            <div>
                                 <v-text-field
                                    :rules="rules"
                                    placeholder="Email or mobile phone number"
                                ></v-text-field>
                            </div>
                        </div>
                         <div class="col-12 col-lg-10">
                            <div>
                                <p> <v-icon size="25px" color="#06F2DB">mdi-circle-medium</v-icon> Keep me up to date on news and excluive offers</p>
                            </div>
                        </div>
                    </div>
                    <div class="bottom">
                    <div>
                        <div class="row align-items-center justify-content-center">
                            <div class="col-12 col-lg-10">
                                <h3 class="mb-5">Shipping address</h3>
                            </div>
                            <div class="col-12 col-lg-5">
                                <div>
                                     <v-text-field
                                        :rules="rules"
                                       dense
                                        placeholder="First name (optional)"
                                    ></v-text-field>
                                </div>
                            </div>
                            <div class="col-12 col-lg-5">
                                <div>
                                     <v-text-field
                                        :rules="rules"
                                       dense
                                        placeholder="Last name"
                                    ></v-text-field>
                                </div>
                            </div>
                            <div class="col-12 col-lg-10">
                                <div>
                                     <v-text-field
                                        :rules="rules"
                                       dense
                                        placeholder="Address"
                                    ></v-text-field>
                                </div>
                            </div>
                            <div class="col-12 col-lg-10">
                                <div>
                                     <v-text-field
                                        :rules="rules"
                                       dense
                                        placeholder="Appaetnentment,suit,e.t.c (optinal)"
                                    ></v-text-field>
                                </div>
                            </div>
                             <div class="col-12 col-lg-10">
                                <div>
                                     <v-text-field
                                        :rules="rules"
                                       dense
                                        placeholder="City"
                                    ></v-text-field>
                                </div>
                            </div>
                            <div class="col-12 col-lg-5">
                                <div>
                                     <v-text-field
                                        :rules="rules"
                                       dense
                                        placeholder="Bangladesh"
                                    ></v-text-field>
                                </div>
                            </div>
                            <div class="col-12 col-lg-5">
                                <div>
                                     <v-text-field
                                        :rules="rules"
                                       dense
                                        placeholder="Postal Code"
                                    ></v-text-field>
                                </div>
                            </div>
                        </div>
                        <div class="btn">Continue Shipping</div>
                    </div>
                </div>
                    </div>
                </div>
                        </div>
                        <div class="col-12 col-lg-3">
                            <div class="card">
                                <div class="card-body p-0 w-100">
                                    <div class="top d-flex align-items-start justify-content-between">
                                        <div class="bag" :style="{backgroundImage:'url('+require('@/assets/image/tablebag.png')+')'}"></div>
                                        <div class="w-100">
                                            <h5>Ut diam consequat</h5>
                                            <div class="d-flex align-items-start justify-content-between">
                                                <h6>Color: <span>Brown</span> </h6>
                                                <a class="price" href="">$32.00</a>
                                            </div>
                                            <h6>Size: <span>XL</span> </h6>
                                        </div> 
                                    </div>
                                     <div class="top d-flex align-items-start justify-content-between">
                                        <div class="bag" :style="{backgroundImage:'url('+require('@/assets/image/blackwrist.png')+')'}"></div>
                                        <div class="w-100">
                                            <h5>Ut diam consequat</h5>
                                            <div class="d-flex align-items-start justify-content-between">
                                                <h6>Color: <span>Black</span> </h6>
                                                <a class="price" href="">$32.00</a>
                                            </div>
                                            <h6>Size: <span>XL</span> </h6>
                                        </div> 
                                    </div>
                                     <div class="top d-flex align-items-start justify-content-between">
                                        <div class="bag" :style="{backgroundImage:'url('+require('@/assets/image/earset.png')+')'}"></div>
                                        <div class="w-100">
                                            <h5>Ut diam consequat</h5>
                                            <div class="d-flex align-items-start justify-content-between">
                                                <h6>Color: <span>Black</span> </h6>
                                                <a class="price" href="">$32.00</a>
                                            </div>
                                            <h6>Size: <span>XL</span> </h6>
                                        </div> 
                                    </div>
                                     <div class="top d-flex align-items-start justify-content-between">
                                        <div class="bag" :style="{backgroundImage:'url('+require('@/assets/image/lgcam.png')+')'}"></div>
                                        <div class="w-100">
                                            <h5>Ut diam consequat</h5>
                                            <div class="d-flex align-items-start justify-content-between">
                                                <h6>Color: <span>Black</span> </h6>
                                                <a class="price" href="">$32.00</a>
                                            </div>
                                            <h6>Size: <span>XL</span> </h6>
                                        </div> 
                                    </div>
                                     <div class="top d-flex align-items-start justify-content-between">
                                        <div class="bag" :style="{backgroundImage:'url('+require('@/assets/image/wristwatch.png')+')'}"></div>
                                        <div class="w-100">
                                            <h5>Ut diam consequat</h5>
                                            <div class="d-flex align-items-start justify-content-between">
                                                <h6>Color: <span>Black</span> </h6>
                                                <a class="price" href="">$32.00</a>
                                            </div>
                                            <h6>Size: <span>XL</span> </h6>
                                        </div> 
                                    </div>
                                </div>
                            </div>
                            <div class="card down">
                                <div class="card-body">
                                    <div class="right-card mb-5 d-flex -align-items-start justify-content-between">
                                        <h5>Subtotals:</h5>
                                        <h5>‎£219.00</h5>
                                    </div>
                                     <div class="right-card mt-5 d-flex -align-items-start justify-content-between">
                                        <h5 class="mt-3">Totals:</h5>
                                        <h5 class="mt-3">‎£219.00</h5>
                                    </div>
                                    <p class="dot"> <v-icon size="20px" color="#06F2DB" class="mr-1">mdi-circle-medium</v-icon> Shipping & taxes calculated at checkout</p>
                                    <router-link to="/pricing">
                                    <div class="btn proceed">Proceed To Checkout</div>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"HowSectionB",
         data () {
      return {
        rules: [v => v.length <= 25 || 'Max 25 characters'],
      }
    },
    }
</script>

<style lang="scss" scoped>
.wrapper{
    margin: 5rem 0rem;
    margin-bottom: 15rem;
}
.bottom{
    margin-top: 4rem;
}
.bag{
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 60px;
    height: 60px;
    margin-right: 0.75rem;
}
.card{
background: #F8F8FD;
border-radius:5px;
border: none;
padding:1.5rem  0.65rem;
}
.card.down{
    margin-top: 1rem;
}
.card-body{
    padding:0rem;
}
h2{
font-family:$bold;
font-style: normal;
font-weight: bold;
font-size: 24px;
color: $primary;
line-height: 24px;
}
h3{
font-family:$bold;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 18px;
color: $primary;
margin-top: 1.5rem;
}
h5{
font-family:$bold;
font-style: normal;
font-weight: normal;
font-size: 14px;
color: $primary;
line-height: 14px;
}
h6{
font-family:$regular;
font-style: normal;
font-weight: normal;
color: $primary;
font-size: 14px;
line-height: 14px;
}
h6 span{
    color: $secondary;
}
a.price{
font-family:$regular;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 14px;
color: $secondary;
}
p{
font-family:$regular;
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 14px;
letter-spacing: 0.02em;
color: $primary;
}
p.dot{
font-size: 10px;
line-height: 14px; 
}
a{
font-family:$regular;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 17px;
color: $secondary;
margin-right:0.45rem;
text-decoration: none;
letter-spacing: 0.01em;
}
.btn{
width: 182px;
height: 44px;
border-radius: 2px;
background: $primary;
color: $secondary;
font-family:$regular;
font-style: normal;
font-weight: 600;
font-size: 14px;
padding-top: 0.75rem;
line-height: 16px;
margin-top: 6rem;
margin-left: 8%;
}
.btn.proceed{
background: $secondary;
color: $primary;
margin-top: 0.25rem;
}
.v-text-field::placeholder{
font-family:$regular;
font-style: normal;
font-weight: 500;
font-size: 14px!important;
color: $primary!important;
line-height: 17px!important;
}
.top{
border-bottom: 1px solid $secondary;
margin-bottom: 1.15rem;
}
.top:nth-child(5){
    border-bottom: none;
}
.right-card{
    border-bottom: 1px solid $secondary;
    margin-top: 0rem;
    margin-bottom:0.95rem;
}
@media(max-width: 768px){
    .btn{
        margin-left: 0%;
    }
}
@media(max-width: 500px){
    .btn{
        margin-inline: auto!important;
    }
}
</style>