var brandData = {
	pagelist:function(data,callback){
		$.getJSON("/server/commodity/admin/basic/brand/pagelist.json",data,function(json){
			callback(json);
		});
	},
	delete:function(id,callback){
		$.post("/server/commodity/admin/basic/brand/delete.json",{id:id},function(json){
			callback(json);
		});
	}
};