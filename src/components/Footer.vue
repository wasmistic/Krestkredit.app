<template>
    <div>
       <div class="container-fluid box">
            <div class="container">
                 <div class="row align-item-center justify-content-between justify-content-lg-around justify-content-sm-between">
                    <div class="col-12 col-lg-2 col-sm-10">
                            <div id="logo">
                               <router-link to="/" class="nav-item nav-link ">Krestpay</router-link>
                            </div>
                    </div>
                    <div class="col-6 col-lg-2 col-sm-3">
                        <div>
                            <div class="title"><a href="">Features</a></div>
                            <ul>
                                <li>
                                    <a href="">Carbon account</a>
                                </li>
                                    <li>
                                    <a href=""> Payments</a>
                                </li>
                                   <li>
                                    <a href="">Cards</a>
                                </li>
                                    <li>
                                    <a href="">Investments</a>
                                </li>
                                <li>
                                    <a href=""> Credit report</a>
                                </li>
                                    <li>
                                    <a href=""> Loans</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-6 col-lg-2 col-sm-3">
                        <div>
                            <div class="title"><a href="">Learn more</a></div>
                            <ul>
                                <li>
                                    <a href="">Personal loans </a>
                                </li>
                                    <li>
                                    <a href="">get fast loan</a>
                                </li>
                                <li>
                                    <a href=""> loan in nigeria</a>
                                </li>
                                <li>
                                    <a href="">krestpay loan</a>
                                </li>
                                    <li>
                                    <a href="">sme loan</a>
                                </li>
                                    <li>
                                    <a href="">instant loan</a>
                                </li>
                                 <li>
                                    <a href="">krestpay app</a>
                                </li>
                                    <li>
                                    <a href="">loans for business</a>
                                </li>
                                <li>
                                    <a href="">loan without collateral</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-6 col-lg-2 col-sm-3">
                        <div>
                            <div class="title"><a href="">Company</a></div>
                            <ul>
                                <li>
                                    <a href="">About us</a>
                                </li>
                                    <li>
                                    <a href="">media</a>
                                </li>
                                <li>
                                    <a href="">careers</a>
                                </li>
                                  <li>
                                    <a href="">blog</a>
                                </li>
                                <li>
                                    <a href="">customers</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-6 col-lg-2 col-sm-3">
                        <div>
                            <div class="title"><a href="">Help</a></div>
                            <ul>
                                <li>
                                    <a href="">Knowledge base</a>
                                </li>
                                    <li>
                                    <a href="">contact</a>
                                </li>
                                <li>
                                    <a href="">community</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                     <div class="col-6 col-lg-2 col-sm-3">
                        <div>
                            <div class="title"><a href="">Legal</a></div>
                            <ul>
                                <li>
                                    <a href="">Privacy policy</a>
                                </li>
                                    <li>
                                    <a href="">terms & conditions</a>
                                </li>
                                <li>
                                    <a href="">cookies</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
       </div>
        <div class="bottom container-fluid"></div>
    </div>
</template>

<script>
    export default {
        name:"Footer",
    }
</script>

<style lang="scss" scoped>
.box{
    margin-top:0rem;
}
#logo{
    margin: 0px!important;
    padding: 0px!important;
    margin-top: -0.45rem!important;
}
#logo a{
    color:$secondary;
    font-family: $regular;
   font-family:$bold;
 text-decoration: none;
font-style: normal;
font-weight: 800;
font-size: 24px;
line-height: 33px;
text-align:left;
letter-spacing: -0.04em;
}
// #logo a.router-link-exact-active{
//     color:$secondary;  
// }
.title a{
 font-family:$bold;
 text-decoration: none;
font-style: normal;
font-weight: 800;
font-size: 24px;
line-height: 33px;
color: $primary;
text-align: center;
letter-spacing: -0.04em;
}
ul{
    list-style: none;
    display: block;
    margin-left: -1.5rem;
    margin-top: 2rem;
}
ul li a{
text-decoration: none;
font-family:$regular;
font-style: normal;
font-weight: normal;
color: $primary;
font-size: 18px;
line-height: 43px;
letter-spacing: -0.04em;
}
.bottom{
    background:#C4C4C4;
    height: 86.21px;
     margin-top: 5rem;

}

@media(max-width: 768px){
    #logo a{
    margin-left:-12px!important;
    }
    .title a,#logo a{
        font-size: 30px;
        line-height: 34px;
        font-weight: normal!important;
        // letter-spacing: 0px;
    }
    ul{
        margin-top: 1rem;
    }
    ul li a{
        font-size: 24px;
        line-height: 28px;
    }
}
@media(max-width: 500px){
    .title a{
        font-size: 24px;
        line-height: 24px;
        font-weight: bolder;
        font-family: $bold;
    }
    ul li a{
        font-size: 18px;
        line-height: 28px;
    }
    ul{
        margin-top:0.45rem;
    }
}
</style>