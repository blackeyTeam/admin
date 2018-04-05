var typeData = {
	list:function(callback){
		$.getJSON("/server/commodity/admin/vendor/type/list.json",function(json){
			var list = {};
			list.content = json;
			callback(list);
		});
	},
	save:function(data,callback){
		$.post("/server/commodity/admin/vendor/type/save.json",data,function(json){
			callback(json);
		});
	},
	detail:function(id,callback){
		$.getJSON("/server/commodity/admin/vendor/type/detail/"+id+".json",function(json){
			callback(json);
		});
	},
	delete:function(id,callback){
		$.post("/server/commodity/admin/vendor/type/delete.json",{id:id},function(){
			callback();
		});
	}
};