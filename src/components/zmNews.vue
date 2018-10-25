<template>
    <div id="news">
    <div class="news">
        <div class="top">
            <img src="../images/news_02.jpg" width="100%" alt="">
        </div>
        <div class="main" v-for="(item,index) in list">
            <table></table>
            <h2>{{title[index]}}</h2>
            <div class="content">
                <ul class="clearfix">
                    <li v-for="(val,i) in item">
                        <news-part :val="val"></news-part>
                        <div class="bottom clearfix">
                            <span>{{val.data}}</span>
                            <a href="#">详情</a>
                        </div>
                    </li>
                </ul>
            </div>
             <div class="clearfix buttons">
                    <a href="#">+查看更多</a>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
import newsPart from './zmNewsPart';
    export default{
        data(){
            return{
                title:["优格报道",'行业新闻',"微信头条"],
                list:[
                    [
                        {
                            title:'夏季新品上市，优格花园大家庭增加新成员！',
                            detail:"夏天过去三分之二的时候优格花园又迎来了两位新成员趣味组合碰撞出多层次的惊喜/ 黑糖珍珠优格冰淇淋 /黑糖珍珠脏脏茶 /现已登陆全国各大门店打卡，走 . . .",
                            img:require('../images/1-1.jpg'),
                            data:'2018-08-28'
                        },
                        {
                            title:'遇见栈桥广场的另一道风景线',
                            detail:"6月19，优格花园一车一店再次以全新形象于青岛市栈桥风景区隆重开业！店面开业不到一周，取得喜人的优异业绩和广大消费者、游客极高的好评！由于极具“气质” . . .",
                            img:require('../images/1-2.jpg'),
                            data:'2018-09-19'
                        },
                        {
                            title:'一车一店”顽皮巴士”-青岛佳世客店正式开业',
                            detail:"5.1期间优格花园首创车店——顽皮巴士，在青岛合肥路佳世客正式开业，顽皮巴士作为优格花园一车一店项目，定位于商场中岛店，通过3个月市场调研，设计而成。 . . .",
                            img:require('../images/1-3.jpg'),
                            data:'2018-05-19'
                        }
                    ],
                    [
                        {
                            title:'开一家火爆的冰淇淋店要需要做什么筹办？',
                            detail:"夏季就要到了，意味着这一年冰淇淋的旺季就要到了，冰淇淋在餐饮市场不绝很受迎接。不仅如此，冰淇淋投资小，答谢高，更是许多投资者青睐的项目。许多的投资商都 . . .",
                           img:require('../images/1-4.jpg'),
                           data:'2018-06-24'
                        },
                        {
                            title:'“网红”商品藏隐患：发光饮料冒烟冰淇淋或有食品安全问题',
                            detail:"暑期将至，一些受年轻人欢迎的“网红”吃喝玩层出不穷。比如“冒烟冰淇淋”、“发光饮料”、“发光泡泡气球”等网红商品更是受到孩子们的追捧，在实体店和网店都 . . .",
                            img:require('../images/1-5.jpg'),
                            data:'2018-04-19'
                        },
                        {
                            title:'冰淇淋的七种吃法，冰淇淋单店里吃不到！！',
                            detail:"如今有很多人都热衷于甜品，特别是冰淇淋，现在已经成为了一年四季都十分热销的一种美味。今天小编就为大家推荐几种冰淇淋的新吃法！偷偷告诉您，冰淇淋店里是吃 . . .",
                            img:require('../images/1-6.jpg'),
                            data:'2018-08-19'
                        }
                    ],
                    [
                        {
                            title:'腊八节，吃货们看过来！',
                            detail:"2018.1.24 腊月初八•周三腊●八宜欢喜悲伤忌“小优小优你别馋，过了腊八就是年”各位小优的月半友们，腊八一到，年关开始春节就要来啦~你们准备好新 . . .",
                            img:require('../images/1-7.jpg'),
                            data:'2018-06-19'
                        },
                        {
                            title:'各种冰淇淋、冻酸奶冰淇淋英语怎么说？',
                            detail:"大热天，最适合吃冰淇淋！你知道各类冰淇淋英语怎么说吗？今天小优和格格就要跟大家分享！各种口味的冰淇淋英语怎么说？口味是flavor √，不是taste . . .",
                            img:require('../images/1-8.jpg'),
                            data:'2018-07-19'
                        },
                        {
                            title:'冰淇淋粉怎样选 优格小编考诉你',
                            detail:"夏天必不可少的降温神器，除了空调之外，还有各种无论颜值还是口味都很丰富、让女神们和小盆友垂涎三尺的冰淇淋。1、种类目前市场上的冰淇淋主要有两类：软式冰 . . .",
                            img:require('../images/1-9.jpg'),
                            data:'2018-05-03'
                        }
                    ]
                ]
            }
        },
        components: {
            newsPart
        }
    }
</script>
<style scoped>
    .clearfix::after{
        display: block;
        content: '';
        height: 0;
        overflow: hidden;
        clear: both;
    }
    .clearfix{
        zoom: 1;
    }
    
    #news{
        width: 100%;
        margin-bottom:20px;
    }
    .news{
         background:#f1eae8;
    }
    img{
        height: 250px;
    }
    .main{
        width: 1200px;
        background: #fff;
        margin: 10px auto 20px auto;
    }
    .main .buttons{
        padding: 0 0 30px 0;
    }
    .main .buttons a{
        width: 100px;
        margin: 0 auto;
        color: #e4654b;
        font-weight: 500;
        border:1px solid #e4654b;
        padding: 5px 10px;
        display: block;
    }
    .main h2{
        margin-top: 38px;
        text-align: center;
        font-weight: 400;
        padding-bottom: 10px;
        border-bottom:2px solid #e4654b;
    }
    .main h2::before{
        display: table;
        content: '';
    }
    .main .content{
        width: 1110px;
        /* height: 455px; */
        margin: 30px auto 40px auto;
    }
    li{
        width: 330px;
        list-style: none;
        white-space: wrap;  
        padding: 10px 10px  0 10px;     
        border: 1px solid #ccc;
        float: left;
    }
   li:nth-child(2n){
       margin:0 15px;
   }
    .bottom{
        width: 100%;
        height: 60px;
        border-top: 1px solid #ccc;
        line-height: 60px;
    }
    .bottom span{
        float: left;
    }
    .bottom a{
        height: 30px;
        margin-top: 15px;
        line-height: 30px;
        color: #e4654b;
        cursor: pointer;
        border: 1px solid #e4654b;
        float: right;
        padding: 0 30px;
        border-radius: 20px 20px 20px 20px;
    }
</style>

