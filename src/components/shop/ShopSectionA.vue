<template>
    <div class="container-fluid box">
        <div class="container">
            <div class="jumbotron">
            <h2>Shop Grid Default</h2>
            <p>Home Pages <span>Shop Grid Default</span> </p>
        </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"ShopSectionA"
    }
</script>

<style lang="scss" scoped>



.box{
    background: $lightsecondary;
    margin-top: 4rem;
    padding: 4rem  0rem!important;
}
.jumbotron{
    // text-align: left;
    // width: 50%;
    // margin-left: 28%;
}
h2{
font-family:$bold;
font-style: normal;
font-weight: bold;
font-size: 36px;
line-height: 36px;
color: $primary;
text-align:left;
}
p{
font-family:$regular;
font-style: normal;
font-weight: 500;
font-size: 16px;
color: $primary;
line-height: 19px;
text-align:left;
}
p span{
    color: $deepblue;
    margin-left: 0.45rem;
}
@media(max-width: 500px){
    h2{
     font-size: 28px;
     line-height: 28px;
      text-align: center;
    }
    p{
     text-align: center;
    }
    .jumbotron{
        width: 100%;
        margin-left: 0%;
    }
}
</style>