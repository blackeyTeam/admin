var memberData = {
	RoleList:function(callback){
		$.getJSON("/server/auth/admin/role/list.json",function(json){
			callback(json);
		});
	},
	RoleDetail:function(id,callback){
		$.getJSON("/server/auth/admin/role/detail/"+id+".json",function(json){
			callback(json);
		});
	},
	RoleMemberList:function(id,callback){
		$.getJSON("/server/auth/admin/role/member/list.json",{rid:id},function(json){
			var list = {};
			list.content = json;
			callback(list);
		});
	},
	DeleteMember:function(data,callback){
		jQuery.ajaxSettings.traditional = true;
		$.post("/server/auth/admin/role/member/remove.json",data,function(json){
			callback(json);
		});
	},
	TransMember:function(data,callback){
		jQuery.ajaxSettings.traditional = true;
		$.post("/server/auth/admin/role/member/move.json",data,function(json){
			callback(json);
		});
	},
	AdminList:function(data,callback){
		$.getJSON("/server/auth/admin/admin/page.json",data,function(json){
			callback(json);
		});
	},
	AddMember:function(data,callback){
		jQuery.ajaxSettings.traditional = true;
		$.post("/server/auth/admin/role/member/save.json",data,function(json){
			callback(json);
		});
	}
};