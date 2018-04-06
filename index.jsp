<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>初一九班官网</title>
		<script src="jquery-3.3.1.js"></script>
		<script src="main.js" type="text/javascript"></script>
		<link rel="stylesheet" href="main.css" media="screen">
	</head>
	<body>
		<div id="message" style="display: none">
			<p></p>
		</div>
		<div id="login" style="display: none">
			<div class="title">
				<p>登录</p>
				<a id="login_close"><img src="res/close.png"></a>
			</div>
			<div class="main" id="login_main">
				<h1>欢迎来到初一九班官网</h1>
				<table cellspacing="20">
					<tr>
						<td><p>姓名：</p></td>
						<td><input type="text" id="login_username" class="login_txt"/></td>
					</tr>
					<tr>
						<td><p>密码：</p></td>
						<td><input type="password" id="login_password" class="login_txt"/></td>
					</tr>
				<tr>
					<td><input type="submit" value="登录" id="login_done"></td>
					<td>
						<input type="checkbox" value="自动登录"/>自动登录
						<a href="accounts.jsp?from=password">找回密码</a>
					</td>
				</tr>
				</table>
			</div>
		</div>
		<div id="header">
				<div id="head_title">
					<span id="head_title1">初一九班</span>
					<span id="head_title2">Class Nine, Junior 1</span>
				</div>
				<div id="head_menu_top">
					<span id="head_menu_img"><img src="face/face.png" alt="face"></span>
					<span id="head_menu_expand"></span>
				</div>
				<div id="head_menu_body" style="display:none">
					<span id="head_menu_body_top"></span>
					<span id="head_menu_body_top_small"></span>
					<div id="head_menu_items">
						<div class="head_menu_item">
							<a id="menu_item1">登录</a>
						</div>
					</div>
				</div>
			</div>
		<div id="wrapper">
			<div id="events">
				<div class="event_item" id="event1">
					<img src="img/event1.png" alt="event 1"/>
					<div class="event_text">
						<p class="event_text_text">An event test</p>
					</div>
				</div>
				<div class="event_item" id="event2">
					<img src="img/event1.png" alt="event 2"/>
					<div class="event_text">
						<p class="event_text_text">Event test no.2</p>
					</div>
				</div>
				<div id="event_controls">
					<span class="event_controls_item">1</span>
					<span class="event_controls_item">2</span>
				</div>
			</div>
			<div id="pictures">
				<div id="pic_title" class="title">
					<p>照片墙</p>
					<a href="pictures.jsp">更多&gt;&gt;</a>
				</div>
				<div id="pic_main" class="main">
					<%
					   for(int i = 0; i < 5; i++){
					%>
					<div class="pic_item" id="pic1">
						<img src="img/pic1.png">
						<div class="pic_mask" style="display: none; top: -100%">
							<span>Picture wall, pic No.1</span>
							<a href="pictures/1.jsp">See more>></a>
						</div>
					</div>
					<%}%>
				</div>
			</div>
			<div id="row4">
				<div id="ann">
					<div id="ann_title" class="title">
						<p>通知</p>
						<a href="announcements.html">更多&gt;&gt;</a>
					</div>
					<div id="ann_main" class="main">
					</div>
				</div>
				<div id="intro">
					<div id="intro_title" class="title">
						<p>班级简介</p>
					</div>
					<div id="intro_main" class="main">
					</div>
				</div>
			</div>
			<div id="resources">
				<div id="res_title" class="title">
					<p>作品分享</p>
					<a href="resources.html">更多&gt;&gt;</a>
				</div>
				<div id="res_main" class="main">
				</div>
			</div>
		</div>
	</body>
</html>