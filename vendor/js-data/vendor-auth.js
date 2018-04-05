var vendorData={
	pagelist:function(data,callback){
		$.getJSON("/server/commerce/admin/user/vendor/cert/page.json",data,function(json){
			callback(json);
		});
	},

	delVendorInfo:function(id,callback){
		$.getJSON("/server/commodity/admin/vendor/info/delete.json",{id:id},function(){
			callback();
		});
	}
};