/**
 * Created by JOYyuan on 16/11/7.
 */
var user = sessionStorage.user;
$(document).ready(function () {
    if (user == undefined) {
        $("#left-navibar_logout").hide();
    } else {
        $("#left-navibar_logout").show();
        $("#left-navibar_login").html(user);
    }
    webClock();
    logOut();

});
function webClock() {
    var nowTime = getSeverTime();
    var now1 = new Date(nowTime);
    var s1 = now1.getTime();
    console.log(s1);
    var endjl = new Date("2016/11/12 00:00")


}
function getSeverTime() {
    var xmlHttp = new XMLHttpRequest();
    if (!xmlHttp) {
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlHttp.open("HEAD", location.href, false);
    xmlHttp.send();
    var severTime = new Date(xmlHttp.getResponseHeader("Date"));
    return severTime;
}
function logOut(){
    $("#left-navibar_logout").click(function(){
        sessionStorage.user=undefined;
        window.location.href="login.html";
        $("#left-navibar_logout").hide();
    });
}