<template>
    <div class="container-fluid">
        <div class="wrapper">

            <div class="wrap-box">
                <div class="brown-shape"></div>
               <div class="list-wrapper">
                <div class="row">
                    <div class="col-12 col-lg-4">
                        <div class="content">
                            <div class="icon">

                            </div>
                            <h4>Loan</h4>
                            <p>Profit from cheaper transactions, no <span> account fees, and an annual interest </span> <span> rate of 2 percent with your brand </span>name account.</p>
                            <a href="">Learn more</a>
                        </div>
                    </div>
                    <div class="col-12 col-lg-4">
                        <div class="content">
                            <div class="icon">

                            </div>
                            <h4>Payment</h4>
                            <p>Profit from cheaper transactions, no <span> account fees, and an annual interest </span> <span> rate of 2 percent with your brand </span>name account.</p>
                            <a href="">Learn more</a>
                        </div>
                    </div>
                    <div class="col-12 col-lg-4">
                        <div class="content">
                            <div class="icon">

                            </div>
                            <h4>Wallet</h4>
                            <p>Profit from cheaper transactions, no <span> account fees, and an annual interest </span> <span> rate of 2 percent with your brand </span>name account.</p>
                            <a href="">Learn more</a>
                        </div>
                    </div>
                </div>
            </div>
             <div class="brown-front"></div>
            <div class="bottom-one"></div>
            <div class="bottom-two"></div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name:"HomeSectionB",
    }
</script>

<style lang="scss" scoped>


/************************************
    list header an paragraph css
*********************************/
.wrapper{
    height: 550px;
    padding-top: 11.5rem;
    margin-bottom: 3rem;
}
.wrap-box{
    position: relative;
}
.list-wrapper{
//    clip-path: polygon(0 47%, 100% 0, 100% 60%, 0% 100%);
    background: $primary;
    height: 280px;
    width: 75%;
    margin-inline: auto;
    padding:3.5rem 3.5rem;
    // padding: 1.5rem 1rem;
    // margin-bottom:8rem;
    transform: skewY(-11deg);
}
.content{
    transform: skewY(11deg);
    // margin-top:2rem;
}
.icon{
    width: 35px;
    height: 35px;
    border-radius: 3px;
    background: $plain;
    margin-bottom:0.65rem;
}
h4{
font-family:$bold;
font-style: normal;
font-weight: 800;
font-size: 30px;
line-height: 36px;
color: $plain;
letter-spacing: -0.04em;
//  transform: skewY(-15px);
}
p{
font-family:$regular;
font-style: normal;
font-weight: normal;
color: $plain;
font-size: 12px;
line-height: 16px;

}
p span{
    display: block;
}
a{
font-family:$regular;
font-style: normal;
font-weight: 800;
font-size:14px;
line-height: 18px;
color: $plain!important;
text-decoration: none;
letter-spacing: -0.04em;
 transform: skewY(-15px);
}
.brown-shape,.brown-front,.bottom-one,.bottom-two{
    width: 170px;
    height: 40px;
    transform: skewY(-8deg);
    position: absolute;
}
.brown-shape{
    background: $brown;
     top: 2.7rem;
    left: 7rem;
}
.brown-front{
    background: $secondary;
     top: 3.5rem;
    left: 9rem;
}
.bottom-one{
    background: $secondary;
    bottom: 4rem;
    right: 8rem;
}
.bottom-two{
    background: $deepblue;
    bottom: 3rem;
    right: 6.5rem;
}

@media(max-width:8px){
    .list-wrapper{
        width: 100%;
        padding:1rem;
        padding-top: 2rem;
        padding-left: 2rem;
        transform: skewY(0deg);
    }
    p{
        margin-bottom:0.2rem!important;
    }
    .content{
        transform: skewY(0deg);
    }
    .wrapper{
        margin-top: -9rem;
    }
    .brown-shape,.brown-front,.bottom-two,.bottom-one{
        display: none;
        transform: skewY(0deg);
        top: -1.8rem;
        left: 0rem;
    }
}

@media(max-width: 768px){
    .wrapper{
        margin-top: 3rem;
        padding-top: 1rem;
        margin-bottom: 12rem;
    }
    .list-wrapper{
        transform: skewY(0deg);
        width: 100%;
        overflow-y: scroll;
        min-height:42rem;
    }
    .wrap-box{
        min-height:46rem;
        background: $primary;
    }
    .icon{
        margin-inline: auto;
    }
    .content{
        width: 100%;
        text-align: center;
        margin-bottom:1.8rem;
        transform: skewY(0deg);
        
    }
    .brown-shape,.brown-front,.bottom-two,.bottom-one{
        transform: skewY(0deg);
        transform: rotate(45deg);
        display: none!important;
    }

}
</style>
