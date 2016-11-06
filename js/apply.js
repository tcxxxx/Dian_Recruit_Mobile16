var count;
$(document).ready(function () {
    getInformation();

});

function isPhone(obj) {
    var reg = /^1[3|4|5|7|8][0-9]{9}$/; //验证规则
    var flag = reg.test(obj); //true
    return flag;
}
function isName(obj) {
    var reg = / [\u4e00-\u9fa5] /;
    var flag = reg.test(obj);
    return flag;
}
function nameValidate(username) {
    if (username == "") {
        console.log("姓名不能为空");
    } else {
        var nameBool = isName(username);
        if (nameBool) {
            count++;
        } else {
            alert("非中文字符！")
        }
    }
}
function getInformation() {
    $("#submit").click(function () {
        var sexes = document.getElementsByName("sex");
        var sex;
        for (var i = 0; i < sexes.length; i++) {
            if (sexes[i].checked) {
                sex = sexes[i].value;
            }
        }
        var grades = document.getElementsByName("grade");
        var stuGrade;
        for (var k = 0; k < grades.length; k++) {
            if (grades[k].checked) {
                stuGrade = grades[k].value;
            }
        }
        var failNum = document.getElementsByName("failure");
        var failCourse;
        for (var j = 0; j < failNum.length; j++) {
            if (failNum[j].checked) {
                failCourse = failNum[j].value;
            }
        }
        var phoneNum = $("#input_tel").val();
        var applyName = $("#input_name").val();
        nameValidate(applyName);
        var uid = $("#input_uid").val();
        var email = $("#input_mail").val();
        var major = $("#input_major").val();
        var gpa = $("#input_gpa").val();
        var prize = $("#input_prizes").val();
        var tech = $("#input_tech").val();
        var simpleInfo = $("#input_intro").val();
        var future = $("#input_join").val();
        sendInformation(applyName, uid, sex, phoneNum, email, major, stuGrade, failCourse, gpa, prize, tech, simpleInfo, future);
    });
}
function sendInformation(name, uid, sex, phone, email, major, level, fail_course, score, champion, skills, featueres, plan) {
    $.post("http://120.76.117.125:90/user/getuserinfo", {
        "name": name,
        "uid": uid,
        "sex": sex,
        "phone": phone,
        "email": email,
        "major": major,
        "level": level,
        "fail_course": fail_course,
        "score": score,
        "champion": champion,
        "skills": skills,
        "features": featueres,
        "plan": plan
    }, function (res) {
        var result = JSON.parse(res);
        var msg = result.msg;
        alert(msg);
        window.location.href = 'loggedIn.html';
    });

}