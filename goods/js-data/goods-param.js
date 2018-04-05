var paramData = {
	list:function(data,callback){
		$.getJSON("/server/commodity/admin/basic/param/list.json",data,function(json){
			callback(json);
		});
	},
	detail:function(id,callback){
		$.getJSON("/server/commodity/admin/basic/param/detail/"+id+".json",function(json){
			callback(json);
		})
	},
	delete:function(id,callback){
		$.post("/server/commodity/admin/basic/param/delete.json",{id:id},function(){
			callback();
		});
	}
};