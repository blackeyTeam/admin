var categoryData = {
	save:function(data,callback){
		$.post("/server/commodity/admin/system/category/save.json",data,function(json){
			callback(json);
		});
	},
	detail:function(id,callback){
		$.getJSON("/server/commodity/admin/system/category/detail/"+id+".json",function(json){
			callback(json);
		});
	},
	delete:function(id,callback){
		jQuery.ajaxSettings.traditional = true;
		$.post("/server/commodity/admin/system/category/batch/delete.json",{ids:id},function(){
			callback();
		});
	},
	trans:function(data,callback){
		jQuery.ajaxSettings.traditional = true;
		$.post("/server/commodity/admin/system/category/trans.json",data,function(json){
			callback(json);
		});
	}
};