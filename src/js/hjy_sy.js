/**
 * Created by Administrator on 2018\10\8 0008.
 */
$(function () {
    var index=0;
    var timer=null;
    var buts=$(".buts span");

    var index1=0;
    var prev=$(".prev");
    var next=$(".next");
    var z1=$(".z1");
    var li=$(".tempWrap .picList li");

    var doo= $(" #short_link .containert a");

    var aBtn=$(".slideTxtBox .hd #navX li");
    var aContent=$(".bd .contact");
/*---------------------------------------------------------------------*/
    /*第一部分*/
    /*轮播*/
     function autoplay(){
         timer=setInterval(function () {
             index++;
             if(index>3) index=0;
             $(".co ul").animate({
                 left:-index* $(".co ul li").first().width()+"px"
             });
             buts.eq(index).trigger("hover");
             buts.eq(index).trigger("click");
         },3000);
    }
    /*按钮*/
     buts.hover(function () {
         var count = $(this).index();
         buts.eq(count).addClass('active').siblings().removeClass('active');
         index=count;
         $(".co ul").finish().animate({left:-$(".co ul li").first().width()*count},500)
     });
     buts.click(function () {
         buts.eq($(this).index()).addClass('active').siblings().removeClass('active');
     });
     autoplay();
     $(".co ul").hover(function () {
         clearInterval(timer);
     },function(){
         autoplay();
     });
/*---------------------------------------------------------------------*/
    /*第二部分*/
    $(".w_box .containert .hint2 .hgroup1 .hcover").hover(function () {
        $(this).css("display","none");
        $(this).siblings("a").mouseout(function(){
            $(this).siblings("div").show();
        })
    });
/*---------------------------------------------------------------------*/
    /*第三部分*/
    /*轮播*/
    function autoplay2(){
        timer2=setInterval(function () {
            index1++;
            if(index1>5) index1=0;
            $(".bd .tempWrap ul").animate({left:-index1*($(".bd .tempWrap ul li").first().width()+12)+"px"});
        },2000);
    }
    autoplay2();
    /*左右按钮*/
    count1=li.length;//获取li的个数 count1=9
    prev.click(function () {//左按钮
        index1--;
        if(index1>=0){
            $(".tempWrap .picList").animate({left:-index1*(li.first().width()+12)+"px"},500);
        }else{
            index1=5;
            $(".tempWrap .picList").animate({left:-index1*(li.first().width()+12)+"px"},500)
        }
    });
    prev.hover(function () {
        clearInterval(timer2);
        $(this).css("background-position","bottom");
    },function(){
        autoplay2();
        $(this).css("background-position","top");
    });
    next.click(function () {//右按钮
        index1++;
        if(index1<(count1)-3){
            $(".tempWrap .picList").animate({left:-index1*(li.first().width()+12)+"px"},500);
        }else{
            index1=0;
            $(".tempWrap .picList").animate({left:-index1*(li.first().width()+12)+"px"},500)
        }
    });
    next.hover(function () {
        clearInterval(timer2);
        $(this).css("background-position","bottom");
    },function(){
        autoplay2();
        $(this).css("background-position","top");
    });
    /*图片下类似按钮的鼠标悬停样式*/
    li.hover(function () {
        $(this).find(z1).css("background-color","#F37052");
        $(this).find(z1).css("color","white");
    }, function () {
        $(this).find(z1).css("background-color","white");
        $(this).find(z1).css("color","#F37052");
    });
/*---------------------------------------------------------------------*/
    /*第四部分*/
    $(".containert .img_box img").hover(function () {
        $(this).siblings(".hcover01").show();
        $(this).siblings(".hcover01").mouseleave(function(){
            $(this).hide();
        })
    });
/*---------------------------------------------------------------------*/
    /*第五部分*/
    doo.hover(function () {
        $(this).css("background-position","bottom");
        $(this).mouseout(function () {
            $(this).css("background-position","top");
        })
    });
/*---------------------------------------------------------------------*/
    /*第六部分*/
    aBtn.hover(function () {
        ai=$(this).index();
        //上部分的按钮切换的效果
        aBtn.eq(ai).find("a").addClass('on').parent().siblings().find("a").removeClass('on');
        //下部分的div随上部分按钮转换的切换效果
        aContent.eq(ai).addClass('cc1').siblings().removeClass('cc1');
        index=ai;
    })
});