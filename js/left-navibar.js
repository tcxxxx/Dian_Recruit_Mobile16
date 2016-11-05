$(document).ready(function(){	
	/* 左侧导航栏 */
	$("#menu").click(function(){
		$(".left-navibar").show("slide",666);

		$( '#' + $("#pagename").text() )
			.css("border-right","3px solid #FB9100")
			.css("padding-left","10%")
	})

	$("#left-navibar-bottom").click(function(){
		$(".left-navibar").hide("slide",666);
		$(".left-navibar li").css("border","none");
		$(".left-navibar li").css("padding-left","0");	
	})	

	$(".left-navibar li").click(function(){
		$(".left-navibar li").css("border","none");
		$(".left-navibar li").css("padding-left","0");		
		$(this).css("border-right","3px solid #FB9100");
		$(this).css("padding-left","10%");
		/*页面跳转*/		
	})
})