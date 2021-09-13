<template>
    <div class="container-fluid box">
        <div class="wrapper">
             <div class="container">
            <div class="row">
                <div class="col-12 col-lg-6">
                    <div>
                        <h2>Ecommerce Acceories & Fashion item </h2>
                        <p>About 9,620 results (0.62 seconds)</p>
                    </div>
                </div>
                <div class="col-12 col-lg-5">
                    <div class="content d-flex align-items-center justify-content-between">
                       <div>
                           <label for="number">Per Page: <input type="number">  </label>
                       </div>
                        <div class="sort">
                           <label for="sort">Sort By:</label>
                           <select name="sort" id="sort">
                               <option value="1"></option>
                               <option value="X">X</option>
                               <option value="XL">XL</option>
                               <option value="xxl">XXL</option>
                           </select>
                       </div>
                       <div>
                           <div class="icon">
                                <label for="text">View:</label>
                                 <a href=""> <v-icon size="15px" class="ml-1" color="black">mdi-view-grid</v-icon> </a>
                                <a href=""> <v-icon size="15px" class="ml-1" color="black">mdi-format-list-bulleted-square</v-icon> </a>
                                <input id="view" type="text">
                           </div>
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
        name:"ShopSectionB",
    }
</script>

<style lang="scss" scoped>

.box{
    margin: 4rem 0rem!important;
}
.content{
    width: 100%;
}
h2{
font-family:$bold;
font-style: normal;
font-weight: bold;
color: $primary;
font-size: 22px;
line-height: 22px;
}
p{
font-family:$regular;
color: $primary;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 14px;
}
a{
text-decoration: none;
}
label{
font-family:$regular;
color: $primary;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 14px;
// display: flex;
// align-items: center;
}
input,select{
    border: 1px solid $secondary;
    height: 25px;
    border-radius: 5px;
    margin-left:0.45rem;
    width: 70px;
      font-family:$regular;
    color: $primary;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    padding-left:1rem;
}


@media(max-width: 500px){
    h2{
       font-size: 22px;
       line-height: 28px; 
       text-align: center;
    }
    p{
        text-align: center;
    }
    label{
        margin-top: -1rem;
    }
    input,select{
        display: block;
        margin-left: 0rem;
        margin-top: 0.45rem;
    }
    .sort,.icon{
        margin-top: -0.85rem!important;
    }
    #sort,#view{
        margin-top: -0.15rem!important;
    }
}
</style>