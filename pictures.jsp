<%@ page contentType="text/html; charset=utf-8" language="java" import="java.sql.*" errorPage="" %>
<!doctype html>
<html>
	<head>
		<meta charset="utf-8">
		<link rel="stylesheet" href="pics.css" media="screen">
		<script src="jquery-3.3.1.js"></script>
		<script src="main.js" type="text/javascript"></script>
		<title>初一九班-照片墙</title>
	</head>
		<div id="header">
			<span id="head_title">照片墙</span>
			<div id="head_menu_top">
				<span id="head_menu_img"><img src="face/face.png" alt="face"></span>
				<span id="head_menu_expand"></span>
			</div>
			<div id="head_menu_body" style="display:none">
				<span id="head_menu_body_top"></span>
				<span id="head_menu_body_top_small"></span>
				<div id="head_menu_items">
					<div class="head_menu_item">
						<a href="javascript:;">Sign in</a>
					</div>
				</div>
			</div>
		</div>
		<div id="search">
			<span>时间：</span>
			<select id="search_filter_type">
				<option id="srh_time_none">无要求</option>
				<option id="srh_time_week">一周内</option>
				<option id="srh_time_month">一月内</option>
				<option id="srh_time_year">一年内</option>
				<option id="srh_time_spec">指定...</option>
			</select>
			<span>发布人</span>
			<input type="text" id="srh_sender" />
		</div>
	<body>
	</body>
</html>