var addressData={
		pageList:function(data,callback){
			$.getJSON("/server/logistics/admin/address/page.json",data,function(json){
				callback(json);
			});
		},
		save:function(data,callback){
			$.getJSON("/server/logistics/admin/address/save.json",data,function(json){
				callback(json);
			});
		}
};