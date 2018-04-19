var adminData = {
	pagelist:function(data,callback){
		 $.getJSON("/server/business/page",data,function(json){
            callback(json);
        });
	} ,
	save:function(data,callback){
		$.post("/server/business/save",data,function(json){
			callback(json);
		});
	},
	change:function(data,callback){
		$.post("/server/user/admin/account/set/newpassword.json",data,function(json){
			callback(json);
		});
	},
	open:function(data,callback){
		$.post("/server/auth/admin/admin/account/bind.json",data,function(json){
			callback(json);
		});
	},
	detail:function(id,callback){
		$.getJSON("/server/auth/admin/admin/detail/" + id + ".json", function(json) {
	        callback(json);
	    });
	},		
	validateType:function(inputVal,callback){
		var rtn ;
		var reg_email = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
		if(!reg_email.test(inputVal)){
			var reg_mobile = /(^1[3|4|5|7|8][0-9]{9}$)/;
			if(!reg_mobile.test(inputVal)){
				rtn = "error";
			}else{
				rtn = "mobile";
			}
		}else{
			rtn = "email";
		}
		callback(rtn);
	}

}
