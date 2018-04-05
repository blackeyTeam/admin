var paramView = {
	listParams:function(json){
		var list = {};
		list.content = json;
		var tpl = [
			'{@each content as it,k}',
			'<tr class="gradeX">',
                '<td>',
                    '<div class="i-checks">',
                        '<label>',
                            '<input type="checkbox" class="chk" value="${it.id}" name="a"> <i></i> </label>',
                    '</div>',
                '</td>',
                '<td>${parseInt(k)+1}</td>',
                '<td class="center">${it.categoryBo.name}</td>',
                '<td class="center">${it.name}(${it.nameEn})</td>',
                '<td class="center">${it.auditStatus.name}</td>',
                '<td>',
                    '<a data-toggle="modal" href="#modal-area-edit" class="btn btn-sm btn-success btn-circle add-param-show" id="${it.id}" title="编辑"><i class="fa fa-edit"></i></a>',
                    '<a href="javascript:;" class="btn-goods-param-del btn btn-sm btn-warning btn-circle" title="删除" id="${it.id}"><i class="fa fa-trash"></i></a>',
                '</td>',
            '</tr>',
            '{@/each}',
		].join('\n');
		$('#param-list').html(juicer(tpl,list));
		$('.i-checks').iCheck({
	        checkboxClass: 'icheckbox_square-green',
	        radioClass: 'iradio_square-green',
	    });
	},
	addInput:function(){
		$("#admin").append(
			"<dt>"+
	            "<label>参数值<code>*</code></label>"+
	        "</dt>"+
	        "<dd>"+
	            "<div class='display-inline input-md'>"+
	                "<input type='text' id='' name='paramv' class='form-control'>"+
	            "</div>"+
	        "</dd>");
	},
	editParam:function(json){
		$("#param-name").val(json.name);
		$("#nameEn").val(json.nameEn);
		$("#paramId").val(json.id);
		var list = {};
		list.values = json.values;
		var tpl = [
			'{@each values as it,k}',
			'<dt>',
            '<label>参数值<code>*</code></label>',
        '</dt>',
        '<dd>',
            '<div class="display-inline input-md">',
                '<input type="text" name="paramv" id="${it.id}" value="${it.value}" class="form-control">',
            '</div>',
            '<button type="button" id="${it.id}" class="paramval-del" >清除</button>',
        '</dd>',
            '{@/each}',
		].join('\n');
		$('#admin').html(juicer(tpl,list));
	}
};