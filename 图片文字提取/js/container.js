/**
 * Created by lenovo on 2018/5/23.
 */
function htmlScroll(num, id){
    var tem = $("#skipmenu-row > a");
    for(var i=0;i<tem.length;i++)
    {
        tem[i].style="color: #00a1df;text-decoration: none;border:none";
    }
    tem[num-1].style="color: #23527c; text-decoration: none;border-bottom: 1px solid #23527c;";
    jQuery("html,body").animate({
        scrollTop : (jQuery("#"+id).offset().top-120)
    },500);
}
