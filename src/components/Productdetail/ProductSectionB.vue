<template>
    <div class="container-fluid box">
        <router-link to="/pricing">
        <div class="wrapper">
             <div class="container">
            <div>
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex align-items-center justify-content-start flex-lg-row flex-column">
                            <div class="grid d-flex align-items-center justify-content-lg-center justify-content-between flex-lg-column flex-row order-lg-1 order-2">
                              <div class="first" :style="{backgroundImage:'url('+require('@/assets/image/handbag.png')+')'}"></div> 
                               <div class="second" :style="{backgroundImage:'url('+require('@/assets/image/lampbag.png')+')'}"></div> 
                                <div class="third" :style="{backgroundImage:'url('+require('@/assets/image/showbag.png')+')'}"></div>  
                            </div>
                            <div class="middle order-lg-2 order-1">
                                 <div class="brand" :style="{backgroundImage:'url('+require('@/assets/image/blackbag.png')+')'}"></div> 
                            </div>
                            <div class="content order-lg-3 order-3">
                                <h4>Playwood arm bag</h4>
                                <div class="icon-box">
                                    <v-icon size="12px" color="#FFC416">mdi-star</v-icon>
                                    <v-icon size="12px" color="#FFC416">mdi-star</v-icon>
                                    <v-icon size="12px" color="#FFC416">mdi-star</v-icon>
                                     <v-icon size="12px" color="#FFC416">mdi-star</v-icon>
                                    <v-icon size="12px" color="#FFC416">mdi-star</v-icon>
                                    <a href="">(22)</a>
                                </div>
                                <a href="">$32.00 <span>$32.00</span> </a>
                                <h5>Color</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.</p>
                                <h6>Add To cart  <v-icon class="mr-2" color="#000" size="20px">mdi-heart-outline</v-icon> </h6>
                                <h5>Categories:</h5>
                                <h5>Tags</h5>
                                <div class="d-flex align-items-start justify-content-start">
                                     <h5 class="mr-2">Share</h5>
                                     <v-avatar size="20px"  class="pa-1 my-1" color="#151875">
                                          <v-icon size="12px" color="#fff">mdi-facebook</v-icon>
                                     </v-avatar>
                                     <v-avatar size="20px" class="pa-1 my-1 mx-2" color="#FB2E86">
                                         <v-icon size="12px" color="#fff">mdi-instagram</v-icon>
                                     </v-avatar>
                                      <v-avatar size="20px" class="pa-1 my-1" color="#151875">
                                         <v-icon size="12px" color="#fff">mdi-twitter</v-icon>
                                     </v-avatar>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name:"ProductSectionB"
    }
</script>

<style lang="scss" scoped>
.wrapper{
    padding:3rem 0rem;
}
.card{
    width: 70%;
    min-height: auto;
    padding-left:0.5rem;
    margin-right: auto;
    background: #FFFFFF;
    box-shadow: 0px 0px 25px 10px #F6F4FD;
    border-radius: 2px;
    border: none;
}
.grid{
    width: 10%;
}
.middle{
    width: 40%;
}
.content{
    width: 50%;
}
.brand,.first,.second,.third{
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius:3px;
}
.brand{
    width:80%;
    margin-left:8%;
    height:300px;
}
.first,.second,.third{
    width:110px;
    height:88px;
}
.second{
    margin: 1rem 0rem;
}
h4{
font-family:$bold;
font-style: normal;
font-weight: 600;
font-size: 25px;
line-height: 3px;
color: $primary;
text-align:left;
}
h5,h6,p{
font-family:$bold;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 20px;
color: $primary;
}
h6{
margin-left: 15%;
}
p{
color:#A9ACC6;
}
a{
text-decoration: none;
color: $primary;
font-family:$regular;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 29px;
margin-left: 0.45rem;
text-transform: capitalize;
}


@media(max-width: 768px){
    .card{
        width: 100%;
    }
    .grid{
    width: 100%;
}
.middle{
    width: 100%;
}
.content{
    width: 100%;
}
.first,.second,.third{
    width:80%;
    height:140px;
}
.second{
    margin-left: 0.45rem;
    margin-right: 0.45rem;
}
h4{
    line-height: 25px;
    margin-top: 1rem;
}
h6{
    margin-left: 0%;
}
}
</style>