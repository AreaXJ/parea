function text_print (str){
	document.write (str);
}
function bookname(booknum){
	text_print("《");
	var booknum1=bookname/10000000;
	switch (booknum){
	/*case "01000000":
		text_print("1");
		break;
		*/
	case "4":
		text_print("意阁")
	};
	text_print("》");
}
/*
function bookname_fr(booknum){
}*/
function bookname_with_num(booknum){
	text_print("云野书号:[");
	text_print(booknum);
	text_print("]书名:")
	bookname(booknum);
}
function category(booknum){
	var books=new array();

}
function check_bnum(bnum) {
	if (Math.trunc (bnum/100000000)>4) {
		return false
	} else {
		bnum = bnum-Math.trunc (bnum/100000000)*100000000
		if (Math.trunc (bnum/10000000)>6) {
			return false
		} else {
			return true
		}
	}
}