$(document).ready(function()
{
    $(".arr").mouseenter(function(){
        $(this).children().last().animate({height:"385px"});
    }).mouseleave(function(){
        $(this).children().last().animate({height:"120px"});
    })
});

//左右滚动的图片
$(function(){//页面一加载就执行
    function scroll() {
        var flag = "left";
        var wraper = $("div#recommend");
        var prev = $("div.prev");
        var next = $("div.next");
        var img = $("div.recommend_ul").find("ul");
        var w = 250;
        next.click(function(){
                img.animate({ "margin-left":"-250px" },function(){
                img.find("li").eq(0).appendTo(img);
                img.css({ "margin-left":0});

            });
            flag = "left";
        });
        prev.click(function(){
            img.find("li:last").prependTo(img);
            img.css({ "margin-left":"-250px" });
            img.animate({ "margin-left":0 });
            flag = "right";
        });
            var ad=setInterval(function(){ flag == "left" ? next.click():prev.click()},2000);
            wraper.hover(function(){clearInterval(ad);},function(){ad = setInterval(function (){ flag == "left" ? next.click():prev.click()},2000);});
        }

    scroll();
})