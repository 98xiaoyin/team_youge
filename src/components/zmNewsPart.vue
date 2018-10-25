<template>
    <div id="newsPart">
        <div class="list-li">
            <img :src="val.img" alt=""/>
            <h4>{{val.title}}</h4>
            <p>{{val.detail}}</p>
        </div>
    </div>
</template>
<script>
    export default{
        props: ['val'],
        mounted () {
            console.log(this.val);  
        }
    }
</script>
<style scoped>
     img{
        width: 310px;
        height: 205px;  
        display:block;
        margin:0 auto;
    }
    h4{
        margin-top: 38px;
        font-weight: 800;
        height: 46px;
    }
    p{
        color: #474747;
    }

</style>

