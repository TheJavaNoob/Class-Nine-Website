function switchPic(id){
	"use strict";
	alert(id);
}
$(document).ready(function(){
	'use strict';
	$("#head_menu_items").hover(function(){
	},function(){
		$("#head_menu_body").hide();
	});
	$("#head_menu_top").hover(function(){
		$("#head_menu_img img").css("border-color", "#EEEEEE");
		$("#head_menu_expand").css("border-color","#DDDDDD transparent transparent transparent");
	},function(){
		$("#head_menu_img img").css("border-color", "#AAAAAA");
		$("#head_menu_expand").css("border-color","black transparent transparent transparent");
	});
	$("#head_menu_top").click(function(){
		$("#head_menu_body").show();
	});
	$(".event_controls_item").click(function(){
		switchPic($(this).text());
	});
});