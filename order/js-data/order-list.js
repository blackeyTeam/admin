var ajax = {
	page:function(data,callback){
		$.getJSON("/server/record/list",data,function(json){
			callback(json);
		});
	}
};