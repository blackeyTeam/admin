var infoData = {
detail:function(id,callback){
		$.getJSON("/server/commodity/admin/goods/info/detail/"+id+".json",function(json){
			callback(json);
		});
	}
}