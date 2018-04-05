var shopInfoData={
	pagelist:function(data,callback){
		$.getJSON("/server/commodity/admin/shop/info/pagelist.json",data,function(json){
			callback(json);
		});
	},
	delShopInfo:function(id,callback){
		$.getJSON("/server/commodity/admin/shop/info/delete.json",{id:id},function(){
			callback();
		});
	}
}