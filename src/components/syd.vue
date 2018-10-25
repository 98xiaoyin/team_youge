<template>
   <div id="syd">
         <div class="contact">
            <!-- 红线 -->
            <div class="line_top"></div>
            <!-- 内容 -->
            <div class="container">
                <!-- 地图 -->
                <div id="map"></div>
                <!-- 介绍 -->
                <div class="yg_it">
                    <img src="../images/lxwm_logo.png">
                    <div class="yg_nr">
                        <b>青岛优格花园餐饮管理股份有限公司</b>(股票代码Stock
                        Code：833307）
                        <br />
                        Qingdao Yogurt Garden Restaurant
                        Management Co.,Ltd

                    </div>
                    <div class="clear_float"></div>
                </div>
                <div class="yg_it2">
                    <span><img src="../images/lxwm_phone.png"></span>
                    <span><b>投资电话：4001-575-808</b>
                        <br>Merchants Tel: 4001-575-808
                    </span>
                </div>
                <div class="yg_it2">
                    <span><img src="../images/lxwm_email.png"></span>
                    <span><b>邮箱：yogurt@yogurtchina.net</b>
                        <br>E-mail: yogurt@yogurtchina.net
                    </span>
                </div>
                <div class="yg_it2">
                    <span><img src="../images/lxwm_dizhi.png"></span>
                    <span><b>中国 · 山东省青岛市市南区山东路9号深业大厦B座19AB</b>
                        <br>No. 19AB , Shenye Building, No.9
                        Shandong Road, Shinan District, Qingdao
                        , China 266052
                    </span>
                </div>
            </div>
        </div>
   </div>
</template>
<script>
        import BMap from 'BMap';
        export default{
            mounted() {
                 // 创建地图实例  
                var map = new BMap.Map("map");
                // 创建点坐标
                var point = new BMap.Point(120.401764,36.069273);
                // 初始化地图，设置中心点坐标和地图级别   1-19
                map.centerAndZoom(point, 15);
                //导航控件
                map.addControl(new BMap.NavigationControl());
                //缩放控件
                map.addControl(new BMap.ScaleControl());
                //概览图控件
                map.addControl(new BMap.OverviewMapControl());
                //地图类型控件
                map.addControl(new BMap.MapTypeControl());
                //添加覆盖物
                var mk = new BMap.Marker(point);
                map.addOverlay(mk);
                //允许鼠标滚轮放大缩小
                map.enableScrollWheelZoom(true);

                var label = new BMap.Label("青岛优格花园餐饮管理股份有限公司",{offset:new BMap.Size(20,-10)});
                mk.setLabel(label);
            },
        }
</script>
<style scoped>
    .contact {
        width: 1200px;
        margin: 0 auto;
        background: #FFFFFF;
    }

    /* 红线 */
    .line_top {
        width: 100%;
        height: 0;
        padding-top: 30px;
        border-bottom: 1px solid #f37052;
        margin-bottom: 30px;
    }

    /* 内容 */
    .contact .container {
        width: 1024px;
        margin: 0 auto;
        padding-bottom: 50px;
    }
    /* 内容：一地图 */
    #map{
        width: 100%;
        height: 478px;
        max-height: 478px;
        min-height: 400px;
        border:2px solid #eeeeee;  
    }
    .yg_it{
        padding-top: 50px;
        padding-bottom: 20px;
        border-bottom: 1px dashed #DEDEDE;
    }
    .yg_it img{
        float: left;
        margin-top: -33px;
        padding-right: 10px;
    }
    .yg_it .yg_nr{
        float: left;

    }
    .clear_float{
        clear: both;
    }
    .yg_it2{
        width: 100%;
        padding-top: 20px;
    }
    .yg_it2 span:first-child{
        width: 20%;
        text-align: right;
        padding-right: 10px;
    }
    .yg_it2 span{
        display: inline-block;
        vertical-align: middle;
    }

</style>