/**
 * Created by lenovo on 2018/5/13.
 */
var a= $(".drop_zone").get(0);
var p =$(".drop_zone p.tis");
var zfile;
//进入时
a.ondragenter=function(){
    if(p.html()!=='')
    {
        p.html("可以释放");
    }
};
//离开
a.ondragleave=function(){
    if(p.html()!=='')
    {
        p.html("将文件拖拽到这里");
    }

};
//在内部
a.ondragover=function(e){
    e.preventDefault();//设置浏览器不打开
    e.stopPropagation();
};
//释放
a.ondrop=function(e){
    e.preventDefault();
    e.stopPropagation();
    var fs = e.dataTransfer.files;//获取文件集合
    for(var i=0;i<fs.length;i++)
    {
        var _type=fs[i].type;
        if(_type.indexOf("image")!=-1){
            var fd = new FileReader();
            fd.readAsDataURL(fs[i]);
            fd.onload= function () {
                var oImg = $("<img scr='' style='width: 300px;height: 100px;float: inherit'/>");
                oImg.attr("src",this.result);
                $(".drop_zone").append(oImg);
                p.html("");
                $('#result').css('height', $('.drop_zone').innerHeight());
            }
        }
        else {
            alert("请上传图片文件");
        }
    }
};
$('#button2').mousedown(function(){
    $('#button2').css('font-weight',600);
});
$('#button2').mouseup(function(){
    $('#button2').css('font-weight',500);
});
$('#button2').mouseout(function(){
    $('#button2').css('font-weight',500);
});
$('#filechooser').on("change",function(e){
    var files = e.target.files;
    for(var i=0;i<files.length;i++){
        var fd = new FileReader();
        fd.readAsDataURL(files[i]);
        fd.onload= function () {
            var oImg = $("<img scr='' style='width: 300px;height: 100px;float: inherit'/>");
            oImg.attr("src",this.result);
            $(".drop_zone").append(oImg);
            p.html("");
            $('#result').css('height', $('.drop_zone').innerHeight());
        }
    }
});