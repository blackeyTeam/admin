var editData = {
	detail:function(id,callback){
		$.getJSON("/server/commodity/admin/goods/info/detail/"+id+".json",function(json){
			callback(json);
		});
	},
	param:function(data,callback){
		 $.getJSON("/server/commodity/admin/basic/param/list.json",data,function(json){
		 	callback(json);
		 });
	    
	},
	shoplist:function(data,callback){
		$.getJSON("/server/commodity/admin/shop/info/pagelist.json",data,function(json){
			callback(json);
		});
	},
	save:function(data,callback){
		$.post("/server/commodity/admin/goods/info/save.json",data,function(json){
			callback(json);
		});
	}
};