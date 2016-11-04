$(document).ready(function(){
	$("#login_btn").click(function(){
	})

	/* bottom border style */
	$("#login").click(function(){
		$("#login_bottom").css("border-bottom","1px solid #FB9100");
		$("#register_bottom").css("border-bottom","	none");

		$("#loginarea").css("display","block");
		$("#registerarea").css("display","none");
	})

	$("#register").click(function(){
		$("#register_bottom").css("border-bottom","1px solid #FB9100");
		$("#login_bottom").css("border-bottom","	none");
	
		$("#loginarea").css("display","none");
		$("#registerarea").css("display","block");
	})

})