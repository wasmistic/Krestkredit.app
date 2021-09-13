<template>
    <div class="container-fluid box">
        <div class="wrapper">
            <div>
                <h2>Get a loan <span>today in 3 steps</span></h2>
                <div class="overflow-content">
                   <div class="row align-items-center justify-content-lg-around justify-content-center">
                       <div class="col-12 col-lg-4">
                            <div class="wrap">
                         <v-timeline
                             align-top
                            dense
                            >
                            <v-timeline-item
                            color="#06F2DB"
                            fill-dot
                            small
                            >
                                <v-card class="elevation-0 mt-0" width="340px">
                                <v-card-title class="text-h5">
                                    <h3>Download the app</h3>
                                </v-card-title>
                                <v-card-text>
                                     <p>Profit from cheaper transactions, no account <span> fees, and an annual interest rate of 2 percent </span>with your brand name account.</p>
                                </v-card-text>
                                </v-card>
                            </v-timeline-item>
                            <v-timeline-item
                             color="#06F2DB"
                             small
                            right
                            >
                                <v-card class="elevation-0 mt-0" width="340px">
                                <v-card-title class="text-h5">
                                    <h3>Register within minutes</h3>
                                </v-card-title>
                                <v-card-text>
                                     <p>Profit from cheaper transactions, no account <span> fees, and an annual interest rate of 2 percent </span>with your brand name account.</p>
                                </v-card-text>
                                </v-card>
                            </v-timeline-item>
                            <v-timeline-item
                             color="#06F2DB"
                             small
                            >
                                <v-card class="elevation-0 mt-0" width="340px">
                                <v-card-title >
                                     <h3>Register within minutes</h3>
                                </v-card-title>
                                <v-card-text>
                                    <p>Profit from cheaper transactions, no account <span> fees, and an annual interest rate of 2 percent </span>with your brand name account.</p>
                                </v-card-text>
                                </v-card>
                            </v-timeline-item>
                            </v-timeline>
                    </div>
                       </div>
                       <div class="col-12 col-lg-4">
                           <div class="phone_box">
                               <div class="phone third" :style="{backgroundImage:'url('+require('@/assets/image/phone.png')+')'}"></div>
                               <div class="phone second" :style="{backgroundImage:'url('+require('@/assets/image/phone.png')+')'}"></div>
                                <div class="phone" :style="{backgroundImage:'url('+require('@/assets/image/phone.png')+')'}"></div>
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
        name:"HomeSectionD"
    }
</script>

<style lang="scss" scoped>
.box{
    min-height: auto;
    margin:7rem auto;
}

.phone_box{
    display: flex;
    align-items: center;
    position: relative;
}
.phone{
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 210px;
    height: 430px;
    position: absolute;
    left: 4rem;
}
.phone.second{
    width: 180px;
    height: 380px;
    position: absolute;
    left: 13.7rem;
}
.phone.third{
    width: 160px;
    height: 330px;
    position: absolute;
    left:20rem;
}

h2{
font-family:$extra;
font-style: normal;
font-weight: 800;
font-size: 28px;
line-height: 38px;
color: $primary;
letter-spacing: -0.04em;
margin-left: 17%;
}
h2 span{
    display: block;
}
h3{
font-family:$bold;
font-style: normal;
font-weight: 800;
font-size: 16px;
line-height: 18px;
color: $primary;
letter-spacing: -0.04em;
}
p{
font-family:$regular;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 18px;
color: $primary;
margin-top: -1rem;
}
p span{
    display: block;
}
.wrap{
    position: relative;
    height: 500px;
}
.dot-one{
    width: 25px;
    height: 25px;
    background: $secondary;
    border-radius: 50px;
    position: absolute;
    top: 0%;
    left: 1rem;
}
.dot_inset{
    width: 25px;
    height: 25px;
    background: $plain;
    border:4px solid $secondary;
    border-radius: 50px;
    position: absolute;
    top: 50%;
    left: 1rem;
}
.inset_bottom{
    width: 25px;
    height: 25px;
    background: $plain;
    border:4px solid $secondary;
    border-radius: 50px;
    position: absolute;
    bottom: 0;
    left: 1rem;
}
.parralel{
    width: 1px;
    height: 160px;
    background: $plain;
    position: absolute;
    top: 5%;
    left: 1.8rem;
}


@media(max-width: 768px){
    .phone_box{
        margin-top: 12rem;
    }
    .overflow-content{
        width: 60%;
        margin-inline: auto;
    }
    h2{
        margin-left: 36%;
    }
    .box{
        margin-top: 3rem;
        margin-bottom: 19rem;
    }
}
@media(max-width: 500px){
    .phone_box{
        margin-top: 6rem;
    }
    .phone,.phone.second,.phone.third{
        top: 2%;
        left: 5rem;
    }
    .overflow-content{
        width: 100%;
        margin-inline: auto;
    }
    h2{
        text-align: center;
        margin-left:0%;
    }
    .box{
        margin-top: 3rem;
        margin-bottom:29rem;
    }
}
</style>