var events_curr = 1;
var events_all = 2;
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
	setInterval(function(){
		if(events_curr === events_all){
			events_curr = 1;
		}else{
			
		}
	}, 5000);
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
	$("#login_close").click(function(){
		$("#login").hide();
	});
	$("#login_close").hover(function(){
		$("#login_close img").attr("src","res/close_activated.png");
	},function(){
		$("#login_close img").attr("src","res/close.png");
	});
	$("#menu_item1").click(function(){
		$("#login").show();
	});
	$("#login_done").click(function(){
		if($("#login_username").val() === ""){
			$("#message p").text("请输入用户名");
			$("#message").show();
			setTimeout(function(){$("#message p").hide();}, 2000);
		}else if($("#login_password").val() === ""){
			$("#message p").text("请输入密码");
			$("#message").show();
			setTimeout(function(){$("#message").hide();}, 2000);
		}else{
			$.ajax({
					type: "GET",
					url: "Login?username="+$("#login_username").val()+"&password="+$("#login_password").val(),
					dataType: "text",
					success: function(data){
						if(data === "done"){
							alert("登录成功");
							location.reload();
						}else if(data === "pass_err"){
							$("#message p").text("登录失败，密码错误");
							$("#message").show();
							setTimeout(function(){$("#message").hide();}, 2000);
						}else if(data === "user_err"){
							$("#message p").text("登录失败，找不到用户名");
							$("#message").show();
							setTimeout(function(){$("#message").hide();}, 2000);
						}
					},
					error: function(){
						$("#message p").text("登录失败，出现错误");
						$("#message p").show();
						setTimeout(function(){$("#message p").hide();}, 2000);
					}
				});
		}
	});
});