var roleView = {
	fillList:function(json){
		var $list = $("#role-list");
		var list = {};
		list.content = json;
        var tpl = [
        	'{@each content as it,k}',
        		'<tr>',
                    '<td>${parseInt(k)+1}</td>',
                    '<td><span class="line">${it.roleName}</span></td>',
                    '<td class="text-navy">${it.memberCount}</td>',
                    '<td>',
                        '<span class="btn btn-primary btn-circle btn-role-edit" title="编辑" id="${it.id}"><i class="fa fa-edit"></i></span>',
                        '<a href="role-members.html?id=${it.id}" class="btn btn-success btn-circle btn-role-member-edit" title="成员管理"><i class="fa fa-users"></i></a>',
                        '<a href="role-edit.html?id=${it.id}" class="btn btn-info btn-circle btn-role-setting" title="权限设置"><i class="fa fa-sitemap"></i></a>',
                        '{@if it.memberCount==0}',
                        	'<a href="javascript:;" class="btn btn-warning btn-circle btn-role-del" title="删除" id="${it.id}"><i class="fa fa-trash"></i></a>',
                        '{@/if}',
                    '</td>',
                '</tr>',
        	'{@/each}',
        ].join('\n');
        $list.html(juicer(tpl,list));
	},
	detail:function(json){
		$('#edit-role-id').val(json.id);
		$('#edit-roleName').val(json.roleName);
		$('#level-'+json.level.value).iCheck('check');
		$('#modal-role-edit').modal('show');
	},
	error:function(id,json){
		$('#'+id).html(json.message);
	}
}