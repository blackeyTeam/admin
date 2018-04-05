var goodsPicData = {
	list:function(data,callback){
		$.getJSON("/server/commodity/admin/goods/pic/pagelist.json",data,function(json){
			callback(json);
		});
	},
	deleted:function(id,callback){
		$.getJSON("/server/commodity/admin/goods/pic/delete.json",{id:id},function(){
			callback();
		});
	}
};