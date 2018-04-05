var areaData = {
		AreaDetail:function(id,callback){
		$.getJSON("/server/commodity/admin/basic/location/detail/"+id+".json",function(json){
			callback(json);
		});
	}
};