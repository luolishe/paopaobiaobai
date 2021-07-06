var closeWaterMarkC = setTimeout(function () {
    closeWaterMark();
},2000);

function setWaterMark(){
	document.write("<div id='WaterMark'><div class='bg'></div><div class='logo'><a href='/templates.html'><img src='/source/amaze-2.7.2/img/logo.png'/></a><div id='waterMark_main'><br><i class=\"am-icon-circle-o-notch am-icon-spin\"></i><br><br></div></div></div>");

}

function closeWaterMark(){
    $('#WaterMark').fadeOut(100,function(){
        try {
            initCodeData();
        }catch (e) {}
    });
}

function checkNum(){
    if($('.switch-anim').prop('checked')){
        console.log("启用插件");
    }else{
        console.log("关闭");
    }
}

var bp = document.createElement('script');
var curProtocol = window.location.protocol.split(':')[0];
if (curProtocol === 'https') {
    bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
}
else {
    bp.src = 'http://push.zhanzhang.baidu.com/push.js';
}
var s = document.getElementsByTagName("script")[0];
s.parentNode.insertBefore(bp, s);
