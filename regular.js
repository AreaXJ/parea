$(function() {
	$(window).scroll(function() {//为页面添加页面滚动监听事件
		var wst = $(window).scrollTop() //滚动条距离顶端值
		console.log("滚动条距离顶端值:" + wst)
		console.log("section0距离顶端值:" + $("#section0").offset().top);
		var HeaderShowOffsetTop = $("#section0").offset().top;
		var condition = HeaderShowOffsetTop <= wst;
		if (condition) { //判断滚动条位置
			$('#FlexHeader').removeClass("flex-header-hide");//清除c类
		}else{
			$("#FlexHeader").addClass("flex-header-hide"); //给header加c类
		}
	})
});
var pa = {};
function text_print (str){
	document.write (str);
}
function connect_way (str){
	switch (str){
	case "资源库_提供资源":
		text_print("<font color=#ff0000;>error: no data<br></font>");
		break;
	case "资源库_资源纠错/换源":
		text_print("<font color=#ff0000;>error: no data<br></font>");
		break;
	default:
		text_print("<font color=#ff0000;>error: unknown str input<br></font>");
	}
}
function footer_notice() {
	text_print("愿为一片净土");
}
function footer_links() {
	text_print("<a href='https://pixiv.net'>Pixiv</a><br><a href='https://www.writing.com'>writing.com</a><br><a href='http://parea.great-site.net'>云之境</a><br>");
}
function sidebox_links() {
	text_print("<p class='main-sidebox-section-text'><a href='https://pixiv.net'>Pixiv</a></p><p class='main-sidebox-section-text'><a href='https://www.writing.com'>writing.com</a></p><p class='main-sidebox-section-text'><a href='http://parea.great-site.net'>云之境</a></p>");
}
function copyright() {
	text_print("Copyright © 2022-2023 云野.All Rights Reserved.<br>Copyright © 2022-2023 Pregantain All Group.All rights reserved.<br>云野2022-2023版权所有。保留所有权利。")
}
//Library
function lib_booksnum() {
	text_print("38");
}
