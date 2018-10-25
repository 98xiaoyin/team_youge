<template>
        <div class="bk">
            <div style="padding-top:35px"><a href="#"><img src="../images/logo_03.png" alt="" srcset=""></a></div>
            <div class="fot">
                <div><a href="#">品牌新闻</a></div>
                <div><a href="#">运营至此</a></div>
                <div><a href="#">投资政策</a></div>
                <div><a href="#">招聘英才</a></div>
                <div><a href="#">联系我们</a></div>
            </div>
            <div class="fot" >
                <ul>
                    <li>招商电话：4001-575-808</li>
                    <li>邮箱：yogurt@yogurtchina.net</li>
                    <li>优格花园地址：中国 · 山东省青岛市市南区山东路9号深业大厦B座19AB</li>
                </ul>
            </div>
            <div class="erwei"><img src="../images/swf (1).jpg" alt="">
                <p>1</p>
            </div>
            <div class="erwei"><img src="../images/swf (2).jpg" alt="">
                <p>2</p>
            </div>
            <div class="erwei"><img src="../images/swf (3).png" alt="">
                <p>3</p>
            </div>
        </div>
</template>
<script>
    export default{

    }
</script>
<style scoped>
    .bk{
        max-width: auto;
        height: 280px;
        margin-top: 20px;  
    }
    .fot{          
        margin-left: 60px;
        padding-top: 10px;
    
    }
    .bk div a{
        margin-left: 20px;
        text-decoration: none;
        font-size: 14px;
        font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        color: #000;
    }
    .fot>div>a:hover{
        color: orange;
    }
    .bk>div{
        float: left;
        justify-content: space-between
    }
    .fot>ul>li{
        padding-top: 16px;
            font-size: 14px;
        list-style: none;
        margin-left: 60px;
    }
    .fot>div{
        padding-bottom: 16px;
    }
    .erwei{
        position: relative;
        margin-top: 15px;
        padding-left:60px;
    }
    .erwei>p{
        text-align: center;
    }
</style>