var areaView = {
	listLocationNode:function(json){
		var list = {};
		list.content = json;
		var tpl = [
			'{@each content as it,k}',
			'<tr class="gradeX">',
                '<td>',
                    '<div class="i-checks">',
                        '<label>',
                        '<input type="checkbox" class="chk" value="option1" name="a" id="${it.id}"> <i></i> </label>',
                    '</div>',
                '</td>',
                '<td>${it.name}</td>',
                '<td class="center">${it.mark}</td>',
                '<td class="center">${it.description}</td>',
                '<td class="center">${it.width}</td>',
                '<td>${it.height}</td>',
                '<td>',
                '<a  href="javascript:;" class="btn btn-sm btn-success btn-circle btn-recommend-edit" title="编辑" id="${it.id}"><i class="fa fa-edit"></i></a>',
                '<a href="javascript:;" class="btn-recommend-del btn btn-sm btn-warning btn-circle" title="删除" id="${it.id}"><i class="fa fa-trash"></i></a>',
                '</td>',
            '</tr>',
            '{@/each}',
		].join('\n');
		$('#recommend-list').html(juicer(tpl,list));
//		$('.i-checks').iCheck({
//	        checkboxClass: 'icheckbox_square-green',
//	        radioClass: 'iradio_square-green',
//	    });
	},
	edit:function(json){
		$("#recommend_id").val(json.id);
		$("#categoryName").val(json.name);
		$("#recommend-width").val(json.width);
		$("#recommend-height").val(json.height);
		$("#recommend-description").val(json.description);
		$("#recommend-mark").val(json.mark);
		$("#parentId").val("");
	}
};