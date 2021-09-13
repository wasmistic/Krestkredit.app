<template>
    <div class="container-fluid">
        <div class="wrapper">
            <div class="container">
            <div class="card">
                <div class="card-body">
                    <h3>Login</h3>
                    <p>Please login using account detail bellow.</p>
                    <div class="wrap">
                      <v-text-field
                        :rules="rules"
                        type="email"
                        placeholder="Email Address"
                        outlined
                        dense
                    ></v-text-field>
                    </div>
                     <div class="wrap">
                      <v-text-field
                        :rules="rules"
                        counter="25"
                        placeholder="Password"
                        outlined
                        type="password"
                        dense
                    ></v-text-field>
                    </div>
                    <a href="">Forgot your password?</a>
                    <router-link to="/">
                    <div class="btn">Sign In</div>
                    </router-link>
                    <a href="">Don’t have an Account?Create account</a>
                </div>
            </div>
        </div>
        <div class="band" :style="{backgroundImage:'url('+require('@/assets/image/bandimage.png')+')'}"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"AccountSectionB",
         data () {
      return {
        rules: [v => v.length <= 25 || 'Max 25 characters'],
      }
    },
    }
</script>

<style lang="scss" scoped>
.wrapper{
    margin-top:2rem;
    margin-bottom: 15rem;
}
.card{
    text-align: center;
    width: 40%;
    margin-inline: auto;
    padding: 1.5rem;
    background: #FFFFFF;
    box-shadow: 0px 0px 25px 10px #F8F8FB;
}
h3{
font-family: $bold;
font-style: normal;
font-weight: bold;
color: $primary;
font-size: 32px;
line-height: 32px;
}
p{
font-family:$regular;
font-style: normal;
font-weight: normal;
color: #9096B2;
font-size: 17px;
line-height: 20px;
margin-bottom:2rem;
}
a{
font-family:$regular;
font-style: normal;
font-weight: normal;
color: $primary;
font-size: 14px;
line-height: 20px;
text-decoration: none;
display: block;
}
.btn{
font-family:$regular;
font-style: normal;
font-weight: bold;
font-size: 17px;
line-height: 20px;
padding:0.65rem  0rem;
color: $primary;
display: block;
margin: 1rem 0rem;
background: $secondary;
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
    .card{
        width: 70%;
    }
    .wrapper{
        margin-top: 5rem;
    }
}
@media(max-width:500px){
    .card{
        width: 100%;
    }
    .wrapper{
        margin-top: 2rem;
    }
    p{
    font-size: 10px;
    line-height: 20px; 
    }
}
</style>
