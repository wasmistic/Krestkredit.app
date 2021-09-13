<template>
    <div>
          <button class="btn app-btn" :style="{backgroundColor:color,width:width,height:height,
         fontWeight:font_weight,fontSize:font_size,color:text_color,borderColor:border_color,borderWidth:border_width,borderStyle:border_style }" @click.prevent="action">{{text}}</button>
    </div>
</template>
<script>
export default {
    name:"Buttons",
    props:{
        action:{type:Function},
        color:{required:true,},
        text:{type:String},
        height:{type:String,default:'50px'},
        width:{type:String,default:'152px'},
        font_weight:{type:String,default:'500'},
        font_size:{type:String,default:'18px'},
        text_color:{type:String,default:'#fff'},
        border_color:{type:String,},
        border_width:{type:String},
        border_style:{type:String, default:'solid'}
    }
}
</script>
<style lang="scss" scoped>
    .app-btn{
        // padding: 25px 45px;
        border-radius: 201px;
        font-size: 18px;
        line-height: 20px;
        font-family:$interregular!important;
        font-style: normal;
        font-feature-settings: 'salt' on, 'liga' off;
        margin-inline: auto;
        // display: flex;
        // flex-direction: row;
        // justify-content: center;
        // align-items: center;
         border: none;
    }
   


   @media(max-width: 500px){
       .app-btn{
           Width:152px!important;
           height: 48px!important;
           padding: 6px 37px!important;
           border-radius: 50px!important;
           font-weight: 600!important;
            font-size: 14px!important;
            line-height: 36px!important;
            white-space: pre;
       }
   }
</style>