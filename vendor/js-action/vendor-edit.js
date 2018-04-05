$(function($){
	$('body').on('click', '#next-with', function(){
		var type= $('input:radio[name="a"]:checked').val();
		var typeId=$('input:radio[name="a"]:checked').attr('id');
		if(type==null){
			showMsgPane("请勾选身份");
			return;
		}
		window.location.href="vendor-edit-step1.html?type="+type+"&typeId="+typeId+"&id="+getUrlParam('id');
	});
	var id = getUrlParam('id');
	if (id != null && id != "") {
		shop_user_type();
	} else {
		shop_user_type();
	}	
	// shop_user_type();
});

function shop_user_type(){
	var url = "/server/commodity/admin/vendor/type/list.json";
	$.post(url, function(json) {
		for (var i = 0; i < json.length; i++) {
				$("#user-type").append(
					"<div class='i-checks'>"+
                        "<label>"+
                             "<input type='radio' value='"+json[i].code+"' id='"+json[i].id+"' name='a' > <i></i>&nbsp;&nbsp;"+json[i].name+" </label>"+
                     "</div>"
				);
		}
		$('.i-checks').iCheck({//append之后在加载样式
			radioClass: 'iradio_square-green'
	    });
		$("input[value='"+getUrlParam('userType')+"']").iCheck("check");
	});
	
}

function shop_user_type1(){
	var url = "/server/commodity/admin/vendor/type/list.json";
	$.post(url, function(json) {
		for (var i = 0; i < json.length; i++) {
				$("#user-type").append(
					"<div class='i-checks'>"+
                        "<label>"+
                             "<input type='radio' value='"+json[i].code+"' id='"+json[i].id+"' name='a' disabled/> <i></i>&nbsp;&nbsp;"+json[i].name+" </label>"+
                     "</div>"
				);
		}
		$('.i-checks').iCheck({//append之后在加载样式
			radioClass: 'iradio_square-green'
	    });
		$("input[value='"+getUrlParam('userType')+"']").iCheck("check");
	});
	
}