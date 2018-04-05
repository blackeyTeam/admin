var infoData = {
	pagelist:function(data,callback){
		$.getJSON("/server/commodity/admin/goods/info/pagelist.json",data,function(json){
			callback(json);
		});
	},
	delete:function(data,callback){
		jQuery.ajaxSettings.traditional = true;
		$.post("/server/commodity/admin/goods/info/batch/delete.json",data,function(){
			callback(json);
		});
	},
	detail:function(id,callback){
		$.getJSON("/server/commodity/admin/goods/info/detail/"+id+".json",function(json){
			callback(json);
		});
	},
	audit:function(data,callback){
		$.post("/server/commodity/admin/goods/info/audit.json",data,function(json){
			callback(json);
		});
	}
};