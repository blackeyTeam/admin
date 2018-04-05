var shopsClassData = {
	save:function(data,callback){
		$.getJSON("/server/commodity/admin/shop/category/save.json",data,function(json){
			callback(json);
		});
	},
	detail:function(id,callback){
		$.getJSON("/server/commodity/admin/shop/category/detail/"+id+".json",function(json){
			callback(json)
		});
	},
	delete:function(id,callback){
		$.post("/server/commodity/admin/shop/category/delete.json",{id:id},function(){
			callback();
		});
	}
};