var events_curr = 1;
function switchPic(control){
	"use strict";
	var sel_val = Number(control.text());
	var sel = $("#event" + control.text());
	var curr = $("#event" + events_curr);
	if(sel_val === events_curr){return;}
	if(sel_val > events_curr){
		sel.show();
		sel.css("left", "-100%");
		curr.animate({left:'100%'}, 1000);
		sel.animate({left:'0'}, 1000, function(){
			curr.hide();
		});
	}else{
		sel.show();
		sel.css("left", "100%");
		curr.animate({left:'-100%'}, 1000);
		sel.animate({left:'0'}, 1000, function(){
			curr.hide();
		});
	}
	events_curr = sel_val;
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
		switchPic($(this));
	});
	$(".pic_item").hover(function(){
		var mask = $(this).children(".pic_mask");
		mask.show();
		mask.animate({top:"0%"}, 500);
	},function(){
		var mask = $(this).children(".pic_mask");
		mask.animate({top:"-100%"}, 500, function(){
			mask.hide();
		});
	});
});