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
    logOut();

});
function logOut(){
    $("#left-navibar_logout").click(function(){
        sessionStorage.user=undefined;
        window.location.href="login.html";
        $("#left-navibar_logout").hide();
    });
}