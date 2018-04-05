var roleData = {
	list:function(callback){
		$.getJSON("/server/auth/admin/role/list.json",function(json){
			callback(json);
		});
	},
	save:function(data,callback){
		$.post("/server/auth/admin/role/save.json",data,function(json){
			callback(json);
		});
	},
	detail:function(id,callback){
		$.getJSON("/server/auth/admin/role/detail/"+id+".json",function(json){
			callback(json);
		});
	},
	delete:function(id,callback){
		$.post("/server/auth/admin/role/delete.json",{id:id},function(){
			callback();
		});
	},
	onset:function(callback){
		$.post("/server/auth/admin/security/role/rule/reset.json",function(json){
			callback(json);
		});
	}

}