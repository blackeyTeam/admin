var roleEditData = {
	ModuleList:function(callback){
		$.getJSON("/server/auth/admin/module/list.json",function(json){
			callback(json);
		});
	},
	AccessList:function(id,callback){
		$.getJSON("/server/auth/admin/role/access/list.json",{rid:id},function(json){
			callback(json);
		});
	},
	RoleList:function(callback){
		$.getJSON("/server/auth/admin/role/list.json",function(json){
			callback(json);
		});
	},
	RoleEdit:function(data,callback){
		jQuery.ajaxSettings.traditional = true;
		$.post("/server/auth/admin/role/access/save.json",data,function(json){
			callback(json);
		});
	},
	RoleDetail:function(id,callback){
		$.getJSON("/server/auth/admin/role/detail/"+id+".json",function(json){
			callback(json);
		});
	}
}