var orderData = {
	pagelist:function(data,callback){
		$.getJSON("/server/shoporders/admin/orders/page.json",data,function(json){
			callback(json);
		});
	},
	itemList:function(orderId,callback){
		$.getJSON("/server/shoporders/admin/orders/"+orderId+"/item/list.json",function(json){
			callback(json);
		});
	},
	statisAmount:function(callback){
		$.getJSON("/server/shoporders/admin/orders/statis/amount.json",function(json){
			callback(json);
		});
	}
};