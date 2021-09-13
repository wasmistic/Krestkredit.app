<template>
    <div class="container-fluid">
        <div class="wrapper">
             <div class="container">
                 <div class="wrap">
                     <div class="row">
               <div class="col-12 col-lg-9">
                    <table>
                <thead>
                    <tr>
                        <th>
                            Product
                        </th>
                        <th>
                            Price
                        </th>
                         <th>
                           Quantity
                        </th>
                         <th>
                           Total
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>
                            <td>
                                <div class="d-flex align-items-start justify-content-start content-wrap text-left">
                                    <div class="image" :style="{backgroundImage:'url('+require('@/assets/image/offwitebag.png')+')'}"></div>
                                    <v-icon class="close" size="15px" color="#000">mdi-close-circle</v-icon>
                                    <div>
                                        <h5>Ut diam consequat</h5>
                                        <p>Color: <span>Brown</span> </p>
                                        <p>Size: <span>XL</span> </p>
                                    </div>  
                                </div>
                            </td>
                        </th>
                        <th>
                            <td>
                               <h4>$32.00</h4>
                            </td>
                        </th>
                        <th>
                            <td>
                               <select>
                                   <option value=""></option>
                                   <option value="1">1</option>
                                   <option value="2">2</option>
                                   <option value="3">3</option>
                               </select>
                            </td>
                        </th>
                        <th>
                            <td>
                              <h4>‎£219.00</h4>
                            </td>
                        </th>
                    </tr>
                      <tr>
                        <th>
                            <td>
                                <div class="d-flex align-items-start justify-content-start content-wrap text-left">
                                    <div class="image" :style="{backgroundImage:'url('+require('@/assets/image/blackbag.png')+')'}"></div>
                                     <v-icon class="close" size="15px" color="#000">mdi-close-circle</v-icon>
                                    <div>
                                        <h5>Vel faucibus posuere</h5>
                                        <p>Color: <span>Black</span> </p>
                                        <p>Size: <span>XL</span> </p>
                                    </div>  
                                </div>
                            </td>
                        </th>
                        <th>
                            <td>
                               <h4>$32.00</h4>
                            </td>
                        </th>
                        <th>
                            <td>
                               <select>
                                   <option value=""></option>
                                   <option value="1">1</option>
                                   <option value="2">2</option>
                                   <option value="3">3</option>
                               </select>
                            </td>
                        </th>
                        <th>
                            <td>
                              <h4>‎£219.00</h4>
                            </td>
                        </th>
                    </tr>
                     <tr>
                        <th>
                            <td>
                                <div class="d-flex align-items-start justify-content-start content-wrap text-left">
                                    <div class="image" :style="{backgroundImage:'url('+require('@/assets/image/redbag.png')+')'}"></div>
                                     <v-icon class="close" size="15px" color="#000">mdi-close-circle</v-icon>
                                    <div>
                                        <h5>Ac vitae vestibulum</h5>
                                        <p>Color: <span>Red</span> </p>
                                        <p>Size: <span>XL</span> </p>
                                    </div>  
                                </div>
                            </td>
                        </th>
                        <th>
                            <td>
                               <h4>$32.00</h4>
                            </td>
                        </th>
                        <th>
                            <td>
                               <select>
                                   <option value=""></option>
                                   <option value="1">1</option>
                                   <option value="2">2</option>
                                   <option value="3">3</option>
                               </select>
                            </td>
                        </th>
                        <th>
                            <td>
                              <h4>‎£219.00</h4>
                            </td>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <td>
                                <div class="d-flex align-items-start justify-content-start content-wrap text-left">
                                    <div class="image" :style="{backgroundImage:'url('+require('@/assets/image/whitebag.png')+')'}"></div>
                                     <v-icon class="close" size="15px" color="#000">mdi-close-circle</v-icon>
                                    <div>
                                        <h5>Elit massa diam</h5>
                                        <p>Color: <span>White</span> </p>
                                        <p>Size: <span>XL</span> </p>
                                    </div>  
                                </div>
                            </td>
                        </th>
                        <th>
                            <td>
                               <h4>$32.00</h4>
                            </td>
                        </th>
                        <th>
                            <td>
                               <select>
                                   <option value=""></option>
                                   <option value="1">1</option>
                                   <option value="2">2</option>
                                   <option value="3">3</option>
                               </select>
                            </td>
                        </th>
                        <th>
                            <td>
                              <h4>‎£219.00</h4>
                            </td>
                        </th>
                    </tr>
                     <tr>
                        <th>
                            <td>
                                <div class="d-flex align-items-start justify-content-start content-wrap text-left">
                                    <div class="image" :style="{backgroundImage:'url('+require('@/assets/image/tablebag.png')+')'}"></div>
                                     <v-icon class="close" size="15px" color="#000">mdi-close-circle</v-icon>
                                    <div>
                                        <h5>Elit massa diam</h5>
                                        <p>Color: <span>Brown</span> </p>
                                        <p>Size: <span>XL</span> </p>
                                    </div>  
                                </div>
                            </td>
                        </th>
                        <th>
                            <td>
                               <h4>$32.00</h4>
                            </td>
                        </th>
                        <th>
                            <td>
                               <select>
                                   <option value=""></option>
                                   <option value="1">1</option>
                                   <option value="2">2</option>
                                   <option value="3">3</option>
                               </select>
                            </td>
                        </th>
                        <th>
                            <td>
                              <h4>‎£219.00</h4>
                            </td>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <td>
                               <div class="btn">Update Curt</div>
                            </td>
                        </th>
                        <th>
                            <td>
                               
                            </td>
                        </th>
                        <th>
                            <td>
                              
                            </td>
                        </th>
                        <th>
                            <td>
                              <div class="btn">Clear Curt</div>
                            </td>
                        </th>
                    </tr>
                </tbody>
            </table>
               </div>
               <div class="col-12 col-lg-3">
                   <div>
                       <h3>Cart Totals</h3>
                       <div class="card">
                           <div class="card-body">
                               <div class="top d-flex align-items-center justify-content-between">
                                   <h5>Subtotals:</h5>
                                   <h5>‎£219.00</h5>
                               </div>
                                <div class="top d-flex align-items-center justify-content-between">
                                   <h5>Totals:</h5>
                                   <h5>‎£325.00</h5>
                               </div>
                               <p class="paragh-text"> <v-icon size="30px" color="#06F2DB">mdi-circle-medium</v-icon> Shipping & taxes calculated at checkout</p>
                               <router-link to="/order">
                               <div class="btn order">Proceed To Checkout</div>
                               </router-link>
                           </div>
                       </div>
                   </div>
                   <div class="second_box">
                       <h3>Calculate Shopping</h3>
                       <div class="card">
                           <div class="card-body">
                               <div class="top d-flex align-items-center justify-content-between">
                                  <v-text-field
                                    dense
                                    placeholder="Bangladesh"
                                    :rules="rules"
                                    counter="25"
                                ></v-text-field>
                               </div>
                                <div class="top d-flex align-items-center justify-content-between">
                                   <v-text-field
                                   dense
                                    placeholder="Mirpur Dhaka - 1200"
                                    :rules="rules"
                                    counter="25"
                                ></v-text-field>
                               </div>
                                <div class="top d-flex align-items-center justify-content-between">
                                   <v-text-field
                                   dense
                                    placeholder="Postal Code"
                                     :rules="rules"
                                    counter="25"
                                ></v-text-field>
                               </div>
                               <div class="btn proceed">Calculate Shiping</div>
                           </div>
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
        name:"CartSectionB",
         data () {
      return {
        rules: [v => v.length <= 25 || 'Max 25 characters'],
        wordsRules: [v => v.trim().split(' ').length <= 5 || 'Max 5 words'],
      }
    },
    }
</script>

<style lang="scss" scoped>
.wrapper{
    margin: 4rem 0rem;
    margin-bottom: 8rem;
}
table{
    width: 100%;
}
table thead tr th{
    width:calc(100%/4);
    height: 40px;
    font-family:$bold;
    font-style: normal;
    font-weight: bold;
    color: $primary;
    font-size: 18px;
    line-height: 20px;
}

table tbody tr th td{
    text-align: center;
}
table tbody tr{
border-bottom: 1px solid $secondary;
}
table tbody tr:nth-child(6){
border-bottom: none!important;
}
.content-wrap{
    margin-top: 2rem;
    position: relative;
}
.close{
    position: absolute;
    left: 3rem;
    top: -0.25rem;
}
.image{
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 60px;
    height: 60px;
    margin-right: 1rem;
}
h5,h4,h3{
font-family:$regular;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 14px;
color: $primary;
}
h3{
    font-size: 18px;
    line-height: 20px;
    text-align: center;
    margin-bottom: 2.5rem;
    margin-top: 0.45rem;
}
.second_box h3{
    margin-bottom: 1rem;
    margin-top: 1rem;
}
p{
font-family:$regular;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 14px;
color: $primary;
}
p{
    line-height: 9px;
}
p span{
    color: $secondary;
}
select{
    border: 1px solid $secondary;
    border-radius: 5px;
    width: 30px;
    font-family:$regular;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 14px;
    color: $primary;
    outline: none;
    height: 30px;
    padding-left: 0.45rem;
}
.btn{
font-family:$regular;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 16px;
color: $secondary;
background: $primary!important;
padding:0.75rem 1.5rem;
margin-top: 2rem;
}
.card{
    background: $lightsecondary;
    border: none;
    width: 100%;
    border-radius: 5px;
    padding-top: 1rem;
    padding-bottom:1.1rem;
}
.second_box .card{
    padding-bottom:1rem;
}
.paragh-text{
font-family:$regular;
font-style: normal;
font-weight: normal;
font-size: 10px;
line-height: 14px;
margin-top: -0.85rem;
color: $primary;
}
.top{
    margin-bottom: 2rem;
    border-bottom: 1px solid $secondary;
}
.second_box .top{
     border-bottom:none;
     margin-bottom:0.95rem;
}
.btn.proceed{
    width: 100%;
    margin-top: 0.35rem;
}
.btn.order{
    color: $primary;
    background: $secondary!important; 
    width: 100%;
}

@media(max-width: 500px){
    .wrapper{
        width: 100%;
        overflow: scroll;
        overflow-y: scroll;
    }
    .wrap{
        width: 750px;
    }
}
</style>