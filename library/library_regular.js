
$(function() {
	$("#bookcard-chb").click(function() {
		if (this.checked) {
			$("#bookcard-chb").attr("checked",true);
			$("body").addClass("bookcard-listmode");
			$("body").removeClass("bookcard-gridmode");
		} else {
			$("#bookcard-chb").attr("checked",false);
			$("body").addClass("bookcard-gridmode");
			$("body").removeClass("bookcard-listmode");
		}
	})
})
function text_print (str){
	document.write (str);
}
function lib_footer_notice() {
	text_print("<br>云野图书馆，让每一个人都能自由地阅读！<br>欢迎提供更多文章！");
}
function lib_sidebox_goodworks() {
	text_print('<a target="_blank" href="514875312.html">《迷茫都市》兔子头，2020-02-03，完结</a><br><a target="_blank" href="115237465.html">《早知如此，一定当初》作者不详，时间不详，完结</a><br><a target="_blank" href="113925754.html">《韵狐之歌》作者不详，时间不详，完结</a><br><a target="_blank" href="114865473.html">《景阳冈武二娘打虎》巴黎圣母院敲钟，时间不详，完结</a><br>')
}
function lib_pabbs_LICENSE_pmcl() {
	text_print('<a target="_blank" href="http://parea.great-site.net/parea/137/pmcl/">《云之境内容共享协议》</a>')
}