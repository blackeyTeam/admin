var freightRateData={
		pageList:function(data,callback){
			$.getJSON("/server/logistics/admin/freight/page.json",data,function(json){
				callback(json);
			});
		},
		save:function(data,callback){
			$.getJSON("/server/logistics/admin/freight/save.json",data,function(json){
				callback(json);
			});
		}
};