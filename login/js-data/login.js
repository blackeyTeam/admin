var loginData = {
	login:function(data,callback){
		 $.getJSON("/server/user/portal/account/login.json",data,function(json){
            callback(json);
        });
	},
	security:function(callback){
		$.post("/server/auth/admin/security/role/current/save.json",function(json){
           callback(json);
        });
	},
	setPassword:function(data,callback){
		$.post("/server/user/portal/account/set/password.json",data,function(json){
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
	},
	activeAcc:function(data,callback){
		$.post("/server/user/portal/account/active.json",data,function(json){
			callback(json);
		});
	},
	sendCode:function(data,callback){
		$.post("/server/user/portal/account/send/authcode.json",data,function(json){
			callback(json);
		});
	}
}