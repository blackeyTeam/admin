var vendorData={
	pagelist:function(data,callback){
		$.getJSON("/server/activity/page",data,function(json){
			callback(json);
		});
	},

	delVendorInfo:function(id,callback){
		$.getJSON("/server/commerce/admin/user/vendor/remove.json",{id:id},function(){
			callback();
		});
	},
	detail:function(id,callback){
		$.getJSON("/server/commerce/admin/user/vendor/detail/" + id + ".json", function(json) {
	        callback(json);
	    });
	},
	open:function(id,data,callback){
		$.post("/server/commerce/admin/user/vendor/"+id+"/account/bind.json",data,function(json){
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

};