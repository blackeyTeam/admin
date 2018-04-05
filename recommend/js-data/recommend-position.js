var recommendData = {
	save:function(data,callback){
		$.getJSON("/server/recommend/admin/recommend/position/save.json",data,function(json){
			callback(json);
		});
	},
	detail:function(id,callback){
		$.getJSON("/server/recommend/admin/recommend/position/detail/"+id+".json",function(json){
			callback(json)
		});
	},
	delete:function(id,callback){
		$.post("/server/recommend/admin/recommend/position/delete.json",{id:id},function(){
			callback();
		});
	}
};