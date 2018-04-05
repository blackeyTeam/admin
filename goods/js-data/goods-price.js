var infoData = {
	pagelist:function(data,callback){
		$.getJSON("/server/commodity/admin/goods/info/pagelist.json",data,function(json){
			callback(json);
		});
	}
}