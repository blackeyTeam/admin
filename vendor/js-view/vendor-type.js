var typeView = {
	fillTypeList:function(json){
		var tpl = [
			'{@each content as it ,k}',
				'<tr class="gradeX">',
                    '<td>${it.name}</td>',
                    '<td>${it.code}</td>',
                    '<td class="center">',
                        '<a href="javascript:;" class="btn-vendor-type-edit btn btn-success btn-circle" title="编辑" id="${it.id}"><i class="fa fa-edit"></i></a>',
                        '<a href="javascript:;" class=" btn-vendor-type-remove btn btn-warning btn-circle" title="删除" id="${it.id}"><i class="fa fa-trash"></i></a>',
                    '</td>',
                '</tr>',
			'{@/each}',
		].join('\n');
		$('#vendor-type-list').html(juicer(tpl,json));
	},
	typeDetail:function(json){
		$('#edit-type-id').val(json.id);
		$('#edit-type-name').val(json.name);
		$('#edit-type-code').val(json.code);
	}
};