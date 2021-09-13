<template>
    <div class="container-fluid box">
        <div class="wrapper d-flex align-items-start justify-content-center flex-lg-row flex-column">
            <div class="order-1 top">
                <h2>Subscribe to our <span> newsletter</span></h2>
            </div>
            <div class="order-2 bottom d-flex align-items-start justify-content-lg-end justify-content-center">
          <input type="text">
          <div class="btn">Subscribe</div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name:"HomeSectionF",
         data () {
      return {
          rules: [v => v.length <= 25 || 'Max 25 characters'],
      }
    },
    }
</script>

<style lang="scss" scoped>
.box{
    margin-bottom:10rem;
}
.wrapper{
    width: 70%;
    margin-inline: auto;
}

h2{
font-family:$extra;
font-style: normal;
font-weight: 800;
font-size: 25px;
line-height: 26px;
color: $primary;
letter-spacing: -0.04em;
}
h2 span{
    display: block;
}
.top{
    width:20%;
    margin-right: 2rem;
}
.bottom{
    width: 70%;
}
.btn{
    width: 150px;
    height:62px;
    background:$secondary;
    font-family:$bold;
    font-style: normal;
    font-weight: 800;
    font-size: 18px;
    line-height:45px;
    border-radius: 0rem;
    color: $primary;
    text-align: center;
    margin-left: 1rem;
    letter-spacing: -0.04em;
}
input{
    border:3px solid #140D40!important;
    width: 80%;
    height: 60px;
}
@media(max-width: 768px){
    .wrapper{
        width: 100%;
    }
    .top{
        width: 50%;
        margin-inline: auto;
        margin-bottom: 0.45rem;
    }
    .bottom{
        width: 80%;
        margin-inline: auto;
    }
    h2 span{
        display: inline;
    }
}
@media(max-width: 500px){
    .wrapper{
        width: 100%;
    }
    .top{
        width: 100%;
        margin-inline: auto;
        margin-bottom: 0.45rem;
    }
    .bottom{
        width: 100%;
        margin-inline: auto;
    }
    h2{
    font-size: 20px;
    text-align: center;
    }
    h2 span{
        display: inline;
    }
    .btn{
        background: $primary;
        color: $secondary;
        margin-left: -0.10rem;
        margin-top: -0.05rem;
    }
    input{
        border-right: none!important;
    }
}
</style>