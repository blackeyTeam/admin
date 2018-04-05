var detailData = {
	detail:function(id,callback){
		$.getJSON("/server/shoporders/admin/orders/detail/"+id+".json",function(json){
			callback(json);
		});
	}
};