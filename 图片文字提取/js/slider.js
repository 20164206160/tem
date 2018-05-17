/**
 * Created by lenovo on 2018/5/13.
 */

$(window).load(function(){
    $('.slider')._TMS({
        preset:'zabor',
        easing:'easeOutQuad',
        duration:800,
        pagination:true,
        banners:true,
        waitBannerAnimation:false,
        slideshow:6000,
    })
    $('.pagination li').hover(function(){
        if (!$(this).hasClass('current')) {
            $(this).find('a').stop().animate({backgroundPosition:'0 0'},600,'easeOutExpo', function(){$(this).parent().css({backgroundPosition:'-20px 0'})});
        }
    },function(){
        if (!$(this).hasClass('current')) {
            $(this).css({backgroundPosition:'0 0'}).find('a').stop().animate({backgroundPosition:'-250px 0'},600,'easeOutExpo');
        }
    })
})
