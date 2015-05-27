jQuery(document).ready(function(e){
var count_menu_stat=false;
$(".mobile_menu").click(function(event){
	if(count_menu_stat == false){
		$("header .rgt ul").slideDown(600);	
		count_menu_stat = true;
	}else{
		$("header .rgt ul").slideUp(600);	
		count_menu_stat = false;	
	}
	event.stopPropagation();
});
var win_width =$( window ).width();

$(window).resize(function(){
	win_width =$( window ).width();	
});

$(document).click(function(){
	if(win_width <= 680){
		$("header .rgt ul").slideUp(600);
		count_menu_stat = false;	
	}
});
var form_stat = true;
var bottomFix = [120,73,86,248];
$("section .frm h1").click(function(){
	console.log(win_width);
		$(this).addClass("selected");
		
		if(win_width >= 640 && win_width < 768 ){
			if(form_stat == true){
				$(this).parent().animate({
					"bottom":"16"	
				},300);
				form_stat = false;
			}
			else{
				$(this).removeClass("selected");
				$(this).parent().animate({
					"bottom":"-"+bottomFix[0]+"px"		
				},300);	
				form_stat = true;
			}
		}
		
		if(win_width >= 569 && win_width < 640 ){
			if(form_stat == true){
				$(this).parent().animate({
					"bottom":"16"	
				},300);
				form_stat = false;
			}
			else{
				$(this).removeClass("selected");
				$(this).parent().animate({
					"bottom":"-"+bottomFix[0]+"px"		
				},300);	
				form_stat = true;
			}
		}
		
		if(win_width >= 350 && win_width < 569 ){
			if(form_stat == true){
				$(this).parent().animate({
					"bottom":"16"	
				},300);
				form_stat = false;
			}
			else{
				$(this).removeClass("selected");
				$(this).parent().animate({
					"bottom":"-"+bottomFix[0]+"px"		
				},300);	
				form_stat = true;
			}
		}
		
		if(win_width >= 319 && win_width < 350 ){
			if(form_stat == true){
				$(this).parent().animate({
					"bottom":"16"	
				},300);
				form_stat = false;
			}
			else{
				$(this).removeClass("selected");
				$(this).parent().animate({
					"bottom":"-"+bottomFix[3]+"px"		
				},300);	
				form_stat = true;
			}
		}
});



})