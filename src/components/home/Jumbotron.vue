<template>
    <div class="container box">
        <div class="wrapper">
            <div class="row justify-content-lg-around justify-content-center gx-0">
                <div class="col-12 col-lg-5 col-sm-10">
                    <div class="header-wrap">
                        <h2>Get a new device <span>now and pay later</span></h2>
                        <p>Request a loan to fund your small company, <span> home renovations, car purchase, rent, school </span>fees, medical expenditures, etc.</p>
                        <router-link to="/shop"> <div class="btn">Shop Now</div></router-link>
                    </div>
                </div>
                   <div class="col-12 col-lg-5 col-sm-10">
                    <div class="gadget-wrap">
                        <div class="gadget" :style="{backgroundImage:'url('+require('@/assets/image/laptop.png')+')'}"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"Jumbotron",
    }
</script>

<style lang="scss" scoped>
.box{
    margin-top: 10rem;
}
/**********************************
jumbotron header text
******************************/
h2{
font-family:$extra;
font-style: normal;
font-weight: 800;
font-size: 45px;
color: $primary;
line-height: 58px;
letter-spacing: -0.04em;
text-transform: capitalize; 
}
h2 span{
    display: block;
}
p{
font-family:$regular;
font-style: normal;
font-weight: normal;
color: $primary;
font-size: 16px;
line-height: 24px;
}
p span{
    display: block;
}
.btn{
font-family:$regular;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 28px;
text-align: center;
letter-spacing: -0.04em;
padding:0.85rem 1.5rem;
color:$primary;
background:$secondary;
}
/******************************
    image
*****************************/
.gadget{
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 400px;
    height: 400px;
}
/**********************************
            wrapper
********************************/
.wrapper{
    width: 85%;
    margin-inline: auto;
}
@media(max-width: 768px){
    /************************
            wrapper
    ******************/
    .wrapper{
        width: 100%;
        margin-inline: auto;
    }
    .header-wrap{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    h2{
        font-size: 62px;
        line-height: 72px;
        text-align: center;
    }
    p{
         font-size: 20px;
        line-height: 32px;
        text-align: center;
    }
    .btn{
        font-size: 24px;
        line-height: 32px;
        padding: 1.5rem 2rem;
    }

    .gadget{
        // background-position:;
        background-size: 500px;
        width: 100%;
        height: 650px;
    }
}

@media(max-width:500px){
    /************************
            wrapper
    ******************/
    .wrapper{
        width: 100%;
        margin-inline: auto;
    }
    .header-wrap{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    h2{
        font-size: 32px;
        line-height: 42px;
        text-align: center;
    }
    p{
         font-size: 16px;
        line-height: 20px;
        text-align: center;
    }
    p span{
        display: inline!important;
    }
    .btn{
        font-size: 18px;
        line-height: 28px;
        padding:0.65rem 1rem;
    }
    .gadget-wrap{
        margin-top: 6rem;
    }
    .gadget{
        // background-position:;
        background-size: 250px;
        width: 100%;
        height: 250px;
        margin-inline: auto;
    }
}
</style>