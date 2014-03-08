$(function(){
	//tab
	$(".ratio-choice a").on("click", function() {
		$(".ratio-choice li a").removeClass("current");
		$(".ratio-display").hide();
		$(this).addClass("current");
		$($(this).attr("href")).fadeToggle();
		return false;
	});
	//numeric only
	$(":input[id^=ratio]").numeric();
	//calculation
	$('#ratio4').bind('keyup',function(){
		var num = $(this).val();
		var even_num = (Math.floor((num / 4 * 3)*100))/100;
		if(even_num < 0){
			var even_num = "";
		}
		$('#ratio3').val(even_num);
	});
	$('#ratio3').bind('keyup',function(){
		var num = $(this).val();
		var even_num = (Math.floor((num / 3 * 4)*100))/100;
		if(even_num < 0){
			var even_num = "";
		}
		$('#ratio4').val(even_num);
	});
	$('#ratio16').bind('keyup',function(){
		var num = $(this).val();
		var even_num = (Math.floor((num / 16 * 9)*100))/100;
		if(even_num < 0){
			var even_num = "";
		}
		$('#ratio9').val(even_num);
	});
	$('#ratio9').bind('keyup',function(){
		var num = $(this).val();
		var even_num = (Math.floor((num / 9 * 16)*100))/100;
		if(even_num < 0){
			var even_num = "";
		}
		$('#ratio16').val(even_num);
	});
});