var categoryView = {
	fillCategoryList:function(json){
		var list = {};
		list.content = json;
		var tpl = [
			'{@each content as it ,k}',
				'<tr class="gradeX">',
                    '<td>',
                        '<div class="i-checks">',
                            '<label>',
                                '<input type="checkbox" class="chk" value="option1" name="a" id="${it.id}"> <i></i> </label>',
                        '</div>',
                    '</td>',
                    '<td>${parseInt(k)+1}</td>',
                    '<td class="center">${it.name}</td>',
                    '<td class="center">${it.auditStatus.name}</td>',
                    '<td>',
                        '<a  href="javascript:;" class="btn btn-sm btn-success btn-circle btn-shops-classify-edit" title="编辑" id="${it.id}"><i class="fa fa-edit"></i></a>',
                        '<a href="javascript:;" class="btn-shops-classify-del btn btn-sm btn-warning btn-circle" title="删除" id="${it.id}"><i class="fa fa-trash"></i></a>',
                    '</td>',
                '</tr>',
			'{@/each}',
		].join('\n');
		$('#syskc-tree-list').html(juicer(tpl,list));
		$('.i-checks').iCheck({
	        checkboxClass: 'icheckbox_square-green',
	        radioClass: 'iradio_square-green',
	    });
	},
	edit:function(json){
		$("#categoryId").val(json.id);
		$("#categoryName").val(json.name);
		$(".nowCategoryId").val("");
	}
};