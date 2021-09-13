<template>
 
<nav class="navbar fixed-top navbar-expand-lg navbar-light">
  <div class="container">
    <a class="navbar-brand" href="#">Krestkredit</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="navbar-nav mx-auto">
                <router-link to="/" class="nav-item nav-link ">Loans</router-link>
                <router-link to="/feature" class="nav-item nav-link">Features</router-link>
                <router-link to="/how-it-work" class="nav-link">How it works</router-link>
                <router-link to="/pricing" class="nav-link">Pricing</router-link>
            </div>
            <form class="d-flex">
               <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2">
                <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
                </div>
            </form>
            </div>
  </div>
</nav>

</template>

<script>
import Buttons from './general/Buttons.vue'
    export default {
  components: { Buttons },
        name:"PageHeader",
        data(){
            return{

            }
        },
        methods:{
            
        }
    }
</script>

<style lang="scss" scoped>
#button-addon2{
    background: $secondary!important;
    color:$primary!important;
}
nav{
    // padding:0px 30px;
    text-align: center;
    background:$plain;
    // height: 70px;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
}
.navbar-brand{
    color: $secondary!important;
}
#navbarSupportedContent a{
    font-weight: bold;
    color: #2c3e50;
    width:120px;
    text-align: center;
    white-space: pre;
    margin-inline: 0.25rem;
}
#navbarSupportedContent a.router-link-exact-active{
    border-bottom:1px solid $secondary;
    color:$secondary;
    font-family: $regular;
}

@media(max-width:768px){
    #navbarSupportedContent a{
        margin: 0.45rem auto;
    }
    form{
        width: 50%;
        margin-top: 0.85rem!important;
        margin-inline: auto!important;
    }
}


@media(max-width:540px){
    #navbarSupportedContent a{
        margin: 0.15rem auto;
    }
    form{
        width: 80%;
        margin-top: 0.85rem!important;
        margin-inline: auto!important;
    }
}
</style>