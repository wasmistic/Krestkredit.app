<template>
    <div class="container-fluid box">
        <div class="wrapper">
            <div class="wrap">
                <div class="content d-flex align-items-center flex-lg-row flex-column justify-content-lg-around justify-content-center">
                    <div class="order-lg-1 order-2">
                        <div class="content-text">
                            <h5>Krest account</h5>
                            <h2>Loan with <span> peace of mind.</span></h2>
                            <p>Profit from cheaper transactions, no account <span> fees, and an annual interest rate of 2 percent </span>with your brand name account.</p>
                            <a href="">Learn more</a>
                        </div>
                    </div>
                    <div class="order-lg-2 order-1">
                        <div>
                             <div class="phone" :style="{backgroundImage:'url('+require('@/assets/image/phone.png')+')'}"></div>
                        </div>
                    </div>
                </div>
                 <div class="content d-flex align-items-center flex-lg-row flex-column justify-content-lg-around justify-content-center">
                    <div class="order-1">
                         <div class="middle-image">
                             <div class="phone" :style="{backgroundImage:'url('+require('@/assets/image/phone.png')+')'}"></div>
                        </div>
                    </div>
                    <div class="order-2">
                        <div class="content-text middle">
                            <h5>Krest account</h5>
                            <h2>We make access to credit <span>simple and easy.</span></h2>
                            <p>No guarantors, collaterals, or long forms, Apply <span> 24/7 and receive funds in your Carbon account </span> <span> instantly. Unlock higher loan amounts and lower</span> interest rates by repaying loans on time.</p>
                            <a href="">Learn more</a>
                        </div>
                    </div>
                </div>
                 <div class="content d-flex align-items-center flex-lg-row flex-column justify-content-lg-around justify-content-center">
                    <div class="order-lg-1 order-2">
                        <div class="content-text">
                            <h5>Krest account</h5>
                            <h2>Keep track of <span>your credit history</span></h2>
                            <p>Be notified of any issues you may have. We’ll <span> help you stay on top of things.. and it’s </span>completely free.</p>
                            <a href="">Learn more</a>
                        </div>
                    </div>
                    <div class="order-lg-2 order-1">
                        <div>
                             <div class="phone" :style="{backgroundImage:'url('+require('@/assets/image/phone.png')+')'}"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"HomeSectionC",
    }
</script>

<style lang="scss" scoped>


.box{
    width: 100%;
    clip-path: polygon(0 8%, 100% 0%, 100% 90%, 0% 100%);
    background: $primary;
    min-height: auto;
    padding: 10rem 0rem;
}


.wrapper{
    padding: 7rem 0rem;
}
.content{
    width: 60%;
    margin-inline: auto;
}
.content-text.middle{
    margin-right: -9rem!important;
}
.middle-image{
    margin-left: -2rem!important;
}
.phone{
background-position: center;
background-repeat: no-repeat;
background-size: cover;
width: 210px;
height: 410px;
}
h2{
font-family:$bold;
font-style: normal;
font-weight: 800;
font-size: 30px;
line-height: 36px;
color: $plain;
letter-spacing: -0.04em;
}
h2 span{
    display: block;
}

h5{
font-family:$regular;
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 23px;
color: $plain;
letter-spacing: -0.04em;
border-radius: 60px;
background: $secondary;
text-align: center;
width: 115px;
height: 20px;
}
p{
font-family:$regular;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 18px;
color:$plain;
}
p span{
    display: block;
}
a{
font-family:$regular;
font-style: normal;
font-weight: 800;
font-size: 16px;
line-height: 25px;
color: $secondary!important;
text-decoration: none;
letter-spacing: -0.04em;
}
@media(max-width: 768px){
 .phone,h5{
     margin-inline: auto;
 }
    h2 span{
        display: inline;
    }
 .content-text{
     margin-inline: auto;
     margin:2.5rem auto;
     text-align: center;
 }
 .content-text.middle{
    margin-right:0rem!important;
}
.middle-image{
    margin-left: 0rem!important;
}
}
@media(max-width: 500px){
    .content-text{
        // width: 85%;
        margin-inline: auto;
    }
    h2{
font-size: 20px;
// white-space: pre;
line-height: 26px;
}
p{
text-align: center;
}
p span{
    display: inline;
}
a{
line-height:0px;
}
}
</style>