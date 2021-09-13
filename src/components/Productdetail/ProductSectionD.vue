<template>
    <div class="container-fluid">
        <div class="wrapper">
            <div class="container">
            <div>
                <h3>Related Products</h3>
                <div>
                    <div class="row justify-content-center">
                        <div class="col-6 col-lg-2 col-sm-3">
                            <div class="image-wrap">
                                <div class="brand_one" :style="{backgroundImage:'url('+require('@/assets/image/pics-1.png')+')'}"></div>
                                <div class="d-flex align-items-center justify-content-between">
                                    <h6>Mens Fashion Wear</h6>
                                    <div class="icon_box">
                                        <v-icon size="10px" color="#FFC416">mdi-star</v-icon>
                                        <v-icon size="10px" color="#FFC416">mdi-star</v-icon>
                                        <v-icon size="10px" color="#FFC416">mdi-star</v-icon>
                                        <v-icon size="10px" color="#FFC416">mdi-star</v-icon>
                                        <v-icon size="10px" color="#000">mdi-star-outline</v-icon>
                                    </div>
                                </div>
                                 <h6>$43.00</h6>
                            </div>
                        </div>
                         <div class="col-6 col-lg-2 col-sm-3">
                            <div class="image-wrap">
                                <div class="brand_one" :style="{backgroundImage:'url('+require('@/assets/image/pics-2.png')+')'}"></div>
                                <div class="d-flex align-items-center justify-content-between">
                                    <h6>Women’s Fashion</h6>
                                    <div class="icon_box">
                                        <v-icon size="10px" color="#FFC416">mdi-star</v-icon>
                                        <v-icon size="10px" color="#FFC416">mdi-star</v-icon>
                                        <v-icon size="10px" color="#FFC416">mdi-star</v-icon>
                                        <v-icon size="10px" color="#FFC416">mdi-star</v-icon>
                                        <v-icon size="10px" color="#000">mdi-star-outline</v-icon>
                                    </div>
                                </div>
                                 <h6>$43.00</h6>
                            </div>
                        </div>
                        <div class="col-6 col-lg-2 col-sm-3">
                            <div class="image-wrap">
                                <div class="brand_one" :style="{backgroundImage:'url('+require('@/assets/image/pics-3.png')+')'}"></div>
                                <div class="d-flex align-items-center justify-content-between">
                                    <h6>Wolx Dummy Fashion</h6>
                                    <div class="icon_box">
                                        <v-icon size="10px" color="#FFC416">mdi-star</v-icon>
                                        <v-icon size="10px" color="#FFC416">mdi-star</v-icon>
                                        <v-icon size="10px" color="#FFC416">mdi-star</v-icon>
                                        <v-icon size="10px" color="#FFC416">mdi-star</v-icon>
                                        <v-icon size="10px" color="#000">mdi-star-outline</v-icon>
                                    </div>
                                </div>
                                 <h6>$43.00</h6>
                            </div>
                        </div>
                        <div class="col-6 col-lg-2 col-sm-3">
                            <div class="image-wrap">
                                <div class="brand_one" :style="{backgroundImage:'url('+require('@/assets/image/pics-4.png')+')'}"></div>
                                <div class="d-flex align-items-center justify-content-between">
                                    <h6>Top Wall Digital Clock</h6>
                                    <div class="icon_box">
                                        <v-icon size="10px" color="#FFC416">mdi-star</v-icon>
                                        <v-icon size="10px" color="#FFC416">mdi-star</v-icon>
                                        <v-icon size="10px" color="#FFC416">mdi-star</v-icon>
                                        <v-icon size="10px" color="#FFC416">mdi-star</v-icon>
                                        <v-icon size="10px" color="#000">mdi-star-outline</v-icon>
                                    </div>
                                </div>
                                 <h6>$43.00</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
          <div class="band" :style="{backgroundImage:'url('+require('@/assets/image/bandimage.png')+')'}"></div>
    </div>
</template>

<script>
    export default {
        name:"ProductSectionD"
    }
</script>

<style lang="scss" scoped>
.wrapper{
    margin:3rem auto;
}
.image-wrap{
    width: 100%;
    transition: all 0.4s ease-in-out;
}
.image-wrap:hover {
    transform: scale(1.13);
}
.brand_one{
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 165px;
    height: 200px;
}
h3{
font-family:$bold;
font-style: normal;
font-weight: bold;
font-size: 22px;
line-height: 36px;
color: $secondary;
margin-left:17%;
}
h6{
font-family:$regular;
font-style: normal;
font-weight: 600;
font-size: 10px;
color: $primary;
line-height: 16px;
}
.band{
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 80%;
    height: 70px;
    margin: 5rem auto;
}

@media(max-width: 768px){
    h3{
        margin-left: 0%!important;
    }
}
</style>