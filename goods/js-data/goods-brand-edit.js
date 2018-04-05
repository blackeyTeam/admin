var editData = {
	save:function(data,callback){
		$.post("/server/commodity/admin/basic/brand/save.json",data,function(json){
			callback(json);
		});
	},
	detail:function(id,callback){
		$.getJSON("/server/commodity/admin/basic/brand/detail/"+id+".json",function(json){
			callback(json);
		});
	}
};