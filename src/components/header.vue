<template>
    <div id="header">
        <ul class="header">
            <span>
                <a href="#">
                    <img src="../images/logo_03.png" alt="" >
                </a>
            </span>
            <li ><router-link to="/home">首页</router-link></li>

            <li><a href="#" target="_blank">关于优格</a></li>

            <li><router-link to="/news" target="_blank">优格新闻</router-link>
            </li>

            <li><router-link to="/product" target="_blank">明星产品</router-link></li>

            <li><router-link to="/home" target="_blank">店面展示</router-link></li>

            <li><router-link to="/home" target="_blank">投资创业</router-link></li>

            <li><router-link to="/home" target="_blank">一车一店</router-link></li>

            <li><router-link to="/contact" target="_blank">联系我们</router-link></li>
        </ul>
        <div class="shutter">
            <div class="shutter-img">
                <a href="#" data-shutter-title="Iron Man"><img src="../images/1.jpg" alt="#"></a>
                <a href="#" data-shutter-title="Super Man"><img src="../images/2.jpg" alt="#"></a>
                <a href="#" data-shutter-title="The Hulk"><img src="../images/3.jpg" alt="#"></a>
                <a href="#" data-shutter-title="The your"><img src="../images/4.jpg" alt="#"></a>
            </div>
            <ul class="shutter-btn">
                <li class="prev" style="border-bottom:0"></li>
                <li class="next" style="border-bottom:0"></li>
            </ul>
    
        </div>
    </div> 
</template>
<script>
       import $ from 'jquery'
       import shutter from "../js/shutter.js"
       import velocity from "../js/velocity.js"
       export default{
            mounted(){
                $('.shutter').shutter({
                    shutterW: 1366, // 容器宽度
                    shutterH: 358, // 容器高度
                    isAutoPlay: true, // 是否自动播放
                    playInterval: 3000, // 自动播放时间
                    curDisplay: 3, // 当前显示页
                    fullPage: false // 是否全屏展示
                });
            }
       }
 </script>
<style scoped>   
.header {
    display: flex;
    max-width: auto;
    height: 52px;
    list-style: none;
    margin-top: 2rem;
    justify-content: space-around;
    z-index: 1000;
    margin-bottom: -20px;
}

a {
    text-decoration: none;
    color: #000;
}

.header li {
    position: relative;
	margin-top:17px;
    padding: 15px;
    font-size: 15px;
    font-weight: bold;
    color: #000;
    line-height: 1;
    transition: 0.2s all linear;

}

.header li::before {
    content: "";
    position: absolute;
    top: 0;
    left: 100%;
    width: 0;
    height: 100%;
    border-bottom: 2px solid #000;
    transition: 0.2s all linear;
}

 .header li:hover::before {
    width: 100%;
    top: 0;
    left: 0;
    transition-delay: 0.1s;
    border-bottom-color: #000;
    z-index: -1;
}

.header li:hover~li::before {
    left: 0;
}
.header li:active {
    background-color: #ddd;
    color: #fff;
}

.header li:first-child{
    margin-top: -23px;
}

ul, li { list-style: none; }

.shutter {
  overflow: hidden;
  width: auto;
  height: 430px !important;
  position: relative;
  margin-top:50px;
}
.shutter-img {
  z-index: 1;
}
.shutter-img,
.shutter-img a {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.shutter-img a {
  cursor: default;
}
.shutter-img a > img {
  width: 100%;
  height: 100%;
}
.shutter-img .created {
  overflow: hidden;
  position: absolute;
  z-index: 20;
}
.shutter-btn {}
.shutter-btn li {
  position: absolute;
  z-index: 2;
  top: 50%;
  width: 49px;
  height: 49px;
  margin-top: -25px;
  cursor: pointer;
}
.shutter-btn li.prev {
  left: 20px;
  background: url(../images/shutter_prevBtn.png) no-repeat 0 -49px;
}
.shutter-btn li.next {
  right: 20px;
  background: url(../images/shutter_nextBtn.png) no-repeat 0 -49px;
}
.shutter-desc {
  position: absolute;
  z-index: 2;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 36px;
  background: url(../images/shutter_shadow.png) repeat;
}
.shutter-desc p {
  padding-left: 20px;
  line-height: 36px;
  color: #fff;
  font-size: 14px;
}
</style>